import fs from 'node:fs';
import path from 'node:path';
const fail=(m)=>{console.error(`VALIDATION FAILED: ${m}`);process.exitCode=1;};
for(const file of ['src/main.tsx','src/App.tsx','src/styles.css','public/assets/hero-child-robot.svg','package-lock.json']) if(!fs.existsSync(file)) fail(`missing required implementation file: ${file}`);
const hero='public/assets/hero-child-robot.svg';
if(fs.existsSync(hero)&&fs.statSync(hero).size<15000) fail('hero image is suspiciously small; do not replace it with a placeholder');
const sourceDir=path.resolve('src');
if(fs.existsSync(sourceDir)){
  const files=fs.readdirSync(sourceDir,{recursive:true}).filter(e=>/\.(tsx?|html)$/i.test(String(e))).map(e=>path.join(sourceDir,String(e)));
  const text=files.map(f=>fs.readFileSync(f,'utf8')).join('\n').toLowerCase();
  for(const marker of ['lorem ipsum','coming soon','todo: replace','placeholder hero']) if(text.includes(marker)) fail(`placeholder content remains: ${marker}`);
}
for(const entry of fs.readdirSync('tests/acceptance')){
  if(!entry.endsWith('.ts')) continue;
  const text=fs.readFileSync(path.join('tests/acceptance',entry),'utf8');
  if(/test\.(skip|only|fixme)\s*\(/.test(text)) fail(`acceptance test contains prohibited skip/only/fixme: ${entry}`);
}
if(process.exitCode) process.exit(process.exitCode);
console.log('Static contract validation passed.');
