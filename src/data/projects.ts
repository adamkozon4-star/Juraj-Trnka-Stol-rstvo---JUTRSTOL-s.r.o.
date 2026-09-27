// Realizácie. Cesty k fotkám sú relatívne k priečinku fotky/realizacie/.
// Prvá fotka v zozname je titulná. `featured` = zobrazí sa na úvodnej stránke.
export interface Project {
  slug: string;
  title: string;
  category: string; // slug z categories.ts
  summary: string;
  highlights: string[];
  images: string[];
  featured?: boolean;
}

export const projects: Project[] = [
  {
    slug: 'kuchyna-s-lamelovym-ostrovom-a-jedalenskym-stolom',
    title: 'Kuchyňa s lamelovým ostrovom a jedálenským stolom',
    category: 'kuchyne',
    summary:
      'Matná kašmírová kuchyňa s čiernymi úchytovými profilmi, obkladom v dekore dub a ostrovom, na ktorý nadväzuje jedálenský stôl pre šesť ľudí.',
    highlights: ['Ostrov obložený lamelami', 'Napojený jedálenský stôl', 'Stena vysokých skríň', 'Čierne úchytové profily'],
    images: [
      'kuchyne/kuchyna-kasmir-dub-ostrov-lamely-jedalen-00-HERO.webp',
      'kuchyne/kuchyna-kasmir-dub-ostrov-lamely-jedalen-02-ostrov-stol-sirka.jpg',
      'kuchyne/kuchyna-kasmir-dub-ostrov-lamely-jedalen-03-ostrov-lamely.jpg',
      'kuchyne/kuchyna-kasmir-dub-ostrov-lamely-jedalen-04-pohlad-od-stola-sirka.jpg',
      'kuchyne/kuchyna-kasmir-dub-ostrov-lamely-jedalen-01-celok-sirka.jpg',
    ],
    featured: true,
  },
  {
    slug: 'kuchyna-v-dekore-dub-s-ostrovom',
    title: 'Kuchyňa v dekore dub s ostrovom',
    category: 'kuchyne',
    summary:
      'Bezúchytková kuchyňa v dekore dub s tmavou pracovnou doskou. Linka pod panoramatickým oknom, ostrov s varnou doskou so zabudovaným odsávaním a stena vysokých skríň.',
    highlights: ['Ostrov s odsávaním v doske', 'Linka pod panoramatickým oknom', 'Bez úchytiek', 'Zabudovaná rúra a chladnička'],
    images: [
      'kuchyne/kuchyna-dub-ostrov-00-hero-sirka.jpg',
      'kuchyne/kuchyna-dub-ostrov-03-okno-sirka.jpg',
      'kuchyne/kuchyna-dub-ostrov-04-ostrov-sirka.jpg',
      'kuchyne/kuchyna-dub-ostrov-06-vysoke-skrine-sirka.jpg',
      'kuchyne/kuchyna-dub-ostrov-05-ostrov-detail-sirka.jpg',
      'kuchyne/kuchyna-dub-ostrov-02-celok.jpg',
      'kuchyne/kuchyna-dub-ostrov-01-okno.jpg',
    ],
    featured: true,
  },
  {
    slug: 'biela-kuchyna-s-polostrovom-a-stolom',
    title: 'Biela kuchyňa s polostrovom a stolom',
    category: 'kuchyne',
    summary:
      'Biela matná kuchyňa s dubovými skrinkami, doskou v dekore mramor a polostrovom, ku ktorému je pripojený jedálenský stôl v dekore dub.',
    highlights: ['Polostrov s pripojeným stolom', 'Doska v dekore mramor', 'Zabudovaná mikrovlnka a rúra'],
    images: [
      'kuchyne/kuchyna-biela-dub-polostrov-stol-01-sirka.jpg',
      'kuchyne/kuchyna-biela-dub-polostrov-stol-02-sirka.jpg',
      'kuchyne/kuchyna-biela-dub-polostrov-stol-03.jpg',
    ],
    featured: true,
  },
  {
    slug: 'biela-leskla-kuchyna-s-barovym-pultom',
    title: 'Biela lesklá kuchyňa s barovým pultom',
    category: 'kuchyne',
    summary:
      'Vysoký lesk v kombinácii s dubovou pracovnou doskou. Barový pult so závesnými svietidlami, vysoké skrine so špajzou a plne zabudované spotrebiče.',
    highlights: ['Barový pult', 'Špajza vo vysokých skriniach', 'Zabudovaná chladnička a umývačka'],
    images: [
      'kuchyne/kuchyna-biela-lesk-dub-barovy-pult-01-sirka.jpg',
      'kuchyne/kuchyna-biela-lesk-dub-barovy-pult-03-celok-sirka-web.jpg',
      'kuchyne/kuchyna-biela-lesk-dub-barovy-pult-02-sirka.jpg',
      'kuchyne/kuchyna-biela-lesk-dub-barovy-pult-04-linka.jpg',
      'kuchyne/kuchyna-biela-lesk-dub-barovy-pult-06-drez.jpg',
      'kuchyne/kuchyna-biela-lesk-dub-barovy-pult-05-pult.jpg',
      'kuchyne/kuchyna-biela-lesk-dub-barovy-pult-09-spajza-obe-skrine.jpg',
      'kuchyne/kuchyna-biela-lesk-dub-barovy-pult-07-spajza-otvorena.jpg',
      'kuchyne/kuchyna-biela-lesk-dub-barovy-pult-08-zabudovane-spotrebice.jpg',
    ],
  },
  {
    slug: 'kuchyna-do-u-v-bielom-lesku',
    title: 'Kuchyňa do U v bielom lesku',
    category: 'kuchyne',
    summary:
      'Priestranná kuchyňa do U s lesklými bezúchytkovými dvierkami, sivou pracovnou doskou v dekore dreva a zarámovanými hornými skrinkami. Veľká chladnička je zabudovaná do steny skríň.',
    highlights: ['Tvar U', 'Zarámované horné skrinky', 'Americká chladnička v stene skríň'],
    images: [
      'kuchyne/kuchyna-u-biela-lesk-siva-01-sirka.jpg',
      'kuchyne/kuchyna-u-biela-lesk-siva-02-sirka.jpg',
      'kuchyne/kuchyna-u-biela-lesk-siva-03-spotrebice-sirka.jpg',
    ],
  },
  {
    slug: 'kasmirova-kuchyna-s-ciernymi-profilmi',
    title: 'Kašmírová kuchyňa s čiernymi profilmi',
    category: 'kuchyne',
    summary:
      'Matné dvierka v teplom kašmírovom odtieni, čierne úchytové profily a svetlý dub na pracovnej doske aj zadnej stene. Pracovná doska pokračuje ponad radiátor.',
    highlights: ['Čierne úchytové profily', 'LED pod skrinkami', 'Doska ponad radiátor'],
    images: [
      'kuchyne/kuchyna-kasmir-matna-cierny-profil-01-sirka.jpg',
      'kuchyne/kuchyna-kasmir-matna-cierny-profil-02.jpg',
      'kuchyne/kuchyna-kasmir-matna-cierny-profil-03-vysoke-skrine.jpg',
      'kuchyne/kuchyna-kasmir-matna-cierny-profil-04-pracovna-doska.jpg',
    ],
  },
  {
    slug: 'kuchyna-do-l-bez-uchytiek',
    title: 'Kuchyňa do L bez úchytiek',
    category: 'kuchyne',
    summary:
      'Svetlá kuchyňa do L s hornými skrinkami až po strop, zadnou stenou v dekore dreva a LED podsvietením pracovnej dosky.',
    highlights: ['Skrinky až po strop', 'LED podsvietenie', 'Bez úchytiek'],
    images: [
      'kuchyne/kuchyna-l-bezuchytkova-01-sirka.jpg',
      'kuchyne/kuchyna-l-bezuchytkova-02.jpg',
      'kuchyne/kuchyna-l-bezuchytkova-03.jpg',
    ],
  },
  {
    slug: 'biela-leskla-kuchyna-do-l',
    title: 'Biela lesklá kuchyňa do L',
    category: 'kuchyne',
    summary: 'Kompaktná kuchyňa do L s lesklými dvierkami, betónovou pracovnou doskou a podsvietením.',
    highlights: ['Vysoký lesk', 'Doska v dekore betón', 'LED podsvietenie'],
    images: [
      'kuchyne/kuchyna-biela-lesk-02-sirka.jpg',
      'kuchyne/kuchyna-biela-lesk-01.jpg',
      'kuchyne/kuchyna-biela-lesk-03.jpg',
    ],
  },
  {
    slug: 'biela-kuchyna-s-lamelami',
    title: 'Biela kuchyňa s lamelami',
    category: 'kuchyne',
    summary: 'Biela kuchyňa doplnená dubovými lamelami a podsvietenými nikami na boku vysokej skrine.',
    highlights: ['Dubové lamely', 'Podsvietené niky'],
    images: ['kuchyne/kuchyna-biela-lamely-01.jpg'],
  },
  {
    slug: 'predsien-so-skrinovou-stenou-a-led',
    title: 'Predsieň so skrinovou stenou a LED',
    category: 'predsiene',
    summary:
      'Celá stena skríň v dekore dub bez úchytiek s LED pásikom pri podlahe. Oproti závesná konzola so zásuvkami a okrúhle zrkadlo.',
    highlights: ['LED pásik pri podlahe', 'Skrine bez úchytiek', 'Závesná konzola'],
    images: ['predsiene/predsien-vstavana-skrina-led-01.jpg', 'predsiene/predsien-zavesna-konzola-zrkadlo-02.jpg'],
    featured: true,
  },
  {
    slug: 'predsien-pod-schodmi',
    title: 'Predsieň so skriňou pod schodmi',
    category: 'predsiene',
    summary:
      'Vysoké skrine, výklenok s lavicou a vešiakmi a skriňa pod schodiskom presne kopírujúca jeho sklon. Kombinácia bielej a betónového dekoru.',
    highlights: ['Skriňa pod schodiskom', 'Lavica s vešiakmi', 'Zrkadlo'],
    images: [
      'predsiene/predsien-pod-schodmi-02.jpg',
      'predsiene/predsien-pod-schodmi-03-skrina-pod-schodiskom.jpg',
      'predsiene/predsien-pod-schodmi-01.jpg',
    ],
    featured: true,
  },
  {
    slug: 'predsien-s-lamelami-a-okruhlym-zrkadlom',
    title: 'Predsieň s lamelami a okrúhlym zrkadlom',
    category: 'predsiene',
    summary: 'Lamelová stena so závesnou zásuvkou, veľké okrúhle zrkadlo a šatníková časť s vešiakmi a lavicou.',
    highlights: ['Lamelová stena', 'Závesná zásuvka', 'Okrúhle zrkadlo'],
    images: [
      'predsiene/predsien-lamely-zasuvka-okruhle-zrkadlo-01.jpg',
      'predsiene/predsien-lamely-zasuvka-okruhle-zrkadlo-02.jpg',
    ],
  },
  {
    slug: 'predsien-s-lamelovou-stenou-a-lavicou',
    title: 'Predsieň s lamelovou stenou a lavicou',
    category: 'predsiene',
    summary: 'Lamelová stena s vešiakmi, lavica s policami na topánky, závesná skrinka a zrkadlo na celú výšku.',
    highlights: ['Vešiaky v lamelách', 'Lavica na topánky', 'Zrkadlo na celú výšku'],
    images: ['predsiene/predsien-lamelova-stena-lavica-04.jpg'],
  },
  {
    slug: 'predsien-so-skrinovou-stenou-a-nikou',
    title: 'Predsieň so skrinovou stenou a nikou',
    category: 'predsiene',
    summary: 'Skrinová stena od podlahy po strop s dubovou nikou na sedenie a prezúvanie.',
    highlights: ['Skrine po strop', 'Dubová nika na sedenie'],
    images: ['predsiene/predsien-skrinova-stena-dubova-nika-01.jpg'],
  },
  {
    slug: 'poschodova-postel-so-schodikmi',
    title: 'Poschodová posteľ so schodíkmi so zásuvkami',
    category: 'detske-izby',
    summary:
      'Poschodová posteľ s lamelovým zábradlím, schodíkmi, v ktorých sú zásuvky, podsvietením spodného lôžka a knižnicou na boku.',
    highlights: ['Zásuvky v schodoch', 'Podsvietené spodné lôžko', 'Knižnica'],
    images: [
      'detske-izby/poschodova-postel-schody-zasuvky-01.jpg',
      'detske-izby/poschodova-postel-schody-zasuvky-02-sirka.jpg',
      'detske-izby/poschodova-postel-schody-zasuvky-03.jpg',
    ],
    featured: true,
  },
  {
    slug: 'detska-izba-s-pisacim-stolom',
    title: 'Detská izba s písacím stolom',
    category: 'detske-izby',
    summary:
      'Celá izba na mieru: písací stôl s policovou skriňou, šatníková skriňa s dubovou nikou a posteľ s úložným priestorom a komodou pod oknom.',
    highlights: ['Písací stôl so zásuvkami', 'Posteľ s úložným priestorom', 'Šatníková skriňa'],
    images: [
      'detske-izby/izba-dzungla-04-postel-komoda-sirka.jpg',
      'detske-izby/izba-dzungla-01-stol-skrina.jpg',
      'detske-izby/izba-dzungla-02-stol-policova-skrina.jpg',
      'detske-izby/izba-dzungla-03-satnikova-skrina.jpg',
    ],
  },
  {
    slug: 'tv-stena-s-lamelami',
    title: 'TV stena s lamelami a knižnicou',
    category: 'obyvacky',
    summary: 'Lamelová TV stena, policová skriňa v dekore dub a dlhá závesná komoda so zásuvkami.',
    highlights: ['Lamelová stena', 'Závesná komoda', 'Knižnica'],
    images: ['obyvacky/tv-stena-lamely-policova-skrina-01-sirka-web.jpg'],
    featured: true,
  },
  {
    slug: 'skrina-do-detskej-izby',
    title: 'Skriňa do detskej izby so sivou nikou',
    category: 'skrine-a-satniky',
    summary: 'Veľká skriňa v dekore dub po strop so sivou otvorenou nikou, zásuvkami a nadstavcami.',
    highlights: ['Nadstavce až po strop', 'Sivá otvorená nika', 'Veľa zásuviek'],
    images: [
      'skrine-satniky/skrina-detska-izba-dub-siva-nika-02.jpg',
      'skrine-satniky/skrina-detska-izba-dub-siva-nika-03-otvorena-sirka.jpg',
      'skrine-satniky/skrina-detska-izba-dub-siva-nika-01.jpg',
    ],
  },
  {
    slug: 'walk-in-satnik',
    title: 'Walk-in šatník',
    category: 'skrine-a-satniky',
    summary: 'Šatník s výsuvným vešiakom, tyčami, zásuvkami a policami až po strop.',
    highlights: ['Výsuvný vešiak', 'Zásuvky', 'Police po strop'],
    images: ['skrine-satniky/satnik-walk-in-01.jpg'],
  },
  {
    slug: 'vstavana-skrina-s-posuvnymi-dverami',
    title: 'Vstavaná skriňa s posuvnými dverami',
    category: 'skrine-a-satniky',
    summary: 'Biela vstavaná skriňa s posuvnými dverami, čiernou úchytkou, tyčou na vešanie a zásuvkami.',
    highlights: ['Posuvné dvere', 'Zásuvky'],
    images: ['skrine-satniky/vstavana-skrina-posuvne-dvere-biela-01.jpg'],
  },
  {
    slug: 'sklapacia-postel-do-skrine',
    title: 'Sklápacia posteľ do skrine',
    category: 'sklapacie-postele',
    summary: 'Cez deň skriňa, večer posteľ. Nad lôžkom je navyše výklopná polica na úložný priestor.',
    highlights: ['Výklopný mechanizmus', 'Polica nad posteľou'],
    images: [
      'sklapacie-postele/sklapacia-postel-01-zatvorena.jpg',
      'sklapacie-postele/sklapacia-postel-02-otvorena.jpg',
      'sklapacie-postele/sklapacia-postel-03-otvorena.jpg',
    ],
  },
  {
    slug: 'pracovna-a-technicka-miestnost',
    title: 'Práčovňa a technická miestnosť',
    category: 'pracovne-a-technicke-miestnosti',
    summary:
      'Práčka so sušičkou v stĺpci, skrinky až po strop, pracovná doska v dekore betón a posuvné dvere, za ktorými sa skrýva kotol.',
    highlights: ['Stĺpec pre práčku a sušičku', 'Posuvné dvere pred kotlom', 'Policová skriňa'],
    featured: true,
    images: [
      'pracovne-technicke-miestnosti/pracovna-beton-biela-01-celok.jpg',
      'pracovne-technicke-miestnosti/pracovna-beton-biela-02-pracka-susicka.jpg',
      'pracovne-technicke-miestnosti/pracovna-beton-biela-06-otvorene-skrinky.jpg',
      'pracovne-technicke-miestnosti/pracovna-beton-biela-03-posuvne-dvere-kotolna.jpg',
      'pracovne-technicke-miestnosti/pracovna-beton-biela-04-policova-skrina.jpg',
    ],
  },
  {
    slug: 'prevadzka-s-lamelovou-stenou-a-skrytymi-dverami',
    title: 'Prevádzka s lamelovou stenou a skrytými dverami',
    category: 'komercne-interiery',
    summary:
      'Vodorovná lamelová stena s dverami ukrytými v obklade a skrinkou pod TV, kuchynka so skrinovou stenou a stôl.',
    highlights: ['Skryté dvere v lamelách', 'Kuchynka', 'Skrinová stena'],
    images: [
      'komercne-interiery/prevadzka-b-lamelova-stena-skryte-dvere-sirka.jpg',
      'komercne-interiery/prevadzka-b-kuchynka-skrinova-stena.jpg',
      'komercne-interiery/prevadzka-b-kuchynka-stol.jpg',
    ],
  },
  {
    slug: 'interier-kancelarie',
    title: 'Interiér kancelárie',
    category: 'komercne-interiery',
    summary:
      'Kuchynka so zaoblenými úchytkami, komoda so zásuvkami, lamelová priečka a obklad s okrúhlym zrkadlom.',
    highlights: ['Lamelová priečka', 'Kuchynka', 'Obklad so zrkadlom'],
    images: [
      'komercne-interiery/kancelaria-a-kuchynka.jpg',
      'komercne-interiery/kancelaria-a-lamelova-priecka.jpg',
      'komercne-interiery/kancelaria-a-obklad-zrkadlo.jpg',
      'komercne-interiery/kancelaria-a-komoda-zasuvky.jpg',
    ],
  },
];

export const projectsInCategory = (slug: string) => projects.filter((p) => p.category === slug);
