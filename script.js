'use strict';

// ============================================================
//  DADOS
// ============================================================
const CHARACTERS = [
  { id:'laura',     name:'Laura',     job:'Arquiteta', hair:'#ff2d7a', outfit:'#ff6eb4', shoe:'#c200a0' },
  { id:'valentina', name:'Valentina', job:'Cientista',  hair:'#7b00ff', outfit:'#b76eff', shoe:'#3d00cc' },
  { id:'giovanna',  name:'Giovanna',  job:'Medica',     hair:'#c200a0', outfit:'#ff4fb8', shoe:'#7a0070' },
  { id:'valcely',   name:'Valcely',   job:'Estilista',  hair:'#e6a817', outfit:'#ffd700', shoe:'#a07000' },
  { id:'lidiane',   name:'Lidiane',   job:'Biomedica',  hair:'#00e5ff', outfit:'#00b4d8', shoe:'#005f73' }
];

const JOBS = ['Arquiteta','Cientista','Medica','Estilista','Biomedica','Rainha'];

const HAIR_COLORS   = ['#ff2d7a','#7b00ff','#ffd700','#00e5ff','#ff6600','#39ff14','#ffffff','#1a0b1c'];
const OUTFIT_COLORS = ['#ff6eb4','#b76eff','#00b4d8','#ffd700','#ff4500','#39ff14','#c0c0c0','#e8d5b7'];
const SHOE_COLORS   = ['#c200a0','#3d00cc','#005f73','#a07000','#7a0070','#003d00','#444444','#8b4513'];

const MEMORY_EMOJIS = ['👑','💎','🌸','🦋','🌟','✨','🎀','💄','👗','🏰','🦄','🌈'];

// ============================================================
//  ESTADO GLOBAL
// ============================================================
let curChar    = { ...CHARACTERS[0] };
let sessionStart = Date.now();
let hudInterval  = null;

// ============================================================
//  NAVEGAÇÃO
// ============================================================
function goScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  const el = document.getElementById(id);
  if (el) el.classList.add('active');

  const showHud = !['screen-home','screen-select'].includes(id);
  document.getElementById('hud').classList.toggle('hidden', !showHud);

  if (id === 'screen-explore') startExplore();
  if (id === 'screen-custom')  buildCustom();
  if (id === 'screen-menu')    buildMenu();
}

// ============================================================
//  TOAST
// ============================================================
function toast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.remove('hidden');
  clearTimeout(t._tid);
  t._tid = setTimeout(() => t.classList.add('hidden'), 2200);
}

// ============================================================
//  SVG DOLL (boneca blocky sem assets externos)
// ============================================================
function makeDollSVG(hair, outfit, shoe, scale) {
  scale = scale || 1;
  const w = 60 * scale;
  const h = 88 * scale;
  return '<svg xmlns="http://www.w3.org/2000/svg" width="' + w + '" height="' + h + '" viewBox="0 0 60 88">'
    // Cabelo (atras)
    + '<ellipse cx="30" cy="14" rx="16" ry="18" fill="' + hair + '"/>'
    // Cabeca
    + '<ellipse cx="30" cy="18" rx="13" ry="14" fill="#f5c5a3"/>'
    // Olhos
    + '<circle cx="25" cy="17" r="2.2" fill="#2d1b00"/>'
    + '<circle cx="35" cy="17" r="2.2" fill="#2d1b00"/>'
    + '<circle cx="25.8" cy="16.2" r="0.7" fill="white"/>'
    + '<circle cx="35.8" cy="16.2" r="0.7" fill="white"/>'
    // Sorriso
    + '<path d="M25 23 Q30 27 35 23" stroke="#d4886a" stroke-width="1.5" fill="none" stroke-linecap="round"/>'
    // Bochechas
    + '<ellipse cx="21" cy="21" rx="4" ry="2.5" fill="#ffb0a0" opacity="0.5"/>'
    + '<ellipse cx="39" cy="21" rx="4" ry="2.5" fill="#ffb0a0" opacity="0.5"/>'
    // Cabelo (frente/topo)
    + '<ellipse cx="30" cy="8" rx="14" ry="8" fill="' + hair + '"/>'
    // Coroa
    + '<path d="M18 6 L22 1 L26 5 L30 0 L34 5 L38 1 L42 6 Z" fill="' + shoe + '" opacity="0.9"/>'
    + '<circle cx="30" cy="2" r="1.5" fill="' + hair + '" opacity="0.8"/>'
    // Pescoco
    + '<rect x="26" y="31" width="8" height="6" rx="2" fill="#f5c5a3"/>'
    // Vestido
    + '<path d="M14 37 Q10 70 12 84 L48 84 Q50 70 46 37 Q38 32 22 32 Z" fill="' + outfit + '"/>'
    // Brilho no vestido
    + '<circle cx="30" cy="55" r="3" fill="white" opacity="0.25"/>'
    + '<circle cx="22" cy="62" r="2" fill="white" opacity="0.18"/>'
    + '<circle cx="38" cy="48" r="2" fill="white" opacity="0.18"/>'
    // Gola
    + '<path d="M22 32 Q30 40 38 32" fill="' + hair + '" opacity="0.7"/>'
    // Bracos
    + '<ellipse cx="10" cy="48" rx="5" ry="14" fill="' + outfit + '" transform="rotate(-10,10,48)"/>'
    + '<ellipse cx="50" cy="48" rx="5" ry="14" fill="' + outfit + '" transform="rotate(10,50,48)"/>'
    // Maos
    + '<ellipse cx="7"  cy="61" rx="4" ry="4" fill="#f5c5a3" transform="rotate(-10,7,61)"/>'
    + '<ellipse cx="53" cy="61" rx="4" ry="4" fill="#f5c5a3" transform="rotate(10,53,61)"/>'
    // Sapatos
    + '<ellipse cx="20" cy="85" rx="8" ry="4" fill="' + shoe + '"/>'
    + '<ellipse cx="40" cy="85" rx="8" ry="4" fill="' + shoe + '"/>'
    + '</svg>';
}

