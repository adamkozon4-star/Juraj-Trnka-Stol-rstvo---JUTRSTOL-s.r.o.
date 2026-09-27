# JUTRSTOL – web stolárstva

Web pre **Juraj Trnka Stolárstvo – JUTRSTOL s.r.o.**, Gbely. Postavený na [Astro](https://astro.build) + Tailwind CSS a generuje statické stránky (rýchle, bez servera).

## Spustenie

```bash
npm install
npm run dev      # vývoj na http://localhost:4321
npm run build    # produkčný build do dist/
npm run preview  # náhľad buildu
```

## Kde sa čo upravuje

| Čo | Súbor |
|---|---|
| Telefón, adresa, IČO, e-mail, roky praxe, kľúč formulára, adresa konfigurátora | `src/data/site.ts` |
| Kategórie služieb (texty, SEO, titulná fotka) | `src/data/categories.ts` |
| Realizácie (názov, popis, fotky, `featured` = na úvode) | `src/data/projects.ts` |
| Fotky | `fotky/realizacie/<kategoria>/` (optimalizujú sa automaticky pri builde) |
| Farby a písma | `src/styles/global.css` |

**Nová realizácia:** nahraj fotky do `fotky/realizacie/...` a pridaj záznam do `src/data/projects.ts`. Stránka `/realizacie/<slug>` vznikne sama.

## Kontaktný formulár

Formulár posiela dopyty cez [Web3Forms](https://web3forms.com) (bezplatný plán). Na stránke Web3Forms zadaj e-mail klienta, získaj *Access Key* a vlož ho do `web3formsKey` v `src/data/site.ts`. Kým kľúč chýba, formulár návštevníka vyzve, aby zavolal.

## Konfigurátor

Stránka `/konfigurator` vkladá samostatnú aplikáciu konfigurátora (kuchyne, skrine a ďalší nábytok) a má prepínač na obyčajný dopyt bez konfigurátora. Úvodná stránka na ňu odkazuje zo sekcie „Online konfigurátor“.

- Adresa konfigurátora a identifikátor klienta sú v `src/data/site.ts` (`configurator.url`, `configurator.client`). Teraz je nastavené `klient=demo`, po vytvorení profilu pre JUTRSTOL ho treba zmeniť.
- Aplikácia konfigurátora musí povoliť vloženie do iného webu (nesmie posielať hlavičku `X-Frame-Options: DENY` ani `frame-ancestors` bez domény webu). Pre istotu je pri nej aj tlačidlo „Na celú obrazovku“.

## Nasadenie

Vercel → *Add New Project* → import tohto repozitára. Astro sa rozpozná automaticky, nič netreba nastavovať. Po pripojení domény uprav `site` v `astro.config.mjs` a adresu v `public/robots.txt`.

## Úpravy fotiek

`scripts/retouch.mjs` vytvára webové verzie niektorých fotiek (stmavená obrazovka TV, orezaný záber). Originály ostávajú nedotknuté.
