import type { Configurator } from '../data/configurator';
import { bindForms } from './forms';

type Dim = 'width' | 'height' | 'depth';
type State = {
  width: number;
  height: number;
  depth: number;
  door: string;
  handle: string;
  decor: string;
  interiors: string[];
  extras: Set<string>;
  view: 'doors' | 'inside';
};

const DEFAULT_INTERIORS = ['tyc', 'police', 'kombi', 'zasuvky', 'tyc2', 'police'];
const PLINTH = 8; // sokel v cm
const BOARD = 1.8; // hrúbka dosky v cm

const clamp = (v: number, a: number, b: number) => Math.min(b, Math.max(a, v));
const round10 = (v: number) => Math.round(v / 10) * 10;
const fmt = (v: number) => v.toLocaleString('sk-SK').replace(/ /g, ' ');

export function sectionCount(width: number) {
  return clamp(Math.round(width / 75), 1, 6);
}

export function doorCount(s: Pick<State, 'width' | 'door'>, sections: number) {
  if (s.door === 'ziadne') return 0;
  if (s.door === 'posuvne') return Math.max(2, Math.round(s.width / 110));
  const secW = s.width / sections;
  return sections * (secW >= 55 ? 2 : 1);
}

export function estimate(cfg: Configurator, s: State) {
  const n = s.interiors.length;
  const area = (s.width * s.height) / 10000;
  const decor = cfg.decors.find((d) => d.id === s.decor)!;
  const door = cfg.doors.find((d) => d.id === s.door)!;
  const handle = cfg.handles.find((h) => h.id === s.handle)!;
  const depthK = s.depth > 60 ? 1.1 : s.depth < 45 ? 0.9 : 1;
  const doors = doorCount(s, n);
  let total = area * decor.perM2 * depthK + area * door.perM2;
  if (doors) total += doors * handle.perDoor;
  for (const id of s.interiors) total += cfg.interiors.find((x) => x.id === id)?.price ?? 0;
  for (const id of s.extras) total += cfg.extras.find((x) => x.id === id)?.price ?? 0;
  total = Math.max(total, 250);
  return { lo: round10(total * (1 - cfg.priceSpread)), hi: round10(total * (1 + cfg.priceSpread)), doors };
}

/* ---------- Nákres ---------- */

function shade(hex: string, k: number) {
  const n = parseInt(hex.slice(1), 16);
  const c = [(n >> 16) & 255, (n >> 8) & 255, n & 255].map((v) => clamp(Math.round(v * k), 0, 255));
  return `rgb(${c.join(',')})`;
}

