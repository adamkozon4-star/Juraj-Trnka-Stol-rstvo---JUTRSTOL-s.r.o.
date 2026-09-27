export interface Category {
  slug: string;
  title: string;
  short: string;
  intro: string;
  seoTitle: string;
  seoDescription: string;
  cover: string;
  icon: 'kitchen' | 'hanger' | 'wardrobe' | 'bunk' | 'sofa' | 'bed' | 'washer' | 'office';
}

export const categories: Category[] = [
  {
    slug: 'kuchyne',
    icon: 'kitchen',
    title: 'Kuchyne na mieru',
    short: 'Linky do L, U, s ostrovom alebo barovým pultom – bez úchytiek aj s nimi.',
    intro:
      'Kuchyňa je srdce domova, preto ju navrhujeme presne do vášho priestoru. Využijeme každý centimeter – od vysokých skríň až po strop, cez zabudované spotrebiče, špajzu až po ostrov s varnou doskou. Vyberiete si farbu, dekor aj typ úchytiek a my sa postaráme o zvyšok.',
    seoTitle: 'Kuchyne na mieru – Gbely, Záhorie',
    seoDescription:
      'Kuchynské linky na mieru z dielne v Gbeloch. Kuchyne do L, U, s ostrovom a barovým pultom, zabudované spotrebiče, LED podsvietenie. Zameranie, výroba aj montáž.',
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
      'Predsiene na mieru: vstavané skrine, lavice, vešiaky, lamelové steny a zrkadlá. Využijeme aj priestor pod schodmi. Stolárstvo JUTRSTOL, Gbely.',
    cover: 'predsiene/predsien-vstavana-skrina-led-01.jpg',
  },
  {
    slug: 'skrine-a-satniky',
    icon: 'wardrobe',
    title: 'Skrine a šatníky',
    short: 'Vstavané skrine, posuvné dvere a šatníky s premysleným vnútrom.',
    intro:
      'Vstavaná skriňa od podlahy po strop pojme viac a vyzerá lepšie ako čokoľvek z obchodu. Vnútro navrhneme podľa toho, čo v nej budete mať – tyče, police, zásuvky, výsuvné vešiaky. S otváracími aj posuvnými dverami.',
    seoTitle: 'Vstavané skrine a šatníky na mieru – Gbely',
    seoDescription:
      'Vstavané skrine a šatníky na mieru s posuvnými aj otváracími dverami. Vnútorné usporiadanie podľa vás. Stolárstvo JUTRSTOL, Gbely a okolie.',
    cover: 'skrine-satniky/skrina-detska-izba-dub-siva-nika-02.jpg',
  },
  {
    slug: 'detske-izby',
    icon: 'bunk',
    title: 'Detské izby',
    short: 'Poschodové postele, písacie stoly, skrine a úložné riešenia.',
    intro:
      'V detskej izbe musí nábytok vydržať a zároveň šetriť miesto. Robíme poschodové postele so schodíkmi so zásuvkami, písacie stoly, skrine aj postele s úložným priestorom – bezpečne, pevne a presne do izby.',
    seoTitle: 'Nábytok do detskej izby na mieru – Gbely',
    seoDescription:
      'Detské izby na mieru: poschodové postele so zásuvkami v schodoch, písacie stoly, skrine a postele s úložným priestorom. Stolárstvo JUTRSTOL.',
    cover: 'detske-izby/poschodova-postel-schody-zasuvky-01.jpg',
  },
  {
    slug: 'obyvacky',
    icon: 'sofa',
    title: 'Obývačky a TV steny',
    short: 'TV steny s lamelami, knižnice a závesné komody.',
    intro:
      'TV stena s lamelami, policami a závesnou komodou dá obývačke charakter. Káble schováme, úložný priestor pribudne a všetko bude ladiť s podlahou aj dverami.',
    seoTitle: 'TV steny a obývacie zostavy na mieru – Gbely',
    seoDescription:
      'TV steny s lamelami, knižnice a závesné komody na mieru. Stolárstvo JUTRSTOL, Gbely a Záhorie.',
    cover: 'obyvacky/tv-stena-lamely-policova-skrina-01-sirka-web.jpg',
  },
  {
    slug: 'sklapacie-postele',
    icon: 'bed',
    title: 'Sklápacie postele',
    short: 'Posteľ, ktorá sa cez deň schová do skrine.',
    intro:
      'Malá izba, pracovňa alebo izba pre hostí? Sklápacia posteľ sa cez deň schová do skrine a večer ju jednoducho vyklopíte. Izba tak slúži na dva účely bez kompromisov.',
    seoTitle: 'Sklápacie postele do skrine na mieru – Gbely',
    seoDescription:
      'Sklápacie (výklopné) postele do skrine na mieru. Ideálne do malých izieb a pracovní. Stolárstvo JUTRSTOL, Gbely.',
    cover: 'sklapacie-postele/sklapacia-postel-02-otvorena.jpg',
  },
  {
    slug: 'pracovne-a-technicke-miestnosti',
    icon: 'washer',
    title: 'Práčovne a technické miestnosti',
    short: 'Práčka so sušičkou v stĺpci, skrinky a skrytý kotol.',
    intro:
      'Práčku so sušičkou dáme do stĺpca, nad ne skrinky, vedľa pracovnú dosku a kotol schováme za posuvné dvere. Z technickej miestnosti sa tak stane úhľadný a praktický priestor.',
    seoTitle: 'Práčovne a technické miestnosti na mieru – Gbely',
    seoDescription:
      'Nábytok do práčovne a technickej miestnosti na mieru: stĺpec pre práčku a sušičku, skrinky, posuvné dvere pred kotlom. Stolárstvo JUTRSTOL.',
    cover: 'pracovne-technicke-miestnosti/pracovna-beton-biela-01-celok.jpg',
  },
  {
    slug: 'komercne-interiery',
    icon: 'office',
    title: 'Kancelárie a prevádzky',
    short: 'Kuchynky, lamelové steny so skrytými dverami a kancelársky nábytok.',
    intro:
      'Zariaďujeme aj kancelárie a prevádzky – kuchynky pre zamestnancov, skrinkové steny, lamelové obklady so skrytými dverami či recepcie. Reprezentatívne, odolné a na mieru vašej firme.',
    seoTitle: 'Interiéry kancelárií a prevádzok na mieru – Gbely',
    seoDescription:
      'Nábytok na mieru pre kancelárie a prevádzky: kuchynky, skrinkové steny, lamelové obklady so skrytými dverami. Stolárstvo JUTRSTOL, Gbely.',
    cover: 'komercne-interiery/prevadzka-b-lamelova-stena-skryte-dvere-sirka.jpg',
  },
];

export const categoryBySlug = (slug: string) => categories.find((c) => c.slug === slug);
