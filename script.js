‘use strict’;

// ============================================================
//  DATA
// ============================================================
const CHARACTERS = [
{ id: ‘laura’,     name: ‘Laura’,     job: ‘Arquiteta’,  hair: ‘#ff2d7a’, outfit: ‘#ff6eb4’, shoe: ‘#c200a0’ },
{ id: ‘valentina’, name: ‘Valentina’, job: ‘Cientista’,  hair: ‘#7b00ff’, outfit: ‘#b76eff’, shoe: ‘#3d00cc’ },
{ id: ‘giovanna’,  name: ‘Giovanna’,  job: ‘Medica’,     hair: ‘#c200a0’, outfit: ‘#ff4fb8’, shoe: ‘#7a0070’ },
{ id: ‘valcely’,   name: ‘Valcely’,   job: ‘Estilista’,  hair: ‘#e6a817’, outfit: ‘#ffd700’, shoe: ‘#a07000’ },
{ id: ‘lidiane’,   name: ‘Lidiane’,   job: ‘Biomedica’,  hair: ‘#00e5ff’, outfit: ‘#00b4d8’, shoe: ‘#005f73’ }
];

const JOBS = [‘Arquiteta’, ‘Cientista’, ‘Medica’, ‘Estilista’, ‘Biomedica’, ‘Rainha’];

const HAIR_COLORS  = [’#ff2d7a’,’#7b00ff’,’#ffd700’,’#00e5ff’,’#ff6600’,’#39ff14’,’#ffffff’,’#1a0b1c’];
const OUTFIT_COLORS= [’#ff6eb4’,’#b76eff’,’#00b4d8’,’#ffd700’,’#ff4500’,’#39ff14’,’#c0c0c0’,’#e8d5b7’];
const SHOE_COLORS  = [’#c200a0’,’#3d00cc’,’#005f73’,’#a07000’,’#7a0070’,’#003d00’,’#444444’,’#8b4513’];

const MEMORY_EMOJIS = [‘👑’,‘💎’,‘🌸’,‘🦋’,‘🌟’,‘✨’,‘🎀’,‘💄’,‘👗’,‘🏰’,‘🦄’,‘🌈’];

// ============================================================
//  STATE
// ============================================================
let curChar = { …CHARACTERS[0] };
let sessionStart = Date.now();
let hudInterval = null;

// ============================================================
//  UTILS
// ============================================================
function goScreen(id) {
document.querySelectorAll(’.screen’).forEach(s => s.classList.remove(‘active’));
const el = document.getElementById(id);
if (el) el.classList.add(‘active’);

const showHud = ![‘screen-home’,‘screen-select’].includes(id);
document.getElementById(‘hud’).classList.toggle(‘hidden’, !showHud);

if (id === ‘screen-explore’) startExplore();
if (id === ‘screen-custom’)  buildCustom();
if (id === ‘screen-menu’)    buildMenu();
}

function toast(msg) {
const t = document.getElementById(‘toast’);
t.textContent = msg;
t.classList.remove(‘hidden’);
clearTimeout(t._tid);
t._tid = setTimeout(() => t.classList.add(‘hidden’), 2200);
}

function makeDollSVG(hair, outfit, shoe, scale = 1) {
const w = 60 * scale, h = 88 * scale;
return `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 60 88"> <!-- Hair back --> <ellipse cx="30" cy="14" rx="16" ry="18" fill="${hair}"/> <!-- Head --> <ellipse cx="30" cy="18" rx="13" ry="14" fill="#f5c5a3"/> <!-- Eyes --> <circle cx="25" cy="17" r="2.2" fill="#2d1b00"/> <circle cx="35" cy="17" r="2.2" fill="#2d1b00"/> <circle cx="25.8" cy="16.2" r="0.7" fill="white"/> <circle cx="35.8" cy="16.2" r="0.7" fill="white"/> <!-- Smile --> <path d="M25 23 Q30 27 35 23" stroke="#d4886a" stroke-width="1.5" fill="none" stroke-linecap="round"/> <!-- Cheeks --> <ellipse cx="21" cy="21" rx="4" ry="2.5" fill="#ffb0a0" opacity="0.5"/> <ellipse cx="39" cy="21" rx="4" ry="2.5" fill="#ffb0a0" opacity="0.5"/> <!-- Hair front/top --> <ellipse cx="30" cy="8" rx="14" ry="8" fill="${hair}"/> <!-- Crown --> <path d="M18 6 L22 1 L26 5 L30 0 L34 5 L38 1 L42 6 Z" fill="${shoe}" opacity="0.9"/> <circle cx="30" cy="2" r="1.5" fill="${hair}" opacity="0.8"/> <!-- Neck --> <rect x="26" y="31" width="8" height="6" rx="2" fill="#f5c5a3"/> <!-- Body/Dress --> <path d="M14 37 Q10 70 12 84 L48 84 Q50 70 46 37 Q38 32 22 32 Z" fill="${outfit}"/> <!-- Dress sparkle --> <circle cx="30" cy="55" r="3" fill="white" opacity="0.25"/> <circle cx="22" cy="62" r="2" fill="white" opacity="0.18"/> <circle cx="38" cy="48" r="2" fill="white" opacity="0.18"/> <!-- Dress collar --> <path d="M22 32 Q30 40 38 32" fill="${hair}" opacity="0.7"/> <!-- Arms --> <ellipse cx="10" cy="48" rx="5" ry="14" fill="${outfit}" transform="rotate(-10,10,48)"/> <ellipse cx="50" cy="48" rx="5" ry="14" fill="${outfit}" transform="rotate(10,50,48)"/> <!-- Hands --> <ellipse cx="7" cy="61" rx="4" ry="4" fill="#f5c5a3" transform="rotate(-10,7,61)"/> <ellipse cx="53" cy="61" rx="4" ry="4" fill="#f5c5a3" transform="rotate(10,53,61)"/> <!-- Shoes --> <ellipse cx="20" cy="85" rx="8" ry="4" fill="${shoe}"/> <ellipse cx="40" cy="85" rx="8" ry="4" fill="${shoe}"/> </svg>`;
}

function renderDoll(el, char, large = false) {
if (!el) return;
const scale = large ? 1.7 : 1;
el.innerHTML = makeDollSVG(char.hair, char.outfit, char.shoe, scale);
}

// ============================================================
//  HUD
// ============================================================
function startHud() {
if (hudInterval) clearInterval(hudInterval);
hudInterval = setInterval(updateHud, 1000);
updateHud();
}
function updateHud() {
const now = new Date();
const h = String(now.getHours()).padStart(2,‘0’);
const m = String(now.getMinutes()).padStart(2,‘0’);
const d = String(now.getDate()).padStart(2,‘0’);
const mo = String(now.getMonth()+1).padStart(2,‘0’);
const secs = Math.floor((Date.now() - sessionStart) / 1000);
document.getElementById(‘hud-time’).textContent = h + ‘:’ + m;
document.getElementById(‘hud-date’).textContent = d + ‘/’ + mo;
document.getElementById(‘hud-session’).textContent = ’⏱ ’ + secs + ‘s’;
document.getElementById(‘hud-char’).textContent = ’👸 ’ + curChar.name;
}

// ============================================================
//  BG CANVAS (stars + glitter)
// ============================================================
function initBgCanvas() {
const canvas = document.getElementById(‘bg-canvas’);
const ctx = canvas.getContext(‘2d’);
const stars = [];
const glitter = [];

function resize() {
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
}
resize();
window.addEventListener(‘resize’, resize);

for (let i = 0; i < 120; i++) {
stars.push({ x: Math.random(), y: Math.random(), r: Math.random()*1.5+0.3, s: Math.random()*2+1, p: Math.random()*Math.PI*2 });
}
for (let i = 0; i < 40; i++) {
glitter.push({ x: Math.random(), y: Math.random(), size: Math.random()*4+2, color: [’#ff4fa3’,’#c77dff’,’#ffd700’,’#00e5ff’][Math.floor(Math.random()*4)], p: Math.random()*Math.PI*2, sp: Math.random()*0.03+0.01 });
}

function draw(t) {
const w = canvas.width, h = canvas.height;
ctx.clearRect(0,0,w,h);
// background gradient
const grd = ctx.createLinearGradient(0,0,w,h);
grd.addColorStop(0,’#0d0520’); grd.addColorStop(1,’#1a0a35’);
ctx.fillStyle = grd; ctx.fillRect(0,0,w,h);
// stars
stars.forEach(s => {
const bright = 0.5 + 0.5*Math.sin(t*0.001*s.s + s.p);
ctx.beginPath(); ctx.arc(s.x*w, s.y*h, s.r, 0, Math.PI*2);
ctx.fillStyle = `rgba(255,255,255,${bright * 0.9})`; ctx.fill();
});
// glitter
glitter.forEach(g => {
g.p += g.sp;
const bright = 0.4 + 0.6*Math.abs(Math.sin(g.p));
const yOff = Math.sin(g.p*0.5)*8;
ctx.save();
ctx.translate(g.x*w, g.y*h + yOff);
ctx.rotate(g.p);
ctx.fillStyle = g.color + Math.floor(bright*255).toString(16).padStart(2,‘0’);
ctx.fillRect(-g.size/2,-g.size/2, g.size, g.size);
ctx.restore();
});
requestAnimationFrame(draw);
}
requestAnimationFrame(draw);
}

// ============================================================
//  CHARACTER SELECT
// ============================================================
function buildCharsGrid() {
const grid = document.getElementById(‘chars-grid’);
grid.innerHTML = ‘’;
CHARACTERS.forEach(c => {
const div = document.createElement(‘div’);
div.className = ‘char-card’;
div.innerHTML = `<div class="char-doll"></div> <span class="char-name">${c.name}</span> <span class="char-job">${c.job}</span>`;
renderDoll(div.querySelector(’.char-doll’), c, false);
div.addEventListener(‘click’, () => selectChar(c));
grid.appendChild(div);
});
}

function selectChar(c) {
curChar = { …c };
toast(’Bem-vinda, ’ + c.name + ‘! 👑’);
goScreen(‘screen-menu’);
}

// ============================================================
//  MENU
// ============================================================
function buildMenu() {
const el = document.getElementById(‘menu-char-display’);
const doll = document.createElement(‘div’);
doll.style.cssText = ‘width:54px;height:78px;’;
renderDoll(doll, curChar, false);
el.innerHTML = ‘’;
el.appendChild(doll);
const name = document.createElement(‘span’);
name.className = ‘menu-active-name’;
name.textContent = curChar.name + ’ - ’ + curChar.job;
el.appendChild(name);
}

// ============================================================
//  HOME DOLLS (decorative)
// ============================================================
function buildHomeDolls() {
document.querySelectorAll(’#screen-home .roblox-doll’).forEach((el, i) => {
const c = CHARACTERS[i] || CHARACTERS[0];
el.innerHTML = makeDollSVG(c.hair, c.outfit, c.shoe, 1);
});
}

// ============================================================
//  EXPLORE (Castle RPG - Top-Down Canvas)
// ============================================================
const EXPLORE = {
canvas: null, ctx: null,
world: { w: 1200, h: 900 },
camera: { x: 0, y: 0 },
player: { x: 400, y: 400, w: 24, h: 32, speed: 2.5, dir: ‘down’, frame: 0, tick: 0 },
keys: {},
dpad: {},
walls: [],
objects: [],
particles: [],
area: ‘garden’,
areaName: ‘🌿 Jardim do Castelo’,
running: false,
raf: null,
interactTimer: null,

init() {
this.canvas = document.getElementById(‘explore-canvas’);
this.ctx = this.canvas.getContext(‘2d’);
this.resize();
window.addEventListener(‘resize’, () => this.resize());
this.buildWorld();
this.bindInput();
this.running = true;
this.loop();
document.getElementById(‘explore-area-name’).textContent = this.areaName;
},

resize() {
const c = this.canvas;
c.width = window.innerWidth;
c.height = window.innerHeight;
},

buildWorld() {
const W = this.world.w, H = this.world.h;
this.walls = [];
this.objects = [];

```
// GARDEN AREA
// Castle walls (outer boundary walkable path inside)
// Outer perimeter walls
this.addWall(0, 0, W, 30);           // top
this.addWall(0, H-30, W, 30);        // bottom
this.addWall(0, 0, 30, H);           // left
this.addWall(W-30, 0, 30, H);        // right

// Castle building (center-top)
this.addWall(300, 80, 600, 320);

// Castle doors (openings)
// Front door at y=400, x=540-660 -> No wall so player can enter

// Side garden walls
this.addWall(30, 30, 200, 20);
this.addWall(970, 30, 200, 20);
this.addWall(30, 620, 170, 20);
this.addWall(1000, 620, 170, 20);

// Hedges
this.addWall(150, 200, 60, 180, true, '#2d8f2d');
this.addWall(990, 200, 60, 180, true, '#2d8f2d');
this.addWall(150, 550, 60, 80, true, '#2d8f2d');
this.addWall(990, 550, 60, 80, true, '#2d8f2d');

// Fountain (interactive)
this.addObject(565, 500, 70, 70, '⛲', '💦 Que chafariz lindo! Perfeite para descansar...', 'fountain', '#00b4d8');

// Unicorn
this.addObject(200, 350, 50, 50, '🦄', '✨ O unicornio te deu poderes magicos!', 'unicorn', '#c77dff');

// Horse
this.addObject(950, 350, 50, 50, '🐴', '🐎 Que cavalo bonito! Voce quer cavalgar?', 'horse', '#8b4513');

// Tree cluster
this.addObject(100, 100, 40, 40, '🌳', '🍃 As flores sao lindas!', 'tree', '#1a5c1a');
this.addObject(1060, 100, 40, 40, '🌳', '🍃 Uma arvore centenaria!', 'tree2', '#1a5c1a');
this.addObject(100, 750, 40, 40, '🌸', '🌸 Flores magicas do jardim!', 'flower1', '#ff69b4');
this.addObject(1060, 750, 40, 40, '🌸', '🌸 Um jardim encantado!', 'flower2', '#ff69b4');

// Castle interior teleport zones
this.addObject(510, 380, 80, 30, '🚪 Salao', '💃 Bem-vinda ao Salao de Dancas!', 'door-dance', '#ffd700', true);
this.addObject(630, 380, 80, 30, '🚪 Quarto', '🛏 Bem-vinda ao Quarto Real!', 'door-room', '#b76eff', true);

// Interior rooms (hidden walls that define rooms above castle)
this.addWall(300, 80, 10, 320);   // castle left wall
this.addWall(890, 80, 10, 320);   // castle right wall
this.addWall(300, 80, 600, 10);   // castle top wall
this.addWall(300, 400, 205, 10);  // castle bottom left
this.addWall(700, 400, 200, 10);  // castle bottom right

// Interior objects
this.addObject(370, 180, 60, 60, '🎵', '🎵 Musica encantada tocando...', 'music', '#ffd700');
this.addObject(820, 180, 60, 40, '🛏', '🛏 A cama real... Hora de descansar!', 'bed', '#c77dff');
this.addObject(590, 150, 60, 40, '🍰', '🍰 Bolo de aniversario! Delicioso!', 'cake', '#ff69b4');
this.addObject(590, 230, 50, 50, '👑', '👑 O trono real! Voce e a rainha!', 'throne', '#ffd700');

// Pony
this.addObject(700, 680, 45, 45, '🐴', '🐴 Um ponei adoravel te aguardava!', 'pony', '#d4886a');

this.player.x = 590;
this.player.y = 680;
```

},

addWall(x, y, w, h, isHedge = false, color = null) {
this.walls.push({ x, y, w, h, hedge: isHedge, color });
},

addObject(x, y, w, h, icon, msg, id, color, isDoor = false) {
this.objects.push({ x, y, w, h, icon, msg, id, color, isDoor, triggered: false });
},

bindInput() {
document.addEventListener(‘keydown’, e => {
this.keys[e.code] = true;
e.preventDefault && [‘ArrowUp’,‘ArrowDown’,‘ArrowLeft’,‘ArrowRight’,‘Space’,‘KeyW’,‘KeyA’,‘KeyS’,‘KeyD’].includes(e.code) && e.preventDefault();
});
document.addEventListener(‘keyup’, e => { this.keys[e.code] = false; });

```
const btns = { 'dpad-up':'up', 'dpad-down':'down', 'dpad-left':'left', 'dpad-right':'right' };
Object.entries(btns).forEach(([id, dir]) => {
  const btn = document.getElementById(id);
  if (!btn) return;
  const on  = () => { this.dpad[dir] = true; };
  const off = () => { this.dpad[dir] = false; };
  btn.addEventListener('touchstart', e => { e.preventDefault(); on(); }, { passive: false });
  btn.addEventListener('touchend', e => { e.preventDefault(); off(); }, { passive: false });
  btn.addEventListener('mousedown', on);
  btn.addEventListener('mouseup', off);
});
```

},

getInput() {
const k = this.keys, d = this.dpad;
return {
up:    k[‘ArrowUp’]    || k[‘KeyW’] || d.up,
down:  k[‘ArrowDown’]  || k[‘KeyS’] || d.down,
left:  k[‘ArrowLeft’]  || k[‘KeyA’] || d.left,
right: k[‘ArrowRight’] || k[‘KeyD’] || d.right,
};
},

collidesWall(nx, ny) {
const p = this.player;
const px = nx, py = ny, pw = p.w, ph = p.h;
return this.walls.some(w => px < w.x+w.w && px+pw > w.x && py < w.y+w.h && py+ph > w.y);
},

updatePlayer() {
const inp = this.getInput();
const p = this.player;
const sp = p.speed;
let moved = false;

```
if (inp.up)    { if (!this.collidesWall(p.x, p.y-sp)) { p.y -= sp; p.dir='up'; moved=true; } }
if (inp.down)  { if (!this.collidesWall(p.x, p.y+sp)) { p.y += sp; p.dir='down'; moved=true; } }
if (inp.left)  { if (!this.collidesWall(p.x-sp, p.y)) { p.x -= sp; p.dir='left'; moved=true; } }
if (inp.right) { if (!this.collidesWall(p.x+sp, p.y)) { p.x += sp; p.dir='right'; moved=true; } }

p.x = Math.max(0, Math.min(this.world.w - p.w, p.x));
p.y = Math.max(0, Math.min(this.world.h - p.h, p.y));

if (moved) { p.tick++; if (p.tick % 12 === 0) p.frame = 1 - p.frame; }
else p.frame = 0;

// Camera follow
const cw = this.canvas.width, ch = this.canvas.height;
this.camera.x = Math.max(0, Math.min(this.world.w - cw, p.x + p.w/2 - cw/2));
this.camera.y = Math.max(0, Math.min(this.world.h - ch, p.y + p.h/2 - ch/2));

// Check interactions
this.checkInteractions();
```

},

checkInteractions() {
const p = this.player;
const px = p.x + p.w/2, py = p.y + p.h/2;
let nearObj = null, minDist = 70;

```
this.objects.forEach(obj => {
  const ox = obj.x + obj.w/2, oy = obj.y + obj.h/2;
  const dist = Math.hypot(px-ox, py-oy);
  if (dist < minDist) { minDist = dist; nearObj = obj; }
});

if (nearObj && !nearObj.triggered) {
  nearObj.triggered = true;
  this.showInteract(nearObj.msg);
  if (nearObj.isDoor) this.spawnParticles(nearObj.x, nearObj.y, nearObj.color);
  clearTimeout(this.interactTimer);
  this.interactTimer = setTimeout(() => { if (nearObj) nearObj.triggered = false; }, 4000);
} else if (!nearObj) {
  this.objects.forEach(o => o.triggered = false);
}
```

},

showInteract(msg) {
const pop = document.getElementById(‘interact-popup’);
document.getElementById(‘interact-msg’).textContent = msg;
pop.classList.remove(‘hidden’);
clearTimeout(this._popTimer);
this._popTimer = setTimeout(() => pop.classList.add(‘hidden’), 3000);
},

spawnParticles(x, y, color) {
for (let i = 0; i < 12; i++) {
const angle = (Math.PI * 2 * i) / 12;
this.particles.push({
x: x + 40, y: y + 20,
vx: Math.cos(angle) * (1 + Math.random() * 2),
vy: Math.sin(angle) * (1 + Math.random() * 2),
life: 60, color, size: 4 + Math.random() * 4
});
}
},

drawWorld(ctx) {
const cam = this.camera;
const W = this.world.w, H = this.world.h;

```
// Ground
ctx.fillStyle = '#1a4d1a';
ctx.fillRect(-cam.x, -cam.y, W, H);

// Path/walkway
ctx.fillStyle = '#8b7355';
ctx.fillRect(510 - cam.x, 400 - cam.y, 180, 300);
ctx.fillRect(200 - cam.x, 400 - cam.y, 760, 80);

// Garden grass patches
ctx.fillStyle = '#256b25';
[[60,60,200,160],[240,500,240,180],[760,500,200,180],[60,640,200,200],[940,640,200,200]].forEach(([x,y,w,h]) => {
  ctx.fillRect(x-cam.x, y-cam.y, w, h);
});

// Castle body
ctx.fillStyle = '#d4c5b0';
ctx.fillRect(310 - cam.x, 90 - cam.y, 580, 310);

// Castle battlements
ctx.fillStyle = '#b8a890';
for (let bx = 310; bx < 890; bx += 40) {
  ctx.fillRect(bx - cam.x, 70 - cam.y, 25, 25);
}

// Castle towers
[310, 860].forEach(tx => {
  ctx.fillStyle = '#c2b39a';
  ctx.fillRect(tx - cam.x, 40 - cam.y, 80, 360);
  ctx.fillStyle = '#a09070';
  for (let bx2 = tx; bx2 < tx+80; bx2 += 20) {
    ctx.fillRect(bx2 - cam.x, 25 - cam.y, 14, 18);
  }
  // Tower windows
  ctx.fillStyle = '#4488cc';
  ctx.fillRect(tx + 20 - cam.x, 100 - cam.y, 20, 30);
  ctx.fillRect(tx + 20 - cam.x, 180 - cam.y, 20, 30);
});

// Castle windows
ctx.fillStyle = '#4488cc';
[380,460,540,620,700,780].forEach(wx => {
  ctx.fillRect(wx - cam.x, 120 - cam.y, 22, 35);
  ctx.fillRect(wx - cam.x, 210 - cam.y, 22, 35);
});

// Castle flags
ctx.fillStyle = '#ff2d7a';
[325, 870].forEach(fx => {
  ctx.fillRect(fx - cam.x, 15 - cam.y, 3, 30);
  ctx.beginPath();
  ctx.moveTo(fx + 3 - cam.x, 15 - cam.y);
  ctx.lineTo(fx + 22 - cam.x, 22 - cam.y);
  ctx.lineTo(fx + 3 - cam.x, 30 - cam.y);
  ctx.fill();
});

// Castle doors
ctx.fillStyle = '#3d2200';
ctx.beginPath();
ctx.arc(550 - cam.x, 400 - cam.y, 30, Math.PI, 0);
ctx.fillRect(520 - cam.x, 370 - cam.y, 60, 30);
ctx.fill();
ctx.beginPath();
ctx.arc(660 - cam.x, 400 - cam.y, 30, Math.PI, 0);
ctx.fillRect(630 - cam.x, 370 - cam.y, 60, 30);
ctx.fill();

// Fountain base
ctx.fillStyle = '#b0c0d8';
ctx.beginPath();
ctx.arc(600 - cam.x, 535 - cam.y, 38, 0, Math.PI * 2);
ctx.fill();
ctx.fillStyle = '#6090c0';
ctx.beginPath();
ctx.arc(600 - cam.x, 535 - cam.y, 22, 0, Math.PI * 2);
ctx.fill();
ctx.fillStyle = '#40b0ff';
ctx.beginPath();
ctx.arc(600 - cam.x, 520 - cam.y, 10, 0, Math.PI * 2);
ctx.fill();

// Hedges (draw before objects)
this.walls.filter(w => w.hedge).forEach(w => {
  ctx.fillStyle = w.color || '#2d8f2d';
  this.roundRect(ctx, w.x - cam.x, w.y - cam.y, w.w, w.h, 8);
  ctx.fill();
  // Hedge dots
  ctx.fillStyle = '#39ff14';
  for (let i = 0; i < 6; i++) {
    ctx.beginPath();
    ctx.arc(w.x + 10 + (i%3)*18 - cam.x, w.y + 8 + Math.floor(i/3)*16 - cam.y, 5, 0, Math.PI*2);
    ctx.fill();
  }
});

// Objects (except doors)
this.objects.forEach(obj => {
  ctx.save();
  ctx.translate(obj.x - cam.x, obj.y - cam.y);
  if (!obj.isDoor) {
    // glow
    ctx.shadowColor = obj.color || '#fff';
    ctx.shadowBlur = 12;
    ctx.font = obj.w * 0.9 + 'px serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(obj.icon, obj.w/2, obj.h/2);
  } else {
    // door label
    ctx.fillStyle = obj.color || '#ffd700';
    ctx.strokeStyle = '#fff8';
    ctx.lineWidth = 2;
    ctx.globalAlpha = 0.85;
    this.roundRect(ctx, 0, 0, obj.w, obj.h, 6);
    ctx.fill(); ctx.stroke();
    ctx.globalAlpha = 1;
    ctx.fillStyle = '#fff';
    ctx.font = 'bold 11px sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(obj.icon, obj.w/2, obj.h/2);
  }
  ctx.restore();
});
```

},

drawPlayer(ctx) {
const p = this.player;
const px = p.x - this.camera.x;
const py = p.y - this.camera.y;
const bobY = p.frame === 1 ? 2 : 0;

```
// Shadow
ctx.fillStyle = 'rgba(0,0,0,0.3)';
ctx.beginPath();
ctx.ellipse(px + p.w/2, py + p.h + 2, 12, 4, 0, 0, Math.PI*2);
ctx.fill();

// Draw inline SVG doll scaled small
const img = new Image();
const svg = makeDollSVG(curChar.hair, curChar.outfit, curChar.shoe, 0.65);
const blob = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svg);
// We draw via drawImage after caching
const key = curChar.hair + curChar.outfit + curChar.shoe;
if (!this._dollCache) this._dollCache = {};
if (!this._dollCache[key] || !this._dollCache[key].complete) {
  const i2 = new Image();
  i2.src = blob;
  this._dollCache[key] = i2;
}
const cached = this._dollCache[key];
if (cached && cached.complete && cached.naturalWidth > 0) {
  ctx.drawImage(cached, px - 6, py + bobY - 10, 36, 52);
} else {
  // Fallback: blocky rectangle
  ctx.fillStyle = curChar.outfit;
  ctx.fillRect(px, py + bobY, p.w, p.h);
  ctx.fillStyle = '#f5c5a3';
  ctx.fillRect(px + 6, py + bobY - 10, 12, 12);
}

// Direction indicator
const arrows = { down:'▼', up:'▲', left:'◀', right:'▶' };
ctx.fillStyle = '#fff8'; ctx.font = '10px sans-serif'; ctx.textAlign = 'center';
ctx.fillText(arrows[p.dir] || '', px + p.w/2, py - 6);
```

},

drawParticles(ctx) {
this.particles = this.particles.filter(p => p.life > 0);
this.particles.forEach(p => {
p.x += p.vx; p.y += p.vy;
p.vy += 0.05; p.life–;
ctx.globalAlpha = p.life / 60;
ctx.fillStyle = p.color;
ctx.fillRect(p.x - this.camera.x, p.y - this.camera.y, p.size, p.size);
});
ctx.globalAlpha = 1;
},

roundRect(ctx, x, y, w, h, r) {
ctx.beginPath();
ctx.moveTo(x+r, y);
ctx.lineTo(x+w-r, y); ctx.quadraticCurveTo(x+w, y, x+w, y+r);
ctx.lineTo(x+w, y+h-r); ctx.quadraticCurveTo(x+w, y+h, x+w-r, y+h);
ctx.lineTo(x+r, y+h); ctx.quadraticCurveTo(x, y+h, x, y+h-r);
ctx.lineTo(x, y+r); ctx.quadraticCurveTo(x, y, x+r, y);
ctx.closePath();
},

loop() {
if (!this.running) return;
this.updatePlayer();
const ctx = this.ctx;
const cw = this.canvas.width, ch = this.canvas.height;
ctx.clearRect(0, 0, cw, ch);
this.drawWorld(ctx);
this.drawPlayer(ctx);
this.drawParticles(ctx);
this.raf = requestAnimationFrame(() => this.loop());
},

stop() {
this.running = false;
if (this.raf) cancelAnimationFrame(this.raf);
}
};

function startExplore() {
EXPLORE.stop();
EXPLORE.running = true;
EXPLORE._dollCache = {};
setTimeout(() => EXPLORE.init(), 50);
}

// ============================================================
//  CUSTOM (Avatar Shop)
// ============================================================
function buildCustom() {
const doll = document.getElementById(‘custom-doll-large’);
renderDoll(doll, curChar, true);
document.getElementById(‘custom-char-name’).textContent = curChar.name;
document.getElementById(‘custom-char-job’).textContent = curChar.job;

buildColorRow(‘hair-colors’, HAIR_COLORS, ‘hair’);
buildColorRow(‘outfit-colors’, OUTFIT_COLORS, ‘outfit’);
buildColorRow(‘shoe-colors’, SHOE_COLORS, ‘shoe’);
buildJobRow();
}

function buildColorRow(containerId, colors, prop) {
const row = document.getElementById(containerId);
row.innerHTML = ‘’;
colors.forEach(c => {
const sw = document.createElement(‘div’);
sw.className = ‘color-swatch’ + (curChar[prop] === c ? ’ active’ : ‘’);
sw.style.background = c;
sw.addEventListener(‘click’, () => {
curChar[prop] = c;
row.querySelectorAll(’.color-swatch’).forEach(s => s.classList.remove(‘active’));
sw.classList.add(‘active’);
renderDoll(document.getElementById(‘custom-doll-large’), curChar, true);
toast(‘Look atualizado! ✨’);
});
row.appendChild(sw);
});
}

function buildJobRow() {
const row = document.getElementById(‘job-row’);
row.innerHTML = ‘’;
JOBS.forEach(j => {
const btn = document.createElement(‘button’);
btn.className = ‘job-btn’ + (curChar.job === j ? ’ active’ : ‘’);
btn.textContent = j;
btn.addEventListener(‘click’, () => {
curChar.job = j;
row.querySelectorAll(’.job-btn’).forEach(b => b.classList.remove(‘active’));
btn.classList.add(‘active’);
document.getElementById(‘custom-char-job’).textContent = j;
buildMenu();
toast(’Profissao: ’ + j + ‘! 🎓’);
});
row.appendChild(btn);
});
}

// ============================================================
//  MEMORY GAME
// ============================================================
let memState = { cards: [], flipped: [], matched: 0, moves: 0, timer: 0, interval: null, locked: false, total: 0 };

function startMemory() {
goScreen(‘screen-memory’);
}

function initMemory(pairs) {
const state = memState;
clearInterval(state.interval);
state.matched = 0; state.moves = 0; state.timer = 0; state.locked = false; state.flipped = [];
state.total = pairs;

document.getElementById(‘memory-difficulty’).classList.add(‘hidden’);
document.getElementById(‘memory-stats’).classList.remove(‘hidden’);
document.getElementById(‘mem-timer’).textContent = ‘0’;
document.getElementById(‘mem-pairs’).textContent = ‘0’;
document.getElementById(‘mem-moves’).textContent = ‘0’;

const emojis = MEMORY_EMOJIS.slice(0, pairs);
const deck = […emojis, …emojis].sort(() => Math.random() - 0.5);

const grid = document.getElementById(‘memory-grid’);
const cols = pairs <= 4 ? 4 : pairs <= 8 ? 4 : 6;
grid.style.gridTemplateColumns = `repeat(${cols}, 1fr)`;
grid.innerHTML = ‘’;
state.cards = [];

deck.forEach((emoji, i) => {
const card = document.createElement(‘div’);
card.className = ‘mem-card’;
const size = pairs <= 4 ? ‘80px’ : pairs <= 8 ? ‘70px’ : ‘58px’;
card.style.cssText = `width:${size};height:${size};position:relative;`;
card.innerHTML = `<div class="front" style="background:linear-gradient(135deg,#9b2eff,#c2006e);border-radius:8px;">✨</div> <div class="back" style="background:rgba(255,255,255,0.08);border-radius:8px;font-size:2rem;">${emoji}</div>`;
card.addEventListener(‘click’, () => flipCard(card, i, emoji));
grid.appendChild(card);
state.cards.push({ el: card, emoji, matched: false });
});

state.interval = setInterval(() => {
state.timer++;
document.getElementById(‘mem-timer’).textContent = state.timer;
}, 1000);
}

function flipCard(cardEl, idx, emoji) {
const state = memState;
if (state.locked) return;
if (state.cards[idx].matched) return;
if (state.flipped.find(f => f.idx === idx)) return;

cardEl.style.transform = ‘rotateY(180deg)’;
state.flipped.push({ idx, emoji, el: cardEl });

if (state.flipped.length === 2) {
state.locked = true;
state.moves++;
document.getElementById(‘mem-moves’).textContent = state.moves;

```
const [a, b] = state.flipped;
if (a.emoji === b.emoji) {
  state.matched++;
  document.getElementById('mem-pairs').textContent = state.matched;
  a.el.classList.add('matched'); b.el.classList.add('matched');
  state.cards[a.idx].matched = true; state.cards[b.idx].matched = true;
  state.flipped = []; state.locked = false;
  if (state.matched === state.total) memWin();
} else {
  setTimeout(() => {
    a.el.style.transform = ''; b.el.style.transform = '';
    state.flipped = []; state.locked = false;
  }, 900);
}
```

}
}

function memWin() {
clearInterval(memState.interval);
const state = memState;
toast(`Parabens! ${state.total} pares em ${state.timer}s com ${state.moves} jogadas! 🏆`);
setTimeout(() => {
document.getElementById(‘memory-difficulty’).classList.remove(‘hidden’);
document.getElementById(‘memory-stats’).classList.add(‘hidden’);
document.getElementById(‘memory-grid’).innerHTML = ‘’;
}, 3000);
}

// ============================================================
//  RUNNER GAME
// ============================================================
let runner = {
canvas: null, ctx: null, raf: null,
running: false, started: false,
score: 0, lives: 3,
player: { x: 80, y: 0, w: 32, h: 46, vy: 0, grounded: false },
obstacles: [], clouds: [],
speed: 3, frameCount: 0, groundY: 0
};

function startRunner() {
runner.canvas = document.getElementById(‘runner-canvas’);
runner.ctx = runner.canvas.getContext(‘2d’);
resizeRunner();
window.addEventListener(‘resize’, resizeRunner);
runner.started = false;
document.getElementById(‘runner-start’).classList.remove(‘hidden’);
document.getElementById(‘runner-over’).classList.add(‘hidden’);
drawRunnerStatic();
}

function resizeRunner() {
const c = runner.canvas;
c.width = window.innerWidth; c.height = window.innerHeight;
runner.groundY = c.height - 80;
runner.player.y = runner.groundY - runner.player.h;
}

function runnerGo() {
document.getElementById(‘runner-start’).classList.add(‘hidden’);
document.getElementById(‘runner-over’).classList.add(‘hidden’);
const r = runner;
r.score = 0; r.lives = 3; r.speed = 3; r.frameCount = 0;
r.player.y = r.groundY - r.player.h;
r.player.vy = 0; r.player.grounded = true;
r.obstacles = []; r.clouds = [];
document.getElementById(‘runner-score’).textContent = ‘0’;
document.getElementById(‘runner-lives’).textContent = ‘3’;
r.running = true; r.started = true;
r.canvas.addEventListener(‘click’, runnerJump);
r.canvas.addEventListener(‘touchstart’, runnerJump, { passive: true });
document.addEventListener(‘keydown’, runnerKey);
runnerLoop();
}

function runnerKey(e) {
if ([‘Space’,‘ArrowUp’].includes(e.code)) { e.preventDefault(); runnerJump(); }
}

function runnerJump() {
if (!runner.player.grounded) return;
runner.player.vy = -14;
runner.player.grounded = false;
}

function stopRunner() {
runner.running = false;
if (runner.raf) cancelAnimationFrame(runner.raf);
runner.canvas.removeEventListener(‘click’, runnerJump);
runner.canvas.removeEventListener(‘touchstart’, runnerJump);
document.removeEventListener(‘keydown’, runnerKey);
}

function runnerLoop() {
if (!runner.running) return;
updateRunner();
drawRunner();
runner.raf = requestAnimationFrame(runnerLoop);
}

function updateRunner() {
const r = runner;
const c = r.canvas;
r.frameCount++;
r.score++;
document.getElementById(‘runner-score’).textContent = r.score;
r.speed = 3 + Math.floor(r.score / 300) * 0.5;

// Player physics
r.player.vy += 0.7;
r.player.y += r.player.vy;
if (r.player.y >= r.groundY - r.player.h) {
r.player.y = r.groundY - r.player.h;
r.player.vy = 0; r.player.grounded = true;
}

// Spawn obstacles
if (r.frameCount % Math.max(60, 100 - Math.floor(r.score/100)*3) === 0) {
const types = [
{ w: 28, h: 50, color: ‘#c2006e’, icon: ‘🌵’ },
{ w: 40, h: 36, color: ‘#7b00ff’, icon: ‘⬛’ },
{ w: 22, h: 70, color: ‘#ff2d7a’, icon: ‘🌵’ },
];
const t = types[Math.floor(Math.random()*types.length)];
r.obstacles.push({ x: c.width + 30, y: r.groundY - t.h, w: t.w, h: t.h, color: t.color, icon: t.icon });
}

// Clouds
if (r.frameCount % 90 === 0) {
r.clouds.push({ x: c.width + 50, y: 40 + Math.random() * 100, w: 80 + Math.random()*60, h: 30 });
}

// Update obstacles
r.obstacles.forEach(o => { o.x -= r.speed; });
r.obstacles = r.obstacles.filter(o => o.x + o.w > -10);
r.clouds.forEach(cl => { cl.x -= r.speed * 0.3; });
r.clouds = r.clouds.filter(cl => cl.x + cl.w > -10);

// Collision
const p = r.player;
r.obstacles.forEach(o => {
if (p.x + p.w - 6 > o.x + 4 && p.x + 6 < o.x + o.w - 4 && p.y + p.h - 4 > o.y && p.y + 4 < o.y + o.h) {
o.x = -999;
r.lives–;
document.getElementById(‘runner-lives’).textContent = r.lives;
if (r.lives <= 0) runnerGameOver();
}
});
}

function drawRunner() {
const r = runner;
const ctx = r.ctx;
const c = r.canvas;
const cw = c.width, ch = c.height;

// Sky
const sky = ctx.createLinearGradient(0, 0, 0, ch);
sky.addColorStop(0, ‘#0d0520’); sky.addColorStop(0.7, ‘#1a0a35’); sky.addColorStop(1, ‘#2d142c’);
ctx.fillStyle = sky; ctx.fillRect(0, 0, cw, ch);

// Clouds
ctx.fillStyle = ‘rgba(255,255,255,0.07)’;
r.clouds.forEach(cl => {
ctx.beginPath(); ctx.ellipse(cl.x, cl.y, cl.w/2, cl.h/2, 0, 0, Math.PI*2); ctx.fill();
});

// Stars
ctx.fillStyle = ‘rgba(255,255,255,0.4)’;
for (let i = 0; i < 20; i++) {
const sx = (i * 137 + r.frameCount * 0.2) % cw;
const sy = (i * 73) % (ch * 0.6);
ctx.fillRect(sx, sy, 2, 2);
}

// Ground
ctx.fillStyle = ‘#1a0a35’; ctx.fillRect(0, r.groundY, cw, ch - r.groundY);
ctx.fillStyle = ‘#b76eff’; ctx.fillRect(0, r.groundY, cw, 4);
ctx.fillStyle = ‘#9b2eff’;
for (let x = (r.frameCount * r.speed) % 60; x < cw; x += 60) {
ctx.fillRect(x, r.groundY + 4, 30, 3);
}

// Obstacles
r.obstacles.forEach(o => {
ctx.font = o.h + ‘px serif’;
ctx.textAlign = ‘center’;
ctx.fillText(o.icon, o.x + o.w/2, o.y + o.h);
});

// Player doll
const p = r.player;
const key = curChar.hair + curChar.outfit + curChar.shoe + ‘_runner’;
if (!runner._dollCache) runner._dollCache = {};
if (!runner._dollCache[key]) {
const img2 = new Image();
img2.src = ‘data:image/svg+xml;charset=utf-8,’ + encodeURIComponent(makeDollSVG(curChar.hair, curChar.outfit, curChar.shoe, 0.7));
runner._dollCache[key] = img2;
}
const di = runner._dollCache[key];
if (di && di.complete && di.naturalWidth > 0) {
ctx.drawImage(di, p.x, p.y, p.w, p.h);
} else {
ctx.fillStyle = curChar.outfit; ctx.fillRect(p.x, p.y, p.w, p.h);
ctx.fillStyle = ‘#f5c5a3’; ctx.fillRect(p.x+8, p.y-14, 16, 16);
}

// Score display inline
ctx.fillStyle = ‘rgba(0,0,0,0.3)’; ctx.fillRect(cw/2-60, 50, 120, 30);
ctx.fillStyle = ‘#ffd700’; ctx.font = ‘bold 16px sans-serif’;
ctx.textAlign = ‘center’; ctx.fillText(’Pontos: ’ + r.score, cw/2, 70);
}

function drawRunnerStatic() {
const r = runner; if (!r.canvas || !r.ctx) return;
const ctx = r.ctx; const c = r.canvas;
const sky = ctx.createLinearGradient(0,0,0,c.height);
sky.addColorStop(0,’#0d0520’); sky.addColorStop(1,’#1a0a35’);
ctx.fillStyle = sky; ctx.fillRect(0,0,c.width,c.height);
ctx.fillStyle = ‘#1a0a35’; ctx.fillRect(0, r.groundY, c.width, c.height-r.groundY);
ctx.fillStyle = ‘#b76eff’; ctx.fillRect(0, r.groundY, c.width, 4);
}

function runnerGameOver() {
runner.running = false;
document.getElementById(‘final-score’).textContent = runner.score;
document.getElementById(‘runner-over’).classList.remove(‘hidden’);
toast(’Game Over! Pontos: ’ + runner.score);
}

// ============================================================
//  INIT
// ============================================================
window.addEventListener(‘DOMContentLoaded’, () => {
initBgCanvas();
buildHomeDolls();
buildCharsGrid();
startHud();
});