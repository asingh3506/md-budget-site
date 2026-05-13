/**
 * Copies the Evidence dashboard static build into public/deep-dive/
 * so Next.js can serve it as part of the same site.
 *
 * Run via: npm run build:dashboard
 * Which executes: cd dashboard && npm run build && node scripts/copy-dashboard.mjs
 */

import { cp, rm, mkdir } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dir = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dir, '..');

const src = resolve(root, 'dashboard', '.evidence', 'build');
const dest = resolve(root, 'public', 'deep-dive');

if (!existsSync(src)) {
  console.error(`Evidence build output not found at:\n  ${src}`);
  console.error('Run "cd dashboard && npm run build" first.');
  process.exit(1);
}

// Clear previous build
if (existsSync(dest)) {
  await rm(dest, { recursive: true });
  console.log('Removed stale build at public/deep-dive/');
}

await mkdir(dest, { recursive: true });
await cp(src, dest, { recursive: true });

console.log(`✓  Evidence build copied to public/deep-dive/`);
console.log('   Access at: http://localhost:3000/deep-dive/');
