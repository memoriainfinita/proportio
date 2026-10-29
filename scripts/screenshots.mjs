// Screenshots for docs/guide, from index.html served with `python -m http.server 4184` in the repository root.
// Firefox, muted. Run by hand when the interface changes: `node scripts/screenshots.mjs`.
// Needs Playwright (not a dependency of the project): set PLAYWRIGHT to the path of its index.mjs.

const { firefox } = await import(process.env.PLAYWRIGHT ?? '@playwright/test');

const url = process.env.URL ?? 'http://127.0.0.1:4184/';
const out = 'docs/guide/img/';
const browser = await firefox.launch({ firefoxUserPrefs: { 'media.volume_scale': '0.0' } });
const page = await (await browser.newContext({ viewport: { width: 1440, height: 900 }, locale: 'en-US' })).newPage();

await page.goto(url);
await page.waitForTimeout(1500);
await page.screenshot({ path: `${out}start.png` });

await page.getByRole('button', { name: '▶ Play' }).click();
await page.waitForTimeout(2500);
await page.screenshot({ path: `${out}playing.png` });

await page.getByRole('textbox', { name: 'Presets' }).fill('Hemiola');
await page.getByRole('button', { name: 'Guardar' }).click();
await page.waitForTimeout(500);
await page.screenshot({ path: `${out}preset.png` });

await browser.close();
