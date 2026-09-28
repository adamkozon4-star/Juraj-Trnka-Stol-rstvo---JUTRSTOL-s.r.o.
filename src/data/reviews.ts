// Recenzie zákazníkov (prepísané z Facebooku JUTRSTOL, doslovne, bez úprav obsahu).
// Kým je zoznam prázdny, sekcia s recenziami sa na webe nezobrazí.

export interface Review {
  /** Meno tak, ako je na Facebooku (napr. „Martina K.“) */
  name: string;
  /** Text recenzie */
  text: string;
  /** Čo sa robilo, napr. „Kuchyňa na mieru“ (nepovinné) */
  project?: string;
  /** Mesiac a rok, napr. „marec 2024“ (nepovinné) */
  date?: string;
}

export const reviewsSource = 'https://www.facebook.com/JuTrStol/reviews/';

export const reviews: Review[] = [{name:'Ukážka Meno',text:'Ukážkový text recenzie, ktorý slúži len na kontrolu dizajnu. Je trochu dlhší, aby bolo vidno zalomenie.',project:'Kuchyňa na mieru',date:'2024'},{name:'Test Druhý',text:'Krátky text.'},{name:'Tretí Test',text:'Stredne dlhý ukážkový text na kontrolu rozloženia kariet.',project:'Predsieň'}];
