‘use strict’;

// ═══════════════════════════════════════════════════
//  PERSONAGENS
// ═══════════════════════════════════════════════════
var CHARACTERS = [
{ id:‘laura’,     name:‘Laura’,     job:‘Arquiteta’, hair:’#ff2d7a’, outfit:’#ff6eb4’, shoe:’#c200a0’, skin:’#f5c5a3’ },
{ id:‘valentina’, name:‘Valentina’, job:‘Cientista’,  hair:’#7b00ff’, outfit:’#b76eff’, shoe:’#3d00cc’, skin:’#f5c5a3’ },
{ id:‘giovanna’,  name:‘Giovanna’,  job:‘Medica’,     hair:’#c200a0’, outfit:’#ff4fb8’, shoe:’#7a0070’, skin:’#e8b89a’ },
{ id:‘valcely’,   name:‘Valcely’,   job:‘Estilista’,  hair:’#e6a817’, outfit:’#ffd700’, shoe:’#a07000’, skin:’#d4956a’ },
{ id:‘lidiane’,   name:‘Lidiane’,   job:‘Biomedica’,  hair:’#00bfff’, outfit:’#00b4d8’, shoe:’#005f73’, skin:’#f0d5b0’ }
];

var JOBS = [‘Arquiteta’,‘Cientista’,‘Medica’,‘Estilista’,‘Biomedica’,‘Rainha’,‘Astronauta’,‘Programadora’];

var HAIR_COLORS   = [’#ff2d7a’,’#7b00ff’,’#ffd700’,’#00bfff’,’#ff6600’,’#39ff14’,’#ffffff’,’#3d2000’,’#c200a0’,’#e6a817’];
var OUTFIT_COLORS = [’#ff6eb4’,’#b76eff’,’#00b4d8’,’#ffd700’,’#ff4500’,’#39ff14’,’#c0c0c0’,’#e8d5b7’,’#ff4fb8’,’#00e5ff’];
var SHOE_COLORS   = [’#c200a0’,’#3d00cc’,’#005f73’,’#a07000’,’#7a0070’,’#003d00’,’#555555’,’#8b4513’,’#ff2d7a’,’#0077ff’];

// Conteúdo das cartas de memória (imagens via URL)
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

// ═══════════════════════════════════════════════════
//  PERGUNTAS DO QUIZ (PT / EN / ES)
// ═══════════════════════════════════════════════════
var QUIZ_QUESTIONS = {
pt: {
easy: [
{ q:‘Qual e a capital do Brasil?’, opts:[‘Sao Paulo’,‘Rio de Janeiro’,‘Brasilia’,‘Salvador’], ans:2, exp:‘Brasilia e a capital federal do Brasil desde 1960.’ },
{ q:‘Quantas cores tem o arco-iris?’, opts:[‘5’,‘6’,‘7’,‘8’], ans:2, exp:‘O arco-iris tem 7 cores: vermelho, laranja, amarelo, verde, azul, anil e violeta.’ },
{ q:‘Qual animal e o maior do mundo?’, opts:[‘Elefante’,‘Baleia Azul’,‘Girafa’,‘Tubarao’], ans:1, exp:‘A baleia azul e o maior animal que ja existiu na Terra.’ },
{ q:‘Quantos planetas tem o Sistema Solar?’, opts:[‘7’,‘8’,‘9’,‘10’], ans:1, exp:‘O Sistema Solar tem 8 planetas: Mercurio, Venus, Terra, Marte, Jupiter, Saturno, Urano e Netuno.’ },
{ q:‘De que cor e o Sol?’, opts:[‘Amarelo’,‘Branco’,‘Laranja’,‘Vermelho’], ans:1, exp:‘O Sol parece amarelo daqui, mas na verdade e uma estrela branca-amarelada.’ },
{ q:‘Qual e o maior oceano do mundo?’, opts:[‘Atlantico’,‘Indico’,‘Pacifico’,‘Artico’], ans:2, exp:‘O Oceano Pacifico e o maior e mais profundo do mundo.’ },
{ q:‘Quantas pernas tem uma aranha?’, opts:[‘6’,‘8’,‘10’,‘4’], ans:1, exp:‘As aranhas sao aracnideos e possuem 8 pernas.’ },
{ q:‘Qual e o pais mais populoso do mundo?’, opts:[‘India’,‘China’,‘EUA’,‘Brasil’], ans:0, exp:‘A India ultrapassou a China em 2023 e agora e o pais mais populoso.’ }
],
medium: [
{ q:‘Quem escreveu “Dom Casmurro”?’, opts:[‘Jose de Alencar’,‘Machado de Assis’,‘Clarice Lispector’,‘Jorge Amado’], ans:1, exp:’“Dom Casmurro” foi escrito por Machado de Assis em 1899.’ },
{ q:‘Em que ano o Brasil foi descoberto?’, opts:[‘1492’,‘1500’,‘1510’,‘1498’], ans:1, exp:‘Pedro Alvares Cabral chegou ao Brasil em 22 de abril de 1500.’ },
{ q:‘Qual e o maior pais do mundo em area?’, opts:[‘Canada’,‘EUA’,‘Russia’,‘China’], ans:2, exp:‘A Russia e o maior pais do mundo, com mais de 17 milhoes de km2.’ },
{ q:‘Quanto e a raiz quadrada de 144?’, opts:[‘11’,‘12’,‘13’,‘14’], ans:1, exp:‘12 x 12 = 144, entao a raiz quadrada de 144 e 12.’ },
{ q:‘O que e fotossintese?’, opts:[‘Respiracao de animais’,‘Processo que plantas usam para fazer alimento’,‘Tipo de doenca’,‘Movimento da Terra’], ans:1, exp:‘Fotossintese e o processo que plantas usam para converter luz solar em alimento.’ },
{ q:‘Qual elemento e representado pelo simbolo “O”?’, opts:[‘Ouro’,‘Osmio’,‘Oxigenio’,‘Oganesson’], ans:2, exp:‘O simbolo “O” representa o Oxigenio, essential para a vida.’ }
],
hard: [
{ q:‘Qual e a formula quimica da agua?’, opts:[‘CO2’,‘H2O’,‘O2’,‘NaCl’], ans:1, exp:‘A agua e formada por 2 atomos de Hidrogenio e 1 de Oxigenio.’ },
{ q:‘Quem desenvolveu a teoria da relatividade?’, opts:[‘Newton’,‘Edison’,‘Einstein’,‘Darwin’], ans:2, exp:‘Albert Einstein publicou a teoria da relatividade especial em 1905.’ },
{ q:‘Quantos ossos tem o corpo humano adulto?’, opts:[‘206’,‘196’,‘256’,‘180’], ans:0, exp:‘O corpo humano adulto possui 206 ossos.’ },
{ q:‘Qual e o menor pais do mundo?’, opts:[‘Monaco’,‘Maldivas’,‘San Marino’,‘Vaticano’], ans:3, exp:‘O Vaticano e o menor pais do mundo com apenas 0,44 km2.’ },
{ q:‘Quem pintou a Mona Lisa?’, opts:[‘Michelangelo’,‘Rafael’,‘Leonardo da Vinci’,‘Botticelli’], ans:2, exp:‘A Mona Lisa foi pintada por Leonardo da Vinci entre 1503 e 1519.’ },
{ q:‘O que significa a sigla DNA?’, opts:[‘Acido Desoxi-ribonucleico’,‘Dado Natural Animal’,‘Acido Natural Diluido’,‘Deoxi Nitrato Alcalino’], ans:0, exp:‘DNA e Acido Desoxirribonucleico, a molecula que carrega informacao genetica.’ }
]
},
en: {
easy: [
{ q:‘What is the capital of Brazil?’, opts:[‘Sao Paulo’,‘Rio de Janeiro’,‘Brasilia’,‘Salvador’], ans:2, exp:‘Brasilia has been the federal capital of Brazil since 1960.’ },
{ q:‘How many colors are in a rainbow?’, opts:[‘5’,‘6’,‘7’,‘8’], ans:2, exp:‘A rainbow has 7 colors: red, orange, yellow, green, blue, indigo, and violet.’ },
{ q:‘Which is the largest animal in the world?’, opts:[‘Elephant’,‘Blue Whale’,‘Giraffe’,‘Shark’], ans:1, exp:‘The blue whale is the largest animal ever known to have existed.’ },
{ q:‘How many planets are in the Solar System?’, opts:[‘7’,‘8’,‘9’,‘10’], ans:1, exp:‘The Solar System has 8 planets: Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune.’ },
{ q:‘What color is the Sun actually?’, opts:[‘Yellow’,‘White’,‘Orange’,‘Red’], ans:1, exp:‘The Sun appears yellow from Earth but is actually a white-yellow star.’ },
{ q:‘What is the largest ocean on Earth?’, opts:[‘Atlantic’,‘Indian’,‘Pacific’,‘Arctic’], ans:2, exp:‘The Pacific Ocean is the largest and deepest ocean on Earth.’ },
{ q:‘How many legs does a spider have?’, opts:[‘6’,‘8’,‘10’,‘4’], ans:1, exp:‘Spiders are arachnids and have 8 legs.’ },
{ q:‘Which country has the largest population?’, opts:[‘India’,‘China’,‘USA’,‘Brazil’], ans:0, exp:‘India surpassed China in 2023 and is now the most populous country.’ }
],
medium: [
{ q:‘What is the square root of 144?’, opts:[‘11’,‘12’,‘13’,‘14’], ans:1, exp:‘12 x 12 = 144, so the square root of 144 is 12.’ },
{ q:‘What is photosynthesis?’, opts:[‘Animal breathing’,‘Plants making food from sunlight’,‘A type of disease’,‘Movement of Earth’], ans:1, exp:‘Photosynthesis is the process plants use to convert sunlight into food.’ },
{ q:‘Which element is represented by “O”?’, opts:[‘Gold’,‘Osmium’,‘Oxygen’,‘Oganesson’], ans:2, exp:‘The symbol “O” represents Oxygen, essential for life.’ },
{ q:‘What is the largest country by area?’, opts:[‘Canada’,‘USA’,‘Russia’,‘China’], ans:2, exp:‘Russia is the largest country with over 17 million km2.’ },
{ q:‘Who wrote Romeo and Juliet?’, opts:[‘Charles Dickens’,‘William Shakespeare’,‘Jane Austen’,‘Mark Twain’], ans:1, exp:‘Romeo and Juliet was written by William Shakespeare around 1594-1596.’ },
{ q:‘How many continents are there?’, opts:[‘5’,‘6’,‘7’,‘8’], ans:2, exp:‘There are 7 continents: Africa, Antarctica, Asia, Australia, Europe, North America, South America.’ }
],
hard: [
{ q:‘What is the chemical formula for water?’, opts:[‘CO2’,‘H2O’,‘O2’,‘NaCl’], ans:1, exp:‘Water is formed by 2 Hydrogen atoms and 1 Oxygen atom.’ },
{ q:‘Who developed the theory of relativity?’, opts:[‘Newton’,‘Edison’,‘Einstein’,‘Darwin’], ans:2, exp:‘Albert Einstein published the special theory of relativity in 1905.’ },
{ q:‘How many bones are in the adult human body?’, opts:[‘206’,‘196’,‘256’,‘180’], ans:0, exp:‘The adult human body has 206 bones.’ },
{ q:‘What is the smallest country in the world?’, opts:[‘Monaco’,‘Maldives’,‘San Marino’,‘Vatican’], ans:3, exp:‘Vatican City is the smallest country with only 0.44 km2.’ },
{ q:‘Who painted the Mona Lisa?’, opts:[‘Michelangelo’,‘Raphael’,‘Leonardo da Vinci’,‘Botticelli’], ans:2, exp:‘The Mona Lisa was painted by Leonardo da Vinci between 1503 and 1519.’ },
{ q:‘What does DNA stand for?’, opts:[‘Deoxyribonucleic Acid’,‘Direct Nucleic Acid’,‘Dynamic Natural Agent’,‘Dense Nuclear Array’], ans:0, exp:‘DNA stands for Deoxyribonucleic Acid, the molecule that carries genetic information.’ }
]
},
es: {
easy: [
{ q:‘Cual es la capital de Brasil?’, opts:[‘Sao Paulo’,‘Rio de Janeiro’,‘Brasilia’,‘Salvador’], ans:2, exp:‘Brasilia es la capital federal de Brasil desde 1960.’ },
{ q:‘Cuantos colores tiene el arcoiris?’, opts:[‘5’,‘6’,‘7’,‘8’], ans:2, exp:‘El arcoiris tiene 7 colores: rojo, naranja, amarillo, verde, azul, indigo y violeta.’ },
{ q:‘Cual es el animal mas grande del mundo?’, opts:[‘Elefante’,‘Ballena azul’,‘Jirafa’,‘Tiburon’], ans:1, exp:‘La ballena azul es el animal mas grande que ha existido en la Tierra.’ },
{ q:‘Cuantos planetas tiene el Sistema Solar?’, opts:[‘7’,‘8’,‘9’,‘10’], ans:1, exp:‘El Sistema Solar tiene 8 planetas: Mercurio, Venus, Tierra, Marte, Jupiter, Saturno, Urano y Neptuno.’ },
{ q:‘De que color es el Sol realmente?’, opts:[‘Amarillo’,‘Blanco’,‘Naranja’,‘Rojo’], ans:1, exp:‘El Sol parece amarillo desde la Tierra, pero en realidad es una estrella blanco-amarillenta.’ },
{ q:‘Cual es el oceano mas grande del mundo?’, opts:[‘Atlantico’,‘Indico’,‘Pacifico’,‘Artico’], ans:2, exp:‘El Oceano Pacifico es el mas grande y profundo del mundo.’ },
{ q:‘Cuantas patas tiene una arana?’, opts:[‘6’,‘8’,‘10’,‘4’], ans:1, exp:‘Las aranas son aracnidos y tienen 8 patas.’ },
{ q:‘Cual es el pais mas poblado del mundo?’, opts:[‘India’,‘China’,‘EE.UU.’,‘Brasil’], ans:0, exp:‘India supero a China en 2023 y ahora es el pais mas poblado.’ }
],
medium: [
{ q:‘Cual es la raiz cuadrada de 144?’, opts:[‘11’,‘12’,‘13’,‘14’], ans:1, exp:‘12 x 12 = 144, entonces la raiz cuadrada de 144 es 12.’ },
{ q:‘Que es la fotosintesis?’, opts:[‘Respiracion animal’,‘Las plantas hacen alimento con luz solar’,‘Un tipo de enfermedad’,‘Movimiento de la Tierra’], ans:1, exp:‘La fotosintesis es el proceso que las plantas usan para convertir la luz solar en alimento.’ },
{ q:‘Que elemento representa el simbolo O?’, opts:[‘Oro’,‘Osmio’,‘Oxigeno’,‘Oganesson’], ans:2, exp:‘El simbolo “O” representa el Oxigeno, esencial para la vida.’ },
{ q:‘Cual es el pais mas grande del mundo?’, opts:[‘Canada’,‘EE.UU.’,‘Rusia’,‘China’], ans:2, exp:‘Rusia es el pais mas grande con mas de 17 millones de km2.’ },
{ q:‘Quien escribio Don Quijote?’, opts:[‘Lope de Vega’,‘Miguel de Cervantes’,‘Garcia Lorca’,‘Quevedo’], ans:1, exp:‘Don Quijote de la Mancha fue escrito por Miguel de Cervantes en 1605.’ },
{ q:‘Cuantos continentes hay?’, opts:[‘5’,‘6’,‘7’,‘8’], ans:2, exp:‘Hay 7 continentes: Africa, Antartida, Asia, Australia, Europa, America del Norte, America del Sur.’ }
],
hard: [
{ q:‘Cual es la formula quimica del agua?’, opts:[‘CO2’,‘H2O’,‘O2’,‘NaCl’], ans:1, exp:‘El agua esta formada por 2 atomos de Hidrogeno y 1 de Oxigeno.’ },
{ q:‘Quien desarrollo la teoria de la relatividad?’, opts:[‘Newton’,‘Edison’,‘Einstein’,‘Darwin’], ans:2, exp:‘Albert Einstein publico la teoria de la relatividad especial en 1905.’ },
{ q:‘Cuantos huesos tiene el cuerpo humano adulto?’, opts:[‘206’,‘196’,‘256’,‘180’], ans:0, exp:‘El cuerpo humano adulto tiene 206 huesos.’ },
{ q:‘Cual es el pais mas pequeno del mundo?’, opts:[‘Monaco’,‘Maldivas’,‘San Marino’,‘Vaticano’], ans:3, exp:‘El Vaticano es el pais mas pequeno con solo 0,44 km2.’ },
{ q:‘Quien pinto la Mona Lisa?’, opts:[‘Miguel Angel’,‘Rafael’,‘Leonardo da Vinci’,‘Botticelli’], ans:2, exp:‘La Mona Lisa fue pintada por Leonardo da Vinci entre 1503 y 1519.’ },
{ q:‘Que significa ADN?’, opts:[‘Acido Desoxirribonucleico’,‘Agente Dinamico Natural’,‘Acido Diluido Natural’,‘Anillo Doblado Nitrogeno’], ans:0, exp:‘ADN significa Acido Desoxirribonucleico, la molecula que lleva informacion genetica.’ }
]
}
};

// ═══════════════════════════════════════════════════
//  TRADUCOES DA INTERFACE
// ═══════════════════════════════════════════════════
var TRANSLATIONS = {
pt: {
‘txt-btn-enter’:         ‘Entrar no Castelo’,
‘txt-select-title’:      ‘Escolha sua Princesa’,
‘txt-menu-explore’:      ‘Explorar’,
‘txt-menu-explore-sub’:  ‘Castelo 3D’,
‘txt-menu-custom’:       ‘Avatar’,
‘txt-menu-custom-sub’:   ‘Personalizar’,
‘txt-menu-race’:         ‘Corrida’,
‘txt-menu-race-sub’:     ‘Obstaculos’,
‘txt-menu-memory’:       ‘Memoria’,
‘txt-menu-memory-sub’:   ‘Pares’,
‘txt-menu-snake’:        ‘Cobrinha’,
‘txt-menu-snake-sub’:    ‘Arcade’,
‘txt-menu-quiz’:         ‘Quiz’,
‘txt-menu-quiz-sub’:     ‘Educativo’,
‘txt-custom-title’:      ‘Personalizar Avatar’,
‘txt-opt-hair’:          ‘Cabelo’,
‘txt-opt-outfit’:        ‘Roupa’,
‘txt-opt-shoes’:         ‘Sapatos’,
‘txt-opt-job’:           ‘Profissao’,
‘txt-btn-save’:          ‘Salvar Look’,
‘txt-race-pts’:          ’Pontos: ’,
‘txt-race-lives’:        ’  Vidas: ’,
‘txt-race-title’:        ‘Corrida Real’,
‘txt-race-hint’:         ‘Toque / Espaco / Seta para pular’,
‘txt-btn-race-start’:    ‘Iniciar’,
‘txt-race-over-title’:   ‘Fim de Jogo!’,
‘txt-memory-title’:      ‘Jogo da Memoria’,
‘txt-mem-easy’:          ‘Facil (4 pares)’,
‘txt-mem-med’:           ‘Medio (8 pares)’,
‘txt-mem-hard’:          ‘Dificil (12 pares)’,
‘txt-mem-win’:           ‘Parabens!’,
‘txt-snake-title’:       ‘Cobrinha Magica’,
‘txt-snake-hint’:        ‘Setas ou D-Pad para mover’,
‘txt-quiz-title’:        ‘Quiz Educativo’,
‘txt-quiz-desc’:         ‘Responda e aprenda brincando!’,
‘txt-quiz-easy’:         ‘Facil’,
‘txt-quiz-med’:          ‘Medio’,
‘txt-quiz-hard’:         ‘Dificil’,
‘hud-session-lbl’:       ’Sessao: ’
},
en: {
‘txt-btn-enter’:         ‘Enter the Castle’,
‘txt-select-title’:      ‘Choose your Princess’,
‘txt-menu-explore’:      ‘Explore’,
‘txt-menu-explore-sub’:  ‘3D Castle’,
‘txt-menu-custom’:       ‘Avatar’,
‘txt-menu-custom-sub’:   ‘Customize’,
‘txt-menu-race’:         ‘Race’,
‘txt-menu-race-sub’:     ‘Obstacles’,
‘txt-menu-memory’:       ‘Memory’,
‘txt-menu-memory-sub’:   ‘Pairs’,
‘txt-menu-snake’:        ‘Snake’,
‘txt-menu-snake-sub’:    ‘Arcade’,
‘txt-menu-quiz’:         ‘Quiz’,
‘txt-menu-quiz-sub’:     ‘Educational’,
‘txt-custom-title’:      ‘Customize Avatar’,
‘txt-opt-hair’:          ‘Hair’,
‘txt-opt-outfit’:        ‘Outfit’,
‘txt-opt-shoes’:         ‘Shoes’,
‘txt-opt-job’:           ‘Profession’,
‘txt-btn-save’:          ‘Save Look’,
‘txt-race-pts’:          ’Score: ’,
‘txt-race-lives’:        ’  Lives: ’,
‘txt-race-title’:        ‘Royal Race’,
‘txt-race-hint’:         ‘Tap / Space / Up Arrow to jump’,
‘txt-btn-race-start’:    ‘Start’,
‘txt-race-over-title’:   ‘Game Over!’,
‘txt-memory-title’:      ‘Memory Game’,
‘txt-mem-easy’:          ‘Easy (4 pairs)’,
‘txt-mem-med’:           ‘Medium (8 pairs)’,
‘txt-mem-hard’:          ‘Hard (12 pairs)’,
‘txt-mem-win’:           ‘Congratulations!’,
‘txt-snake-title’:       ‘Magic Snake’,
‘txt-snake-hint’:        ‘Arrow keys or D-Pad to move’,
‘txt-quiz-title’:        ‘Educational Quiz’,
‘txt-quiz-desc’:         ‘Answer and learn while playing!’,
‘txt-quiz-easy’:         ‘Easy’,
‘txt-quiz-med’:          ‘Medium’,
‘txt-quiz-hard’:         ‘Hard’,
‘hud-session-lbl’:       ’Session: ’
},
es: {
‘txt-btn-enter’:         ‘Entrar al Castillo’,
‘txt-select-title’:      ‘Elige tu Princesa’,
‘txt-menu-explore’:      ‘Explorar’,
‘txt-menu-explore-sub’:  ‘Castillo 3D’,
‘txt-menu-custom’:       ‘Avatar’,
‘txt-menu-custom-sub’:   ‘Personalizar’,
‘txt-menu-race’:         ‘Carrera’,
‘txt-menu-race-sub’:     ‘Obstaculos’,
‘txt-menu-memory’:       ‘Memoria’,
‘txt-menu-memory-sub’:   ‘Pares’,
‘txt-menu-snake’:        ‘Serpiente’,
‘txt-menu-snake-sub’:    ‘Arcade’,
‘txt-menu-quiz’:         ‘Quiz’,
‘txt-menu-quiz-sub’:     ‘Educativo’,
‘txt-custom-title’:      ‘Personalizar Avatar’,
‘txt-opt-hair’:          ‘Cabello’,
‘txt-opt-outfit’:        ‘Ropa’,
‘txt-opt-shoes’:         ‘Zapatos’,
‘txt-opt-job’:           ‘Profesion’,
‘txt-btn-save’:          ‘Guardar Look’,
‘txt-race-pts’:          ’Puntos: ’,
‘txt-race-lives’:        ’  Vidas: ’,
‘txt-race-title’:        ‘Carrera Real’,
‘txt-race-hint’:         ‘Toca / Espacio / Flecha Arriba’,
‘txt-btn-race-start’:    ‘Iniciar’,
‘txt-race-over-title’:   ‘Fin del Juego!’,
‘txt-memory-title’:      ‘Juego de Memoria’,
‘txt-mem-easy’:          ‘Facil (4 pares)’,
‘txt-mem-med’:           ‘Medio (8 pares)’,
‘txt-mem-hard’:          ‘Dificil (12 pares)’,
‘txt-mem-win’:           ‘Felicitaciones!’,
‘txt-snake-title’:       ‘Serpiente Magica’,
‘txt-snake-hint’:        ‘Flechas o D-Pad para mover’,
‘txt-quiz-title’:        ‘Quiz Educativo’,
‘txt-quiz-desc’:         ‘Responde y aprende jugando!’,
‘txt-quiz-easy’:         ‘Facil’,
‘txt-quiz-med’:          ‘Medio’,
‘txt-quiz-hard’:         ‘Dificil’,
‘hud-session-lbl’:       ’Sesion: ’
}
};

// ═══════════════════════════════════════════════════
//  OBSTACULOS DA CORRIDA
// ═══════════════════════════════════════════════════
var RACE_OBSTACLES = [
{ icon:‘https://cdn-icons-png.flaticon.com/512/2107/2107845.png’, label:‘Pedra’    },
{ icon:‘https://cdn-icons-png.flaticon.com/512/3069/3069080.png’, label:‘Arvore’   },
{ icon:‘https://cdn-icons-png.flaticon.com/512/3176/3176370.png’, label:‘Bolo’     },
{ icon:‘https://cdn-icons-png.flaticon.com/512/616/616408.png’,   label:‘Cobra’    }
];
‘use strict’;
// ═══════════════════════════════════════════════════
//  WEB AUDIO ENGINE
// ═══════════════════════════════════════════════════
var AudioCtx = null;
var musicPlaying = false;
var musicNodes   = {};
var musicEnabled = true;

function getAudioCtx() {
if (!AudioCtx) {
AudioCtx = new (window.AudioContext || window.webkitAudioContext)();
}
if (AudioCtx.state === ‘suspended’) {
AudioCtx.resume();
}
return AudioCtx;
}

// ── Beep genérico ────────────────────────────────
function playTone(freq, dur, type, vol, delay) {
if (!musicEnabled) return;
try {
var ctx  = getAudioCtx();
var osc  = ctx.createOscillator();
var gain = ctx.createGain();
osc.connect(gain);
gain.connect(ctx.destination);
osc.type      = type || ‘sine’;
osc.frequency.setValueAtTime(freq, ctx.currentTime + (delay || 0));
gain.gain.setValueAtTime(vol || 0.18, ctx.currentTime + (delay || 0));
gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + (delay || 0) + dur);
osc.start(ctx.currentTime + (delay || 0));
osc.stop(ctx.currentTime  + (delay || 0) + dur + 0.02);
} catch(e) {}
}

// ── Sons especializados ──────────────────────────
function playClick() {
playTone(880, 0.07, ‘triangle’, 0.15);
}

function playSuccess() {
playTone(523, 0.12, ‘sine’, 0.2);
playTone(659, 0.12, ‘sine’, 0.2, 0.13);
playTone(784, 0.18, ‘sine’, 0.2, 0.26);
}

function playError() {
playTone(220, 0.15, ‘sawtooth’, 0.15);
playTone(180, 0.15, ‘sawtooth’, 0.15, 0.16);
}

function playJump() {
var ctx  = getAudioCtx();
var osc  = ctx.createOscillator();
var gain = ctx.createGain();
osc.connect(gain); gain.connect(ctx.destination);
osc.type = ‘sine’;
osc.frequency.setValueAtTime(300, ctx.currentTime);
osc.frequency.exponentialRampToValueAtTime(600, ctx.currentTime + 0.15);
gain.gain.setValueAtTime(0.2, ctx.currentTime);
gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.2);
osc.start(ctx.currentTime);
osc.stop(ctx.currentTime + 0.22);
}

function playHit() {
playTone(150, 0.2, ‘sawtooth’, 0.2);
}

function playCoin() {
playTone(1046, 0.06, ‘sine’, 0.2);
playTone(1318, 0.09, ‘sine’, 0.2, 0.07);
}

function playCardFlip() {
playTone(440, 0.08, ‘triangle’, 0.12);
}

function playMatch() {
[523,659,784,1046].forEach(function(f,i){ playTone(f,0.1,‘sine’,0.18,i*0.1); });
}

function playEat() {
playTone(660, 0.06, ‘square’, 0.12);
playTone(880, 0.06, ‘square’, 0.12, 0.07);
}

function playGameOver() {
[440,392,349,330,294].forEach(function(f,i){ playTone(f,0.15,‘sawtooth’,0.15,i*0.12); });
}

function playCorrect() {
playTone(659, 0.1, ‘sine’, 0.2);
playTone(784, 0.1, ‘sine’, 0.2, 0.11);
playTone(1046,0.15,‘sine’, 0.2, 0.22);
}

function playWrong() {
playTone(200, 0.2, ‘sawtooth’, 0.18);
}

// ═══════════════════════════════════════════════════
//  MUSICA DE FUNDO (castelo / princesa)
//  Sequencia musical gerada via Web Audio API
// ═══════════════════════════════════════════════════
var bgMusicTimeout = null;
var bgMusicRunning = false;

var MELODY_NOTES = [
523.25, 587.33, 659.25, 698.46,
783.99, 698.46, 659.25, 587.33,
523.25, 493.88, 440.00, 493.88,
523.25, 523.25, 587.33, 659.25,
698.46, 783.99, 880.00, 783.99,
698.46, 659.25, 587.33, 523.25
];
var BASS_NOTES = [
261.63, 261.63, 329.63, 349.23,
392.00, 349.23, 329.63, 261.63
];

function startBgMusic() {
if (bgMusicRunning) return;
bgMusicRunning = true;
if (!musicEnabled) return;
scheduleMelody(0);
}

function stopBgMusic() {
bgMusicRunning = false;
clearTimeout(bgMusicTimeout);
}

function scheduleMelody(step) {
if (!bgMusicRunning || !musicEnabled) return;
var note = MELODY_NOTES[step % MELODY_NOTES.length];
var bass = BASS_NOTES[Math.floor(step / 3) % BASS_NOTES.length];
playTone(note, 0.22, ‘sine’,     0.06);
playTone(bass, 0.25, ‘triangle’, 0.04);
bgMusicTimeout = setTimeout(function() {
scheduleMelody(step + 1);
}, 320);
}

function toggleMusic() {
musicEnabled = !musicEnabled;
var btn = document.getElementById(‘music-btn’);
if (btn) btn.textContent = ’Musica: ’ + (musicEnabled ? ‘ON’ : ‘OFF’);
if (musicEnabled) {
bgMusicRunning = false;
startBgMusic();
} else {
stopBgMusic();
}
}
 ‘use strict’;

// ═══════════════════════════════════════════════════
//  DESENHO DA PRINCESA (canvas 2D estilo Roblox)
// ═══════════════════════════════════════════════════
function drawPrincess(canvas, char, scale) {
scale = scale || 1;
var ctx = canvas.getContext(‘2d’);
var w = canvas.width, h = canvas.height;
ctx.clearRect(0, 0, w, h);

var cx = w / 2;
var top = h * 0.08;

var bh = h * 0.13;  // head height
var bw = h * 0.17;  // head width
var bd = h * 0.26;  // body height
var bwd= h * 0.20;  // body width
var legH = h * 0.20;
var legW = h * 0.08;
var armH = h * 0.18;
var armW = h * 0.07;
var shoeH= h * 0.05;

// === CABELO TRASEIRO ===
ctx.fillStyle = char.hair;
ctx.beginPath();
ctx.ellipse(cx, top + bh * 0.4, bw * 0.65, bh * 0.85, 0, 0, Math.PI*2);
ctx.fill();
// mechas de cabelo
ctx.fillStyle = shadeColor(char.hair, -20);
ctx.beginPath();
ctx.ellipse(cx - bw*0.55, top + bh*0.9 + legH*0.1, bw*0.12, legH*0.35, -0.3, 0, Math.PI*2);
ctx.fill();
ctx.beginPath();
ctx.ellipse(cx + bw*0.55, top + bh*0.9 + legH*0.1, bw*0.12, legH*0.35, 0.3, 0, Math.PI*2);
ctx.fill();

// === BRACOS ===
ctx.fillStyle = shadeColor(char.outfit, -10);
// braco esquerdo
ctx.beginPath();
ctx.roundRect(cx - bwd*0.5 - armW, top + bh*0.9, armW, armH, armW*0.4);
ctx.fill();
// braco direito
ctx.beginPath();
ctx.roundRect(cx + bwd*0.5, top + bh*0.9, armW, armH, armW*0.4);
ctx.fill();
// maos
ctx.fillStyle = char.skin;
ctx.beginPath(); ctx.arc(cx - bwd*0.5 - armW*0.5, top + bh*0.9 + armH + armW*0.45, armW*0.45, 0, Math.PI*2); ctx.fill();
ctx.beginPath(); ctx.arc(cx + bwd*0.5 + armW*0.5, top + bh*0.9 + armH + armW*0.45, armW*0.45, 0, Math.PI*2); ctx.fill();

// === CORPO / VESTIDO ===
// saia alargada
ctx.fillStyle = char.outfit;
ctx.beginPath();
ctx.moveTo(cx - bwd*0.5, top + bh*0.85);
ctx.quadraticCurveTo(cx - bwd*0.85, top + bh*0.85 + bd*0.5, cx - bwd*1.05, top + bh*0.85 + bd);
ctx.lineTo(cx + bwd*1.05, top + bh*0.85 + bd);
ctx.quadraticCurveTo(cx + bwd*0.85, top + bh*0.85 + bd*0.5, cx + bwd*0.5, top + bh*0.85);
ctx.closePath();
ctx.fill();
// tronco
ctx.fillStyle = shadeColor(char.outfit, 10);
ctx.beginPath();
ctx.roundRect(cx - bwd*0.42, top + bh*0.82, bwd*0.84, bd*0.42, 4);
ctx.fill();
// brilho no vestido
ctx.fillStyle = ‘rgba(255,255,255,0.18)’;
ctx.beginPath();
ctx.ellipse(cx - bwd*0.18, top + bh*0.85 + bd*0.3, bwd*0.08, bd*0.14, -0.5, 0, Math.PI*2);
ctx.fill();
// detalhes / gola
ctx.fillStyle = shadeColor(char.hair, 20);
ctx.beginPath();
ctx.moveTo(cx - bwd*0.3, top + bh*0.85);
ctx.quadraticCurveTo(cx, top + bh*0.85 + bd*0.15, cx + bwd*0.3, top + bh*0.85);
ctx.stroke && ctx.stroke();
ctx.fill();

// === PESCOCO ===
ctx.fillStyle = char.skin;
ctx.beginPath();
ctx.roundRect(cx - bwd*0.13, top + bh*0.78, bwd*0.26, bh*0.2, 4);
ctx.fill();

// === PERNAS ===
// perna esquerda
ctx.fillStyle = char.skin;
ctx.beginPath();
ctx.roundRect(cx - bwd*0.3, top + bh*0.85 + bd, legW, legH, legW*0.3);
ctx.fill();
// perna direita
ctx.beginPath();
ctx.roundRect(cx + bwd*0.3 - legW, top + bh*0.85 + bd, legW, legH, legW*0.3);
ctx.fill();
// sapatos
ctx.fillStyle = char.shoe;
ctx.beginPath(); ctx.ellipse(cx - bwd*0.3 + legW*0.5, top + bh*0.85 + bd + legH + shoeH*0.5, legW*0.7, shoeH, 0.1, 0, Math.PI*2); ctx.fill();
ctx.beginPath(); ctx.ellipse(cx + bwd*0.3 - legW*0.5, top + bh*0.85 + bd + legH + shoeH*0.5, legW*0.7, shoeH, -0.1, 0, Math.PI*2); ctx.fill();

// === CABECA ===
ctx.fillStyle = char.skin;
ctx.beginPath();
ctx.roundRect(cx - bw*0.5, top, bw, bh, bw*0.22);
ctx.fill();
// brilho rosto
ctx.fillStyle = ‘rgba(255,255,255,0.12)’;
ctx.beginPath(); ctx.ellipse(cx - bw*0.12, top + bh*0.28, bw*0.16, bh*0.12, -0.4, 0, Math.PI*2); ctx.fill();

// === OLHOS ===
var eyeY = top + bh * 0.46;
var eyeR = bh * 0.1;
// branco dos olhos
ctx.fillStyle = ‘#ffffff’;
ctx.beginPath(); ctx.ellipse(cx - bw*0.22, eyeY, eyeR*0.8, eyeR, 0, 0, Math.PI*2); ctx.fill();
ctx.beginPath(); ctx.ellipse(cx + bw*0.22, eyeY, eyeR*0.8, eyeR, 0, 0, Math.PI*2); ctx.fill();
// iris colorida
ctx.fillStyle = char.hair;
ctx.beginPath(); ctx.arc(cx - bw*0.22, eyeY, eyeR*0.62, 0, Math.PI*2); ctx.fill();
ctx.beginPath(); ctx.arc(cx + bw*0.22, eyeY, eyeR*0.62, 0, Math.PI*2); ctx.fill();
// pupila
ctx.fillStyle = ‘#1a0a00’;
ctx.beginPath(); ctx.arc(cx - bw*0.21, eyeY, eyeR*0.3, 0, Math.PI*2); ctx.fill();
ctx.beginPath(); ctx.arc(cx + bw*0.23, eyeY, eyeR*0.3, 0, Math.PI*2); ctx.fill();
// brilho olho
ctx.fillStyle = ‘#ffffff’;
ctx.beginPath(); ctx.arc(cx - bw*0.19, eyeY - eyeR*0.2, eyeR*0.16, 0, Math.PI*2); ctx.fill();
ctx.beginPath(); ctx.arc(cx + bw*0.25, eyeY - eyeR*0.2, eyeR*0.16, 0, Math.PI*2); ctx.fill();
// cilios
ctx.strokeStyle = ‘#3d1a00’; ctx.lineWidth = bh*0.018;
[-0.38, -0.22, -0.06].forEach(function(ox) {
ctx.beginPath(); ctx.moveTo(cx + ox*bw, eyeY - eyeR*0.95); ctx.lineTo(cx + ox*bw - bw*0.015, eyeY - eyeR*1.45); ctx.stroke();
});
[0.06, 0.22, 0.38].forEach(function(ox) {
ctx.beginPath(); ctx.moveTo(cx + ox*bw, eyeY - eyeR*0.95); ctx.lineTo(cx + ox*bw + bw*0.015, eyeY - eyeR*1.45); ctx.stroke();
});

// === BOCHECHA ===
ctx.fillStyle = ‘rgba(255,160,160,0.38)’;
ctx.beginPath(); ctx.ellipse(cx - bw*0.38, top + bh*0.62, bw*0.13, bh*0.07, 0, 0, Math.PI*2); ctx.fill();
ctx.beginPath(); ctx.ellipse(cx + bw*0.38, top + bh*0.62, bw*0.13, bh*0.07, 0, 0, Math.PI*2); ctx.fill();

// === SORRISO ===
ctx.strokeStyle = ‘#c0604a’; ctx.lineWidth = bh*0.022; ctx.lineCap = ‘round’;
ctx.beginPath();
ctx.moveTo(cx - bw*0.18, top + bh*0.72);
ctx.quadraticCurveTo(cx, top + bh*0.82, cx + bw*0.18, top + bh*0.72);
ctx.stroke();

// === NARIZ ===
ctx.strokeStyle = ‘#c8956a’; ctx.lineWidth = bh*0.015;
ctx.beginPath(); ctx.arc(cx, top + bh*0.6, bw*0.06, 0.2, Math.PI-0.2); ctx.stroke();

// === CABELO FRENTE / TOPO ===
ctx.fillStyle = char.hair;
ctx.beginPath();
ctx.ellipse(cx, top + bh*0.08, bw*0.52, bh*0.22, 0, 0, Math.PI*2);
ctx.fill();
// franja
ctx.beginPath();
ctx.moveTo(cx - bw*0.5, top + bh*0.32);
ctx.quadraticCurveTo(cx - bw*0.28, top - bh*0.04, cx, top + bh*0.18);
ctx.quadraticCurveTo(cx + bw*0.28, top - bh*0.04, cx + bw*0.5, top + bh*0.32);
ctx.fill();

// === COROA ===
var crownY = top - bh*0.12;
ctx.fillStyle = var_gold();
ctx.beginPath();
ctx.moveTo(cx - bw*0.42, crownY + bh*0.12);
ctx.lineTo(cx - bw*0.42, crownY);
ctx.lineTo(cx - bw*0.22, crownY + bh*0.1);
ctx.lineTo(cx,           crownY - bh*0.06);
ctx.lineTo(cx + bw*0.22, crownY + bh*0.1);
ctx.lineTo(cx + bw*0.42, crownY);
ctx.lineTo(cx + bw*0.42, crownY + bh*0.12);
ctx.closePath();
ctx.fill();
// joias da coroa
ctx.fillStyle = char.shoe;
ctx.beginPath(); ctx.arc(cx,          crownY,          bw*0.06, 0, Math.PI*2); ctx.fill();
ctx.fillStyle = shadeColor(char.shoe, 40);
ctx.beginPath(); ctx.arc(cx - bw*0.28, crownY + bh*0.06, bw*0.045, 0, Math.PI*2); ctx.fill();
ctx.beginPath(); ctx.arc(cx + bw*0.28, crownY + bh*0.06, bw*0.045, 0, Math.PI*2); ctx.fill();
}

function var_gold() { return ‘#ffd700’; }

function shadeColor(hex, pct) {
var r = parseInt(hex.slice(1,3),16);
var g = parseInt(hex.slice(3,5),16);
var b = parseInt(hex.slice(5,7),16);
r = Math.min(255, Math.max(0, r + pct));
g = Math.min(255, Math.max(0, g + pct));
b = Math.min(255, Math.max(0, b + pct));
return ‘#’ + [r,g,b].map(function(v){ return v.toString(16).padStart(2,‘0’); }).join(’’);
}

// Polyfill roundRect
if (!CanvasRenderingContext2D.prototype.roundRect) {
CanvasRenderingContext2D.prototype.roundRect = function(x,y,w,h,r) {
if (w < 2*r) r = w/2; if (h < 2*r) r = h/2;
this.beginPath();
this.moveTo(x+r,y); this.arcTo(x+w,y,x+w,y+h,r);
this.arcTo(x+w,y+h,x,y+h,r); this.arcTo(x,y+h,x,y,r);
this.arcTo(x,y,x+w,y,r); this.closePath(); return this;
};
}

// ═══════════════════════════════════════════════════
//  AVATAR / CUSTOMIZACAO
// ═══════════════════════════════════════════════════
function buildCustom() {
var cvs = document.getElementById(‘custom-canvas’);
drawPrincess(cvs, curChar, 1);
document.getElementById(‘custom-char-name’).textContent = curChar.name;
document.getElementById(‘custom-char-job’).textContent  = curChar.job;
buildSwatches(‘hair-swatches’,   HAIR_COLORS,   ‘hair’);
buildSwatches(‘outfit-swatches’, OUTFIT_COLORS, ‘outfit’);
buildSwatches(‘shoe-swatches’,   SHOE_COLORS,   ‘shoe’);
buildJobBtns();
}

function buildSwatches(id, colors, prop) {
var row = document.getElementById(id);
row.innerHTML = ‘’;
colors.forEach(function(c) {
var sw = document.createElement(‘div’);
sw.className = ‘swatch’ + (curChar[prop] === c ? ’ active’ : ‘’);
sw.style.background = c;
sw.addEventListener(‘click’, function() {
curChar[prop] = c;
row.querySelectorAll(’.swatch’).forEach(function(s){ s.classList.remove(‘active’); });
sw.classList.add(‘active’);
drawPrincess(document.getElementById(‘custom-canvas’), curChar, 1);
playClick();
});
row.appendChild(sw);
});
}

function buildJobBtns() {
var row = document.getElementById(‘job-buttons’);
row.innerHTML = ‘’;
JOBS.forEach(function(j) {
var btn = document.createElement(‘button’);
btn.className = ‘job-btn’ + (curChar.job === j ? ’ active’ : ‘’);
btn.textContent = j;
btn.addEventListener(‘click’, function() {
curChar.job = j;
row.querySelectorAll(’.job-btn’).forEach(function(b){ b.classList.remove(‘active’); });
btn.classList.add(‘active’);
document.getElementById(‘custom-char-job’).textContent = j;
playClick();
});
row.appendChild(btn);
});
}

function saveCustom() {
playSuccess();
showToast(curLang === ‘pt’ ? ‘Look salvo com sucesso!’ : curLang === ‘en’ ? ‘Look saved!’ : ‘Look guardado!’);
buildMenuHeader();
}

// ═══════════════════════════════════════════════════
//  JOGO DA MEMORIA
// ═══════════════════════════════════════════════════
var memState = {
cards:[], flipped:[], matched:0, moves:0,
timer:0, interval:null, locked:false, total:0
};

function stopMemory() {
clearInterval(memState.interval);
}

function startMemory(pairs) {
clearInterval(memState.interval);
memState.matched = 0; memState.moves = 0; memState.timer = 0;
memState.locked = false; memState.flipped = []; memState.total = pairs;

document.getElementById(‘memory-diff-row’).classList.add(‘hidden’);
document.getElementById(‘memory-stats’).classList.remove(‘hidden’);
document.getElementById(‘memory-win’).classList.add(‘hidden’);
document.getElementById(‘mem-timer’).textContent = ‘0’;
document.getElementById(‘mem-pairs’).textContent = ‘0’;
document.getElementById(‘mem-moves’).textContent = ‘0’;

var pool  = MEMORY_CARDS.slice(0, pairs);
var deck  = pool.concat(pool).sort(function(){ return Math.random()-0.5; });
var cols  = pairs <= 4 ? 4 : pairs <= 8 ? 4 : 6;
var cardSz= pairs <= 4 ? ‘80px’ : pairs <= 8 ? ‘70px’ : ‘55px’;
var grid  = document.getElementById(‘memory-grid’);
grid.style.gridTemplateColumns = ‘repeat(’ + cols + ’, ’ + cardSz + ‘)’;
grid.innerHTML = ‘’;
memState.cards = [];

deck.forEach(function(cardData, i) {
var card = document.createElement(‘div’);
card.className = ‘mem-card’;
card.style.cssText = ‘width:’ + cardSz + ‘;height:’ + cardSz + ‘;’;
card.innerHTML =
‘<div class="mem-front" style="background:linear-gradient(135deg,#5a0099,#c2006e);">’
+ ‘<img src="https://cdn-icons-png.flaticon.com/512/616/616490.png" style="width:55%;height:55%;object-fit:contain;opacity:0.5;">’
+ ‘</div>’
+ ‘<div class="mem-back"><img class="mem-front-img" src="' + cardData.img + '" alt="' + cardData.label + '"></div>’;

```
card.addEventListener('click', (function(idx, data){
  return function(){ flipMemCard(this, idx, data); };
}(i, cardData)));

grid.appendChild(card);
memState.cards.push({ el:card, data:cardData, matched:false });
```

});

memState.interval = setInterval(function(){
memState.timer++;
document.getElementById(‘mem-timer’).textContent = memState.timer;
}, 1000);
}

function flipMemCard(el, idx, data) {
var s = memState;
if (s.locked || s.cards[idx].matched) return;
if (s.flipped.some(function(f){ return f.idx === idx; })) return;
el.classList.add(‘flipped’);
playCardFlip();
s.flipped.push({ idx:idx, data:data, el:el });

if (s.flipped.length === 2) {
s.locked = true; s.moves++;
document.getElementById(‘mem-moves’).textContent = s.moves;
var a = s.flipped[0], b = s.flipped[1];
if (a.data.label === b.data.label) {
s.matched++;
document.getElementById(‘mem-pairs’).textContent = s.matched;
a.el.classList.add(‘matched’); b.el.classList.add(‘matched’);
s.cards[a.idx].matched = true; s.cards[b.idx].matched = true;
s.flipped = []; s.locked = false;
playMatch();
if (s.matched === s.total) memoryWin();
} else {
setTimeout(function(){
a.el.classList.remove(‘flipped’); b.el.classList.remove(‘flipped’);
s.flipped = []; s.locked = false;
playError();
}, 900);
}
}
}

function memoryWin() {
clearInterval(memState.interval);
var win = document.getElementById(‘memory-win’);
document.getElementById(‘mem-win-msg’).textContent =
(curLang===‘pt’?‘Voce completou em ‘:‘You finished in ‘) + memState.timer +
(curLang===‘pt’?’ segundos com ‘:’ seconds with ‘) + memState.moves +
(curLang===‘pt’?’ jogadas!’:’ moves!’);
win.classList.remove(‘hidden’);
playSuccess();
playSuccess();
}

// ═══════════════════════════════════════════════════
//  CORRIDA (ENDLESS RUNNER)
// ═══════════════════════════════════════════════════
var raceState = {
running:false, score:0, lives:3, speed:3,
frame:0, raf:null, groundY:0,
player:{ x:80, y:0, w:36, h:52, vy:0, grounded:true },
obstacles:[], clouds:[], coins:[],
obsImages:{}, dollImage:null,
jumpPressed:false
};

function initRaceImages() {
RACE_OBSTACLES.forEach(function(o, i) {
var img = new Image();
img.src = o.icon;
raceState.obsImages[i] = img;
});
// Doll image
var cvs = document.createElement(‘canvas’);
cvs.width = 80; cvs.height = 120;
drawPrincess(cvs, curChar, 1);
var img2 = new Image();
img2.src = cvs.toDataURL();
raceState.dollImage = img2;
}

function startRace() {
document.getElementById(‘race-overlay’).classList.add(‘hidden’);
document.getElementById(‘race-over’).classList.add(‘hidden’);
var isMobile = window.innerWidth <= 600 || ‘ontouchstart’ in window;
var jb = document.getElementById(‘race-jump-btn’);
if (isMobile) jb.classList.remove(‘hidden’); else jb.classList.add(‘hidden’);

var cvs = document.getElementById(‘race-canvas’);
cvs.width  = window.innerWidth;
cvs.height = window.innerHeight;
raceState.groundY = cvs.height - 70;
raceState.player.y = raceState.groundY - raceState.player.h;

raceState.running = true; raceState.score = 0; raceState.lives = 3;
raceState.speed = 3; raceState.frame = 0;
raceState.obstacles = []; raceState.clouds = []; raceState.coins = [];
raceState.player.vy = 0; raceState.player.grounded = true;

document.getElementById(‘race-score’).textContent = ‘0’;
document.getElementById(‘race-lives’).textContent = ‘3’;

initRaceImages();

cvs.addEventListener(‘click’, raceJump);
cvs.addEventListener(‘touchstart’, raceJump, {passive:true});
document.addEventListener(‘keydown’, raceKey);
raceLoop();
}

function raceKey(e) {
if (e.code === ‘Space’ || e.code === ‘ArrowUp’) { e.preventDefault(); raceJump(); }
}

function raceJump() {
if (!raceState.running) return;
if (!raceState.player.grounded) return;
raceState.player.vy = -15;
raceState.player.grounded = false;
playJump();
}

function stopRace() {
raceState.running = false;
if (raceState.raf) cancelAnimationFrame(raceState.raf);
var cvs = document.getElementById(‘race-canvas’);
cvs.removeEventListener(‘click’, raceJump);
cvs.removeEventListener(‘touchstart’, raceJump);
document.removeEventListener(‘keydown’, raceKey);
document.getElementById(‘race-jump-btn’).classList.add(‘hidden’);
}

function raceLoop() {
if (!raceState.running) return;
updateRace();
drawRace();
raceState.raf = requestAnimationFrame(raceLoop);
}

function updateRace() {
var s = raceState;
var cvs = document.getElementById(‘race-canvas’);
s.frame++;
s.score++;
s.speed = 3 + Math.floor(s.score / 400) * 0.6;
document.getElementById(‘race-score’).textContent = s.score;

// Physics
s.player.vy += 0.72;
s.player.y  += s.player.vy;
if (s.player.y >= s.groundY - s.player.h) {
s.player.y = s.groundY - s.player.h;
s.player.vy = 0; s.player.grounded = true;
}

// Spawn obstacles
var interval = Math.max(50, 110 - Math.floor(s.score/300)*5);
if (s.frame % interval === 0) {
var type = Math.floor(Math.random() * RACE_OBSTACLES.length);
var sizes = [{w:34,h:50},{w:50,h:40},{w:40,h:46},{w:36,h:48}];
var sz = sizes[type];
s.obstacles.push({ x:cvs.width+50, y:s.groundY - sz.h, w:sz.w, h:sz.h, type:type });
}

// Spawn coins
if (s.frame % 80 === 0) {
var coinY = s.groundY - s.player.h - 30 - Math.random()*80;
s.coins.push({ x:cvs.width+20, y:coinY, r:12, collected:false });
}

// Spawn clouds
if (s.frame % 120 === 0) {
s.clouds.push({ x:cvs.width+60, y:20+Math.random()*cvs.height*0.4, w:80+Math.random()*60 });
}

// Move
s.obstacles.forEach(function(o){ o.x -= s.speed; });
s.coins.forEach(function(c)    { c.x -= s.speed*0.9; });
s.clouds.forEach(function(cl)  { cl.x -= s.speed*0.25; });
s.obstacles = s.obstacles.filter(function(o){ return o.x + o.w > -10; });
s.coins     = s.coins.filter(function(c)    { return c.x > -20; });
s.clouds    = s.clouds.filter(function(cl)  { return cl.x + cl.w > -10; });

// Coin collision
var p = s.player;
s.coins.forEach(function(c) {
if (!c.collected && p.x + p.w > c.x - c.r && p.x < c.x + c.r &&
p.y + p.h > c.y - c.r && p.y < c.y + c.r) {
c.collected = true; s.score += 10; playCoin();
}
});

// Obstacle collision
s.obstacles.forEach(function(o) {
if (p.x + p.w - 8 > o.x + 6 && p.x + 8 < o.x + o.w - 6 &&
p.y + p.h - 6 > o.y && p.y + 6 < o.y + o.h) {
o.x = -9999; s.lives–;
document.getElementById(‘race-lives’).textContent = s.lives;
playHit();
if (s.lives <= 0) raceOver();
}
});
}

function drawRace() {
var s   = raceState;
var cvs = document.getElementById(‘race-canvas’);
var ctx = cvs.getContext(‘2d’);
var cw  = cvs.width, ch = cvs.height;

// Sky gradient
var sky = ctx.createLinearGradient(0, 0, 0, ch);
sky.addColorStop(0, ‘#0a0318’); sky.addColorStop(0.65, ‘#1a0a35’); sky.addColorStop(1, ‘#2a1050’);
ctx.fillStyle = sky; ctx.fillRect(0, 0, cw, ch);

// Stars
ctx.fillStyle = ‘rgba(255,255,255,0.45)’;
for (var i = 0; i < 30; i++) {
var sx = (i * 139 + s.frame * 0.15) % cw;
var sy = (i * 83) % (ch * 0.6);
ctx.fillRect(sx, sy, i % 3 === 0 ? 2 : 1, i % 3 === 0 ? 2 : 1);
}

// Clouds
ctx.fillStyle = ‘rgba(255,255,255,0.07)’;
s.clouds.forEach(function(cl) {
ctx.beginPath();
ctx.ellipse(cl.x, cl.y, cl.w/2, 18, 0, 0, Math.PI*2);
ctx.fill();
});

// Ground
ctx.fillStyle = ‘#14082a’;
ctx.fillRect(0, s.groundY, cw, ch - s.groundY);
// Ground line
var grad = ctx.createLinearGradient(0, s.groundY, cw, s.groundY);
grad.addColorStop(0, ‘#c77dff’); grad.addColorStop(0.5, ‘#ff4fa3’); grad.addColorStop(1, ‘#c77dff’);
ctx.fillStyle = grad; ctx.fillRect(0, s.groundY, cw, 4);
// Ground dots
ctx.fillStyle = ‘rgba(155,46,255,0.35)’;
for (var lx = (-s.frame * s.speed) % 70; lx < cw; lx += 70) {
ctx.fillRect(lx, s.groundY + 6, 38, 3);
}

// Coins
s.coins.forEach(function(c) {
if (c.collected) return;
ctx.save();
ctx.fillStyle = ‘#ffd700’;
ctx.strokeStyle = ‘#b8860b’; ctx.lineWidth = 2;
ctx.beginPath(); ctx.arc(c.x, c.y, c.r, 0, Math.PI*2);
ctx.fill(); ctx.stroke();
ctx.fillStyle = ‘#fff8’; ctx.font = ‘bold 11px sans-serif’; ctx.textAlign = ‘center’; ctx.textBaseline = ‘middle’;
ctx.fillText(’$’, c.x, c.y);
ctx.restore();
});

// Obstacles
s.obstacles.forEach(function(o) {
var img = s.obsImages[o.type];
if (img && img.complete && img.naturalWidth > 0) {
ctx.drawImage(img, o.x, o.y, o.w, o.h);
} else {
ctx.fillStyle = ‘#ff4fa3’; ctx.fillRect(o.x, o.y, o.w, o.h);
}
});

// Player
var shadow = ctx.createRadialGradient(s.player.x + s.player.w/2, s.groundY, 2, s.player.x + s.player.w/2, s.groundY, 22);
shadow.addColorStop(0,‘rgba(0,0,0,0.3)’); shadow.addColorStop(1,‘rgba(0,0,0,0)’);
ctx.fillStyle = shadow;
ctx.beginPath(); ctx.ellipse(s.player.x+s.player.w/2, s.groundY+4, 22, 6, 0, 0, Math.PI*2); ctx.fill();

if (s.dollImage && s.dollImage.complete && s.dollImage.naturalWidth > 0) {
ctx.drawImage(s.dollImage, s.player.x, s.player.y, s.player.w, s.player.h);
} else {
ctx.fillStyle = curChar.outfit; ctx.fillRect(s.player.x, s.player.y, s.player.w, s.player.h);
ctx.fillStyle = curChar.skin; ctx.fillRect(s.player.x+8, s.player.y-16, 20, 18);
}
}

function raceOver() {
raceState.running = false;
var over = document.getElementById(‘race-over’);
document.getElementById(‘race-final-msg’).textContent =
(curLang===‘pt’?’Pontuacao final: ’:’Final score: ’) + raceState.score;
over.classList.remove(‘hidden’);
playGameOver();
}

// ═══════════════════════════════════════════════════
//  COBRINHA
// ═══════════════════════════════════════════════════
var snakeState = {
running:false, raf:null, interval:null,
score:0, best:0, size:20,
snake:[], dir:{x:1,y:0}, nextDir:{x:1,y:0},
food:{ x:10, y:10 }, cols:0, rows:0
};

function stopSnake() {
snakeState.running = false;
clearInterval(snakeState.interval);
if (snakeState.raf) cancelAnimationFrame(snakeState.raf);
}

function startSnake() {
document.getElementById(‘snake-overlay’).classList.add(‘hidden’);
document.getElementById(‘snake-over’).classList.add(‘hidden’);

var cvs = document.getElementById(‘snake-canvas’);
cvs.width  = window.innerWidth;
cvs.height = window.innerHeight;

var s   = snakeState;
var sz  = s.size;
s.cols  = Math.floor(cvs.width / sz);
s.rows  = Math.floor((cvs.height - 90) / sz);
s.cols  = Math.max(10, s.cols);
s.rows  = Math.max(10, s.rows);

s.running  = true; s.score = 0;
s.dir      = { x:1, y:0 }; s.nextDir = { x:1, y:0 };
s.snake    = [
{ x:6, y:Math.floor(s.rows/2) },
{ x:5, y:Math.floor(s.rows/2) },
{ x:4, y:Math.floor(s.rows/2) }
];
document.getElementById(‘snake-score’).textContent = ‘0’;
placeSnakeFood();
document.addEventListener(‘keydown’, snakeKey);

clearInterval(s.interval);
s.interval = setInterval(snakeStep, 130);
snakeDrawLoop();
}

function snakeKey(e) {
var map = { ArrowUp:[0,-1], ArrowDown:[0,1], ArrowLeft:[-1,0], ArrowRight:[1,0] };
if (map[e.code]) {
e.preventDefault();
snakeDir(map[e.code][0], map[e.code][1]);
}
}

function snakeDir(dx, dy) {
var s = snakeState;
if (s.dir.x !== -dx || s.dir.y !== -dy) {
s.nextDir = { x:dx, y:dy };
}
}

function placeSnakeFood() {
var s = snakeState;
var fx, fy, ok;
do {
fx = Math.floor(Math.random() * s.cols);
fy = Math.floor(Math.random() * s.rows);
ok = !s.snake.some(function(seg){ return seg.x===fx && seg.y===fy; });
} while (!ok);
s.food = { x:fx, y:fy };
}

function snakeStep() {
var s  = snakeState;
if (!s.running) return;
s.dir  = s.nextDir;
var head = { x: s.snake[0].x + s.dir.x, y: s.snake[0].y + s.dir.y };

// Wall wrap
head.x = (head.x + s.cols) % s.cols;
head.y = (head.y + s.rows) % s.rows;

// Self collision
if (s.snake.some(function(seg){ return seg.x===head.x && seg.y===head.y; })) {
snakeOver(); return;
}
s.snake.unshift(head);

if (head.x === s.food.x && head.y === s.food.y) {
s.score += 10;
document.getElementById(‘snake-score’).textContent = s.score;
if (s.score > s.best) { s.best = s.score; document.getElementById(‘snake-best’).textContent = s.best; }
placeSnakeFood(); playEat();
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
var ctx = cvs.getContext(‘2d’);
var cw  = cvs.width, ch = cvs.height;
var sz  = s.size;
var offsetY = 44;

// Background
var bg = ctx.createLinearGradient(0, 0, 0, ch);
bg.addColorStop(0, ‘#0a0318’); bg.addColorStop(1, ‘#14082a’);
ctx.fillStyle = bg; ctx.fillRect(0, 0, cw, ch);

// Grid subtle
ctx.strokeStyle = ‘rgba(155,46,255,0.06)’; ctx.lineWidth = 0.5;
for (var gx = 0; gx <= s.cols; gx++) {
ctx.beginPath(); ctx.moveTo(gx*sz, offsetY); ctx.lineTo(gx*sz, offsetY+s.rows*sz); ctx.stroke();
}
for (var gy = 0; gy <= s.rows; gy++) {
ctx.beginPath(); ctx.moveTo(0, offsetY+gy*sz); ctx.lineTo(cw, offsetY+gy*sz); ctx.stroke();
}

// Food
var fx = s.food.x * sz + sz/2, fy = offsetY + s.food.y * sz + sz/2;
var foodGrad = ctx.createRadialGradient(fx, fy, 2, fx, fy, sz*0.45);
foodGrad.addColorStop(0, ‘#ffd700’); foodGrad.addColorStop(1, ‘#b8860b’);
ctx.fillStyle = foodGrad;
ctx.beginPath(); ctx.arc(fx, fy, sz*0.42, 0, Math.PI*2); ctx.fill();
ctx.fillStyle = ‘rgba(255,255,255,0.5)’;
ctx.beginPath(); ctx.arc(fx - sz*0.1, fy - sz*0.1, sz*0.1, 0, Math.PI*2); ctx.fill();

// Snake body
s.snake.forEach(function(seg, i) {
var bx = seg.x * sz, by = offsetY + seg.y * sz;
var ratio = 1 - (i / s.snake.length) * 0.4;
var alpha = 0.6 + ratio * 0.4;
ctx.fillStyle = i === 0 ? ‘#c77dff’ : ‘rgba(155,46,255,’ + alpha + ‘)’;
ctx.beginPath();
ctx.roundRect(bx+1, by+1, sz-2, sz-2, sz*0.2);
ctx.fill();
// shine
ctx.fillStyle = ‘rgba(255,255,255,0.15)’;
ctx.beginPath();
ctx.roundRect(bx+3, by+3, sz*0.35, sz*0.25, 3);
ctx.fill();
});

// Head eyes
if (s.snake.length > 0) {
var hd = s.snake[0];
var hx = hd.x * sz, hy = offsetY + hd.y * sz;
ctx.fillStyle = ‘#ffffff’;
ctx.beginPath(); ctx.arc(hx + sz*0.28, hy + sz*0.32, sz*0.14, 0, Math.PI*2); ctx.fill();
ctx.beginPath(); ctx.arc(hx + sz*0.72, hy + sz*0.32, sz*0.14, 0, Math.PI*2); ctx.fill();
ctx.fillStyle = ‘#2d1b00’;
ctx.beginPath(); ctx.arc(hx + sz*0.3,  hy + sz*0.33, sz*0.08, 0, Math.PI*2); ctx.fill();
ctx.beginPath(); ctx.arc(hx + sz*0.7,  hy + sz*0.33, sz*0.08, 0, Math.PI*2); ctx.fill();
}
}

function snakeOver() {
snakeState.running = false;
document.getElementById(‘snake-final-msg’).textContent =
(curLang===‘pt’?’Pontuacao: ’:’Score: ’) + snakeState.score;
document.getElementById(‘snake-over’).classList.remove(‘hidden’);
playGameOver();
}

// ═══════════════════════════════════════════════════
//  QUIZ EDUCATIVO
// ═══════════════════════════════════════════════════
var quizState = {
questions:[], current:0, score:0, answered:false, difficulty:‘easy’
};

function startQuiz(diff) {
quizState.difficulty = diff;
var pool = QUIZ_QUESTIONS[curLang][diff];
quizState.questions = pool.sort(function(){ return Math.random()-0.5; }).slice(0, 8);
quizState.current = 0; quizState.score = 0; quizState.answered = false;

document.getElementById(‘quiz-start-panel’).classList.add(‘hidden’);
document.getElementById(‘quiz-result-panel’).classList.add(‘hidden’);
document.getElementById(‘quiz-play-panel’).classList.remove(‘hidden’);
showQuizQuestion();
}

function showQuizQuestion() {
var s  = quizState;
var q  = s.questions[s.current];
var total = s.questions.length;

document.getElementById(‘quiz-counter’).textContent = (s.current+1) + ‘/’ + total;
document.getElementById(‘quiz-score-display’).textContent = s.score + ’ pts’;
var fill = ((s.current) / total) * 100;
document.getElementById(‘quiz-progress-fill’).style.width = fill + ‘%’;
document.getElementById(‘quiz-question’).textContent = q.q;
document.getElementById(‘quiz-feedback’).classList.add(‘hidden’);
s.answered = false;

var opts = document.getElementById(‘quiz-options’);
opts.innerHTML = ‘’;
q.opts.forEach(function(opt, i) {
var btn = document.createElement(‘button’);
btn.className   = ‘quiz-opt’;
btn.textContent = opt;
btn.addEventListener(‘click’, function(){ answerQuiz(i, btn); });
opts.appendChild(btn);
});
}

function answerQuiz(idx, btn) {
if (quizState.answered) return;
quizState.answered = true;
var q   = quizState.questions[quizState.current];
var all = document.querySelectorAll(’.quiz-opt’);

if (idx === q.ans) {
btn.classList.add(‘correct’);
quizState.score += quizState.difficulty === ‘hard’ ? 30 : quizState.difficulty === ‘medium’ ? 20 : 10;
document.getElementById(‘quiz-score-display’).textContent = quizState.score + ’ pts’;
playCorrect();
} else {
btn.classList.add(‘wrong’);
all[q.ans].classList.add(‘correct’);
playWrong();
}

var fb = document.getElementById(‘quiz-feedback’);
fb.textContent = q.exp;
fb.classList.remove(‘hidden’);

setTimeout(function() {
quizState.current++;
if (quizState.current >= quizState.questions.length) {
quizEnd();
} else {
showQuizQuestion();
}
}, 2200);
}

function quizEnd() {
document.getElementById(‘quiz-play-panel’).classList.add(‘hidden’);
document.getElementById(‘quiz-result-panel’).classList.remove(‘hidden’);
document.getElementById(‘quiz-progress-fill’).style.width = ‘100%’;

var total   = quizState.questions.length;
var maxPts  = total * (quizState.difficulty === ‘hard’ ? 30 : quizState.difficulty === ‘medium’ ? 20 : 10);
var pct     = Math.round(quizState.score / maxPts * 100);
var medal   = pct >= 90 ? (curLang===‘pt’?‘Ouro’:‘Gold’) : pct >= 60 ? (curLang===‘pt’?‘Prata’:‘Silver’) : (curLang===‘pt’?‘Bronze’:‘Bronze’);

document.getElementById(‘quiz-result-title’).textContent =
pct >= 80 ? (curLang===‘pt’?‘Parabens!’:‘Congratulations!’) : (curLang===‘pt’?‘Bom trabalho!’:‘Good job!’);
document.getElementById(‘quiz-result-msg’).textContent =
(curLang===‘pt’?’Voce fez ’:’You scored ‘) + quizState.score + ’ / ’ + maxPts +
’ pts (’ + pct + ’%) - ’ + (curLang===‘pt’?’Medal: ’:’Medal: ’) + medal;
playSuccess();
}

function resetQuiz() {
document.getElementById(‘quiz-result-panel’).classList.add(‘hidden’);
document.getElementById(‘quiz-play-panel’).classList.add(‘hidden’);
document.getElementById(‘quiz-start-panel’).classList.remove(‘hidden’);
}
‘use strict’;

// ═══════════════════════════════════════════════════
//  THREE.JS CASTLE EXPLORATION
// ═══════════════════════════════════════════════════
var ThreeExp = {
renderer: null, scene: null, camera: null, raf: null,
player: null, playerGroup: null,
clock: null, mixer: null,
keys: {}, dpad: {},
walls: [], objects: [],
running: false,
playerVel: { x:0, z:0 },
cameraAngle: 0,
cameraDistance: 7,
cameraHeight: 5,
interactTimer: null,
popTimer: null,
areas: [
{ name:‘Jardim do Castelo’,  pt:‘Jardim do Castelo’,  en:‘Castle Garden’,  es:‘Jardin del Castillo’ },
{ name:‘Salao de Dancas’,    pt:‘Salao de Dancas’,    en:‘Ballroom’,        es:‘Salon de Baile’      },
{ name:‘Quarto Real’,        pt:‘Quarto Real’,        en:‘Royal Bedroom’,   es:‘Habitacion Real’     },
{ name:‘Cozinha Magica’,     pt:‘Cozinha Magica’,     en:‘Magic Kitchen’,   es:‘Cocina Magica’       }
],
currentArea: 0,
spinAnim: false, spinT: 0,
idleT: 0,

init: function() {
if (!window.THREE) { console.warn(‘Three.js not loaded’); return; }
var cvs = document.getElementById(‘three-canvas’);
cvs.width  = window.innerWidth;
cvs.height = window.innerHeight;

```
// Renderer
this.renderer = new THREE.WebGLRenderer({ canvas: cvs, antialias: true, alpha: false });
this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
this.renderer.setSize(window.innerWidth, window.innerHeight);
this.renderer.shadowMap.enabled = true;
this.renderer.shadowMap.type    = THREE.PCFSoftShadowMap;
this.renderer.setClearColor(0x0a0318);

// Scene
this.scene = new THREE.Scene();
this.scene.fog = new THREE.Fog(0x0a0318, 30, 80);

// Camera
this.camera = new THREE.PerspectiveCamera(60, window.innerWidth/window.innerHeight, 0.1, 200);

// Clock
this.clock = new THREE.Clock();

// Lights
this.buildLights();
// World
this.buildWorld();
// Player
this.buildPlayer();
// Input
this.bindInput();
// Events
window.addEventListener('resize', this.onResize.bind(this));

this.running = true;
this.loop();
```

},

onResize: function() {
if (!this.renderer) return;
this.renderer.setSize(window.innerWidth, window.innerHeight);
this.camera.aspect = window.innerWidth / window.innerHeight;
this.camera.updateProjectionMatrix();
},

buildLights: function() {
var ambient = new THREE.AmbientLight(0x8844cc, 0.7);
this.scene.add(ambient);

```
var sun = new THREE.DirectionalLight(0xffd6ff, 1.2);
sun.position.set(10, 20, 10);
sun.castShadow = true;
sun.shadow.camera.near = 0.5;
sun.shadow.camera.far  = 80;
sun.shadow.camera.left = sun.shadow.camera.bottom = -30;
sun.shadow.camera.right= sun.shadow.camera.top   = 30;
sun.shadow.mapSize.set(1024, 1024);
this.scene.add(sun);

var point1 = new THREE.PointLight(0xff4fa3, 1.5, 20);
point1.position.set(0, 6, 0);
this.scene.add(point1);

var point2 = new THREE.PointLight(0x9b2eff, 1.2, 18);
point2.position.set(-8, 4, -8);
this.scene.add(point2);

this.pinkLight = point1;
```

},

buildWorld: function() {
var self = this;
// Ground
var groundGeo = new THREE.PlaneGeometry(80, 80);
var groundMat = new THREE.MeshLambertMaterial({ color: 0x1a4d1a });
var ground = new THREE.Mesh(groundGeo, groundMat);
ground.rotation.x = -Math.PI/2;
ground.receiveShadow = true;
this.scene.add(ground);

```
// Path
var pathGeo = new THREE.PlaneGeometry(4, 20);
var pathMat = new THREE.MeshLambertMaterial({ color: 0x8b7355 });
var path    = new THREE.Mesh(pathGeo, pathMat);
path.rotation.x = -Math.PI/2; path.position.set(0, 0.01, 5);
this.scene.add(path);

// Castle main body
this.makeCastle();
// Fountain
this.makeFountain(0, 8);
// Trees
this.makeTree(-12, -5); this.makeTree(12, -5);
this.makeTree(-14, 8);  this.makeTree(14, 8);
// Unicorn
this.makeUnicorn(-8, 5);
// Stars / sparkles floating
this.makeSparkles();
// Flowers
this.makeFlowers(-5, 12); this.makeFlowers(5, 12);
// Invisible walls (boundary)
this.addWall(0, -22, 80, 1);
this.addWall(0,  22, 80, 1);
this.addWall(-22, 0, 1, 80);
this.addWall( 22, 0, 1, 80);
```

},

makeCastle: function() {
var castleMat = new THREE.MeshPhongMaterial({ color:0xd4c5b0, shininess:30 });
var towerMat  = new THREE.MeshPhongMaterial({ color:0xc2b39a, shininess:30 });
var roofMat   = new THREE.MeshPhongMaterial({ color:0x9b2eff, shininess:60 });
var windowMat = new THREE.MeshPhongMaterial({ color:0x4488cc, emissive:0x224488, shininess:80 });
var doorMat   = new THREE.MeshPhongMaterial({ color:0x3d2200 });

```
// Main body
var bodyGeo = new THREE.BoxGeometry(14, 8, 7);
var body    = new THREE.Mesh(bodyGeo, castleMat);
body.position.set(0, 4, -10);
body.castShadow = body.receiveShadow = true;
this.scene.add(body);

// Battlements on top of body
for (var bx = -6; bx <= 6; bx += 2) {
  var bGeo = new THREE.BoxGeometry(0.9, 1, 0.9);
  var bm   = new THREE.Mesh(bGeo, towerMat);
  bm.position.set(bx, 8.5, -10);
  this.scene.add(bm);
}

// Towers
var tPositions = [[-6,-10],[6,-10],[-6,-14],[6,-14]];
var self = this;
tPositions.forEach(function(tp) {
  var tGeo = new THREE.CylinderGeometry(1.6, 1.8, 10, 8);
  var t    = new THREE.Mesh(tGeo, towerMat);
  t.position.set(tp[0], 5, tp[1]);
  t.castShadow = true;
  self.scene.add(t);
  // Cone roof
  var cGeo = new THREE.ConeGeometry(2.2, 4, 8);
  var c    = new THREE.Mesh(cGeo, roofMat);
  c.position.set(tp[0], 12, tp[1]);
  self.scene.add(c);
  // Flag
  var flagPole = new THREE.CylinderGeometry(0.05, 0.05, 2, 6);
  var fp = new THREE.Mesh(flagPole, new THREE.MeshLambertMaterial({color:0x888888}));
  fp.position.set(tp[0], 15, tp[1]);
  self.scene.add(fp);
  var flagGeo = new THREE.PlaneGeometry(1.2, 0.7);
  var fl = new THREE.Mesh(flagGeo, new THREE.MeshLambertMaterial({color:0xff4fa3, side:THREE.DoubleSide}));
  fl.position.set(tp[0]+0.6, 15.6, tp[1]);
  self.scene.add(fl);
});

// Windows
var winPositions = [[-4,5,-6.5],[-1.5,5,-6.5],[1.5,5,-6.5],[4,5,-6.5],[-4,3,-6.5],[4,3,-6.5]];
winPositions.forEach(function(wp) {
  var wGeo = new THREE.BoxGeometry(1.2, 1.8, 0.2);
  var w    = new THREE.Mesh(wGeo, windowMat);
  w.position.set(wp[0], wp[1], wp[2]);
  self.scene.add(w);
});

// Door (interactive)
var dGeo = new THREE.BoxGeometry(2, 3, 0.2);
var door = new THREE.Mesh(dGeo, doorMat);
door.position.set(0, 1.5, -6.4);
this.scene.add(door);
this.objects.push({
  mesh: door, range: 3.5,
  msg: { pt:'Bem-vinda ao Salao de Dancas!', en:'Welcome to the Ballroom!', es:'Bienvenida al Salon de Baile!' }
});

// Add collision box for castle body
this.addWall(0, -10, 14, 8);
```

},

makeFountain: function(x, z) {
var stoneMat = new THREE.MeshPhongMaterial({ color:0xb0c8e0, shininess:40 });
var waterMat = new THREE.MeshPhongMaterial({ color:0x40b0ff, transparent:true, opacity:0.75, shininess:100 });

```
var baseGeo = new THREE.CylinderGeometry(2.5, 2.8, 0.4, 16);
var base    = new THREE.Mesh(baseGeo, stoneMat);
base.position.set(x, 0.2, z); base.castShadow = true;
this.scene.add(base);

var basinGeo = new THREE.CylinderGeometry(2.0, 2.0, 0.8, 16, 1, true);
var basin    = new THREE.Mesh(basinGeo, stoneMat);
basin.position.set(x, 0.6, z);
this.scene.add(basin);

var waterGeo = new THREE.CylinderGeometry(1.7, 1.7, 0.1, 16);
var water    = new THREE.Mesh(waterGeo, waterMat);
water.position.set(x, 0.95, z);
this.scene.add(water);
this.waterMesh = water;

var poleGeo = new THREE.CylinderGeometry(0.12, 0.12, 2, 8);
var poleMat = new THREE.MeshPhongMaterial({ color:0xc0c0c0 });
var pole    = new THREE.Mesh(poleGeo, poleMat);
pole.position.set(x, 1.8, z);
this.scene.add(pole);

var topGeo = new THREE.SphereGeometry(0.3, 8, 8);
var top    = new THREE.Mesh(topGeo, stoneMat);
top.position.set(x, 3, z);
this.scene.add(top);

var fountainObj = { mesh: base, range: 3.2,
  msg: { pt:'Que chafariz lindo! Momento de descanso...', en:'What a beautiful fountain! Time to rest...', es:'Que fuente tan bonita! Momento de descanso...' }
};
this.objects.push(fountainObj);
```

},

makeTree: function(x, z) {
var trunkMat = new THREE.MeshLambertMaterial({ color:0x6b4226 });
var leafMat  = new THREE.MeshLambertMaterial({ color:0x228b22 });
var trunkGeo = new THREE.CylinderGeometry(0.2, 0.3, 2, 8);
var trunk    = new THREE.Mesh(trunkGeo, trunkMat);
trunk.position.set(x, 1, z); trunk.castShadow = true;
this.scene.add(trunk);
var leafGeo = new THREE.SphereGeometry(1.4, 8, 8);
var leaves  = new THREE.Mesh(leafGeo, leafMat);
leaves.position.set(x, 3.2, z); leaves.castShadow = true;
this.scene.add(leaves);
// Bloom effect (smaller spheres)
var bloom1 = new THREE.Mesh(
new THREE.SphereGeometry(0.8, 6, 6),
new THREE.MeshLambertMaterial({ color:0xff69b4 })
);
bloom1.position.set(x + 0.6, 3.8, z); this.scene.add(bloom1);
},

makeUnicorn: function(x, z) {
var bodyMat  = new THREE.MeshPhongMaterial({ color:0xffffff, shininess:60 });
var hornMat  = new THREE.MeshPhongMaterial({ color:0xffd700, shininess:80 });
var maneMat  = new THREE.MeshPhongMaterial({ color:0xff69b4, shininess:40 });

```
var grp = new THREE.Group();
// Body
var bodyGeo = new THREE.BoxGeometry(1.6, 1, 2.5);
var body    = new THREE.Mesh(bodyGeo, bodyMat);
body.position.set(0, 1, 0);
grp.add(body);
// Head
var headGeo = new THREE.BoxGeometry(0.9, 0.9, 0.9);
var head    = new THREE.Mesh(headGeo, bodyMat);
head.position.set(0, 2, 1.1);
grp.add(head);
// Horn
var hornGeo = new THREE.ConeGeometry(0.08, 0.7, 8);
var horn    = new THREE.Mesh(hornGeo, hornMat);
horn.position.set(0, 2.82, 1.1);
grp.add(horn);
// Mane
var maneGeo = new THREE.SphereGeometry(0.25, 6, 6);
var mane    = new THREE.Mesh(maneGeo, maneMat);
mane.position.set(0, 2.2, 0.6);
grp.add(mane);
// Legs
var legMat = new THREE.MeshPhongMaterial({ color:0xf0f0f0 });
[[-0.5,0,-0.8],[0.5,0,-0.8],[-0.5,0,0.8],[0.5,0,0.8]].forEach(function(lp) {
  var lg = new THREE.BoxGeometry(0.28, 1.2, 0.28);
  var l  = new THREE.Mesh(lg, legMat);
  l.position.set(lp[0], 0.4, lp[1]);
  grp.add(l);
});
// Tail
var tailGeo = new THREE.SphereGeometry(0.35, 6, 6);
var tail    = new THREE.Mesh(tailGeo, maneMat);
tail.position.set(0, 1.6, -1.3);
grp.add(tail);

grp.position.set(x, 0, z);
grp.castShadow = true;
this.scene.add(grp);
this.unicornGroup = grp;

this.objects.push({
  mesh: body, range: 3.5, groupPos: { x, z },
  msg: { pt:'O unicornio te deu poderes magicos!', en:'The unicorn gave you magic powers!', es:'El unicornio te dio poderes magicos!' }
});
```

},

makeSparkles: function() {
var geo  = new THREE.BufferGeometry();
var count= 150;
var pos  = new Float32Array(count * 3);
var cols = new Float32Array(count * 3);
var sparkColors = [[1,0.3,0.7],[0.6,0.2,1],[1,0.85,0],[0,0.9,1]];
for (var i = 0; i < count; i++) {
pos[i*3]   = (Math.random()-0.5)*40;
pos[i*3+1] = Math.random()*14 + 0.5;
pos[i*3+2] = (Math.random()-0.5)*40;
var sc = sparkColors[i % 4];
cols[i*3] = sc[0]; cols[i*3+1] = sc[1]; cols[i*3+2] = sc[2];
}
geo.setAttribute(‘position’, new THREE.BufferAttribute(pos, 3));
geo.setAttribute(‘color’,    new THREE.BufferAttribute(cols, 3));
var mat = new THREE.PointsMaterial({ size:0.18, vertexColors:true, transparent:true, opacity:0.85 });
this.sparkles = new THREE.Points(geo, mat);
this.sparklesPos = pos;
this.sparklesCount = count;
this.scene.add(this.sparkles);
},

makeFlowers: function(x, z) {
var colors = [0xff69b4, 0xff4fa3, 0xffd700, 0xc77dff];
var self = this;
for (var i = 0; i < 5; i++) {
var petalMat = new THREE.MeshLambertMaterial({ color: colors[i%4] });
var petalGeo = new THREE.SphereGeometry(0.18, 6, 6);
var petal    = new THREE.Mesh(petalGeo, petalMat);
petal.position.set(x + (Math.random()-0.5)*3, 0.2, z + (Math.random()-0.5)*2);
self.scene.add(petal);
}
},

addWall: function(x, z, w, d) {
this.walls.push({ x:x, z:z, w:w/2, d:d/2 });
},

buildPlayer: function() {
var self = this;
var grp  = new THREE.Group();

```
var skinMat    = new THREE.MeshPhongMaterial({ color:parseInt(curChar.skin.replace('#','0x')), shininess:40 });
var hairMat    = new THREE.MeshPhongMaterial({ color:parseInt(curChar.hair.replace('#','0x')), shininess:50 });
var outfitMat  = new THREE.MeshPhongMaterial({ color:parseInt(curChar.outfit.replace('#','0x')), shininess:60 });
var shoeMat    = new THREE.MeshPhongMaterial({ color:parseInt(curChar.shoe.replace('#','0x')), shininess:50 });
var goldMat    = new THREE.MeshPhongMaterial({ color:0xffd700, shininess:100, emissive:0x443300 });
var whiteMat   = new THREE.MeshPhongMaterial({ color:0xffffff, shininess:20 });
var eyeMat     = new THREE.MeshPhongMaterial({ color:0x1a0800 });

// HEAD (larger, blocky Roblox style)
var headGeo = new THREE.BoxGeometry(1.0, 1.0, 1.0);
var head    = new THREE.Mesh(headGeo, skinMat);
head.position.y = 3.4;
head.castShadow = true;
grp.add(head);
self.playerHead = head;

// HAIR
var hairGeo = new THREE.BoxGeometry(1.1, 0.6, 1.1);
var hair    = new THREE.Mesh(hairGeo, hairMat);
hair.position.set(0, 3.78, 0);
grp.add(hair);
// Hair sides (bangs)
var bangL = new THREE.Mesh(new THREE.BoxGeometry(0.18, 0.7, 1.0), hairMat);
bangL.position.set(-0.55, 3.4, 0);
grp.add(bangL);
var bangR = new THREE.Mesh(new THREE.BoxGeometry(0.18, 0.7, 1.0), hairMat);
bangR.position.set(0.55, 3.4, 0);
grp.add(bangR);

// CROWN
var crownBase = new THREE.Mesh(new THREE.CylinderGeometry(0.48, 0.52, 0.2, 6), goldMat);
crownBase.position.set(0, 4.05, 0);
grp.add(crownBase);
// Crown points
for (var ci = 0; ci < 5; ci++) {
  var angle = (ci / 5) * Math.PI * 2;
  var cp    = new THREE.Mesh(new THREE.ConeGeometry(0.1, 0.3, 6), goldMat);
  cp.position.set(Math.sin(angle)*0.38, 4.3, Math.cos(angle)*0.38);
  grp.add(cp);
}

// EYES
var eyeGeoW = new THREE.BoxGeometry(0.18, 0.14, 0.05);
var eyeL = new THREE.Mesh(eyeGeoW, whiteMat);
eyeL.position.set(-0.22, 3.45, 0.503);
grp.add(eyeL);
var eyeR = new THREE.Mesh(eyeGeoW, whiteMat);
eyeR.position.set( 0.22, 3.45, 0.503);
grp.add(eyeR);
var pupilGeo = new THREE.BoxGeometry(0.09, 0.09, 0.05);
var pupilL = new THREE.Mesh(pupilGeo, eyeMat);
pupilL.position.set(-0.22, 3.44, 0.52);
grp.add(pupilL);
var pupilR = new THREE.Mesh(pupilGeo, eyeMat);
pupilR.position.set( 0.22, 3.44, 0.52);
grp.add(pupilR);

// TORSO / DRESS
var torsoGeo = new THREE.BoxGeometry(0.95, 1.1, 0.65);
var torso    = new THREE.Mesh(torsoGeo, outfitMat);
torso.position.y = 2.2;
torso.castShadow = true;
grp.add(torso);

// DRESS skirt (wider trapezoid approximated with scaled box)
var skirtGeo = new THREE.CylinderGeometry(0.9, 1.3, 0.9, 10);
var skirt    = new THREE.Mesh(skirtGeo, new THREE.MeshPhongMaterial({ color:parseInt(curChar.outfit.replace('#','0x')), shininess:60 }));
skirt.position.y = 1.45;
grp.add(skirt);
self.skirt = skirt;

// ARMS
var armGeo = new THREE.BoxGeometry(0.28, 0.85, 0.28);
var armL = new THREE.Mesh(armGeo, outfitMat);
armL.position.set(-0.62, 2.2, 0);
armL.castShadow = true;
grp.add(armL);
self.armL = armL;
var armR = new THREE.Mesh(armGeo, outfitMat);
armR.position.set( 0.62, 2.2, 0);
armR.castShadow = true;
grp.add(armR);
self.armR = armR;

// HANDS
var handGeo = new THREE.SphereGeometry(0.18, 6, 6);
var handL   = new THREE.Mesh(handGeo, skinMat);
handL.position.set(-0.62, 1.7, 0); grp.add(handL);
var handR   = new THREE.Mesh(handGeo, skinMat);
handR.position.set( 0.62, 1.7, 0); grp.add(handR);

// LEGS
var legGeo = new THREE.BoxGeometry(0.3, 0.85, 0.3);
var legL   = new THREE.Mesh(legGeo, skinMat);
legL.position.set(-0.25, 0.65, 0);
grp.add(legL);
self.legL = legL;
var legR   = new THREE.Mesh(legGeo, skinMat);
legR.position.set( 0.25, 0.65, 0);
grp.add(legR);
self.legR = legR;

// SHOES
var shoeGeo = new THREE.BoxGeometry(0.34, 0.22, 0.46);
var shoeL   = new THREE.Mesh(shoeGeo, shoeMat);
shoeL.position.set(-0.25, 0.15, 0.08); grp.add(shoeL);
var shoeR   = new THREE.Mesh(shoeGeo, shoeMat);
shoeR.position.set( 0.25, 0.15, 0.08); grp.add(shoeR);

grp.position.set(0, 0, 10);
grp.castShadow = true;
this.scene.add(grp);
this.playerGroup = grp;
this.player = grp;
```

},

bindInput: function() {
var self = this;
document.addEventListener(‘keydown’, function(e) {
self.keys[e.code] = true;
var arrows = [‘ArrowUp’,‘ArrowDown’,‘ArrowLeft’,‘ArrowRight’,‘Space’,‘KeyW’,‘KeyA’,‘KeyS’,‘KeyD’];
if (arrows.indexOf(e.code) !== -1) e.preventDefault();
});
document.addEventListener(‘keyup’, function(e) { self.keys[e.code] = false; });

```
// D-Pad
var dpadMap = { 'btn-up':'up', 'btn-down':'down', 'btn-left':'left', 'btn-right':'right' };
Object.keys(dpadMap).forEach(function(id) {
  var dir = dpadMap[id];
  var btn = document.getElementById(id);
  if (!btn) return;
  var on  = function() { self.dpad[dir] = true; };
  var off = function() { self.dpad[dir] = false; };
  btn.addEventListener('touchstart', function(e){ e.preventDefault(); on(); },  {passive:false});
  btn.addEventListener('touchend',   function(e){ e.preventDefault(); off(); }, {passive:false});
  btn.addEventListener('mousedown', on);
  btn.addEventListener('mouseup',   off);
  btn.addEventListener('mouseleave',off);
});

// Action btns
var jumpBtn = document.getElementById('btn-jump');
var spinBtn = document.getElementById('btn-spin');
if (jumpBtn) jumpBtn.addEventListener('click', function(){ self.doJump(); });
if (spinBtn) spinBtn.addEventListener('click', function(){ self.doSpin(); });

// Touch drag for camera rotation
var touchStartX = 0;
var canvas = document.getElementById('three-canvas');
canvas.addEventListener('touchstart', function(e){ touchStartX = e.touches[0].clientX; }, {passive:true});
canvas.addEventListener('touchmove',  function(e){
  if (e.touches.length !== 1) return;
  var dx = e.touches[0].clientX - touchStartX;
  self.cameraAngle += dx * 0.006;
  touchStartX = e.touches[0].clientX;
}, {passive:true});

// Mouse drag for camera rotation
var mouseDown = false, lastMouseX = 0;
canvas.addEventListener('mousedown', function(e){ mouseDown = true; lastMouseX = e.clientX; });
document.addEventListener('mouseup',   function(){ mouseDown = false; });
document.addEventListener('mousemove', function(e){
  if (!mouseDown) return;
  self.cameraAngle += (e.clientX - lastMouseX) * 0.005;
  lastMouseX = e.clientX;
});
```

},

doJump: function() { playJump(); },
doSpin: function() { this.spinAnim = true; this.spinT = 0; playSuccess(); },

getInput: function() {
var k = this.keys, d = this.dpad;
return {
up:    !!(k[‘ArrowUp’]   || k[‘KeyW’] || d.up),
down:  !!(k[‘ArrowDown’] || k[‘KeyS’] || d.down),
left:  !!(k[‘ArrowLeft’] || k[‘KeyA’] || d.left),
right: !!(k[‘ArrowRight’]|| k[‘KeyD’] || d.right)
};
},

collidesWalls: function(nx, nz) {
return this.walls.some(function(w) {
return nx > w.x - w.w - 0.5 && nx < w.x + w.w + 0.5 &&
nz > w.z - w.d - 0.5 && nz < w.z + w.d + 0.5;
});
},

update: function(dt) {
var inp  = this.getInput();
var speed= 5.0;
var pg   = this.playerGroup;
if (!pg) return;

```
var dx = 0, dz = 0;
var camCos = Math.cos(this.cameraAngle);
var camSin = Math.sin(this.cameraAngle);

if (inp.up)    { dz -= camCos; dx -= camSin; }
if (inp.down)  { dz += camCos; dx += camSin; }
if (inp.left)  { dx -= camCos; dz += camSin; }
if (inp.right) { dx += camCos; dz -= camSin; }

var len = Math.sqrt(dx*dx + dz*dz);
if (len > 0) {
  dx /= len; dz /= len;
  var nx = pg.position.x + dx * speed * dt;
  var nz = pg.position.z + dz * speed * dt;
  if (!this.collidesWalls(nx, nz)) {
    pg.position.x = nx;
    pg.position.z = nz;
  }
  pg.position.x = Math.max(-21, Math.min(21, pg.position.x));
  pg.position.z = Math.max(-21, Math.min(21, pg.position.z));
  pg.rotation.y = Math.atan2(dx, dz);
}

// Walk animation
var t = Date.now() * 0.006;
var moving = len > 0;
if (moving) {
  if (this.legL) this.legL.rotation.x = Math.sin(t * 5) * 0.4;
  if (this.legR) this.legR.rotation.x = Math.sin(t * 5 + Math.PI) * 0.4;
  if (this.armL) this.armL.rotation.x = Math.sin(t * 5 + Math.PI) * 0.35;
  if (this.armR) this.armR.rotation.x = Math.sin(t * 5) * 0.35;
} else {
  // Idle animations
  this.idleT += dt;
  if (this.playerHead) this.playerHead.rotation.y = Math.sin(this.idleT * 0.5) * 0.08;
  if (this.armL) this.armL.rotation.z =  0.05 + Math.sin(this.idleT * 0.8) * 0.04;
  if (this.armR) this.armR.rotation.z = -0.05 - Math.sin(this.idleT * 0.8) * 0.04;
  if (this.skirt) this.skirt.rotation.y = Math.sin(this.idleT * 0.4) * 0.03;
  if (this.legL) this.legL.rotation.x = 0;
  if (this.legR) this.legR.rotation.x = 0;
}
// Slight body bob
pg.position.y = Math.sin(t * (moving ? 8 : 1.5)) * 0.04;

// Spin animation
if (this.spinAnim) {
  this.spinT += dt * 4;
  pg.rotation.y += dt * 6;
  if (this.skirt) this.skirt.scale.y = 1 - Math.sin(this.spinT) * 0.2;
  if (this.spinT > Math.PI * 2) { this.spinAnim = false; this.spinT = 0; }
}

// Camera follow
var camX = pg.position.x + Math.sin(this.cameraAngle) * this.cameraDistance;
var camZ = pg.position.z + Math.cos(this.cameraAngle) * this.cameraDistance;
this.camera.position.lerp(new THREE.Vector3(camX, this.cameraHeight, camZ), 0.1);
this.camera.lookAt(pg.position.x, 2.5, pg.position.z);

// Animate water / fountain
if (this.waterMesh) {
  this.waterMesh.position.y = 0.95 + Math.sin(Date.now()*0.002)*0.05;
}

// Animate unicorn
if (this.unicornGroup) {
  this.unicornGroup.position.y = Math.sin(Date.now()*0.001)*0.08;
}

// Sparkles animation
if (this.sparkles && this.sparklesPos) {
  var pos = this.sparkles.geometry.attributes.position.array;
  for (var i = 0; i < this.sparklesCount; i++) {
    pos[i*3+1] += Math.sin(Date.now()*0.001 + i) * 0.002;
    if (pos[i*3+1] > 15) pos[i*3+1] = 0.5;
  }
  this.sparkles.geometry.attributes.position.needsUpdate = true;
  this.sparkles.material.opacity = 0.7 + Math.sin(Date.now()*0.002)*0.2;
}

// Pulsing lights
if (this.pinkLight) {
  this.pinkLight.intensity = 1.3 + Math.sin(Date.now()*0.003)*0.4;
}

// Check object interactions
this.checkInteractions();
```

},

checkInteractions: function() {
if (!this.playerGroup) return;
var px = this.playerGroup.position.x;
var pz = this.playerGroup.position.z;
var self = this;
var nearest = null, minDist = 999;

```
this.objects.forEach(function(obj) {
  var ox = obj.groupPos ? obj.groupPos.x : obj.mesh.position.x;
  var oz = obj.groupPos ? obj.groupPos.z : obj.mesh.position.z;
  var d  = Math.sqrt((px-ox)*(px-ox)+(pz-oz)*(pz-oz));
  if (d < obj.range && d < minDist) { minDist = d; nearest = obj; }
});

var bubble = document.getElementById('interact-bubble');
if (nearest) {
  var msg = nearest.msg[curLang] || nearest.msg.pt;
  bubble.textContent = msg;
  bubble.classList.remove('hidden');
  clearTimeout(self.popTimer);
  self.popTimer = setTimeout(function(){ bubble.classList.add('hidden'); }, 3500);
}
```

},

loop: function() {
if (!this.running) return;
var dt = this.clock.getDelta();
this.update(dt);
this.renderer.render(this.scene, this.camera);
var self = this;
this.raf = requestAnimationFrame(function(){ self.loop(); });
},

stop: function() {
this.running = false;
if (this.raf) cancelAnimationFrame(this.raf);
if (this.renderer) {
this.renderer.dispose();
this.renderer = null;
}
this.scene  = null;
this.camera = null;
this.player = null;
this.playerGroup = null;
this.walls  = [];
this.objects= [];
}
};

function startExplore() {
ThreeExp.stop();
ThreeExp.keys  = {};
ThreeExp.dpad  = {};
ThreeExp.walls  = [];
ThreeExp.objects= [];
ThreeExp.spinAnim = false;
ThreeExp.idleT = 0;
setTimeout(function(){ ThreeExp.init(); }, 80);
}

function stopExplore() {
ThreeExp.stop();
}

function playerJump() { ThreeExp.doJump(); }
function playerSpin()  { ThreeExp.doSpin(); }
‘use strict’;

// ═══════════════════════════════════════════════════
//  ESTADO GLOBAL
// ═══════════════════════════════════════════════════
var curChar     = Object.assign({}, CHARACTERS[0]);
var curLang     = ‘pt’;
var sessionStart= Date.now();
var hudInterval = null;

// ═══════════════════════════════════════════════════
//  NAVEGACAO
// ═══════════════════════════════════════════════════
function goScreen(id) {
// Stop games if needed
if (id !== ‘screen-explore’) stopExplore();
if (id !== ‘screen-race’)    stopRace();
if (id !== ‘screen-snake’)   stopSnake();
if (id !== ‘screen-memory’)  stopMemory();

document.querySelectorAll(’.screen’).forEach(function(s){ s.classList.remove(‘active’); });
var el = document.getElementById(id);
if (el) el.classList.add(‘active’);

var showHud = [‘screen-home’,‘screen-select’].indexOf(id) === -1;
var hud = document.getElementById(‘global-hud’);
if (showHud) hud.classList.remove(‘hidden’);
else         hud.classList.add(‘hidden’);

// Per-screen init
if (id === ‘screen-menu’)   buildMenuHeader();
if (id === ‘screen-custom’) buildCustom();
if (id === ‘screen-select’) buildCharSelect();
if (id === ‘screen-memory’) { resetMemoryScreen(); }
if (id === ‘screen-snake’)  { resetSnakeScreen(); }
if (id === ‘screen-quiz’)   { resetQuiz(); }

playClick();
}

function resetMemoryScreen() {
document.getElementById(‘memory-diff-row’).classList.remove(‘hidden’);
document.getElementById(‘memory-stats’).classList.add(‘hidden’);
document.getElementById(‘memory-win’).classList.add(‘hidden’);
document.getElementById(‘memory-grid’).innerHTML = ‘’;
}
function resetSnakeScreen() {
document.getElementById(‘snake-overlay’).classList.remove(‘hidden’);
document.getElementById(‘snake-over’).classList.add(‘hidden’);
}

// ═══════════════════════════════════════════════════
//  HUD GLOBAL
// ═══════════════════════════════════════════════════
function startHud() {
if (hudInterval) clearInterval(hudInterval);
hudInterval = setInterval(updateHud, 1000);
updateHud();
}

function updateHud() {
var now  = new Date();
var h    = String(now.getHours()).padStart(2,‘0’);
var m    = String(now.getMinutes()).padStart(2,‘0’);
var d    = String(now.getDate()).padStart(2,‘0’);
var mo   = String(now.getMonth()+1).padStart(2,‘0’);
var yr   = now.getFullYear();
var secs = Math.floor((Date.now() - sessionStart) / 1000);
var el;
el = document.getElementById(‘hud-time’); if (el) el.textContent = h + ‘:’ + m;
el = document.getElementById(‘hud-date’); if (el) el.textContent = d + ‘/’ + mo + ‘/’ + yr;
el = document.getElementById(‘hud-session’); if (el) el.textContent = secs + ‘s’;
el = document.getElementById(‘hud-char-name’); if (el) el.textContent = curChar.name;
}

// ═══════════════════════════════════════════════════
//  TOAST
// ═══════════════════════════════════════════════════
function showToast(msg, dur) {
var t = document.getElementById(‘toast-msg’);
t.textContent = msg;
t.classList.remove(‘hidden’);
clearTimeout(t._tid);
t._tid = setTimeout(function(){ t.classList.add(‘hidden’); }, dur || 2400);
}

// ═══════════════════════════════════════════════════
//  PARTICLE BACKGROUND (canvas full-screen)
// ═══════════════════════════════════════════════════
var ParticleBg = {
canvas: null, ctx: null,
particles: [], glitters: [],

init: function() {
this.canvas = document.getElementById(‘bg-particles’);
this.ctx    = this.canvas.getContext(‘2d’);
this.resize();
window.addEventListener(‘resize’, this.resize.bind(this));
this.buildParticles();
this.loop(0);
},

resize: function() {
this.canvas.width  = window.innerWidth;
this.canvas.height = window.innerHeight;
},

buildParticles: function() {
this.particles = [];
this.glitters  = [];
var glitterColors = [’#ff4fa3’,’#c77dff’,’#ffd700’,’#00e5ff’,’#ff9de2’];
for (var i = 0; i < 140; i++) {
this.particles.push({
x: Math.random(), y: Math.random(),
r: Math.random()*1.4 + 0.3,
speed: Math.random()*1.5 + 0.5,
phase: Math.random()*Math.PI*2,
twinkle: Math.random()*0.04 + 0.01
});
}
for (var j = 0; j < 50; j++) {
this.glitters.push({
x: Math.random(), y: Math.random(),
size: Math.random()*5 + 2,
color: glitterColors[j % glitterColors.length],
phase: Math.random()*Math.PI*2,
speed: Math.random()*0.02 + 0.008,
rotSpeed: Math.random()*0.04 + 0.01
});
}
},

loop: function(t) {
var self = this;
var w = this.canvas.width, h = this.canvas.height;
var ctx = this.ctx;

```
ctx.clearRect(0, 0, w, h);

// Background gradient
var grd = ctx.createLinearGradient(0, 0, w, h);
grd.addColorStop(0, '#0a0318');
grd.addColorStop(0.5, '#140828');
grd.addColorStop(1, '#1e0a3c');
ctx.fillStyle = grd;
ctx.fillRect(0, 0, w, h);

// Stars
this.particles.forEach(function(p) {
  var bright = 0.5 + 0.5 * Math.sin(t * p.twinkle + p.phase);
  ctx.fillStyle = 'rgba(255,255,255,' + (bright * 0.88) + ')';
  ctx.beginPath();
  ctx.arc(p.x * w, p.y * h, p.r, 0, Math.PI * 2);
  ctx.fill();
  // Occasional cross sparkle on bright stars
  if (bright > 0.88 && p.r > 1.2) {
    ctx.strokeStyle = 'rgba(255,255,255,' + (bright * 0.4) + ')';
    ctx.lineWidth = 0.5;
    ctx.beginPath();
    ctx.moveTo(p.x*w - p.r*3, p.y*h);
    ctx.lineTo(p.x*w + p.r*3, p.y*h);
    ctx.moveTo(p.x*w, p.y*h - p.r*3);
    ctx.lineTo(p.x*w, p.y*h + p.r*3);
    ctx.stroke();
  }
});

// Glitter / sparkles
this.glitters.forEach(function(g) {
  g.phase += g.speed;
  var bright = 0.35 + 0.65 * Math.abs(Math.sin(g.phase));
  var yOff   = Math.sin(g.phase * 0.4) * 7;
  var alpha  = Math.floor(bright * 220).toString(16).padStart(2,'0');
  ctx.save();
  ctx.translate(g.x * w, g.y * h + yOff);
  ctx.rotate(g.phase * g.rotSpeed * 30);
  ctx.fillStyle = g.color + alpha;
  var s = g.size * bright;
  ctx.fillRect(-s/2, -s/2, s, s);
  // Diamond shape
  ctx.beginPath();
  ctx.moveTo(0, -s); ctx.lineTo(s*0.5, 0);
  ctx.lineTo(0, s);  ctx.lineTo(-s*0.5, 0);
  ctx.closePath();
  ctx.fillStyle = g.color + Math.floor(bright*100).toString(16).padStart(2,'0');
  ctx.fill();
  ctx.restore();
});

requestAnimationFrame(function(ts){ self.loop(ts * 0.001); });
```

}
};

// ═══════════════════════════════════════════════════
//  HOME — mini personagens decorativas
// ═══════════════════════════════════════════════════
function buildHomeChars() {
var row = document.getElementById(‘home-chars-row’);
row.innerHTML = ‘’;
[0,1,2].forEach(function(i) {
var c   = CHARACTERS[i];
var div = document.createElement(‘div’);
div.className = ‘home-mini-char’;
var cvs = document.createElement(‘canvas’);
cvs.width = 70; cvs.height = 100;
drawPrincess(cvs, c, 1);
var lbl = document.createElement(‘span’);
lbl.textContent = c.name;
div.appendChild(cvs);
div.appendChild(lbl);
row.appendChild(div);
});
}

// ═══════════════════════════════════════════════════
//  SELECAO DE PERSONAGEM
// ═══════════════════════════════════════════════════
function buildCharSelect() {
var grid = document.getElementById(‘chars-grid’);
grid.innerHTML = ‘’;
CHARACTERS.forEach(function(c) {
var card = document.createElement(‘div’);
card.className = ‘char-card’;
var cvs = document.createElement(‘canvas’);
cvs.width = 110; cvs.height = 160;
drawPrincess(cvs, c, 1);
var nm = document.createElement(‘div’);
nm.className = ‘char-name’; nm.textContent = c.name;
var jb = document.createElement(‘div’);
jb.className = ‘char-job’; jb.textContent = c.job;
card.appendChild(cvs);
card.appendChild(nm);
card.appendChild(jb);
card.addEventListener(‘click’, function(){ selectChar(c); });
grid.appendChild(card);
});
}

function selectChar(c) {
curChar = Object.assign({}, c);
playSuccess();
showToast(c.name + (curLang===‘pt’?’ selecionada!’:curLang===‘en’?’ selected!’:’ seleccionada!’));
goScreen(‘screen-menu’);
}

// ═══════════════════════════════════════════════════
//  MENU HEADER
// ═══════════════════════════════════════════════════
function buildMenuHeader() {
var el = document.getElementById(‘menu-char-header’);
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
document.querySelectorAll(’.lang-btn’).forEach(function(b){
b.classList.toggle(‘active’, b.getAttribute(‘data-lang’) === lang);
});
document.getElementById(‘html-root’).lang = lang === ‘pt’ ? ‘pt-BR’ : lang;
applyTranslations();
playClick();
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
//  MUSICA — primeiro clique desbloqueia AudioContext
// ═══════════════════════════════════════════════════
function unlockAudio() {
getAudioCtx();
document.removeEventListener(‘click’,      unlockAudio);
document.removeEventListener(‘touchstart’, unlockAudio);
setTimeout(startBgMusic, 300);
}

// ═══════════════════════════════════════════════════
//  INIT
// ═══════════════════════════════════════════════════
window.addEventListener(‘DOMContentLoaded’, function() {
// Particles background
ParticleBg.init();

// Home decorative chars
buildHomeChars();

// Character select (pre-build)
buildCharSelect();

// HUD tick
startHud();

// Language
applyTranslations();

// Audio unlock on first interaction
document.addEventListener(‘click’,      unlockAudio);
document.addEventListener(‘touchstart’, unlockAudio, {passive:true});

// Handle window resize for canvases
window.addEventListener(‘resize’, function() {
var raceCanvas  = document.getElementById(‘race-canvas’);
var snakeCanvas = document.getElementById(‘snake-canvas’);
if (raceCanvas.parentElement.classList.contains(‘active’)) {
raceCanvas.width  = window.innerWidth;
raceCanvas.height = window.innerHeight;
}
if (snakeCanvas.parentElement.classList.contains(‘active’)) {
snakeCanvas.width  = window.innerWidth;
snakeCanvas.height = window.innerHeight;
}
});

console.log(‘Laura Valentina Dream Castle — loaded OK’);
});