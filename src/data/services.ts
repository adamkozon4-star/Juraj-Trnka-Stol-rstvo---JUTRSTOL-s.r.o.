// Podrobný obsah podstránok „Čo vyrábame“ (/sluzby/<slug>) – kvôli SEO aj ľuďom.
// TODO: prejsť s klientom (materiály, oblasť pôsobenia, odpovede na otázky).

export interface ServiceContent {
  /** Hlavný nadpis H1 – obsahuje kľúčové slovo */
  h1: string;
  /** Čo presne vyrábame (kľúčové podtypy produktu) */
  offer: { title: string; text: string }[];
  /** Materiály, vybavenie a možnosti */
  materials: string[];
  /** Od čoho závisí cena */
  priceFactors: string[];
  /** Poradňa – nadpis a odseky textu */
  guide: { title: string; paragraphs: string[]; image?: string };
  /** Otázky a odpovede k tejto službe */
  faqs: { q: string; a: string }[];
}

// Obce, kam sa najčastejšie chodí – použité v texte o lokalite.
// TODO: overiť s klientom, kam reálne chodí.
export const areaTowns = [
  'Gbely',
  'Kopčany',
  'Holíč',
  'Skalica',
  'Brodské',
  'Kúty',
  'Šaštín-Stráže',
  'Senica',
  'Borský Mikuláš',
];

