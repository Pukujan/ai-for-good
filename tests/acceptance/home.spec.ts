import { expect, test } from '@playwright/test';
import fs from 'node:fs';
const contract = JSON.parse(fs.readFileSync('spec/site-contract.json', 'utf8'));

for (const [name, viewport] of Object.entries(contract.viewports) as Array<[string,{width:number;height:number}]>) {
  test.describe(`${name} homepage`, () => {
    test.use({ viewport });

    test('renders required hero and local child + robot image', async ({ page }) => {
      await page.goto('/');
      await expect(page.getByTestId('hero')).toBeVisible();
      await expect(page.getByTestId('hero-title')).toContainText(contract.hero.headlineLine1);
      await expect(page.getByTestId('hero-title')).toContainText(contract.hero.headlineLine2);
      const image = page.getByTestId('hero-image');
      await expect(image).toBeVisible();
      await expect(image).toHaveAttribute('alt', /child/i);
      await expect(image).toHaveAttribute('alt', /robot/i);
      await expect(image).toHaveAttribute('alt', /paper/i);
      const info = await image.evaluate((node) => { const img=node as HTMLImageElement; return {tag:img.tagName,src:img.currentSrc||img.src,naturalWidth:img.naturalWidth,naturalHeight:img.naturalHeight}; });
      expect(info.tag).toBe('IMG');
      expect(new URL(info.src).origin).toBe('http://127.0.0.1:4173');
      expect(info.naturalWidth).toBeGreaterThan(300);
      expect(info.naturalHeight).toBeGreaterThan(300);
      const body = await page.locator('body').innerText();
      expect(body).toContain(contract.hero.body);
      await expect(page.getByTestId('hero-primary-cta')).toHaveText(contract.hero.primaryCta);
      await expect(page.getByTestId('hero-secondary-cta')).toHaveText(contract.hero.secondaryCta);
    });

    test('has no horizontal overflow', async ({ page }) => {
      await page.goto('/');
      const dims=await page.evaluate(()=>({scrollWidth:document.documentElement.scrollWidth,clientWidth:document.documentElement.clientWidth}));
      expect(dims.scrollWidth).toBeLessThanOrEqual(dims.clientWidth+1);
    });

    test('shows market gap and cites source', async ({ page }) => {
      await page.goto('/');
      await expect(page.getByTestId('market-gap')).toContainText(contract.marketGap.headline);
      await expect(page.getByTestId('proof-stat')).toContainText(contract.marketGap.primaryStat);
      await expect(page.getByTestId('proof-stat')).toContainText(contract.marketGap.primaryStatLabel);
      await expect(page.getByTestId('source-link')).toHaveText(/Common Sense Media/i);
      await expect(page.getByTestId('source-link')).toHaveAttribute('href', contract.marketGap.sourceUrl);
    });

    test('contains exactly three core principles', async ({ page }) => {
      await page.goto('/');
      const p=page.getByTestId('principles');
      await expect(page.getByTestId('principle-ask')).toContainText('Start with the question.');
      await expect(page.getByTestId('principle-think')).toContainText('Get a hint, not the answer.');
      await expect(page.getByTestId('principle-try')).toContainText('Practice without help.');
      await expect(p.locator('[data-principle]')).toHaveCount(3);
      await expect(page.getByTestId('independence-quote')).toContainText('Try this one without me.');
    });
  });
}

test.describe('mobile-specific contract', () => {
  test.use({ viewport: contract.viewports.mobile });
  test('keeps hero image prominent on mobile', async ({ page }) => {
    await page.goto('/');
    const box=await page.getByTestId('hero-image').boundingBox();
    expect(box).not.toBeNull();
    expect(box!.y).toBeLessThanOrEqual(contract.mobileHeroImage.maxTopPx);
    expect(box!.width).toBeGreaterThanOrEqual(contract.mobileHeroImage.minWidthPx);
    expect(box!.height).toBeGreaterThanOrEqual(contract.mobileHeroImage.minHeightPx);
    const market=await page.getByTestId('market-gap').boundingBox();
    expect(market).not.toBeNull();
    expect(box!.y+box!.height).toBeLessThanOrEqual(market!.y+2);
  });
  test('mobile menu is usable', async ({ page }) => {
    await page.goto('/');
    const button=page.getByTestId('mobile-menu-button');
    await expect(button).toBeVisible();
    await expect(button).toHaveAttribute('aria-expanded','false');
    await button.click();
    await expect(button).toHaveAttribute('aria-expanded','true');
    await expect(page.getByTestId('mobile-menu')).toBeVisible();
    await page.keyboard.press('Escape');
    await expect(button).toHaveAttribute('aria-expanded','false');
  });
});