function draw(cfg: Configurator, s: State, svg: SVGSVGElement) {
  const { width: W, height: H } = s;
  const decor = cfg.decors.find((d) => d.id === s.decor)!;
  const n = s.interiors.length;
  const padL = 34;
  const padT = 34;
  const padR = 12;
  const padB = 26;
  svg.setAttribute('viewBox', `${-padL} ${-padT} ${W + padL + padR} ${H + padT + padB}`);

  const k = Math.max(W, H) / 250; // mierka pre čiary a písmo
  const sw = 0.35 * k;
  const fs = 7.5 * k;
  const fill = decor.fill;
  const edge = decor.edge;
  const inner = shade(fill, 0.86);
  const showInside = s.view === 'inside' || s.door === 'ziadne';
  const led = s.extras.has('led');
  const out: string[] = [];

  out.push(`<defs>
    <pattern id="g-grain" width="9" height="${H}" patternUnits="userSpaceOnUse">
      <rect width="9" height="${H}" fill="${fill}"/>
      <path d="M2 0 Q3 ${H / 3} 2 ${H}" stroke="${edge}" stroke-opacity=".35" stroke-width=".35" fill="none"/>
      <path d="M6.5 0 Q5.5 ${H / 2} 6.5 ${H}" stroke="${edge}" stroke-opacity=".22" stroke-width=".3" fill="none"/>
    </pattern>
    <linearGradient id="g-led" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#ffd48a" stop-opacity=".9"/><stop offset="1" stop-color="#ffd48a" stop-opacity="0"/>
    </linearGradient>
    <filter id="g-shadow" x="-10%" y="-5%" width="120%" height="115%">
      <feDropShadow dx="0" dy="${2 * k}" stdDeviation="${3 * k}" flood-color="#1d1a17" flood-opacity=".25"/>
    </filter>
  </defs>`);

  const face = decor.grain ? 'url(#g-grain)' : fill;

  // podlaha
  out.push(`<line x1="${-padL + 4}" x2="${W + padR - 2}" y1="${H}" y2="${H}" stroke="#1d1a17" stroke-opacity=".25" stroke-width="${sw}"/>`);

  // korpus
  out.push(`<g filter="url(#g-shadow)"><rect x="0" y="0" width="${W}" height="${H}" rx="${0.6 * k}" fill="${face}" stroke="${edge}" stroke-width="${sw}"/></g>`);
  out.push(`<rect x="${BOARD}" y="${H - PLINTH}" width="${W - 2 * BOARD}" height="${PLINTH}" fill="${shade(fill, 0.78)}"/>`);

  const innerH = H - PLINTH - 2 * BOARD;
  const top = BOARD;
  const secW = (W - 2 * BOARD) / n;

  if (showInside) {
    for (let i = 0; i < n; i++) {
      const x = BOARD + i * secW;
      const x0 = x + (i === 0 ? 0 : BOARD / 2);
      const w = secW - (i === 0 ? 0 : BOARD / 2) - (i === n - 1 ? 0 : BOARD / 2);
      out.push(`<rect x="${x0}" y="${top}" width="${w}" height="${innerH}" fill="${inner}"/>`);
      if (led) out.push(`<rect x="${x0}" y="${top}" width="${w}" height="${Math.min(40, innerH / 4)}" fill="url(#g-led)"/>`);
      out.push(interior(s.interiors[i], x0, top, w, innerH, fill, edge, sw, k));
      if (i > 0) out.push(`<rect x="${x - BOARD / 2}" y="${top}" width="${BOARD}" height="${innerH}" fill="${fill}" stroke="${edge}" stroke-width="${sw * 0.6}"/>`);
      out.push(
        `<circle cx="${x0 + w / 2}" cy="${H - PLINTH / 2}" r="${3.4 * k}" fill="#1d1a17"/><text x="${x0 + w / 2}" y="${H - PLINTH / 2 + 2.6 * k}" font-size="${6.8 * k}" text-anchor="middle" fill="#dba676" font-family="Hanken Grotesk Variable, sans-serif" font-weight="700">${i + 1}</text>`,
      );
    }
  } else {
    out.push(doorsSvg(cfg, s, n, fill, edge, sw, k, face, innerH, top));
  }

  // kóty
  const dim = '#c4733a';
  const a = 2.2 * k;
  const yT = -14 * k * 0.9;
  out.push(`<g stroke="${dim}" stroke-width="${sw}" fill="none">
    <line x1="0" x2="${W}" y1="${yT}" y2="${yT}"/>
    <line x1="0" x2="0" y1="${yT - a}" y2="${-2}"/><line x1="${W}" x2="${W}" y1="${yT - a}" y2="${-2}"/>
    <path d="M${a} ${yT - a / 1.6} L0 ${yT} L${a} ${yT + a / 1.6} M${W - a} ${yT - a / 1.6} L${W} ${yT} L${W - a} ${yT + a / 1.6}"/>
  </g>`);
  out.push(label(W / 2, yT, `${W} cm`, fs, dim));
  const xL = -14 * k * 0.9;
  out.push(`<g stroke="${dim}" stroke-width="${sw}" fill="none">
    <line x1="${xL}" x2="${xL}" y1="0" y2="${H}"/>
    <line x1="${xL - a}" x2="-2" y1="0" y2="0"/><line x1="${xL - a}" x2="-2" y1="${H}" y2="${H}"/>
    <path d="M${xL - a / 1.6} ${a} L${xL} 0 L${xL + a / 1.6} ${a} M${xL - a / 1.6} ${H - a} L${xL} ${H} L${xL + a / 1.6} ${H - a}"/>
  </g>`);
  out.push(label(xL, H / 2, `${H} cm`, fs, dim, true));
  out.push(
    `<text x="${W}" y="${H + 16 * k * 0.8}" font-size="${fs * 0.9}" text-anchor="end" fill="#6d655d" font-family="Hanken Grotesk Variable, sans-serif">hĺbka ${s.depth} cm · ${n} ${n === 1 ? 'sekcia' : n < 5 ? 'sekcie' : 'sekcií'}</text>`,
  );

  svg.innerHTML = out.join('');
}

function label(x: number, y: number, text: string, fs: number, color: string, vertical = false) {
  const w = text.length * fs * 0.55 + fs;
  const h = fs * 1.6;
  const tr = vertical ? ` transform="rotate(-90 ${x} ${y})"` : '';
  return `<g${tr}><rect x="${x - w / 2}" y="${y - h / 2}" width="${w}" height="${h}" rx="${h / 2}" fill="#fff" stroke="${color}" stroke-width="${fs * 0.06}"/><text x="${x}" y="${y + fs * 0.36}" font-size="${fs}" text-anchor="middle" fill="${color}" font-weight="700" font-family="Hanken Grotesk Variable, sans-serif">${text}</text></g>`;
}

