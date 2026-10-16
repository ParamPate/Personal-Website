import {test} from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync,existsSync} from 'node:fs';
test('about-page assets exist and all section labels resolve',()=>{
 const source=readFileSync(new URL('./main.jsx',import.meta.url),'utf8');
 for(const [,asset] of source.matchAll(/src="(\/sprites\/[^" ]+)"/g)) assert.ok(existsSync(`public${asset}`),asset);
 for(const [,id] of source.matchAll(/aria-labelledby="([^"]+)"/g)) assert.ok(source.includes(`id="${id}"`),id);
});
