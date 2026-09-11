import { test } from '@playwright/test';
import fs from 'node:fs';
const viewports=[{name:'desktop',width:1440,height:1000},{name:'tablet',width:834,height:1112},{name:'mobile',width:390,height:844}];
fs.mkdirSync('artifacts/screenshots',{recursive:true});
for(const viewport of viewports){
  test(`@screenshot capture ${viewport.name}`,async({page})=>{
    await page.setViewportSize({width:viewport.width,height:viewport.height});
    await page.goto('/');
    await page.screenshot({path:`artifacts/screenshots/home-${viewport.name}.png`,fullPage:true,animations:'disabled'});
  });
}
