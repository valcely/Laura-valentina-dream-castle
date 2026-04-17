/* ============================================================
   LAURA VALENTINA - DREAM CASTLE
   Complete game logic - Safari/iPad compatible
============================================================ */

'use strict';

// ============ DADOS DOS PERSONAGENS (INEGOCIAVEIS) ============
var CHARACTERS = [
  { id:'laura',     name:'Laura',     job:'Cantora',        hair:'#ff2d7a', outfit:'#ff6eb4', shoe:'#ff4fa3', skin:'#ffe0d0' },
  { id:'valentina', name:'Valentina', job:'Med. Veterinaria', hair:'#7b00ff', outfit:'#b76eff', shoe:'#9b2eff', skin:'#ffe0d0' },
  { id:'giovanna',  name:'Giovanna',  job:'Biomedica',      hair:'#c200a0', outfit:'#ff4fb8', shoe:'#c200a0', skin:'#ffe0d0' },
  { id:'valcely',   name:'Valcely',   job:'Enfermeira',     hair:'#e6a817', outfit:'#ffd700', shoe:'#e6a817', skin:'#ffe0d0' },
  { id:'lidiane',   name:'Lidiane',   job:'Medica',         hair:'#00bfff', outfit:'#00b4d8', shoe:'#0088cc', skin:'#ffe0d0' }
];

var JOBS_ALL = ['Cantora','Med. Veterinaria','Biomedica','Enfermeira','Medica','Professora','Bailarina','Cientista','Artista','Astronauta'];

// ============ I18N ============
var LANG = 'pt';
var I18N = {
  pt: {
    enter:'Entrar no Castelo', choose:'Escolha a sua Princesa', back:'Voltar',
    change_char:'Trocar Princesa', customize:'Personalizar',
    hair:'Cabelo', outfit:'Roupa', shoes:'Sapatos', job:'Profissao', save:'Salvar Look',
    explore:'Explorar', explore_sub:'Castelo 3D', avatar:'Avatar', avatar_sub:'Personalizar',
    race:'Corrida', race_sub:'Obstaculos', memory:'Memoria', memory_sub:'Pares',
    snake:'Cobrinha', snake_sub:'Arcade', quiz:'Quiz', quiz_sub:'Educativo',
    race_title:'Corrida Magica', race_desc:'Pule sobre obstaculos e colete moedas!',
    start:'Comecar', gameover:'Fim de Jogo', again:'Jogar Novamente', score:'Pontos',
    memory_title:'Jogo da Memoria', easy:'Facil', medium:'Medio', hard:'Dificil', restart:'Reiniciar',
    snake_title:'Cobrinha Magica', snake_desc:'Coma as estrelas douradas!', best:'Recorde',
    quiz_title:'Quiz Magico', quiz_desc:'Escolha a dificuldade', next:'Proxima', congrats:'Parabens!', correct:'Acertos',
    saved:'Look salvo com carinho!', welcome:'Bem-vinda, ',
    lbl_date:'DATA', lbl_time:'HORA', lbl_princess:'PRINCESA', lbl_session:'SESSAO',
    bubble_door:'Portas magicas do castelo! Em breve voce podera entrar...',
    bubble_unicorn:'Um unicornio magico! Ele brilha com poder de castelo!'
  },
  en: {
    enter:'Enter Castle', choose:'Choose Your Princess', back:'Back',
    change_char:'Change Princess', customize:'Customize',
    hair:'Hair', outfit:'Outfit', shoes:'Shoes', job:'Job', save:'Save Look',
    explore:'Explore', explore_sub:'3D Castle', avatar:'Avatar', avatar_sub:'Customize',
    race:'Race', race_sub:'Obstacles', memory:'Memory', memory_sub:'Pairs',
    snake:'Snake', snake_sub:'Arcade', quiz:'Quiz', quiz_sub:'Educational',
    race_title:'Magic Race', race_desc:'Jump over obstacles and collect coins!',
    start:'Start', gameover:'Game Over', again:'Play Again', score:'Score',
    memory_title:'Memory Game', easy:'Easy', medium:'Medium', hard:'Hard', restart:'Restart',
    snake_title:'Magic Snake', snake_desc:'Eat the golden stars!', best:'Best',
    quiz_title:'Magic Quiz', quiz_desc:'Choose difficulty', next:'Next', congrats:'Congrats!', correct:'Correct',
    saved:'Look saved with love!', welcome:'Welcome, ',
    lbl_date:'DATE', lbl_time:'TIME', lbl_princess:'PRINCESS', lbl_session:'SESSION',
    bubble_door:'Magic castle doors! You will enter soon...',
    bubble_unicorn:'A magic unicorn! It shines with castle power!'
  },
  es: {
    enter:'Entrar al Castillo', choose:'Elige a tu Princesa', back:'Volver',
    change_char:'Cambiar Princesa', customize:'Personalizar',
    hair:'Pelo', outfit:'Ropa', shoes:'Zapatos', job:'Profesion', save:'Guardar',
    explore:'Explorar', explore_sub:'Castillo 3D', avatar:'Avatar', avatar_sub:'Personalizar',
    race:'Carrera', race_sub:'Obstaculos', memory:'Memoria', memory_sub:'Pares',
    snake:'Culebra', snake_sub:'Arcade', quiz:'Quiz', quiz_sub:'Educativo',
    race_title:'Carrera Magica', race_desc:'Salta sobre obstaculos y colecta monedas!',
    start:'Comenzar', gameover:'Fin del Juego', again:'Jugar de Nuevo', score:'Puntos',
    memory_title:'Juego de Memoria', easy:'Facil', medium:'Medio', hard:'Dificil', restart:'Reiniciar',
    snake_title:'Culebra Magica', snake_desc:'Come las estrellas doradas!', best:'Record',
    quiz_title:'Quiz Magico', quiz_desc:'Elige la dificultad', next:'Siguiente', congrats:'Felicidades!', correct:'Aciertos',
    saved:'Look guardado con carino!', welcome:'Bienvenida, ',
    lbl_date:'FECHA', lbl_time:'HORA', lbl_princess:'PRINCESA', lbl_session:'SESION',
    bubble_door:'Puertas magicas del castillo! Pronto podras entrar...',
    bubble_unicorn:'Un unicornio magico! Brilla con poder del castillo!'
  }
};

// ============ BANCO DE QUIZ ============
var QUIZ_BANK = {
  pt: [
    {q:'Qual e o planeta mais proximo do Sol?', opts:['Venus','Terra','Mercurio','Marte'], a:2, exp:'Mercurio e o planeta mais proximo do Sol!'},
    {q:'Quantos continentes existem?', opts:['5','6','7','8'], a:2, exp:'Existem 7 continentes no mundo.'},
    {q:'Qual animal e o rei da selva?', opts:['Tigre','Leao','Urso','Lobo'], a:1, exp:'O leao e conhecido como o rei da selva!'},
    {q:'Quanto e 8 x 7?', opts:['54','56','64','58'], a:1, exp:'8 x 7 = 56.'},
    {q:'Qual a capital do Brasil?', opts:['Rio','Sao Paulo','Brasilia','Salvador'], a:2, exp:'Brasilia e a capital do Brasil desde 1960.'},
    {q:'Quantas patas tem uma aranha?', opts:['6','8','10','4'], a:1, exp:'Aranhas tem 8 patas.'},
    {q:'Qual cor se forma misturando azul e amarelo?', opts:['Roxo','Verde','Laranja','Rosa'], a:1, exp:'Azul + amarelo = verde!'},
    {q:'Qual o maior oceano do mundo?', opts:['Atlantico','Indico','Artico','Pacifico'], a:3, exp:'O Pacifico e o maior oceano do planeta.'},
    {q:'Quem pintou a Mona Lisa?', opts:['Van Gogh','Da Vinci','Picasso','Monet'], a:1, exp:'Leonardo da Vinci pintou a Mona Lisa.'},
    {q:'Quanto e a metade de 100?', opts:['25','50','75','20'], a:1, exp:'A metade de 100 e 50.'}
  ],
  en: [
    {q:'What planet is closest to the Sun?', opts:['Venus','Earth','Mercury','Mars'], a:2, exp:'Mercury is closest to the Sun!'},
    {q:'How many continents are there?', opts:['5','6','7','8'], a:2, exp:'There are 7 continents.'},
    {q:'Which animal is king of the jungle?', opts:['Tiger','Lion','Bear','Wolf'], a:1, exp:'The lion is the king of the jungle!'},
    {q:'What is 8 x 7?', opts:['54','56','64','58'], a:1, exp:'8 x 7 = 56.'},
    {q:'What is the capital of Brazil?', opts:['Rio','Sao Paulo','Brasilia','Salvador'], a:2, exp:'Brasilia is the capital since 1960.'},
    {q:'How many legs does a spider have?', opts:['6','8','10','4'], a:1, exp:'Spiders have 8 legs.'},
    {q:'Blue + yellow makes what color?', opts:['Purple','Green','Orange','Pink'], a:1, exp:'Blue + yellow = green!'},
    {q:'What is the biggest ocean?', opts:['Atlantic','Indian','Arctic','Pacific'], a:3, exp:'The Pacific is the biggest ocean.'},
    {q:'Who painted the Mona Lisa?', opts:['Van Gogh','Da Vinci','Picasso','Monet'], a:1, exp:'Leonardo da Vinci painted it.'},
    {q:'What is half of 100?', opts:['25','50','75','20'], a:1, exp:'Half of 100 is 50.'}
  ],
  es: [
    {q:'Que planeta es el mas cercano al Sol?', opts:['Venus','Tierra','Mercurio','Marte'], a:2, exp:'Mercurio es el mas cercano al Sol!'},
    {q:'Cuantos continentes hay?', opts:['5','6','7','8'], a:2, exp:'Hay 7 continentes en el mundo.'},
    {q:'Que animal es el rey de la selva?', opts:['Tigre','Leon','Oso','Lobo'], a:1, exp:'El leon es el rey de la selva!'},
    {q:'Cuanto es 8 x 7?', opts:['54','56','64','58'], a:1, exp:'8 x 7 = 56.'},
    {q:'Cual es la capital de Brasil?', opts:['Rio','Sao Paulo','Brasilia','Salvador'], a:2, exp:'Brasilia es la capital desde 1960.'},
    {q:'Cuantas patas tiene una arana?', opts:['6','8','10','4'], a:1, exp:'Las aranas tienen 8 patas.'},
    {q:'Azul + amarillo da que color?', opts:['Morado','Verde','Naranja','Rosa'], a:1, exp:'Azul + amarillo = verde!'},
    {q:'Cual es el oceano mas grande?', opts:['Atlantico','Indico','Artico','Pacifico'], a:3, exp:'El Pacifico es el mas grande.'},
    {q:'Quien pinto la Mona Lisa?', opts:['Van Gogh','Da Vinci','Picasso','Monet'], a:1, exp:'Leonardo da Vinci la pinto.'},
    {q:'Cuanto es la mitad de 100?', opts:['25','50','75','20'], a:1, exp:'La mitad de 100 es 50.'}
  ]
};

// ============ STATE ============
var state = {
  currentChar: CHARACTERS[0],
  screen: 'home',
  sessionStart: Date.now(),
  musicOn: true,
  bestSnake: 0,
  quizDiff: 'easy',
  memDiff: 4
};

// ============ HELPERS ============
function $(id) { return document.getElementById(id); }
function $$(sel) { return document.querySelectorAll(sel); }
function t(key) { return (I18N[LANG] && I18N[LANG][key]) || key; }
function hexToInt(hex) {
  // Safari-safe hex parsing
  if (!hex) return 0xffffff;
  var h = hex.charAt(0) === '#' ? hex.slice(1) : hex;
  return parseInt(h, 16);
}
function toast(msg) {
  var el = $('toast');
  el.textContent = msg;
  el.classList.add('show');
  setTimeout(function(){ el.classList.remove('show'); }, 2200);
}
function showScreen(name) {
  var screens = $$('.screen');
  for (var i = 0; i < screens.length; i++) screens[i].classList.remove('active');
  var target = $('screen-' + name);
  if (target) target.classList.add('active');
  state.screen = name;
  var hud = $('global-hud');
  if (name === 'home' || name === 'select') hud.classList.add('hud-hidden');
  else hud.classList.remove('hud-hidden');
}

