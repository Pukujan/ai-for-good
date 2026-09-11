import AxeBuilder from '@axe-core/playwright';
import { expect, test } from '@playwright/test';
for(const viewport of [{name:'desktop',width:1440,height:1000},{name:'mobile',width:390,height:844}]){
  test(`${viewport.name} has no serious or critical axe violations`,async({page})=>{
    await page.setViewportSize({width:viewport.width,height:viewport.height});
    await page.goto('/');
    const results=await new AxeBuilder({page}).analyze();
    const severe=results.violations.filter(v=>['serious','critical'].includes(v.impact??''));
    expect(severe,JSON.stringify(severe,null,2)).toEqual([]);
  });
}
