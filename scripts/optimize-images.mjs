#!/usr/bin/env node
import sharp from 'sharp';
import { readdir } from 'fs/promises';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const publicDir = join(__dirname, '..', 'public');

/**
 * Optimize screenshots for Lighthouse mobile audit
 * Creates images at EXACT CSS display widths to eliminate "oversized" warnings
 *
 * Sizes target actual display dimensions from Lighthouse analysis:
 * - 250px: Very small mobile (< 400px viewport)
 * - 311px: Mobile app banner (based on container calculations)
 * - 327px: Mobile hero screenshots (327x709 display in Lighthouse)
 * - 298px: Desktop hero screenshots
 */
async function optimizeScreenshots() {
  console.log('📱 Optimizing screenshots for Lighthouse compliance...\n');
  const screenshotsDir = join(publicDir, 'screenshots');
  const languages = ['en', 'es', 'tl', 'vi', 'zh-CN'];

  // Create images at exact display widths to pass Lighthouse
  const sizes = [
    { suffix: '-250', width: 250 },  // Very small mobile
    { suffix: '-298', width: 298 },  // Desktop display width
    { suffix: '-311', width: 311 },  // Mobile app banner
    { suffix: '-327', width: 327 },  // Mobile hero (Lighthouse: 327x709)
  ];

  let totalCount = 0;

  for (const lang of languages) {
    const langDir = join(screenshotsDir, lang);
    try {
      const files = await readdir(langDir);
      let langCount = 0;

      for (const file of files) {
        if (!file.endsWith('.webp')) continue;
        // Skip already processed responsive versions
        if (file.includes('-250') || file.includes('-298') || file.includes('-311') || file.includes('-327')) continue;

        const inputPath = join(langDir, file);
        const baseName = file.replace('.webp', '');

        // Get original dimensions to calculate proportional height
        const metadata = await sharp(inputPath).metadata();
        const aspectRatio = metadata.height / metadata.width;

        for (const size of sizes) {
          const outputPath = join(langDir, `${baseName}${size.suffix}.webp`);
          const newHeight = Math.round(size.width * aspectRatio);

          await sharp(inputPath)
            .resize(size.width, newHeight, {
              fit: 'fill',  // Fill exact dimensions (no black bars)
              kernel: 'lanczos3',  // High quality resampling
            })
            .webp({
              quality: 90,  // High quality to preserve detail
              effort: 6,  // More compression effort
            })
            .toFile(outputPath);
        }

        console.log(`  ✓ ${lang}/${baseName} → 4 sizes (250px, 298px, 311px, 327px)`);
        langCount++;
        totalCount++;
      }

      console.log(`  → ${lang}: ${langCount} screenshots optimized\n`);
    } catch (error) {
      console.warn(`  ⚠️  Could not process ${lang}: ${error.message}\n`);
    }
  }

  console.log(`✅ Optimized ${totalCount} screenshots across ${languages.length} languages`);
  console.log(`💾 Images sized exactly for Lighthouse display dimensions (no oversizing warnings)\n`);
}

/**
 * Main execution
 */
async function main() {
  console.log('🚀 Starting Lighthouse-optimized image generation...\n');

  try {
    await optimizeScreenshots();
    console.log('🎉 All images optimized for zero Lighthouse warnings!');
  } catch (error) {
    console.error('❌ Error during optimization:', error);
    process.exit(1);
  }
}

main();