// ============ DESENHO CANVAS 2D (PRINCESA) ============
function drawPrincess(ctx, w, h, char) {
  ctx.clearRect(0, 0, w, h);
  var cx = w / 2;
  var scale = w / 130;

  // Sombra
  ctx.fillStyle = 'rgba(0,0,0,0.25)';
  ctx.beginPath();
  ctx.ellipse(cx, h - 10*scale, 30*scale, 5*scale, 0, 0, Math.PI*2);
  ctx.fill();

  // Pernas
  ctx.fillStyle = char.skin;
  ctx.fillRect(cx - 12*scale, h - 50*scale, 10*scale, 25*scale);
  ctx.fillRect(cx + 2*scale, h - 50*scale, 10*scale, 25*scale);

  // Sapatos
  ctx.fillStyle = char.shoe;
  ctx.fillRect(cx - 14*scale, h - 28*scale, 14*scale, 8*scale);
  ctx.fillRect(cx + 0, h - 28*scale, 14*scale, 8*scale);

  // Vestido (trapezio)
  ctx.fillStyle = char.outfit;
  ctx.beginPath();
  ctx.moveTo(cx - 18*scale, h - 90*scale);
  ctx.lineTo(cx + 18*scale, h - 90*scale);
  ctx.lineTo(cx + 28*scale, h - 50*scale);
  ctx.lineTo(cx - 28*scale, h - 50*scale);
  ctx.closePath();
  ctx.fill();

  // Brilhos no vestido
  ctx.fillStyle = 'rgba(255,255,255,.5)';
  ctx.beginPath(); ctx.arc(cx - 10*scale, h - 70*scale, 2*scale, 0, Math.PI*2); ctx.fill();
  ctx.beginPath(); ctx.arc(cx + 6*scale, h - 60*scale, 2*scale, 0, Math.PI*2); ctx.fill();

  // Torso/Braços
  ctx.fillStyle = char.outfit;
  ctx.fillRect(cx - 16*scale, h - 100*scale, 32*scale, 15*scale);
  ctx.fillStyle = char.skin;
  ctx.fillRect(cx - 22*scale, h - 98*scale, 6*scale, 20*scale);
  ctx.fillRect(cx + 16*scale, h - 98*scale, 6*scale, 20*scale);

  // Pescoço
  ctx.fillStyle = char.skin;
  ctx.fillRect(cx - 5*scale, h - 105*scale, 10*scale, 8*scale);

  // Cabelo atras (volume)
  ctx.fillStyle = char.hair;
  ctx.beginPath();
  ctx.arc(cx, h - 125*scale, 26*scale, 0, Math.PI*2);
  ctx.fill();
  ctx.fillRect(cx - 26*scale, h - 128*scale, 52*scale, 30*scale);

  // Rosto
  ctx.fillStyle = char.skin;
  ctx.beginPath();
  ctx.arc(cx, h - 125*scale, 20*scale, 0, Math.PI*2);
  ctx.fill();

  // Franja
  ctx.fillStyle = char.hair;
  ctx.beginPath();
  ctx.moveTo(cx - 20*scale, h - 135*scale);
  ctx.lineTo(cx + 20*scale, h - 135*scale);
  ctx.lineTo(cx + 16*scale, h - 120*scale);
  ctx.lineTo(cx - 16*scale, h - 120*scale);
  ctx.closePath();
  ctx.fill();

  // Coroa
  ctx.fillStyle = '#ffd700';
  ctx.beginPath();
  ctx.moveTo(cx - 14*scale, h - 140*scale);
  ctx.lineTo(cx - 10*scale, h - 150*scale);
  ctx.lineTo(cx - 6*scale, h - 142*scale);
  ctx.lineTo(cx - 2*scale, h - 152*scale);
  ctx.lineTo(cx + 2*scale, h - 142*scale);
  ctx.lineTo(cx + 6*scale, h - 152*scale);
  ctx.lineTo(cx + 10*scale, h - 142*scale);
  ctx.lineTo(cx + 14*scale, h - 150*scale);
  ctx.lineTo(cx + 14*scale, h - 140*scale);
  ctx.closePath();
  ctx.fill();
  // Gemas na coroa
  ctx.fillStyle = '#ff4fa3';
  ctx.beginPath(); ctx.arc(cx - 8*scale, h - 144*scale, 1.5*scale, 0, Math.PI*2); ctx.fill();
  ctx.beginPath(); ctx.arc(cx, h - 146*scale, 1.8*scale, 0, Math.PI*2); ctx.fill();
  ctx.beginPath(); ctx.arc(cx + 8*scale, h - 144*scale, 1.5*scale, 0, Math.PI*2); ctx.fill();

  // Olhos
  ctx.fillStyle = '#fff';
  ctx.beginPath(); ctx.arc(cx - 7*scale, h - 125*scale, 3.5*scale, 0, Math.PI*2); ctx.fill();
  ctx.beginPath(); ctx.arc(cx + 7*scale, h - 125*scale, 3.5*scale, 0, Math.PI*2); ctx.fill();
  ctx.fillStyle = '#2a1b4a';
  ctx.beginPath(); ctx.arc(cx - 7*scale, h - 125*scale, 2.2*scale, 0, Math.PI*2); ctx.fill();
  ctx.beginPath(); ctx.arc(cx + 7*scale, h - 125*scale, 2.2*scale, 0, Math.PI*2); ctx.fill();
  ctx.fillStyle = '#fff';
  ctx.beginPath(); ctx.arc(cx - 6*scale, h - 126*scale, 0.8*scale, 0, Math.PI*2); ctx.fill();
  ctx.beginPath(); ctx.arc(cx + 8*scale, h - 126*scale, 0.8*scale, 0, Math.PI*2); ctx.fill();

  // Bochechas
  ctx.fillStyle = 'rgba(255,120,170,0.5)';
  ctx.beginPath(); ctx.arc(cx - 11*scale, h - 119*scale, 2.5*scale, 0, Math.PI*2); ctx.fill();
  ctx.beginPath(); ctx.arc(cx + 11*scale, h - 119*scale, 2.5*scale, 0, Math.PI*2); ctx.fill();

  // Sorriso
  ctx.strokeStyle = '#c83b70';
  ctx.lineWidth = 1.5*scale;
  ctx.beginPath();
  ctx.arc(cx, h - 117*scale, 4*scale, 0.1*Math.PI, 0.9*Math.PI);
  ctx.stroke();
}

// ============ FUNDO ANIMADO ============
var bgCanvas, bgCtx, bgStars = [], bgGlitters = [], bgNebulas = [], bgMeteors = [];
function initBg() {
  bgCanvas = $('bg-particles');
  bgCtx = bgCanvas.getContext('2d');
  resizeBg();
  window.addEventListener('resize', resizeBg);
  requestAnimationFrame(bgLoop);
}
function resizeBg() {
  bgCanvas.width = window.innerWidth;
  bgCanvas.height = window.innerHeight;
  bgStars = [];
  var count = Math.min(200, Math.floor((bgCanvas.width * bgCanvas.height) / 7000));
  var colors = ['#ffffff','#ffd700','#ff8fd1','#c77dff','#00e5ff','#39ff14'];
  for (var i = 0; i < count; i++) {
    bgStars.push({
      x: Math.random() * bgCanvas.width,
      y: Math.random() * bgCanvas.height,
      r: Math.random() * 1.5 + 0.3,
      phase: Math.random() * Math.PI * 2,
      speed: Math.random() * 0.03 + 0.01,
      color: Math.random() < 0.15 ? colors[Math.floor(Math.random()*colors.length)] : '#ffffff'
    });
  }
  bgGlitters = [];
  var gc = 60;
  for (var j = 0; j < gc; j++) {
    bgGlitters.push({
      x: Math.random() * bgCanvas.width,
      y: Math.random() * bgCanvas.height,
      size: Math.random() * 3 + 1.5,
      rot: Math.random() * Math.PI,
      rotSpeed: (Math.random() - 0.5) * 0.02,
      phase: Math.random() * Math.PI * 2,
      speed: Math.random() * 0.04 + 0.02,
      driftY: Math.random() * 0.3
    });
  }
  bgNebulas = [
    { x: bgCanvas.width * 0.2, y: bgCanvas.height * 0.3, r: 200, color: 'rgba(155,46,255,0.18)', phase: 0 },
    { x: bgCanvas.width * 0.8, y: bgCanvas.height * 0.2, r: 180, color: 'rgba(255,79,163,0.15)', phase: 1 },
    { x: bgCanvas.width * 0.5, y: bgCanvas.height * 0.6, r: 220, color: 'rgba(199,125,255,0.12)', phase: 2 },
    { x: bgCanvas.width * 0.15, y: bgCanvas.height * 0.85, r: 170, color: 'rgba(0,229,255,0.12)', phase: 3 },
    { x: bgCanvas.width * 0.85, y: bgCanvas.height * 0.75, r: 190, color: 'rgba(255,215,0,0.10)', phase: 4 }
  ];
  bgCanvas.style.zIndex = '0';
  bgCanvas.style.pointerEvents = 'none';
}
function bgLoop() {
  var t = performance.now() / 1000;
  var w = bgCanvas.width, h = bgCanvas.height;
  bgCtx.clearRect(0, 0, w, h);

  // Gradiente de fundo
  var hue = 260 + Math.sin(t * 0.1) * 15;
  var grd = bgCtx.createRadialGradient(w/2, h * 0.3, 50, w/2, h/2, Math.max(w, h));
  grd.addColorStop(0, 'hsl(' + hue + ',50%,12%)');
  grd.addColorStop(1, '#0a0318');
  bgCtx.fillStyle = grd;
  bgCtx.fillRect(0, 0, w, h);

  // Nebulosas
  for (var i = 0; i < bgNebulas.length; i++) {
    var n = bgNebulas[i];
    var pulse = 0.6 + Math.sin(t * 0.5 + n.phase) * 0.4;
    var g = bgCtx.createRadialGradient(n.x, n.y, 0, n.x, n.y, n.r * pulse);
    g.addColorStop(0, n.color);
    g.addColorStop(1, 'rgba(0,0,0,0)');
    bgCtx.fillStyle = g;
    bgCtx.fillRect(n.x - n.r, n.y - n.r, n.r * 2, n.r * 2);
  }

  // Estrelas
  for (var s = 0; s < bgStars.length; s++) {
    var st = bgStars[s];
    var a = 0.4 + Math.sin(t + st.phase) * 0.5;
    if (a < 0) a = 0;
    bgCtx.fillStyle = st.color;
    bgCtx.globalAlpha = a;
    bgCtx.beginPath();
    bgCtx.arc(st.x, st.y, st.r, 0, Math.PI * 2);
    bgCtx.fill();
    // Cruz de luz em estrelas grandes e brilhantes
    if (st.r > 1.1 && a > 0.7) {
      bgCtx.strokeStyle = st.color;
      bgCtx.globalAlpha = (a - 0.7) * 2;
      bgCtx.lineWidth = 0.5;
      bgCtx.beginPath();
      bgCtx.moveTo(st.x - st.r * 3, st.y);
      bgCtx.lineTo(st.x + st.r * 3, st.y);
      bgCtx.moveTo(st.x, st.y - st.r * 3);
      bgCtx.lineTo(st.x, st.y + st.r * 3);
      bgCtx.stroke();
    }
  }
  bgCtx.globalAlpha = 1;

  // Glitters
  for (var gi = 0; gi < bgGlitters.length; gi++) {
    var gl = bgGlitters[gi];
    gl.rot += gl.rotSpeed;
    gl.y -= gl.driftY;
    if (gl.y < -10) { gl.y = h + 10; gl.x = Math.random() * w; }
    var ga = 0.3 + Math.sin(t * gl.speed * 20 + gl.phase) * 0.6;
    if (ga < 0) ga = 0;
    bgCtx.save();
    bgCtx.translate(gl.x, gl.y);
    bgCtx.rotate(gl.rot);
    bgCtx.globalAlpha = ga;
    bgCtx.fillStyle = '#ffd700';
    bgCtx.beginPath();
    bgCtx.moveTo(0, -gl.size);
    bgCtx.lineTo(gl.size * 0.5, 0);
    bgCtx.lineTo(0, gl.size);
    bgCtx.lineTo(-gl.size * 0.5, 0);
    bgCtx.closePath();
    bgCtx.fill();
    bgCtx.restore();
  }
  bgCtx.globalAlpha = 1;

  // Meteoros
  if (Math.random() < 0.004) {
    bgMeteors.push({
      x: Math.random() * w,
      y: -20,
      vx: -2 - Math.random() * 3,
      vy: 3 + Math.random() * 4,
      life: 1
    });
  }
  for (var m = bgMeteors.length - 1; m >= 0; m--) {
    var me = bgMeteors[m];
    me.x += me.vx;
    me.y += me.vy;
    me.life -= 0.015;
    if (me.life <= 0 || me.x < -50 || me.y > h + 50) {
      bgMeteors.splice(m, 1);
      continue;
    }
    var mgrd = bgCtx.createLinearGradient(me.x, me.y, me.x - me.vx * 10, me.y - me.vy * 10);
    mgrd.addColorStop(0, 'rgba(255,255,255,' + me.life + ')');
    mgrd.addColorStop(1, 'rgba(255,255,255,0)');
    bgCtx.strokeStyle = mgrd;
    bgCtx.lineWidth = 2;
    bgCtx.beginPath();
    bgCtx.moveTo(me.x, me.y);
    bgCtx.lineTo(me.x - me.vx * 10, me.y - me.vy * 10);
    bgCtx.stroke();
  }

  requestAnimationFrame(bgLoop);
}

