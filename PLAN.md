# JUTRSTOL – plán webu

Klient: **Juraj Trnka Stolárstvo – JUTRSTOL s.r.o.**
Tel.: 0905 403 248 · Adresa: Piesky 1605, 908 45 Gbely · FB: facebook.com/JuTrStol

---

## 1. Cieľ webu

1. **Dopyty.** Návštevník má čo najrýchlejšie zavolať alebo poslať dopyt.
2. **Dôvera.** Kvalitné fotky realizácií, reálne referencie a jasný postup spolupráce.
3. **Lokálne SEO.** Byť vidieť na „stolár Gbely“, „kuchynská linka Skalica / Holíč / Senica / Myjava / Hodonín (CZ)“.
4. **Konfigurátor.** Pripravené miesto (stránka aj CTA), kam ho neskôr zapojíme.

## 2. Technológia

| Časť | Voľba | Prečo |
|---|---|---|
| Framework | **Astro** + React ostrovčeky | Statický web je veľmi rýchly (Lighthouse 95+) a konfigurátor pôjde neskôr ako React komponent. |
| Štýly | Tailwind CSS | Rýchly vývoj a konzistentný dizajn. |
| Fotky | `astro:assets` → AVIF/WebP, responzívne veľkosti | Fotky realizácií budú ostré a zároveň ľahké. |
| Animácie | CSS + malé množstvo JS (scroll reveal, lightbox) | Web pôsobí prémiovo a nie je ťažký. |
| Formulár | Web3Forms / Formspree (zadarmo), neskôr vlastný endpoint | Dopyt s prílohou (foto, nákres) príde na e-mail. |
| Hosting | Vercel (ako demo) + doména `jutrstol.sk` | Zadarmo, HTTPS a automatický deploy z GitHubu. |
| Analytika | Vercel Analytics alebo Plausible (bez cookie lišty) | Klientovi ukážeš čísla, čo pomôže pri predaji mesačnej správy webu. |

## 3. Dizajnový smer

- **Pocit:** remeselný, teplý a prémiový. „Masív, presnosť, na mieru“.
- **Farby:** krémová/papierová `#F4EFE6`, tmavá orechová `#2B211B`, akcent dub/med `#B07A45`, jemná šalviová `#8A9A83`.
- **Písma:** nadpisy serif s charakterom (*Fraunces* alebo *Cormorant*), text *Inter* / *Manrope*.
- **Prvky:** veľké full-bleed fotky, editoriálny layout (asymetrická mriežka ako z Pinterestu), jemná drevená textúra/zrno, tenké linky, čísla sekcií (01, 02 …), hover zoom na fotkách.
- **Mobil first.** Väčšina ľudí príde z FB na mobile, preto bude vždy viditeľné tlačidlo „Zavolať“.

## 4. Štruktúra (sitemap)

**Jednostránkový hlavný web + podstránky pre SEO:**

1. **Úvod (hero):** veľká fotka realizácie a claim, napr. *„Nábytok na mieru z dielne v Gbeloch“*. CTA: *Nezáväzná cenová ponuka* + *Zavolať*.
2. **Čísla / dôvera:** roky praxe, počet realizácií, región, záruka.
3. **Čo vyrábame:** karty kategórií (kuchyne, skrine a šatníky, interiérové dvere, schody, kúpeľne, komerčné interiéry …). Každá vedie na podstránku.
4. **Realizácie:** galéria s filtrom podľa kategórie a lightboxom. Podstránka `/realizacie`.
5. **Ako to prebieha:** 1. Konzultácia → 2. Zameranie → 3. Návrh a cena → 4. Výroba → 5. Montáž.
6. **Konfigurátor (teaser):** „Navrhnite si skriňu online“, zatiaľ *Už čoskoro*. Neskôr stránka `/konfigurator`.
7. **O nás:** príbeh Juraja, dielňa, stroje, materiály.
8. **Referencie:** recenzie z FB/Google.
9. **Časté otázky (FAQ):** cena, termíny, doprava, materiály (hodí sa aj pre SEO).
10. **Kontakt:** formulár s prílohou, telefón, mapa, fakturačné údaje.
11. **Pätička:** IČO, DIČ, sídlo, FB, ochrana osobných údajov (GDPR).

Podstránky: `/realizacie`, `/kuchyne`, `/skrine`, `/dvere`, `/schody` (podľa toho, čo reálne robí), `/konfigurator`, `/kontakt`, `/ochrana-osobnych-udajov`.

## 5. SEO a technické veci

- Schema.org `LocalBusiness` / `FurnitureStore` (adresa, telefón, otváracie hodiny, oblasť pôsobenia).
- Meta tagy a Open Graph obrázok pre zdieľanie na FB.
- Sitemap.xml, robots.txt, pekné URL.
- Google Business Profile: prepojiť ho s webom (ak ho nemá, založiť; je to najväčší zdroj lokálnych dopytov).
- Alt texty fotiek s lokalitou („kuchynská linka na mieru – Gbely“).

## 6. Informácie, ktoré potrebujeme od klienta ✅

**Firma**
- [ ] IČO, DIČ, (IČ DPH), sídlo (ak je iné ako dielňa)
- [ ] E-mail na dopyty
- [ ] Otváracie hodiny / kedy zdvíha telefón
- [ ] Rok založenia / roky praxe
- [ ] Logo (vektor SVG/PDF, ak existuje)
- [ ] Doména: má `jutrstol.sk`? Ak nie, kúpiť.

**Služby**
- [ ] Čo presne vyrába (a čo NErobí)
- [ ] Materiály (masív, dub, lamino, dýha, MDF lak …), dodávatelia kovaní (Blum, Hettich …)
- [ ] Rádius pôsobenia (Záhorie? celé SK? aj CZ?)
- [ ] Robí aj montáž, zameranie zadarmo, dopravu?
- [ ] Orientačné ceny alebo „od“ ceny (ľudia to hľadajú najviac)
- [ ] Bežná dodacia doba
- [ ] Záruka

**Obsah**
- [ ] Fotky realizácií (ideálne originály, nie z FB, lebo FB ich komprimuje)
- [ ] Fotky dielne, strojov a Juraja/tímu (buduje dôveru)
- [ ] 3 až 6 recenzií od zákazníkov (meno + mesto + text)
- [ ] Krátky príbeh: ako začal, čím je iný

**Konfigurátor**
- [ ] Čo bude konfigurovať (skriňa? kuchyňa?), aké rozmery, materiály a cenník

## 7. Postup (míľniky)

1. **Plán a podklady.** Tento dokument. Ty dodáš fotky a klient doplní info.
2. **Kostra webu:** Astro, dizajn systém, všetky sekcie s placeholder textami.
3. **Obsah:** reálne texty, optimalizované fotky, galéria.
4. **SEO a formulár:** schema, meta tagy, funkčný formulár.
5. **Kontrola:** mobil, rýchlosť (Lighthouse), preklepy. Klient schváli.
6. **Spustenie:** doména, Vercel, Google Search Console, Google Business Profile.
7. **Konfigurátor:** zapojenie do `/konfigurator` a CTA po celom webe.

## 8. Tip pre tvoj biznis 💡

Klientovi ponúkni po spustení **mesačnú správu webu** (napr. 30 až 50 €/mes): hosting, zálohy, pridávanie nových realizácií, drobné úpravy a mesačný report návštevnosti a dopytov. To je presne ten recurring revenue, ktorý potrebuješ na cieľ 1 000 $/mes. S týmto webom ako referenciou vieš osloviť ďalšie stolárstva a remeselníkov v regióne.
