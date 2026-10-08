// Základné údaje o firme. Polia s hodnotou null sa na webe nezobrazia,
// kým ich nedoplníme od klienta.
export const site = {
  name: 'JUTRSTOL',
  legalName: 'JUTRSTOL s.r.o.',
  owner: 'Juraj Trnka',
  tagline: 'Stolárstvo – nábytok na mieru',
  phone: '+421 905 403 248',
  phoneDisplay: '0905 403 248',
  email: 'jutrstol@gmail.com' as string | null,
  address: {
    street: 'Piesky 1605',
    zip: '908 45',
    city: 'Gbely',
    region: 'Trnavský kraj',
    country: 'SK',
  },
  geo: null as { lat: number; lng: number } | null, // TODO: presné súradnice dielne
  facebook: 'https://www.facebook.com/JuTrStol/',
  // Fakturačné údaje (zdroj: Obchodný register / FinStat)
  legalSeat: 'Piesky 1605/2, 908 45 Gbely',
  ico: '50757741' as string | null,
  dic: '2120469131' as string | null,
  icDph: null as string | null, // doplniť, ak je firma platiteľ DPH
  yearsExperience: 25 as number | null,
  openingHours: null as string | null, // TODO: napr. 'Po – Pi: 7:00 – 16:00'
  serviceArea: 'Záhorie, západné Slovensko a Česko',
  // Oblasti pôsobenia podľa odovzdávacieho dotazníka
  serviceRegions: ['Okres Skalica', 'Okres Senica', 'Myjava', 'Malacky', 'Trenčín', 'Bratislava', 'Hodonín a okolie', 'Brno', 'Praha'],
  // Obchodné podmienky z dotazníka
  deliveryWeeks: '4 až 8 týždňov',
  // Dopyty z formulára odosiela /api/dopyt cez Resend (kľúč RESEND_API_KEY je len vo Verceli).
  // Odosiela sa z agentúrnej domény Peak Studio overenej v Resend; odpovede idú zákazníkovi / Jurajovi cez reply-to.
  mailFrom: 'JUTRSTOL <jutrstol@send.peakstudio.sk>',
  // Online konfigurátor (samostatná aplikácia). `klient` určuje nastavenia pre konkrétne stolárstvo.
  configurator: {
    url: 'https://stolar-konfigurator.vercel.app/',
    client: 'jutrstol',
    // Parameter, ktorým konfigurátor otvorí rovno konkrétny typ (napr. &typ=satnik).
    // Musí sedieť s tým, čo číta aplikácia konfigurátora.
    typeParam: 'typ',
    types: ['kuchyna', 'satnik'],
  },
};

export const configuratorHref = `${site.configurator.url}?klient=${encodeURIComponent(site.configurator.client)}`;
export const telHref = `tel:${site.phone.replace(/\s/g, '')}`;
export const fullAddress = `${site.address.street}, ${site.address.zip} ${site.address.city}`;
