import {readFile,mkdir,writeFile} from 'node:fs/promises';
const base=new URL('../',import.meta.url);
const m=JSON.parse(await readFile(new URL('game-content.json',base),'utf8'));
await mkdir(new URL('assets/cards/',base),{recursive:true});
for(const item of Object.values(m.items).filter(i=>i.representation==='text')){
  const lines=item.name.split(' '),max=Math.max(...lines.map(l=>l.length));
  const size=Math.min(lines.length===1?60:44,Math.floor(198/(max*.64)));
  const text=lines.map((line,i)=>`<tspan x="120" y="${lines.length===1?139:108+i*53}">${line}</tspan>`).join('');
  const svg=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 240"><text text-anchor="middle" fill="#203975" font-family="Arial,sans-serif" font-weight="900" font-size="${size}">${text}</text></svg>`;
  await writeFile(new URL(`assets/cards/${item.asset}`,base),svg);
}
console.log('Generated readable short plant-function and plant-type cards.');