function shelf(x: number, y: number, w: number, fill: string, edge: string, sw: number) {
  return `<rect x="${x}" y="${y}" width="${w}" height="${BOARD}" fill="${fill}" stroke="${edge}" stroke-width="${sw * 0.6}"/>`;
}
function rod(x: number, y: number, w: number, k: number) {
  const hangers = Math.max(2, Math.floor(w / 9));
  let h = `<line x1="${x + 2}" x2="${x + w - 2}" y1="${y}" y2="${y}" stroke="#8d8a86" stroke-width="${1.1 * k}" stroke-linecap="round"/>`;
  for (let i = 0; i < hangers; i++) {
    const cx = x + 5 + (i * (w - 10)) / Math.max(1, hangers - 1);
    h += `<path d="M${cx} ${y} l-3.2 5 h6.4 z" fill="none" stroke="#6d655d" stroke-opacity=".6" stroke-width="${0.35 * k}"/>`;
    h += `<rect x="${cx - 3.4}" y="${y + 5}" width="6.8" height="${24 + (i % 3) * 7}" rx="1.5" fill="${['#9fb0c4', '#d9c7a8', '#8a9a83', '#c9a0a0'][i % 4]}" fill-opacity=".55"/>`;
  }
  return h;
}
function drawers(x: number, bottom: number, w: number, count: number, fill: string, edge: string, sw: number, k: number) {
  const dh = 18;
  let d = '';
  for (let i = 0; i < count; i++) {
    const y = bottom - (i + 1) * dh;
    d += `<rect x="${x + 0.4}" y="${y + 0.4}" width="${w - 0.8}" height="${dh - 0.8}" rx=".6" fill="${fill}" stroke="${edge}" stroke-width="${sw * 0.7}"/>`;
    d += `<line x1="${x + w / 2 - 5}" x2="${x + w / 2 + 5}" y1="${y + 4}" y2="${y + 4}" stroke="#1d1a17" stroke-opacity=".5" stroke-width="${0.8 * k}" stroke-linecap="round"/>`;
  }
  return { svg: d, height: count * dh };
}

function interior(id: string, x: number, top: number, w: number, h: number, fill: string, edge: string, sw: number, k: number) {
  const bottom = top + h;
  let out = '';
  const shelvesFrom = (from: number, to: number, gap = 36) => {
    let s = '';
    for (let y = to - gap; y > from + 12; y -= gap) s += shelf(x, y, w, fill, edge, sw);
    return s;
  };
  if (id === 'police') {
    out += shelvesFrom(top, bottom);
  } else if (id === 'tyc') {
    const sy = top + 34;
    out += shelf(x, sy, w, fill, edge, sw) + rod(x, sy + 9, w, k);
    out += shelf(x, bottom - 40, w, fill, edge, sw);
  } else if (id === 'tyc2') {
    const sy = top + 34;
    out += shelf(x, sy, w, fill, edge, sw) + rod(x, sy + 9, w, k);
    const mid = sy + (bottom - sy) / 2 + 6;
    out += shelf(x, mid - 6, w, fill, edge, sw) + rod(x, mid + 4, w, k);
  } else if (id === 'zasuvky') {
    const d = drawers(x, bottom, w, 3, fill, edge, sw, k);
    out += d.svg + shelf(x, bottom - d.height - BOARD, w, fill, edge, sw) + shelvesFrom(top, bottom - d.height - BOARD);
  } else if (id === 'kombi') {
    const d = drawers(x, bottom, w, 2, fill, edge, sw, k);
    const sy = top + 34;
    out += d.svg + shelf(x, bottom - d.height - BOARD, w, fill, edge, sw) + shelf(x, sy, w, fill, edge, sw) + rod(x, sy + 9, w, k);
  }
  return out;
}

