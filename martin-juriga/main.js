// Kľúč z https://web3forms.com (zadarmo). Bez neho formulár vyzve na telefonát.
const WEB3FORMS_KEY = '';
const PHONE = '+421 900 000 000';

const $ = (s, el = document) => el.querySelector(s);
const $$ = (s, el = document) => [...el.querySelectorAll(s)];

/* ---------- header a mobilné menu ---------- */
const header = $('.header');
const burger = $('.burger');
const mobileBar = $('.mobile-bar');

const onScroll = () => {
  const y = window.scrollY;
  header.classList.toggle('is-scrolled', y > 20);
  mobileBar.classList.toggle('is-visible', y > window.innerHeight * 0.7);
};
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

burger.addEventListener('click', () => {
  const open = header.classList.toggle('menu-open');
  burger.setAttribute('aria-expanded', open);
});
$$('.nav a').forEach((a) => a.addEventListener('click', () => {
  header.classList.remove('menu-open');
  burger.setAttribute('aria-expanded', 'false');
}));

/* ---------- postupné zobrazovanie ---------- */
const io = new IntersectionObserver((entries) => {
  entries.forEach((e) => {
    if (!e.isIntersecting) return;
    e.target.classList.add('is-in');
    io.unobserve(e.target);
  });
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

// súrodencom v jednej mriežke pridáme malé oneskorenie
$$('.reveal').forEach((el) => {
  const siblings = $$(':scope > .reveal', el.parentElement);
  const i = siblings.indexOf(el);
  if (i > 0) el.style.transitionDelay = `${Math.min(i, 6) * 80}ms`;
  io.observe(el);
});

/* ---------- postup: linka sa plní pri scrollovaní ---------- */
const steps = $('.steps');
const stepItems = $$('.step');
const updateSteps = () => {
  const r = steps.getBoundingClientRect();
  const vh = window.innerHeight;
  const p = Math.min(1, Math.max(0, (vh * 0.75 - r.top) / (r.height + vh * 0.25)));
  steps.style.setProperty('--p', `${12 + p * 76}%`);
  const active = Math.ceil(p * stepItems.length + 0.2);
  stepItems.forEach((s, i) => s.classList.toggle('is-active', i < active && p > 0));
};
window.addEventListener('scroll', updateSteps, { passive: true });
updateSteps();

/* ---------- kalkulačka ---------- */
const eur = (n) => `${Math.round(n).toLocaleString('sk-SK')} €`;
const years = (n) => `${n} ${n === 1 ? 'rok' : n < 5 ? 'roky' : 'rokov'}`;
const inputs = { amount: $('#amount'), years: $('#years'), rate: $('#rate') };
let shown = 0;
let raf;

const animateTo = (target) => {
  cancelAnimationFrame(raf);
  const start = shown;
  const t0 = performance.now();
  const step = (t) => {
    const k = Math.min(1, (t - t0) / 500);
    shown = start + (target - start) * (1 - Math.pow(1 - k, 3));
    $('#r-total').textContent = eur(shown);
    if (k < 1) raf = requestAnimationFrame(step);
  };
  raf = requestAnimationFrame(step);
};

const calc = () => {
  const P = +inputs.amount.value;
  const n = +inputs.years.value * 12;
  const r = +inputs.rate.value / 100 / 12;
  const total = r ? P * ((Math.pow(1 + r, n) - 1) / r) : P * n;
  const deposits = P * n;

  Object.values(inputs).forEach((el) => {
    el.style.setProperty('--fill', `${((el.value - el.min) / (el.max - el.min)) * 100}%`);
  });
  $('#o-amount').textContent = eur(P);
  $('#o-years').textContent = years(+inputs.years.value);
  $('#o-rate').textContent = `${String(inputs.rate.value).replace('.', ',')} %`;
  $('#r-dep').textContent = eur(deposits);
  $('#r-gain').textContent = eur(total - deposits);
  $('#r-bar').style.width = `${((total - deposits) / total) * 100}%`;
  animateTo(total);
};
Object.values(inputs).forEach((el) => el.addEventListener('input', calc));
calc();

/* ---------- formulár ---------- */
const form = $('#contact-form');
const status = $('.form__status', form);

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  status.className = 'form__status';

  const required = $$('[required]', form);
  let ok = true;
  required.forEach((el) => {
    const valid = el.type === 'checkbox' ? el.checked : el.value.trim() !== '';
    el.classList.toggle('is-invalid', !valid);
    if (!valid) ok = false;
  });
  if (!ok) {
    status.textContent = 'Vyplňte prosím meno, telefón a súhlas.';
    status.classList.add('err');
    return;
  }

  if (!WEB3FORMS_KEY) {
    status.textContent = `Formulár ešte nie je aktívny. Zavolajte mi prosím na ${PHONE}.`;
    status.classList.add('err');
    return;
  }

  const btn = $('button[type="submit"]', form);
  btn.disabled = true;
  status.textContent = 'Odosielam…';
  try {
    const data = Object.fromEntries(new FormData(form));
    data.access_key = WEB3FORMS_KEY;
    const res = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify(data),
    });
    const json = await res.json();
    if (!json.success) throw new Error(json.message);
    form.reset();
    status.textContent = 'Ďakujem! Ozvem sa vám do 24 hodín.';
    status.classList.add('ok');
  } catch {
    status.textContent = `Niečo sa nepodarilo. Zavolajte mi prosím na ${PHONE}.`;
    status.classList.add('err');
  } finally {
    btn.disabled = false;
  }
});
$$('input', form).forEach((el) => el.addEventListener('input', () => el.classList.remove('is-invalid')));

$('#year').textContent = new Date().getFullYear();
