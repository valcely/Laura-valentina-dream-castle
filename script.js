// =============================================
//  DADOS DOS PERSONAGENS
//  Mapeados APENAS com as imagens disponíveis fornecidas.
// =============================================
const CHARACTERS = [
  { id: 'laura',     name: 'Laura',     job: 'Arquiteta',  emoji: '👑', img: 'images/IMG_6056.jpeg' },
  { id: 'valentina', name: 'Valentina', job: 'Cientista',  emoji: '🔬', img: 'images/IMG_6047.jpeg' },
  { id: 'giovanna',  name: 'Giovanna',  job: 'Médica',     emoji: '💊', img: 'images/IMG_6043.jpeg' },
  { id: 'valcely',   name: 'Valcely',   job: 'Estilista',  emoji: '✂️', img: 'images/IMG_6040.jpeg' },
  { id: 'lidiane',   name: 'Lidiane',   job: 'Biomédica',  emoji: '🧬', img: 'images/IMG_6038.jpeg' },
  { id: 'ayla',      name: 'Ayla',      job: 'Professora', emoji: '📚', img: 'images/IMG_6070.jpeg' },
  { id: 'vitoria',   name: 'Vitória',   job: 'Cantora',    emoji: '🎤', img: 'images/IMG_6037.jpeg' },
  { id: 'ana',       name: 'Ana',       job: 'Advogada',   emoji: '⚖️', img: 'images/IMG_6031.jpeg' },
  { id: 'isa',       name: 'Isa',       job: 'Fotógrafa',  emoji: '📸', img: 'images/IMG_6023.jpeg' },
  { id: 'aurora',    name: 'Aurora',    job: 'Chef',       emoji: '👩‍🍳', img: 'images/IMG_6036.jpeg' }
];

// =============================================
//  OUTFITS (Looks Mapeados)
// =============================================
const OUTFITS = [
  { img: 'images/IMG_6030.jpeg', label: 'Rosa Floral',  emoji: '👗' },
  { img: 'images/IMG_6022.jpeg', label: 'Brilhosa',     emoji: '✨' },
  { img: 'images/IMG_6033.jpeg', label: 'All Pink',     emoji: '💗' },
  { img: 'images/IMG_6034.jpeg', label: 'Tutu Rosa',    emoji: '🌸' },
  { img: 'images/IMG_6032.jpeg', label: 'Mini Rosa',    emoji: '💜' },
  { img: 'images/IMG_6069.jpeg', label: 'Roxo',         emoji: '🎀' },
  { img: 'images/IMG_6059.jpeg', label: 'Renda',        emoji: '🩵' },
  { img: 'images/IMG_6044.jpeg', label: 'Blazer',       emoji: '⚫' },
  { img: 'images/IMG_6031.jpeg', label: 'Preto Chique', emoji: '🤍' },
  { img: 'images/IMG_6043.jpeg', label: 'Branco Puro',  emoji: '🧸' }
];

// =============================================
//  MAQUIAGEM
// =============================================
const MAKEUPS = [
  { label: 'Rosa',     swatch: '#FF69B4' },
  { label: 'Vermelho', swatch: '#FF0040' },
  { label: 'Nude',     swatch: '#D2956A' },
  { label: 'Lilás',    swatch: '#C77DFF' },
  { label: 'Coral',    swatch: '#FF6B6B' },
  { label: 'Dourado',  swatch: '#FFD700' }
];

// =============================================
//  DECORAÇÃO E CORES
// =============================================
const DECO_ITEMS = ['🛋️','🖼️','🌸','⭐','🧸','💝','🌈','🎀','🕯️','🌺','🦋','💎','🪴','🎊','✨'];

const ROOM_BGS = [
  { c: 'linear-gradient(180deg,#FFB3C6 0%,#FFC8DD 60%,#F8A5C2 100%)', n: 'Rosa' },
  { c: 'linear-gradient(180deg,#B3D1FF 0%,#C8E6FF 60%,#A5C8F8 100%)', n: 'Azul' },
  { c: 'linear-gradient(180deg,#E0B3FF 0%,#ECC8FF 60%,#D8A5F8 100%)', n: 'Lilás' },
  { c: 'linear-gradient(180deg,#B3FFD1 0%,#C8FFE6 60%,#A5F8C8 100%)', n: 'Verde' },
  { c: 'linear-gradient(180deg,#FFF3B3 0%,#FFFAC8 60%,#F8F0A5 100%)', n: 'Amarelo' },
  { c: 'linear-gradient(180deg,#222 0%,#111 100%)',                    n: 'Dark' }
];