function doorsSvg(cfg: Configurator, s: State, n: number, fill: string, edge: string, sw: number, k: number, face: string, innerH: number, top: number) {
  const W = s.width;
  const g = 0.35;
  const out: string[] = [];
  const handle = (x: number, y: number, h: number, side: 'l' | 'r' | 'c') => {
    if (s.handle === 'tyc') {
      const hx = side === 'l' ? x + 3.5 : side === 'r' ? x - 3.5 : x;
      return `<rect x="${hx - 0.7}" y="${y + h / 2 - 16}" width="1.4" height="32" rx=".7" fill="#3a3632"/>`;
    }
    if (s.handle === 'profil') {
      const hx = side === 'l' ? x : x - 1.2;
      return `<rect x="${hx}" y="${y}" width="1.2" height="${h}" fill="#1d1a17" fill-opacity=".85"/>`;
    }
    return '';
  };
  if (s.door === 'posuvne') {
    const count = doorCount(s, n);
    const dw = (W - 2 * BOARD) / count + 4;
    out.push(`<rect x="0" y="${top - 1}" width="${W}" height="2.2" fill="#8d8a86"/>`);
    for (let i = 0; i < count; i++) {
      const x = BOARD + i * ((W - 2 * BOARD - dw) / Math.max(1, count - 1));
      const front = i % 2 === 0;
      out.push(
        `<rect x="${x}" y="${top + 0.6}" width="${dw}" height="${innerH - 0.6}" rx=".5" fill="${face}" stroke="${edge}" stroke-width="${sw}" ${front ? 'filter="url(#g-shadow)"' : ''}/>`,
      );
      if (s.handle !== 'bez') out.push(handle(x + dw - 4, top, innerH, 'c'));
    }
    return out.join('');
  }
  const secW = (W - 2 * BOARD) / n;
  for (let i = 0; i < n; i++) {
    const x0 = BOARD + i * secW;
    const two = secW >= 55;
    const leaves = two ? 2 : 1;
    const lw = secW / leaves;
    for (let j = 0; j < leaves; j++) {
      const x = x0 + j * lw + g;
      const w = lw - 2 * g;
      out.push(`<rect x="${x}" y="${top + g}" width="${w}" height="${innerH - 2 * g}" rx=".5" fill="${face}" stroke="${edge}" stroke-width="${sw}"/>`);
      const side: 'l' | 'r' = two ? (j === 0 ? 'r' : 'l') : i % 2 === 0 ? 'r' : 'l';
      out.push(handle(side === 'r' ? x + w : x, top + g, innerH - 2 * g, side));
    }
  }
  return out.join('');
}

/* ---------- Súhrn ---------- */

function summary(cfg: Configurator, s: State) {
  const name = (list: readonly { id: string; label: string }[], id: string) => list.find((x) => x.id === id)?.label ?? id;
  const est = estimate(cfg, s);
  const lines = [
    'Skriňa na mieru – návrh z konfigurátora',
    `Rozmery: šírka ${s.width} × výška ${s.height} × hĺbka ${s.depth} cm`,
    `Dvere: ${name(cfg.doors, s.door)}${s.door !== 'ziadne' ? `, úchytky: ${name(cfg.handles, s.handle)} (${est.doors} ks dverí)` : ''}`,
    `Dekor: ${name(cfg.decors, s.decor)}`,
    `Sekcie (${s.interiors.length}): ${s.interiors.map((id, i) => `${i + 1}. ${name(cfg.interiors, id)}`).join(', ')}`,
    `Doplnky: ${[...s.extras].map((id) => name(cfg.extras, id)).join(', ') || '—'}`,
  ];
  if (cfg.showPrice) lines.push(`Orientačná cena: ${fmt(est.lo)} – ${fmt(est.hi)} ${cfg.currency} (bez montáže a dopravy)`);
  return lines.join('\n');
}

/* ---------- Inicializácia ---------- */

