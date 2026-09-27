// Odosielanie formulárov cez Web3Forms. Každý <form data-web3 data-key="…"> s <p data-status>.
export function bindForms() {
  document.querySelectorAll<HTMLFormElement>('form[data-web3]').forEach((form) => {
    if (form.dataset.bound) return;
    form.dataset.bound = '1';
    const status = form.querySelector<HTMLElement>('[data-status]');

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
      const key = form.dataset.key;
      if (!key) {
        show('Formulár ešte nie je aktívny. Prosím, zavolajte nám – radi vám poradíme.', false);
        return;
      }
      const data = new FormData(form);
      const types = data.getAll('type').join(', ');
      data.delete('type');
      if (types) data.set('type', types);
      data.delete('gdpr');
      [...data.keys()].filter((k) => k.startsWith('cfg-')).forEach((k) => data.delete(k));
      data.set('access_key', key);

      const btn = form.querySelector<HTMLButtonElement>('button[type=submit]');
      if (btn) btn.disabled = true;
      try {
        const res = await fetch('https://api.web3forms.com/submit', { method: 'POST', body: data });
        const json = await res.json();
        if (!json.success) throw new Error(json.message);
        form.reset();
        show('Ďakujeme! Dopyt sme prijali a čoskoro sa vám ozveme.', true);
      } catch {
        show('Odoslanie sa nepodarilo. Skúste to znova alebo nám zavolajte.', false);
      } finally {
        if (btn) btn.disabled = false;
      }
    });
  });
}