// ============ SPARKLES NO CURSOR ============
var cursorSparkles = [];
var sparkleContainer;
function initCursorSparkles() {
  sparkleContainer = document.createElement('canvas');
  sparkleContainer.style.position = 'fixed';
  sparkleContainer.style.inset = '0';
  sparkleContainer.style.width = '100vw';
  sparkleContainer.style.height = '100vh';
  sparkleContainer.style.zIndex = '9998';
  sparkleContainer.style.pointerEvents = 'none';
  document.body.appendChild(sparkleContainer);
  sparkleContainer.width = window.innerWidth;
  sparkleContainer.height = window.innerHeight;
  var sctx = sparkleContainer.getContext('2d');
  window.addEventListener('resize', function(){
    sparkleContainer.width = window.innerWidth;
    sparkleContainer.height = window.innerHeight;
  });
  function addSpark(x, y) {
    if (cursorSparkles.length >= 80) return;
    var colors = ['#ffd700','#ff4fa3','#c77dff','#00e5ff','#39ff14'];
    for (var i = 0; i < 2; i++) {
      cursorSparkles.push({
        x: x, y: y,
        vx: (Math.random() - 0.5) * 3,
        vy: (Math.random() - 0.5) * 3 - 1,
        size: Math.random() * 4 + 2,
        rot: Math.random() * Math.PI,
        rotSpeed: (Math.random() - 0.5) * 0.2,
        life: 1,
        color: colors[Math.floor(Math.random() * colors.length)]
      });
    }
  }
  window.addEventListener('mousemove', function(e){ addSpark(e.clientX, e.clientY); });
  window.addEventListener('touchmove', function(e){
    if (e.touches.length > 0) addSpark(e.touches[0].clientX, e.touches[0].clientY);
  }, { passive: true });
  function loop() {
    sctx.clearRect(0, 0, sparkleContainer.width, sparkleContainer.height);
    for (var i = cursorSparkles.length - 1; i >= 0; i--) {
      var s = cursorSparkles[i];
      s.x += s.vx;
      s.y += s.vy;
      s.vy += 0.1;
      s.rot += s.rotSpeed;
      s.life -= 0.025;
      if (s.life <= 0) { cursorSparkles.splice(i, 1); continue; }
      sctx.save();
      sctx.translate(s.x, s.y);
      sctx.rotate(s.rot);
      sctx.globalAlpha = s.life;
      sctx.fillStyle = s.color;
      sctx.beginPath();
      sctx.moveTo(0, -s.size);
      sctx.lineTo(s.size * 0.5, 0);
      sctx.lineTo(0, s.size);
      sctx.lineTo(-s.size * 0.5, 0);
      sctx.closePath();
      sctx.fill();
      sctx.restore();
    }
    sctx.globalAlpha = 1;
    requestAnimationFrame(loop);
  }
  loop();
}

// ============ AUDIO (Web Audio API) ============
var audioCtx = null;
var musicTimer = null;
var MELODY = [523.25, 659.25, 783.99, 1046.50, 987.77, 880.00, 783.99, 659.25, 523.25, 587.33, 659.25, 698.46, 783.99, 880.00, 987.77, 1046.50, 987.77, 880.00, 783.99, 659.25, 587.33, 523.25, 493.88, 523.25];
var BASS = [130.81, 164.81, 196.00, 220.00, 196.00, 164.81, 146.83, 130.81];
var melIdx = 0, bassIdx = 0;

function ensureAudio() {
  if (!audioCtx) {
    try { audioCtx = new (window.AudioContext || window.webkitAudioContext)(); }
    catch (e) { console.warn('No audio'); }
  }
  if (audioCtx && audioCtx.state === 'suspended') audioCtx.resume();
}
function unlockAudio() { ensureAudio(); }
function playTone(freq, dur, type, vol) {
  if (!audioCtx) return;
  type = type || 'sine';
  vol = vol == null ? 0.15 : vol;
  var o = audioCtx.createOscillator();
  var g = audioCtx.createGain();
  o.type = type;
  o.frequency.value = freq;
  g.gain.setValueAtTime(vol, audioCtx.currentTime);
  g.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + dur);
  o.connect(g); g.connect(audioCtx.destination);
  o.start(); o.stop(audioCtx.currentTime + dur);
}
function sndClick() { ensureAudio(); playTone(800, 0.08, 'square', 0.08); }
function sndSuccess() { ensureAudio(); playTone(523, 0.12); setTimeout(function(){playTone(659,0.12);},80); setTimeout(function(){playTone(783,0.2);},160); }
function sndError() { ensureAudio(); playTone(200, 0.25, 'sawtooth', 0.1); }
function sndJump() { ensureAudio(); playTone(400, 0.12); setTimeout(function(){playTone(600,0.12);},60); }
function sndCoin() { ensureAudio(); playTone(987, 0.1); setTimeout(function(){playTone(1318,0.15);},60); }
function sndHit() { ensureAudio(); playTone(150, 0.2, 'sawtooth', 0.12); }
function sndEat() { ensureAudio(); playTone(660, 0.08); setTimeout(function(){playTone(880,0.1);},40); }
function sndGameOver() { ensureAudio();
  playTone(523, 0.15);
  setTimeout(function(){playTone(415,0.15);},150);
  setTimeout(function(){playTone(311,0.15);},300);
  setTimeout(function(){playTone(261,0.3);},450);
}
function sndCorrect() { ensureAudio(); playTone(659,0.1); setTimeout(function(){playTone(783,0.1);},80); setTimeout(function(){playTone(987,0.2);},160); }
function sndWrong() { ensureAudio(); playTone(220, 0.3, 'sawtooth', 0.1); }
function sndCardFlip() { ensureAudio(); playTone(500, 0.05, 'square', 0.08); }
function sndMatch() { ensureAudio(); playTone(659,0.08); setTimeout(function(){playTone(783,0.08);},60); setTimeout(function(){playTone(987,0.08);},120); setTimeout(function(){playTone(1318,0.15);},180); }

function startMusic() {
  ensureAudio();
  if (!audioCtx) return;
  if (musicTimer) clearInterval(musicTimer);
  melIdx = 0; bassIdx = 0;
  musicTimer = setInterval(function(){
    if (!state.musicOn) return;
    playTone(MELODY[melIdx], 0.28, 'sine', 0.06);
    if (melIdx % 3 === 0) playTone(BASS[bassIdx], 0.4, 'triangle', 0.04);
    melIdx = (melIdx + 1) % MELODY.length;
    bassIdx = (bassIdx + 1) % BASS.length;
  }, 305);
}
function stopMusic() {
  if (musicTimer) { clearInterval(musicTimer); musicTimer = null; }
}

// ============ HUD ============
function updateHUD() {
  var now = new Date();
  var d = String(now.getDate()).padStart(2,'0') + '/' + String(now.getMonth()+1).padStart(2,'0') + '/' + now.getFullYear();
  var h = String(now.getHours()).padStart(2,'0') + ':' + String(now.getMinutes()).padStart(2,'0');
  $('hud-date').textContent = d;
  $('hud-time').textContent = h;
  $('hud-princess').textContent = state.currentChar.name + ' · ' + state.currentChar.job;
  var secs = Math.floor((Date.now() - state.sessionStart) / 1000);
  var ss;
  if (secs < 60) ss = secs + 's';
  else if (secs < 3600) ss = Math.floor(secs/60) + 'm ' + (secs % 60) + 's';
  else ss = Math.floor(secs/3600) + 'h ' + Math.floor((secs%3600)/60) + 'm';
  $('hud-session').textContent = ss;
}

// ============ HOME ============
function buildHome() {
  var row = $('home-chars-row');
  row.innerHTML = '';
  for (var i = 0; i < 3; i++) {
    (function(ch){
      var wrap = document.createElement('div');
      wrap.className = 'home-mini-char';
      var c = document.createElement('canvas');
      c.width = 80; c.height = 105;
      wrap.appendChild(c);
      drawPrincess(c.getContext('2d'), 80, 105, ch);
      wrap.addEventListener('click', function(){
        sndClick();
        state.currentChar = ch;
        updateMenuHeader();
        showScreen('menu');
      });
      row.appendChild(wrap);
    })(CHARACTERS[i]);
  }
}

// ============ SELECT ============
function buildSelect() {
  var grid = $('char-grid');
  grid.innerHTML = '';
  for (var i = 0; i < CHARACTERS.length; i++) {
    (function(ch){
      var card = document.createElement('div');
      card.className = 'char-card';
      if (ch.id === state.currentChar.id) card.classList.add('selected');
      var cn = document.createElement('canvas');
      cn.width = 120; cn.height = 150;
      card.appendChild(cn);
      drawPrincess(cn.getContext('2d'), 120, 150, ch);
      var h = document.createElement('h4');
      h.textContent = ch.name;
      var p = document.createElement('p');
      p.textContent = ch.job;
      card.appendChild(h); card.appendChild(p);
      card.addEventListener('click', function(){
        sndSuccess();
        state.currentChar = ch;
        updateMenuHeader();
        toast(t('welcome') + ch.name + '!');
        setTimeout(function(){ showScreen('menu'); }, 500);
      });
      grid.appendChild(card);
    })(CHARACTERS[i]);
  }
}

// ============ MENU ============
function updateMenuHeader() {
  var cv = $('menu-princess-canvas');
  drawPrincess(cv.getContext('2d'), 130, 170, state.currentChar);
  $('menu-princess-name').textContent = state.currentChar.name;
  $('menu-princess-job').textContent = state.currentChar.job;
}

// ============ AVATAR ============
var avatarEdit = null;
var COLOR_PALETTE = ['#ff2d7a','#7b00ff','#c200a0','#e6a817','#00bfff','#39ff14','#ff8c00','#000000','#ffffff','#a52a2a'];

function buildAvatar() {
  avatarEdit = {
    hair: state.currentChar.hair,
    outfit: state.currentChar.outfit,
    shoe: state.currentChar.shoe,
    skin: state.currentChar.skin,
    job: state.currentChar.job,
    name: state.currentChar.name,
    id: state.currentChar.id
  };
  redrawAvatar();
  buildSwatches('swatch-hair', 'hair');
  buildSwatches('swatch-outfit', 'outfit');
  buildSwatches('swatch-shoe', 'shoe');
  buildJobs();
}
function redrawAvatar() {
  drawPrincess($('avatar-preview').getContext('2d'), 180, 240, avatarEdit);
}
function buildSwatches(containerId, prop) {
  var c = $(containerId);
  c.innerHTML = '';
  for (var i = 0; i < COLOR_PALETTE.length; i++) {
    (function(col){
      var s = document.createElement('div');
      s.className = 'swatch';
      s.style.background = col;
      if (col === avatarEdit[prop]) s.classList.add('active');
      s.addEventListener('click', function(){
        sndClick();
        avatarEdit[prop] = col;
        var all = c.querySelectorAll('.swatch');
        for (var k = 0; k < all.length; k++) all[k].classList.remove('active');
        s.classList.add('active');
        redrawAvatar();
      });
      c.appendChild(s);
    })(COLOR_PALETTE[i]);
  }
}
function buildJobs() {
  var c = $('job-row');
  c.innerHTML = '';
  for (var i = 0; i < JOBS_ALL.length; i++) {
    (function(job){
      var b = document.createElement('button');
      b.className = 'job-btn';
      b.textContent = job;
      if (job === avatarEdit.job) b.classList.add('active');
      b.addEventListener('click', function(){
        sndClick();
        avatarEdit.job = job;
        var all = c.querySelectorAll('.job-btn');
        for (var k = 0; k < all.length; k++) all[k].classList.remove('active');
        b.classList.add('active');
      });
      c.appendChild(b);
    })(JOBS_ALL[i]);
  }
}
function saveLook() {
  sndSuccess();
  // Atualizar personagem
  state.currentChar.hair = avatarEdit.hair;
  state.currentChar.outfit = avatarEdit.outfit;
  state.currentChar.shoe = avatarEdit.shoe;
  state.currentChar.job = avatarEdit.job;
  toast(t('saved'));
  updateMenuHeader();
  setTimeout(function(){ showScreen('menu'); }, 500);
}

