// =============================================
//  DADOS DOS PERSONAGENS
//  As imagens ficam na pasta images/
// =============================================
const CHARACTERS = [
{ id:‘laura’,     name:‘Laura’,     job:‘Arquiteta’,  emoji:‘👑’, img:‘images/IMG_6056.jpeg’ },
{ id:‘valentina’, name:‘Valentina’, job:‘Cientista’,  emoji:‘🔬’, img:‘images/IMG_6046.jpeg’ },
{ id:‘giovanna’,  name:‘Giovanna’,  job:‘Médica’,     emoji:‘💊’, img:‘images/IMG_6043.jpeg’ },
{ id:‘valcely’,   name:‘Valcely’,   job:‘Estilista’,  emoji:‘✂️’, img:‘images/IMG_6040.jpeg’ },
{ id:‘lidiane’,   name:‘Lidiane’,   job:‘Biomédica’,  emoji:‘🧬’, img:‘images/IMG_6025.jpeg’ },
{ id:‘ayla’,      name:‘Ayla’,      job:‘Professora’, emoji:‘📚’, img:‘images/IMG_6068.jpeg’ },
{ id:‘vitoria’,   name:‘Vitória’,   job:‘Cantora’,    emoji:‘🎤’, img:‘images/IMG_6035.jpeg’ },
{ id:‘ana’,       name:‘Ana’,       job:‘Advogada’,   emoji:‘⚖️’, img:‘images/IMG_6031.jpeg’ },
{ id:‘isa’,       name:‘Isa’,       job:‘Fotógrafa’,  emoji:‘📸’, img:‘images/IMG_6029.jpeg’ },
{ id:‘aurora’,    name:‘Aurora’,    job:‘Chef’,       emoji:‘👩‍🍳’, img:‘images/IMG_6036.jpeg’ },
];

// =============================================
//  OUTFITS (looks para o jogo de vestir)
// =============================================
const OUTFITS = [
{ img:‘images/IMG_6056.jpeg’, label:‘Rosa Floral’,  emoji:‘👗’ },
{ img:‘images/IMG_6025.jpeg’, label:‘Brilhosa’,     emoji:‘✨’ },
{ img:‘images/IMG_6035.jpeg’, label:‘All Pink’,     emoji:‘💗’ },
{ img:‘images/IMG_6022.jpeg’, label:‘Tutu Rosa’,    emoji:‘🌸’ },
{ img:‘images/IMG_6023.jpeg’, label:‘Mini Rosa’,    emoji:‘💜’ },
{ img:‘images/IMG_6064.jpeg’, label:‘Roxo’,         emoji:‘🎀’ },
{ img:‘images/IMG_6060.jpeg’, label:‘Renda’,        emoji:‘🩵’ },
{ img:‘images/IMG_6034.jpeg’, label:‘Blazer’,       emoji:‘⚫’ },
{ img:‘images/IMG_6031.jpeg’, label:‘Preto Chique’, emoji:‘🤍’ },
{ img:‘images/IMG_6043.jpeg’, label:‘Branco Puro’,  emoji:‘🧸’ },
];

