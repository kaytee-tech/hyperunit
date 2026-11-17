(()=>{
const $=(s,r=document)=>r.querySelector(s),$$=(s,r=document)=>[...r.querySelectorAll(s)];
const CH={arbitrum:['Arbitrum','#213147','A'],avalanche:['Avalanche','#e84142','▲'],base:['Base','#0000ff',''],bitcoin:['Bitcoin','#f7931a','₿'],ethereum:['Ethereum','#627eea','Ξ'],hyperliquid:['Hyperliquid','#0f1a1e','H'],plasma:['Plasma','#12261f','P'],solana:['Solana','#14151a','S']};
// [symbol, description, chain, symbol colour, icon bg]
const A=[['BTC','Native asset on Bitcoin','bitcoin','#f7931a','#f7931a'],['ETH','Native asset on Ethereum','ethereum','#627eea','#627eea'],['USDC','USD Coin on Ethereum','ethereum','','#2775ca'],['USDT','Tether USD on Ethereum','ethereum','','#009393'],['WETH','Wrapped Ether on Ethereum','ethereum','','#fff'],['ENA','Ethena on Ethereum','ethereum','','#1b1b1b'],['ETH','Native asset on Arbitrum','arbitrum','#627eea','#627eea'],['XPL','Native asset on Plasma','plasma','#4cb98a','#12261f'],['USDT0','USDT0 on Plasma','plasma','','#00c08b'],['AVAX','Native asset on Avalanche','avalanche','#ec4a4d','#e84142'],['USDC.e','USDC.e Coin on Avalanche','avalanche','','#2775ca'],['VIRTUAL','Virtual on Base','base','#43b9c5','#d9f3ec'],['ETH','Native asset on Base','base','#627eea','#627eea'],['USDC','USD Coin on Base','base','','#2775ca'],['SOL','Native asset on Solana','solana','#9b5cf6','#14151a'],['USDC','USD Coin on Solana','solana','','#2775ca'],['USDT','Tether USD on Solana','solana','','#009393'],['WSOL','Wrapped SOL on Solana','solana','','#14151a'],['HYPE','Withdrawal from Hyperliquid','hyperliquid','','#0f1a1e']];
let sel=0,chain=null,mode='deposit',view='revert';
const icon=(a,badge=true)=>{const c=CH[a[2]];return `<span class="ico" style="background:${a[4]};${a[4]==='#fff'?'color:#222;border:1px solid #ddd':''}">${a[0][0]}${badge&&a[2]!=='hyperliquid'?`<i class="bd" style="background:${c[1]}">${c[2]}</i>`:''}</span>`};
function paintAsset(){const a=A[sel],c=CH[a[2]];
 $$('.asset-l').forEach(e=>e.innerHTML=icon(a)+`<b style="color:${a[3]||'inherit'}">${a[0]}</b>`);
 $$('[data-sym]').forEach(e=>e.textContent=a[0]);$$('[data-chain-name]').forEach(e=>e.textContent=c[0]);paintMode()}
function paintMode(){const w=mode==='withdraw',a=A[sel];
 $('#view-transfer').classList.toggle('withdraw',w);
 $$('.tab').forEach(t=>t.classList.toggle('on',t.dataset.mode===mode));
 $('#onTxt').textContent=w?'on your Hyperliquid account':`on your ${CH[a[2]][0]} wallet`;
 $('#minLbl').textContent=w?'withdraw':'deposit';
 $('#eta').textContent=w?'~54 minutes':'~31 minutes';
 $('#cost').textContent=w?`0.00000715 ${a[0]} (~0.46 USDC)`:`0.00002763 ${a[0]} (~1.79 USDC)`;
 const c=$('#cta');c.classList.toggle('off',w&&!valid());c.textContent=w?(valid()?'Connect Wallet':'Enter a valid recipient address'):'Connect Wallet';
 $$('.bottom a').forEach(l=>l.classList.toggle('on',view==='transfer'&&l.dataset.mode===mode))}
const valid=()=>($('#recip').value||'').trim().length>=26;
function go(v,m){view=v;if(m)mode=m;document.body.dataset.view=v;
 $('#view-revert').hidden=v!=='revert';$('#view-transfer').hidden=v!=='transfer';
 $$('[data-go]').forEach(l=>l.classList.toggle('on',l.dataset.go===v&&!l.dataset.mode));
 document.title='UNIT · '+(v==='revert'?'Revert':'Transfer');
 $('#mTitle').textContent=v==='revert'?'Select asset to request a revert':'Select asset';paintMode();closeMenu()}
const menu=$('#menu'),closeMenu=()=>menu.classList.remove('open');
$('#burger').onclick=()=>menu.classList.add('open');$('#menuClose').onclick=closeMenu;
$$('[data-go]').forEach(l=>l.addEventListener('click',e=>{e.preventDefault();go(l.dataset.go,l.dataset.mode);history.replaceState(null,'','#'+l.dataset.go);scrollTo(0,0)}));
$$('.tab').forEach(t=>t.onclick=()=>{mode=t.dataset.mode;paintMode()});
$('#recip').addEventListener('input',paintMode);
$$('[data-theme-toggle]').forEach(b=>b.onclick=()=>{const d=document.documentElement,n=d.dataset.theme==='dark'?'light':'dark';d.dataset.theme=n;$$('.theme-btn i').forEach(i=>i.className=n==='dark'?'ri-moon-line':'ri-sun-line');try{localStorage.setItem('theme',n)}catch(e){}});
try{const t=localStorage.getItem('theme');if(t==='dark'){document.documentElement.dataset.theme='dark';$$('.theme-btn i').forEach(i=>i.className='ri-moon-line')}}catch(e){}
/* modal */
const modal=$('#modal'),list=$('#list'),q=$('#q');
function renderList(){const s=q.value.toLowerCase();
 list.innerHTML=A.map((a,i)=>({a,i})).filter(({a})=>(!chain||a[2]===chain)&&(a[0]+a[1]).toLowerCase().includes(s)).map(({a,i})=>`<li data-i="${i}" class="${i===sel?'sel':''}">${icon(a)}<div><b style="color:${a[3]||'inherit'}">${a[0]}</b><small>${a[1]}</small></div>${i===sel?'<i class="ri-check-line ck"></i>':''}</li>`).join('')||'<li style="cursor:default;color:var(--mut)">No assets found</li>'}
$('#chains').innerHTML=Object.entries(CH).map(([k,c])=>`<button data-c="${k}" aria-label="${c[0]}"><span style="background:${c[1]}">${c[2]}</span></button>`).join('');
$('#chains').onclick=e=>{const b=e.target.closest('button');if(!b)return;chain=chain===b.dataset.c?null:b.dataset.c;$$('#chains button').forEach(x=>x.classList.toggle('on',x.dataset.c===chain));renderList()};
const open=()=>{modal.hidden=false;q.value='';renderList()},close=()=>modal.hidden=true;
$$('[data-open-modal]').forEach(b=>b.onclick=open);$('#mClose').onclick=close;
modal.onclick=e=>{if(e.target===modal)close()};document.addEventListener('keydown',e=>{if(e.key==='Escape'){close();closeMenu()}});
q.oninput=renderList;
list.onclick=e=>{const li=e.target.closest('li[data-i]');if(!li)return;sel=+li.dataset.i;paintAsset();close()};
/* ascii placeholder art */
(()=>{const R=34,C=56,ch='#@&B$%G?7Y!:.-^';let o='';for(let y=0;y<R;y++){for(let x=0;x<C;x++){const dx=(x-C/2)/(C/2),dy=(y-R*.55)/(R/2),d=dx*dx+dy*dy,r=Math.random();o+=d<.55&&r>.04?ch[Math.floor(r*6)]:d<1&&r>d-.2?ch[6+Math.floor(r*9)]:' '}o+='\n'}$('#ascii').textContent=o})();
paintAsset();go(location.hash==='#transfer'?'transfer':'revert');
})();