// ============ RACE (ENDLESS RUNNER) ============
var race = null;
function startRace() {
  stopRace(); // Seguranca
  var cv = $('race-canvas');
  cv.width = window.innerWidth;
  cv.height = window.innerHeight;
  var ctx = cv.getContext('2d');
  race = {
    ctx: ctx, cv: cv,
    x: 80, y: cv.height - 140, vy: 0, onGround: true,
    w: 40, h: 60,
    obs: [], coins: [], clouds: [], stars: [],
    score: 0, lives: 3, speed: 6,
    lastObs: 0, lastCoin: 0, time: 0,
    running: true, lastT: performance.now(),
    anim: null
  };
  // Estrelas e nuvens de fundo
  for (var i = 0; i < 30; i++) {
    race.stars.push({ x: Math.random() * cv.width, y: Math.random() * cv.height * 0.5, r: Math.random() * 1.5 + 0.5 });
  }
  for (var j = 0; j < 5; j++) {
    race.clouds.push({ x: Math.random() * cv.width, y: Math.random() * 150 + 30, size: Math.random() * 40 + 40, speed: Math.random() * 0.5 + 0.3 });
  }
  $('race-lives').textContent = race.lives;
  $('race-score').textContent = race.score;
  $('race-start').classList.add('hidden');
  $('race-gameover').classList.add('hidden');

  race._keyHandler = function(e){
    if (e.key === ' ' || e.key === 'ArrowUp' || e.key === 'w' || e.key === 'W') {
      e.preventDefault();
      raceJump();
    }
  };
  race._touchHandler = function(e){ e.preventDefault(); raceJump(); };
  race._clickHandler = function(){ raceJump(); };
  window.addEventListener('keydown', race._keyHandler);
  cv.addEventListener('click', race._clickHandler);
  cv.addEventListener('touchstart', race._touchHandler, { passive: false });
  $('race-jump-btn').addEventListener('touchstart', race._touchHandler, { passive: false });
  $('race-jump-btn').addEventListener('click', race._clickHandler);

  raceLoop();
}
function raceJump() {
  if (race && race.onGround && race.running) {
    race.vy = -15;
    race.onGround = false;
    sndJump();
  }
}
function raceLoop() {
  if (!race || !race.running) return;
  var now = performance.now();
  var dt = (now - race.lastT) / 1000;
  if (dt > 0.1) dt = 0.1;
  race.lastT = now;
  race.time += dt;

  var ctx = race.ctx;
  var cv = race.cv;
  ctx.clearRect(0, 0, cv.width, cv.height);

  // Ceu gradiente
  var grd = ctx.createLinearGradient(0, 0, 0, cv.height);
  grd.addColorStop(0, '#ffb3d9');
  grd.addColorStop(0.5, '#c77dff');
  grd.addColorStop(1, '#8a2be2');
  ctx.fillStyle = grd;
  ctx.fillRect(0, 0, cv.width, cv.height);

  // Estrelas
  ctx.fillStyle = 'rgba(255,255,255,0.8)';
  for (var i = 0; i < race.stars.length; i++) {
    var s = race.stars[i];
    ctx.globalAlpha = 0.5 + Math.sin(race.time * 2 + i) * 0.4;
    ctx.beginPath(); ctx.arc(s.x, s.y, s.r, 0, Math.PI*2); ctx.fill();
  }
  ctx.globalAlpha = 1;

  // Nuvens
  for (var k = 0; k < race.clouds.length; k++) {
    var c = race.clouds[k];
    c.x -= c.speed;
    if (c.x + c.size < 0) { c.x = cv.width + 50; c.y = Math.random() * 150 + 30; }
    ctx.fillStyle = 'rgba(255,255,255,0.7)';
    ctx.beginPath();
    ctx.arc(c.x, c.y, c.size * 0.5, 0, Math.PI*2);
    ctx.arc(c.x + c.size * 0.4, c.y - 5, c.size * 0.4, 0, Math.PI*2);
    ctx.arc(c.x - c.size * 0.4, c.y - 3, c.size * 0.35, 0, Math.PI*2);
    ctx.fill();
  }

  // Chao com linhas em perspectiva
  var groundY = cv.height - 80;
  ctx.fillStyle = '#4a1860';
  ctx.fillRect(0, groundY, cv.width, 80);
  ctx.fillStyle = '#6a2a8c';
  ctx.fillRect(0, groundY, cv.width, 10);
  ctx.strokeStyle = 'rgba(199,125,255,0.5)';
  ctx.lineWidth = 2;
  for (var li = 0; li < 5; li++) {
    var offset = (race.time * race.speed * 60 + li * 80) % 80;
    ctx.beginPath();
    ctx.moveTo(-20, groundY + 15 + li * 12);
    ctx.lineTo(cv.width + 20, groundY + 15 + li * 12);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(-offset, groundY + 15);
    ctx.lineTo(cv.width - offset, groundY + 80);
    ctx.stroke();
  }

  // Fisica do jogador
  race.vy += 0.72;
  race.y += race.vy;
  if (race.y >= groundY - race.h) {
    race.y = groundY - race.h;
    race.vy = 0;
    race.onGround = true;
  }

  // Spawn de obstaculos
  race.lastObs += dt;
  if (race.lastObs > 1.4 + Math.random() * 0.8) {
    race.lastObs = 0;
    var oh = 30 + Math.random() * 50;
    race.obs.push({ x: cv.width + 20, y: groundY - oh, w: 25 + Math.random() * 20, h: oh, color: ['#ff4fa3','#9b2eff','#c200a0'][Math.floor(Math.random()*3)] });
  }
  // Spawn moedas
  race.lastCoin += dt;
  if (race.lastCoin > 1.2) {
    race.lastCoin = 0;
    race.coins.push({ x: cv.width + 10, y: groundY - 80 - Math.random() * 80, r: 12, phase: 0 });
  }

  // Obstaculos
  for (var oi = race.obs.length - 1; oi >= 0; oi--) {
    var o = race.obs[oi];
    o.x -= race.speed;
    if (o.x + o.w < 0) { race.obs.splice(oi, 1); race.score += 1; continue; }
    // Colisao
    if (race.x < o.x + o.w && race.x + race.w > o.x && race.y < o.y + o.h && race.y + race.h > o.y) {
      race.obs.splice(oi, 1);
      race.lives--;
      sndHit();
      $('race-lives').textContent = race.lives;
      if (race.lives <= 0) { endRace(); return; }
      continue;
    }
    ctx.fillStyle = o.color;
    ctx.fillRect(o.x, o.y, o.w, o.h);
    ctx.fillStyle = 'rgba(255,255,255,0.3)';
    ctx.fillRect(o.x, o.y, o.w, 4);
  }

  // Moedas
  for (var ci = race.coins.length - 1; ci >= 0; ci--) {
    var co = race.coins[ci];
    co.x -= race.speed;
    co.phase += 0.15;
    if (co.x + co.r < 0) { race.coins.splice(ci, 1); continue; }
    // Colisao
    var dx = (race.x + race.w/2) - co.x;
    var dy = (race.y + race.h/2) - co.y;
    if (dx*dx + dy*dy < (co.r + race.w/2) * (co.r + race.w/2)) {
      race.coins.splice(ci, 1);
      race.score += 10;
      sndCoin();
      $('race-score').textContent = race.score;
      continue;
    }
    ctx.save();
    ctx.translate(co.x, co.y);
    ctx.scale(Math.cos(co.phase), 1);
    ctx.fillStyle = '#ffd700';
    ctx.beginPath(); ctx.arc(0, 0, co.r, 0, Math.PI*2); ctx.fill();
    ctx.fillStyle = '#ffeb70';
    ctx.beginPath(); ctx.arc(0, 0, co.r * 0.6, 0, Math.PI*2); ctx.fill();
    ctx.restore();
  }

  // Desenhar jogador (princesa estilizada simplificada)
  drawRacePlayer(ctx, race.x, race.y, race.w, race.h, state.currentChar);

  // Incrementa velocidade
  race.speed = 6 + Math.min(6, race.time * 0.05);
  race.score += dt * 2 | 0;
  $('race-score').textContent = race.score;

  race.anim = requestAnimationFrame(raceLoop);
}
function drawRacePlayer(ctx, x, y, w, h, ch) {
  // Pernas
  ctx.fillStyle = ch.skin;
  ctx.fillRect(x + 5, y + h - 15, 12, 15);
  ctx.fillRect(x + w - 17, y + h - 15, 12, 15);
  // Sapatos
  ctx.fillStyle = ch.shoe;
  ctx.fillRect(x + 3, y + h - 5, 16, 5);
  ctx.fillRect(x + w - 19, y + h - 5, 16, 5);
  // Vestido
ctx.fillStyle = ch.outfit;
  ctx.beginPath();
  ctx.moveTo(x + 4, y + 25);
  ctx.lineTo(x + w - 4, y + 25);
  ctx.lineTo(x + w + 4, y + h - 15);
  ctx.lineTo(x - 4, y + h - 15);
  ctx.closePath(); ctx.fill();
  // Torso
  ctx.fillRect(x + 6, y + 18, w - 12, 10);
  // Cabeca
  ctx.fillStyle = ch.skin;
  ctx.beginPath(); ctx.arc(x + w/2, y + 10, 10, 0, Math.PI*2); ctx.fill();
  // Cabelo
  ctx.fillStyle = ch.hair;
  ctx.beginPath(); ctx.arc(x + w/2, y + 7, 11, Math.PI, Math.PI*2); ctx.fill();
  ctx.fillRect(x + w/2 - 11, y + 6, 22, 8);
  // Coroa
  ctx.fillStyle = '#ffd700';
  ctx.fillRect(x + w/2 - 6, y - 2, 12, 4);
  ctx.beginPath();
  ctx.moveTo(x + w/2 - 6, y - 2);
  ctx.lineTo(x + w/2 - 3, y - 6);
  ctx.lineTo(x + w/2, y - 2);
  ctx.lineTo(x + w/2 + 3, y - 6);
  ctx.lineTo(x + w/2 + 6, y - 2);
  ctx.fill();
  // Olhos
  ctx.fillStyle = '#2a1b4a';
  ctx.fillRect(x + w/2 - 4, y + 9, 2, 2);
  ctx.fillRect(x + w/2 + 2, y + 9, 2, 2);
}
function endRace() {
  if (!race) return;
  race.running = false;
  sndGameOver();
  $('race-final-score').textContent = race.score;
  $('race-gameover').classList.remove('hidden');
}
function stopRace() {
  if (!race) return;
  race.running = false;
  if (race.anim) cancelAnimationFrame(race.anim);
  if (race._keyHandler) window.removeEventListener('keydown', race._keyHandler);
  var cv = race.cv;
  if (cv) {
    if (race._clickHandler) cv.removeEventListener('click', race._clickHandler);
    if (race._touchHandler) cv.removeEventListener('touchstart', race._touchHandler);
  }
  var jb = $('race-jump-btn');
  if (jb) {
    if (race._touchHandler) jb.removeEventListener('touchstart', race._touchHandler);
    if (race._clickHandler) jb.removeEventListener('click', race._clickHandler);
  }
  race = null;
}

