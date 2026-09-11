import { expect, test } from '@playwright/test';
import fs from 'node:fs';
const contract=JSON.parse(fs.readFileSync('spec/site-contract.json','utf8'));

test('visible copy avoids AI clichés and dependency mechanics', async ({page})=>{
  await page.goto('/');
  const text=(await page.locator('body').innerText()).toLowerCase();
  for(const phrase of contract.forbiddenMarketingTerms) expect(text,`forbidden marketing phrase: ${phrase}`).not.toContain(phrase.toLowerCase());
  for(const phrase of contract.forbiddenEngagementPatterns) expect(text,`forbidden engagement pattern: ${phrase}`).not.toContain(phrase.toLowerCase());
});

test('page stays intentionally compact', async ({page})=>{
  await page.goto('/');
  expect(await page.locator('main > section').count()).toBeLessThanOrEqual(contract.contentLimits.maxTopLevelSectionsBeforeFooter);
  const heroBody=await page.getByTestId('hero').locator('[data-hero-body]').innerText();
  expect(heroBody.trim().split(/\s+/).filter(Boolean).length).toBeLessThanOrEqual(contract.contentLimits.maxHeroBodyWords);
});

test('hero CTAs lead somewhere real', async ({page})=>{
  await page.goto('/');
  for(const id of ['hero-primary-cta','hero-secondary-cta']){
    const href=await page.getByTestId(id).getAttribute('href');
    expect(href).toBeTruthy();
    expect(href).toMatch(/^#|^\//);
    if(href?.startsWith('#')) await expect(page.locator(href)).toHaveCount(1);
  }
});
