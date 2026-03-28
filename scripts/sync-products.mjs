import { mkdir, writeFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';

const outputPath = resolve('src/data/products.generated.json');

const seedPayload = {
  generatedAt: new Date().toISOString(),
  source:
    'https://www.transamericalifebermuda.com/en/our-insurance-solutions',
  note:
    'This is a placeholder sync script. Replace the seed payload with parsed source data after confirming the source HTML structure and deployment environment.'
};

await mkdir(dirname(outputPath), { recursive: true });
await writeFile(outputPath, JSON.stringify(seedPayload, null, 2));

console.log(`Wrote placeholder output to ${outputPath}`);
