// Configuração das Imagens (Certifique-se que a pasta "images" existe no repositório)
const CHARACTERS = [
  { id: 'laura',     name: 'Laura',     job: 'Arquiteta',  img: 'images/IMG_6056.jpeg' },
  { id: 'valentina', name: 'Valentina', job: 'Cientista',  img: 'images/IMG_6047.jpeg' },
  { id: 'giovanna',  name: 'Giovanna',  job: 'Médica',     img: 'images/IMG_6043.jpeg' },
  { id: 'valcely',   name: 'Valcely',   job: 'Estilista',  img: 'images/IMG_6040.jpeg' },
  { id: 'lidiane',   name: 'Lidiane',   job: 'Biomédica',  img: 'images/IMG_6038.jpeg' }
];

const OUTFITS = [
  { img: 'images/IMG_6030.jpeg', label: 'Rosa Floral' },
  { img: 'images/IMG_6022.jpeg', label: 'Brilhosa' },
  { img: 'images/IMG_6033.jpeg', label: 'All Pink' },
  { img: 'images/IMG_6034.jpeg', label: 'Tutu Rosa' }
];

const STORY = [
  { scene: '🏰', text: 'Bem-vinda ao Castelo! Você tem um grande baile hoje. O que deseja fazer primeiro?', choices: [{ t: '👗 Se vestir', n: 1 }, { t: '💄 Maquiagem', n: 1 }] },
  { scene: '✨', text: 'Você está ficando deslumbrante! A carruagem chega em 5 minutos!', choices: [{ t: '💃 Ir para o Baile', n: 0 }] }
];

let curChar = null;
let runwayScore = 0;

// Início do Jogo
window.onload = () => {
    initHome();
    buildCharsGrid();
};

function initHome() {
    const homeDiv = document.getElementById('home-doll');
    homeDiv.innerHTML = `<img src="${CHARACTERS[0].img}" class="home-doll">`;
}

function go(id) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById(id).classList.add('active');
    if(id === 'vestir') buildVestir();
    if(id === 'salao') updateSalaoDoll();
}

function buildCharsGrid() {
    const grid = document.getElementById('chars-grid');
    CHARACTERS.forEach(c => {
        const div = document.createElement('div');
        div.className = 'char-card';
        div.innerHTML = `<img src="${c.img}" class="char-avatar"><p>${c.name}</p>`;
        div.onclick = () => selectChar(c);
        grid.appendChild(div);
    });
}

function selectChar(c) {
    curChar = c;
    const header = document.getElementById('castle-header');
    header.innerHTML = `<img src="${c.img}" class="active-char-img"><h2>${c.name}</h2>`;
    go('castle');
}

function buildVestir() {
    const stage = document.getElementById('vestir-doll');
    stage.innerHTML = `<img src="${curChar.img}" class="doll-img" id="main-doll">`;
    
    const row = document.getElementById('outfit-row');
    row.innerHTML = '';
    OUTFITS.forEach(o => {
        const div = document.createElement('div');
        div.className = 'outfit-placeholder';
        div.innerHTML = `<img src="${o.img}">`;
        div.onclick = () => {
            document.getElementById('main-doll').src = o.img;
            toast("Look alterado! ✨");
        };
        row.appendChild(div);
    });
}

function runwayDo(type) {
    runwayScore += 10;
    document.getElementById('runway-score').innerText = runwayScore;
    toast("A plateia adorou! 💖");
}

function startStory() {
    const s = STORY[0];
    document.getElementById('story-text').innerText = s.text;
    const btnArea = document.getElementById('story-choices');
    btnArea.innerHTML = '';
    s.choices.forEach(c => {
        const b = document.createElement('button');
        b.className = 'choice-btn';
        b.innerText = c.t;
        b.onclick = () => go('castle');
        btnArea.appendChild(b);
    });
}

function updateSalaoDoll() {
    document.getElementById('salao-doll').innerHTML = `<img src="${curChar.img}" class="beauty-doll">`;
}

function toast(msg) {
    const t = document.createElement('div');
    t.className = 'toast'; t.innerText = msg;
    document.body.appendChild(t);
    setTimeout(() => t.remove(), 2000);
}