// ============ MEMORY ============
var memory = null;
var MEMORY_ICONS = ['🏰','👑','⭐','🦄','🦋','🌸','💎','🌈','🌙','🎁','🎂','🎈'];

function startMemory(pairs) {
  stopMemory();
  var grid = $('memory-grid');
  grid.innerHTML = '';
  var cols = pairs <= 4 ? 4 : (pairs <= 8 ? 4 : 6);
  grid.style.gridTemplateColumns = 'repeat(' + cols + ', 1fr)';
  var icons = MEMORY_ICONS.slice(0, pairs);
  var deck = icons.concat(icons);
  // Shuffle
  for (var i = deck.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var tmp = deck[i]; deck[i] = deck[j]; deck[j] = tmp;
  }
  memory = {
    deck: deck, flipped: [], matched: 0, total: pairs, moves: 0,
    time: 0, timer: null, lock: false
  };
  $('mem-total').textContent = pairs;
  $('mem-pairs').textContent = 0;
  $('mem-moves').textContent = 0;
  $('mem-time').textContent = '0s';

  for (var k = 0; k < deck.length; k++) {
    (function(idx, icon){
      var card = document.createElement('div');
      card.className = 'mem-card';
      card.dataset.idx = idx;
      card.dataset.icon = icon;
      card.innerHTML = '<div class="mem-face mem-back">🏰</div><div class="mem-face mem-front">' + icon + '</div>';
      card.addEventListener('click', function(){ flipCard(card); });
      grid.appendChild(card);
    })(k, deck[k]);
  }

  memory.timer = setInterval(function(){
    if (memory) {
      memory.time++;
      $('mem-time').textContent = memory.time + 's';
    }
  }, 1000);
}
function flipCard(card) {
  if (!memory || memory.lock) return;
  if (card.classList.contains('flipped') || card.classList.contains('matched')) return;
  sndCardFlip();
  card.classList.add('flipped');
  memory.flipped.push(card);
  if (memory.flipped.length === 2) {
    memory.moves++;
    $('mem-moves').textContent = memory.moves;
    var a = memory.flipped[0], b = memory.flipped[1];
    if (a.dataset.icon === b.dataset.icon) {
      setTimeout(function(){
        a.classList.add('matched'); b.classList.add('matched');
        memory.matched++;
        $('mem-pairs').textContent = memory.matched;
        memory.flipped = [];
        sndMatch();
        if (memory.matched === memory.total) {
          sndSuccess();
          setTimeout(function(){
            toast('Parabens! ' + memory.moves + ' jogadas em ' + memory.time + 's');
          }, 300);
        }
      }, 300);
    } else {
      memory.lock = true;
      setTimeout(function(){
        a.classList.remove('flipped'); b.classList.remove('flipped');
        memory.flipped = [];
        memory.lock = false;
      }, 800);
    }
  }
}
function stopMemory() {
  if (memory && memory.timer) clearInterval(memory.timer);
  memory = null;
}

