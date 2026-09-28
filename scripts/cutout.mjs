// Vyreže objekt z bieleho pozadia (flood fill od okrajov) a uloží ako priehľadný WebP.
import sharp from 'sharp';
const [src, dst, thr = 232, erode = 2] = process.argv.slice(2);
const { data, info } = await sharp(src).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
const { width: w, height: h } = info;
const bg = new Uint8Array(w * h);
const isLight = (i) => Math.min(data[i * 4], data[i * 4 + 1], data[i * 4 + 2]) >= +thr;
const stack = [];
for (let x = 0; x < w; x++) stack.push(x, (h - 1) * w + x);
for (let y = 0; y < h; y++) stack.push(y * w, y * w + w - 1);
while (stack.length) {
  const p = stack.pop();
  if (bg[p] || !isLight(p)) continue;
  bg[p] = 1;
  const x = p % w, y = (p / w) | 0;
  if (x > 0) stack.push(p - 1);
  if (x < w - 1) stack.push(p + 1);
  if (y > 0) stack.push(p - w);
  if (y < h - 1) stack.push(p + w);
}
// o niekoľko px zúžiť hranu, aby nezostal svetlý lem
for (let pass = 0; pass < +erode; pass++) {
  const grow = [];
  for (let p = 0; p < w * h; p++) {
    if (bg[p]) continue;
    const x = p % w, y = (p / w) | 0;
    if ((x > 0 && bg[p - 1]) || (x < w - 1 && bg[p + 1]) || (y > 0 && bg[p - w]) || (y < h - 1 && bg[p + w])) grow.push(p);
  }
  for (const p of grow) bg[p] = 1;
}
for (let p = 0; p < w * h; p++) {
  if (bg[p]) { data[p * 4 + 3] = 0; continue; }
  // zjemnenie hrany: pixel susediaci s pozadím dostane polovičnú priehľadnosť
  const x = p % w, y = (p / w) | 0;
  if ((x > 0 && bg[p - 1]) || (x < w - 1 && bg[p + 1]) || (y > 0 && bg[p - w]) || (y < h - 1 && bg[p + w])) data[p * 4 + 3] = 140;
}
await sharp(data, { raw: { width: w, height: h, channels: 4 } }).trim().webp({ quality: 88, alphaQuality: 90 }).toFile(dst);
console.log(dst, w, h);