// =============================================
//  QUIZ & HISTÓRIA
// =============================================
const QUIZ_QS = [
  { q: 'Qual a cor mais associada à Barbie?',          opts: ['Azul','Verde','Rosa','Amarelo'],             ans: 2 },
  { q: 'O que é básico em qualquer look fashion?',     opts: ['Acessórios','Conforto','Cores vibrantes','Confiança'], ans: 3 },
  { q: 'Qual item faz qualquer look ficar mais chique?',opts: ['Tênis','Bolsa de luxo','Camiseta simples','Bermuda'], ans: 1 },
  { q: 'Em qual estação combinam roupas mais coloridas?',opts: ['Inverno','Outono','Verão','Primavera'],          ans: 2 },
  { q: 'O que é "total look"?',                        opts: ['Look todo de uma cor','Look todo preto','Mix de marcas','Roupa casual'], ans: 0 },
  { q: 'Qual tecido é sinônimo de elegância?',         opts: ['Malha','Seda','Algodão','Moleton'],                ans: 1 }
];

const STORY = [
  { scene: '🏰', text: '%nome% acorda no seu lindo castelo rosa. Um convite mágico chegou: o Baile das Estrelas começa em 1 hora! O que fazer?', choices: [{ t: '💄 Ir ao salão', n: 1 }, { t: '👗 Escolher o vestido', n: 2 }] },
  { scene: '💄', text: 'No salão, a maquiadora cria um look incrível. Mas você esqueceu o sapato!', choices: [{ t: '👠 Buscar sapato', n: 3 }, { t: '✨ Ir descalça', n: 4 }] },
  { scene: '👗', text: 'Você encontra vestidos perfeitos. Qual escolher?', choices: [{ t: '💗 Rosa', n: 3 }, { t: '💜 Lilás', n: 3 }] },
  { scene: '🌟', text: 'Você chega ao baile deslumbrante! Vitória precisa de ajuda!', choices: [{ t: '🤝 Ajudar a amiga', n: 5 }, { t: '💃 Aproveitar o baile', n: 6 }] },
  { scene: '✨', text: 'Você entra no baile descalça e vira sensação! Querem te fotografar!', choices: [{ t: '📸 Posar', n: 5 }, { t: '👠 Pedir sapato', n: 5 }] },
  { scene: '💖', text: 'Você ajuda sua amiga e juntas dançam a noite toda! Você ganha Melhor Look!', choices: [{ t: '🏆 Aceitar!', n: 7 }] },
  { scene: '💃', text: 'Você dança e vira o centro das atenções! O príncipe vem te convidar.', choices: [{ t: '💃 Dançar!', n: 7 }] },
  { scene: '🎊', text: 'Que noite incrível! %nome% viveu uma aventura inesquecível. 🌟', choices: [{ t: '🔄 Jogar de novo!', n: 0 }] }
];

// =============================================
//  ESTADO & INIT
// =============================================
let curChar = null; let runwayScore = 0; let runwayPos = 10;
let quizIdx = 0; let quizScore = 0; let quizLocked = false; let decoCount = 3;

window.addEventListener('DOMContentLoaded', () => {
  initStars(); buildCharsGrid(); buildBeautyGrid(); initDecoPanel(); initRunwayLights(); initHomeDoll();
});

function initHomeDoll() {
  const el = document.getElementById('home-doll');
  if (!el) return;
  const img = document.createElement('img');
  img.className = 'home-doll';
  img.src = 'images/IMG_6056.jpeg'; // Laura
  img.alt = '';
  img.onerror = () => { img.style.display = 'none'; el.style.display = 'flex'; };
  img.onload  = () => { el.style.display = 'none'; el.parentNode.insertBefore(img, el); };
}