export function initConfigurator() {
  const root = document.getElementById('cfg');
  if (!root || root.dataset.ready) return;
  root.dataset.ready = '1';
  const cfg = JSON.parse(document.getElementById('cfg-data')!.textContent!) as Configurator;
  const svg = root.querySelector<SVGSVGElement>('#cfg-svg')!;
  const form = root.querySelector<HTMLFormElement>('#cfg-form')!;

  const s: State = {
    width: cfg.limits.width.default,
    height: cfg.limits.height.default,
    depth: cfg.limits.depth.default,
    door: cfg.doors[0].id,
    handle: cfg.handles[0].id,
    decor: cfg.decors[2].id,
    interiors: [],
    extras: new Set(cfg.extras.filter((x) => 'checked' in x && x.checked).map((x) => x.id)),
    view: 'doors',
  };

  const sectionsEl = root.querySelector<HTMLElement>('#cfg-sections')!;
  const renderSections = () => {
    const n = sectionCount(s.width);
    if (s.interiors.length !== n) {
      s.interiors = Array.from({ length: n }, (_, i) => s.interiors[i] ?? DEFAULT_INTERIORS[i % DEFAULT_INTERIORS.length]);
      sectionsEl.innerHTML = s.interiors
        .map(
          (id, i) =>
            `<label class="sec-row"><b>${i + 1}</b><span class="sr-only">Sekcia ${i + 1}</span><select id="cfg-sec-${i}" data-sec="${i}">${cfg.interiors
              .map((o) => `<option value="${o.id}"${o.id === id ? ' selected' : ''}>${o.label}</option>`)
              .join('')}</select></label>`,
        )
        .join('');
      root.querySelector('#cfg-count')!.textContent = String(n);
    }
  };

  const update = () => {
    renderSections();
    draw(cfg, s, svg);
    const est = estimate(cfg, s);
    const priceEl = root.querySelector('#cfg-price');
    if (priceEl) priceEl.textContent = `${fmt(est.lo)} – ${fmt(est.hi)} ${cfg.currency}`;
    const decor = cfg.decors.find((d) => d.id === s.decor)!;
    root.querySelector('#cfg-chips')!.innerHTML = [
      `<b>${s.width} × ${s.height} × ${s.depth}</b> cm`,
      `<b>${s.interiors.length}</b> ${s.interiors.length === 1 ? 'sekcia' : s.interiors.length < 5 ? 'sekcie' : 'sekcií'}`,
      `dekor <b>${decor.label}</b>`,
      s.door === 'ziadne' ? 'bez dverí' : `<b>${est.doors}</b> ${est.doors < 5 ? 'dvere' : 'dverí'}`,
    ]
      .map((t) => `<li>${t}</li>`)
      .join('');
    root.querySelector<HTMLElement>('#cfg-handles')!.classList.toggle('is-disabled', s.door === 'ziadne');
    root.querySelectorAll<HTMLButtonElement>('[data-view]').forEach((b) => {
      b.setAttribute('aria-selected', String(b.dataset.view === (s.door === 'ziadne' ? 'inside' : s.view)));
    });
    (root.querySelector('#cfg-summary') as HTMLInputElement).value = summary(cfg, s);
  };

  // rozmery: posuvník a číslo sa synchronizujú
  root.querySelectorAll<HTMLInputElement>('[data-dim]').forEach((el) => {
    const key = el.dataset.dim as Dim;
    const lim = cfg.limits[key];
    const set = (commit: boolean) => {
      const raw = Number(el.value);
      if (!Number.isFinite(raw)) return;
      const v = commit ? clamp(Math.round(raw / lim.step) * lim.step, lim.min, lim.max) : clamp(raw, lim.min, lim.max);
      s[key] = v;
      root.querySelectorAll<HTMLInputElement>(`[data-dim="${key}"]`).forEach((o) => {
        if (o !== el || commit) o.value = String(v);
      });
      update();
    };
    el.addEventListener('input', () => el.type === 'range' && set(true));
    el.addEventListener('change', () => set(true));
  });

  form.addEventListener('change', (e) => {
    const t = e.target as HTMLInputElement | HTMLSelectElement;
    if (t.name === 'cfg-door') s.door = t.value;
    else if (t.name === 'cfg-handle') s.handle = t.value;
    else if (t.name === 'cfg-decor') s.decor = t.value;
    else if (t.name === 'cfg-extra') (t as HTMLInputElement).checked ? s.extras.add(t.value) : s.extras.delete(t.value);
    else if ('sec' in t.dataset) s.interiors[Number(t.dataset.sec)] = t.value;
    else return;
    update();
  });

  root.querySelectorAll<HTMLButtonElement>('[data-view]').forEach((b) =>
    b.addEventListener('click', () => {
      s.view = b.dataset.view as State['view'];
      update();
    }),
  );

  // po odoslaní sa formulár vynuluje – stav načítame nanovo z ovládacích prvkov
  const readFromForm = () => {
    const val = (name: string) => form.querySelector<HTMLInputElement>(`input[name="${name}"]:checked`)?.value;
    s.door = val('cfg-door') ?? s.door;
    s.handle = val('cfg-handle') ?? s.handle;
    s.decor = val('cfg-decor') ?? s.decor;
    s.extras = new Set([...form.querySelectorAll<HTMLInputElement>('input[name="cfg-extra"]:checked')].map((i) => i.value));
    (['width', 'height', 'depth'] as Dim[]).forEach((k) => {
      s[k] = Number(form.querySelector<HTMLInputElement>(`#cfg-${k}`)!.value);
      root.querySelector<HTMLInputElement>(`#cfg-${k}-range`)!.value = String(s[k]);
    });
    s.interiors = [];
    update();
  };
  form.addEventListener('reset', () => setTimeout(readFromForm));

  update();
  bindForms();
}
