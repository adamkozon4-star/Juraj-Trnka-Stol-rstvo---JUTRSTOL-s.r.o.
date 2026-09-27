import type { ImageMetadata } from 'astro';

const files = import.meta.glob<{ default: ImageMetadata }>('/fotky/realizacie/**/*.{jpg,jpeg,png,webp}', {
  eager: true,
});

/** Vráti fotku podľa cesty relatívnej k fotky/realizacie/. */
export function photo(path: string): ImageMetadata {
  const mod = files[`/fotky/realizacie/${path}`];
  if (!mod) throw new Error(`Chýba fotka: fotky/realizacie/${path}`);
  return mod.default;
}
