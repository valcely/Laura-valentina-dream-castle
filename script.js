‘use strict’;

// ═══════════════════════════════════════════════════
//  PERSONAGENS — profissoes atualizadas conforme pedido:
//  Laura     = Cantora
//  Valentina = Med. Veterinaria
//  Giovanna  = Biomedica
//  Valcely   = Enfermeira
//  Lidiane   = Medica
// ═══════════════════════════════════════════════════
var CHARACTERS = [
{ id:‘laura’,     name:‘Laura’,     job:‘Cantora’,         hair:’#ff2d7a’, outfit:’#ff6eb4’, shoe:’#c200a0’, skin:’#f5c5a3’ },
{ id:‘valentina’, name:‘Valentina’, job:‘Med. Veterinaria’, hair:’#7b00ff’, outfit:’#b76eff’, shoe:’#3d00cc’, skin:’#f5c5a3’ },
{ id:‘giovanna’,  name:‘Giovanna’,  job:‘Biomedica’,        hair:’#c200a0’, outfit:’#ff4fb8’, shoe:’#7a0070’, skin:’#e8b89a’ },
{ id:‘valcely’,   name:‘Valcely’,   job:‘Enfermeira’,       hair:’#e6a817’, outfit:’#ffd700’, shoe:’#a07000’, skin:’#d4956a’ },
{ id:‘lidiane’,   name:‘Lidiane’,   job:‘Medica’,           hair:’#00bfff’, outfit:’#00b4d8’, shoe:’#005f73’, skin:’#f0d5b0’ }
];

var JOBS = [
‘Cantora’,‘Med. Veterinaria’,‘Biomedica’,‘Enfermeira’,‘Medica’,
‘Rainha’,‘Astronauta’,‘Programadora’,‘Arquiteta’,‘Cientista’
];

var HAIR_COLORS   = [’#ff2d7a’,’#7b00ff’,’#ffd700’,’#00bfff’,’#ff6600’,’#39ff14’,’#ffffff’,’#3d2000’,’#c200a0’,’#e6a817’];
var OUTFIT_COLORS = [’#ff6eb4’,’#b76eff’,’#00b4d8’,’#ffd700’,’#ff4500’,’#39ff14’,’#c0c0c0’,’#e8d5b7’,’#ff4fb8’,’#00e5ff’];
var SHOE_COLORS   = [’#c200a0’,’#3d00cc’,’#005f73’,’#a07000’,’#7a0070’,’#003d00’,’#555555’,’#8b4513’,’#ff2d7a’,’#0077ff’];

// ── Cartas de memoria ──
var MEMORY_CARDS = [
{ label:‘Castelo’,   img:‘https://cdn-icons-png.flaticon.com/512/3820/3820331.png’ },
{ label:‘Coroa’,     img:‘https://cdn-icons-png.flaticon.com/512/3820/3820381.png’ },
{ label:‘Estrela’,   img:‘https://cdn-icons-png.flaticon.com/512/616/616490.png’   },
{ label:‘Unicornio’, img:‘https://cdn-icons-png.flaticon.com/512/616/616464.png’   },
{ label:‘Borboleta’, img:‘https://cdn-icons-png.flaticon.com/512/3069/3069172.png’ },
{ label:‘Flor’,      img:‘https://cdn-icons-png.flaticon.com/512/628/628283.png’   },
{ label:‘Diamante’,  img:‘https://cdn-icons-png.flaticon.com/512/2583/2583344.png’ },
{ label:‘Arco-iris’, img:‘https://cdn-icons-png.flaticon.com/512/616/616430.png’   },
{ label:‘Lua’,       img:‘https://cdn-icons-png.flaticon.com/512/740/740878.png’   },
{ label:‘Presente’,  img:‘https://cdn-icons-png.flaticon.com/512/3388/3388380.png’ },
{ label:‘Bolo’,      img:‘https://cdn-icons-png.flaticon.com/512/3176/3176370.png’ },
{ label:‘Balao’,     img:‘https://cdn-icons-png.flaticon.com/512/3208/3208738.png’ }
];

// ── Quiz perguntas PT / EN / ES ──
var QUIZ_QUESTIONS = {
pt: {
easy: [
{ q:‘Qual e a capital do Brasil?’,           opts:[‘Sao Paulo’,‘Rio de Janeiro’,‘Brasilia’,‘Salvador’],   ans:2, exp:‘Brasilia e a capital federal do Brasil desde 1960.’ },
{ q:‘Quantas cores tem o arco-iris?’,         opts:[‘5’,‘6’,‘7’,‘8’],                                     ans:2, exp:‘O arco-iris tem 7 cores: vermelho, laranja, amarelo, verde, azul, anil e violeta.’ },
{ q:‘Qual animal e o maior do mundo?’,        opts:[‘Elefante’,‘Baleia Azul’,‘Girafa’,‘Tubarao’],          ans:1, exp:‘A baleia azul e o maior animal que ja existiu na Terra.’ },
{ q:‘Quantos planetas tem o Sistema Solar?’,  opts:[‘7’,‘8’,‘9’,‘10’],                                    ans:1, exp:‘O Sistema Solar tem 8 planetas: Mercurio, Venus, Terra, Marte, Jupiter, Saturno, Urano e Netuno.’ },
{ q:‘De que cor e o Sol?’,                    opts:[‘Amarelo’,‘Branco’,‘Laranja’,‘Vermelho’],              ans:1, exp:‘O Sol parece amarelo daqui, mas na verdade e uma estrela branca-amarelada.’ },
{ q:‘Qual e o maior oceano do mundo?’,        opts:[‘Atlantico’,‘Indico’,‘Pacifico’,‘Artico’],             ans:2, exp:‘O Oceano Pacifico e o maior e mais profundo do mundo.’ },
{ q:‘Quantas pernas tem uma aranha?’,         opts:[‘6’,‘8’,‘10’,‘4’],                                    ans:1, exp:‘As aranhas sao aracnideos e possuem 8 pernas.’ },
{ q:‘Qual e o pais mais populoso do mundo?’,  opts:[‘India’,‘China’,‘EUA’,‘Brasil’],                      ans:0, exp:‘A India ultrapassou a China em 2023 e agora e o pais mais populoso.’ }
],
medium: [
{ q:‘Quem escreveu “Dom Casmurro”?’,          opts:[‘Jose de Alencar’,‘Machado de Assis’,‘Clarice Lispector’,‘Jorge Amado’], ans:1, exp:’“Dom Casmurro” foi escrito por Machado de Assis em 1899.’ },
{ q:‘Em que ano o Brasil foi descoberto?’,    opts:[‘1492’,‘1500’,‘1510’,‘1498’],                         ans:1, exp:‘Pedro Alvares Cabral chegou ao Brasil em 22 de abril de 1500.’ },
{ q:‘Qual e o maior pais do mundo em area?’,  opts:[‘Canada’,‘EUA’,‘Russia’,‘China’],                     ans:2, exp:‘A Russia e o maior pais do mundo, com mais de 17 milhoes de km2.’ },
{ q:‘Quanto e a raiz quadrada de 144?’,       opts:[‘11’,‘12’,‘13’,‘14’],                                 ans:1, exp:‘12 x 12 = 144, entao a raiz quadrada de 144 e 12.’ },
{ q:‘O que e fotossintese?’,                  opts:[‘Respiracao de animais’,‘Plantas fazem alimento com luz’,‘Tipo de doenca’,‘Movimento da Terra’], ans:1, exp:‘Fotossintese e o processo que plantas usam para converter luz solar em alimento.’ },
{ q:‘Qual elemento e representado por “O”?’,  opts:[‘Ouro’,‘Osmio’,‘Oxigenio’,‘Oganesson’],               ans:2, exp:‘O simbolo “O” representa o Oxigenio, essencial para a vida.’ }
],
hard: [
{ q:‘Qual e a formula quimica da agua?’,      opts:[‘CO2’,‘H2O’,‘O2’,‘NaCl’],                             ans:1, exp:‘A agua e formada por 2 atomos de Hidrogenio e 1 de Oxigenio.’ },
{ q:‘Quem desenvolveu a teoria da relatividade?’, opts:[‘Newton’,‘Edison’,‘Einstein’,‘Darwin’],            ans:2, exp:‘Albert Einstein publicou a teoria da relatividade especial em 1905.’ },
{ q:‘Quantos ossos tem o corpo humano adulto?’, opts:[‘206’,‘196’,‘256’,‘180’],                            ans:0, exp:‘O corpo humano adulto possui 206 ossos.’ },
{ q:‘Qual e o menor pais do mundo?’,          opts:[‘Monaco’,‘Maldivas’,‘San Marino’,‘Vaticano’],         ans:3, exp:‘O Vaticano e o menor pais do mundo com apenas 0,44 km2.’ },
{ q:‘Quem pintou a Mona Lisa?’,               opts:[‘Michelangelo’,‘Rafael’,‘Leonardo da Vinci’,‘Botticelli’], ans:2, exp:‘A Mona Lisa foi pintada por Leonardo da Vinci entre 1503 e 1519.’ },
{ q:‘O que significa a sigla DNA?’,           opts:[‘Acido Desoxirribonucleico’,‘Dado Natural Animal’,‘Acido Natural Diluido’,‘Deoxi Nitrato Alcalino’], ans:0, exp:‘DNA e Acido Desoxirribonucleico, a molecula que carrega informacao genetica.’ }
]
},
en: {
easy: [
{ q:‘What is the capital of Brazil?’,         opts:[‘Sao Paulo’,‘Rio de Janeiro’,‘Brasilia’,‘Salvador’],   ans:2, exp:‘Brasilia has been the federal capital of Brazil since 1960.’ },
{ q:‘How many colors are in a rainbow?’,      opts:[‘5’,‘6’,‘7’,‘8’],                                     ans:2, exp:‘A rainbow has 7 colors: red, orange, yellow, green, blue, indigo, and violet.’ },
{ q:‘Which is the largest animal?’,           opts:[‘Elephant’,‘Blue Whale’,‘Giraffe’,‘Shark’],           ans:1, exp:‘The blue whale is the largest animal ever known to have existed.’ },
{ q:‘How many planets in the Solar System?’,  opts:[‘7’,‘8’,‘9’,‘10’],                                    ans:1, exp:‘The Solar System has 8 planets.’ },
{ q:‘What color is the Sun actually?’,        opts:[‘Yellow’,‘White’,‘Orange’,‘Red’],                     ans:1, exp:‘The Sun appears yellow but is actually a white-yellow star.’ },
{ q:‘What is the largest ocean on Earth?’,    opts:[‘Atlantic’,‘Indian’,‘Pacific’,‘Arctic’],               ans:2, exp:‘The Pacific Ocean is the largest and deepest ocean.’ },
{ q:‘How many legs does a spider have?’,      opts:[‘6’,‘8’,‘10’,‘4’],                                    ans:1, exp:‘Spiders are arachnids and have 8 legs.’ },
{ q:‘Which country has the most people?’,     opts:[‘India’,‘China’,‘USA’,‘Brazil’],                      ans:0, exp:‘India surpassed China in 2023 and is now most populous.’ }
],
medium: [
{ q:‘What is the square root of 144?’,        opts:[‘11’,‘12’,‘13’,‘14’],                                 ans:1, exp:‘12 x 12 = 144, so the square root of 144 is 12.’ },
{ q:‘What is photosynthesis?’,                opts:[‘Animal breathing’,‘Plants making food from sunlight’,‘A disease’,‘Earth movement’], ans:1, exp:‘Photosynthesis is the process plants use to convert sunlight into food.’ },
{ q:‘Which element is represented by “O”?’,   opts:[‘Gold’,‘Osmium’,‘Oxygen’,‘Oganesson’],                ans:2, exp:‘The symbol “O” represents Oxygen, essential for life.’ },
{ q:‘Largest country by area?’,               opts:[‘Canada’,‘USA’,‘Russia’,‘China’],                     ans:2, exp:‘Russia is the largest country with over 17 million km2.’ },
{ q:‘Who wrote Romeo and Juliet?’,            opts:[‘Dickens’,‘Shakespeare’,‘Austen’,‘Twain’],            ans:1, exp:‘Romeo and Juliet was written by William Shakespeare.’ },
{ q:‘How many continents are there?’,         opts:[‘5’,‘6’,‘7’,‘8’],                                     ans:2, exp:‘There are 7 continents.’ }
],
hard: [
{ q:‘Chemical formula for water?’,            opts:[‘CO2’,‘H2O’,‘O2’,‘NaCl’],                             ans:1, exp:‘Water is formed by 2 Hydrogen atoms and 1 Oxygen atom.’ },
{ q:‘Who developed the theory of relativity?’, opts:[‘Newton’,‘Edison’,‘Einstein’,‘Darwin’],               ans:2, exp:‘Albert Einstein published the special theory of relativity in 1905.’ },
{ q:‘Bones in the adult human body?’,         opts:[‘206’,‘196’,‘256’,‘180’],                              ans:0, exp:‘The adult human body has 206 bones.’ },
{ q:‘Smallest country in the world?’,         opts:[‘Monaco’,‘Maldives’,‘San Marino’,‘Vatican’],          ans:3, exp:‘Vatican City is the smallest country with only 0.44 km2.’ },
{ q:‘Who painted the Mona Lisa?’,             opts:[‘Michelangelo’,‘Raphael’,‘Leonardo da Vinci’,‘Botticelli’], ans:2, exp:‘The Mona Lisa was painted by Leonardo da Vinci.’ },
{ q:‘What does DNA stand for?’,               opts:[‘Deoxyribonucleic Acid’,‘Direct Nucleic Acid’,‘Dynamic Natural Agent’,‘Dense Nuclear Array’], ans:0, exp:‘DNA stands for Deoxyribonucleic Acid.’ }
]
},
es: {
easy: [
{ q:‘Cual es la capital de Brasil?’,          opts:[‘Sao Paulo’,‘Rio de Janeiro’,‘Brasilia’,‘Salvador’],   ans:2, exp:‘Brasilia es la capital federal de Brasil desde 1960.’ },
{ q:‘Cuantos colores tiene el arcoiris?’,      opts:[‘5’,‘6’,‘7’,‘8’],                                     ans:2, exp:‘El arcoiris tiene 7 colores.’ },
{ q:‘Cual es el animal mas grande?’,           opts:[‘Elefante’,‘Ballena azul’,‘Jirafa’,‘Tiburon’],        ans:1, exp:‘La ballena azul es el animal mas grande.’ },
{ q:‘Cuantos planetas tiene el Sistema Solar?’, opts:[‘7’,‘8’,‘9’,‘10’],                                   ans:1, exp:‘El Sistema Solar tiene 8 planetas.’ },
{ q:‘De que color es el Sol?’,                 opts:[‘Amarillo’,‘Blanco’,‘Naranja’,‘Rojo’],                ans:1, exp:‘El Sol parece amarillo pero es blanco-amarillento.’ },
{ q:‘Cual es el oceano mas grande?’,           opts:[‘Atlantico’,‘Indico’,‘Pacifico’,‘Artico’],            ans:2, exp:‘El Oceano Pacifico es el mas grande.’ },
{ q:‘Cuantas patas tiene una arana?’,          opts:[‘6’,‘8’,‘10’,‘4’],                                    ans:1, exp:‘Las aranas tienen 8 patas.’ },
{ q:‘Pais mas poblado del mundo?’,             opts:[‘India’,‘China’,‘EE.UU.’,‘Brasil’],                   ans:0, exp:‘India supero a China en 2023.’ }
],
medium: [
{ q:‘Raiz cuadrada de 144?’,                  opts:[‘11’,‘12’,‘13’,‘14’],                                  ans:1, exp:‘12 x 12 = 144.’ },
{ q:‘Que es la fotosintesis?’,                 opts:[‘Respiracion animal’,‘Plantas hacen alimento con luz’,‘Una enfermedad’,‘Movimiento de la Tierra’], ans:1, exp:‘La fotosintesis convierte luz solar en alimento.’ },
{ q:‘Simbolo “O” representa?’,                 opts:[‘Oro’,‘Osmio’,‘Oxigeno’,‘Oganesson’],                 ans:2, exp:‘El simbolo “O” es el Oxigeno.’ },
{ q:‘Pais mas grande del mundo?’,              opts:[‘Canada’,‘EE.UU.’,‘Rusia’,‘China’],                   ans:2, exp:‘Rusia es el pais mas grande.’ },
{ q:‘Quien escribio Don Quijote?’,             opts:[‘Lope de Vega’,‘Cervantes’,‘Garcia Lorca’,‘Quevedo’], ans:1, exp:‘Miguel de Cervantes escribio Don Quijote.’ },
{ q:‘Cuantos continentes hay?’,                opts:[‘5’,‘6’,‘7’,‘8’],                                     ans:2, exp:‘Hay 7 continentes.’ }
],
hard: [
{ q:‘Formula quimica del agua?’,              opts:[‘CO2’,‘H2O’,‘O2’,‘NaCl’],                              ans:1, exp:‘El agua: 2 atomos de Hidrogeno y 1 de Oxigeno.’ },
{ q:‘Quien desarrollo la relatividad?’,        opts:[‘Newton’,‘Edison’,‘Einstein’,‘Darwin’],                ans:2, exp:‘Albert Einstein, en 1905.’ },
{ q:‘Huesos en el cuerpo humano adulto?’,      opts:[‘206’,‘196’,‘256’,‘180’],                              ans:0, exp:‘El cuerpo humano tiene 206 huesos.’ },
{ q:‘Pais mas pequeno del mundo?’,             opts:[‘Monaco’,‘Maldivas’,‘San Marino’,‘Vaticano’],         ans:3, exp:‘El Vaticano, con 0,44 km2.’ },
{ q:‘Quien pinto la Mona Lisa?’,               opts:[‘Miguel Angel’,‘Rafael’,‘Leonardo da Vinci’,‘Botticelli’], ans:2, exp:‘Leonardo da Vinci, entre 1503 y 1519.’ },
{ q:‘Que significa ADN?’,                      opts:[‘Acido Desoxirribonucleico’,‘Agente Dinamico Natural’,‘Acido Diluido Natural’,‘Anillo Doblado Nitrogeno’], ans:0, exp:‘ADN = Acido Desoxirribonucleico.’ }
]
}
};

// ── Traducoes da interface ──
var TRANSLATIONS = {
pt: {
‘txt-btn-enter’:        ‘Entrar no Castelo’,
‘txt-select-title’:     ‘Escolha sua Princesa’,
‘txt-menu-explore’:     ‘Explorar’,
‘txt-menu-explore-sub’: ‘Castelo 3D’,
‘txt-menu-custom’:      ‘Avatar’,
‘txt-menu-custom-sub’:  ‘Personalizar’,
‘txt-menu-race’:        ‘Corrida’,
‘txt-menu-race-sub’:    ‘Obstaculos’,
‘txt-menu-memory’:      ‘Memoria’,
‘txt-menu-memory-sub’:  ‘Pares’,
‘txt-menu-snake’:       ‘Cobrinha’,
‘txt-menu-snake-sub’:   ‘Arcade’,
‘txt-menu-quiz’:        ‘Quiz’,
‘txt-menu-quiz-sub’:    ‘Educativo’,
‘txt-custom-title’:     ‘Personalizar Avatar’,
‘txt-opt-hair’:         ‘Cabelo’,
‘txt-opt-outfit’:       ‘Roupa’,
‘txt-opt-shoes’:        ‘Sapatos’,
‘txt-opt-job’:          ‘Profissao’,
‘txt-btn-save’:         ‘Salvar Look’,
‘txt-race-title’:       ‘Corrida Real’,
‘txt-race-hint’:        ‘Toque / Espaco / Seta para pular’,
‘txt-memory-title’:     ‘Jogo da Memoria’,
‘txt-mem-easy’:         ‘Facil (4 pares)’,
‘txt-mem-med’:          ‘Medio (8 pares)’,
‘txt-mem-hard’:         ‘Dificil (12 pares)’,
‘txt-mem-win’:          ‘Parabens!’,
‘txt-snake-title’:      ‘Cobrinha Magica’,
‘txt-snake-hint’:       ‘Setas ou D-Pad para mover’,
‘txt-quiz-title’:       ‘Quiz Educativo’,
‘txt-quiz-desc’:        ‘Responda e aprenda brincando!’,
‘txt-quiz-easy’:        ‘Facil’,
‘txt-quiz-med’:         ‘Medio’,
‘txt-quiz-hard’:        ‘Dificil’
},
en: {
‘txt-btn-enter’:        ‘Enter the Castle’,
‘txt-select-title’:     ‘Choose your Princess’,
‘txt-menu-explore’:     ‘Explore’,
‘txt-menu-explore-sub’: ‘3D Castle’,
‘txt-menu-custom’:      ‘Avatar’,
‘txt-menu-custom-sub’:  ‘Customize’,
‘txt-menu-race’:        ‘Race’,
‘txt-menu-race-sub’:    ‘Obstacles’,
‘txt-menu-memory’:      ‘Memory’,
‘txt-menu-memory-sub’:  ‘Pairs’,
‘txt-menu-snake’:       ‘Snake’,
‘txt-menu-snake-sub’:   ‘Arcade’,
‘txt-menu-quiz’:        ‘Quiz’,
‘txt-menu-quiz-sub’:    ‘Educational’,
‘txt-custom-title’:     ‘Customize Avatar’,
‘txt-opt-hair’:         ‘Hair’,
‘txt-opt-outfit’:       ‘Outfit’,
‘txt-opt-shoes’:        ‘Shoes’,
‘txt-opt-job’:          ‘Profession’,
‘txt-btn-save’:         ‘Save Look’,
‘txt-race-title’:       ‘Royal Race’,
‘txt-race-hint’:        ‘Tap / Space / Up Arrow to jump’,
‘txt-memory-title’:     ‘Memory Game’,
‘txt-mem-easy’:         ‘Easy (4 pairs)’,
‘txt-mem-med’:          ‘Medium (8 pairs)’,
‘txt-mem-hard’:         ‘Hard (12 pairs)’,
‘txt-mem-win’:          ‘Congratulations!’,
‘txt-snake-title’:      ‘Magic Snake’,
‘txt-snake-hint’:       ‘Arrow keys or D-Pad to move’,
‘txt-quiz-title’:       ‘Educational Quiz’,
‘txt-quiz-desc’:        ‘Answer and learn while playing!’,
‘txt-quiz-easy’:        ‘Easy’,
‘txt-quiz-med’:         ‘Medium’,
‘txt-quiz-hard’:        ‘Hard’
},
es: {
‘txt-btn-enter’:        ‘Entrar al Castillo’,
‘txt-select-title’:     ‘Elige tu Princesa’,
‘txt-menu-explore’:     ‘Explorar’,
‘txt-menu-explore-sub’: ‘Castillo 3D’,
‘txt-menu-custom’:      ‘Avatar’,
‘txt-menu-custom-sub’:  ‘Personalizar’,
‘txt-menu-race’:        ‘Carrera’,
‘txt-menu-race-sub’:    ‘Obstaculos’,
‘txt-menu-memory’:      ‘Memoria’,
‘txt-menu-memory-sub’:  ‘Pares’,
‘txt-menu-snake’:       ‘Serpiente’,
‘txt-menu-snake-sub’:   ‘Arcade’,
‘txt-menu-quiz’:        ‘Quiz’,
‘txt-menu-quiz-sub’:    ‘Educativo’,
‘txt-custom-title’:     ‘Personalizar Avatar’,
‘txt-opt-hair’:         ‘Cabello’,
‘txt-opt-outfit’:       ‘Ropa’,
‘txt-opt-shoes’:        ‘Zapatos’,
‘txt-opt-job’:          ‘Profesion’,
‘txt-btn-save’:         ‘Guardar Look’,
‘txt-race-title’:       ‘Carrera Real’,
‘txt-race-hint’:        ‘Toca / Espacio / Flecha Arriba’,
‘txt-memory-title’:     ‘Juego de Memoria’,
‘txt-mem-easy’:         ‘Facil (4 pares)’,
‘txt-mem-med’:          ‘Medio (8 pares)’,
‘txt-mem-hard’:         ‘Dificil (12 pares)’,
‘txt-mem-win’:          ‘Felicitaciones!’,
‘txt-snake-title’:      ‘Serpiente Magica’,
‘txt-snake-hint’:       ‘Flechas o D-Pad para mover’,
‘txt-quiz-title’:       ‘Quiz Educativo’,
‘txt-quiz-desc’:        ‘Responde y aprende jugando!’,
‘txt-quiz-easy’:        ‘Facil’,
‘txt-quiz-med’:         ‘Medio’,
‘txt-quiz-hard’:        ‘Dificil’
}
};

// ── Obstaculos da corrida ──
var RACE_OBSTACLES = [
{ icon:‘https://cdn-icons-png.flaticon.com/512/2107/2107845.png’, label:‘Pedra’  },
{ icon:‘https://cdn-icons-png.flaticon.com/512/3069/3069080.png’, label:‘Arvore’ },
{ icon:‘https://cdn-icons-png.flaticon.com/512/3176/3176370.png’, label:‘Bolo’   },
{ icon:‘https://cdn-icons-png.flaticon.com/512/616/616408.png’,   label:‘Cobra’  }
];
‘use strict’;

// ═══════════════════════════════════════════════════
//  WEB AUDIO ENGINE — VERSAO FINAL CORRIGIDA
//  Bugs corrigidos:
//  1. AudioContext criado ANTES de qualquer chamada de playTone
//  2. toggleMusic aguarda ctx.resume() antes de tocar
//  3. playTone nao bloqueia quando musicEnabled=false durante sons de UI
//  4. Sem vazamento de osciladores
// ═══════════════════════════════════════════════════

var AudioCtx       = null;
var musicEnabled   = true;
var bgMusicRunning = false;
var bgMusicTimeout = null;
var audioUnlocked  = false;

// ─── Obtem / cria o AudioContext ─────────────────
function getAudioCtx() {
if (!AudioCtx) {
try {
AudioCtx = new (window.AudioContext || window.webkitAudioContext)();
} catch (e) {
console.warn(’[Audio] AudioContext nao suportado:’, e);
return null;
}
}
// Resume se suspenso (politica de autoplay dos browsers)
if (AudioCtx.state === ‘suspended’) {
AudioCtx.resume().catch(function() {});
}
return AudioCtx;
}

// ─── Tom generico ─────────────────────────────────
// vol: 0.0–1.0   delay: segundos (default 0)
function playTone(freq, dur, type, vol, delay) {
var ctx = getAudioCtx();
if (!ctx) return;
// Sons de UI ignoram musicEnabled; musica de fundo respeita
try {
var osc  = ctx.createOscillator();
var gain = ctx.createGain();
osc.connect(gain);
gain.connect(ctx.destination);
osc.type = type || ‘sine’;
var t0 = ctx.currentTime + (delay || 0);
osc.frequency.setValueAtTime(freq, t0);
gain.gain.setValueAtTime(vol || 0.13, t0);
gain.gain.exponentialRampToValueAtTime(0.0001, t0 + dur);
osc.start(t0);
osc.stop(t0 + dur + 0.02);
} catch (e) {}
}

// ─── Sons de UI (sempre tocam, volume baixo) ─────
function playClick() {
playTone(700, 0.07, ‘triangle’, 0.10);
}

function playSuccess() {
playTone(523, 0.11, ‘sine’, 0.15);
playTone(659, 0.11, ‘sine’, 0.15, 0.13);
playTone(784, 0.16, ‘sine’, 0.15, 0.26);
}

function playError() {
playTone(220, 0.13, ‘sawtooth’, 0.12);
playTone(180, 0.13, ‘sawtooth’, 0.12, 0.16);
}

function playJump() {
var ctx = getAudioCtx();
if (!ctx) return;
try {
var osc  = ctx.createOscillator();
var gain = ctx.createGain();
osc.connect(gain);
gain.connect(ctx.destination);
osc.type = ‘sine’;
osc.frequency.setValueAtTime(280, ctx.currentTime);
osc.frequency.exponentialRampToValueAtTime(580, ctx.currentTime + 0.18);
gain.gain.setValueAtTime(0.16, ctx.currentTime);
gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.22);
osc.start(ctx.currentTime);
osc.stop(ctx.currentTime + 0.24);
} catch (e) {}
}

function playHit() {
playTone(130, 0.22, ‘sawtooth’, 0.16);
}

function playCoin() {
playTone(1046, 0.06, ‘sine’, 0.16);
playTone(1318, 0.09, ‘sine’, 0.16, 0.08);
}

function playCardFlip() {
playTone(400, 0.08, ‘triangle’, 0.09);
}

function playMatch() {
[523, 659, 784, 1046].forEach(function (f, i) {
playTone(f, 0.10, ‘sine’, 0.14, i * 0.10);
});
}

function playEat() {
playTone(660, 0.06, ‘square’, 0.09);
playTone(880, 0.06, ‘square’, 0.09, 0.08);
}

function playGameOver() {
[440, 392, 349, 330, 294].forEach(function (f, i) {
playTone(f, 0.14, ‘sawtooth’, 0.12, i * 0.13);
});
}

function playCorrect() {
playTone(659,  0.10, ‘sine’, 0.16);
playTone(784,  0.10, ‘sine’, 0.16, 0.12);
playTone(1046, 0.15, ‘sine’, 0.16, 0.24);
}

function playWrong() {
playTone(190, 0.20, ‘sawtooth’, 0.14);
}

// ═══════════════════════════════════════════════════
//  MUSICA DE FUNDO — melodia de castelo/princesa
//  Gerada 100% pela Web Audio API
// ═══════════════════════════════════════════════════
var MELODY = [
523.25, 587.33, 659.25, 698.46,
783.99, 698.46, 659.25, 587.33,
523.25, 493.88, 440.00, 493.88,
523.25, 523.25, 587.33, 659.25,
698.46, 783.99, 880.00, 783.99,
698.46, 659.25, 587.33, 523.25
];
var BASS = [
261.63, 261.63, 329.63, 349.23,
392.00, 349.23, 329.63, 261.63
];

function startBgMusic() {
if (bgMusicRunning) return;
if (!musicEnabled)  return;
var ctx = getAudioCtx();
if (!ctx) return;
// Garante que context esta rodando
ctx.resume().then(function () {
bgMusicRunning = true;
scheduleMelody(0);
}).catch(function () {
// Fallback: tenta mesmo assim
bgMusicRunning = true;
scheduleMelody(0);
});
}

function stopBgMusic() {
bgMusicRunning = false;
clearTimeout(bgMusicTimeout);
}

function scheduleMelody(step) {
if (!bgMusicRunning || !musicEnabled) return;
var ctx = getAudioCtx();
if (!ctx) return;
// Melodia principal
try {
var note = MELODY[step % MELODY.length];
var osc1 = ctx.createOscillator();
var g1   = ctx.createGain();
osc1.connect(g1); g1.connect(ctx.destination);
osc1.type = ‘sine’;
osc1.frequency.setValueAtTime(note, ctx.currentTime);
g1.gain.setValueAtTime(0.05, ctx.currentTime);
g1.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.28);
osc1.start(ctx.currentTime);
osc1.stop(ctx.currentTime + 0.30);
} catch (e) {}
// Baixo
try {
var bass = BASS[Math.floor(step / 3) % BASS.length];
var osc2 = ctx.createOscillator();
var g2   = ctx.createGain();
osc2.connect(g2); g2.connect(ctx.destination);
osc2.type = ‘triangle’;
osc2.frequency.setValueAtTime(bass, ctx.currentTime);
g2.gain.setValueAtTime(0.032, ctx.currentTime);
g2.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.32);
osc2.start(ctx.currentTime);
osc2.stop(ctx.currentTime + 0.34);
} catch (e) {}

bgMusicTimeout = setTimeout(function () {
scheduleMelody(step + 1);
}, 305);
}

// ─── Botao de musica ──────────────────────────────
function toggleMusic() {
// Primeiro garante que o AudioContext existe e esta desbloqueado
var ctx = getAudioCtx();
if (ctx && ctx.state === ‘suspended’) {
ctx.resume().catch(function () {});
}

musicEnabled = !musicEnabled;

// Atualiza texto do botao
var lbl = document.getElementById(‘music-label’);
var ico = document.getElementById(‘music-icon’);
if (lbl) lbl.textContent = ’Musica: ’ + (musicEnabled ? ‘ON’ : ‘OFF’);
if (ico) ico.textContent = musicEnabled ? ‘\u266B’ : ‘\u266A’;

if (musicEnabled) {
bgMusicRunning = false; // reseta para permitir restart
startBgMusic();
} else {
stopBgMusic();
}
}

// ─── Desbloqueio no primeiro toque/clique ─────────
// Browsers modernos exigem interacao do usuario antes de AudioContext tocar.
function unlockAndStartMusic() {
if (audioUnlocked) return;
audioUnlocked = true;

// Remove os listeners para nao disparar de novo
document.removeEventListener(‘click’,      unlockAndStartMusic);
document.removeEventListener(‘touchstart’, unlockAndStartMusic);

var ctx = getAudioCtx();
if (!ctx) return;

ctx.resume().then(function () {
// So inicia a musica se ainda estiver habilitada
if (musicEnabled && !bgMusicRunning) {
setTimeout(startBgMusic, 150);
}
}).catch(function () {
if (musicEnabled && !bgMusicRunning) {
setTimeout(startBgMusic, 150);
}
});
}
‘use strict’;

// ═══════════════════════════════════════════════════
//  POLYFILL roundRect (Safari < 15.4 e Firefox < 112)
// ═══════════════════════════════════════════════════
(function () {
if (!CanvasRenderingContext2D.prototype.roundRect) {
CanvasRenderingContext2D.prototype.roundRect = function (x, y, w, h, r) {
r = Math.min(r || 0, Math.abs(w) / 2, Math.abs(h) / 2);
this.beginPath();
this.moveTo(x + r, y);
this.arcTo(x + w, y,     x + w, y + h, r);
this.arcTo(x + w, y + h, x,     y + h, r);
this.arcTo(x,     y + h, x,     y,     r);
this.arcTo(x,     y,     x + w, y,     r);
this.closePath();
return this;
};
}
}());

// ─── Utilidade: escurece/clareia cor hex ──────────
function shadeColor(hex, pct) {
if (!hex || hex.length < 7) return hex || ‘#888888’;
var r = parseInt(hex.slice(1, 3), 16);
var g = parseInt(hex.slice(3, 5), 16);
var b = parseInt(hex.slice(5, 7), 16);
r = Math.min(255, Math.max(0, r + pct));
g = Math.min(255, Math.max(0, g + pct));
b = Math.min(255, Math.max(0, b + pct));
return ‘#’ + [r, g, b].map(function (v) { return v.toString(16).padStart(2, ‘0’); }).join(’’);
}

function hexToInt(hex) {
// Converte ‘#rrggbb’ para inteiro sem usar parseInt(str,‘0x’)
if (!hex || hex.length < 7) return 0xffffff;
return parseInt(hex.slice(1), 16);
}

// ═══════════════════════════════════════════════════
//  DESENHO DA PRINCESA — canvas 2D estilo boneca
//  BUG CORRIGIDO: nao usa ctx.save/restore externo;
//  drawPrincess sempre recebe o canvas real.
// ═══════════════════════════════════════════════════
function drawPrincess(canvas, char, scale) {
if (!canvas || !char) return;
scale = scale || 1;
var ctx = canvas.getContext(‘2d’);
var w   = canvas.width;
var h   = canvas.height;
ctx.clearRect(0, 0, w, h);

// Medidas proporcionais ao canvas
var cx   = w / 2;
var top  = h * 0.08;
var bh   = h * 0.13;   // altura da cabeca
var bw   = h * 0.17;   // largura da cabeca
var bd   = h * 0.26;   // altura do corpo
var bwd  = h * 0.20;   // largura do corpo
var legH = h * 0.20;
var legW = h * 0.08;
var armH = h * 0.18;
var armW = h * 0.07;
var shoeH= h * 0.05;

var hairColor   = char.hair   || ‘#ff2d7a’;
var outfitColor = char.outfit || ‘#ff6eb4’;
var shoeColor   = char.shoe   || ‘#c200a0’;
var skinColor   = char.skin   || ‘#f5c5a3’;

// ── CABELO TRASEIRO ──
ctx.fillStyle = hairColor;
ctx.beginPath();
ctx.ellipse(cx, top + bh * 0.4, bw * 0.65, bh * 0.85, 0, 0, Math.PI * 2);
ctx.fill();
// mechas laterais
ctx.fillStyle = shadeColor(hairColor, -20);
ctx.beginPath();
ctx.ellipse(cx - bw * 0.55, top + bh * 0.9 + legH * 0.1, bw * 0.12, legH * 0.35, -0.3, 0, Math.PI * 2);
ctx.fill();
ctx.beginPath();
ctx.ellipse(cx + bw * 0.55, top + bh * 0.9 + legH * 0.1, bw * 0.12, legH * 0.35, 0.3, 0, Math.PI * 2);
ctx.fill();

// ── BRACOS ──
ctx.fillStyle = shadeColor(outfitColor, -10);
ctx.roundRect(cx - bwd * 0.5 - armW, top + bh * 0.9, armW, armH, armW * 0.4);
ctx.fill();
ctx.beginPath();
ctx.roundRect(cx + bwd * 0.5, top + bh * 0.9, armW, armH, armW * 0.4);
ctx.fill();
// maos
ctx.fillStyle = skinColor;
ctx.beginPath(); ctx.arc(cx - bwd * 0.5 - armW * 0.5, top + bh * 0.9 + armH + armW * 0.45, armW * 0.45, 0, Math.PI * 2); ctx.fill();
ctx.beginPath(); ctx.arc(cx + bwd * 0.5 + armW * 0.5, top + bh * 0.9 + armH + armW * 0.45, armW * 0.45, 0, Math.PI * 2); ctx.fill();

// ── VESTIDO / SAIA ──
ctx.fillStyle = outfitColor;
ctx.beginPath();
ctx.moveTo(cx - bwd * 0.5,  top + bh * 0.85);
ctx.quadraticCurveTo(cx - bwd * 0.85, top + bh * 0.85 + bd * 0.5, cx - bwd * 1.05, top + bh * 0.85 + bd);
ctx.lineTo(cx + bwd * 1.05, top + bh * 0.85 + bd);
ctx.quadraticCurveTo(cx + bwd * 0.85, top + bh * 0.85 + bd * 0.5, cx + bwd * 0.5, top + bh * 0.85);
ctx.closePath();
ctx.fill();
// tronco
ctx.fillStyle = shadeColor(outfitColor, 10);
ctx.beginPath();
ctx.roundRect(cx - bwd * 0.42, top + bh * 0.82, bwd * 0.84, bd * 0.42, 4);
ctx.fill();
// brilho vestido
ctx.fillStyle = ‘rgba(255,255,255,0.18)’;
ctx.beginPath();
ctx.ellipse(cx - bwd * 0.18, top + bh * 0.85 + bd * 0.3, bwd * 0.08, bd * 0.14, -0.5, 0, Math.PI * 2);
ctx.fill();
// gola
ctx.fillStyle = shadeColor(hairColor, 20);
ctx.beginPath();
ctx.moveTo(cx - bwd * 0.3, top + bh * 0.85);
ctx.quadraticCurveTo(cx, top + bh * 0.85 + bd * 0.15, cx + bwd * 0.3, top + bh * 0.85);
ctx.closePath();
ctx.fill();

// ── PESCOCO ──
ctx.fillStyle = skinColor;
ctx.beginPath();
ctx.roundRect(cx - bwd * 0.13, top + bh * 0.78, bwd * 0.26, bh * 0.2, 4);
ctx.fill();

// ── PERNAS ──
ctx.fillStyle = skinColor;
ctx.beginPath(); ctx.roundRect(cx - bwd * 0.3, top + bh * 0.85 + bd, legW, legH, legW * 0.3); ctx.fill();
ctx.beginPath(); ctx.roundRect(cx + bwd * 0.3 - legW, top + bh * 0.85 + bd, legW, legH, legW * 0.3); ctx.fill();
// sapatos
ctx.fillStyle = shoeColor;
ctx.beginPath(); ctx.ellipse(cx - bwd * 0.3 + legW * 0.5, top + bh * 0.85 + bd + legH + shoeH * 0.5, legW * 0.7, shoeH, 0.1, 0, Math.PI * 2); ctx.fill();
ctx.beginPath(); ctx.ellipse(cx + bwd * 0.3 - legW * 0.5, top + bh * 0.85 + bd + legH + shoeH * 0.5, legW * 0.7, shoeH, -0.1, 0, Math.PI * 2); ctx.fill();

// ── CABECA ──
ctx.fillStyle = skinColor;
ctx.beginPath();
ctx.roundRect(cx - bw * 0.5, top, bw, bh, bw * 0.22);
ctx.fill();
// brilho rosto
ctx.fillStyle = ‘rgba(255,255,255,0.12)’;
ctx.beginPath(); ctx.ellipse(cx - bw * 0.12, top + bh * 0.28, bw * 0.16, bh * 0.12, -0.4, 0, Math.PI * 2); ctx.fill();

// ── OLHOS ──
var eyeY = top + bh * 0.46;
var eyeR = bh * 0.1;
// branco
ctx.fillStyle = ‘#ffffff’;
ctx.beginPath(); ctx.ellipse(cx - bw * 0.22, eyeY, eyeR * 0.8, eyeR, 0, 0, Math.PI * 2); ctx.fill();
ctx.beginPath(); ctx.ellipse(cx + bw * 0.22, eyeY, eyeR * 0.8, eyeR, 0, 0, Math.PI * 2); ctx.fill();
// iris
ctx.fillStyle = hairColor;
ctx.beginPath(); ctx.arc(cx - bw * 0.22, eyeY, eyeR * 0.62, 0, Math.PI * 2); ctx.fill();
ctx.beginPath(); ctx.arc(cx + bw * 0.22, eyeY, eyeR * 0.62, 0, Math.PI * 2); ctx.fill();
// pupila
ctx.fillStyle = ‘#1a0a00’;
ctx.beginPath(); ctx.arc(cx - bw * 0.21, eyeY, eyeR * 0.3, 0, Math.PI * 2); ctx.fill();
ctx.beginPath(); ctx.arc(cx + bw * 0.23, eyeY, eyeR * 0.3, 0, Math.PI * 2); ctx.fill();
// brilho olho
ctx.fillStyle = ‘#ffffff’;
ctx.beginPath(); ctx.arc(cx - bw * 0.19, eyeY - eyeR * 0.2, eyeR * 0.16, 0, Math.PI * 2); ctx.fill();
ctx.beginPath(); ctx.arc(cx + bw * 0.25, eyeY - eyeR * 0.2, eyeR * 0.16, 0, Math.PI * 2); ctx.fill();
// cilios
ctx.strokeStyle = ‘#3d1a00’; ctx.lineWidth = bh * 0.018;
[-0.38, -0.22, -0.06].forEach(function (ox) {
ctx.beginPath(); ctx.moveTo(cx + ox * bw, eyeY - eyeR * 0.95); ctx.lineTo(cx + ox * bw - bw * 0.015, eyeY - eyeR * 1.45); ctx.stroke();
});
[0.06, 0.22, 0.38].forEach(function (ox) {
ctx.beginPath(); ctx.moveTo(cx + ox * bw, eyeY - eyeR * 0.95); ctx.lineTo(cx + ox * bw + bw * 0.015, eyeY - eyeR * 1.45); ctx.stroke();
});

// ── BOCHECHAS ──
ctx.fillStyle = ‘rgba(255,160,160,0.38)’;
ctx.beginPath(); ctx.ellipse(cx - bw * 0.38, top + bh * 0.62, bw * 0.13, bh * 0.07, 0, 0, Math.PI * 2); ctx.fill();
ctx.beginPath(); ctx.ellipse(cx + bw * 0.38, top + bh * 0.62, bw * 0.13, bh * 0.07, 0, 0, Math.PI * 2); ctx.fill();

// ── SORRISO ──
ctx.strokeStyle = ‘#c0604a’; ctx.lineWidth = bh * 0.022; ctx.lineCap = ‘round’;
ctx.beginPath();
ctx.moveTo(cx - bw * 0.18, top + bh * 0.72);
ctx.quadraticCurveTo(cx, top + bh * 0.82, cx + bw * 0.18, top + bh * 0.72);
ctx.stroke();

// ── NARIZ ──
ctx.strokeStyle = ‘#c8956a’; ctx.lineWidth = bh * 0.015;
ctx.beginPath(); ctx.arc(cx, top + bh * 0.6, bw * 0.06, 0.2, Math.PI - 0.2); ctx.stroke();

// ── CABELO FRENTE ──
ctx.fillStyle = hairColor;
ctx.beginPath();
ctx.ellipse(cx, top + bh * 0.08, bw * 0.52, bh * 0.22, 0, 0, Math.PI * 2);
ctx.fill();
ctx.beginPath();
ctx.moveTo(cx - bw * 0.5, top + bh * 0.32);
ctx.quadraticCurveTo(cx - bw * 0.28, top - bh * 0.04, cx, top + bh * 0.18);
ctx.quadraticCurveTo(cx + bw * 0.28, top - bh * 0.04, cx + bw * 0.5, top + bh * 0.32);
ctx.fill();

// ── COROA ──
var crownY = top - bh * 0.12;
ctx.fillStyle = ‘#ffd700’;
ctx.beginPath();
ctx.moveTo(cx - bw * 0.42, crownY + bh * 0.12);
ctx.lineTo(cx - bw * 0.42, crownY);
ctx.lineTo(cx - bw * 0.22, crownY + bh * 0.1);
ctx.lineTo(cx,              crownY - bh * 0.06);
ctx.lineTo(cx + bw * 0.22, crownY + bh * 0.1);
ctx.lineTo(cx + bw * 0.42, crownY);
ctx.lineTo(cx + bw * 0.42, crownY + bh * 0.12);
ctx.closePath();
ctx.fill();
// joias
ctx.fillStyle = shoeColor;
ctx.beginPath(); ctx.arc(cx,            crownY,            bw * 0.06,  0, Math.PI * 2); ctx.fill();
ctx.fillStyle = shadeColor(shoeColor, 40);
ctx.beginPath(); ctx.arc(cx - bw * 0.28, crownY + bh * 0.06, bw * 0.045, 0, Math.PI * 2); ctx.fill();
ctx.beginPath(); ctx.arc(cx + bw * 0.28, crownY + bh * 0.06, bw * 0.045, 0, Math.PI * 2); ctx.fill();
}

// ═══════════════════════════════════════════════════
//  AVATAR / CUSTOMIZACAO
//  BUG CORRIGIDO: verifica se curChar existe antes de usar
// ═══════════════════════════════════════════════════
function buildCustom() {
if (!curChar) return;
var cvs = document.getElementById(‘custom-canvas’);
if (!cvs) return;
drawPrincess(cvs, curChar, 1);
var nm = document.getElementById(‘custom-char-name’);
var jb = document.getElementById(‘custom-char-job’);
if (nm) nm.textContent = curChar.name;
if (jb) jb.textContent = curChar.job;
buildSwatches(‘hair-swatches’,   HAIR_COLORS,   ‘hair’);
buildSwatches(‘outfit-swatches’, OUTFIT_COLORS, ‘outfit’);
buildSwatches(‘shoe-swatches’,   SHOE_COLORS,   ‘shoe’);
buildJobBtns();
}

function buildSwatches(id, colors, prop) {
if (!curChar) return;
var row = document.getElementById(id);
if (!row) return;
row.innerHTML = ‘’;
colors.forEach(function (c) {
var sw = document.createElement(‘div’);
sw.className = ‘swatch’ + (curChar[prop] === c ? ’ active’ : ‘’);
sw.style.background = c;
sw.addEventListener(‘click’, function () {
curChar[prop] = c;
row.querySelectorAll(’.swatch’).forEach(function (s) { s.classList.remove(‘active’); });
sw.classList.add(‘active’);
var cvs = document.getElementById(‘custom-canvas’);
if (cvs) drawPrincess(cvs, curChar, 1);
playClick();
});
row.appendChild(sw);
});
}

function buildJobBtns() {
if (!curChar) return;
var row = document.getElementById(‘job-buttons’);
if (!row) return;
row.innerHTML = ‘’;
JOBS.forEach(function (j) {
var btn = document.createElement(‘button’);
btn.className = ‘job-btn’ + (curChar.job === j ? ’ active’ : ‘’);
btn.textContent = j;
btn.addEventListener(‘click’, function () {
curChar.job = j;
row.querySelectorAll(’.job-btn’).forEach(function (b) { b.classList.remove(‘active’); });
btn.classList.add(‘active’);
var jbEl = document.getElementById(‘custom-char-job’);
if (jbEl) jbEl.textContent = j;
playClick();
});
row.appendChild(btn);
});
}

function saveCustom() {
playSuccess();
var msgs = { pt: ‘Look salvo!’, en: ‘Look saved!’, es: ‘Look guardado!’ };
showToast(msgs[curLang] || msgs.pt);
buildMenuHeader();
}

// ═══════════════════════════════════════════════════
//  JOGO DA MEMORIA
//  BUG CORRIGIDO: flipMemCard usava `this` incorreto;
//  agora usa closure correta.
// ═══════════════════════════════════════════════════
var memState = {
cards: [], flipped: [], matched: 0, moves: 0,
timer: 0, interval: null, locked: false, total: 0
};

function stopMemory() {
clearInterval(memState.interval);
memState.interval = null;
}

function startMemory(pairs) {
stopMemory();
memState.matched = 0; memState.moves = 0; memState.timer = 0;
memState.locked = false; memState.flipped = []; memState.total = pairs;

var diff = document.getElementById(‘memory-diff-row’);
var stats= document.getElementById(‘memory-stats’);
var win  = document.getElementById(‘memory-win’);
if (diff)  diff.classList.add(‘hidden’);
if (stats) stats.classList.remove(‘hidden’);
if (win)   win.classList.add(‘hidden’);

var elTimer = document.getElementById(‘mem-timer’);
var elPairs = document.getElementById(‘mem-pairs’);
var elMoves = document.getElementById(‘mem-moves’);
if (elTimer) elTimer.textContent = ‘0’;
if (elPairs) elPairs.textContent = ‘0’;
if (elMoves) elMoves.textContent = ‘0’;

var pool   = MEMORY_CARDS.slice(0, pairs);
var deck   = pool.concat(pool).sort(function () { return Math.random() - 0.5; });
var cols   = pairs <= 4 ? 4 : pairs <= 8 ? 4 : 6;
var cardSz = pairs <= 4 ? ‘80px’ : pairs <= 8 ? ‘70px’ : ‘55px’;
var grid   = document.getElementById(‘memory-grid’);
if (!grid) return;
grid.style.gridTemplateColumns = ‘repeat(’ + cols + ’, ’ + cardSz + ‘)’;
grid.innerHTML = ‘’;
memState.cards = [];

deck.forEach(function (cardData, i) {
var card = document.createElement(‘div’);
card.className = ‘mem-card’;
card.style.width  = cardSz;
card.style.height = cardSz;
card.innerHTML =
‘<div class="mem-front" style="background:linear-gradient(135deg,#5a0099,#c2006e);">’ +
‘<img src="https://cdn-icons-png.flaticon.com/512/616/616490.png" style="width:55%;height:55%;object-fit:contain;opacity:0.5;">’ +
‘</div>’ +
‘<div class="mem-back"><img class="mem-front-img" src="' + cardData.img + '" alt="' + cardData.label + '"></div>’;

```
// BUG FIX: usa IIFE para capturar i e cardData corretos no closure
(function (idx, data, cardEl) {
  cardEl.addEventListener('click', function () {
    flipMemCard(cardEl, idx, data);
  });
}(i, cardData, card));

grid.appendChild(card);
memState.cards.push({ el: card, data: cardData, matched: false });
```

});

memState.interval = setInterval(function () {
memState.timer++;
var t = document.getElementById(‘mem-timer’);
if (t) t.textContent = memState.timer;
}, 1000);
}

function flipMemCard(el, idx, data) {
var s = memState;
if (s.locked) return;
if (!s.cards[idx] || s.cards[idx].matched) return;
if (s.flipped.some(function (f) { return f.idx === idx; })) return;

el.classList.add(‘flipped’);
playCardFlip();
s.flipped.push({ idx: idx, data: data, el: el });

if (s.flipped.length === 2) {
s.locked = true;
s.moves++;
var elMoves = document.getElementById(‘mem-moves’);
if (elMoves) elMoves.textContent = s.moves;

```
var a = s.flipped[0], b = s.flipped[1];
if (a.data.label === b.data.label) {
  // Par encontrado
  s.matched++;
  var elPairs = document.getElementById('mem-pairs');
  if (elPairs) elPairs.textContent = s.matched;
  a.el.classList.add('matched');
  b.el.classList.add('matched');
  s.cards[a.idx].matched = true;
  s.cards[b.idx].matched = true;
  s.flipped = [];
  s.locked  = false;
  playMatch();
  if (s.matched === s.total) memoryWin();
} else {
  // Nao e par: vira de volta apos 900ms
  setTimeout(function () {
    a.el.classList.remove('flipped');
    b.el.classList.remove('flipped');
    s.flipped = [];
    s.locked  = false;
    playError();
  }, 900);
}
```

}
}

function memoryWin() {
stopMemory();
var win = document.getElementById(‘memory-win’);
var msg = document.getElementById(‘mem-win-msg’);
if (msg) {
var txt = curLang === ‘pt’
? ’Parabens! Concluido em ’ + memState.timer + ‘s com ’ + memState.moves + ’ jogadas!’
: curLang === ‘en’
? ’Congrats! Done in ’ + memState.timer + ‘s with ’ + memState.moves + ’ moves!’
: ’Felicitaciones! En ’ + memState.timer + ‘s con ’ + memState.moves + ’ jugadas!’;
msg.textContent = txt;
}
if (win) win.classList.remove(‘hidden’);
playSuccess();
setTimeout(playSuccess, 400);
}

// ═══════════════════════════════════════════════════
//  CORRIDA (ENDLESS RUNNER)
//  BUGS CORRIGIDOS:
//  1. stopRace verifica se canvas existe antes de removeEventListener
//  2. raceOver cancela o RAF
//  3. raceKey referencia correta para removeEventListener
//  4. Listeners nao se acumulam em reinicio
// ═══════════════════════════════════════════════════
var raceState = {
running: false, score: 0, lives: 3, speed: 3,
frame: 0, raf: null, groundY: 0,
player: { x: 80, y: 0, w: 36, h: 52, vy: 0, grounded: true },
obstacles: [], clouds: [], coins: [],
obsImages: {}, dollImage: null
};

// Referencia global para que removeEventListener funcione
function raceKey(e) {
if (e.code === ‘Space’ || e.code === ‘ArrowUp’) {
e.preventDefault();
raceJump();
}
}
function raceCanvasClick() { raceJump(); }
function raceCanvasTouch() { raceJump(); }

function initRaceImages() {
RACE_OBSTACLES.forEach(function (o, i) {
var img = new Image();
img.src = o.icon;
raceState.obsImages[i] = img;
});
// Imagem da princesa gerada em canvas off-screen
var offCvs = document.createElement(‘canvas’);
offCvs.width = 80; offCvs.height = 120;
if (curChar) drawPrincess(offCvs, curChar, 1);
var img2 = new Image();
img2.src = offCvs.toDataURL();
raceState.dollImage = img2;
}

function startRace() {
// Remove listeners antigos antes de adicionar novos (evita duplicatas)
stopRace();

document.getElementById(‘race-overlay’).classList.add(‘hidden’);
document.getElementById(‘race-over’).classList.add(‘hidden’);

var isMobile = window.innerWidth <= 700 || (‘ontouchstart’ in window);
var jb = document.getElementById(‘race-jump-btn’);
if (jb) { if (isMobile) jb.classList.remove(‘hidden’); else jb.classList.add(‘hidden’); }

var cvs = document.getElementById(‘race-canvas’);
cvs.width  = window.innerWidth;
cvs.height = window.innerHeight;
raceState.groundY         = cvs.height - 70;
raceState.player.y        = raceState.groundY - raceState.player.h;
raceState.player.vy       = 0;
raceState.player.grounded = true;
raceState.running  = true;
raceState.score    = 0;
raceState.lives    = 3;
raceState.speed    = 3;
raceState.frame    = 0;
raceState.obstacles= [];
raceState.clouds   = [];
raceState.coins    = [];

var elScore = document.getElementById(‘race-score’);
var elLives = document.getElementById(‘race-lives’);
if (elScore) elScore.textContent = ‘0’;
if (elLives) elLives.textContent = ‘3’;

initRaceImages();

cvs.addEventListener(‘click’,      raceCanvasClick);
cvs.addEventListener(‘touchstart’, raceCanvasTouch, { passive: true });
document.addEventListener(‘keydown’, raceKey);

raceLoop();
}

function raceJump() {
if (!raceState.running) return;
if (!raceState.player.grounded) return;
raceState.player.vy       = -15;
raceState.player.grounded = false;
playJump();
}

function stopRace() {
raceState.running = false;
if (raceState.raf) {
cancelAnimationFrame(raceState.raf);
raceState.raf = null;
}
// Remove listeners com seguranca
var cvs = document.getElementById(‘race-canvas’);
if (cvs) {
cvs.removeEventListener(‘click’,      raceCanvasClick);
cvs.removeEventListener(‘touchstart’, raceCanvasTouch);
}
document.removeEventListener(‘keydown’, raceKey);
var jb = document.getElementById(‘race-jump-btn’);
if (jb) jb.classList.add(‘hidden’);
}

function raceLoop() {
if (!raceState.running) return;
updateRace();
drawRace();
raceState.raf = requestAnimationFrame(raceLoop);
}

function updateRace() {
var s   = raceState;
var cvs = document.getElementById(‘race-canvas’);
if (!cvs || !s.running) return;

s.frame++;
s.score++;
s.speed = 3 + Math.floor(s.score / 400) * 0.6;

var elScore = document.getElementById(‘race-score’);
if (elScore) elScore.textContent = s.score;

// Fisica
s.player.vy += 0.72;
s.player.y  += s.player.vy;
if (s.player.y >= s.groundY - s.player.h) {
s.player.y        = s.groundY - s.player.h;
s.player.vy       = 0;
s.player.grounded = true;
}

// Obstaculos
var spawnInterval = Math.max(50, 110 - Math.floor(s.score / 300) * 5);
if (s.frame % spawnInterval === 0) {
var type  = Math.floor(Math.random() * RACE_OBSTACLES.length);
var sizes = [{ w: 34, h: 50 }, { w: 50, h: 40 }, { w: 40, h: 46 }, { w: 36, h: 48 }];
var sz    = sizes[type] || sizes[0];
s.obstacles.push({ x: cvs.width + 50, y: s.groundY - sz.h, w: sz.w, h: sz.h, type: type });
}

// Moedas
if (s.frame % 80 === 0) {
var coinY = s.groundY - s.player.h - 30 - Math.random() * 80;
s.coins.push({ x: cvs.width + 20, y: coinY, r: 12, collected: false });
}

// Nuvens
if (s.frame % 120 === 0) {
s.clouds.push({ x: cvs.width + 60, y: 20 + Math.random() * cvs.height * 0.4, w: 80 + Math.random() * 60 });
}

// Move objetos
s.obstacles.forEach(function (o) { o.x -= s.speed; });
s.coins.forEach(function (c)     { c.x -= s.speed * 0.9; });
s.clouds.forEach(function (cl)   { cl.x -= s.speed * 0.25; });
s.obstacles = s.obstacles.filter(function (o)  { return o.x + o.w > -10; });
s.coins     = s.coins.filter(function (c)      { return c.x > -20; });
s.clouds    = s.clouds.filter(function (cl)    { return cl.x + cl.w > -10; });

// Colisao moedas
var p = s.player;
s.coins.forEach(function (c) {
if (!c.collected &&
p.x + p.w > c.x - c.r && p.x < c.x + c.r &&
p.y + p.h > c.y - c.r && p.y < c.y + c.r) {
c.collected = true;
s.score += 10;
playCoin();
}
});

// Colisao obstaculos
s.obstacles.forEach(function (o) {
if (p.x + p.w - 8 > o.x + 6 && p.x + 8 < o.x + o.w - 6 &&
p.y + p.h - 6 > o.y      && p.y + 6 < o.y + o.h) {
o.x = -9999;
s.lives–;
var elLives = document.getElementById(‘race-lives’);
if (elLives) elLives.textContent = s.lives;
playHit();
if (s.lives <= 0) raceOver();
}
});
}

function drawRace() {
var s   = raceState;
var cvs = document.getElementById(‘race-canvas’);
if (!cvs) return;
var ctx = cvs.getContext(‘2d’);
var cw  = cvs.width, ch = cvs.height;

// Ceu
var sky = ctx.createLinearGradient(0, 0, 0, ch);
sky.addColorStop(0,    ‘#0a0318’);
sky.addColorStop(0.65, ‘#1a0a35’);
sky.addColorStop(1,    ‘#2a1050’);
ctx.fillStyle = sky; ctx.fillRect(0, 0, cw, ch);

// Estrelas
ctx.fillStyle = ‘rgba(255,255,255,0.45)’;
for (var i = 0; i < 30; i++) {
var sx = (i * 139 + s.frame * 0.15) % cw;
var sy = (i * 83) % (ch * 0.6);
ctx.fillRect(sx, sy, i % 3 === 0 ? 2 : 1, i % 3 === 0 ? 2 : 1);
}

// Nuvens
ctx.fillStyle = ‘rgba(255,255,255,0.07)’;
s.clouds.forEach(function (cl) {
ctx.beginPath(); ctx.ellipse(cl.x, cl.y, cl.w / 2, 18, 0, 0, Math.PI * 2); ctx.fill();
});

// Chao
ctx.fillStyle = ‘#14082a’;
ctx.fillRect(0, s.groundY, cw, ch - s.groundY);
// Linha do chao colorida
var grad = ctx.createLinearGradient(0, s.groundY, cw, s.groundY);
grad.addColorStop(0, ‘#c77dff’); grad.addColorStop(0.5, ‘#ff4fa3’); grad.addColorStop(1, ‘#c77dff’);
ctx.fillStyle = grad; ctx.fillRect(0, s.groundY, cw, 4);
// Tracejado no chao
ctx.fillStyle = ‘rgba(155,46,255,0.35)’;
for (var lx = (-(s.frame * s.speed)) % 70; lx < cw; lx += 70) {
ctx.fillRect(lx, s.groundY + 6, 38, 3);
}

// Moedas
s.coins.forEach(function (c) {
if (c.collected) return;
ctx.save();
ctx.fillStyle = ‘#ffd700’;
ctx.strokeStyle = ‘#b8860b’; ctx.lineWidth = 2;
ctx.beginPath(); ctx.arc(c.x, c.y, c.r, 0, Math.PI * 2);
ctx.fill(); ctx.stroke();
ctx.fillStyle = ‘rgba(255,255,255,0.5)’;
ctx.font = ‘bold 11px sans-serif’; ctx.textAlign = ‘center’; ctx.textBaseline = ‘middle’;
ctx.fillText(’$’, c.x, c.y);
ctx.restore();
});

// Obstaculos
s.obstacles.forEach(function (o) {
var img = s.obsImages[o.type];
if (img && img.complete && img.naturalWidth > 0) {
ctx.drawImage(img, o.x, o.y, o.w, o.h);
} else {
ctx.fillStyle = ‘#ff4fa3’; ctx.fillRect(o.x, o.y, o.w, o.h);
}
});

// Sombra do jogador
var sh = ctx.createRadialGradient(
s.player.x + s.player.w / 2, s.groundY, 2,
s.player.x + s.player.w / 2, s.groundY, 22
);
sh.addColorStop(0, ‘rgba(0,0,0,0.3)’); sh.addColorStop(1, ‘rgba(0,0,0,0)’);
ctx.fillStyle = sh;
ctx.beginPath(); ctx.ellipse(s.player.x + s.player.w / 2, s.groundY + 4, 22, 6, 0, 0, Math.PI * 2); ctx.fill();

// Jogador (princesa)
if (s.dollImage && s.dollImage.complete && s.dollImage.naturalWidth > 0) {
ctx.drawImage(s.dollImage, s.player.x, s.player.y, s.player.w, s.player.h);
} else {
ctx.fillStyle = (curChar && curChar.outfit) || ‘#ff6eb4’;
ctx.fillRect(s.player.x, s.player.y, s.player.w, s.player.h);
}
}

function raceOver() {
// BUG FIX: cancela RAF imediatamente
raceState.running = false;
if (raceState.raf) { cancelAnimationFrame(raceState.raf); raceState.raf = null; }
document.removeEventListener(‘keydown’, raceKey);

var over = document.getElementById(‘race-over’);
var msg  = document.getElementById(‘race-final-msg’);
if (msg) {
msg.textContent = (curLang === ‘pt’ ? ’Pontuacao final: ’ : ’Final score: ’) + raceState.score;
}
if (over) over.classList.remove(‘hidden’);
playGameOver();
}

// ═══════════════════════════════════════════════════
//  COBRINHA
//  BUG CORRIGIDO:
//  1. snakeKey usando referencia global para removeEventListener
//  2. stopSnake remove listener corretamente
//  3. Reinicio limpa estado completamente
// ═══════════════════════════════════════════════════
var snakeState = {
running: false, raf: null, interval: null,
score: 0, best: 0, size: 20,
snake: [], dir: { x: 1, y: 0 }, nextDir: { x: 1, y: 0 },
food: { x: 10, y: 10 }, cols: 0, rows: 0
};

// Referencia global para removeEventListener
function snakeKey(e) {
var map = { ArrowUp: [0, -1], ArrowDown: [0, 1], ArrowLeft: [-1, 0], ArrowRight: [1, 0] };
if (map[e.code]) {
e.preventDefault();
snakeDir(map[e.code][0], map[e.code][1]);
}
}

function stopSnake() {
snakeState.running = false;
clearInterval(snakeState.interval);
snakeState.interval = null;
if (snakeState.raf) { cancelAnimationFrame(snakeState.raf); snakeState.raf = null; }
document.removeEventListener(‘keydown’, snakeKey);
}

function startSnake() {
stopSnake(); // garante que estado anterior foi limpo

var overlayEl = document.getElementById(‘snake-overlay’);
var overEl    = document.getElementById(‘snake-over’);
if (overlayEl) overlayEl.classList.add(‘hidden’);
if (overEl)    overEl.classList.add(‘hidden’);

var cvs = document.getElementById(‘snake-canvas’);
if (!cvs) return;
cvs.width  = window.innerWidth;
cvs.height = window.innerHeight;

var s  = snakeState;
var sz = s.size;
s.cols = Math.max(10, Math.floor(cvs.width / sz));
s.rows = Math.max(10, Math.floor((cvs.height - 90) / sz));

s.running  = true;
s.score    = 0;
s.dir      = { x: 1, y: 0 };
s.nextDir  = { x: 1, y: 0 };
s.snake    = [
{ x: 6, y: Math.floor(s.rows / 2) },
{ x: 5, y: Math.floor(s.rows / 2) },
{ x: 4, y: Math.floor(s.rows / 2) }
];

var elScore = document.getElementById(‘snake-score’);
if (elScore) elScore.textContent = ‘0’;

placeSnakeFood();
document.addEventListener(‘keydown’, snakeKey);

s.interval = setInterval(snakeStep, 130);
snakeDrawLoop();
}

function snakeDir(dx, dy) {
var s = snakeState;
// Impede direcao oposta
if (s.dir.x !== -dx || s.dir.y !== -dy) {
s.nextDir = { x: dx, y: dy };
}
}

function placeSnakeFood() {
var s = snakeState;
var fx, fy, ok, tries = 0;
do {
fx = Math.floor(Math.random() * s.cols);
fy = Math.floor(Math.random() * s.rows);
ok = !s.snake.some(function (seg) { return seg.x === fx && seg.y === fy; });
tries++;
} while (!ok && tries < 200);
s.food = { x: fx, y: fy };
}

function snakeStep() {
var s = snakeState;
if (!s.running) return;

s.dir = s.nextDir;
var head = {
x: (s.snake[0].x + s.dir.x + s.cols) % s.cols,
y: (s.snake[0].y + s.dir.y + s.rows) % s.rows
};

// Colisao consigo mesmo
if (s.snake.some(function (seg) { return seg.x === head.x && seg.y === head.y; })) {
snakeOver();
return;
}

s.snake.unshift(head);

if (head.x === s.food.x && head.y === s.food.y) {
s.score += 10;
var elScore = document.getElementById(‘snake-score’);
if (elScore) elScore.textContent = s.score;
if (s.score > s.best) {
s.best = s.score;
var elBest = document.getElementById(‘snake-best’);
if (elBest) elBest.textContent = s.best;
}
placeSnakeFood();
playEat();
} else {
s.snake.pop();
}
}

function snakeDrawLoop() {
if (!snakeState.running) return;
drawSnake();
snakeState.raf = requestAnimationFrame(snakeDrawLoop);
}

function drawSnake() {
var s   = snakeState;
var cvs = document.getElementById(‘snake-canvas’);
if (!cvs) return;
var ctx = cvs.getContext(‘2d’);
var cw  = cvs.width, ch = cvs.height;
var sz  = s.size;
var offsetY = 80; // abaixo do HUD

// Fundo
var bg = ctx.createLinearGradient(0, 0, 0, ch);
bg.addColorStop(0, ‘#0a0318’); bg.addColorStop(1, ‘#14082a’);
ctx.fillStyle = bg; ctx.fillRect(0, 0, cw, ch);

// Grade sutil
ctx.strokeStyle = ‘rgba(155,46,255,0.06)’; ctx.lineWidth = 0.5;
for (var gx = 0; gx <= s.cols; gx++) {
ctx.beginPath(); ctx.moveTo(gx * sz, offsetY); ctx.lineTo(gx * sz, offsetY + s.rows * sz); ctx.stroke();
}
for (var gy = 0; gy <= s.rows; gy++) {
ctx.beginPath(); ctx.moveTo(0, offsetY + gy * sz); ctx.lineTo(cw, offsetY + gy * sz); ctx.stroke();
}

// Comida (estrela dourada)
var fx = s.food.x * sz + sz / 2;
var fy = offsetY + s.food.y * sz + sz / 2;
var foodGrad = ctx.createRadialGradient(fx, fy, 2, fx, fy, sz * 0.45);
foodGrad.addColorStop(0, ‘#ffd700’); foodGrad.addColorStop(1, ‘#b8860b’);
ctx.fillStyle = foodGrad;
ctx.beginPath(); ctx.arc(fx, fy, sz * 0.42, 0, Math.PI * 2); ctx.fill();
ctx.fillStyle = ‘rgba(255,255,255,0.5)’;
ctx.beginPath(); ctx.arc(fx - sz * 0.1, fy - sz * 0.1, sz * 0.1, 0, Math.PI * 2); ctx.fill();

// Corpo da cobra
s.snake.forEach(function (seg, i) {
var bx    = seg.x * sz;
var by    = offsetY + seg.y * sz;
var ratio = 1 - (i / Math.max(s.snake.length, 1)) * 0.4;
var alpha = 0.6 + ratio * 0.4;
ctx.fillStyle = i === 0 ? ‘#c77dff’ : ‘rgba(155,46,255,’ + alpha + ‘)’;
ctx.beginPath();
ctx.roundRect(bx + 1, by + 1, sz - 2, sz - 2, sz * 0.2);
ctx.fill();
// brilho
ctx.fillStyle = ‘rgba(255,255,255,0.15)’;
ctx.beginPath();
ctx.roundRect(bx + 3, by + 3, sz * 0.35, sz * 0.25, 3);
ctx.fill();
});

// Olhos da cabeca
if (s.snake.length > 0) {
var hd = s.snake[0];
var hx = hd.x * sz, hy = offsetY + hd.y * sz;
ctx.fillStyle = ‘#ffffff’;
ctx.beginPath(); ctx.arc(hx + sz * 0.28, hy + sz * 0.32, sz * 0.14, 0, Math.PI * 2); ctx.fill();
ctx.beginPath(); ctx.arc(hx + sz * 0.72, hy + sz * 0.32, sz * 0.14, 0, Math.PI * 2); ctx.fill();
ctx.fillStyle = ‘#2d1b00’;
ctx.beginPath(); ctx.arc(hx + sz * 0.3,  hy + sz * 0.33, sz * 0.08, 0, Math.PI * 2); ctx.fill();
ctx.beginPath(); ctx.arc(hx + sz * 0.7,  hy + sz * 0.33, sz * 0.08, 0, Math.PI * 2); ctx.fill();
}
}

function snakeOver() {
stopSnake();
var over = document.getElementById(‘snake-over’);
var msg  = document.getElementById(‘snake-final-msg’);
if (msg) {
msg.textContent = (curLang === ‘pt’ ? ’Pontuacao: ’ : ’Score: ’) + snakeState.score;
}
if (over) over.classList.remove(‘hidden’);
playGameOver();
}

// ═══════════════════════════════════════════════════
//  QUIZ EDUCATIVO
//  BUG CORRIGIDO: resetQuiz nao causa erro se paineis
//  nao existirem ainda; startQuiz verifica lang correta.
// ═══════════════════════════════════════════════════
var quizState = {
questions: [], current: 0, score: 0,
answered: false, difficulty: ‘easy’
};

function startQuiz(diff) {
quizState.difficulty = diff;

// Garante que o idioma e valido
var lang = (curLang && QUIZ_QUESTIONS[curLang]) ? curLang : ‘pt’;
var pool = QUIZ_QUESTIONS[lang][diff];
if (!pool || pool.length === 0) { console.warn(’[Quiz] Sem perguntas para’, lang, diff); return; }

quizState.questions = pool.slice().sort(function () { return Math.random() - 0.5; }).slice(0, 8);
quizState.current   = 0;
quizState.score     = 0;
quizState.answered  = false;

var startPanel  = document.getElementById(‘quiz-start-panel’);
var resultPanel = document.getElementById(‘quiz-result-panel’);
var playPanel   = document.getElementById(‘quiz-play-panel’);
if (startPanel)  startPanel.classList.add(‘hidden’);
if (resultPanel) resultPanel.classList.add(‘hidden’);
if (playPanel)   playPanel.classList.remove(‘hidden’);

showQuizQuestion();
}

function showQuizQuestion() {
var s     = quizState;
var q     = s.questions[s.current];
var total = s.questions.length;
if (!q) return;

var elCounter = document.getElementById(‘quiz-counter’);
var elScore   = document.getElementById(‘quiz-score-display’);
var elFill    = document.getElementById(‘quiz-progress-fill’);
var elQ       = document.getElementById(‘quiz-question’);
var elFb      = document.getElementById(‘quiz-feedback’);
var elOpts    = document.getElementById(‘quiz-options’);

if (elCounter) elCounter.textContent = (s.current + 1) + ‘/’ + total;
if (elScore)   elScore.textContent   = s.score + ’ pts’;
if (elFill)    elFill.style.width    = ((s.current / total) * 100) + ‘%’;
if (elQ)       elQ.textContent       = q.q;
if (elFb)      elFb.classList.add(‘hidden’);
s.answered = false;

if (!elOpts) return;
elOpts.innerHTML = ‘’;
q.opts.forEach(function (opt, i) {
var btn = document.createElement(‘button’);
btn.className   = ‘quiz-opt’;
btn.textContent = opt;
(function (idx, btnEl) {
btnEl.addEventListener(‘click’, function () { answerQuiz(idx, btnEl); });
}(i, btn));
elOpts.appendChild(btn);
});
}

function answerQuiz(idx, btn) {
if (quizState.answered) return;
quizState.answered = true;

var q   = quizState.questions[quizState.current];
var all = document.querySelectorAll(’.quiz-opt’);

if (idx === q.ans) {
btn.classList.add(‘correct’);
var pts = quizState.difficulty === ‘hard’ ? 30 : quizState.difficulty === ‘medium’ ? 20 : 10;
quizState.score += pts;
var elScore = document.getElementById(‘quiz-score-display’);
if (elScore) elScore.textContent = quizState.score + ’ pts’;
playCorrect();
} else {
btn.classList.add(‘wrong’);
if (all[q.ans]) all[q.ans].classList.add(‘correct’);
playWrong();
}

var fb = document.getElementById(‘quiz-feedback’);
if (fb) { fb.textContent = q.exp; fb.classList.remove(‘hidden’); }

setTimeout(function () {
quizState.current++;
if (quizState.current >= quizState.questions.length) {
quizEnd();
} else {
showQuizQuestion();
}
}, 2200);
}

function quizEnd() {
var playPanel   = document.getElementById(‘quiz-play-panel’);
var resultPanel = document.getElementById(‘quiz-result-panel’);
var elFill      = document.getElementById(‘quiz-progress-fill’);
if (playPanel)   playPanel.classList.add(‘hidden’);
if (resultPanel) resultPanel.classList.remove(‘hidden’);
if (elFill)      elFill.style.width = ‘100%’;

var total  = quizState.questions.length;
var maxPts = total * (quizState.difficulty === ‘hard’ ? 30 : quizState.difficulty === ‘medium’ ? 20 : 10);
var pct    = maxPts > 0 ? Math.round(quizState.score / maxPts * 100) : 0;
var medal  = pct >= 90 ? (curLang === ‘pt’ ? ‘Ouro’ : curLang === ‘es’ ? ‘Oro’ : ‘Gold’)
: pct >= 60 ? (curLang === ‘pt’ ? ‘Prata’: curLang === ‘es’ ? ‘Plata’: ‘Silver’)
:              (curLang === ‘pt’ ? ‘Bronze’:‘Bronze’);

var titulo = pct >= 80
? (curLang === ‘pt’ ? ‘Parabens!’ : curLang === ‘es’ ? ‘Felicitaciones!’ : ‘Congratulations!’)
: (curLang === ‘pt’ ? ‘Bom trabalho!’ : curLang === ‘es’ ? ‘Buen trabajo!’ : ‘Good job!’);

var descr = (curLang === ‘pt’ ? ’Voce fez ’ : curLang === ‘es’ ? ’Puntuacion: ’ : ’You scored ‘)
+ quizState.score + ’ / ’ + maxPts
+ ’ pts (’ + pct + ’%) — ’
+ (curLang === ‘pt’ ? ’Medal: ’ : curLang === ‘es’ ? ’Medalla: ’ : ’Medal: ’) + medal;

var elTitle = document.getElementById(‘quiz-result-title’);
var elMsg   = document.getElementById(‘quiz-result-msg’);
if (elTitle) elTitle.textContent = titulo;
if (elMsg)   elMsg.textContent   = descr;
playSuccess();
}

function resetQuiz() {
var startPanel  = document.getElementById(‘quiz-start-panel’);
var resultPanel = document.getElementById(‘quiz-result-panel’);
var playPanel   = document.getElementById(‘quiz-play-panel’);
if (startPanel)  startPanel.classList.remove(‘hidden’);
if (resultPanel) resultPanel.classList.add(‘hidden’);
if (playPanel)   playPanel.classList.add(‘hidden’);
}
‘use strict’;

// ═══════════════════════════════════════════════════
//  THREE.JS — EXPLORACAO DO CASTELO 3D
//
//  BUGS CORRIGIDOS:
//  1. groupPos: { x, z } (shorthand ES6) substituido por { x: x, z: z }
//  2. parseInt(hex,‘0x’) substituido por parseInt(hex.slice(1), 16)
//  3. ThreeExp.stop() agora nao quebra se chamado sem init
//  4. startExplore() garante reset completo antes de init
//  5. checkInteractions nunca exibe bubble quando sem objeto proximo
//  6. Colisao com castelo corrigida (valores precisos)
//  7. Camera lerp usa THREE.Vector3 sem criar objeto a cada frame
//  8. Resize listener nao se acumula entre sessoes
// ═══════════════════════════════════════════════════

var ThreeExp = {
renderer:     null,
scene:        null,
camera:       null,
clock:        null,
raf:          null,
running:      false,

// Personagem 3D
playerGroup:  null,
playerHead:   null,
armL: null, armR: null,
legL: null, legR: null,
skirt: null,

// Controles
keys: {},
dpad: {},

// Mundo
walls:   [],
objects: [],

// Animacoes
cameraAngle:    0,
cameraDistance: 7,
cameraHeight:   5,
spinAnim: false,
spinT:    0,
idleT:    0,

// Refs de objetos animados
waterMesh:     null,
unicornGroup:  null,
sparkles:      null,
sparklesPos:   null,
sparklesCount: 0,
pinkLight:     null,

// Camera lerp target (reutilizado para evitar GC)
_camTarget: null,

// Bubble timer
_popTimer: null,
_resizeHandler: null,
_mouseUpHandler: null,
_mouseMoveHandler: null,

// ─── INIT ────────────────────────────────────────
init: function () {
if (!window.THREE) {
console.warn(’[Explore] Three.js nao carregado. Verifique o CDN.’);
return;
}
var cvs = document.getElementById(‘three-canvas’);
if (!cvs) { console.warn(’[Explore] Canvas three-canvas nao encontrado.’); return; }

```
cvs.width  = window.innerWidth;
cvs.height = window.innerHeight;

// Renderer
this.renderer = new THREE.WebGLRenderer({ canvas: cvs, antialias: true });
this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
this.renderer.setSize(window.innerWidth, window.innerHeight);
this.renderer.shadowMap.enabled = true;
this.renderer.shadowMap.type    = THREE.PCFSoftShadowMap;
this.renderer.setClearColor(0x0a0318);

// Scene
this.scene = new THREE.Scene();
this.scene.fog = new THREE.Fog(0x0a0318, 30, 80);

// Camera
this.camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 200);
this.camera.position.set(0, this.cameraHeight, 10 + this.cameraDistance);

// Clock
this.clock = new THREE.Clock();

// Target de lerp (reutilizavel)
this._camTarget = new THREE.Vector3();

// Monta cena
this.buildLights();
this.buildWorld();
this.buildPlayer();
this.bindInput();

// Resize
var self = this;
this._resizeHandler = function () { self.onResize(); };
window.addEventListener('resize', this._resizeHandler);

this.running = true;
this.loop();
```

},

onResize: function () {
if (!this.renderer || !this.camera) return;
this.renderer.setSize(window.innerWidth, window.innerHeight);
this.camera.aspect = window.innerWidth / window.innerHeight;
this.camera.updateProjectionMatrix();
},

// ─── LUZES ───────────────────────────────────────
buildLights: function () {
var ambient = new THREE.AmbientLight(0x8844cc, 0.7);
this.scene.add(ambient);

```
var sun = new THREE.DirectionalLight(0xffd6ff, 1.2);
sun.position.set(10, 20, 10);
sun.castShadow = true;
sun.shadow.camera.near   = 0.5;
sun.shadow.camera.far    = 80;
sun.shadow.camera.left   = sun.shadow.camera.bottom = -30;
sun.shadow.camera.right  = sun.shadow.camera.top   = 30;
sun.shadow.mapSize.width = sun.shadow.mapSize.height = 1024;
this.scene.add(sun);

var pink = new THREE.PointLight(0xff4fa3, 1.5, 20);
pink.position.set(0, 6, 0);
this.scene.add(pink);
this.pinkLight = pink;

var purple = new THREE.PointLight(0x9b2eff, 1.2, 18);
purple.position.set(-8, 4, -8);
this.scene.add(purple);
```

},

// ─── MUNDO ───────────────────────────────────────
buildWorld: function () {
// Chao
var groundMesh = new THREE.Mesh(
new THREE.PlaneGeometry(80, 80),
new THREE.MeshLambertMaterial({ color: 0x1a4d1a })
);
groundMesh.rotation.x = -Math.PI / 2;
groundMesh.receiveShadow = true;
this.scene.add(groundMesh);

```
// Caminho de pedra
var pathMesh = new THREE.Mesh(
  new THREE.PlaneGeometry(4, 20),
  new THREE.MeshLambertMaterial({ color: 0x8b7355 })
);
pathMesh.rotation.x = -Math.PI / 2;
pathMesh.position.set(0, 0.01, 5);
this.scene.add(pathMesh);

this.makeCastle();
this.makeFountain(0, 8);
this.makeTree(-12, -5); this.makeTree(12, -5);
this.makeTree(-14,  8); this.makeTree(14,  8);
this.makeUnicorn(-8, 5);
this.makeSparkles();
this.makeFlowers(-5, 12);
this.makeFlowers( 5, 12);

// Paredes invisiveis de limite do mundo
this.addWall(0,  -22, 80, 1);
this.addWall(0,   22, 80, 1);
this.addWall(-22,  0,  1, 80);
this.addWall( 22,  0,  1, 80);
```

},

makeCastle: function () {
var castleMat  = new THREE.MeshPhongMaterial({ color: 0xd4c5b0, shininess: 30 });
var towerMat   = new THREE.MeshPhongMaterial({ color: 0xc2b39a, shininess: 30 });
var roofMat    = new THREE.MeshPhongMaterial({ color: 0x9b2eff, shininess: 60 });
var windowMat  = new THREE.MeshPhongMaterial({ color: 0x4488cc, emissive: 0x224488, shininess: 80 });
var doorMat    = new THREE.MeshPhongMaterial({ color: 0x3d2200 });
var self       = this;

```
// Corpo principal
var body = new THREE.Mesh(new THREE.BoxGeometry(14, 8, 7), castleMat);
body.position.set(0, 4, -10);
body.castShadow = body.receiveShadow = true;
this.scene.add(body);

// Ameias
for (var bx = -6; bx <= 6; bx += 2) {
  var bm = new THREE.Mesh(new THREE.BoxGeometry(0.9, 1, 0.9), towerMat);
  bm.position.set(bx, 8.5, -10);
  this.scene.add(bm);
}

// Torres (4 cantos)
[[-6, -10], [6, -10], [-6, -14], [6, -14]].forEach(function (tp) {
  var tower = new THREE.Mesh(new THREE.CylinderGeometry(1.6, 1.8, 10, 8), towerMat);
  tower.position.set(tp[0], 5, tp[1]);
  tower.castShadow = true;
  self.scene.add(tower);

  // Teto conico
  var cone = new THREE.Mesh(new THREE.ConeGeometry(2.2, 4, 8), roofMat);
  cone.position.set(tp[0], 12, tp[1]);
  self.scene.add(cone);

  // Bandeira
  var pole = new THREE.Mesh(
    new THREE.CylinderGeometry(0.05, 0.05, 2, 6),
    new THREE.MeshLambertMaterial({ color: 0x888888 })
  );
  pole.position.set(tp[0], 15, tp[1]);
  self.scene.add(pole);

  var flag = new THREE.Mesh(
    new THREE.PlaneGeometry(1.2, 0.7),
    new THREE.MeshLambertMaterial({ color: 0xff4fa3, side: THREE.DoubleSide })
  );
  flag.position.set(tp[0] + 0.6, 15.6, tp[1]);
  self.scene.add(flag);
});

// Janelas
[[-4, 5, -6.5], [-1.5, 5, -6.5], [1.5, 5, -6.5], [4, 5, -6.5],
 [-4, 3, -6.5], [4, 3, -6.5]].forEach(function (wp) {
  var win = new THREE.Mesh(new THREE.BoxGeometry(1.2, 1.8, 0.2), windowMat);
  win.position.set(wp[0], wp[1], wp[2]);
  self.scene.add(win);
});

// Porta (interativa)
var door = new THREE.Mesh(new THREE.BoxGeometry(2, 3, 0.2), doorMat);
door.position.set(0, 1.5, -6.4);
this.scene.add(door);
this.objects.push({
  mesh: door,
  // BUG FIX: sem shorthand ES6 {x, z}
  groupPos: { x: 0, z: -6.4 },
  range: 3.5,
  msg: {
    pt: 'Bem-vinda ao Salao de Dancas! A musica te espera!',
    en: 'Welcome to the Ballroom! Music awaits!',
    es: 'Bienvenida al Salon de Baile! La musica te espera!'
  }
});

// Colisao do corpo do castelo
this.addWall(0, -10, 16, 9);
```

},

makeFountain: function (x, z) {
var stoneMat = new THREE.MeshPhongMaterial({ color: 0xb0c8e0, shininess: 40 });
var waterMat = new THREE.MeshPhongMaterial({ color: 0x40b0ff, transparent: true, opacity: 0.75, shininess: 100 });

```
var base = new THREE.Mesh(new THREE.CylinderGeometry(2.5, 2.8, 0.4, 16), stoneMat);
base.position.set(x, 0.2, z);
base.castShadow = true;
this.scene.add(base);

var basin = new THREE.Mesh(new THREE.CylinderGeometry(2.0, 2.0, 0.8, 16, 1, true), stoneMat);
basin.position.set(x, 0.6, z);
this.scene.add(basin);

var water = new THREE.Mesh(new THREE.CylinderGeometry(1.7, 1.7, 0.1, 16), waterMat);
water.position.set(x, 0.95, z);
this.scene.add(water);
this.waterMesh = water;

var pole = new THREE.Mesh(
  new THREE.CylinderGeometry(0.12, 0.12, 2, 8),
  new THREE.MeshPhongMaterial({ color: 0xc0c0c0 })
);
pole.position.set(x, 1.8, z);
this.scene.add(pole);

var top = new THREE.Mesh(new THREE.SphereGeometry(0.3, 8, 8), stoneMat);
top.position.set(x, 3, z);
this.scene.add(top);

// BUG FIX: { x: x, z: z } em vez de shorthand { x, z }
this.objects.push({
  mesh: base,
  groupPos: { x: x, z: z },
  range: 3.2,
  msg: {
    pt: 'Que chafariz lindo! Momento de descanso...',
    en: 'What a beautiful fountain! Time to rest...',
    es: 'Que fuente tan bonita! Momento de descanso...'
  }
});
```

},

makeTree: function (x, z) {
var trunkMat = new THREE.MeshLambertMaterial({ color: 0x6b4226 });
var leafMat  = new THREE.MeshLambertMaterial({ color: 0x228b22 });

```
var trunk = new THREE.Mesh(new THREE.CylinderGeometry(0.2, 0.3, 2, 8), trunkMat);
trunk.position.set(x, 1, z);
trunk.castShadow = true;
this.scene.add(trunk);

var leaves = new THREE.Mesh(new THREE.SphereGeometry(1.4, 8, 8), leafMat);
leaves.position.set(x, 3.2, z);
leaves.castShadow = true;
this.scene.add(leaves);

// Flores nas arvores
var bloom = new THREE.Mesh(
  new THREE.SphereGeometry(0.8, 6, 6),
  new THREE.MeshLambertMaterial({ color: 0xff69b4 })
);
bloom.position.set(x + 0.6, 3.8, z);
this.scene.add(bloom);
```

},

makeUnicorn: function (x, z) {
var bodyMat = new THREE.MeshPhongMaterial({ color: 0xffffff, shininess: 60 });
var hornMat = new THREE.MeshPhongMaterial({ color: 0xffd700, shininess: 80 });
var maneMat = new THREE.MeshPhongMaterial({ color: 0xff69b4, shininess: 40 });
var legMat  = new THREE.MeshPhongMaterial({ color: 0xf0f0f0 });
var self    = this;

```
var grp = new THREE.Group();

// Corpo
grp.add(this._mesh(new THREE.BoxGeometry(1.6, 1, 2.5),  bodyMat, 0, 1,   0));
// Cabeca
grp.add(this._mesh(new THREE.BoxGeometry(0.9, 0.9, 0.9), bodyMat, 0, 2, 1.1));
// Chifre
grp.add(this._mesh(new THREE.ConeGeometry(0.08, 0.7, 8), hornMat, 0, 2.82, 1.1));
// Crina
grp.add(this._mesh(new THREE.SphereGeometry(0.25, 6, 6), maneMat, 0, 2.2, 0.6));
// Pernas
[[-0.5, -0.8], [0.5, -0.8], [-0.5, 0.8], [0.5, 0.8]].forEach(function (lp) {
  grp.add(self._mesh(new THREE.BoxGeometry(0.28, 1.2, 0.28), legMat, lp[0], 0.4, lp[1]));
});
// Rabo
grp.add(this._mesh(new THREE.SphereGeometry(0.35, 6, 6), maneMat, 0, 1.6, -1.3));

// BUG FIX: { x: x, z: z }
grp.position.set(x, 0, z);
grp.castShadow = true;
this.scene.add(grp);
this.unicornGroup = grp;

this.objects.push({
  mesh: grp.children[0],
  groupPos: { x: x, z: z },
  range: 3.5,
  msg: {
    pt: 'O unicornio te deu poderes magicos! Voce brilha!',
    en: 'The unicorn gave you magic powers! You shine!',
    es: 'El unicornio te dio poderes magicos! Tu brillas!'
  }
});
```

},

// Helper: cria e posiciona mesh
_mesh: function (geo, mat, x, y, z) {
var m = new THREE.Mesh(geo, mat);
m.position.set(x, y, z);
return m;
},

makeSparkles: function () {
var count = 150;
var pos   = new Float32Array(count * 3);
var cols  = new Float32Array(count * 3);
var sparkColors = [
[1, 0.3, 0.7], [0.6, 0.2, 1], [1, 0.85, 0], [0, 0.9, 1]
];
for (var i = 0; i < count; i++) {
pos[i * 3]     = (Math.random() - 0.5) * 40;
pos[i * 3 + 1] = Math.random() * 14 + 0.5;
pos[i * 3 + 2] = (Math.random() - 0.5) * 40;
var sc = sparkColors[i % 4];
cols[i * 3] = sc[0]; cols[i * 3 + 1] = sc[1]; cols[i * 3 + 2] = sc[2];
}
var geo = new THREE.BufferGeometry();
geo.setAttribute(‘position’, new THREE.BufferAttribute(pos, 3));
geo.setAttribute(‘color’,    new THREE.BufferAttribute(cols, 3));
var mat = new THREE.PointsMaterial({ size: 0.18, vertexColors: true, transparent: true, opacity: 0.85 });
this.sparkles      = new THREE.Points(geo, mat);
this.sparklesPos   = pos;
this.sparklesCount = count;
this.scene.add(this.sparkles);
},

makeFlowers: function (x, z) {
var colors = [0xff69b4, 0xff4fa3, 0xffd700, 0xc77dff];
var self   = this;
for (var i = 0; i < 6; i++) {
var petal = new THREE.Mesh(
new THREE.SphereGeometry(0.18, 6, 6),
new THREE.MeshLambertMaterial({ color: colors[i % 4] })
);
petal.position.set(
x + (Math.random() - 0.5) * 3,
0.2,
z + (Math.random() - 0.5) * 2
);
self.scene.add(petal);
}
},

addWall: function (x, z, w, d) {
this.walls.push({ x: x, z: z, w: w / 2, d: d / 2 });
},

// ─── JOGADOR 3D (ROBLOX STYLE) ───────────────────
buildPlayer: function () {
if (!curChar) return;
var self = this;
var grp  = new THREE.Group();

```
// BUG FIX: usa parseInt(hex.slice(1), 16) em vez de parseInt(hex, '0x')
function toInt(hex) {
  if (!hex || hex.length < 7) return 0xffffff;
  return parseInt(hex.slice(1), 16);
}

var skinMat   = new THREE.MeshPhongMaterial({ color: toInt(curChar.skin   || '#f5c5a3'), shininess: 40 });
var hairMat   = new THREE.MeshPhongMaterial({ color: toInt(curChar.hair   || '#ff2d7a'), shininess: 50 });
var outfitMat = new THREE.MeshPhongMaterial({ color: toInt(curChar.outfit || '#ff6eb4'), shininess: 60 });
var shoeMat   = new THREE.MeshPhongMaterial({ color: toInt(curChar.shoe   || '#c200a0'), shininess: 50 });
var goldMat   = new THREE.MeshPhongMaterial({ color: 0xffd700, shininess: 100, emissive: 0x443300 });
var whiteMat  = new THREE.MeshPhongMaterial({ color: 0xffffff, shininess: 20 });
var eyeMat    = new THREE.MeshPhongMaterial({ color: 0x1a0800 });

// Cabeca
var head = this._mesh(new THREE.BoxGeometry(1.0, 1.0, 1.0), skinMat, 0, 3.4, 0);
head.castShadow = true;
grp.add(head);
self.playerHead = head;

// Cabelo
grp.add(this._mesh(new THREE.BoxGeometry(1.1, 0.6, 1.1), hairMat, 0, 3.78, 0));
grp.add(this._mesh(new THREE.BoxGeometry(0.18, 0.7, 1.0), hairMat, -0.55, 3.4, 0));
grp.add(this._mesh(new THREE.BoxGeometry(0.18, 0.7, 1.0), hairMat,  0.55, 3.4, 0));

// Coroa
grp.add(this._mesh(new THREE.CylinderGeometry(0.48, 0.52, 0.2, 6), goldMat, 0, 4.05, 0));
for (var ci = 0; ci < 5; ci++) {
  var ang = (ci / 5) * Math.PI * 2;
  var cp  = this._mesh(new THREE.ConeGeometry(0.1, 0.3, 6), goldMat, Math.sin(ang) * 0.38, 4.3, Math.cos(ang) * 0.38);
  grp.add(cp);
}

// Olhos
grp.add(this._mesh(new THREE.BoxGeometry(0.18, 0.14, 0.05), whiteMat, -0.22, 3.45, 0.503));
grp.add(this._mesh(new THREE.BoxGeometry(0.18, 0.14, 0.05), whiteMat,  0.22, 3.45, 0.503));
grp.add(this._mesh(new THREE.BoxGeometry(0.09, 0.09, 0.05), eyeMat,   -0.22, 3.44, 0.52));
grp.add(this._mesh(new THREE.BoxGeometry(0.09, 0.09, 0.05), eyeMat,    0.22, 3.44, 0.52));

// Torso
var torso = this._mesh(new THREE.BoxGeometry(0.95, 1.1, 0.65), outfitMat, 0, 2.2, 0);
torso.castShadow = true;
grp.add(torso);

// Saia
var skirtMat = new THREE.MeshPhongMaterial({ color: toInt(curChar.outfit || '#ff6eb4'), shininess: 60 });
var skirt    = this._mesh(new THREE.CylinderGeometry(0.9, 1.3, 0.9, 10), skirtMat, 0, 1.45, 0);
grp.add(skirt);
self.skirt = skirt;

// Bracos
var armL = this._mesh(new THREE.BoxGeometry(0.28, 0.85, 0.28), outfitMat, -0.62, 2.2, 0);
var armR = this._mesh(new THREE.BoxGeometry(0.28, 0.85, 0.28), outfitMat,  0.62, 2.2, 0);
armL.castShadow = armR.castShadow = true;
grp.add(armL); grp.add(armR);
self.armL = armL; self.armR = armR;

// Maos
grp.add(this._mesh(new THREE.SphereGeometry(0.18, 6, 6), skinMat, -0.62, 1.7, 0));
grp.add(this._mesh(new THREE.SphereGeometry(0.18, 6, 6), skinMat,  0.62, 1.7, 0));

// Pernas
var legL = this._mesh(new THREE.BoxGeometry(0.3, 0.85, 0.3), skinMat, -0.25, 0.65, 0);
var legR = this._mesh(new THREE.BoxGeometry(0.3, 0.85, 0.3), skinMat,  0.25, 0.65, 0);
grp.add(legL); grp.add(legR);
self.legL = legL; self.legR = legR;

// Sapatos
grp.add(this._mesh(new THREE.BoxGeometry(0.34, 0.22, 0.46), shoeMat, -0.25, 0.15, 0.08));
grp.add(this._mesh(new THREE.BoxGeometry(0.34, 0.22, 0.46), shoeMat,  0.25, 0.15, 0.08));

// Posicao inicial (na entrada do castelo)
grp.position.set(0, 0, 10);
grp.castShadow = true;
this.scene.add(grp);
this.playerGroup = grp;
```

},

// ─── INPUT ───────────────────────────────────────
bindInput: function () {
var self = this;

```
// Teclado
this._keydownHandler = function (e) {
  self.keys[e.code] = true;
  var nav = ['ArrowUp','ArrowDown','ArrowLeft','ArrowRight','Space','KeyW','KeyA','KeyS','KeyD'];
  if (nav.indexOf(e.code) !== -1) e.preventDefault();
};
this._keyupHandler = function (e) { self.keys[e.code] = false; };
document.addEventListener('keydown', this._keydownHandler);
document.addEventListener('keyup',   this._keyupHandler);

// D-Pad mobile
var dpadMap = { 'btn-up': 'up', 'btn-down': 'down', 'btn-left': 'left', 'btn-right': 'right' };
Object.keys(dpadMap).forEach(function (id) {
  var dir = dpadMap[id];
  var btn = document.getElementById(id);
  if (!btn) return;
  var on  = function () { self.dpad[dir] = true;  };
  var off = function () { self.dpad[dir] = false; };
  btn.addEventListener('touchstart', function (e) { e.preventDefault(); on();  }, { passive: false });
  btn.addEventListener('touchend',   function (e) { e.preventDefault(); off(); }, { passive: false });
  btn.addEventListener('mousedown',  on);
  btn.addEventListener('mouseup',    off);
  btn.addEventListener('mouseleave', off);
});

// Botoes Pular / Girar
var jumpBtn = document.getElementById('btn-jump');
var spinBtn = document.getElementById('btn-spin');
if (jumpBtn) jumpBtn.addEventListener('click', function () { self.doJump(); });
if (spinBtn) spinBtn.addEventListener('click', function () { self.doSpin(); });

// Rotacao de camera por toque
var canvas      = document.getElementById('three-canvas');
var touchStartX = 0;
if (canvas) {
  canvas.addEventListener('touchstart', function (e) {
    if (e.touches.length === 1) touchStartX = e.touches[0].clientX;
  }, { passive: true });
  canvas.addEventListener('touchmove', function (e) {
    if (e.touches.length !== 1) return;
    var dx = e.touches[0].clientX - touchStartX;
    self.cameraAngle += dx * 0.006;
    touchStartX = e.touches[0].clientX;
  }, { passive: true });
}

// Rotacao de camera por mouse drag
var mouseDown  = false;
var lastMouseX = 0;
if (canvas) {
  canvas.addEventListener('mousedown', function (e) { mouseDown = true; lastMouseX = e.clientX; });
}
this._mouseUpHandler = function () { mouseDown = false; };
this._mouseMoveHandler = function (e) {
  if (!mouseDown) return;
  self.cameraAngle += (e.clientX - lastMouseX) * 0.005;
  lastMouseX = e.clientX;
};
document.addEventListener('mouseup',   this._mouseUpHandler);
document.addEventListener('mousemove', this._mouseMoveHandler);
```

},

doJump: function () { playJump(); },
doSpin: function () { this.spinAnim = true; this.spinT = 0; playSuccess(); },

getInput: function () {
var k = this.keys, d = this.dpad;
return {
up:    !!(k[‘ArrowUp’]    || k[‘KeyW’] || d.up),
down:  !!(k[‘ArrowDown’]  || k[‘KeyS’] || d.down),
left:  !!(k[‘ArrowLeft’]  || k[‘KeyA’] || d.left),
right: !!(k[‘ArrowRight’] || k[‘KeyD’] || d.right)
};
},

collidesWalls: function (nx, nz) {
return this.walls.some(function (w) {
return nx > w.x - w.w - 0.6 && nx < w.x + w.w + 0.6 &&
nz > w.z - w.d - 0.6 && nz < w.z + w.d + 0.6;
});
},

// ─── UPDATE ──────────────────────────────────────
update: function (dt) {
var inp = this.getInput();
var pg  = this.playerGroup;
if (!pg) return;

```
var speed  = 5.0;
var dx = 0, dz = 0;
var cc = Math.cos(this.cameraAngle);
var cs = Math.sin(this.cameraAngle);

if (inp.up)    { dz -= cc; dx -= cs; }
if (inp.down)  { dz += cc; dx += cs; }
if (inp.left)  { dx -= cc; dz += cs; }
if (inp.right) { dx += cc; dz -= cs; }

var len = Math.sqrt(dx * dx + dz * dz);
if (len > 0) {
  dx /= len; dz /= len;
  var nx = pg.position.x + dx * speed * dt;
  var nz = pg.position.z + dz * speed * dt;
  if (!this.collidesWalls(nx, nz)) {
    pg.position.x = nx;
    pg.position.z = nz;
  }
  // Limite do mundo
  pg.position.x = Math.max(-21, Math.min(21, pg.position.x));
  pg.position.z = Math.max(-21, Math.min(21, pg.position.z));
  pg.rotation.y = Math.atan2(dx, dz);
}

// Animacao
var t      = Date.now() * 0.006;
var moving = len > 0;

if (moving) {
  if (this.legL) this.legL.rotation.x = Math.sin(t * 5) * 0.4;
  if (this.legR) this.legR.rotation.x = Math.sin(t * 5 + Math.PI) * 0.4;
  if (this.armL) this.armL.rotation.x = Math.sin(t * 5 + Math.PI) * 0.35;
  if (this.armR) this.armR.rotation.x = Math.sin(t * 5) * 0.35;
} else {
  this.idleT += dt;
  if (this.playerHead) this.playerHead.rotation.y = Math.sin(this.idleT * 0.5) * 0.08;
  if (this.armL) this.armL.rotation.z =  0.05 + Math.sin(this.idleT * 0.8) * 0.04;
  if (this.armR) this.armR.rotation.z = -0.05 - Math.sin(this.idleT * 0.8) * 0.04;
  if (this.skirt) this.skirt.rotation.y = Math.sin(this.idleT * 0.4) * 0.03;
  if (this.legL) this.legL.rotation.x = 0;
  if (this.legR) this.legR.rotation.x = 0;
}
// Bob leve
pg.position.y = Math.sin(t * (moving ? 8 : 1.5)) * 0.04;

// Animacao de giro (rodopio)
if (this.spinAnim) {
  this.spinT += dt * 4;
  pg.rotation.y += dt * 6;
  if (this.skirt) this.skirt.scale.y = 1 - Math.sin(this.spinT) * 0.2;
  if (this.spinT > Math.PI * 2) { this.spinAnim = false; this.spinT = 0; }
}

// Camera segue o jogador — lerp suave
var camX = pg.position.x + Math.sin(this.cameraAngle) * this.cameraDistance;
var camZ = pg.position.z + Math.cos(this.cameraAngle) * this.cameraDistance;
this._camTarget.set(camX, this.cameraHeight, camZ);
this.camera.position.lerp(this._camTarget, 0.10);
this.camera.lookAt(pg.position.x, 2.5, pg.position.z);

// Animacoes do ambiente
if (this.waterMesh) {
  this.waterMesh.position.y = 0.95 + Math.sin(Date.now() * 0.002) * 0.05;
}
if (this.unicornGroup) {
  this.unicornGroup.position.y = Math.sin(Date.now() * 0.001) * 0.08;
}
if (this.sparkles && this.sparklesPos) {
  var pos = this.sparklesPos;
  for (var i = 0; i < this.sparklesCount; i++) {
    pos[i * 3 + 1] += Math.sin(Date.now() * 0.001 + i) * 0.002;
    if (pos[i * 3 + 1] > 15) pos[i * 3 + 1] = 0.5;
  }
  this.sparkles.geometry.attributes.position.needsUpdate = true;
  this.sparkles.material.opacity = 0.7 + Math.sin(Date.now() * 0.002) * 0.2;
}
if (this.pinkLight) {
  this.pinkLight.intensity = 1.3 + Math.sin(Date.now() * 0.003) * 0.4;
}

this.checkInteractions();
```

},

checkInteractions: function () {
if (!this.playerGroup) return;
var px = this.playerGroup.position.x;
var pz = this.playerGroup.position.z;
var nearest = null, minDist = 9999;

```
this.objects.forEach(function (obj) {
  var ox = obj.groupPos ? obj.groupPos.x : obj.mesh.position.x;
  var oz = obj.groupPos ? obj.groupPos.z : obj.mesh.position.z;
  var d  = Math.sqrt((px - ox) * (px - ox) + (pz - oz) * (pz - oz));
  if (d < obj.range && d < minDist) { minDist = d; nearest = obj; }
});

var bubble = document.getElementById('interact-bubble');
if (!bubble) return;

if (nearest) {
  var lang = (curLang && nearest.msg[curLang]) ? curLang : 'pt';
  var msg  = nearest.msg[lang];
  bubble.textContent = msg;
  bubble.classList.remove('hidden');
  clearTimeout(this._popTimer);
  var self = this;
  this._popTimer = setTimeout(function () {
    bubble.classList.add('hidden');
  }, 3500);
}
// Quando longe de qualquer objeto, oculta bubble automaticamente
// (apenas se nao houver um timer ativo — o timer ja cuida disso)
```

},

// ─── LOOP ────────────────────────────────────────
loop: function () {
if (!this.running) return;
var dt = this.clock.getDelta();
// Limita dt para evitar saltos grandes quando a aba perde foco
if (dt > 0.1) dt = 0.1;
this.update(dt);
this.renderer.render(this.scene, this.camera);
var self = this;
this.raf = requestAnimationFrame(function () { self.loop(); });
},

// ─── STOP / CLEANUP ──────────────────────────────
stop: function () {
this.running = false;

```
if (this.raf) { cancelAnimationFrame(this.raf); this.raf = null; }

// Remove listeners de teclado
if (this._keydownHandler) {
  document.removeEventListener('keydown', this._keydownHandler);
  this._keydownHandler = null;
}
if (this._keyupHandler) {
  document.removeEventListener('keyup', this._keyupHandler);
  this._keyupHandler = null;
}
if (this._mouseUpHandler) {
  document.removeEventListener('mouseup', this._mouseUpHandler);
  this._mouseUpHandler = null;
}
if (this._mouseMoveHandler) {
  document.removeEventListener('mousemove', this._mouseMoveHandler);
  this._mouseMoveHandler = null;
}
if (this._resizeHandler) {
  window.removeEventListener('resize', this._resizeHandler);
  this._resizeHandler = null;
}

// Limpa timer de bubble
clearTimeout(this._popTimer);
var bubble = document.getElementById('interact-bubble');
if (bubble) bubble.classList.add('hidden');

// Dispose do renderer
if (this.renderer) {
  try { this.renderer.dispose(); } catch (e) {}
  this.renderer = null;
}

// Zera refs
this.scene        = null;
this.camera       = null;
this.clock        = null;
this.playerGroup  = null;
this.playerHead   = null;
this.armL = this.armR = null;
this.legL = this.legR = null;
this.skirt        = null;
this.waterMesh    = null;
this.unicornGroup = null;
this.sparkles     = null;
this.sparklesPos  = null;
this.pinkLight    = null;
this._camTarget   = null;
this.walls        = [];
this.objects      = [];
this.keys         = {};
this.dpad         = {};
```

}
};

// ─── Funcoes globais chamadas pelo HTML ──────────
function startExplore() {
// Para qualquer sessao anterior de forma segura
ThreeExp.stop();

// Reseta flags de animacao
ThreeExp.spinAnim = false;
ThreeExp.spinT    = 0;
ThreeExp.idleT    = 0;
ThreeExp.cameraAngle = 0;

// Inicia com pequeno delay para o DOM renderizar
setTimeout(function () { ThreeExp.init(); }, 80);
}

function stopExplore() {
ThreeExp.stop();
}

function playerJump() {
if (ThreeExp.running) ThreeExp.doJump();
}
function playerSpin() {
if (ThreeExp.running) ThreeExp.doSpin();
}
‘use strict’;

// ═══════════════════════════════════════════════════
//  ESTADO GLOBAL
// ═══════════════════════════════════════════════════
var curChar      = null;
var curLang      = ‘pt’;
var sessionStart = Date.now();
var hudInterval  = null;

// ═══════════════════════════════════════════════════
//  NAVEGACAO
// ═══════════════════════════════════════════════════
function goScreen(id) {
if (id !== ‘screen-explore’) { try { stopExplore(); } catch(e){} }
if (id !== ‘screen-race’)    { try { stopRace();    } catch(e){} }
if (id !== ‘screen-snake’)   { try { stopSnake();   } catch(e){} }
if (id !== ‘screen-memory’)  { try { stopMemory();  } catch(e){} }

document.querySelectorAll(’.screen’).forEach(function(s) {
s.classList.remove(‘active’);
});
var el = document.getElementById(id);
if (el) el.classList.add(‘active’);

// HUD visivel em todas exceto home e select
var showHud = (id !== ‘screen-home’ && id !== ‘screen-select’);
var hud = document.getElementById(‘global-hud’);
if (hud) {
if (showHud) hud.classList.remove(‘hidden’);
else         hud.classList.add(‘hidden’);
}

if (id === ‘screen-menu’)   buildMenuHeader();
if (id === ‘screen-custom’) buildCustom();
if (id === ‘screen-select’) buildCharSelect();
if (id === ‘screen-memory’) resetMemoryScreen();
if (id === ‘screen-snake’)  resetSnakeScreen();
if (id === ‘screen-quiz’)   resetQuiz();

if (audioUnlocked) playClick();
}

function resetMemoryScreen() {
var d = document.getElementById(‘memory-diff-row’);
var s = document.getElementById(‘memory-stats’);
var w = document.getElementById(‘memory-win’);
var g = document.getElementById(‘memory-grid’);
if (d) d.classList.remove(‘hidden’);
if (s) s.classList.add(‘hidden’);
if (w) w.classList.add(‘hidden’);
if (g) g.innerHTML = ‘’;
}
function resetSnakeScreen() {
var ov = document.getElementById(‘snake-overlay’);
var oe = document.getElementById(‘snake-over’);
if (ov) ov.classList.remove(‘hidden’);
if (oe) oe.classList.add(‘hidden’);
}

// ═══════════════════════════════════════════════════
//  HUD — data, hora, nome, tempo de sessao
// ═══════════════════════════════════════════════════
function startHud() {
if (hudInterval) clearInterval(hudInterval);
hudInterval = setInterval(updateHud, 1000);
updateHud();
}

function updateHud() {
var now  = new Date();
var hh   = String(now.getHours()).padStart(2,‘0’);
var mm   = String(now.getMinutes()).padStart(2,‘0’);
var dd   = String(now.getDate()).padStart(2,‘0’);
var mo   = String(now.getMonth()+1).padStart(2,‘0’);
var yr   = now.getFullYear();
var secs = Math.floor((Date.now() - sessionStart) / 1000);

var sessionStr;
if (secs >= 3600) {
var h2 = Math.floor(secs/3600);
var m2 = Math.floor((secs%3600)/60);
sessionStr = h2 + ‘h’ + String(m2).padStart(2,‘0’) + ‘m’;
} else if (secs >= 60) {
var m3 = Math.floor(secs/60);
var s3 = secs % 60;
sessionStr = m3 + ‘m’ + String(s3).padStart(2,‘0’) + ‘s’;
} else {
sessionStr = secs + ‘s’;
}

var e;
e = document.getElementById(‘hud-date’);     if (e) e.textContent = dd+’/’+mo+’/’+yr;
e = document.getElementById(‘hud-time’);     if (e) e.textContent = hh+’:’+mm;
e = document.getElementById(‘hud-session’);  if (e) e.textContent = sessionStr;
e = document.getElementById(‘hud-char-name’);if (e && curChar) e.textContent = curChar.name;
}

// ═══════════════════════════════════════════════════
//  TOAST
// ═══════════════════════════════════════════════════
function showToast(msg, dur) {
var t = document.getElementById(‘toast-msg’);
if (!t) return;
t.textContent = msg;
t.classList.remove(‘hidden’);
clearTimeout(t._tid);
t._tid = setTimeout(function() { t.classList.add(‘hidden’); }, dur || 2500);
}

// ═══════════════════════════════════════════════════
//  FUNDO ANIMADO — ESTRELAS EM TELA TODA
//
//  CORRECAO PRINCIPAL:
//  1. Canvas cobre 100vw x 100vh (tela toda)
//  2. pointer-events: none (nunca bloqueia cliques)
//  3. z-index: 0 (atras de todos os elementos)
//  4. Animacao usa performance.now() real — nao trava
//  5. Meteoros, nebulosa pulsante, glitters giratorios
// ═══════════════════════════════════════════════════
var ParticleBg = (function() {
var canvas, ctx;
var stars    = [];
var glitters = [];
var meteors  = [];
var W = 0, H = 0;
var startTime = 0;
var running   = false;

var GC = [’#ff4fa3’,’#c77dff’,’#ffd700’,’#00e5ff’,’#ff9de2’,’#39ff14’,’#ffffff’];

function init() {
canvas = document.getElementById(‘bg-particles’);
if (!canvas) return;
ctx = canvas.getContext(‘2d’);

```
// Garante que o canvas cobre a tela toda e nao bloqueia nada
canvas.style.position = 'fixed';
canvas.style.top      = '0';
canvas.style.left     = '0';
canvas.style.width    = '100vw';
canvas.style.height   = '100vh';
canvas.style.zIndex   = '0';
canvas.style.pointerEvents = 'none';

resize();
window.addEventListener('resize', resize);
build();
startTime = performance.now();
running = true;
requestAnimationFrame(loop);
```

}

function resize() {
W = canvas.width  = window.innerWidth;
H = canvas.height = window.innerHeight;
}

function build() {
stars = []; glitters = []; meteors = [];

```
// 220 estrelas espalhadas pela tela TODA
for (var i = 0; i < 220; i++) {
  stars.push({
    x:     Math.random(),      // fracao 0-1 da largura total
    y:     Math.random(),      // fracao 0-1 da altura total
    r:     Math.random() * 1.8 + 0.15,
    freq:  Math.random() * 0.0045 + 0.0005,
    phase: Math.random() * Math.PI * 2,
    col:   Math.random() < 0.15 ? GC[Math.floor(Math.random() * 5)] : '#ffffff'
  });
}

// 65 glitters coloridos giratorios
for (var j = 0; j < 65; j++) {
  glitters.push({
    x:    Math.random(),
    y:    Math.random(),
    sz:   Math.random() * 5.5 + 1.5,
    col:  GC[j % GC.length],
    phase:Math.random() * Math.PI * 2,
    bf:   Math.random() * 0.0018 + 0.0004,
    rf:   Math.random() * 0.0022 + 0.0008,
    af:   Math.random() * 0.0020 + 0.0006
  });
}
```

}

function spawnMeteor() {
// Meteoros entram pelo topo ou pela direita
var fromTop = Math.random() < 0.6;
meteors.push({
x:     fromTop ? Math.random() * W * 1.3 : W + 10,
y:     fromTop ? -10 : Math.random() * H * 0.5,
vx:    -(1.5 + Math.random() * 3),
vy:    2.5 + Math.random() * 4,
len:   55 + Math.random() * 100,
alpha: 0.85,
col:   GC[Math.floor(Math.random() * GC.length)]
});
}

function loop(now) {
if (!running) return;
requestAnimationFrame(loop);

```
var t = (now - startTime) * 0.001;

ctx.clearRect(0, 0, W, H);

// ── Gradiente de ceu — hue oscila lentamente ──
var hShift = Math.sin(t * 0.035) * 14;
var grd = ctx.createLinearGradient(0, 0, W, H);
grd.addColorStop(0,   'hsl(' + (256 + hShift) + ',62%,4%)');
grd.addColorStop(0.4, 'hsl(' + (265 + hShift) + ',60%,7%)');
grd.addColorStop(1,   'hsl(' + (278 + hShift) + ',55%,11%)');
ctx.fillStyle = grd;
ctx.fillRect(0, 0, W, H);

// ── Nebulosas pulsantes ──
var nebulas = [
  { cx:0.12, cy:0.20, r:0.34, col:'rgba(155,46,255,' },
  { cx:0.85, cy:0.55, r:0.27, col:'rgba(255,79,163,' },
  { cx:0.50, cy:0.06, r:0.22, col:'rgba(0,229,255,'  },
  { cx:0.30, cy:0.80, r:0.18, col:'rgba(255,215,0,'  },
  { cx:0.75, cy:0.90, r:0.16, col:'rgba(155,46,255,' }
];
nebulas.forEach(function(n) {
  var a  = 0.018 + 0.012 * Math.sin(t * 0.055 + n.cx * 4);
  var rg = ctx.createRadialGradient(n.cx*W, n.cy*H, 0, n.cx*W, n.cy*H, n.r*W);
  rg.addColorStop(0, n.col + a + ')');
  rg.addColorStop(1, n.col + '0)');
  ctx.fillStyle = rg;
  ctx.fillRect(0, 0, W, H);
});

// ── Estrelas: piscam e variam de tamanho ──
stars.forEach(function(s) {
  var bright = 0.28 + 0.72 * (0.5 + 0.5 * Math.sin(t * s.freq * 6283 + s.phase));
  var radius = s.r * (0.65 + 0.65 * bright);

  ctx.globalAlpha = bright * 0.94;
  ctx.fillStyle   = s.col;
  ctx.beginPath();
  ctx.arc(s.x * W, s.y * H, radius, 0, Math.PI * 2);
  ctx.fill();

  // Cruz de luz nas estrelas maiores mais brilhantes
  if (s.r > 1.2 && bright > 0.70) {
    ctx.globalAlpha = bright * 0.28;
    ctx.strokeStyle = s.col;
    ctx.lineWidth   = 0.6;
    var arm = radius * 5;
    ctx.beginPath();
    ctx.moveTo(s.x*W - arm, s.y*H);
    ctx.lineTo(s.x*W + arm, s.y*H);
    ctx.moveTo(s.x*W, s.y*H - arm);
    ctx.lineTo(s.x*W, s.y*H + arm);
    ctx.stroke();
  }
});
ctx.globalAlpha = 1;

// ── Glitters giratorios flutuantes ──
glitters.forEach(function(g) {
  var bob   = Math.sin(t * g.bf * 6283 + g.phase) * 0.04 * H;
  var rot   = t * g.rf * 6283;
  var alpha = 0.22 + 0.78 * Math.abs(Math.sin(t * g.af * 6283 + g.phase));
  var sz    = g.sz * (0.6 + 0.6 * alpha);

  ctx.save();
  ctx.translate(g.x * W, g.y * H + bob);
  ctx.rotate(rot);
  ctx.globalAlpha = alpha;

  // Losango colorido
  ctx.fillStyle = g.col;
  ctx.beginPath();
  ctx.moveTo(0, -sz);
  ctx.lineTo(sz * 0.52, 0);
  ctx.lineTo(0,  sz);
  ctx.lineTo(-sz * 0.52, 0);
  ctx.closePath();
  ctx.fill();

  // Centro branco
  ctx.fillStyle   = '#fff';
  ctx.globalAlpha = alpha * 0.35;
  ctx.beginPath();
  ctx.arc(0, 0, sz * 0.20, 0, Math.PI * 2);
  ctx.fill();

  ctx.restore();
  ctx.globalAlpha = 1;
});

// ── Meteoros ──
if (Math.random() < 0.0025) spawnMeteor();
meteors = meteors.filter(function(m) { return m.alpha > 0.02; });
meteors.forEach(function(m) {
  ctx.save();
  ctx.globalAlpha = m.alpha;
  var ratio = m.vx / Math.max(Math.abs(m.vy), 0.001);
  var endX  = m.x - Math.abs(ratio) * m.len;
  var endY  = m.y - m.len;
  var gm    = ctx.createLinearGradient(m.x, m.y, endX, endY);
  gm.addColorStop(0, m.col);
  gm.addColorStop(1, 'rgba(0,0,0,0)');
  ctx.strokeStyle = gm;
  ctx.lineWidth   = 1.8;
  ctx.beginPath();
  ctx.moveTo(m.x, m.y);
  ctx.lineTo(endX, endY);
  ctx.stroke();
  ctx.restore();

  m.x     += m.vx;
  m.y     += m.vy;
  m.alpha -= 0.020;
});

ctx.globalAlpha = 1;
```

}

return { init: init };
}());

// ═══════════════════════════════════════════════════
//  HOME — PRINCESAS ANIMADAS NA ENTRADA
// ═══════════════════════════════════════════════════
var _homeAnims = [];

function buildHomeChars() {
var row = document.getElementById(‘home-chars-row’);
if (!row) return;
row.innerHTML = ‘’;

_homeAnims.forEach(function(a) { a.running = false; });
_homeAnims = [];

[0, 1, 2].forEach(function(i) {
var c = CHARACTERS[i];

```
var wrap = document.createElement('div');
wrap.className = 'home-mini-char';
wrap.title = c.name + ' — ' + c.job;

// Estrela animada acima da cabeca
var star = document.createElement('div');
star.className = 'doll-star';
star.textContent = '\u2605'; // estrela solida dourada
wrap.appendChild(star);

var cvs = document.createElement('canvas');
cvs.width  = 80;
cvs.height = 118;
wrap.appendChild(cvs);

var lbl = document.createElement('span');
lbl.textContent = c.name;
wrap.appendChild(lbl);

wrap.addEventListener('click', function() { selectChar(c); });
row.appendChild(wrap);

var anim = { running: true, phase: i * 1.15 };
_homeAnims.push(anim);
_animateDoll(cvs, c, anim);
```

});
}

function _animateDoll(cvs, charData, anim) {
var ctx  = cvs.getContext(‘2d’);
var t0   = performance.now();
var ch   = Object.assign({}, charData);

function frame(now) {
if (!anim.running) return;
var t = (now - t0) * 0.001 + anim.phase;

```
ctx.clearRect(0, 0, cvs.width, cvs.height);
ctx.save();

// Balanco suave
var sway = Math.sin(t * 1.1) * 0.038;
ctx.translate(cvs.width / 2, cvs.height);
ctx.rotate(sway);
ctx.translate(-cvs.width / 2, -cvs.height);

drawPrincess(cvs, ch, 1);

// Particula brilhante acima da cabeca
var sa = 0.4 + 0.6 * Math.abs(Math.sin(t * 2.8));
ctx.globalAlpha = sa;
ctx.fillStyle   = '#ffd700';
var px = cvs.width / 2 + Math.sin(t * 2.0) * 12;
var py = 5 + Math.abs(Math.sin(t * 1.5)) * 5;
_drawStar4(ctx, px, py, 4.5);
ctx.globalAlpha = 1;

ctx.restore();
requestAnimationFrame(frame);
```

}
requestAnimationFrame(frame);
}

function _drawStar4(ctx, x, y, r) {
ctx.beginPath();
ctx.moveTo(x,         y - r);
ctx.lineTo(x + r*0.28, y - r*0.28);
ctx.lineTo(x + r,      y);
ctx.lineTo(x + r*0.28, y + r*0.28);
ctx.lineTo(x,          y + r);
ctx.lineTo(x - r*0.28, y + r*0.28);
ctx.lineTo(x - r,      y);
ctx.lineTo(x - r*0.28, y - r*0.28);
ctx.closePath();
ctx.fill();
}

// ═══════════════════════════════════════════════════
//  SELECAO DE PERSONAGEM
// ═══════════════════════════════════════════════════
function buildCharSelect() {
var grid = document.getElementById(‘chars-grid’);
if (!grid) return;
grid.innerHTML = ‘’;

CHARACTERS.forEach(function(c) {
var card = document.createElement(‘div’);
card.className = ‘char-card’;

```
var cvs = document.createElement('canvas');
cvs.width = 110; cvs.height = 160;
drawPrincess(cvs, c, 1);

var nm = document.createElement('div');
nm.className = 'char-name'; nm.textContent = c.name;

var jb = document.createElement('div');
jb.className = 'char-job'; jb.textContent = c.job;

card.appendChild(cvs); card.appendChild(nm); card.appendChild(jb);
card.addEventListener('click', function() { selectChar(c); });
grid.appendChild(card);
```

});
}

function selectChar(c) {
curChar = Object.assign({}, c);
if (audioUnlocked) playSuccess();
var msgs = {
pt: c.name + ’ selecionada!’,
en: c.name + ’ selected!’,
es: c.name + ’ seleccionada!’
};
showToast(msgs[curLang] || msgs.pt);
goScreen(‘screen-menu’);
}

// ═══════════════════════════════════════════════════
//  CABECALHO DO MENU
// ═══════════════════════════════════════════════════
function buildMenuHeader() {
var el = document.getElementById(‘menu-char-header’);
if (!el || !curChar) return;
el.innerHTML = ‘’;

var cvs = document.createElement(‘canvas’);
cvs.width = 70; cvs.height = 100;
drawPrincess(cvs, curChar, 1);

var info = document.createElement(‘div’);
info.className = ‘menu-header-info’;

var nm = document.createElement(‘div’);
nm.className = ‘menu-header-name’; nm.textContent = curChar.name;

var jb = document.createElement(‘div’);
jb.className = ‘menu-header-job’; jb.textContent = curChar.job;

info.appendChild(nm); info.appendChild(jb);
el.appendChild(cvs); el.appendChild(info);
}

// ═══════════════════════════════════════════════════
//  IDIOMA
// ═══════════════════════════════════════════════════
function setLang(lang) {
curLang = lang;

document.querySelectorAll(’.lang-btn’).forEach(function(b) {
b.classList.toggle(‘active’, b.getAttribute(‘data-lang’) === lang);
});

var root = document.getElementById(‘html-root’);
if (root) root.lang = lang === ‘pt’ ? ‘pt-BR’ : lang;

// Atualiza labels do HUD conforme idioma
var hudLabels = {
pt: { date:‘DATA’, time:‘HORA’, char:‘PRINCESA’, session:‘SESSAO’ },
en: { date:‘DATE’, time:‘TIME’, char:‘PRINCESS’, session:‘SESSION’ },
es: { date:‘FECHA’,time:‘HORA’, char:‘PRINCESA’, session:‘SESION’  }
};
var L = hudLabels[lang] || hudLabels.pt;
var e;
e = document.getElementById(‘lbl-date’);    if (e) e.textContent = L.date;
e = document.getElementById(‘lbl-time’);    if (e) e.textContent = L.time;
e = document.getElementById(‘lbl-char’);    if (e) e.textContent = L.char;
e = document.getElementById(‘lbl-session’); if (e) e.textContent = L.session;

applyTranslations();
try { resetQuiz(); } catch(ex) {}
if (audioUnlocked) playClick();

var msgs = { pt:‘Idioma: Portugues’, en:‘Language: English’, es:‘Idioma: Espanol’ };
showToast(msgs[lang] || msgs.pt);
}

function applyTranslations() {
var T = TRANSLATIONS[curLang];
if (!T) return;
Object.keys(T).forEach(function(id) {
var el = document.getElementById(id);
if (el) el.textContent = T[id];
});
}

// ═══════════════════════════════════════════════════
//  INICIALIZACAO
// ═══════════════════════════════════════════════════
window.addEventListener(‘DOMContentLoaded’, function() {

// Personagem padrao
curChar = Object.assign({}, CHARACTERS[0]);

// Inicia canvas de fundo (estrelas em tela toda)
ParticleBg.init();

// Princesas animadas na home
buildHomeChars();

// Grade de selecao pre-construida
buildCharSelect();

// HUD relogio
startHud();

// Traducoes
applyTranslations();

// Desbloqueio de audio no primeiro toque
document.addEventListener(‘click’,      unlockAndStartMusic);
document.addEventListener(‘touchstart’, unlockAndStartMusic, { passive: true });

// Ajuste de canvases ao redimensionar janela
window.addEventListener(‘resize’, function() {
var rc = document.getElementById(‘race-canvas’);
var sc = document.getElementById(‘snake-canvas’);
var rScreen = document.getElementById(‘screen-race’);
var sScreen = document.getElementById(‘screen-snake’);
if (rc && rScreen && rScreen.classList.contains(‘active’)) {
rc.width = window.innerWidth; rc.height = window.innerHeight;
}
if (sc && sScreen && sScreen.classList.contains(‘active’)) {
sc.width = window.innerWidth; sc.height = window.innerHeight;
}
});

console.log(’[Dream Castle] Iniciado. Personagens:’, CHARACTERS.map(function(c){ return c.name + ‘(’ + c.job + ‘)’; }).join(’, ’));
});