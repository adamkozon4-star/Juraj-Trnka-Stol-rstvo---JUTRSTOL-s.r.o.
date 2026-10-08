// Odosielanie formulárov na /api/dopyt (Resend). Každý <form data-inquiry> s <p data-status>.
export function bindForms() {
  document.querySelectorAll<HTMLFormElement>('form[data-inquiry]').forEach((form) => {
    if (form.dataset.bound) return;
    form.dataset.bound = '1';
    const status = form.querySelector<HTMLElement>('[data-status]');
    const started = form.querySelector<HTMLInputElement>('input[name=started]');
    if (started) started.value = String(Date.now());

    const show = (msg: string, ok: boolean) => {
      if (!status) return;
      status.textContent = msg;
      status.className = `mt-4 rounded-xl px-4 py-3 text-sm ${ok ? 'bg-emerald-50 text-emerald-800' : 'bg-red-50 text-red-800'}`;
    };

    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }
      const btn = form.querySelector<HTMLButtonElement>('button[type=submit]');
      if (btn) btn.disabled = true;
      try {
        const res = await fetch(form.action, { method: 'POST', body: new FormData(form) });
        const json = (await res.json().catch(() => ({}))) as { ok?: boolean; error?: string };
        if (!res.ok || !json.ok) throw new Error(json.error ?? String(res.status));
        form.reset();
        if (started) started.value = String(Date.now());
        show('Ďakujeme! Dopyt sme prijali a čoskoro sa vám ozveme.', true);
      } catch (err) {
        const notReady = err instanceof Error && err.message === 'not-configured';
        show(
          notReady
            ? 'Formulár ešte nie je aktívny. Prosím, zavolajte nám – radi vám poradíme.'
            : 'Odoslanie sa nepodarilo. Skúste to znova alebo nám zavolajte.',
          false,
        );
      } finally {
        if (btn) btn.disabled = false;
      }
    });
  });
}