export const services: Record<string, ServiceContent> = {
  kuchyne: {
    h1: 'Kuchyne na&nbsp;mieru',
    offer: [
      { title: 'Rohové kuchyne do L', text: 'Najčastejšie riešenie pre bežné kuchyne. Využijeme aj roh, ktorý by inak zostal prázdny, napríklad otočným alebo výsuvným košom.' },
      { title: 'Kuchyne do U', text: 'Veľa pracovnej plochy a úložného priestoru na troch stenách. Hodia sa do väčších aj uzavretých kuchýň.' },
      { title: 'Kuchyne s ostrovom', text: 'Ostrov s varnou doskou, drezom alebo jedálenským stolom. Stáva sa centrom domácnosti a miestom na posedenie.' },
      { title: 'Barový pult a polostrov', text: 'Oddelí kuchyňu od obývačky a zároveň slúži na rýchle raňajky. Vhodný aj do menších priestorov.' },
      { title: 'Vysoké skrine a špajza', text: 'Stĺpec so zabudovanou rúrou a mikrovlnkou, chladnička za dvierkami a špajza s výsuvmi od podlahy po strop.' },
      { title: 'Bezúchytkové kuchyne', text: 'Čisté fronty bez úchytiek s otváraním na dotyk alebo so skrytým profilom. Moderný vzhľad, ktorý sa ľahko udržiava.' },
    ],
    materials: [
      'Laminované dosky v dekoroch dreva, betónu aj jednofarebné',
      'Lesklé aj matné dvierka',
      'Pracovné dosky v dekore dreva, kameňa či betónu',
      'Kovanie s tlmeným dovieraním',
      'Plnovýsuvné zásuvky a výsuvné koše',
      'LED podsvietenie pracovnej dosky a políc',
      'Zabudované spotrebiče podľa vášho výberu',
      'Obklad za linkou v dekore pracovnej dosky',
    ],
    priceFactors: [
      'Dĺžka a tvar linky (rovná, do L, do U, ostrov)',
      'Počet vysokých skríň a zásuviek',
      'Druh dvierok a pracovnej dosky',
      'Kovanie a vnútorné vybavenie (koše, výsuvy, rohové riešenia)',
      'Podsvietenie a zabudované spotrebiče',
    ],
    guide: {
      title: 'Ako si naplánovať kuchyňu, aby slúžila roky',
      image: 'kuchyne/kuchyna-kasmir-dub-ostrov-lamely-jedalen-02-ostrov-stol-sirka.jpg',
      paragraphs: [
        'Dobrá kuchyňa začína pracovným trojuholníkom medzi chladničkou, drezom a varnou doskou. Keď sú tieto tri miesta blízko pri sebe, ale nezavadzajú si, varí sa pohodlnejšie a menej sa nachodíte. Pri návrhu preto najprv riešime, kde sú prípojky vody, odpadu a elektriny, a až potom rozmiestňujeme skrinky.',
        'Pri úložnom priestore sa oplatí myslieť dopredu. Zásuvky sú v spodných skrinkách praktickejšie ako police, pretože vidíte všetko naraz a nemusíte sa zohýbať. Vysoké skrine až po strop pojmú viac a nezbiera sa na nich prach. Rohovú skrinku vybavíme kovaním, aby ste sa dostali aj k veciam vzadu.',
        'Farbu a dekor vyberajte spolu s podlahou a dverami. Svetlé a matné plochy opticky zväčšia menšiu kuchyňu, dekor dreva dodá teplo a lesk sa ľahko utiera. Vzorky vám radi ukážeme, aby ste videli, ako materiál vyzerá naživo a pri dennom svetle.',
        'Nezabudnite na svetlo. LED pás pod hornými skrinkami osvetlí pracovnú dosku presne tam, kde krájate, a večer vytvorí príjemnú atmosféru. Zásuvky elektriny naplánujeme tak, aby boli po ruke, ale nerušili obklad.',
      ],
    },
    faqs: [
      { q: 'Koľko stojí kuchyňa na mieru?', a: 'Cena závisí hlavne od dĺžky linky, počtu vysokých skríň a zásuviek, druhu dvierok, pracovnej dosky a kovania. Presnú sumu dostanete po zameraní a návrhu, vopred a bez skrytých položiek. Orientačne vieme odhadnúť cenu aj z fotky a približných rozmerov.' },
      { q: 'Zabudujete aj spotrebiče?', a: 'Áno. S rúrou, umývačkou, chladničkou či digestorom počítame už pri návrhu a pri montáži ich zabudujeme. Spotrebiče si môžete kúpiť sami, len nám vopred pošlite ich typy a rozmery.' },
      { q: 'Dá sa kuchyňa navrhnúť aj do šikmín alebo nerovných stien?', a: 'Áno, práve na to je výroba na mieru. Všetko si zameriame priamo u vás, takže skrinky sedia aj pri šikmine, nike, trámoch či nerovnej stene.' },
      { q: 'Môžem si kuchyňu najprv navrhnúť sám?', a: 'Môžete. V našom online konfigurátore si poskladáte kuchyňu podľa svojho priestoru a návrh nám pošlete. My ho prejdeme, doladíme a pripravíme cenovú ponuku.' },
    ],
  },

  predsiene: {
    h1: 'Predsiene na&nbsp;mieru',
    offer: [
      { title: 'Skrinkové steny', text: 'Vstavaná skriňa od podlahy po strop pojme bundy, topánky aj sezónne veci. Vonkajšok ostane úhľadný a čistý.' },
      { title: 'Lavica na prezúvanie', text: 'Pohodlné sedenie s úložným priestorom na topánky pod ním. Môže mať aj čalúnený vankúš.' },
      { title: 'Otvorené vešiaky a police', text: 'Miesto na veci, ktoré používate každý deň, napríklad bundy, tašky a kľúče, hneď po ruke pri dverách.' },
      { title: 'Lamelové steny a obklady', text: 'Drevené lamely dodajú predsieni charakter a môžu ukryť aj dvere do technickej miestnosti.' },
      { title: 'Zrkadlá a konzoly', text: 'Závesná konzola so zásuvkou a zrkadlo, aj s podsvietením. Predsieň opticky zväčší a posvieti.' },
      { title: 'Úložný priestor pod schodmi', text: 'Priestor pod schodiskom premeníme na skrinky, zásuvky alebo šatník. Presne do šikmín.' },
    ],
    materials: [
      'Laminované dosky v dekoroch dreva aj jednofarebné',
      'Dekoratívne lamely',
      'Zrkadlá, aj s LED podsvietením',
      'Otváracie aj posuvné dvere',
      'Kovanie s tlmeným dovieraním',
      'Háčiky, tyče a výsuvné botníky',
      'Otvorenie na dotyk bez úchytiek',
    ],
    priceFactors: [
      'Šírka a výška skrinkovej steny',
      'Počet dverí, zásuviek a výsuvných botníkov',
      'Lamely, zrkadlá a podsvietenie',
      'Náročnosť priestoru (šikminy, schody, niky)',
    ],
    guide: {
      title: 'Predsieň, v ktorej má každá vec svoje miesto',
      image: 'predsiene/predsien-pod-schodmi-01.jpg',
      paragraphs: [
        'Predsieň je malý priestor, ktorý používa celá rodina viackrát denne. Preto ju navrhujeme tak, aby veci na každý deň boli na otvorených vešiakoch a policiach, a všetko ostatné zmizlo za dvierkami skrine. Neporiadok tak nevidno a predsieň pôsobí pokojne.',
        'Na topánky sa oplatí vyhradiť viac miesta, než sa zdá. Výsuvné botníky alebo nízka lavica s policami pod sedákom pojmú topánky celej rodiny a prezúvanie je pohodlnejšie. Pri vstupných dverách počítame aj s miestom na tašky, dáždniky a kľúče.',
        'V úzkej predsieni pomôže zrkadlo cez väčšiu plochu a svetlé fronty, ktoré priestor opticky roztiahnu. Lamely na stene dodajú teplo dreva a môžu elegantne skryť dvere do technickej miestnosti alebo rozvádzač.',
        'Ak máte v predsieni schodisko, priestor pod ním nenechávajte prázdny. Zameriame každú šikminu a navrhneme skrinky, zásuvky alebo aj malý šatník, ktorý do posledného centimetra využije miesto, ktoré by inak ostalo bez úžitku.',
      ],
    },
    faqs: [
      { q: 'Koľko stojí predsieň na mieru?', a: 'Závisí od šírky, výšky a vybavenia, teda od počtu dverí, zásuviek, botníkov, lamiel či zrkadiel. Presnú cenu vám pripravíme po zameraní, orientačne aj z fotky a rozmerov.' },
      { q: 'Viete využiť priestor pod schodmi?', a: 'Áno, patrí to k tomu, čo robíme najradšej. Každú šikminu zameriame a navrhneme skrinky, výsuvy alebo šatník presne do tvaru schodiska.' },
      { q: 'Dá sa v predsieni schovať rozvádzač alebo dvere?', a: 'Áno. Rozvádzač či dvere do technickej miestnosti vieme skryť za dvierka skrine alebo do lamelovej steny tak, aby ostali prístupné.' },
    ],
  },

  'skrine-a-satniky': {
    h1: 'Vstavané skrine a&nbsp;šatníky na&nbsp;mieru',
    offer: [
      { title: 'Vstavané skrine', text: 'Skriňa od podlahy po strop a od steny po stenu. Bez medzier, v ktorých sa zbiera prach, a s maximom úložného priestoru.' },
      { title: 'Skrine s posuvnými dverami', text: 'Šetria miesto pred skriňou, preto sa hodia do spální a užších chodieb. Dvere môžu byť aj so zrkadlom.' },
      { title: 'Skrine s otváracími dverami', text: 'Klasické riešenie s úchytkami alebo s otváraním na dotyk. Vidíte naraz celý obsah skrine.' },
      { title: 'Šatníky a walk-in šatne', text: 'Samostatná miestnosť na oblečenie s tyčami, policami, zásuvkami a miestom na topánky. Otvorená alebo s dvierkami.' },
      { title: 'Skrine do šikmín a podkrovia', text: 'Pod strešné šikminy navrhneme skrine presne do uhla strechy, aby žiadny priestor neostal nevyužitý.' },
      { title: 'Skrine do niky', text: 'Nika vo vstupe, v spálni alebo pri komíne sa zmení na plnohodnotnú skriňu, ktorá vyzerá ako súčasť steny.' },
    ],
    materials: [
      'Laminované dosky v dekoroch dreva aj jednofarebné',
      'Posuvné dvere, aj so zrkadlom',
      'Otváracie dvere s tlmeným dovieraním',
      'Tyče, výsuvné vešiaky a sklopné tyče',
      'Zásuvky, aj s delením na drobnosti',
      'Výsuvné koše a držiaky na nohavice a topánky',
      'LED osvetlenie vnútra skrine',
    ],
    priceFactors: [
      'Rozmery skrine a počet dverí',
      'Posuvné alebo otváracie dvere, zrkadlá',
      'Vnútorné vybavenie (zásuvky, výsuvy, koše)',
      'Tvar priestoru (šikminy, niky, rohy)',
      'Osvetlenie vnútra',
    ],
    guide: {
      title: 'Ako navrhnúť vnútro skrine, aby sa v nej všetko zmestilo',
      image: 'skrine-satniky/satnik-walk-in-01.jpg',
      paragraphs: [
        'Pri skrini na mieru nerozhoduje len vonkajší vzhľad, ale hlavne vnútro. Preto sa na začiatku pýtame, čo v nej budete mať. Košele a šaty potrebujú vysokú tyč, nohavice a sukne stačia na dvojitej tyči nad sebou, a svetre či tričká sú najprehľadnejšie na policiach alebo v zásuvkách.',
        'Posuvné dvere sa oplatia tam, kde pred skriňou nie je veľa miesta, napríklad v úzkej chodbe alebo pri posteli. Otváracie dvere zas ukážu celý obsah naraz a pôsobia elegantnejšie. Obe riešenia vieme doplniť zrkadlom, ktoré miestnosť opticky zväčší.',
        'Vstavaná skriňa až po strop pojme o poznanie viac než skriňa z obchodu a nevzniká nad ňou priestor, kde sa usádza prach. Hore dáme veci, ktoré potrebujete len raz za čas, ako kufre či zimné perie, a dole to, čo používate každý deň.',
        'Ak máte miesto na šatník, oplatí sa. Otvorený walk-in šatník s osvetlením dáva dokonalý prehľad o oblečení a obliekanie je pohodlnejšie. Aj z menšej miestnosti alebo z časti spálne vieme urobiť prakticky usporiadanú šatňu.',
      ],
    },
    faqs: [
      { q: 'Koľko stojí vstavaná skriňa na mieru?', a: 'Cena závisí od rozmerov, typu dverí (posuvné, otváracie, so zrkadlom) a vnútorného vybavenia. Po zameraní vám pripravíme presnú ponuku, orientačne vieme cenu odhadnúť aj z rozmerov.' },
      { q: 'Sú lepšie posuvné alebo otváracie dvere?', a: 'Posuvné dvere šetria miesto pred skriňou, otváracie ukážu celý obsah naraz. Poradíme vám podľa toho, koľko máte pred skriňou miesta a ako ju budete používať.' },
      { q: 'Dá sa skriňa urobiť do podkrovia so šikminou?', a: 'Áno. Šikminu presne zameriame a skriňu vyrobíme do uhla strechy, takže priestor využijete až po posledný centimeter.' },
      { q: 'Môžem si skriňu navrhnúť online?', a: 'Áno, v našom konfigurátore si zvolíte rozmery, dekor aj vnútorné usporiadanie a návrh nám pošlete. My ho doladíme a pripravíme ponuku.' },
    ],
  },

  'detske-izby': {
    h1: 'Nábytok do detskej izby na&nbsp;mieru',
    offer: [
      { title: 'Poschodové postele', text: 'Pevné poschodové postele so schodíkmi, v ktorých sú zásuvky. Bezpečné zábradlie a pohodlný výstup.' },
      { title: 'Postele s úložným priestorom', text: 'Zásuvky alebo úložný priestor pod posteľou na hračky, perinu či oblečenie.' },
      { title: 'Písacie stoly', text: 'Stôl na učenie s dostatkom miesta na zošity aj počítač, s policami a zásuvkami, ktoré rastú spolu s dieťaťom.' },
      { title: 'Skrine a šatníky', text: 'Detská skriňa s tyčami a policami vo výške, kam dieťa dočiahne, aby si vedelo samo odložiť veci.' },
      { title: 'Police a úložné steny', text: 'Otvorené police na knihy a hračky, uzavreté skrinky na všetko, čo nemusí byť na očiach.' },
      { title: 'Izby pre súrodencov', text: 'Riešenia pre dve deti v jednej izbe. Každé má svoje miesto na spanie, učenie aj veci.' },
    ],
    materials: [
      'Odolné laminované dosky v dekoroch dreva aj farebné',
      'Zaoblené a opracované hrany',
      'Pevné zábradlie a schodíky',
      'Kovanie s tlmeným dovieraním',
      'Zásuvky v schodoch a pod posteľou',
      'Kombinácie farieb podľa témy izby',
    ],
    priceFactors: [
      'Typ postele (jednoduchá, poschodová, s úložným priestorom)',
      'Počet kusov nábytku v izbe',
      'Zásuvky a vnútorné vybavenie',
      'Farebné kombinácie a doplnky',
    ],
    guide: {
      title: 'Detská izba, ktorá vydrží a rastie s dieťaťom',
      image: 'detske-izby/izba-dzungla-01-stol-skrina.jpg',
      paragraphs: [
        'Nábytok v detskej izbe musí zniesť viac než kdekoľvek inde. Preto používame odolné dosky, pevné spoje a kvalitné kovanie. Pri poschodovej posteli myslíme na bezpečné zábradlie a na schodíky namiesto rebríka, po ktorých sa ľahko a bezpečne vystupuje.',
        'V detskej izbe je miesto vzácne. Poschodová posteľ uvoľní podlahu na hranie, zásuvky v schodíkoch a pod posteľou pojmú hračky aj perinu. Vysoké skrine až po strop pomôžu udržať poriadok aj v menšej izbe.',
        'Dobrý návrh počíta s tým, že dieťa vyrastie. Písací stôl má byť dosť veľký aj na učenie v škole a police sa dajú neskôr prestaviť. Farebné doplnky vieme zvoliť tak, aby sa dali časom jednoducho vymeniť a izba nezostarla spolu s obľúbenou rozprávkou.',
      ],
    },
    faqs: [
      { q: 'Je poschodová posteľ na mieru bezpečná?', a: 'Áno. Robíme ju z pevných dosiek, s vysokým zábradlím hore a so schodíkmi namiesto rebríka. Posteľ ukotvíme tak, aby sa nehýbala.' },
      { q: 'Viete zariadiť izbu pre dve deti?', a: 'Áno. Navrhneme ju tak, aby každé dieťa malo vlastné miesto na spanie, učenie aj na svoje veci, a pritom ostalo miesto na hranie.' },
      { q: 'Koľko stojí nábytok do detskej izby?', a: 'Závisí od toho, čo všetko má izba obsahovať, napríklad posteľ, stôl, skriňu či police, a od vybavenia. Po zameraní vám pripravíme presnú cenu.' },
    ],
  },

  obyvacky: {
    h1: 'TV steny a&nbsp;obývačky na&nbsp;mieru',
    offer: [
      { title: 'TV steny s lamelami', text: 'Drevené lamely za televízorom dodajú obývačke teplo a charakter. Káble schováme za obklad.' },
      { title: 'Závesné TV komody', text: 'Komoda, ktorá sa nedotýka podlahy, pôsobí ľahko a pod ňou sa pohodlne upratuje.' },
      { title: 'Knižnice a policové steny', text: 'Police na knihy a dekorácie od podlahy po strop, otvorené alebo kombinované so skrinkami.' },
      { title: 'Vitríny a skrinky', text: 'Uzavreté skrinky na všetko, čo nemá byť na očiach, a vitríny na to, čo chcete ukázať.' },
      { title: 'Obklady stien', text: 'Lamelové a doskové obklady, ktoré zjednotia obývačku s kuchyňou či schodiskom.' },
    ],
    materials: [
      'Dekoratívne lamely',
      'Laminované dosky v dekoroch dreva aj jednofarebné',
      'Otvorenie na dotyk bez úchytiek',
      'LED podsvietenie políc a lamiel',
      'Skryté vedenie káblov',
      'Kovanie s tlmeným dovieraním',
    ],
    priceFactors: [
      'Šírka a výška steny',
      'Lamely, obklady a podsvietenie',
      'Počet skriniek, zásuviek a políc',
      'Skryté vedenie káblov a techniky',
    ],
    guide: {
      title: 'TV stena ako srdce obývačky',
      paragraphs: [
        'TV stena je často prvá vec, na ktorú v obývačke pozriete. Namiesto samotného televízora na holej stene navrhneme celok, v ktorom má miesto televízor, technika, knihy aj dekorácie a všetko spolu ladí s podlahou, dverami a kuchyňou.',
        'Najviac rozruchu v obývačke robia káble. Pri návrhu preto naplánujeme, kde bude televízor, reproduktory a prijímač, a káble vedieme za obkladom alebo v skrinkách. Na stene tak nevidno nič, čo tam nepatrí.',
        'Lamely za televízorom dodajú obývačke teplo dreva a zároveň zlepšia akustiku. Doplnené o LED podsvietenie vytvoria večer príjemné, nepriame svetlo. Závesná komoda pod televízorom pôsobí vzdušne a podlaha pod ňou sa ľahko upratuje.',
      ],
    },
    faqs: [
      { q: 'Dajú sa schovať káble od televízora?', a: 'Áno. Pri návrhu naplánujeme vedenie káblov za lamelami alebo v skrinkách, takže na stene nevidno nič okrem samotného televízora.' },
      { q: 'Koľko stojí TV stena na mieru?', a: 'Závisí od šírky steny, lamiel, podsvietenia a počtu skriniek či políc. Presnú cenu pripravíme po zameraní, orientačne aj z fotky.' },
      { q: 'Unesie závesná komoda aj ťažšiu techniku?', a: 'Áno, komodu ukotvíme do steny podľa jej typu a zaťaženia. Pri návrhu sa pýtame, čo na nej bude stáť.' },
    ],
  },

  'sklapacie-postele': {
    h1: 'Sklápacie postele do&nbsp;skrine',
    offer: [
      { title: 'Vertikálne sklápacie postele', text: 'Posteľ sa sklápa nahor do skrine. Vhodné pre manželské postele a vyššie miestnosti.' },
      { title: 'Horizontálne sklápacie postele', text: 'Posteľ sa sklápa bokom. Hodí sa pod šikminy, do nižších izieb a pre jednolôžka.' },
      { title: 'Posteľ s policami a skriňou', text: 'Skriňa so sklápacou posteľou doplnená o police a skrinky na oblečenie alebo knihy.' },
      { title: 'Riešenia do pracovne a izby pre hostí', text: 'Cez deň pracovňa, večer spálňa pre hostí. Izba slúži dvom účelom.' },
    ],
    materials: [
      'Spoľahlivý sklápací mechanizmus',
      'Laminované dosky v dekoroch dreva aj jednofarebné',
      'Rošt pod matrac',
      'Fixačné popruhy na perinu',
      'Bočné police a skrinky',
      'LED osvetlenie',
    ],
    priceFactors: [
      'Rozmer postele (jednolôžko, dvojlôžko)',
      'Smer sklápania (vertikálne, horizontálne)',
      'Priľahlé skrinky a police',
      'Dekor a vybavenie',
    ],
    guide: {
      title: 'Kedy sa oplatí sklápacia posteľ',
      image: 'sklapacie-postele/sklapacia-postel-01-zatvorena.jpg',
      paragraphs: [
        'Sklápacia posteľ je ideálna všade tam, kde potrebujete, aby izba cez deň slúžila na niečo iné, napríklad ako pracovňa, detská herňa alebo obývačka v menšom byte. Večer ju jednoducho vyklopíte a ráno zas schováte do skrine.',
        'Pri návrhu vyberáme smer sklápania podľa miestnosti. Vertikálna posteľ sa sklápa nahor a hodí sa pre manželské postele. Horizontálna sa sklápa bokom, preto je vhodná pod šikminy a do nižších miestností.',
        'Posteľ vieme doplniť o skrinky a police po stranách, takže zatvorená pôsobí ako obyčajná skriňa. Hostia majú pohodlné spanie na skutočnom matraci a vy celý deň voľnú izbu.',
      ],
    },
    faqs: [
      { q: 'Je spanie na sklápacej posteli pohodlné?', a: 'Áno. Posteľ má rošt a klasický matrac, takže sa na nej spí rovnako ako na bežnej posteli.' },
      { q: 'Je sklápanie ťažké?', a: 'Nie. Mechanizmus je vyvážený tak, aby posteľ zvládol vyklopiť aj sklopiť každý dospelý bez veľkej námahy.' },
      { q: 'Zmestí sa perina do zatvorenej postele?', a: 'Áno. Posteľ má popruhy, ktoré perinu a vankúš pri sklopení pridržia.' },
    ],
  },

  'pracovne-a-technicke-miestnosti': {
    h1: 'Práčovne a&nbsp;technické miestnosti na&nbsp;mieru',
    offer: [
      { title: 'Stĺpec pre práčku a sušičku', text: 'Práčku a sušičku dáme nad seba do výšky, v ktorej sa pohodlne vkladá bielizeň bez zohýbania.' },
      { title: 'Skrinky na drogériu', text: 'Uzavreté skrinky na prací prášok, čistiace prostriedky a náradie na upratovanie.' },
      { title: 'Pracovná doska na skladanie', text: 'Plocha na skladanie a triedenie bielizne, prípadne s drezom.' },
      { title: 'Zakrytie kotla a rozvodov', text: 'Kotol, bojler a rozvody schováme za posuvné alebo otváracie dvere, aby ostali prístupné.' },
      { title: 'Police do komory a špajze', text: 'Otvorené police na zásoby a veci, ktoré potrebujete mať po ruke.' },
    ],
    materials: [
      'Odolné laminované dosky',
      'Pracovné dosky odolné voči vode',
      'Posuvné aj otváracie dvere',
      'Vetranie skriniek pri kotle a spotrebičoch',
      'Kovanie s tlmeným dovieraním',
      'Otvorené aj zatvorené police',
    ],
    priceFactors: [
      'Veľkosť miestnosti a počet skriniek',
      'Stĺpec pre spotrebiče a pracovná doska',
      'Zakrytie kotla a rozvodov',
      'Typ dverí (posuvné, otváracie)',
    ],
    guide: {
      title: 'Poriadok aj v technickej miestnosti',
      image: 'pracovne-technicke-miestnosti/pracovna-beton-biela-02-pracka-susicka.jpg',
      paragraphs: [
        'Práčovňa a technická miestnosť sa často nechávajú na koniec, hoci ich používate každý deň. Premyslený nábytok z nich urobí úhľadný priestor, kde má všetko svoje miesto a pranie je pohodlnejšie.',
        'Práčka a sušička nad sebou v stĺpci ušetria miesto a zároveň sú vo výške, v ktorej sa nemusíte zohýbať. Vedľa nich naplánujeme pracovnú dosku na skladanie bielizne a nad ňou skrinky na prací prášok a drogériu.',
        'Kotol, bojler a rozvody nemusia byť na očiach. Schováme ich za dvere tak, aby k nim bol vždy prístup kvôli servisu, a skrinky pri nich vetráme, aby technika fungovala bez problémov.',
      ],
    },
    faqs: [
      { q: 'Dá sa kotol schovať do skrine?', a: 'Áno. Kotol a rozvody schováme za dvere s vetraním, aby ostali bezpečné a prístupné pre servis.' },
      { q: 'Vydrží nábytok vlhkosť v práčovni?', a: 'Používame odolné dosky a pracovné dosky, ktorým bežná vlhkosť v práčovni neublíži. Pri návrhu myslíme aj na vetranie.' },
      { q: 'Koľko stojí nábytok do práčovne?', a: 'Závisí od veľkosti miestnosti, počtu skriniek a vybavenia. Presnú cenu pripravíme po zameraní.' },
    ],
  },

  'komercne-interiery': {
    h1: 'Interiéry kancelárií a&nbsp;prevádzok',
    offer: [
      { title: 'Kuchynky pre zamestnancov', text: 'Praktické kuchynky so spotrebičmi a úložným priestorom, ktoré znesú každodenné používanie.' },
      { title: 'Kancelársky nábytok', text: 'Stoly, komody, skrine na dokumenty a úložné steny na mieru vašim priestorom.' },
      { title: 'Lamelové steny so skrytými dverami', text: 'Reprezentatívne lamelové obklady, v ktorých sa nenápadne skrývajú dvere do zázemia.' },
      { title: 'Recepcie a pulty', text: 'Recepčné pulty a predajné pulty, ktoré urobia dobrý prvý dojem na vašich klientov.' },
      { title: 'Obklady a zrkadlové steny', text: 'Obklady stien a zrkadlá, ktoré zjednotia vzhľad celej prevádzky.' },
    ],
    materials: [
      'Odolné laminované dosky',
      'Dekoratívne lamely',
      'Skryté dvere v obklade',
      'Zrkadlá a obklady',
      'Kovanie na každodenné používanie',
      'Farby a dekory podľa firemnej identity',
    ],
    priceFactors: [
      'Rozsah zákazky a počet miestností',
      'Obklady, lamely a skryté dvere',
      'Spotrebiče a vybavenie kuchynky',
      'Termín a postup realizácie',
    ],
    guide: {
      title: 'Interiér, ktorý robí dobrý dojem',
      image: 'komercne-interiery/kancelaria-a-kuchynka.jpg',
      paragraphs: [
        'Interiér kancelárie alebo prevádzky je vizitka firmy. Nábytok na mieru využije priestor presne podľa toho, ako sa v ňom pracuje, a zladí sa s firemnými farbami aj s tým, čo chcete klientom ukázať.',
        'V komerčných priestoroch sa nábytok používa oveľa intenzívnejšie ako doma. Preto vyberáme odolné materiály a kovanie, ktoré vydrží každodenné otváranie aj pri väčšom počte ľudí.',
        'Realizáciu vieme naplánovať tak, aby čo najmenej obmedzila vašu prevádzku. Termíny montáže dohodneme vopred, v prípade potreby aj mimo pracovného času.',
      ],
    },
    faqs: [
      { q: 'Robíte aj pre firmy?', a: 'Áno. Zariaďujeme kancelárie, kuchynky pre zamestnancov aj prevádzky, vrátane lamelových stien so skrytými dverami.' },
      { q: 'Viete prispôsobiť interiér firemným farbám?', a: 'Áno. Dekory a farby vyberieme tak, aby ladili s vašou identitou a zvyškom priestoru.' },
      { q: 'Dá sa montáž urobiť mimo pracovného času?', a: 'Po dohode áno. Termíny montáže plánujeme tak, aby čo najmenej obmedzili chod vašej firmy.' },
    ],
  },
};
