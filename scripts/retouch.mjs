// Jednorazové úpravy fotiek pre web (originály ostávajú v archíve).
import sharp from 'sharp';

const R = 'fotky/realizacie';

// TV stena: stmaviť obrazovku s cudzím obsahom
const tv = `${R}/obyvacky/tv-stena-lamely-policova-skrina-01-sirka.jpg`;
const screen = await sharp({
  create: { width: 440, height: 222, channels: 4, background: { r: 18, g: 18, b: 20, alpha: 1 } },
}).png().toBuffer();
await sharp(tv)
  .composite([{ input: screen, left: 1053, top: 540 }])
  .jpeg({ quality: 90 })
  .toFile(`${R}/obyvacky/tv-stena-lamely-policova-skrina-01-sirka-web.jpg`);

// Kuchyňa s barovým pultom: orezať pravý okraj s pohľadom na WC
const bar = `${R}/kuchyne/kuchyna-biela-lesk-dub-barovy-pult-03-celok-sirka.jpg`;
await sharp(bar)
  .extract({ left: 0, top: 0, width: 1560, height: 1126 })
  .jpeg({ quality: 90 })
  .toFile(`${R}/kuchyne/kuchyna-biela-lesk-dub-barovy-pult-03-celok-sirka-web.jpg`);
