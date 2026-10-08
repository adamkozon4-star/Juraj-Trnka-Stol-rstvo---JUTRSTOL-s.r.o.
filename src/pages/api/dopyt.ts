// Odoslanie dopytu z formulára e-mailom cez Resend (https://resend.com).
// Beží ako Vercel funkcia. Tajný kľúč RESEND_API_KEY je len v nastaveniach Vercelu.
import type { APIRoute } from 'astro';
import { site, telHref } from '../../data/site';

export const prerender = false;

const MIN_FILL_MS = 3000; // rýchlejšie odoslanie = takmer určite robot
const LIMITS = { name: 120, phone: 40, email: 160, city: 120, type: 600, message: 5000 };

type Fields = Record<keyof typeof LIMITS, string>;

const esc = (s: string) =>
  s.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]!);

const json = (body: object, status = 200) =>
  new Response(JSON.stringify(body), { status, headers: { 'Content-Type': 'application/json' } });

async function sendMail(apiKey: string, mail: Record<string, unknown>) {
  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: { Authorization: `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
    body: JSON.stringify(mail),
  });
  if (!res.ok) throw new Error(`Resend ${res.status}: ${await res.text()}`);
}

// Spoločný rám e-mailu v štýle webu
const layout = (title: string, body: string) => `<!doctype html><html lang="sk"><body style="margin:0;background:#e9e4dd;font-family:Arial,Helvetica,sans-serif;color:#1f1b18">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#e9e4dd;padding:24px 12px"><tr><td align="center">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:600px;background:#fbfaf7;border-radius:16px;overflow:hidden">
<tr><td style="background:#1f1b18;padding:22px 28px;color:#fbfaf7;font-size:20px;font-weight:bold;letter-spacing:1px">JUTRSTOL <span style="color:#dba676;font-size:12px;font-weight:normal;letter-spacing:3px">&nbsp;STOLÁRSTVO · GBELY</span></td></tr>
<tr><td style="padding:28px">
<h1 style="margin:0 0 18px;font-size:22px;color:#1f1b18">${title}</h1>
${body}
</td></tr>
<tr><td style="padding:18px 28px;border-top:1px solid #e3ddd4;font-size:12px;color:#7a7067">${site.legalName} · ${site.legalSeat} · ${site.phoneDisplay} · <a href="https://www.jutrstol.sk" style="color:#c4733a">jutrstol.sk</a></td></tr>
</table></td></tr></table></body></html>`;

const row = (label: string, value: string) =>
  value
    ? `<tr><td style="padding:8px 12px 8px 0;color:#7a7067;font-size:13px;vertical-align:top;white-space:nowrap">${label}</td><td style="padding:8px 0;font-size:15px">${value}</td></tr>`
    : '';

export const POST: APIRoute = async ({ request }) => {
  let form: FormData;
  try {
    form = await request.formData();
  } catch {
    return json({ ok: false, error: 'bad-request' }, 400);
  }

  // Ochrana proti spamu: skryté pole musí ostať prázdne a formulár sa nedá vyplniť za pár sekúnd
  const started = Number(form.get('started'));
  if (form.get('botcheck') || (started && Date.now() - started < MIN_FILL_MS)) {
    return json({ ok: true }); // robotovi tvrdíme, že prešiel
  }

  const get = (k: keyof typeof LIMITS) =>
    (k === 'type' ? form.getAll('type').map(String).join(', ') : String(form.get(k) ?? ''))
      .trim()
      .slice(0, LIMITS[k]);
  const f = Object.fromEntries((Object.keys(LIMITS) as (keyof typeof LIMITS)[]).map((k) => [k, get(k)])) as Fields;

  if (!f.name || !f.phone || !f.message || !form.get('gdpr')) {
    return json({ ok: false, error: 'missing-fields' }, 422);
  }
  const customerEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.email) ? f.email : '';

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey || !site.email) {
    console.error('Dopyt: chýba RESEND_API_KEY alebo site.email');
    return json({ ok: false, error: 'not-configured' }, 503);
  }

  const phoneHref = `tel:${f.phone.replace(/[^\d+]/g, '')}`;
  const toJuraj = layout(
    'Nový dopyt z webu',
    `<table role="presentation" cellpadding="0" cellspacing="0" style="width:100%;border-collapse:collapse">
${row('Meno', esc(f.name))}
${row('Telefón', `<a href="${esc(phoneHref)}" style="color:#c4733a;font-weight:bold">${esc(f.phone)}</a>`)}
${row('E-mail', customerEmail ? `<a href="mailto:${esc(customerEmail)}" style="color:#c4733a">${esc(customerEmail)}</a>` : '')}
${row('Mesto / obec', esc(f.city))}
${row('Čo potrebuje', esc(f.type))}
</table>
<p style="margin:22px 0 6px;color:#7a7067;font-size:13px">Popis projektu</p>
<div style="background:#fff;border:1px solid #e3ddd4;border-radius:12px;padding:16px;font-size:15px;line-height:1.55;white-space:pre-wrap">${esc(f.message)}</div>
<p style="margin:22px 0 0;font-size:13px;color:#7a7067">${customerEmail ? 'Na tento e-mail môžete rovno odpovedať – odpoveď pôjde zákazníkovi.' : 'Zákazník nevyplnil e-mail – ozvite sa telefonicky.'}</p>`,
  );

  const text =
    [
      'Nový dopyt z webu JUTRSTOL',
      `Meno: ${f.name}`,
      `Telefón: ${f.phone}`,
      customerEmail && `E-mail: ${customerEmail}`,
      f.city && `Mesto / obec: ${f.city}`,
      f.type && `Čo potrebuje: ${f.type}`,
    ]
      .filter(Boolean)
      .join('\n') + `\n\n${f.message}`;

  try {
    await sendMail(apiKey, {
      from: site.mailFrom,
      to: [site.email],
      reply_to: customerEmail || undefined,
      subject: `Nový dopyt: ${f.name}${f.type ? ` – ${f.type}` : ''}`,
      html: toJuraj,
      text,
    });
  } catch (err) {
    console.error('Dopyt: odoslanie Jurajovi zlyhalo', err);
    return json({ ok: false, error: 'send-failed' }, 502);
  }

  // Potvrdenie zákazníkovi (ak zlyhá, dopyt už odišiel – chybu len zapíšeme)
  if (customerEmail) {
    const confirm = layout(
      'Ďakujeme, dopyt sme prijali',
      `<p style="font-size:15px;line-height:1.6;margin:0 0 14px">Dobrý deň${f.name ? ` ${esc(f.name.split(' ')[0])}` : ''},</p>
<p style="font-size:15px;line-height:1.6;margin:0 0 14px">ďakujeme za váš dopyt. Juraj si ho prejde a čoskoro sa vám ozve, aby sme dohodli zameranie. Zameranie a návrh sú pri realizácii zadarmo.</p>
<p style="font-size:15px;line-height:1.6;margin:0 0 22px">Ak sa chcete ozvať skôr, zavolajte na <a href="${telHref}" style="color:#c4733a;font-weight:bold">${site.phoneDisplay}</a>.</p>
<p style="margin:0 0 6px;color:#7a7067;font-size:13px">Váš dopyt</p>
<div style="background:#fff;border:1px solid #e3ddd4;border-radius:12px;padding:16px;font-size:14px;line-height:1.55;white-space:pre-wrap;color:#4a423b">${esc(f.message)}</div>
<p style="font-size:15px;line-height:1.6;margin:22px 0 0">S pozdravom<br><b>Juraj Trnka</b><br>JUTRSTOL – stolárstvo Gbely</p>`,
    );
    try {
      await sendMail(apiKey, {
        from: site.mailFrom,
        to: [customerEmail],
        reply_to: site.email,
        subject: 'Ďakujeme za dopyt – JUTRSTOL',
        html: confirm,
        text: `Dobrý deň,\n\nďakujeme za váš dopyt. Juraj si ho prejde a čoskoro sa vám ozve. Zameranie a návrh sú pri realizácii zadarmo.\n\nTelefón: ${site.phoneDisplay}\n\nS pozdravom\nJuraj Trnka, JUTRSTOL`,
      });
    } catch (err) {
      console.error('Dopyt: potvrdenie zákazníkovi zlyhalo', err);
    }
  }

  return json({ ok: true });
};

// Iné metódy nepovoľujeme
export const ALL: APIRoute = () => json({ ok: false, error: 'method-not-allowed' }, 405);
