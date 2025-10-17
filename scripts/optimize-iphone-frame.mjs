#!/usr/bin/env node
import sharp from 'sharp';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const publicDir = join(__dirname, '..', 'public');

/**
 * Optimize iPhone frame for Lighthouse compliance
 * Create frames at exact container widths
 */
async function optimizeIPhoneFrame() {
  console.log('📱 Optimizing iPhone frame for Lighthouse...\n');

  const framePath = join(publicDir, 'misc', 'iphone-frame.webp');

  // Get original dimensions
  const metadata = await sharp(framePath).metadata();
  const aspectRatio = metadata.height / metadata.width;

  // Frame sizes match container widths
  const sizes = [
    { suffix: '-sm', width: 252 },   // Small mobile (< 400px)
    { suffix: '-md', width: 331 },   // Mobile (400-768px)
    { suffix: '-lg', width: 298 },   // Desktop
    { suffix: '-xl', width: 331 },   // Large screens
  ];

  for (const size of sizes) {
    const outputPath = join(publicDir, 'misc', `iphone-frame${size.suffix}.webp`);
    const newHeight = Math.round(size.width * aspectRatio);

    await sharp(framePath)
      .resize(size.width, newHeight, {
        fit: 'fill',
        kernel: 'lanczos3',
      })
      .webp({ quality: 90 })
      .toFile(outputPath);

    console.log(`  ✓ iphone-frame${size.suffix}.webp (${size.width}x${newHeight})`);
  }

  console.log('\n✅ iPhone frame optimized for all breakpoints\n');
}

optimizeIPhoneFrame();
