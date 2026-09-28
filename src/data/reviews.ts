// Recenzie zákazníkov z Facebooku JUTRSTOL (https://www.facebook.com/JuTrStol/reviews/).
// Mená, dátumy a texty doslovne z Facebooku. Kým je zoznam prázdny, sekcia sa nezobrazí.

export interface Review {
  /** Meno presne ako na Facebooku */
  name: string;
  /** Dátum ako na Facebooku, napr. „14. februára 2020“ */
  date: string;
  /** Text recenzie – ak zákazník len odporučil bez textu, vynechať */
  text?: string;
}

export const reviewsSource = 'https://www.facebook.com/JuTrStol/reviews/';

/** Súhrn z Facebooku – aktualizovať podľa stránky */
export const reviewSummary = { recommendPercent: 100, count: 5 };

export const reviews: Review[] = [
  {
    name: 'MarTina Pavelková',
    date: '14. februára 2020',
    text: 'Ďakujeme za krásnu kuchyňu a ďalšie nabytky do domu 🙂 Maximálna spokojnosť 👌',
  },
  { name: 'Silvia Masaryková Holčíková', date: '2. apríla 2017' },
  { name: 'Barbara Sosnová', date: '2. apríla 2017' },
  { name: 'Kamil A Janka', date: '2. apríla 2017' },
];