// ============ SNAKE ============
var snake = null;
function startSnake() {
  stopSnake();
  var cv = $('snake-canvas');
  cv.width = window.innerWidth;
  cv.height = window.innerHeight;
  var ctx = cv.getContext('2d');
  var cellSize = Math.min(cv.width, cv.height) / 22;
  var cols = Math.floor(cv.width / cellSize);
  var rows = Math.floor(cv.height / cellSize);
  snake = {
    ctx: ctx, cv: cv, cell: cellSize, cols: cols, rows: rows,
    body: [{x: Math.floor(cols/2), y: Math.floor(rows/2)}],
    dir: {x:1, y:0}, nextDir: {x:1, y:0},
    food: null, score: 0, running: true,
    stepT: 0, stepInterval: 0.13,
    lastT: performance.now(), anim: null
  };
  placeFood();
  $('snake-score').textContent = 0;
  $('snake-start').classList.add('hidden');
  $('snake-gameover').classList.add('hidden');

  snake._keyHandler = function(e){
    var d = snake.dir;
    if ((e.key === 'ArrowUp' || e.key === 'w' || e.key === 'W') && d.y === 0) snake.nextDir = {x:0, y:-1};
    else if ((e.key === 'ArrowDown' || e.key === 's' || e.key === 'S') && d.y === 0) snake.nextDir = {x:0, y:1};
    else if ((e.key === 'ArrowLeft' || e.key === 'a' || e.key === 'A') && d.x === 0) snake.nextDir = {x:-1, y:0};
    else if ((e.key === 'ArrowRight' || e.key === 'd' || e.key === 'D') && d.x === 0) snake.nextDir = {x:1, y:0};
  };
  window.addEventListener('keydown', snake._keyHandler);
  snakeLoop();
}
function placeFood() {
  if (!snake) return;
  var ok = false;
  while (!ok) {
    var fx = Math.floor(Math.random() * snake.cols);
    var fy = Math.floor(Math.random() * snake.rows);
    ok = true;
    for (var i = 0; i < snake.body.length; i++) {
      if (snake.body[i].x === fx && snake.body[i].y === fy) { ok = false; break; }
    }
    if (ok) snake.food = {x: fx, y: fy};
  }
}
function snakeLoop() {
  if (!snake || !snake.running) return;
  var now = performance.now();
  var dt = (now - snake.lastT) / 1000;
  if (dt > 0.1) dt = 0.1;
  snake.lastT = now;
  snake.stepT += dt;

  var ctx = snake.ctx, cv = snake.cv, c = snake.cell;

  // Fundo com grade
  ctx.fillStyle = '#0a0318';
  ctx.fillRect(0, 0, cv.width, cv.height);
  ctx.strokeStyle = 'rgba(155,46,255,0.1)';
  ctx.lineWidth = 1;
  for (var gx = 0; gx <= snake.cols; gx++) {
    ctx.beginPath();
    ctx.moveTo(gx * c, 0);
    ctx.lineTo(gx * c, snake.rows * c);
    ctx.stroke();
  }
  for (var gy = 0; gy <= snake.rows; gy++) {
    ctx.beginPath();
    ctx.moveTo(0, gy * c);
    ctx.lineTo(snake.cols * c, gy * c);
    ctx.stroke();
  }

  // Step
  if (snake.stepT >= snake.stepInterval) {
    snake.stepT = 0;
    snake.dir = snake.nextDir;
    var head = snake.body[0];
    var nx = head.x + snake.dir.x;
    var ny = head.y + snake.dir.y;
    // Wrap
    if (nx < 0) nx = snake.cols - 1;
    if (nx >= snake.cols) nx = 0;
    if (ny < 0) ny = snake.rows - 1;
    if (ny >= snake.rows) ny = 0;
    // Self collision
    for (var si = 0; si < snake.body.length; si++) {
      if (snake.body[si].x === nx && snake.body[si].y === ny) {
        endSnake(); return;
      }
    }
    snake.body.unshift({x: nx, y: ny});
    if (snake.food && nx === snake.food.x && ny === snake.food.y) {
      snake.score += 10;
      sndEat();
      $('snake-score').textContent = snake.score;
      placeFood();
    } else {
      snake.body.pop();
    }
  }

  // Desenhar comida (estrela dourada)
  if (snake.food) {
    var fx = snake.food.x * c + c/2;
    var fy = snake.food.y * c + c/2;
    var pulse = 1 + Math.sin(performance.now() / 200) * 0.15;
    ctx.save();
    ctx.translate(fx, fy);
    ctx.fillStyle = '#ffd700';
    ctx.shadowColor = '#ffd700';
    ctx.shadowBlur = 15;
    drawStar(ctx, 0, 0, 5, c*0.4*pulse, c*0.18*pulse);
    ctx.restore();
    ctx.shadowBlur = 0;
  }

  // Desenhar cobra
  for (var i = snake.body.length - 1; i >= 0; i--) {
    var seg = snake.body[i];
    var sx = seg.x * c;
    var sy = seg.y * c;
    if (i === 0) {
      // Cabeca
      var grad = ctx.createRadialGradient(sx + c/2, sy + c/2, 0, sx + c/2, sy + c/2, c/2);
      grad.addColorStop(0, '#ff8fd1');
      grad.addColorStop(1, '#ff4fa3');
      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.roundRect ? ctx.roundRect(sx+1, sy+1, c-2, c-2, 6) : ctx.rect(sx+1, sy+1, c-2, c-2);
      ctx.fill();
      // Olhos
      ctx.fillStyle = '#fff';
      var eox = snake.dir.x * c * 0.15;
      var eoy = snake.dir.y * c * 0.15;
      ctx.beginPath(); ctx.arc(sx + c*0.35 + eox, sy + c*0.35 + eoy, c*0.1, 0, Math.PI*2); ctx.fill();
      ctx.beginPath(); ctx.arc(sx + c*0.65 + eox, sy + c*0.35 + eoy, c*0.1, 0, Math.PI*2); ctx.fill();
      ctx.fillStyle = '#000';
      ctx.beginPath(); ctx.arc(sx + c*0.35 + eox, sy + c*0.35 + eoy, c*0.05, 0, Math.PI*2); ctx.fill();
      ctx.beginPath(); ctx.arc(sx + c*0.65 + eox, sy + c*0.35 + eoy, c*0.05, 0, Math.PI*2); ctx.fill();
    } else {
      var alpha = 1 - (i / snake.body.length) * 0.5;
      ctx.fillStyle = 'rgba(155,46,255,' + alpha + ')';
      ctx.beginPath();
      ctx.roundRect ? ctx.roundRect(sx+2, sy+2, c-4, c-4, 4) : ctx.rect(sx+2, sy+2, c-4, c-4);
      ctx.fill();
      ctx.strokeStyle = 'rgba(199,125,255,0.6)';
      ctx.lineWidth = 1;
      ctx.stroke();
    }
  }

  snake.anim = requestAnimationFrame(snakeLoop);
}
function drawStar(ctx, cx, cy, n, outer, inner) {
  ctx.beginPath();
  for (var i = 0; i < n * 2; i++) {
    var r = i % 2 === 0 ? outer : inner;
    var a = i * Math.PI / n - Math.PI / 2;
    var x = cx + Math.cos(a) * r;
    var y = cy + Math.sin(a) * r;
    if (i === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
  }
  ctx.closePath();
  ctx.fill();
}
function endSnake() {
  if (!snake) return;
  snake.running = false;
  sndGameOver();
  if (snake.score > state.bestSnake) state.bestSnake = snake.score;
  $('snake-final-score').textContent = snake.score;
  $('snake-best').textContent = state.bestSnake;
  $('snake-gameover').classList.remove('hidden');
}
function stopSnake() {
  if (!snake) return;
  snake.running = false;
  if (snake.anim) cancelAnimationFrame(snake.anim);
  if (snake._keyHandler) window.removeEventListener('keydown', snake._keyHandler);
  snake = null;
}

// ============ QUIZ ============
var quiz = null;
function startQuiz() {
  var bank = QUIZ_BANK[LANG].slice();
  // Embaralha
  for (var i = bank.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var tmp = bank[i]; bank[i] = bank[j]; bank[j] = tmp;
  }
  var qCount = state.quizDiff === 'easy' ? 5 : (state.quizDiff === 'medium' ? 7 : 8);
  var mult = state.quizDiff === 'easy' ? 10 : (state.quizDiff === 'medium' ? 15 : 20);
  quiz = {
    questions: bank.slice(0, qCount),
    idx: 0, score: 0, correct: 0, mult: mult
  };
  $('quiz-total').textContent = qCount;
  $('quiz-start').classList.add('hidden');
  $('quiz-end').classList.add('hidden');
  $('quiz-play').classList.remove('hidden');
  renderQuestion();
}
function renderQuestion() {
  var q = quiz.questions[quiz.idx];
  $('quiz-question').textContent = q.q;
  $('quiz-count').textContent = (quiz.idx + 1) + '/' + quiz.questions.length;
  $('quiz-score').textContent = quiz.score;
  $('quiz-progress-fill').style.width = ((quiz.idx) / quiz.questions.length * 100) + '%';
  var optsC = $('quiz-options');
  optsC.innerHTML = '';
  $('quiz-exp').classList.add('hidden');
  $('btn-quiz-next').classList.add('hidden');
  for (var i = 0; i < q.opts.length; i++) {
    (function(idx){
      var b = document.createElement('button');
      b.className = 'quiz-opt';
      b.textContent = q.opts[idx];
      b.addEventListener('click', function(){ answerQuiz(idx, b); });
      optsC.appendChild(b);
    })(i);
  }
}
function answerQuiz(idx, btn) {
  var q = quiz.questions[quiz.idx];
  var opts = $('quiz-options').querySelectorAll('.quiz-opt');
  for (var i = 0; i < opts.length; i++) opts[i].disabled = true;
  if (idx === q.a) {
    btn.classList.add('correct');
    quiz.score += quiz.mult;
    quiz.correct++;
    sndCorrect();
  } else {
    btn.classList.add('wrong');
    opts[q.a].classList.add('correct');
    sndWrong();
  }
  $('quiz-score').textContent = quiz.score;
  $('quiz-exp').textContent = q.exp;
  $('quiz-exp').classList.remove('hidden');
  $('btn-quiz-next').classList.remove('hidden');
  $('quiz-progress-fill').style.width = ((quiz.idx + 1) / quiz.questions.length * 100) + '%';
}
function nextQuiz() {
  quiz.idx++;
  if (quiz.idx >= quiz.questions.length) {
    endQuiz();
    return;
  }
  renderQuestion();
}
function endQuiz() {
  $('quiz-play').classList.add('hidden');
  $('quiz-end').classList.remove('hidden');
  var pct = quiz.correct / quiz.questions.length;
  var medal;
  if (pct >= 0.9) medal = '🥇';
  else if (pct >= 0.6) medal = '🥈';
  else medal = '🥉';
  $('quiz-medal').textContent = medal;
  $('quiz-final-score').textContent = quiz.score;
  $('quiz-correct').textContent = quiz.correct;
  $('quiz-total').textContent = quiz.questions.length;
  sndSuccess();
}

// ============ 3D EXPLORE (Three.js) ============
var three = null;
function startExplore() {
  stopExplore();
  var container = $('three-container');
  var w = container.clientWidth;
  var h = container.clientHeight;

  var scene = new THREE.Scene();
  scene.background = new THREE.Color(0x1a0838);
  scene.fog = new THREE.Fog(0x1a0838, 20, 60);

  var camera = new THREE.PerspectiveCamera(60, w/h, 0.1, 200);
  var renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(w, h);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  container.appendChild(renderer.domElement);

  // Luzes
  var ambient = new THREE.AmbientLight(0x9966cc, 0.6);
  scene.add(ambient);
  var dir = new THREE.DirectionalLight(0xffddee, 0.8);
  dir.position.set(10, 20, 10);
  dir.castShadow = true;
  dir.shadow.mapSize.width = 1024;
  dir.shadow.mapSize.height = 1024;
  dir.shadow.camera.left = -30;
  dir.shadow.camera.right = 30;
  dir.shadow.camera.top = 30;
  dir.shadow.camera.bottom = -30;
  scene.add(dir);
  var pinkLight = new THREE.PointLight(0xff4fa3, 1.2, 30);
  pinkLight.position.set(0, 8, 0);
  scene.add(pinkLight);
  var purpLight = new THREE.PointLight(0x9b2eff, 1, 25);
  purpLight.position.set(10, 5, -10);
  scene.add(purpLight);

  // Chao
  var groundGeo = new THREE.PlaneGeometry(60, 60);
  var groundMat = new THREE.MeshLambertMaterial({ color: 0x2a7a3a });
  var ground = new THREE.Mesh(groundGeo, groundMat);
  ground.rotation.x = -Math.PI / 2;
  ground.receiveShadow = true;
  scene.add(ground);

  // Borda escura
  var borderGeo = new THREE.RingGeometry(22, 30, 32);
  var borderMat = new THREE.MeshLambertMaterial({ color: 0x1f5c2a, side: THREE.DoubleSide });
  var border = new THREE.Mesh(borderGeo, borderMat);
  border.rotation.x = -Math.PI / 2;
  border.position.y = 0.01;
  scene.add(border);
// Ceu com estrelas
  var starsGeo = new THREE.BufferGeometry();
  var starPos = [];
  for (var si = 0; si < 200; si++) {
    var theta = Math.random() * Math.PI * 2;
    var phi = Math.acos(1 - Math.random() * 1.5);
    var r = 80;
    starPos.push(r * Math.sin(phi) * Math.cos(theta));
    starPos.push(r * Math.cos(phi));
    starPos.push(r * Math.sin(phi) * Math.sin(theta));
  }
  starsGeo.setAttribute('position', new THREE.Float32BufferAttribute(starPos, 3));
  var starsMat = new THREE.PointsMaterial({ color: 0xffffff, size: 0.5, transparent: true });
  var starsPoints = new THREE.Points(starsGeo, starsMat);
  scene.add(starsPoints);

  // Lua
  var moonGeo = new THREE.SphereGeometry(2, 16, 16);
  var moonMat = new THREE.MeshBasicMaterial({ color: 0xfff8d6 });
  var moon = new THREE.Mesh(moonGeo, moonMat);
  moon.position.set(20, 25, -20);
  scene.add(moon);

  // Castelo
  var castle = new THREE.Group();
  var cBody = new THREE.Mesh(
    new THREE.BoxGeometry(8, 6, 6),
    new THREE.MeshLambertMaterial({ color: 0xe0c8ff })
  );
  cBody.position.y = 3;
  cBody.castShadow = true;
  cBody.receiveShadow = true;
  castle.add(cBody);
  // 4 torres
  var towerPositions = [
    { x: -4, z: -3 }, { x: 4, z: -3 }, { x: -4, z: 3 }, { x: 4, z: 3 }
  ];
  for (var ti = 0; ti < towerPositions.length; ti++) {
    var tower = new THREE.Mesh(
      new THREE.CylinderGeometry(1.2, 1.2, 8, 12),
      new THREE.MeshLambertMaterial({ color: 0xefd9ff })
    );
    tower.position.x = towerPositions[ti].x;
    tower.position.z = towerPositions[ti].z;
    tower.position.y = 4;
    tower.castShadow = true;
    castle.add(tower);
    var cone = new THREE.Mesh(
      new THREE.ConeGeometry(1.5, 2, 12),
      new THREE.MeshLambertMaterial({ color: 0x8a2be2 })
    );
    cone.position.x = towerPositions[ti].x;
    cone.position.z = towerPositions[ti].z;
    cone.position.y = 9;
    castle.add(cone);
    // Bandeira
    var flag = new THREE.Mesh(
      new THREE.PlaneGeometry(0.8, 0.5),
      new THREE.MeshBasicMaterial({ color: 0xff4fa3, side: THREE.DoubleSide })
    );
    flag.position.x = towerPositions[ti].x + 0.5;
    flag.position.z = towerPositions[ti].z;
    flag.position.y = 10.5;
    castle.add(flag);
  }
  // Torre central
  var centralT = new THREE.Mesh(
    new THREE.BoxGeometry(3, 8, 3),
    new THREE.MeshLambertMaterial({ color: 0xf5e3ff })
  );
  centralT.position.y = 4;
  centralT.castShadow = true;
  castle.add(centralT);
  var centralCone = new THREE.Mesh(
    new THREE.ConeGeometry(2.2, 3, 12),
    new THREE.MeshLambertMaterial({ color: 0x8a2be2 })
  );
  centralCone.position.y = 9.5;
  castle.add(centralCone);
  // Porta
  var door = new THREE.Mesh(
    new THREE.BoxGeometry(1.5, 2.5, 0.2),
    new THREE.MeshLambertMaterial({ color: 0x5a2b8c })
  );
  door.position.set(0, 1.25, 3.1);
  castle.add(door);
  // Janelas iluminadas
  var windowPositions = [
    { x: -2, y: 3, z: 3.05 }, { x: 2, y: 3, z: 3.05 },
    { x: -3.05, y: 3, z: -1, ry: Math.PI/2 }, { x: 3.05, y: 3, z: 1, ry: Math.PI/2 }
  ];
  for (var wi = 0; wi < windowPositions.length; wi++) {
    var wp = windowPositions[wi];
    var win = new THREE.Mesh(
      new THREE.PlaneGeometry(0.6, 1),
      new THREE.MeshBasicMaterial({ color: 0xffe066 })
    );
    win.position.set(wp.x, wp.y, wp.z);
    if (wp.ry) win.rotation.y = wp.ry;
    castle.add(win);
  }
  castle.position.z = -5;
  scene.add(castle);

  // Arvores
  var trees = [];
  var treePositions = [
    { x: -12, z: 8 }, { x: 12, z: 8 }, { x: -15, z: -5 }, { x: 15, z: -5 },
    { x: -8, z: 14 }, { x: 8, z: 14 }, { x: 18, z: 12 }, { x: -18, z: 12 }
  ];
  for (var tp = 0; tp < treePositions.length; tp++) {
    var treeGroup = new THREE.Group();
    var trunk = new THREE.Mesh(
      new THREE.CylinderGeometry(0.3, 0.4, 2, 8),
      new THREE.MeshLambertMaterial({ color: 0x6b3410 })
    );
    trunk.position.y = 1;
    trunk.castShadow = true;
    treeGroup.add(trunk);
    var leaves = new THREE.Mesh(
      new THREE.SphereGeometry(1.2, 10, 10),
      new THREE.MeshLambertMaterial({ color: 0x2d8a3e })
    );
    leaves.position.y = 2.5;
    leaves.castShadow = true;
    treeGroup.add(leaves);
    // Flores rosas
    for (var fi = 0; fi < 8; fi++) {
      var flower = new THREE.Mesh(
        new THREE.SphereGeometry(0.15, 6, 6),
        new THREE.MeshBasicMaterial({ color: 0xff4fa3 })
      );
      var fa = Math.random() * Math.PI * 2;
      var fh = Math.random() * Math.PI;
      flower.position.x = Math.sin(fh) * Math.cos(fa) * 1.1;
      flower.position.y = 2.5 + Math.cos(fh) * 1.1;
      flower.position.z = Math.sin(fh) * Math.sin(fa) * 1.1;
      treeGroup.add(flower);
    }
    treeGroup.position.set(treePositions[tp].x, 0, treePositions[tp].z);
    scene.add(treeGroup);
    trees.push({ group: treeGroup, x: treePositions[tp].x, z: treePositions[tp].z });
  }

  // Flores decorativas
  for (var fl = 0; fl < 30; fl++) {
    var fcol = [0xff4fa3, 0xffd700, 0xc77dff, 0x00e5ff][Math.floor(Math.random()*4)];
    var f = new THREE.Mesh(
      new THREE.SphereGeometry(0.2, 6, 6),
      new THREE.MeshBasicMaterial({ color: fcol })
    );
    f.position.x = (Math.random() - 0.5) * 40;
    f.position.z = (Math.random() - 0.5) * 40;
    f.position.y = 0.2;
    scene.add(f);
  }

  // Caminho de pedra
  for (var pt = 0; pt < 6; pt++) {
    var stone = new THREE.Mesh(
      new THREE.CylinderGeometry(0.7, 0.7, 0.1, 8),
      new THREE.MeshLambertMaterial({ color: 0x9a9a9a })
    );
    stone.position.set(0, 0.05, 2 - pt * 1.5);
    scene.add(stone);
  }

  // Unicornio
  var unicorn = buildUnicorn();
  unicorn.position.set(10, 0, 10);
  scene.add(unicorn);

  // Jogador
  var player = buildPlayer(state.currentChar);
  scene.add(player);

  // Camera
  camera.position.set(0, 8, 12);
  camera.lookAt(0, 1, 0);
  var camTarget3d = new THREE.Vector3(0, 1, 0);
  var camAngle = 0;
  var camDist = 8;
  var camHeight = 5;

  three = {
    scene: scene, camera: camera, renderer: renderer, container: container,
    player: player, unicorn: unicorn, castle: castle, trees: trees,
    camAngle: camAngle, camDist: camDist, camHeight: camHeight,
    camTarget3d: camTarget3d,
    keys: {}, running: true, anim: null, lastT: performance.now(),
    interactBubble: $('interact-bubble'),
    pinkLight: pinkLight,
    unicornAngle: 0, unicornCenter: { x: 10, z: 10 }, unicornRadius: 4,
    playerVel: { x: 0, z: 0 }, playerSpeed: 0,
    walkPhase: 0, idlePhase: 0,
    lastInteract: null, bubbleT: 0,
    dpadDir: { up:false, down:false, left:false, right:false },
    mouseDown: false, lastX: 0,
    onResize: null
  };

  // Handlers
  three._keyDown = function(e){
    if (!three) return;
    if (e.key === 'ArrowUp' || e.key === 'w' || e.key === 'W') three.keys.up = true;
    else if (e.key === 'ArrowDown' || e.key === 's' || e.key === 'S') three.keys.down = true;
    else if (e.key === 'ArrowLeft' || e.key === 'a' || e.key === 'A') three.keys.left = true;
    else if (e.key === 'ArrowRight' || e.key === 'd' || e.key === 'D') three.keys.right = true;
  };
  three._keyUp = function(e){
    if (!three) return;
    if (e.key === 'ArrowUp' || e.key === 'w' || e.key === 'W') three.keys.up = false;
    else if (e.key === 'ArrowDown' || e.key === 's' || e.key === 'S') three.keys.down = false;
    else if (e.key === 'ArrowLeft' || e.key === 'a' || e.key === 'A') three.keys.left = false;
    else if (e.key === 'ArrowRight' || e.key === 'd' || e.key === 'D') three.keys.right = false;
  };
  window.addEventListener('keydown', three._keyDown);
  window.addEventListener('keyup', three._keyUp);

  // Mouse/touch para camera
  three._mouseDown = function(e){ three.mouseDown = true; three.lastX = e.clientX; };
  three._mouseMove = function(e){
    if (!three || !three.mouseDown) return;
    var dx = e.clientX - three.lastX;
    three.camAngle += dx * 0.01;
    three.lastX = e.clientX;
  };
  three._mouseUp = function(){ if (three) three.mouseDown = false; };
  renderer.domElement.addEventListener('mousedown', three._mouseDown);
  window.addEventListener('mousemove', three._mouseMove);
  window.addEventListener('mouseup', three._mouseUp);

  three._touchStart = function(e){
    if (e.touches.length > 0) {
      three.mouseDown = true;
      three.lastX = e.touches[0].clientX;
    }
  };
  three._touchMove = function(e){
    if (!three || !three.mouseDown || e.touches.length === 0) return;
    var dx = e.touches[0].clientX - three.lastX;
    three.camAngle += dx * 0.01;
    three.lastX = e.touches[0].clientX;
  };
  three._touchEnd = function(){ if (three) three.mouseDown = false; };
  renderer.domElement.addEventListener('touchstart', three._touchStart, { passive: true });
  renderer.domElement.addEventListener('touchmove', three._touchMove, { passive: true });
  renderer.domElement.addEventListener('touchend', three._touchEnd);

  three.onResize = function(){
    if (!three) return;
    var w = container.clientWidth, h = container.clientHeight;
    three.camera.aspect = w / h;
    three.camera.updateProjectionMatrix();
    three.renderer.setSize(w, h);
  };
  window.addEventListener('resize', three.onResize);

  // D-pad handlers
  var dpadBtns = $('dpad-3d').querySelectorAll('.dpad-btn');
  three._dpadHandlers = [];
  for (var di = 0; di < dpadBtns.length; di++) {
    (function(btn){
      var dir = btn.dataset.dir;
      var start = function(e){ if (e) e.preventDefault(); if (three) three.dpadDir[dir] = true; };
      var end = function(e){ if (e) e.preventDefault(); if (three) three.dpadDir[dir] = false; };
      btn.addEventListener('touchstart', start, { passive: false });
      btn.addEventListener('touchend', end);
      btn.addEventListener('mousedown', start);
      btn.addEventListener('mouseup', end);
      btn.addEventListener('mouseleave', end);
      three._dpadHandlers.push({ btn: btn, start: start, end: end });
    })(dpadBtns[di]);
  }

  threeLoop();
}

function buildPlayer(char) {
  var g = new THREE.Group();
  // Cabeca
  var headMat = new THREE.MeshLambertMaterial({ color: hexToInt(char.skin) });
  var head = new THREE.Mesh(new THREE.BoxGeometry(0.7, 0.7, 0.7), headMat);
  head.position.y = 2;
  head.castShadow = true;
  g.add(head);
  g.userData.head = head;
  // Cabelo
  var hair = new THREE.Mesh(
    new THREE.BoxGeometry(0.9, 0.3, 0.9),
    new THREE.MeshLambertMaterial({ color: hexToInt(char.hair) })
  );
  hair.position.y = 2.35;
  g.add(hair);
  var hairBack = new THREE.Mesh(
    new THREE.BoxGeometry(0.75, 0.6, 0.25),
    new THREE.MeshLambertMaterial({ color: hexToInt(char.hair) })
  );
  hairBack.position.set(0, 2, -0.35);
  g.add(hairBack);
  // Olhos
  var eyeMat = new THREE.MeshBasicMaterial({ color: 0x2a1b4a });
  var eyeL = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.1, 0.05), eyeMat);
  eyeL.position.set(-0.15, 2.05, 0.36);
  g.add(eyeL);
  var eyeR = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.1, 0.05), eyeMat);
  eyeR.position.set(0.15, 2.05, 0.36);
  g.add(eyeR);
  // Coroa (5 pontas)
  var crownMat = new THREE.MeshBasicMaterial({ color: 0xffd700 });
  var crownBase = new THREE.Mesh(new THREE.BoxGeometry(0.8, 0.1, 0.8), crownMat);
  crownBase.position.y = 2.5;
  g.add(crownBase);
  for (var pi = 0; pi < 5; pi++) {
    var spike = new THREE.Mesh(new THREE.ConeGeometry(0.08, 0.2, 4), crownMat);
    var ang = (pi / 5) * Math.PI * 2;
    spike.position.set(Math.cos(ang) * 0.3, 2.65, Math.sin(ang) * 0.3);
    g.add(spike);
  }
  // Torso
  var torso = new THREE.Mesh(
    new THREE.BoxGeometry(0.8, 0.8, 0.5),
    new THREE.MeshLambertMaterial({ color: hexToInt(char.outfit) })
  );
  torso.position.y = 1.3;
  torso.castShadow = true;
  g.add(torso);
  // Saia
  var skirt = new THREE.Mesh(
    new THREE.ConeGeometry(0.7, 0.9, 8),
    new THREE.MeshLambertMaterial({ color: hexToInt(char.outfit) })
  );
  skirt.position.y = 0.6;
  skirt.castShadow = true;
  g.add(skirt);
  g.userData.skirt = skirt;
  // Bracos
  var armMat = new THREE.MeshLambertMaterial({ color: hexToInt(char.skin) });
  var armL = new THREE.Mesh(new THREE.BoxGeometry(0.2, 0.7, 0.2), armMat);
  armL.position.set(-0.5, 1.3, 0);
  g.add(armL);
  g.userData.armL = armL;
  var armR = new THREE.Mesh(new THREE.BoxGeometry(0.2, 0.7, 0.2), armMat);
  armR.position.set(0.5, 1.3, 0);
  g.add(armR);
  g.userData.armR = armR;
  // Pernas
  var legMat = new THREE.MeshLambertMaterial({ color: hexToInt(char.skin) });
  var legL = new THREE.Mesh(new THREE.BoxGeometry(0.22, 0.6, 0.22), legMat);
  legL.position.set(-0.2, 0.15, 0);
  g.add(legL);
  g.userData.legL = legL;
  var legR = new THREE.Mesh(new THREE.BoxGeometry(0.22, 0.6, 0.22), legMat);
  legR.position.set(0.2, 0.15, 0);
  g.add(legR);
  g.userData.legR = legR;
  // Sapatos
  var shoeMat = new THREE.MeshLambertMaterial({ color: hexToInt(char.shoe) });
  var shoeL = new THREE.Mesh(new THREE.BoxGeometry(0.26, 0.15, 0.35), shoeMat);
  shoeL.position.set(-0.2, -0.2, 0.05);
  g.add(shoeL);
  var shoeR = new THREE.Mesh(new THREE.BoxGeometry(0.26, 0.15, 0.35), shoeMat);
  shoeR.position.set(0.2, -0.2, 0.05);
  g.add(shoeR);
  return g;
}