function renderDoll(el, char, large) {
  if (!el) return;
  var scale = large ? 1.7 : 1;
  el.innerHTML = makeDollSVG(char.hair, char.outfit, char.shoe, scale);
}

// ============================================================
//  HUD (relogio + sessao)
// ============================================================
function startHud() {
  if (hudInterval) clearInterval(hudInterval);
  hudInterval = setInterval(updateHud, 1000);
  updateHud();
}

function updateHud() {
  var now = new Date();
  var h   = String(now.getHours()).padStart(2,'0');
  var m   = String(now.getMinutes()).padStart(2,'0');
  var d   = String(now.getDate()).padStart(2,'0');
  var mo  = String(now.getMonth()+1).padStart(2,'0');
  var secs = Math.floor((Date.now() - sessionStart) / 1000);
  document.getElementById('hud-time').textContent    = h + ':' + m;
  document.getElementById('hud-date').textContent    = d + '/' + mo;
  document.getElementById('hud-session').textContent = 'Sessao: ' + secs + 's';
  document.getElementById('hud-char').textContent    = 'Princesa: ' + curChar.name;
}

// ============================================================
//  BG CANVAS (estrelas + glitter animados)
// ============================================================
function initBgCanvas() {
  var canvas = document.getElementById('bg-canvas');
  var ctx    = canvas.getContext('2d');
  var stars  = [];
  var glitter = [];

  function resize() {
    canvas.width  = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener('resize', resize);

  for (var i = 0; i < 120; i++) {
    stars.push({
      x: Math.random(), y: Math.random(),
      r: Math.random()*1.5+0.3,
      s: Math.random()*2+1,
      p: Math.random()*Math.PI*2
    });
  }
  var glitterColors = ['#ff4fa3','#c77dff','#ffd700','#00e5ff'];
  for (var j = 0; j < 40; j++) {
    glitter.push({
      x: Math.random(), y: Math.random(),
      size: Math.random()*4+2,
      color: glitterColors[Math.floor(Math.random()*4)],
      p: Math.random()*Math.PI*2,
      sp: Math.random()*0.03+0.01
    });
  }

  function draw(t) {
    var w = canvas.width, h = canvas.height;
    ctx.clearRect(0,0,w,h);
    var grd = ctx.createLinearGradient(0,0,w,h);
    grd.addColorStop(0,'#0d0520');
    grd.addColorStop(1,'#1a0a35');
    ctx.fillStyle = grd;
    ctx.fillRect(0,0,w,h);

    stars.forEach(function(s) {
      var bright = 0.5 + 0.5*Math.sin(t*0.001*s.s + s.p);
      ctx.beginPath();
      ctx.arc(s.x*w, s.y*h, s.r, 0, Math.PI*2);
      ctx.fillStyle = 'rgba(255,255,255,' + (bright*0.9) + ')';
      ctx.fill();
    });

    glitter.forEach(function(g) {
      g.p += g.sp;
      var bright = 0.4 + 0.6*Math.abs(Math.sin(g.p));
      var yOff   = Math.sin(g.p*0.5)*8;
      ctx.save();
      ctx.translate(g.x*w, g.y*h + yOff);
      ctx.rotate(g.p);
      var alpha = Math.floor(bright*255).toString(16).padStart(2,'0');
      ctx.fillStyle = g.color + alpha;
      ctx.fillRect(-g.size/2, -g.size/2, g.size, g.size);
      ctx.restore();
    });

    requestAnimationFrame(draw);
  }
  requestAnimationFrame(draw);
}

// ============================================================
//  HOME (bonecas decorativas)
// ============================================================
function buildHomeDolls() {
  document.querySelectorAll('#screen-home .roblox-doll').forEach(function(el, i) {
    var c = CHARACTERS[i] || CHARACTERS[0];
    el.innerHTML = makeDollSVG(c.hair, c.outfit, c.shoe, 1);
  });
}

// ============================================================
//  SELECAO DE PERSONAGEM
// ============================================================
function buildCharsGrid() {
  var grid = document.getElementById('chars-grid');
  grid.innerHTML = '';
  CHARACTERS.forEach(function(c) {
    var div = document.createElement('div');
    div.className = 'char-card';
    div.innerHTML = '<div class="char-doll"></div>'
      + '<span class="char-name">' + c.name + '</span>'
      + '<span class="char-job">'  + c.job  + '</span>';
    renderDoll(div.querySelector('.char-doll'), c, false);
    div.addEventListener('click', function() { selectChar(c); });
    grid.appendChild(div);
  });
}

function selectChar(c) {
  curChar = Object.assign({}, c);
  toast('Bem-vinda, ' + c.name + '! 👑');
  goScreen('screen-menu');
}

// ============================================================
//  MENU PRINCIPAL
// ============================================================
function buildMenu() {
  var el   = document.getElementById('menu-char-display');
  var doll = document.createElement('div');
  doll.style.cssText = 'width:54px;height:78px;';
  renderDoll(doll, curChar, false);
  el.innerHTML = '';
  el.appendChild(doll);
  var name = document.createElement('span');
  name.className   = 'menu-active-name';
  name.textContent = curChar.name + ' - ' + curChar.job;
  el.appendChild(name);
}

// ============================================================
//  AVATAR SHOP (Customizacao)
// ============================================================
function buildCustom() {
  var doll = document.getElementById('custom-doll-large');
  renderDoll(doll, curChar, true);
  document.getElementById('custom-char-name').textContent = curChar.name;
  document.getElementById('custom-char-job').textContent  = curChar.job;
  buildColorRow('hair-colors',   HAIR_COLORS,   'hair');
  buildColorRow('outfit-colors', OUTFIT_COLORS, 'outfit');
  buildColorRow('shoe-colors',   SHOE_COLORS,   'shoe');
  buildJobRow();
}

function buildColorRow(containerId, colors, prop) {
  var row = document.getElementById(containerId);
  row.innerHTML = '';
  colors.forEach(function(c) {
    var sw = document.createElement('div');
    sw.className   = 'color-swatch' + (curChar[prop] === c ? ' active' : '');
    sw.style.background = c;
    sw.addEventListener('click', function() {
      curChar[prop] = c;
      row.querySelectorAll('.color-swatch').forEach(function(s) { s.classList.remove('active'); });
      sw.classList.add('active');
      renderDoll(document.getElementById('custom-doll-large'), curChar, true);
      toast('Look atualizado! Arrasei! ✨');
    });
    row.appendChild(sw);
  });
}

function buildJobRow() {
  var row = document.getElementById('job-row');
  row.innerHTML = '';
  JOBS.forEach(function(j) {
    var btn = document.createElement('button');
    btn.className   = 'job-btn' + (curChar.job === j ? ' active' : '');
    btn.textContent = j;
    btn.addEventListener('click', function() {
      curChar.job = j;
      row.querySelectorAll('.job-btn').forEach(function(b) { b.classList.remove('active'); });
      btn.classList.add('active');
      document.getElementById('custom-char-job').textContent = j;
      buildMenu();
      toast('Profissao: ' + j + '! Incrivel! 🎓');
    });
    row.appendChild(btn);
  });
}
// ============================================================
//  EXPLORE — CASTELO RPG TOP-DOWN
// ============================================================
var EXPLORE = {
  canvas: null, ctx: null,
  world: { w: 1200, h: 900 },
  camera: { x: 0, y: 0 },
  player: { x: 590, y: 680, w: 24, h: 32, speed: 2.5, dir: 'down', frame: 0, tick: 0 },
  keys: {},
  dpad: {},
  walls: [],
  objects: [],
  particles: [],
  running: false,
  raf: null,
  _popTimer: null,
  _dollCache: {},

  init: function() {
    this.canvas = document.getElementById('explore-canvas');
    this.ctx    = this.canvas.getContext('2d');
    this.resize();
    window.addEventListener('resize', this.resize.bind(this));
    this.buildWorld();
    this.bindInput();
    this.running = true;
    this.loop();
    document.getElementById('explore-area-name').textContent = 'Jardim do Castelo';
  },

  resize: function() {
    this.canvas.width  = window.innerWidth;
    this.canvas.height = window.innerHeight;
  },

  buildWorld: function() {
    this.walls   = [];
    this.objects = [];
    var W = this.world.w, H = this.world.h;

    // Bordas do mundo
    this.addWall(0, 0, W, 30);
    this.addWall(0, H-30, W, 30);
    this.addWall(0, 0, 30, H);
    this.addWall(W-30, 0, 30, H);

    // Muros laterais do jardim
    this.addWall(30, 30, 200, 20);
    this.addWall(970, 30, 200, 20);
    this.addWall(30, 620, 170, 20);
    this.addWall(1000, 620, 170, 20);

    // Sebes (hedges) verdes
    this.addWall(150, 200, 60, 180, true, '#2d8f2d');
    this.addWall(990, 200, 60, 180, true, '#2d8f2d');
    this.addWall(150, 550, 60,  80, true, '#2d8f2d');
    this.addWall(990, 550, 60,  80, true, '#2d8f2d');

    // Paredes do castelo (centro-topo)
    this.addWall(300, 80, 10, 320);
    this.addWall(890, 80, 10, 320);
    this.addWall(300, 80, 600, 10);
    this.addWall(300, 400, 205, 10);
    this.addWall(700, 400, 200, 10);

    // OBJETOS INTERATIVOS
    this.addObject(565, 500, 70, 70, 'Chafariz', '💦 Que chafariz lindo! Perfeito para descansar!', 'fountain', '#00b4d8', false, '⛲');
    this.addObject(200, 350, 50, 50, 'Unicornio', '✨ O unicornio te deu poderes magicos!',         'unicorn',  '#c77dff', false, '🦄');
    this.addObject(950, 350, 50, 50, 'Cavalo',    '🐎 Que cavalo bonito! Voce quer cavalgar?',       'horse',    '#8b4513', false, '🐴');
    this.addObject(100, 100, 40, 40, 'Arvore',    '🍃 As flores sao lindas!',                        'tree1',    '#1a5c1a', false, '🌳');
    this.addObject(1060,100, 40, 40, 'Arvore',    '🍃 Uma arvore centenaria!',                       'tree2',    '#1a5c1a', false, '🌳');
    this.addObject(100, 750, 40, 40, 'Flores',    '🌸 Flores magicas do jardim!',                    'flower1',  '#ff69b4', false, '🌸');
    this.addObject(1060,750, 40, 40, 'Flores',    '🌸 Um jardim encantado!',                         'flower2',  '#ff69b4', false, '🌸');
    this.addObject(700, 680, 45, 45, 'Ponei',     '🐴 Um ponei adoravel te aguardava!',              'pony',     '#d4886a', false, '🐴');

    // Portas do castelo (interior)
    this.addObject(510, 370, 80, 30, 'Salao de Dancas', '💃 Bem-vinda ao Salao de Dancas! A musica te chama!', 'door-dance', '#ffd700', true, '🚪 Salao');
    this.addObject(630, 370, 80, 30, 'Quarto Real',      '🛏 Bem-vinda ao Quarto Real! Hora de descansar!',     'door-room',  '#b76eff', true, '🚪 Quarto');

    // Interior do castelo
    this.addObject(370, 180, 60, 60, 'Musica',  '🎵 Musica encantada tocando pelo salao!',     'music',   '#ffd700', false, '🎵');
    this.addObject(820, 180, 60, 40, 'Cama',    '🛏 A cama real... Hora de descansar, Princesa!','bed',   '#c77dff', false, '🛏');
    this.addObject(590, 150, 60, 40, 'Bolo',    '🍰 Bolo de aniversario! Delicioso!',           'cake',   '#ff69b4', false, '🍰');
    this.addObject(590, 240, 50, 50, 'Trono',   '👑 O trono real! Voce e a Rainha!',            'throne', '#ffd700', false, '👑');

    this.player.x = 590;
    this.player.y = 680;
  },

  addWall: function(x, y, w, h, isHedge, color) {
    this.walls.push({ x:x, y:y, w:w, h:h, hedge: !!isHedge, color: color || null });
  },

  addObject: function(x, y, w, h, name, msg, id, color, isDoor, icon) {
    this.objects.push({
      x:x, y:y, w:w, h:h,
      name: name, msg: msg, id: id,
      color: color, isDoor: !!isDoor,
      icon: icon || '?',
      triggered: false
    });
  },

  bindInput: function() {
    var self = this;
    document.addEventListener('keydown', function(e) {
      self.keys[e.code] = true;
      var nav = ['ArrowUp','ArrowDown','ArrowLeft','ArrowRight','Space','KeyW','KeyA','KeyS','KeyD'];
      if (nav.indexOf(e.code) !== -1) e.preventDefault();
    });
    document.addEventListener('keyup', function(e) { self.keys[e.code] = false; });

    var btns = [['dpad-up','up'],['dpad-down','down'],['dpad-left','left'],['dpad-right','right']];
    btns.forEach(function(pair) {
      var btn = document.getElementById(pair[0]);
      var dir = pair[1];
      if (!btn) return;
      var on  = function() { self.dpad[dir] = true;  };
      var off = function() { self.dpad[dir] = false; };
      btn.addEventListener('touchstart', function(e) { e.preventDefault(); on(); },  { passive:false });
      btn.addEventListener('touchend',   function(e) { e.preventDefault(); off(); }, { passive:false });
      btn.addEventListener('mousedown', on);
      btn.addEventListener('mouseup',   off);
      btn.addEventListener('mouseleave', off);
    });
  },

  getInput: function() {
    var k = this.keys, d = this.dpad;
    return {
      up:    !!(k['ArrowUp']    || k['KeyW'] || d.up),
      down:  !!(k['ArrowDown']  || k['KeyS'] || d.down),
      left:  !!(k['ArrowLeft']  || k['KeyA'] || d.left),
      right: !!(k['ArrowRight'] || k['KeyD'] || d.right)
    };
  },

  collidesWall: function(nx, ny) {
    var pw = this.player.w, ph = this.player.h;
    return this.walls.some(function(w) {
      return nx < w.x+w.w && nx+pw > w.x && ny < w.y+w.h && ny+ph > w.y;
    });
  },

  updatePlayer: function() {
    var p  = this.player;
    var sp = p.speed;
    var inp = this.getInput();
    var moved = false;

    if (inp.up    && !this.collidesWall(p.x, p.y-sp)) { p.y -= sp; p.dir='up';    moved=true; }
    if (inp.down  && !this.collidesWall(p.x, p.y+sp)) { p.y += sp; p.dir='down';  moved=true; }
    if (inp.left  && !this.collidesWall(p.x-sp, p.y)) { p.x -= sp; p.dir='left';  moved=true; }
    if (inp.right && !this.collidesWall(p.x+sp, p.y)) { p.x += sp; p.dir='right'; moved=true; }

    p.x = Math.max(0, Math.min(this.world.w - p.w, p.x));
    p.y = Math.max(0, Math.min(this.world.h - p.h, p.y));

    if (moved) { p.tick++; if (p.tick % 12 === 0) p.frame = 1 - p.frame; }
    else p.frame = 0;

    // Camera
    var cw = this.canvas.width, ch = this.canvas.height;
    this.camera.x = Math.max(0, Math.min(this.world.w-cw, p.x + p.w/2 - cw/2));
    this.camera.y = Math.max(0, Math.min(this.world.h-ch, p.y + p.h/2 - ch/2));

    this.checkInteractions();
  },

  checkInteractions: function() {
    var p  = this.player;
    var px = p.x + p.w/2, py = p.y + p.h/2;
    var self = this;
    var near = null, minD = 72;

    this.objects.forEach(function(obj) {
      var ox = obj.x + obj.w/2, oy = obj.y + obj.h/2;
      var d  = Math.sqrt((px-ox)*(px-ox) + (py-oy)*(py-oy));
      if (d < minD) { minD = d; near = obj; }
    });

    if (near && !near.triggered) {
      near.triggered = true;
      self.showInteract(near.msg);
      if (near.isDoor) self.spawnParticles(near.x + near.w/2, near.y + near.h/2, near.color);
      clearTimeout(self._popTimer);
      self._popTimer = setTimeout(function() {
        near.triggered = false;
      }, 4000);
    } else if (!near) {
      this.objects.forEach(function(o) { o.triggered = false; });
    }
  },

  showInteract: function(msg) {
    var pop = document.getElementById('interact-popup');
    document.getElementById('interact-msg').textContent = msg;
    pop.classList.remove('hidden');
    clearTimeout(this._popHide);
    this._popHide = setTimeout(function() { pop.classList.add('hidden'); }, 3000);
  },

  spawnParticles: function(x, y, color) {
    for (var i = 0; i < 14; i++) {
      var angle = (Math.PI * 2 * i) / 14;
      this.particles.push({
        x: x, y: y,
        vx: Math.cos(angle) * (1 + Math.random() * 2.5),
        vy: Math.sin(angle) * (1 + Math.random() * 2.5),
        life: 60, color: color,
        size: 4 + Math.random() * 4
      });
    }
  },

  roundRect: function(ctx, x, y, w, h, r) {
    ctx.beginPath();
    ctx.moveTo(x+r, y);
    ctx.lineTo(x+w-r, y);   ctx.quadraticCurveTo(x+w, y,   x+w, y+r);
    ctx.lineTo(x+w, y+h-r); ctx.quadraticCurveTo(x+w, y+h, x+w-r, y+h);
    ctx.lineTo(x+r, y+h);   ctx.quadraticCurveTo(x,   y+h, x,   y+h-r);
    ctx.lineTo(x, y+r);     ctx.quadraticCurveTo(x,   y,   x+r, y);
    ctx.closePath();
  },

  drawWorld: function(ctx) {
    var cam = this.camera;
    var W = this.world.w, H = this.world.h;
    var cx = -cam.x, cy = -cam.y;

    // Grama base
    ctx.fillStyle = '#1a4d1a';
    ctx.fillRect(cx, cy, W, H);

    // Caminho de pedra
    ctx.fillStyle = '#8b7355';
    ctx.fillRect(510+cx, 400+cy, 180, 300);
    ctx.fillRect(200+cx, 400+cy, 760,  80);

    // Grama mais escura nas bordas
    ctx.fillStyle = '#256b25';
    var patches = [[60,60,200,160],[240,500,240,180],[760,500,200,180],[60,640,200,200],[940,640,200,200]];
    patches.forEach(function(p) { ctx.fillRect(p[0]+cx, p[1]+cy, p[2], p[3]); });

    // Corpo do castelo
    ctx.fillStyle = '#d4c5b0';
    ctx.fillRect(310+cx, 90+cy, 580, 310);

    // Ameia (topo)
    ctx.fillStyle = '#b8a890';
    for (var bx = 310; bx < 890; bx += 40) {
      ctx.fillRect(bx+cx, 70+cy, 25, 25);
    }

    // Torres laterais
    var self = this;
    [310, 860].forEach(function(tx) {
      ctx.fillStyle = '#c2b39a';
      ctx.fillRect(tx+cx, 40+cy, 80, 360);
      ctx.fillStyle = '#a09070';
      for (var bx2 = tx; bx2 < tx+80; bx2 += 20) {
        ctx.fillRect(bx2+cx, 25+cy, 14, 18);
      }
      // Janelas das torres
      ctx.fillStyle = '#4488cc';
      ctx.fillRect(tx+20+cx, 100+cy, 20, 30);
      ctx.fillRect(tx+20+cx, 180+cy, 20, 30);
      ctx.fillStyle = '#ffe066';
      ctx.fillRect(tx+24+cx, 104+cy, 12, 22);
    });

    // Janelas do castelo
    ctx.fillStyle = '#4488cc';
    [380,460,540,620,700,780].forEach(function(wx) {
      ctx.fillRect(wx+cx, 120+cy, 22, 35);
      ctx.fillRect(wx+cx, 210+cy, 22, 35);
    });
    ctx.fillStyle = '#ffe066';
    [380,460,540,620,700,780].forEach(function(wx) {
      ctx.fillRect(wx+4+cx, 124+cy, 14, 27);
      ctx.fillRect(wx+4+cx, 214+cy, 14, 27);
    });

    // Bandeiras
    ctx.fillStyle = '#ff2d7a';
    [325, 870].forEach(function(fx) {
      ctx.fillStyle = '#888';
      ctx.fillRect(fx+cx, 15+cy, 3, 30);
      ctx.fillStyle = '#ff2d7a';
      ctx.beginPath();
      ctx.moveTo(fx+3+cx, 15+cy);
      ctx.lineTo(fx+22+cx, 22+cy);
      ctx.lineTo(fx+3+cx,  30+cy);
      ctx.fill();
    });

    // Portas arqueadas
    ctx.fillStyle = '#3d2200';
    [[550,400,30],[660,400,30]].forEach(function(door) {
      ctx.beginPath();
      ctx.arc(door[0]+cx, door[1]+cy, door[2], Math.PI, 0);
      ctx.fillRect(door[0]-door[2]+cx, door[1]+cy, door[2]*2, 28);
      ctx.fill();
    });
    // Macanetas
    ctx.fillStyle = '#ffd700';
    ctx.beginPath(); ctx.arc(564+cx, 408+cy, 3, 0, Math.PI*2); ctx.fill();
    ctx.beginPath(); ctx.arc(674+cx, 408+cy, 3, 0, Math.PI*2); ctx.fill();

    // Chafariz base
    ctx.fillStyle = '#b0c0d8';
    ctx.beginPath(); ctx.arc(600+cx, 535+cy, 38, 0, Math.PI*2); ctx.fill();
    ctx.fillStyle = '#6090c0';
    ctx.beginPath(); ctx.arc(600+cx, 535+cy, 22, 0, Math.PI*2); ctx.fill();
    ctx.fillStyle = '#40b0ff';
    ctx.beginPath(); ctx.arc(600+cx, 520+cy, 10, 0, Math.PI*2); ctx.fill();
    // Agua animada (brilho)
    ctx.strokeStyle = 'rgba(150,220,255,0.6)';
    ctx.lineWidth = 2;
    ctx.beginPath(); ctx.arc(600+cx, 520+cy, 5 + Math.sin(Date.now()*0.005)*3, 0, Math.PI*2); ctx.stroke();

    // Sebes
    this.walls.filter(function(w) { return w.hedge; }).forEach(function(w) {
      ctx.fillStyle = w.color || '#2d8f2d';
      self.roundRect(ctx, w.x+cx, w.y+cy, w.w, w.h, 8);
      ctx.fill();
      ctx.fillStyle = '#39ff14';
      for (var di = 0; di < 6; di++) {
        ctx.beginPath();
        ctx.arc(w.x+10+(di%3)*18+cx, w.y+8+Math.floor(di/3)*16+cy, 5, 0, Math.PI*2);
        ctx.fill();
      }
    });

    // Objetos
    this.objects.forEach(function(obj) {
      ctx.save();
      ctx.translate(obj.x+cx, obj.y+cy);
      if (!obj.isDoor) {
        ctx.shadowColor = obj.color || '#fff';
        ctx.shadowBlur  = 14;
        ctx.font = (obj.w * 0.85) + 'px serif';
        ctx.textAlign    = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(obj.icon, obj.w/2, obj.h/2);
      } else {
        ctx.fillStyle    = obj.color || '#ffd700';
        ctx.strokeStyle  = 'rgba(255,255,255,0.5)';
        ctx.lineWidth    = 2;
        ctx.globalAlpha  = 0.88;
        self.roundRect(ctx, 0, 0, obj.w, obj.h, 6);
        ctx.fill(); ctx.stroke();
        ctx.globalAlpha  = 1;
        ctx.fillStyle    = '#fff';
        ctx.font         = 'bold 11px sans-serif';
        ctx.textAlign    = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(obj.icon, obj.w/2, obj.h/2);
      }
      ctx.restore();
    });
  },

  drawPlayer: function(ctx) {
    var p   = this.player;
    var px  = p.x - this.camera.x;
    var py  = p.y - this.camera.y;
    var bob = p.frame === 1 ? 2 : 0;

    // Sombra
    ctx.fillStyle = 'rgba(0,0,0,0.28)';
    ctx.beginPath();
    ctx.ellipse(px + p.w/2, py + p.h + 3, 12, 4, 0, 0, Math.PI*2);
    ctx.fill();

    // Doll via Image cache
    var key = curChar.hair + curChar.outfit + curChar.shoe;
    if (!this._dollCache[key]) {
      var img = new Image();
      img.src = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(makeDollSVG(curChar.hair, curChar.outfit, curChar.shoe, 0.65));
      this._dollCache[key] = img;
    }
    var di = this._dollCache[key];
    if (di.complete && di.naturalWidth > 0) {
      ctx.drawImage(di, px-6, py+bob-10, 36, 52);
    } else {
      ctx.fillStyle = curChar.outfit;
      ctx.fillRect(px, py+bob, p.w, p.h);
      ctx.fillStyle = '#f5c5a3';
      ctx.fillRect(px+6, py+bob-10, 12, 12);
    }

    // Seta de direcao
    var arrows = { down:'▼', up:'▲', left:'◀', right:'▶' };
    ctx.fillStyle = 'rgba(255,255,255,0.5)';
    ctx.font = '10px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText(arrows[p.dir] || '', px+p.w/2, py-8);
  },

  drawParticles: function(ctx) {
    var cam = this.camera;
    this.particles = this.particles.filter(function(p) { return p.life > 0; });
    this.particles.forEach(function(p) {
      p.x  += p.vx; p.y  += p.vy;
      p.vy += 0.06; p.life--;
      ctx.globalAlpha = p.life / 60;
      ctx.fillStyle   = p.color;
      ctx.fillRect(p.x - cam.x, p.y - cam.y, p.size, p.size);
    });
    ctx.globalAlpha = 1;
  },

  loop: function() {
    if (!this.running) return;
    this.updatePlayer();
    var ctx = this.ctx;
    var cw  = this.canvas.width, ch = this.canvas.height;
    ctx.clearRect(0, 0, cw, ch);
    this.drawWorld(ctx);
    this.drawPlayer(ctx);
    this.drawParticles(ctx);
    var self = this;
    this.raf = requestAnimationFrame(function() { self.loop(); });
  },

  stop: function() {
    this.running = false;
    if (this.raf) cancelAnimationFrame(this.raf);
  }
};

function startExplore() {
  EXPLORE.stop();
  EXPLORE._dollCache = {};
  EXPLORE.running    = true;
  setTimeout(function() { EXPLORE.init(); }, 60);
}
// ============================================================
//  JOGO DA MEMORIA
// ============================================================
var memState = {
  cards: [], flipped: [], matched: 0,
  moves: 0, timer: 0, interval: null,
  locked: false, total: 0
};

function startMemory() {
  goScreen('screen-memory');
  document.getElementById('memory-difficulty').classList.remove('hidden');
  document.getElementById('memory-stats').classList.add('hidden');
  document.getElementById('memory-grid').innerHTML = '';
}

function initMemory(pairs) {
  var state = memState;
  clearInterval(state.interval);
  state.matched = 0; state.moves = 0; state.timer = 0;
  state.locked  = false; state.flipped = []; state.total = pairs;

  document.getElementById('memory-difficulty').classList.add('hidden');
  document.getElementById('memory-stats').classList.remove('hidden');
  document.getElementById('mem-timer').textContent = '0';
  document.getElementById('mem-pairs').textContent = '0';
  document.getElementById('mem-moves').textContent = '0';

  var emojis = MEMORY_EMOJIS.slice(0, pairs);
  var deck   = emojis.concat(emojis).sort(function() { return Math.random()-0.5; });

  var grid = document.getElementById('memory-grid');
  var cols = pairs <= 4 ? 4 : pairs <= 8 ? 4 : 6;
  grid.style.gridTemplateColumns = 'repeat(' + cols + ', 1fr)';
  grid.innerHTML = '';
  state.cards = [];

  deck.forEach(function(emoji, i) {
    var size  = pairs <= 4 ? '80px' : pairs <= 8 ? '70px' : '58px';
    var card  = document.createElement('div');
    card.className = 'mem-card';
    card.style.cssText = 'width:' + size + ';height:' + size + ';position:relative;';
    card.innerHTML =
      '<div class="front" style="background:linear-gradient(135deg,#9b2eff,#c2006e);border-radius:8px;font-size:1.4rem;">✨</div>'
    + '<div class="back"  style="background:rgba(255,255,255,0.08);border-radius:8px;font-size:1.8rem;">' + emoji + '</div>';

    card.addEventListener('click', (function(idx, em) {
      return function() { flipCard(this, idx, em); };
    }(i, emoji)));

    grid.appendChild(card);
    state.cards.push({ el: card, emoji: emoji, matched: false });
  });

  state.interval = setInterval(function() {
    state.timer++;
    document.getElementById('mem-timer').textContent = state.timer;
  }, 1000);
}

function flipCard(cardEl, idx, emoji) {
  var state = memState;
  if (state.locked) return;
  if (state.cards[idx].matched) return;
  if (state.flipped.some(function(f) { return f.idx === idx; })) return;

  cardEl.style.transform = 'rotateY(180deg)';
  state.flipped.push({ idx: idx, emoji: emoji, el: cardEl });

  if (state.flipped.length === 2) {
    state.locked = true;
    state.moves++;
    document.getElementById('mem-moves').textContent = state.moves;

    var a = state.flipped[0], b = state.flipped[1];
    if (a.emoji === b.emoji) {
      state.matched++;
      document.getElementById('mem-pairs').textContent = state.matched;
      a.el.classList.add('matched');
      b.el.classList.add('matched');
      state.cards[a.idx].matched = true;
      state.cards[b.idx].matched = true;
      state.flipped = [];
      state.locked  = false;
      if (state.matched === state.total) memWin();
    } else {
      setTimeout(function() {
        a.el.style.transform = '';
        b.el.style.transform = '';
        state.flipped = [];
        state.locked  = false;
      }, 900);
    }
  }
}

function memWin() {
  clearInterval(memState.interval);
  toast('Parabens! ' + memState.total + ' pares em ' + memState.timer + 's com ' + memState.moves + ' jogadas! 🏆');
  setTimeout(function() {
    document.getElementById('memory-difficulty').classList.remove('hidden');
    document.getElementById('memory-stats').classList.add('hidden');
    document.getElementById('memory-grid').innerHTML = '';
  }, 3000);
}

// ============================================================
//  CORRIDA COM OBSTACULOS (Endless Runner)
// ============================================================
var runner = {
  canvas: null, ctx: null, raf: null,
  running: false, started: false,
  score: 0, lives: 3,
  player: { x: 80, y: 0, w: 32, h: 46, vy: 0, grounded: false },
  obstacles: [], clouds: [],
  speed: 3, frameCount: 0, groundY: 0,
  _dollCache: {}
};

function startRunner() {
  runner.canvas = document.getElementById('runner-canvas');
  runner.ctx    = runner.canvas.getContext('2d');
  resizeRunner();
  window.addEventListener('resize', resizeRunner);
  runner.started = false;
  document.getElementById('runner-start').classList.remove('hidden');
  document.getElementById('runner-over').classList.add('hidden');
  drawRunnerStatic();
}

function resizeRunner() {
  var c = runner.canvas;
  c.width  = window.innerWidth;
  c.height = window.innerHeight;
  runner.groundY        = c.height - 80;
  runner.player.y       = runner.groundY - runner.player.h;
}

function runnerGo() {
  document.getElementById('runner-start').classList.add('hidden');
  document.getElementById('runner-over').classList.add('hidden');
  var r = runner;
  r.score = 0; r.lives = 3; r.speed = 3; r.frameCount = 0;
  r.player.y  = r.groundY - r.player.h;
  r.player.vy = 0; r.player.grounded = true;
  r.obstacles = []; r.clouds = [];
  r._dollCache = {};
  document.getElementById('runner-score').textContent = '0';
  document.getElementById('runner-lives').textContent = '3';
  r.running = true; r.started = true;
  r.canvas.addEventListener('click',      runnerJump);
  r.canvas.addEventListener('touchstart', runnerJump, { passive: true });
  document.addEventListener('keydown',    runnerKey);
  runnerLoop();
}

function runnerKey(e) {
  if (e.code === 'Space' || e.code === 'ArrowUp') {
    e.preventDefault();
    runnerJump();
  }
}

function runnerJump() {
  if (!runner.player.grounded) return;
  runner.player.vy = -14;
  runner.player.grounded = false;
}

function stopRunner() {
  runner.running = false;
  if (runner.raf) cancelAnimationFrame(runner.raf);
  runner.canvas.removeEventListener('click',      runnerJump);
  runner.canvas.removeEventListener('touchstart', runnerJump);
  document.removeEventListener('keydown',         runnerKey);
}

function runnerLoop() {
  if (!runner.running) return;
  updateRunner();
  drawRunner();
  runner.raf = requestAnimationFrame(runnerLoop);
}

function updateRunner() {
  var r = runner;
  r.frameCount++;
  r.score++;
  document.getElementById('runner-score').textContent = r.score;
  r.speed = 3 + Math.floor(r.score / 300) * 0.5;

  // Fisica
  r.player.vy += 0.7;
  r.player.y  += r.player.vy;
  if (r.player.y >= r.groundY - r.player.h) {
    r.player.y       = r.groundY - r.player.h;
    r.player.vy      = 0;
    r.player.grounded = true;
  }

  // Spawn obstaculos
  var interval = Math.max(55, 110 - Math.floor(r.score/80)*3);
  if (r.frameCount % interval === 0) {
    var types = [
      { w:26, h:52, icon:'🌵' },
      { w:38, h:34, icon:'⬛' },
      { w:20, h:68, icon:'🌵' },
      { w:32, h:42, icon:'💜' }
    ];
    var t = types[Math.floor(Math.random()*types.length)];
    r.obstacles.push({ x: r.canvas.width+40, y: r.groundY - t.h, w: t.w, h: t.h, icon: t.icon });
  }

  // Nuvens
  if (r.frameCount % 95 === 0) {
    r.clouds.push({ x: r.canvas.width+60, y: 40+Math.random()*110, w: 80+Math.random()*60, h: 30 });
  }

  // Move
  r.obstacles.forEach(function(o) { o.x -= r.speed; });
  r.obstacles = r.obstacles.filter(function(o) { return o.x + o.w > -20; });
  r.clouds.forEach(function(cl)    { cl.x -= r.speed * 0.3; });
  r.clouds    = r.clouds.filter(function(cl) { return cl.x + cl.w > -20; });

  // Colisao
  var p = r.player;
  r.obstacles.forEach(function(o) {
    if (p.x + p.w - 7 > o.x + 5 && p.x + 7 < o.x + o.w - 5 &&
        p.y + p.h - 5 > o.y      && p.y + 5 < o.y + o.h) {
      o.x = -9999;
      r.lives--;
      document.getElementById('runner-lives').textContent = r.lives;
      toast('Ai! Tome cuidado! 💔');
      if (r.lives <= 0) runnerGameOver();
    }
  });
}

function drawRunner() {
  var r = runner, ctx = r.ctx, c = r.canvas;
  var cw = c.width, ch = c.height;

  // Ceu
  var sky = ctx.createLinearGradient(0, 0, 0, ch);
  sky.addColorStop(0,   '#0d0520');
  sky.addColorStop(0.7, '#1a0a35');
  sky.addColorStop(1,   '#2d142c');
  ctx.fillStyle = sky;
  ctx.fillRect(0, 0, cw, ch);

  // Nuvens
  ctx.fillStyle = 'rgba(255,255,255,0.06)';
  r.clouds.forEach(function(cl) {
    ctx.beginPath();
    ctx.ellipse(cl.x, cl.y, cl.w/2, cl.h/2, 0, 0, Math.PI*2);
    ctx.fill();
  });

  // Estrelas decorativas
  ctx.fillStyle = 'rgba(255,255,255,0.35)';
  for (var i = 0; i < 22; i++) {
    var sx = (i * 141 + r.frameCount * 0.18) % cw;
    var sy = (i * 79)  % (ch * 0.55);
    ctx.fillRect(sx, sy, 2, 2);
  }

  // Chao
  ctx.fillStyle = '#1a0a35';
  ctx.fillRect(0, r.groundY, cw, ch - r.groundY);
  ctx.fillStyle = '#b76eff';
  ctx.fillRect(0, r.groundY, cw, 4);

  // Linhas no chao
  ctx.fillStyle = '#9b2eff';
  var lineOffset = (r.frameCount * r.speed) % 60;
  for (var lx = -lineOffset; lx < cw; lx += 60) {
    ctx.fillRect(lx, r.groundY+5, 32, 3);
  }

  // Obstaculos
  r.obstacles.forEach(function(o) {
    ctx.font = o.h + 'px serif';
    ctx.textAlign = 'center';
    ctx.fillText(o.icon, o.x + o.w/2, o.y + o.h);
  });

  // Jogador (doll)
  var p   = r.player;
  var key = curChar.hair + curChar.outfit + curChar.shoe;
  if (!r._dollCache[key]) {
    var img2 = new Image();
    img2.src = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(makeDollSVG(curChar.hair, curChar.outfit, curChar.shoe, 0.7));
    r._dollCache[key] = img2;
  }
  var di = r._dollCache[key];
  if (di && di.complete && di.naturalWidth > 0) {
    ctx.drawImage(di, p.x, p.y, p.w, p.h);
  } else {
    ctx.fillStyle = curChar.outfit;
    ctx.fillRect(p.x, p.y, p.w, p.h);
    ctx.fillStyle = '#f5c5a3';
    ctx.fillRect(p.x+8, p.y-14, 16, 16);
  }
}

function drawRunnerStatic() {
  var r = runner;
  if (!r.canvas || !r.ctx) return;
  var ctx = r.ctx, c = r.canvas;
  var sky = ctx.createLinearGradient(0, 0, 0, c.height);
  sky.addColorStop(0, '#0d0520');
  sky.addColorStop(1, '#1a0a35');
  ctx.fillStyle = sky;
  ctx.fillRect(0, 0, c.width, c.height);
  ctx.fillStyle = '#1a0a35';
  ctx.fillRect(0, r.groundY, c.width, c.height - r.groundY);
  ctx.fillStyle = '#b76eff';
  ctx.fillRect(0, r.groundY, c.width, 4);
}

function runnerGameOver() {
  runner.running = false;
  document.getElementById('final-score').textContent = runner.score;
  document.getElementById('runner-over').classList.remove('hidden');
  toast('Game Over! Pontos: ' + runner.score + ' 🌟');
}

// ============================================================
//  INICIALIZACAO GERAL
// ============================================================
window.addEventListener('DOMContentLoaded', function() {
  initBgCanvas();
  buildHomeDolls();
  buildCharsGrid();
  startHud();
});
