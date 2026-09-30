# Martin Juriga – web finančného poradcu

Statický web (HTML + CSS + JS), bez buildu. Stačí otvoriť `index.html` alebo nasadiť priečinok.

## Nasadenie (Vercel)
*Add New Project* → tento repozitár → **Root Directory: `martin-juriga`** → Framework: *Other* → Deploy.

## Pred spustením treba doplniť (teraz sú tam zástupné údaje)
| Čo | Kde |
|---|---|
| Telefón `+421 900 000 000` | `index.html` (kontakt, mobilná lišta, JSON-LD), `main.js` (`PHONE`) |
| E-mail `info@martinjuriga.sk` | `index.html` |
| Číslo registrácie v NBS (`000000`) a názov samostatného finančného agenta | pätička v `index.html` |
| Kľúč formulára z [web3forms.com](https://web3forms.com) | `main.js` (`WEB3FORMS_KEY`) |
| Otváracie hodiny (Po – Pi, 9:00 – 18:00), odkazy na Instagram / Facebook / LinkedIn | pätička v `index.html` |
| Adresa, IČO a názov samostatného finančného agenta | `ochrana-osobnych-udajov.html`, pätička v `index.html` |
| Sľuby „do 24 hodín“, „konzultácia zdarma“, „online aj osobne“ | overiť s Martinom |

## Kde sa čo mení
- Farby a písmo: `style.css`, sekcia `:root`
- Fotky: `img/` (`martin-1200.webp`, `martin-720.webp` = hero, `martin-portrait.webp` = O mne, `og.jpg` = náhľad pri zdieľaní)

## Referencie
Sekcia „Čo hovoria klienti“ je skrytá, kým nie sú doplnené skutočné recenzie. Doplň ich do poľa `REVIEWS` v `main.js`
(`{ text: '…', name: 'Jana K.', place: 'Žilina' }`) a sekcia sa zobrazí sama.

## Kalkulačka
Stratégie Opatrná / Vyvážená / Dynamická (3 / 5 / 7 % ročne, 30 / 60 / 90 % akcií) sú ilustračné. Hodnoty sú v `index.html` v atribútoch `data-rate` a `data-stocks`, pred spustením ich treba prebrať s Martinom.