// =============================================
//  MAQUIAGEM
// =============================================
const MAKEUPS = [
{ label:‘Rosa’,     swatch:’#FF69B4’ },
{ label:‘Vermelho’, swatch:’#FF0040’ },
{ label:‘Nude’,     swatch:’#D2956A’ },
{ label:‘Lilás’,    swatch:’#C77DFF’ },
{ label:‘Coral’,    swatch:’#FF6B6B’ },
{ label:‘Dourado’,  swatch:’#FFD700’ },
];

// =============================================
//  DECORAÇÃO
// =============================================
const DECO_ITEMS = [‘🛋️’,‘🖼️’,‘🌸’,‘⭐’,‘🧸’,‘💝’,‘🌈’,‘🎀’,‘🕯️’,‘🌺’,‘🦋’,‘💎’,‘🪴’,‘🎊’,‘✨’];

const ROOM_BGS = [
{ c:‘linear-gradient(180deg,#FFB3C6 0%,#FFC8DD 60%,#F8A5C2 100%)’, n:‘Rosa’ },
{ c:‘linear-gradient(180deg,#B3D1FF 0%,#C8E6FF 60%,#A5C8F8 100%)’, n:‘Azul’ },
{ c:‘linear-gradient(180deg,#E0B3FF 0%,#ECC8FF 60%,#D8A5F8 100%)’, n:‘Lilás’ },
{ c:‘linear-gradient(180deg,#B3FFD1 0%,#C8FFE6 60%,#A5F8C8 100%)’, n:‘Verde’ },
{ c:‘linear-gradient(180deg,#FFF3B3 0%,#FFFAC8 60%,#F8F0A5 100%)’, n:‘Amarelo’ },
{ c:‘linear-gradient(180deg,#222 0%,#111 100%)’,                    n:‘Dark’ },
];

// =============================================
//  QUIZ
// =============================================
const QUIZ_QS = [
{ q:‘Qual a cor mais associada à Barbie?’,           opts:[‘Azul’,‘Verde’,‘Rosa’,‘Amarelo’],                  ans:2 },
{ q:‘O que é básico em qualquer look fashion?’,      opts:[‘Acessórios’,‘Conforto’,‘Cores vibrantes’,‘Confiança’], ans:3 },
{ q:‘Qual item faz qualquer look ficar mais chique?’,opts:[‘Tênis’,‘Bolsa de luxo’,‘Camiseta simples’,‘Bermuda’], ans:1 },
{ q:‘Em qual estação combinam roupas mais coloridas?’,opts:[‘Inverno’,‘Outono’,‘Verão’,‘Primavera’],           ans:2 },
{ q:‘O que é “total look”?’,                         opts:[‘Look todo de uma cor’,‘Look todo preto’,‘Mix de marcas’,‘Roupa casual’], ans:0 },
{ q:‘Qual tecido é sinônimo de elegância?’,          opts:[‘Malha’,‘Seda’,‘Algodão’,‘Moleton’],               ans:1 },
];

// =============================================
//  AVENTURA
// =============================================
const STORY = [
{
scene:‘🏰’,
text:’%nome% acorda no seu lindo castelo rosa. Um convite mágico chegou: o Baile das Estrelas começa em 1 hora! O que fazer?’,
choices:[
{ t:‘💄 Ir ao salão preparar o look!’, n:1 },
{ t:‘👗 Escolher o vestido primeiro!’, n:2 }
]
},
{
scene:‘💄’,
text:‘No salão, a maquiadora cria um look incrível com glitter dourado e batom rosa. Você está deslumbrante! Mas esqueceu o sapato!’,
choices:[
{ t:‘👠 Correr para buscar o sapato’, n:3 },
{ t:‘✨ Ir descalça — é tendência!’,  n:4 }
]
},
{
scene:‘👗’,
text:‘Você encontra três vestidos perfeitos: rosa com strass, lilás de seda e vermelho com brilho. Qual escolher?’,
choices:[
{ t:‘💗 Rosa com strass!’, n:3 },
{ t:‘💜 Lilás de seda!’,   n:3 }
]
},
{
scene:‘🌟’,
text:‘Você chega ao baile deslumbrante! Todos param para te olhar. Sua amiga Vitória corre até você — ela precisa de ajuda!’,
choices:[
{ t:‘🤝 Ajudar a amiga’,             n:5 },
{ t:‘💃 Aproveitar o baile primeiro’, n:6 }
]
},
{
scene:‘✨’,
text:‘Você entra no baile descalça e vira sensação! O estilista da festa quer fotografar seu look para a revista!’,
choices:[
{ t:‘📸 Posar para a foto!’,          n:5 },
{ t:‘👠 Pedir um sapato emprestado’,  n:5 }
]
},
{
scene:‘💖’,
text:‘Você ajuda sua amiga e juntas vocês dançam a noite toda! No fim, você ganha o prêmio de Melhor Look da Noite!’,
choices:[
{ t:‘🏆 Aceitar o prêmio!’, n:7 }
]
},
{
scene:‘💃’,
text:‘Você dança maravilhosamente e vira o centro das atenções! O príncipe do castelo vem te convidar para uma dança especial!’,
choices:[
{ t:‘💃 Dançar com o príncipe!’, n:7 }
]
},
{
scene:‘🎊’,
text:‘Que noite incrível! %nome% viveu uma aventura inesquecível. As amigas te aguardam para a próxima missão! 🌟’,
choices:[
{ t:‘🔄 Jogar de novo!’, n:0 }
]
},
];

// =============================================
//  ESTADO
// =============================================
let curChar   = null;
let runwayScore = 0;
let runwayPos   = 10;
let quizIdx   = 0;
let quizScore = 0;
let quizLocked = false;
let decoCount = 3;

// =============================================
//  INIT
// =============================================
window.addEventListener(‘DOMContentLoaded’, () => {
initStars();
buildCharsGrid();
buildBeautyGrid();
initDecoPanel();
initRunwayLights();
initHomeDoll();
});

// =============================================
//  HOME DOLL
// =============================================
function initHomeDoll() {
// Tenta mostrar a primeira imagem disponível na home
const el = document.getElementById(‘home-doll’);
if (!el) return;
const img = document.createElement(‘img’);
img.className = ‘home-doll’;
img.src = ‘images/IMG_6056.jpeg’;
img.alt = ‘’;
img.onerror = () => { img.style.display = ‘none’; el.style.display = ‘flex’; };
img.onload  = () => { el.style.display = ‘none’; el.parentNode.insertBefore(img, el); };
el.parentNode.insertBefore(img, el);
}

// =============================================
//  STARS
// =============================================
function initStars() {
const bg = document.getElementById(‘stars-bg’);
for (let i = 0; i < 40; i++) {
const s = document.createElement(‘div’);
s.className = ‘star-dot’;
const sz = Math.random() * 4 + 1;
s.style.cssText = `width:${sz}px;height:${sz}px;top:${Math.random()*100}%;left:${Math.random()*100}%;opacity:${Math.random()*.6+.2};animation-delay:${Math.random()*4}s;animation-duration:${2+Math.random()*4}s;`;
bg.appendChild(s);
}
}

// =============================================
//  NAVEGAÇÃO
// =============================================
function go(id) {
document.querySelectorAll(’.screen’).forEach(s => s.classList.remove(‘active’));
document.getElementById(id).classList.add(‘active’);
window.scrollTo(0, 0);
if (id === ‘vestir’)   buildVestir();
if (id === ‘passarela’) resetRunway();
if (id === ‘salao’)    updateSalaoDoll();
}

// =============================================
//  ÁUDIO
// =============================================
let actx;
function getActx() {
if (!actx) actx = new (window.AudioContext || window.webkitAudioContext)();
return actx;
}
function sfx(type) {
try {
const ctx = getActx();
if (ctx.state === ‘suspended’) ctx.resume();
const osc  = ctx.createOscillator();
const gain = ctx.createGain();
osc.connect(gain); gain.connect(ctx.destination);
const now = ctx.currentTime;
const sounds = {
click:   () => { osc.type=‘sine’;     osc.frequency.setValueAtTime(900,now); osc.frequency.exponentialRampToValueAtTime(1400,now+.1); gain.gain.setValueAtTime(.18,now); gain.gain.exponentialRampToValueAtTime(.01,now+.1); osc.start(now); osc.stop(now+.1); },
magic:   () => { osc.type=‘triangle’; osc.frequency.setValueAtTime(600,now); osc.frequency.setValueAtTime(800,now+.1); osc.frequency.setValueAtTime(1200,now+.2); gain.gain.setValueAtTime(.14,now); gain.gain.linearRampToValueAtTime(0,now+.4); osc.start(now); osc.stop(now+.4); },
success: () => { osc.type=‘sine’;     [440,554,659,880].forEach((f,i) => osc.frequency.setValueAtTime(f,now+i*.15)); gain.gain.setValueAtTime(.18,now); gain.gain.linearRampToValueAtTime(0,now+.8); osc.start(now); osc.stop(now+.8); },
fail:    () => { osc.type=‘sawtooth’; osc.frequency.setValueAtTime(300,now); osc.frequency.exponentialRampToValueAtTime(100,now+.25); gain.gain.setValueAtTime(.15,now); gain.gain.linearRampToValueAtTime(0,now+.25); osc.start(now); osc.stop(now+.25); },
};
(sounds[type] || sounds.click)();
} catch(e) {}
}

// =============================================
//  PERSONAGENS
// =============================================
function buildCharsGrid() {
const grid = document.getElementById(‘chars-grid’);
grid.innerHTML = ‘’;
CHARACTERS.forEach(c => {
const card = document.createElement(‘div’);
card.className = ‘char-card’;
card.innerHTML = `<img class="char-avatar" src="${c.img}" alt="${c.name}" onerror="this.style.display='none';this.nextElementSibling.style.display='flex';"> <div class="char-avatar-placeholder" style="display:none;">${c.emoji}</div> <div class="char-name">${c.name}</div> <div class="char-job">${c.job}</div>`;
card.onclick = () => { sfx(‘magic’); selectChar(c); };
grid.appendChild(card);
});
}

function selectChar(c) {
curChar = c;
buildCastleHeader();
go(‘castle’);
confetti();
toast(`${c.name} está pronta! ✨`);
}

function buildCastleHeader() {
const h = document.getElementById(‘castle-header’);
h.innerHTML = `<img class="active-char-img" src="${curChar.img}" alt="${curChar.name}" onerror="this.style.display='none';this.nextElementSibling.style.display='flex';"> <div class="active-char-placeholder" style="display:none;">${curChar.emoji}</div> <div class="char-info"> <h2>${curChar.name}</h2> <p>${curChar.job}</p> <div class="stars-row"> <span class="star-icon">⭐</span> <span class="star-icon" style="animation-delay:.2s">⭐</span> <span class="star-icon" style="animation-delay:.4s">⭐</span> </div> </div>`;
}

// =============================================
//  VESTIR
// =============================================
function buildVestir() {
// Doll
const stage = document.getElementById(‘vestir-doll’);
if (curChar && stage) {
stage.innerHTML = `<img class="doll-img" id="vestir-img" src="${curChar.img}" alt="${curChar.name}" onerror="this.style.display='none';this.nextElementSibling.style.display='flex';"> <div style="display:none;font-size:5rem;animation:float 4s ease-in-out infinite;">${curChar.emoji}</div>`;
}

// Outfits
const row = document.getElementById(‘outfit-row’);
row.innerHTML = ‘’;
OUTFITS.forEach((o, i) => {
const el = document.createElement(‘div’);
el.className = ‘outfit-placeholder’ + (i === 0 ? ’ sel’ : ‘’);
el.title = o.label;

```
// Tenta carregar imagem; se falhar usa emoji
const img = document.createElement('img');
img.src = o.img;
img.alt = o.label;
img.style.cssText = 'width:70px;height:100px;border-radius:9px;object-fit:cover;display:none;';
img.onload  = () => { el.innerHTML = ''; el.appendChild(img); img.style.display = 'block'; el.style.padding = '0'; };
img.onerror = () => { el.textContent = o.emoji; };
el.appendChild(img);
el.textContent = o.emoji;

el.onclick = () => {
  sfx('click');
  document.querySelectorAll('.outfit-placeholder, .outfit-thumb').forEach(x => x.classList.remove('sel'));
  el.classList.add('sel');
  // Troca a imagem da boneca
  const doll = document.getElementById('vestir-img');
  if (doll) { doll.src = o.img; }
  toast(`Look ${o.label} selecionado! 💗`);
};
row.appendChild(el);
```

});
}

// =============================================
//  PASSARELA
// =============================================
function initRunwayLights() {
const lights = document.getElementById(‘runway-lights’);
if (!lights) return;
lights.innerHTML = ‘’;
[’#FF69B4’,’#FFD700’,’#FF1493’,’#DA70D6’,’#FF69B4’,’#FFD700’,’#FF1493’].forEach((c, i) => {
const l = document.createElement(‘div’);
l.className = ‘r-light’;
l.style.cssText = `background:${c};box-shadow:0 0 8px ${c};animation-delay:${i*.18}s;`;
lights.appendChild(l);
});
}

function resetRunway() {
runwayScore = 0;
runwayPos   = 10;
document.getElementById(‘runway-score’).textContent = ‘0’;
const m = document.getElementById(‘runway-model’);
if (m) m.style.left = ‘10px’;

// Coloca imagem do personagem na passarela
const doll = document.getElementById(‘runway-doll’);
if (doll && curChar) {
doll.innerHTML = `<img src="${curChar.img}" alt="${curChar.name}" style="width:60px;height:90px;object-fit:cover;border-radius:10px;filter:drop-shadow(0 6px 16px rgba(255,20,147,0.6));" onerror="this.style.display='none';this.nextElementSibling.style.display='flex';"> <span style="font-size:3rem;display:none;">${curChar.emoji}</span>`;
}
initRunwayLights();
}

function runwayDo(type) {
sfx(type === ‘pose’ ? ‘magic’ : ‘click’);
const pts  = { walk:10, pose:25, spin:20, wave:15, kiss:30 };
const msgs = { walk:‘👑 Elegante!’, pose:‘💅 Incrível!’, spin:‘🌀 Pirueta!’, wave:‘💖 O público ama!’, kiss:‘💋 Deslumbrante!’ };
runwayScore += pts[type] || 10;
document.getElementById(‘runway-score’).textContent = runwayScore;
runwayPos = Math.min(runwayPos + 28, 250);
if (runwayPos >= 250) runwayPos = 10;
const m = document.getElementById(‘runway-model’);
if (m) m.style.left = runwayPos + ‘px’;
toast(msgs[type] + ` +${pts[type]} pts!`);
if (runwayScore >= 100) { confetti(); sfx(‘success’); }
}

// =============================================
//  AVENTURA
// =============================================
function startStory() { showStory(0); }

function showStory(idx) {
const s    = STORY[idx];
const name = curChar ? curChar.name : ‘Barbie’;
document.getElementById(‘story-scene’).textContent = s.scene;
document.getElementById(‘story-text’).textContent  = s.text.replace(/%nome%/g, name);
const ch = document.getElementById(‘story-choices’);
ch.innerHTML = ‘’;
s.choices.forEach(c => {
const btn = document.createElement(‘button’);
btn.className   = ‘choice-btn’;
btn.textContent = c.t;
btn.onclick = () => {
sfx(‘click’);
if (c.n === 7) { confetti(); sfx(‘success’); }
showStory(c.n);
};
ch.appendChild(btn);
});
}

// =============================================
//  SALÃO
// =============================================
function buildBeautyGrid() {
const grid = document.getElementById(‘beauty-grid’);
grid.innerHTML = ‘’;
MAKEUPS.forEach(m => {
const btn = document.createElement(‘button’);
btn.className = ‘beauty-btn’;
btn.innerHTML = `<div class="beauty-swatch" style="background:${m.swatch}"></div>${m.label}`;
btn.onclick = () => {
sfx(‘click’);
document.querySelectorAll(’.beauty-btn’).forEach(b => b.classList.remove(‘sel’));
btn.classList.add(‘sel’);
toast(`Batom ${m.label} aplicado! 💄`);
};
grid.appendChild(btn);
});
}

function updateSalaoDoll() {
const d = document.getElementById(‘salao-doll’);
if (!d || !curChar) return;
d.innerHTML = `<img class="beauty-doll" src="${curChar.img}" alt="${curChar.name}" onerror="this.style.display='none';this.nextElementSibling.style.display='flex';"> <div class="beauty-doll-placeholder" style="display:none;">${curChar.emoji}</div>`;
}

// =============================================
//  QUIZ
// =============================================
function startQuiz() {
quizIdx    = 0;
quizScore  = 0;
quizLocked = false;
showQuestion();
}

function showQuestion() {
if (quizIdx >= QUIZ_QS.length) {
document.getElementById(‘quiz-q’).textContent = ‘🎉 Quiz completo!’;
document.getElementById(‘quiz-opts’).innerHTML = ` <div style="text-align:center;font-size:1.2rem;color:var(--gold);margin:8px 0;"> Você acertou ${quizScore} de ${QUIZ_QS.length}! </div> <button class="action-btn" style="margin:12px auto;display:block;" onclick="startQuiz()"> Jogar de novo! </button>`;
document.getElementById(‘quiz-score’).textContent = quizScore + ’ pts’;
if (quizScore >= 4) { confetti(); sfx(‘success’); }
return;
}
const q = QUIZ_QS[quizIdx];
document.getElementById(‘quiz-q’).textContent = `${quizIdx + 1}. ${q.q}`;
document.getElementById(‘quiz-score’).textContent = quizScore + ’ pts’;
const opts = document.getElementById(‘quiz-opts’);
opts.innerHTML = ‘’;
q.opts.forEach((o, i) => {
const btn = document.createElement(‘button’);
btn.className   = ‘quiz-opt’;
btn.textContent = o;
btn.onclick = () => {
if (quizLocked) return;
quizLocked = true;
const correct = (i === q.ans);
btn.classList.add(correct ? ‘correct’ : ‘wrong’);
if (!correct) opts.children[q.ans].classList.add(‘correct’);
if (correct) { quizScore++; sfx(‘success’); toast(‘Correto! +1 🎉’); }
else         { sfx(‘fail’); toast(‘Errou! 😢’); }
document.getElementById(‘quiz-score’).textContent = quizScore + ’ pts’;
setTimeout(() => { quizIdx++; quizLocked = false; showQuestion(); }, 1300);
};
opts.appendChild(btn);
});
}

// =============================================
//  DECORAÇÃO
// =============================================
function initDecoPanel() {
// Swatches de cor
const bgs = document.getElementById(‘bg-swatches’);
if (bgs) {
bgs.innerHTML = ‘’;
ROOM_BGS.forEach((b, i) => {
const el = document.createElement(‘div’);
el.className = ‘bg-swatch’ + (i === 0 ? ’ sel’ : ‘’);
el.style.background = b.c;
el.title = b.n;
el.onclick = () => {
sfx(‘click’);
document.querySelectorAll(’.bg-swatch’).forEach(x => x.classList.remove(‘sel’));
el.classList.add(‘sel’);
document.getElementById(‘room-bg’).style.background = b.c;
toast(‘Quarto redecorado! 🎨’);
};
bgs.appendChild(el);
});
}

// Botões de itens
const row = document.getElementById(‘deco-items-row’);
if (row) {
row.innerHTML = ‘’;
DECO_ITEMS.forEach(em => {
const btn = document.createElement(‘button’);
btn.className   = ‘deco-item-btn’;
btn.textContent = em;
btn.onclick = () => { sfx(‘click’); addRoomItem(em); };
row.appendChild(btn);
});
}

// Arrastar itens iniciais
[‘ri0’, ‘ri1’, ‘ri2’].forEach(id => {
const el = document.getElementById(id);
if (el) makeDraggable(el);
});
}

function addRoomItem(emoji) {
const room = document.querySelector(’.room-wrap’);
if (!room) return;
const el = document.createElement(‘div’);
el.className    = ‘room-item-el’;
el.id           = ‘ri’ + (decoCount++);
el.textContent  = emoji;
el.style.left   = (10 + Math.random() * 200) + ‘px’;
el.style.top    = (10 + Math.random() * 150) + ‘px’;
room.appendChild(el);
makeDraggable(el);
toast(‘Adicionado! 🎀’);
}

function makeDraggable(el) {
let drag = false, sx, sy, ox, oy;
const start = (cx, cy) => { drag=true; sx=cx; sy=cy; ox=parseInt(el.style.left)||0; oy=parseInt(el.style.top)||0; el.style.zIndex=99; };
const move  = (cx, cy) => { if (!drag) return; el.style.left=(ox+cx-sx)+‘px’; el.style.top=(oy+cy-sy)+‘px’; };
const end   = ()       => { drag=false; el.style.zIndex=’’; };
el.addEventListener(‘mousedown’,  e => { start(e.clientX, e.clientY); e.preventDefault(); });
el.addEventListener(‘touchstart’, e => { start(e.touches[0].clientX, e.touches[0].clientY); }, { passive:true });
document.addEventListener(‘mousemove’,  e => move(e.clientX, e.clientY));
document.addEventListener(‘touchmove’,  e => move(e.touches[0].clientX, e.touches[0].clientY), { passive:true });
document.addEventListener(‘mouseup’,  end);
document.addEventListener(‘touchend’, end);
}

// =============================================
//  UTILS — TOAST & CONFETTI
// =============================================
function toast(msg) {
const ex = document.querySelector(’.toast’);
if (ex) ex.remove();
const el = document.createElement(‘div’);
el.className   = ‘toast’;
el.textContent = msg;
document.body.appendChild(el);
setTimeout(() => el.remove(), 2400);
}

function confetti() {
const colors = [’#FF69B4’,’#FFD700’,’#FF1493’,’#DA70D6’,’#fff’,’#FF80AB’];
for (let i = 0; i < 45; i++) {
const c = document.createElement(‘div’);
c.className = ‘confetti-p’;
c.style.cssText = `left:${Math.random()*100}vw;background:${colors[Math.floor(Math.random()*colors.length)]};animation-delay:${Math.random()*.8}s;animation-duration:${1+Math.random()*1.2}s;transform:rotate(${Math.random()*360}deg);border-radius:${Math.random()>.5?'50%':'3px'};`;
document.body.appendChild(c);
setTimeout(() => c.remove(), 2800);
}
}