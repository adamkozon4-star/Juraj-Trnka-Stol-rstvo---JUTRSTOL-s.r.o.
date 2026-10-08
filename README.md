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

Formulár posiela dopyty na `/api/dopyt` (jediná serverová časť webu, Vercel funkcia cez `@astrojs/vercel`). Tá cez [Resend](https://resend.com) pošle:

- e-mail Jurajovi na `site.email` (odpoveď ide priamo zákazníkovi),
- potvrdenie zákazníkovi, ak vyplnil e-mail.

Nastavenie:

1. Odosiela sa z agentúrnej domény `send.peakstudio.sk` (overená v Resend účte Peak Studio). DNS domény jutrstol.sk sa nemení.
2. V Resend vytvoriť API kľúč a vo Verceli ho uložiť ako premennú `RESEND_API_KEY` (Settings → Environment Variables), potom nasadiť znova.
3. Odosielateľ je `site.mailFrom` v `src/data/site.ts` (musí byť na overenej doméne).

Kým kľúč chýba, formulár návštevníka vyzve, aby zavolal. Ochrana proti spamu: skryté pole a minimálny čas vyplnenia.

## Konfigurátor

Stránka `/konfigurator` vkladá 3D konfigurátor (samostatná aplikácia na stolar-konfigurator.vercel.app, profil `klient=jutrstol`). Pod ním je obyčajný dopyt (`/konfigurator#dopyt`).

- Nastavenia sú v `src/data/site.ts` → `configurator` (adresa, klient, parameter `typ` a povolené typy `kuchyna`, `satnik`).
- `/konfigurator?typ=satnik` otvorí rovno šatník (parameter ide ďalej do iframu). Bez typu sa otvorí kuchyňa.
- Web počúva správy z konfigurátora (overuje pôvod `https://stolar-konfigurator.vercel.app`):
  - `konfigurator:vyska` – iframe sa zväčší, nikdy nie pod výšku okna,
  - `konfigurator:odoslane` – zapíše konverziu (`generate_lead` pre Google Analytics, `Lead` pre Meta Pixel), ak sú na webe nasadené.
- Dopyt posiela e-mailom priamo konfigurátor, web ho nespracúva.
- Na skúšanie pridaj do adresy iframu `&demo=1`, dopyt sa vtedy naozaj neodošle.

## Nasadenie

Vercel → *Add New Project* → import tohto repozitára. Astro sa rozpozná automaticky, nič netreba nastavovať. Po pripojení domény uprav `site` v `astro.config.mjs` a adresu v `public/robots.txt`.

## Úpravy fotiek

`scripts/retouch.mjs` vytvára webové verzie niektorých fotiek (stmavená obrazovka TV, orezaný záber). Originály ostávajú nedotknuté.
