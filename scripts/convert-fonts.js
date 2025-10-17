import { readFileSync, writeFileSync } from 'fs';
import ttf2woff2 from 'ttf2woff2';

// Convert CabinSketch.ttf to WOFF2
const ttfInput = readFileSync('./public/fonts/CabinSketch.ttf');
const woff2Output = ttf2woff2(ttfInput);

writeFileSync('./public/fonts/CabinSketch.woff2', woff2Output);
console.log('✅ Converted CabinSketch.ttf to CabinSketch.woff2');
console.log(`Original size: ${(ttfInput.length / 1024).toFixed(2)}KB`);
console.log(`WOFF2 size: ${(woff2Output.length / 1024).toFixed(2)}KB`);
console.log(`Savings: ${(((ttfInput.length - woff2Output.length) / ttfInput.length) * 100).toFixed(1)}%`);
