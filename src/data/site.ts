// Základné údaje o firme. Polia s hodnotou null sa na webe nezobrazia,
// kým ich nedoplníme od klienta.
export const site = {
  name: 'JUTRSTOL',
  legalName: 'JUTRSTOL s.r.o.',
  owner: 'Juraj Trnka',
  tagline: 'Stolárstvo – nábytok na mieru',
  phone: '+421 905 403 248',
  phoneDisplay: '0905 403 248',
  email: null as string | null, // TODO: e-mail na dopyty
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
  yearsExperience: null as number | null, // TODO: napr. 15 -> zobrazí odznak „15 rokov praxe“
  openingHours: null as string | null, // TODO: napr. 'Po – Pi: 7:00 – 16:00'
  serviceArea: 'Gbely, Záhorie a okolie',
  // Kľúč z https://web3forms.com (zadarmo). Bez neho formulár ponúkne telefonát.
  web3formsKey: '',
  // Online konfigurátor (samostatná aplikácia). `klient` určuje nastavenia pre konkrétne stolárstvo.
  // TODO: po nastavení vlastného profilu zmeniť 'demo' na identifikátor JUTRSTOL.
  configurator: {
    url: 'https://stolar-konfigurator.vercel.app/',
    client: 'demo',
    // Parameter, ktorým konfigurátor otvorí rovno konkrétny typ (napr. &typ=satnik).
    // Musí sedieť s tým, čo číta aplikácia konfigurátora.
    typeParam: 'typ',
    types: ['kuchyna', 'satnik'],
  },
};

export const configuratorHref = `${site.configurator.url}?klient=${encodeURIComponent(site.configurator.client)}`;
export const telHref = `tel:${site.phone.replace(/\s/g, '')}`;
export const fullAddress = `${site.address.street}, ${site.address.zip} ${site.address.city}`;
