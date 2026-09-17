import dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });

import fs from 'fs';
import path from 'path';
import { GoogleGenAI } from '@google/genai';

const apiKey = process.env.GEMINI_API_KEY;

if (!apiKey) {
  console.error('❌ Error: GEMINI_API_KEY environment variable is missing.');
  console.error('Please set it in your .env.local file or pass it when running the command.');
  process.exit(1);
}

const ai = new GoogleGenAI({ apiKey });
const filePath = process.argv[2];

if (!filePath) {
  console.error('❌ Usage: pnpm generate:auto <path-to-component>');
  console.error('Example: pnpm generate:auto features/offers/components/offer-card/OfferCard.tsx');
  process.exit(1);
}

const absolutePath = path.resolve(process.cwd(), filePath);

if (!fs.existsSync(absolutePath)) {
  console.error(`❌ File not found at path: ${filePath}`);
  process.exit(1);
}

const componentCode = fs.readFileSync(absolutePath, 'utf-8');
const dirName = path.dirname(absolutePath);
const baseName = path.basename(filePath, '.tsx');

async function generateArtifacts() {
  console.log(`🤖 Generating Vitest tests and Storybook 8 stories for ${baseName}...`);

  const prompt = `
You are an expert Next.js 16, Vitest, React Testing Library, and Storybook 8 developer.
Analyze the following React component code from file path "${filePath}":

\`\`\`tsx
${componentCode}
\`\`\`

Generate a JSON object containing two string fields:
1. "testFile": A complete Vitest + React Testing Library test file (${baseName}.test.tsx).
   - Standard RTL setup using @testing-library/react and @testing-library/jest-dom.
   - Test rendering, mock props, interactive elements, and accessible queries.
2. "storyFile": A complete Storybook 8 story file (${baseName}.stories.tsx).
   - CRITICAL: Import type { Meta, StoryObj } strictly from '@storybook/react'.
   - CRITICAL: Include a default export meta object with a "title" matching the file hierarchy:
     * If the file is under "features/navigation/components/footer", title MUST be "Features/Navigation/Footer".
     * If under "features/offers/components/offer-card", title MUST be "Features/Offers/Offer Card".
     * Format general pattern as: "Features/<FeatureName>/<ComponentName>" or "Components/UI/<ComponentName>".
   - Include a valid CSF default export: "export default meta;".
   - Include default story variations with play function interactions where appropriate.

Return ONLY raw JSON in this exact schema without markdown wrap outside the JSON:
{
  "testFile": "file content here",
  "storyFile": "file content here"
}
`;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3.6-flash',
      contents: prompt,
      config: {
        responseMimeType: 'application/json',
      },
    });

    const responseText = response.text;
    if (!responseText) throw new Error('Empty response received from Gemini.');

    const output = JSON.parse(responseText);

    const testPath = path.join(dirName, `${baseName}.test.tsx`);
    const storyPath = path.join(dirName, `${baseName}.stories.tsx`);

    fs.writeFileSync(testPath, output.testFile, 'utf-8');
    fs.writeFileSync(storyPath, output.storyFile, 'utf-8');

    console.log(`✅ Generated: ${path.relative(process.cwd(), testPath)}`);
    console.log(`✅ Generated: ${path.relative(process.cwd(), storyPath)}`);
  } catch (error) {
    console.error('❌ Generation failed:', error);
  }
}

generateArtifacts();