function initStars() {
  const bg = document.getElementById('stars-bg');
  for (let i = 0; i < 40; i++) {
    const s = document.createElement('div');
    s.className = 'star-dot';
    const sz = Math.random() * 4 + 1;
    s.style.cssText = `width:${sz}px;height:${sz}px;top:${Math.random()*100}%;left:${Math.random()*100}%;opacity:${Math.random()*.6+.2};animation-delay:${Math.random()*4}s;animation-duration:${2+Math.random()*4}s;`;
    bg.appendChild(s);
  }
}

function go(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  window.scrollTo(0, 0);
  if (id === 'vestir')   buildVestir();
  if (id === 'passarela') resetRunway();
  if (id === 'salao')    updateSalaoDoll();
}

function sfx(type) {
  // Efeitos sonoros básicos - não afetam o visual
  console.log('SFX Played:', type);
}

// =============================================
//  PERSONAGENS
// =============================================
function buildCharsGrid() {
  const grid = document.getElementById('chars-grid');
  grid.innerHTML = '';
  CHARACTERS.forEach(c => {
    const card = document.createElement('div');
    card.className = 'char-card';
    card.innerHTML = `<img class="char-avatar" src="${c.img}" alt="${c.name}" onerror="this.style.display='none';this.nextElementSibling.style.display='flex';"> <div class="char-avatar-placeholder" style="display:none;">${c.emoji}</div> <div class="char-name">${c.name}</div> <div class="char-job">${c.job}</div>`;
    card.onclick = () => { sfx('magic'); selectChar(c); };
    grid.appendChild(card);
  });
}

function selectChar(c) {
  curChar = c;
  buildCastleHeader();
  go('castle');
  toast(`${c.name} está pronta! ✨`);
}

function buildCastleHeader() {
  const h = document.getElementById('castle-header');
  h.innerHTML = `<img class="active-char-img" src="${curChar.img}" alt="${curChar.name}" onerror="this.style.display='none';this.nextElementSibling.style.display='flex';"> <div class="char-info"> <h2>${curChar.name}</h2> <p>${curChar.job}</p> </div>`;
}

// =============================================
//  VESTIR
// =============================================
function buildVestir() {
  const stage = document.getElementById('vestir-doll');
  if (curChar && stage) {
    stage.innerHTML = `<img class="doll-img" id="vestir-img" src="${curChar.img}" alt="${curChar.name}" onerror="this.style.display='none';this.nextElementSibling.style.display='flex';"> <div style="display:none;font-size:5rem;">${curChar.emoji}</div>`;
  }
  const row = document.getElementById('outfit-row');
  row.innerHTML = '';
  OUTFITS.forEach((o, i) => {
    const el = document.createElement('div');
    el.className = 'outfit-placeholder' + (i === 0 ? ' sel' : '');
    const img = document.createElement('img');
    img.src = o.img;
    img.onload  = () => { el.innerHTML = ''; el.appendChild(img); };
    img.onerror = () => { el.textContent = o.emoji; };
    el.onclick = () => {
      sfx('click');
      document.querySelectorAll('.outfit-placeholder').forEach(x => x.classList.remove('sel'));
      el.classList.add('sel');
      const doll = document.getElementById('vestir-img');
      if (doll) doll.src = o.img;
      toast(`Look ${o.label} selecionado! 💗`);
    };
    row.appendChild(el);
  });
}

// =============================================
//  PASSARELA
// =============================================
function initRunwayLights() {
  const lights = document.getElementById('runway-lights');
  if (!lights) return;
  lights.innerHTML = '';
  ['#FF69B4','#FFD700','#FF1493','#DA70D6','#FF69B4'].forEach((c, i) => {
    const l = document.createElement('div');
    l.className = 'r-light';
    l.style.cssText = `background:${c};box-shadow:0 0 8px ${c};animation-delay:${i*.18}s;`;
    lights.appendChild(l);
  });
}

