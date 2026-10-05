export interface Category {
  slug: string;
  title: string;
  short: string;
  intro: string;
  seoTitle: string;
  seoDescription: string;
  /** Úvodná fotka (cesta v fotky/realizacie/). Bez nej sa zobrazí drevený podklad. */
  cover?: string;
  icon: 'kitchen' | 'hanger' | 'wardrobe' | 'bunk' | 'sofa' | 'bed' | 'washer' | 'office' | 'bath';
}

export const categories: Category[] = [
  {
    slug: 'kuchyne',
    icon: 'kitchen',
    title: 'Kuchyne na mieru',
    short: 'Linky do L, U, s ostrovom alebo barovým pultom – bez úchytiek aj s nimi.',
    intro:
      'Kuchyňa je srdce domova, preto ju navrhujeme presne do vášho priestoru. Využijeme každý centimeter – od vysokých skríň až po strop, cez zabudované spotrebiče, špajzu až po ostrov s varnou doskou. Vyberiete si farbu, dekor aj typ úchytiek a my sa postaráme o zvyšok.',
    seoTitle: 'Kuchyne na mieru – Gbely, Skalica, Holíč',
    seoDescription:
      'Kuchynské linky na mieru zo stolárskej dielne v Gbeloch. Kuchyne do L, U, s ostrovom a barovým pultom. Zameranie, návrh, výroba aj montáž – Záhorie.',
    cover: 'kuchyne/kuchyna-dub-ostrov-00-hero-sirka.jpg',
  },
  {
    slug: 'predsiene',
    icon: 'hanger',
    title: 'Predsiene',
    short: 'Skrinkové steny, lavice, vešiaky, zrkadlá a lamelové obklady.',
    intro:
      'Predsieň je prvé, čo uvidíte po príchode domov. Navrhneme skrinkovú stenu na mieru, lavicu na prezúvanie, miesto na bundy aj topánky – a k tomu lamely, zrkadlo či LED podsvietenie. Poradíme si aj so šikminou pod schodmi.',
    seoTitle: 'Predsiene na mieru – Gbely, Záhorie',
    seoDescription:
      'Predsiene na mieru: skrinkové steny, lavice na prezúvanie, vešiaky, lamely a zrkadlá. Využijeme aj priestor pod schodmi. Stolárstvo JUTRSTOL, Gbely.',
    cover: 'predsiene/predsien-vstavana-skrina-led-01.jpg',
  },
  {
    slug: 'skrine-a-satniky',
    icon: 'wardrobe',
    title: 'Skrine a šatníky',
    short: 'Vstavané skrine, posuvné dvere a šatníky s premysleným vnútrom.',
    intro:
      'Vstavaná skriňa od podlahy po strop pojme viac a vyzerá lepšie ako čokoľvek z obchodu. Vnútro navrhneme podľa toho, čo v nej budete mať – tyče, police, zásuvky, výsuvné vešiaky. S otváracími aj posuvnými dverami.',
    seoTitle: 'Vstavané skrine a šatníky na mieru',
    seoDescription:
      'Vstavané skrine a šatníky na mieru s posuvnými aj otváracími dverami, do šikmín aj ník. Vnútro podľa vás. Stolárstvo JUTRSTOL – Gbely, Skalica, Holíč.',
    cover: 'skrine-satniky/skrina-detska-izba-dub-siva-nika-02.jpg',
  },
  {
    slug: 'detske-izby',
    icon: 'bunk',
    title: 'Detské izby',
    short: 'Poschodové postele, písacie stoly, skrine a úložné riešenia.',
    intro:
      'V detskej izbe musí nábytok vydržať a zároveň šetriť miesto. Robíme poschodové postele so schodíkmi so zásuvkami, písacie stoly, skrine aj postele s úložným priestorom – bezpečne, pevne a presne do izby.',
    seoTitle: 'Detské izby na mieru – Gbely, Záhorie',
    seoDescription:
      'Nábytok do detskej izby na mieru: poschodové postele so zásuvkami v schodoch, písacie stoly, skrine a postele s úložným priestorom. JUTRSTOL, Gbely.',
    cover: 'detske-izby/poschodova-postel-schody-zasuvky-01.jpg',
  },
  {
    slug: 'obyvacky',
    icon: 'sofa',
    title: 'Obývačky a TV steny',
    short: 'TV steny s lamelami, knižnice a závesné komody.',
    intro:
      'TV stena s lamelami, policami a závesnou komodou dá obývačke charakter. Káble schováme, úložný priestor pribudne a všetko bude ladiť s podlahou aj dverami.',
    seoTitle: 'TV steny a obývačky na mieru – Záhorie',
    seoDescription:
      'TV steny s lamelami, závesné komody, knižnice a obklady stien na mieru. Skryté káble aj LED podsvietenie. Stolárstvo JUTRSTOL, Gbely a okolie.',
    cover: 'obyvacky/tv-stena-lamely-policova-skrina-01-sirka-web.jpg',
  },
  {
    slug: 'kupelny-nabytok',
    icon: 'bath',
    title: 'Kúpeľňový nábytok',
    short: 'Skrinky pod umývadlo, vysoké skrine, zrkadlá a police do kúpeľne.',
    intro:
      'Aj v malej kúpeľni sa zmestí veľa, keď je nábytok vyrobený presne na mieru. Skrinka pod umývadlo na celú šírku, vysoká skriňa do rohu, zrkadlo so svetlom a police do niky – všetko v dekore, ktorý ladí s obkladom.',
    seoTitle: 'Kúpeľňový nábytok na mieru – Gbely, Záhorie',
    seoDescription:
      'Kúpeľňový nábytok na mieru: skrinky pod umývadlo, vysoké skrine, zrkadlá s osvetlením a police. Kovanie Blum, dekory Egger. Stolárstvo JUTRSTOL, Gbely.',
  },
  {
    slug: 'sklapacie-postele',
    icon: 'bed',
    title: 'Sklápacie postele',
    short: 'Posteľ, ktorá sa cez deň schová do skrine.',
    intro:
      'Malá izba, pracovňa alebo izba pre hostí? Sklápacia posteľ sa cez deň schová do skrine a večer ju jednoducho vyklopíte. Izba tak slúži na dva účely bez kompromisov.',
    seoTitle: 'Sklápacie postele do skrine na mieru',
    seoDescription:
      'Sklápacie postele do skrine na mieru, vertikálne aj horizontálne. Izba pre hostí aj pracovňa v jednom. Stolárstvo JUTRSTOL, Gbely, Záhorie.',
    cover: 'sklapacie-postele/sklapacia-postel-02-otvorena.jpg',
  },
  {
    slug: 'pracovne-a-technicke-miestnosti',
    icon: 'washer',
    title: 'Práčovne a technické miestnosti',
    short: 'Práčka so sušičkou v stĺpci, skrinky a skrytý kotol.',
    intro:
      'Práčku so sušičkou dáme do stĺpca, nad ne skrinky, vedľa pracovnú dosku a kotol schováme za posuvné dvere. Z technickej miestnosti sa tak stane úhľadný a praktický priestor.',
    seoTitle: 'Práčovne a technické miestnosti na mieru',
    seoDescription:
      'Nábytok do práčovne a technickej miestnosti na mieru: stĺpec pre práčku a sušičku, skrinky, pracovná doska a zakrytie kotla. JUTRSTOL, Gbely.',
    cover: 'pracovne-technicke-miestnosti/pracovna-beton-biela-01-celok.jpg',
  },
  {
    slug: 'komercne-interiery',
    icon: 'office',
    title: 'Kancelárie a prevádzky',
    short: 'Kuchynky, lamelové priečky, obklady a kancelársky nábytok.',
    intro:
      'Zariaďujeme aj kancelárie a prevádzky – kuchynky pre zamestnancov, skrinkové steny, lamelové priečky a obklady či recepcie. Reprezentatívne, odolné a na mieru vašej firme.',
    seoTitle: 'Interiéry kancelárií a prevádzok na mieru',
    seoDescription:
      'Nábytok na mieru pre kancelárie a prevádzky: kuchynky, recepcie, skrinkové steny a lamelové priečky a obklady. Stolárstvo JUTRSTOL, Gbely.',
    cover: 'komercne-interiery/kancelaria-a-lamelova-priecka.jpg',
  },
];

export const categoryBySlug = (slug: string) => categories.find((c) => c.slug === slug);
