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
  ico: null as string | null, // TODO
  dic: null as string | null, // TODO
  icDph: null as string | null, // TODO
  yearsExperience: null as number | null, // TODO: napr. 15 -> zobrazí odznak „15 rokov praxe“
  openingHours: null as string | null, // TODO: napr. 'Po – Pi: 7:00 – 16:00'
  serviceArea: 'Gbely, Záhorie a okolie',
  // Kľúč z https://web3forms.com (zadarmo). Bez neho formulár ponúkne telefonát.
  web3formsKey: '',
};

export const telHref = `tel:${site.phone.replace(/\s/g, '')}`;
export const fullAddress = `${site.address.street}, ${site.address.zip} ${site.address.city}`;
