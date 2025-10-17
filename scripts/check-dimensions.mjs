import sharp from 'sharp';

const files = [
  'public/screenshots/en/dashboard-sm.webp',
  'public/screenshots/en/dashboard-md.webp',
  'public/screenshots/en/dashboard-lg.webp',
  'public/screenshots/en/dashboard-xl.webp',
];

for (const file of files) {
  const meta = await sharp(file).metadata();
  const ratio = (meta.height / meta.width).toFixed(4);
  console.log(`${file.split('/').pop()}: ${meta.width}x${meta.height} (ratio: ${ratio})`);
}
