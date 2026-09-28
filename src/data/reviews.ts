// Recenzie zákazníkov z Facebooku JUTRSTOL (https://www.facebook.com/JuTrStol/reviews/).
// Texty doslovne z Facebooku. Kým nie je žiadna recenzia s textom, sekcia sa nezobrazí.

export interface Review {
  /** Meno tak, ako je na Facebooku (priezvisko skrátené) */
  name: string;
  /** Text recenzie */
  text: string;
  /** Čo sa robilo, napr. „Kuchyňa na mieru“ (nepovinné) */
  project?: string;
  /** Mesiac a rok, napr. „február 2020“ (nepovinné) */
  date?: string;
}

export const reviewsSource = 'https://www.facebook.com/JuTrStol/reviews/';

/** Súhrn z Facebooku – aktualizovať podľa stránky */
export const reviewSummary = {
  recommendPercent: 100,
  count: 5,
  /** Ďalší zákazníci, ktorí odporučili bez textu (krátke mená) */
  others: ['Silvia M. H.', 'Barbara S.', 'Kamil a Janka'],
};

export const reviews: Review[] = [
  {
    name: 'Martina P.',
    text: 'Ďakujeme za krásnu kuchyňu a ďalšie nabytky do domu 🙂 Maximálna spokojnosť 👌',
    project: 'Kuchyňa a nábytok do domu',
    date: 'február 2020',
  },
];
