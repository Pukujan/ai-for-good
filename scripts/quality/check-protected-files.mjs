import { execFileSync } from 'node:child_process';
const protectedPrefixes=['AGENTS.md','spec/','docs/','design/reference/','tests/acceptance/','scripts/quality/','.github/workflows/site-quality.yml'];
const run=(...args)=>execFileSync('git',args,{encoding:'utf8'}).trim();
try{run('rev-parse','--verify','origin/main');}catch{console.log('origin/main unavailable; skipping protected-file diff check locally.');process.exit(0);}
const changed=run('diff','--name-only','origin/main...HEAD').split('\n').map(s=>s.trim()).filter(Boolean);
const violations=changed.filter(file=>protectedPrefixes.some(prefix=>prefix.endsWith('/')?file.startsWith(prefix):file===prefix));
if(violations.length){console.error('Implementation PR modified protected acceptance-contract files:');for(const file of violations) console.error(` - ${file}`);console.error('Revert these changes. Change the contract only in a separate owner-approved PR.');process.exit(1);}
console.log('Protected acceptance files are unchanged.');