function buildUnicorn() {
  var g = new THREE.Group();
  // Corpo
  var body = new THREE.Mesh(
    new THREE.BoxGeometry(1.2, 0.8, 2),
    new THREE.MeshLambertMaterial({ color: 0xffffff })
  );
  body.position.y = 1.2;
  body.castShadow = true;
  g.add(body);
  // Cabeca
  var head = new THREE.Mesh(
    new THREE.BoxGeometry(0.7, 0.7, 0.9),
    new THREE.MeshLambertMaterial({ color: 0xffffff })
  );
  head.position.set(0, 1.8, 1);
  g.add(head);
  // Chifre
  var horn = new THREE.Mesh(
    new THREE.ConeGeometry(0.1, 0.6, 8),
    new THREE.MeshBasicMaterial({ color: 0xffd700 })
  );
  horn.position.set(0, 2.4, 1);
  g.add(horn);
  // Crina
  var mane = new THREE.Mesh(
    new THREE.BoxGeometry(0.5, 0.4, 1.2),
    new THREE.MeshLambertMaterial({ color: 0xff4fa3 })
  );
  mane.position.set(0, 2, 0.3);
  g.add(mane);
  // Cauda
  var tail = new THREE.Mesh(
    new THREE.BoxGeometry(0.3, 0.8, 0.3),
    new THREE.MeshLambertMaterial({ color: 0xff4fa3 })
  );
  tail.position.set(0, 1.4, -1.1);
  g.add(tail);
  // Pernas
  var legCol = new THREE.MeshLambertMaterial({ color: 0xffffff });
  var legPos = [
    { x: -0.4, z: 0.7 }, { x: 0.4, z: 0.7 },
    { x: -0.4, z: -0.7 }, { x: 0.4, z: -0.7 }
  ];
  for (var li = 0; li < legPos.length; li++) {
    var leg = new THREE.Mesh(new THREE.BoxGeometry(0.25, 0.8, 0.25), legCol);
    leg.position.x = legPos[li].x;
    leg.position.z = legPos[li].z;
    leg.position.y = 0.4;
    leg.castShadow = true;
    g.add(leg);
  }
  return g;
}

