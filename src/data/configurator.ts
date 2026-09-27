// Nastavenia konfigurátora skrine na mieru.
//
// !!! CENY SÚ ZATIAĽ ORIENTAČNÉ ODHADY, NIE JURAJOV CENNÍK !!!
// Pred spustením webu ich treba prejsť s klientom. Ak ceny nechce ukazovať,
// nastav showPrice na false a konfigurátor bude posielať len návrh bez ceny.

export const configurator = {
  showPrice: true,
  priceSpread: 0.12, // zobrazí sa rozpätie ± 12 %
  currency: '€',

  limits: {
    width: { min: 60, max: 400, step: 5, default: 240 },
    height: { min: 180, max: 290, step: 5, default: 250 },
    depth: { min: 35, max: 70, step: 5, default: 60 },
  },

  decors: [
    { id: 'biela', label: 'Biela matná', fill: '#f4f2ee', edge: '#d9d4cc', perM2: 170, grain: false },
    { id: 'kasmir', label: 'Kašmír', fill: '#cfc4b6', edge: '#b3a797', perM2: 190, grain: false },
    { id: 'dub', label: 'Dub svetlý', fill: '#d2a878', edge: '#b0875a', perM2: 200, grain: true },
    { id: 'orech', label: 'Orech', fill: '#8a5f3f', edge: '#6d4a30', perM2: 215, grain: true },
    { id: 'beton', label: 'Betón', fill: '#a8a7a3', edge: '#8c8b87', perM2: 205, grain: false },
    { id: 'antracit', label: 'Antracit', fill: '#474a4e', edge: '#33363a', perM2: 195, grain: false },
  ],

  doors: [
    { id: 'otvaracie', label: 'Otváracie', note: 'klasické krídla s tlmeným dovieraním', perM2: 0 },
    { id: 'posuvne', label: 'Posuvné', note: 'šetria miesto pred skriňou', perM2: 55 },
    { id: 'ziadne', label: 'Bez dverí', note: 'otvorený šatník alebo nika', perM2: -80 },
  ],

  handles: [
    { id: 'bez', label: 'Bez úchytiek', note: 'otváranie zatlačením', perDoor: 18 },
    { id: 'profil', label: 'Čierny profil', note: 'úchytka v hrane dvierok', perDoor: 14 },
    { id: 'tyc', label: 'Tyčová úchytka', note: 'klasická kovová', perDoor: 9 },
  ],

  interiors: [
    { id: 'police', label: 'Police', price: 45 },
    { id: 'tyc', label: 'Tyč na vešanie', price: 55 },
    { id: 'tyc2', label: 'Dve tyče (košele)', price: 75 },
    { id: 'zasuvky', label: 'Zásuvky + police', price: 190 },
    { id: 'kombi', label: 'Tyč + zásuvky', price: 210 },
  ],

  extras: [
    { id: 'led', label: 'LED osvetlenie vo vnútri', price: 140 },
    { id: 'montaz', label: 'Doprava a montáž', price: 0, note: 'cenu určíme po zameraní', checked: true, locked: true },
  ],
} as const;

export type Configurator = typeof configurator;
