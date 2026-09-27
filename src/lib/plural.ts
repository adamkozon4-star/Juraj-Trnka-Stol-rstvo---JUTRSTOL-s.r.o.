/** Slovenské skloňovanie podľa počtu: 1 fotka, 2–4 fotky, 5+ fotiek. */
export const plural = (n: number, one: string, few: string, many: string) =>
  `${n} ${n === 1 ? one : n >= 2 && n <= 4 ? few : many}`;