function threeLoop() {
  if (!three || !three.running) return;
  var now = performance.now();
  var dt = (now - three.lastT) / 1000;
  if (dt > 0.1) dt = 0.1;
  three.lastT = now;

  // Input
  var fwd = 0, side = 0;
  if (three.keys.up || three.dpadDir.up) fwd = 1;
  if (three.keys.down || three.dpadDir.down) fwd = -1;
  if (three.keys.left || three.dpadDir.left) side = -1;
  if (three.keys.right || three.dpadDir.right) side = 1;

  // Move relativo a camera
  var mvx = 0, mvz = 0;
  if (fwd !== 0 || side !== 0) {
    var spd = 5 * dt;
    var ca = Math.cos(three.camAngle);
    var sa = Math.sin(three.camAngle);
    mvx = (side * ca - fwd * sa) * spd;
    mvz = (side * sa + fwd * ca) * spd;
  }

  var newX = three.player.position.x + mvx;
  var newZ = three.player.position.z + mvz;

  // Limites
  if (newX > 22) newX = 22;
  if (newX < -22) newX = -22;
  if (newZ > 22) newZ = 22;
  if (newZ < -22) newZ = -22;

  // Colisao com castelo (caixa aproximada)
  var cdx = newX - three.castle.position.x;
  var cdz = newZ - three.castle.position.z;
  if (Math.abs(cdx) < 5.5 && Math.abs(cdz) < 4) {
    // Empurrar para fora
    if (Math.abs(cdx / 5.5) > Math.abs(cdz / 4)) {
      newX = three.castle.position.x + Math.sign(cdx) * 5.5;
    } else {
      newZ = three.castle.position.z + Math.sign(cdz) * 4;
    }
  }
  // Colisao com arvores
  for (var tci = 0; tci < three.trees.length; tci++) {
    var tr = three.trees[tci];
    var tdx = newX - tr.x;
    var tdz = newZ - tr.z;
    var distSq = tdx*tdx + tdz*tdz;
    if (distSq < 1.5) {
      var d = Math.sqrt(distSq);
      newX = tr.x + (tdx / d) * 1.3;
      newZ = tr.z + (tdz / d) * 1.3;
    }
  }

  three.player.position.x = newX;
  three.player.position.z = newZ;

  // Rotacao do personagem
  var moving = (mvx !== 0 || mvz !== 0);
  if (moving) {
    three.player.rotation.y = Math.atan2(mvx, mvz);
    three.walkPhase += dt * 10;
    three.player.userData.legL.rotation.x = Math.sin(three.walkPhase) * 0.6;
    three.player.userData.legR.rotation.x = -Math.sin(three.walkPhase) * 0.6;
    three.player.userData.armL.rotation.x = -Math.sin(three.walkPhase) * 0.6;
    three.player.userData.armR.rotation.x = Math.sin(three.walkPhase) * 0.6;
    three.player.position.y = Math.abs(Math.sin(three.walkPhase)) * 0.08;
  } else {
    three.idlePhase += dt * 2;
    three.player.userData.legL.rotation.x *= 0.85;
    three.player.userData.legR.rotation.x *= 0.85;
    three.player.userData.armL.rotation.x = Math.sin(three.idlePhase) * 0.05;
    three.player.userData.armR.rotation.x = -Math.sin(three.idlePhase) * 0.05;
    three.player.userData.head.rotation.y = Math.sin(three.idlePhase * 0.5) * 0.1;
    three.player.position.y = 0;
  }
// Unicornio - movimento circular
  three.unicornAngle += dt * 0.5;
  three.unicorn.position.x = three.unicornCenter.x + Math.cos(three.unicornAngle) * three.unicornRadius;
  three.unicorn.position.z = three.unicornCenter.z + Math.sin(three.unicornAngle) * three.unicornRadius;
  three.unicorn.position.y = Math.sin(three.unicornAngle * 3) * 0.15;
  three.unicorn.rotation.y = three.unicornAngle + Math.PI / 2;

  // Luz rosa pulsante
  three.pinkLight.intensity = 1 + Math.sin(now / 500) * 0.4;

  // Camera third-person
  var camX = three.player.position.x - Math.sin(three.camAngle) * three.camDist;
  var camZ = three.player.position.z - Math.cos(three.camAngle) * three.camDist;
  three.camera.position.x += (camX - three.camera.position.x) * 0.1;
  three.camera.position.z += (camZ - three.camera.position.z) * 0.1;
  three.camera.position.y += ((three.player.position.y + three.camHeight) - three.camera.position.y) * 0.1;
  three.camTarget3d.set(three.player.position.x, three.player.position.y + 1, three.player.position.z);
  three.camera.lookAt(three.camTarget3d);

  // Interacoes
  var px = three.player.position.x;
  var pz = three.player.position.z;
  // Porta do castelo
  var doorX = three.castle.position.x;
  var doorZ = three.castle.position.z + 3.5;
  var dDoor = Math.sqrt((px - doorX)*(px - doorX) + (pz - doorZ)*(pz - doorZ));
  if (dDoor < 2) {
    showBubble(t('bubble_door'), 'door');
  } else {
    // Unicornio
    var ux = three.unicorn.position.x;
    var uz = three.unicorn.position.z;
    var dUni = Math.sqrt((px - ux)*(px - ux) + (pz - uz)*(pz - uz));
    if (dUni < 3) {
      showBubble(t('bubble_unicorn'), 'unicorn');
    } else {
      three.bubbleT += dt;
      if (three.bubbleT > 3.5 && three.interactBubble.style.display !== 'none') {
        three.interactBubble.style.display = 'none';
        three.lastInteract = null;
      }
    }
  }

  three.renderer.render(three.scene, three.camera);
  three.anim = requestAnimationFrame(threeLoop);
}

function showBubble(msg, key) {
  if (!three) return;
  if (three.lastInteract !== key) {
    three.interactBubble.textContent = msg;
    three.interactBubble.style.display = 'block';
    three.interactBubble.style.animation = 'none';
    void three.interactBubble.offsetWidth;
    three.interactBubble.style.animation = 'popIn 0.3s ease';
    three.lastInteract = key;
    three.bubbleT = 0;
  } else {
    three.bubbleT = 0;
  }
}

function stopExplore() {
  if (!three) return;
  three.running = false;
  if (three.anim) cancelAnimationFrame(three.anim);
  if (three._keyDown) window.removeEventListener('keydown', three._keyDown);
  if (three._keyUp) window.removeEventListener('keyup', three._keyUp);
  if (three._mouseMove) window.removeEventListener('mousemove', three._mouseMove);
  if (three._mouseUp) window.removeEventListener('mouseup', three._mouseUp);
  if (three.onResize) window.removeEventListener('resize', three.onResize);
  if (three._dpadHandlers) {
    for (var di = 0; di < three._dpadHandlers.length; di++) {
      var h = three._dpadHandlers[di];
      h.btn.removeEventListener('touchstart', h.start);
      h.btn.removeEventListener('touchend', h.end);
      h.btn.removeEventListener('mousedown', h.start);
      h.btn.removeEventListener('mouseup', h.end);
      h.btn.removeEventListener('mouseleave', h.end);
    }
  }
  if (three.renderer) {
    if (three._mouseDown) three.renderer.domElement.removeEventListener('mousedown', three._mouseDown);
    if (three._touchStart) three.renderer.domElement.removeEventListener('touchstart', three._touchStart);
    if (three._touchMove) three.renderer.domElement.removeEventListener('touchmove', three._touchMove);
    if (three._touchEnd) three.renderer.domElement.removeEventListener('touchend', three._touchEnd);
    three.renderer.dispose();
    if (three.renderer.domElement && three.renderer.domElement.parentNode) {
      three.renderer.domElement.parentNode.removeChild(three.renderer.domElement);
    }
  }
  if (three.interactBubble) three.interactBubble.style.display = 'none';
  three = null;
}

// ============ LANGUAGE SYSTEM ============
function applyLang() {
  var els = document.querySelectorAll('[data-i18n]');
  for (var i = 0; i < els.length; i++) {
    var key = els[i].dataset.i18n;
    els[i].textContent = t(key);
  }
  $('hud-label-date').textContent = t('lbl_date');
  $('hud-label-time').textContent = t('lbl_time');
  $('hud-label-princess').textContent = t('lbl_princess');
  $('hud-label-session').textContent = t('lbl_session');
}

// ============ INIT ============
window.addEventListener('DOMContentLoaded', function() {
  initBg();
  initCursorSparkles();

  // Loading
  var pct = 0;
  var loadInt = setInterval(function(){
    pct += 3 + Math.random() * 5;
    if (pct >= 100) {
      pct = 100;
      clearInterval(loadInt);
      setTimeout(function(){
        $('loading-screen').classList.add('hide');
        buildHome();
        buildSelect();
      }, 300);
    }
    $('load-fill').style.width = pct + '%';
    $('load-pct').textContent = Math.floor(pct) + '%';
  }, 80);

  updateHUD();
  setInterval(updateHUD, 1000);

  // HOME
  $('btn-enter').addEventListener('click', function(){
    sndClick();
    unlockAudio();
    if (state.musicOn) startMusic();
    showScreen('select');
  });
  $('btn-music').addEventListener('click', function(){
    sndClick();
    state.musicOn = !state.musicOn;
    $('music-state').textContent = state.musicOn ? 'ON' : 'OFF';
    if (state.musicOn) startMusic();
    else stopMusic();
  });

  // SELECT
  $('btn-back-home').addEventListener('click', function(){
    sndClick();
    showScreen('home');
  });

  // MENU
  var menuCards = document.querySelectorAll('.menu-card');
  for (var mc = 0; mc < menuCards.length; mc++) {
    (function(card){
      card.addEventListener('click', function(){
        sndClick();
        var game = card.dataset.game;
        if (game === 'explore') {
          showScreen('explore');
          setTimeout(startExplore, 100);
        } else if (game === 'avatar') {
          showScreen('avatar');
          buildAvatar();
        } else if (game === 'race') {
          showScreen('race');
        } else if (game === 'memory') {
          showScreen('memory');
          startMemory(state.memDiff);
        } else if (game === 'snake') {
          showScreen('snake');
        } else if (game === 'quiz') {
          showScreen('quiz');
          $('quiz-start').classList.remove('hidden');
          $('quiz-play').classList.add('hidden');
          $('quiz-end').classList.add('hidden');
        }
      });
    })(menuCards[mc]);
  }

  $('btn-change-char').addEventListener('click', function(){
    sndClick();
    buildSelect();
    showScreen('select');
  });

  // EXITS
  var exits = document.querySelectorAll('[data-exit]');
  for (var ex = 0; ex < exits.length; ex++) {
    (function(btn){
      btn.addEventListener('click', function(){
        sndClick();
        var target = btn.dataset.exit;
        if (target === 'explore') stopExplore();
        if (target === 'race') stopRace();
        if (target === 'memory') stopMemory();
        if (target === 'snake') stopSnake();
        showScreen('menu');
      });
    })(exits[ex]);
  }

  // AVATAR
  $('btn-save-look').addEventListener('click', saveLook);

  // RACE
  $('btn-race-start').addEventListener('click', function(){ sndClick(); startRace(); });
  $('btn-race-again').addEventListener('click', function(){ sndClick(); startRace(); });

  // MEMORY
  var diffBtns = $('mem-difficulty').querySelectorAll('.diff-btn');
  for (var db = 0; db < diffBtns.length; db++) {
    (function(btn){
      btn.addEventListener('click', function(){
        sndClick();
        for (var k = 0; k < diffBtns.length; k++) diffBtns[k].classList.remove('active');
        btn.classList.add('active');
        state.memDiff = parseInt(btn.dataset.diff, 10);
        startMemory(state.memDiff);
      });
    })(diffBtns[db]);
  }
  $('btn-mem-restart').addEventListener('click', function(){ sndClick(); startMemory(state.memDiff); });

  // SNAKE
  $('btn-snake-start').addEventListener('click', function(){ sndClick(); startSnake(); });
  $('btn-snake-again').addEventListener('click', function(){ sndClick(); startSnake(); });
  var snakeBtns = $('dpad-snake').querySelectorAll('.dpad-btn');
  for (var sb = 0; sb < snakeBtns.length; sb++) {
    (function(btn){
      var handler = function(e){
        if (e) e.preventDefault();
        if (!snake) return;
        var d = snake.dir;
        var dir = btn.dataset.sdir;
        if (dir === 'up' && d.y === 0) snake.nextDir = {x:0, y:-1};
        else if (dir === 'down' && d.y === 0) snake.nextDir = {x:0, y:1};
        else if (dir === 'left' && d.x === 0) snake.nextDir = {x:-1, y:0};
        else if (dir === 'right' && d.x === 0) snake.nextDir = {x:1, y:0};
      };
      btn.addEventListener('touchstart', handler, { passive: false });
      btn.addEventListener('click', handler);
    })(snakeBtns[sb]);
  }

  // QUIZ
  var qDiffBtns = document.querySelectorAll('[data-qdiff]');
  for (var qd = 0; qd < qDiffBtns.length; qd++) {
    (function(btn){
      btn.addEventListener('click', function(){
        sndClick();
        for (var k = 0; k < qDiffBtns.length; k++) qDiffBtns[k].classList.remove('active');
        btn.classList.add('active');
        state.quizDiff = btn.dataset.qdiff;
      });
    })(qDiffBtns[qd]);
  }
  $('btn-quiz-start').addEventListener('click', function(){ sndClick(); startQuiz(); });
  $('btn-quiz-next').addEventListener('click', function(){ sndClick(); nextQuiz(); });
  $('btn-quiz-restart').addEventListener('click', function(){ sndClick(); startQuiz(); });

  // LANG
  var langBtns = document.querySelectorAll('.lang-btn');
  for (var lb = 0; lb < langBtns.length; lb++) {
    (function(btn){
      btn.addEventListener('click', function(){
        sndClick();
        for (var k = 0; k < langBtns.length; k++) langBtns[k].classList.remove('active');
        btn.classList.add('active');
        LANG = btn.dataset.lang;
        applyLang();
        toast(LANG.toUpperCase() + ' ✓');
      });
    })(langBtns[lb]);
  }

  // Desbloqueio de audio no primeiro clique
  var firstClick = function(){
    unlockAudio();
    document.removeEventListener('click', firstClick);
    document.removeEventListener('touchstart', firstClick);
  };
  document.addEventListener('click', firstClick);
  document.addEventListener('touchstart', firstClick);
});