function resetRunway() {
  runwayScore = 0; runwayPos = 10;
  document.getElementById('runway-score').textContent = '0';
  const m = document.getElementById('runway-model');
  if (m) m.style.left = '10px';
  const doll = document.getElementById('runway-doll');
  if (doll && curChar) {
    doll.innerHTML = `<img src="${curChar.img}" alt="${curChar.name}" style="width:100px;height:150px;object-fit:cover;border-radius:15px;" onerror="this.style.display='none';this.nextElementSibling.style.display='flex';">`;
  }
}

function runwayDo(type) {
  sfx('click');
  const pts = { walk:10, pose:25, spin:20, wave:15, kiss:30 };
  const msgs = { walk:'👑 Elegante!', pose:'💅 Incrível!', spin:'🌀 Pirueta!', wave:'💖 O público ama!', kiss:'💋 Deslumbrante!' };
  runwayScore += pts[type] || 10;
  document.getElementById('runway-score').textContent = runwayScore;
  runwayPos = Math.min(runwayPos + 28, 250);
  if (runwayPos >= 250) runwayPos = 10;
  const m = document.getElementById('runway-model');
  if (m) m.style.left = runwayPos + 'px';
  toast(msgs[type] + ` +${pts[type]} pts!`);
}

// =============================================
//  AVENTURA, SALÃO, QUIZ, DECORAÇÃO & UTILS
// =============================================
function startStory() { showStory(0); }
function showStory(idx) {
  const s = STORY[idx];
  const name = curChar ? curChar.name : 'Barbie';
  document.getElementById('story-scene').textContent = s.scene;
  document.getElementById('story-text').textContent  = s.text.replace(/%nome%/g, name);
  const ch = document.getElementById('story-choices');
  ch.innerHTML = '';
  s.choices.forEach(c => {
    const btn = document.createElement('button');
    btn.className = 'choice-btn'; btn.textContent = c.t;
    btn.onclick = () => { sfx('click'); showStory(c.n); };
    ch.appendChild(btn);
  });
}

function buildBeautyGrid() {
  const grid = document.getElementById('beauty-grid');
  grid.innerHTML = '';
  MAKEUPS.forEach(m => {
    const btn = document.createElement('button');
    btn.className = 'beauty-btn'; btn.innerHTML = `${m.label}`;
    btn.onclick = () => { toast(`Batom ${m.label} aplicado! 💄`); };
    grid.appendChild(btn);
  });
}

function updateSalaoDoll() {
  const d = document.getElementById('salao-doll');
  if (!d || !curChar) return;
  d.innerHTML = `<img class="beauty-doll" src="${curChar.img}" alt="${curChar.name}" onerror="this.style.display='none';this.nextElementSibling.style.display='flex';">`;
}

function startQuiz() { quizIdx = 0; quizScore = 0; quizLocked = false; showQuestion(); }
function showQuestion() {
  if (quizIdx >= QUIZ_QS.length) {
    document.getElementById('quiz-q').textContent = '🎉 Quiz completo!';
    document.getElementById('quiz-opts').innerHTML = `<button class="action-btn" onclick="startQuiz()">Jogar de novo!</button>`;
    document.getElementById('quiz-score').textContent = quizScore + ' pts';
    return;
  }
  const q = QUIZ_QS[quizIdx];
  document.getElementById('quiz-q').textContent = `${quizIdx + 1}. ${q.q}`;
  document.getElementById('quiz-score').textContent = quizScore + ' pts';
  const opts = document.getElementById('quiz-opts');
  opts.innerHTML = '';
  q.opts.forEach((o, i) => {
    const btn = document.createElement('button');
    btn.className = 'quiz-opt'; btn.textContent = o;
    btn.onclick = () => {
      if (quizLocked) return;
      quizLocked = true;
      if (i === q.ans) { quizScore++; toast('Correto! +1 🎉'); } else { toast('Errou! 😢'); }
      document.getElementById('quiz-score').textContent = quizScore + ' pts';
      setTimeout(() => { quizIdx++; quizLocked = false; showQuestion(); }, 1000);
    };
    opts.appendChild(btn);
  });
}

function initDecoPanel() {}

function toast(msg) {
  const ex = document.querySelector('.toast');
  if (ex) ex.remove();
  const el = document.createElement('div');
  el.className = 'toast'; el.textContent = msg;
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 2400);
}