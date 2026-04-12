/* ═══════════════════════════════════════════════════
   ROOT VARIABLES
═══════════════════════════════════════════════════ */
:root {
  --pink:        #ff4fa3;
  --pink-dark:   #c2006e;
  --pink-light:  #ffb3d9;
  --purple:      #9b2eff;
  --purple-light:#c77dff;
  --purple-dark: #5a0099;
  --gold:        #ffd700;
  --gold-dark:   #b8860b;
  --cyan:        #00e5ff;
  --green:       #39ff14;
  --bg:          #0a0318;
  --panel:       rgba(18,6,40,0.88);
  --border:      rgba(200,100,255,0.25);
  --text:        #ffffff;
  --text-soft:   rgba(255,255,255,0.70);
  --radius:      14px;
  --radius-sm:   8px;
  --font:        'Nunito', sans-serif;
  --font-title:  'Fredoka One', cursive;
}

/* ═══════════════════════════════════════════════════
   RESET
═══════════════════════════════════════════════════ */
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
html, body {
  width: 100%; height: 100%; overflow: hidden;
  background: var(--bg);
  font-family: var(--font);
  color: var(--text);
  -webkit-tap-highlight-color: transparent;
  user-select: none;
}
button { font-family: var(--font); cursor: pointer; border: none; outline: none; }
::-webkit-scrollbar { width: 4px; }
::-webkit-scrollbar-thumb { background: var(--purple); border-radius: 4px; }

/* FUNDO ANIMADO */
#bg-particles {
  position: fixed; inset: 0; z-index: 0;
  width: 100%; height: 100%; pointer-events: none;
}

/* SCREENS */
.screen {
  display: none; position: fixed; inset: 0; z-index: 10;
  overflow-y: auto; overflow-x: hidden; background: transparent;
}
.screen.active {
  display: flex; flex-direction: column; align-items: center;
  animation: screenFadeIn 0.4s ease;
}
@keyframes screenFadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to   { opacity: 1; transform: translateY(0); }
}
.screen-inner {
  width: 100%; max-width: 720px;
  padding: 58px 16px 100px;
  display: flex; flex-direction: column; align-items: center; gap: 18px;
}

/* HUD GLOBAL */
.global-hud {
  position: fixed; top: 0; left: 0; right: 0; height: 46px;
  background: rgba(8,2,22,0.92);
  border-bottom: 2px solid rgba(155,46,255,0.40);
  display: flex; align-items: center; justify-content: space-between;
  padding: 0 16px; z-index: 500;
  font-size: 0.78rem; font-weight: 700; letter-spacing: 0.03em;
  backdrop-filter: blur(8px);
}
.hud-left   { display: flex; gap: 10px; color: var(--cyan); }
.hud-center { color: var(--gold); font-family: var(--font-title); font-size: 0.9rem; }
.hud-right  { color: var(--pink-light); }

/* LANGUAGE SWITCHER */
.lang-switcher {
  position: fixed; bottom: 16px; right: 16px;
  display: flex; gap: 4px; z-index: 600;
}
.lang-btn {
  background: var(--panel); border: 2px solid var(--border);
  color: var(--text-soft); border-radius: 6px; padding: 5px 10px;
  font-size: 0.75rem; font-weight: 800; transition: all 0.2s;
}
.lang-btn:hover, .lang-btn.active {
  background: var(--purple); border-color: var(--purple-light); color: #fff;
}

/* TOAST */
.toast-msg {
  position: fixed; bottom: 70px; left: 50%; transform: translateX(-50%);
  background: linear-gradient(135deg, var(--pink), var(--purple));
  color: #fff; padding: 10px 28px; border-radius: 30px;
  font-weight: 800; font-size: 0.9rem; z-index: 1000;
  pointer-events: none; white-space: nowrap;
  animation: toastSlide 0.3s ease;
  box-shadow: 0 4px 20px rgba(255,79,163,0.4);
}
@keyframes toastSlide {
  from { opacity: 0; transform: translateX(-50%) translateY(16px); }
  to   { opacity: 1; transform: translateX(-50%) translateY(0); }
}

/* BOTOES */
.btn-primary {
  background: linear-gradient(135deg, var(--pink), var(--purple));
  color: #fff; border-radius: var(--radius);
  padding: 13px 34px; font-size: 1rem; font-weight: 900;
  letter-spacing: 0.06em; text-transform: uppercase;
  box-shadow: 0 5px 0 var(--pink-dark), 0 0 20px rgba(255,79,163,0.35);
  transition: transform 0.12s, box-shadow 0.12s;
}
.btn-primary:active { transform: translateY(4px); box-shadow: 0 1px 0 var(--pink-dark); }
.btn-secondary {
  background: rgba(255,255,255,0.08); color: var(--text);
  border: 2px solid var(--border); border-radius: var(--radius);
  padding: 11px 28px; font-size: 0.9rem; font-weight: 700; transition: background 0.2s;
}
.btn-secondary:hover { background: rgba(255,255,255,0.15); }
.btn-back {
  position: absolute; top: 54px; left: 14px; z-index: 200;
  background: rgba(255,255,255,0.10); color: #fff;
  border: 2px solid var(--border); border-radius: var(--radius-sm);
  padding: 8px 14px; font-size: 0.85rem; font-weight: 800; transition: background 0.2s;
}
.btn-back:hover { background: rgba(155,46,255,0.35); }
.btn-glow { animation: glowPulse 2.2s infinite; }
@keyframes glowPulse {
  0%,100% { box-shadow: 0 5px 0 var(--pink-dark), 0 0 20px rgba(255,79,163,0.4); }
  50%      { box-shadow: 0 5px 0 var(--pink-dark), 0 0 44px rgba(255,79,163,0.85); }
}
.btn-music {
  background: rgba(255,255,255,0.08); border: 2px solid rgba(155,46,255,0.5);
  color: var(--purple-light); border-radius: 30px;
  padding: 9px 22px; font-size: 0.9rem; font-weight: 800;
  transition: all 0.2s; display: flex; align-items: center; gap: 6px;
}
.btn-music:hover { background: rgba(155,46,255,0.25); color: #fff; }

/* HOME */
#screen-home { justify-content: center; background: rgba(10,3,24,0.18); }
.home-wrapper {
  display: flex; flex-direction: column; align-items: center; gap: 18px;
  padding: 16px 16px 90px; z-index: 10; max-width: 500px; width: 100%;
}
.home-castle-wrap {
  position: relative; width: 260px; height: 200px;
  filter: drop-shadow(0 0 22px rgba(155,46,255,0.5));
  animation: castleFloat 3.5s ease-in-out infinite;
}
@keyframes castleFloat {
  0%,100% { transform: translateY(0) scale(1); }
  50%      { transform: translateY(-14px) scale(1.03); }
}
.castle-svg { width: 100%; height: 100%; }
.star-pulse { animation: starPulse 1.8s ease-in-out infinite; transform-origin: center; }
@keyframes starPulse {
  0%,100% { opacity: 0.3; }
  50%      { opacity: 1; }
}
.castle-sparkle {
  position: absolute; border-radius: 50%;
  animation: sparkleAnim 2s ease-in-out infinite; pointer-events: none;
}
.castle-sparkle.s1 { width:10px; height:10px; background:#ffd700; top:10px;  left:30px;  animation-delay:0s;   }
.castle-sparkle.s2 { width: 8px; height: 8px;  background:#ff4fa3; top:20px;  right:25px; animation-delay:0.6s; }
.castle-sparkle.s3 { width:12px; height:12px; background:#c77dff; bottom:30px; left:50%; animation-delay:1.2s; transform:translateX(-50%); }
@keyframes sparkleAnim {
  0%,100% { transform: scale(0.6); opacity: 0.4; }
  50%      { transform: scale(1.4); opacity: 1;   }
}
.home-title {
  font-family: var(--font-title); font-size: 2.6rem;
  background: linear-gradient(135deg, var(--gold), var(--pink), var(--purple-light));
  -webkit-background-clip: text; -webkit-text-fill-color: transparent;
  background-clip: text; letter-spacing: -0.5px; text-align: center;
}
.home-sub {
  font-size: 0.95rem; letter-spacing: 0.28em; color: var(--gold);
  opacity: 0.9; text-align: center;
  animation: homeSubPulse 3s ease-in-out infinite;
}
@keyframes homeSubPulse { 0%,100% { opacity: 0.7; } 50% { opacity: 1; } }

/* PRINCESAS NA HOME */
.home-chars-row {
  display: flex; gap: 16px; align-items: flex-end;
  justify-content: center; flex-wrap: wrap;
}
.home-mini-char {
  display: flex; flex-direction: column; align-items: center; gap: 5px;
  cursor: pointer; transition: transform 0.2s;
}
.home-mini-char:hover { transform: translateY(-6px) scale(1.06); }
.home-mini-char canvas {
  border-radius: 12px;
  animation: dollFloat 3s ease-in-out infinite;
}
.home-mini-char:nth-child(2) canvas { animation-delay: 0.6s; }
.home-mini-char:nth-child(3) canvas { animation-delay: 1.2s; }
@keyframes dollFloat { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-8px); } }
.home-mini-char span {
  font-size: 0.78rem; font-weight: 800; color: var(--pink-light);
  text-shadow: 0 0 8px rgba(255,79,163,0.6);
}

/* SECTION TITLE */
.section-title {
  font-family: var(--font-title); font-size: 1.6rem;
  color: var(--gold); text-shadow: 0 0 14px rgba(255,215,0,0.5); text-align: center;
}

/* SELECT GRID */
.chars-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(130px,1fr)); gap: 14px; width: 100%; }
.char-card {
  background: var(--panel); border: 2px solid var(--border);
  border-radius: var(--radius); padding: 18px 10px 14px;
  display: flex; flex-direction: column; align-items: center; gap: 8px;
  cursor: pointer; transition: transform 0.2s, border-color 0.2s, box-shadow 0.2s;
}
.char-card:hover, .char-card:active {
  transform: translateY(-5px) scale(1.04); border-color: var(--pink);
  box-shadow: 0 0 24px rgba(255,79,163,0.45);
}
.char-card canvas { border-radius: 8px; }
.char-name { font-weight: 900; font-size: 0.95rem; }
.char-job  { font-size: 0.7rem; color: var(--gold); font-weight: 700; background: rgba(255,215,0,0.12); border-radius: 20px; padding: 2px 10px; }

/* MENU */
.menu-char-header {
  display: flex; align-items: center; gap: 14px;
  background: var(--panel); border: 1px solid var(--border);
  border-radius: var(--radius); padding: 12px 20px; width: 100%;
}
.menu-char-header canvas { border-radius: 8px; }
.menu-header-info { display: flex; flex-direction: column; gap: 2px; }
.menu-header-name { font-weight: 900; font-size: 1.1rem; color: var(--gold); }
.menu-header-job  { font-size: 0.8rem; color: var(--pink-light); }
.menu-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; width: 100%; }
.menu-card {
  border-radius: var(--radius); padding: 18px 12px 14px;
  display: flex; flex-direction: column; align-items: center; gap: 8px;
  cursor: pointer; border: 2px solid transparent;
  transition: transform 0.15s, box-shadow 0.15s;
  position: relative; overflow: hidden;
}
.menu-card:hover, .menu-card:active { transform: scale(0.97); box-shadow: 0 0 30px rgba(255,79,163,0.3); }
.card-icon-wrap { display: flex; align-items: center; justify-content: center; }
.menu-card span  { font-weight: 900; font-size: 1rem; letter-spacing: 0.04em; }
.menu-card small { font-size: 0.72rem; opacity: 0.7; }
.card-explore { background: linear-gradient(135deg,#10052b,#220860); border-color: var(--purple); }
.card-custom  { background: linear-gradient(135deg,#200818,#4a0a38); border-color: var(--pink);   }
.card-race    { background: linear-gradient(135deg,#1c1400,#4a3800); border-color: var(--gold);   }
.card-memory  { background: linear-gradient(135deg,#001c30,#003858); border-color: var(--cyan);   }
.card-snake   { background: linear-gradient(135deg,#011a06,#023812); border-color: var(--green);  }
.card-quiz    { background: linear-gradient(135deg,#1a0a00,#3d1f00); border-color: #ff8c00;       }
.card-new-badge {
  position: absolute; top: 8px; right: 8px;
  background: var(--green); color: #000;
  font-size: 0.58rem; font-weight: 900; border-radius: 4px; padding: 2px 6px;
}

/* AVATAR */
.custom-layout { display: flex; gap: 20px; width: 100%; flex-wrap: wrap; justify-content: center; }
.custom-preview-box {
  display: flex; flex-direction: column; align-items: center; gap: 8px;
  background: var(--panel); border: 2px solid var(--border);
  border-radius: var(--radius); padding: 20px; min-width: 180px;
}
.custom-char-name { font-weight: 900; font-size: 1rem; color: var(--gold); }
.custom-char-job  {
  font-size: 0.8rem; color: #fff;
  background: linear-gradient(135deg, var(--purple), var(--pink));
  border-radius: 20px; padding: 3px 14px; font-weight: 700;
}
.custom-options { flex:1; display:flex; flex-direction:column; gap:12px; min-width:200px; }
.custom-section { background: var(--panel); border:1px solid var(--border); border-radius: var(--radius-sm); padding: 12px; }
.opt-label { font-size:0.78rem; font-weight:700; opacity:0.65; margin-bottom:8px; }
.swatch-row { display:flex; gap:8px; flex-wrap:wrap; }
.swatch {
  width:32px; height:32px; border-radius:8px; cursor:pointer;
  border:3px solid transparent; transition:transform 0.15s, border-color 0.15s;
  box-shadow:0 2px 6px rgba(0,0,0,0.35);
}
.swatch:hover  { transform:scale(1.18); }
.swatch.active { border-color:var(--gold); transform:scale(1.18); }
.job-row { display:flex; gap:8px; flex-wrap:wrap; }
.job-btn {
  background:rgba(255,255,255,0.07); border:2px solid var(--border);
  color:var(--text); border-radius:var(--radius-sm); padding:6px 12px;
  font-size:0.78rem; font-weight:700; transition:0.2s;
}
.job-btn.active, .job-btn:hover { background:var(--purple); border-color:var(--purple-light); }

/* EXPLORE 3D */
#screen-explore { padding:0; overflow:hidden; background:#0a0318; }
#three-canvas   { position:absolute; inset:0; width:100%; height:100%; display:block; }
.explore-hud {
  position:absolute; top:46px; left:0; right:0; z-index:200;
  text-align:center; padding:8px;
  font-family:var(--font-title); font-size:1rem; color:var(--gold);
  text-shadow:0 0 10px rgba(255,215,0,0.5); pointer-events:none;
}
.interact-bubble {
  position:absolute; bottom:150px; left:50%; transform:translateX(-50%);
  background:rgba(10,3,30,0.93); border:2px solid var(--gold);
  border-radius:12px; padding:10px 22px;
  font-size:0.88rem; font-weight:700; color:var(--gold);
  z-index:250; pointer-events:none; text-align:center;
  animation:popIn 0.3s ease; white-space:nowrap;
}
@keyframes popIn {
  from { transform:translateX(-50%) scale(0.75); opacity:0; }
  to   { transform:translateX(-50%) scale(1); opacity:1; }
}
.mobile-controls {
  position:absolute; bottom:18px; left:0; right:0;
  display:flex; justify-content:space-between; align-items:flex-end;
  padding:0 16px; z-index:200; pointer-events:none;
}
.dpad { display:flex; flex-direction:column; align-items:center; gap:3px; pointer-events:all; }
.dpad-row { display:flex; gap:3px; align-items:center; }
.dpad-btn {
  width:46px; height:46px; background:rgba(20,8,50,0.85); color:#fff;
  border:2px solid rgba(200,100,255,0.4); border-radius:10px; font-size:1rem;
  display:flex; align-items:center; justify-content:center; transition:background 0.1s;
}
.dpad-btn:active { background:var(--purple); }
.dpad-center-dot { width:46px; height:46px; background:rgba(255,255,255,0.04); border-radius:10px; }
.action-btns { display:flex; gap:8px; pointer-events:all; }
.act-btn {
  background:linear-gradient(135deg,var(--pink),var(--purple));
  color:#fff; border-radius:50%; width:52px; height:52px;
  font-size:0.65rem; font-weight:900;
  box-shadow:0 4px 14px rgba(255,79,163,0.4);
  display:flex; align-items:center; justify-content:center;
}

/* GAME HUD */
.game-hud {
  position:absolute; top:46px; left:0; right:0; z-index:200;
  display:flex; gap:20px; justify-content:center; align-items:center;
  background:rgba(8,2,22,0.88); border-bottom:2px solid rgba(155,46,255,0.3);
  padding:6px 16px; font-size:0.88rem; font-weight:800; backdrop-filter:blur(6px);
}

/* CANVASES */
#race-canvas, #snake-canvas { position:absolute; inset:0; width:100%; height:100%; display:block; }
#screen-race, #screen-snake { padding:0; overflow:hidden; background:#0a0318; }

/* OVERLAYS */
.game-overlay {
  position:absolute; inset:0; z-index:250;
  display:flex; flex-direction:column; align-items:center; justify-content:center;
  gap:14px; background:rgba(8,2,22,0.88); backdrop-filter:blur(6px); padding:20px;
}
.game-overlay h2 {
  font-family:var(--font-title); font-size:2rem; color:var(--gold);
  text-shadow:0 0 16px rgba(255,215,0,0.5);
}
.game-overlay p { font-size:0.95rem; color:var(--text-soft); text-align:center; }
.overlay-castle-mini { margin-bottom:8px; filter:drop-shadow(0 0 12px rgba(155,46,255,0.6)); }
.jump-float-btn {
  position:absolute; bottom:20px; right:20px; z-index:200;
  background:linear-gradient(135deg,var(--pink),var(--purple));
  color:#fff; border-radius:50%; width:72px; height:72px;
  font-size:0.75rem; font-weight:900; box-shadow:0 4px 18px rgba(255,79,163,0.5);
}

/* MEMORIA */
.diff-row { display:flex; gap:10px; flex-wrap:wrap; justify-content:center; }
.diff-btn {
  background:var(--panel); border:2px solid var(--purple); color:var(--text);
  border-radius:var(--radius-sm); padding:10px 18px; font-size:0.88rem; font-weight:700; transition:0.2s;
}
.diff-btn:hover { background:var(--purple); }
.memory-stats {
  display:flex; gap:18px; flex-wrap:wrap; justify-content:center;
  font-size:0.88rem; font-weight:700;
  background:var(--panel); border-radius:var(--radius-sm);
  padding:8px 20px; border:1px solid var(--border);
}
.memory-grid { display:grid; gap:8px; justify-content:center; width:100%; max-width:500px; }
.mem-card {
  border-radius:var(--radius-sm); cursor:pointer;
  background:linear-gradient(135deg,var(--purple-dark),var(--pink-dark));
  border:2px solid var(--border);
  transition:transform 0.35s; transform-style:preserve-3d;
  position:relative; aspect-ratio:1;
}
.mem-card .mem-front, .mem-card .mem-back {
  position:absolute; inset:0; border-radius:6px;
  display:flex; align-items:center; justify-content:center;
  backface-visibility:hidden; font-size:0.9rem; font-weight:900;
}
.mem-card .mem-back { transform:rotateY(180deg); background:rgba(255,255,255,0.06); }
.mem-card.flipped   { transform:rotateY(180deg); }
.mem-card.matched   { border-color:var(--green); box-shadow:0 0 14px var(--green); }
.mem-front-img { width:70%; height:70%; object-fit:contain; }

/* SNAKE DPAD */
.snake-dpad {
  position:absolute; bottom:18px; right:16px; z-index:200;
  display:flex; flex-direction:column; align-items:center; gap:3px;
}

/* QUIZ */
.quiz-panel { width:100%; display:flex; flex-direction:column; align-items:center; gap:16px; }
.quiz-progress-bar { width:100%; height:10px; background:rgba(255,255,255,0.1); border-radius:10px; overflow:hidden; }
.quiz-progress-fill { height:100%; background:linear-gradient(90deg,var(--pink),var(--purple)); border-radius:10px; transition:width 0.4s ease; width:0%; }
.quiz-meta { display:flex; justify-content:space-between; align-items:center; width:100%; font-size:0.85rem; font-weight:700; color:var(--text-soft); }
.quiz-score-display { font-family:var(--font-title); font-size:1.1rem; color:var(--gold); }
.quiz-question {
  width:100%; background:var(--panel); border:2px solid var(--border);
  border-radius:var(--radius); padding:18px 20px;
  font-size:1rem; font-weight:700; text-align:center; line-height:1.5;
}
.quiz-options { width:100%; display:flex; flex-direction:column; gap:10px; }
.quiz-opt {
  background:rgba(255,255,255,0.06); border:2px solid var(--border);
  color:var(--text); border-radius:var(--radius-sm); padding:12px 18px;
  font-size:0.95rem; font-weight:700; text-align:left; transition:0.2s; cursor:pointer;
}
.quiz-opt:hover  { background:rgba(155,46,255,0.25); border-color:var(--purple); }
.quiz-opt.correct{ background:rgba(57,255,20,0.2); border-color:var(--green); color:var(--green); }
.quiz-opt.wrong  { background:rgba(255,40,40,0.2); border-color:#ff2828; color:#ff6666; }
.quiz-feedback {
  width:100%; background:var(--panel); border-radius:var(--radius-sm);
  padding:12px 18px; font-size:0.88rem; font-weight:700;
  text-align:center; color:var(--gold); border:1px solid var(--gold);
}

/* UTILITARIOS */
.hidden { display:none !important; }

/* RESPONSIVE */
@media (max-width: 480px) {
  .home-title   { font-size:2rem; }
  .menu-grid    { grid-template-columns:1fr 1fr; }
  .custom-layout{ flex-direction:column; }
  .chars-grid   { grid-template-columns:repeat(3,1fr); }
  .home-castle-wrap { width:220px; height:170px; }
}
@media (min-width: 600px) {
  .menu-grid { grid-template-columns:1fr 1fr 1fr; }
}
'use strict';

var AudioCtx      = null;
var musicEnabled  = true;
var bgMusicRunning= false;
var bgMusicTimeout= null;
var audioUnlocked = false;

function getAudioCtx() {
  if (!AudioCtx) {
    try { AudioCtx = new (window.AudioContext || window.webkitAudioContext)(); }
    catch(e) { return null; }
  }
  if (AudioCtx.state === 'suspended') AudioCtx.resume();
  return AudioCtx;
}

function playTone(freq, dur, type, vol, delay) {
  if (!musicEnabled) return;
  var ctx = getAudioCtx();
  if (!ctx) return;
  try {
    var osc  = ctx.createOscillator();
    var gain = ctx.createGain();
    osc.connect(gain); gain.connect(ctx.destination);
    osc.type = type || 'sine';
    var t0 = ctx.currentTime + (delay || 0);
    osc.frequency.setValueAtTime(freq, t0);
    gain.gain.setValueAtTime(vol || 0.15, t0);
    gain.gain.exponentialRampToValueAtTime(0.0001, t0 + dur);
    osc.start(t0); osc.stop(t0 + dur + 0.02);
  } catch(e) {}
}

function playClick()    { playTone(740, 0.07, 'triangle', 0.12); }
function playSuccess()  { playTone(523,0.12,'sine',0.18); playTone(659,0.12,'sine',0.18,0.14); playTone(784,0.18,'sine',0.18,0.28); }
function playError()    { playTone(220,0.14,'sawtooth',0.14); playTone(180,0.14,'sawtooth',0.14,0.17); }
function playHit()      { playTone(140, 0.22, 'sawtooth', 0.18); }
function playCoin()     { playTone(1046,0.06,'sine',0.18); playTone(1318,0.09,'sine',0.18,0.08); }
function playCardFlip() { playTone(420, 0.08, 'triangle', 0.10); }
function playMatch()    { [523,659,784,1046].forEach(function(f,i){ playTone(f,0.10,'sine',0.16,i*0.10); }); }
function playEat()      { playTone(660,0.06,'square',0.10); playTone(880,0.06,'square',0.10,0.08); }
function playGameOver() { [440,392,349,330,294].forEach(function(f,i){ playTone(f,0.15,'sawtooth',0.14,i*0.13); }); }
function playCorrect()  { playTone(659,0.10,'sine',0.18); playTone(784,0.10,'sine',0.18,0.12); playTone(1046,0.15,'sine',0.18,0.24); }
function playWrong()    { playTone(200, 0.20, 'sawtooth', 0.16); }

function playJump() {
  var ctx = getAudioCtx();
  if (!ctx || !musicEnabled) return;
  try {
    var osc=ctx.createOscillator(), gain=ctx.createGain();
    osc.connect(gain); gain.connect(ctx.destination);
    osc.type='sine';
    osc.frequency.setValueAtTime(280,ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(560,ctx.currentTime+0.18);
    gain.gain.setValueAtTime(0.18,ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.0001,ctx.currentTime+0.22);
    osc.start(ctx.currentTime); osc.stop(ctx.currentTime+0.24);
  } catch(e) {}
}

var MELODY = [523.25,587.33,659.25,698.46,783.99,698.46,659.25,587.33,523.25,493.88,440.00,493.88,523.25,523.25,587.33,659.25,698.46,783.99,880.00,783.99,698.46,659.25,587.33,523.25];
var BASS   = [261.63,261.63,329.63,349.23,392.00,349.23,329.63,261.63];

function startBgMusic() {
  if (bgMusicRunning) return;
  if (!musicEnabled)  return;
  var ctx = getAudioCtx();
  if (!ctx) return;
  bgMusicRunning = true;
  scheduleMelody(0);
}

function stopBgMusic() {
  bgMusicRunning = false;
  clearTimeout(bgMusicTimeout);
}

function scheduleMelody(step) {
  if (!bgMusicRunning || !musicEnabled) return;
  playTone(MELODY[step % MELODY.length], 0.22, 'sine',     0.055);
  playTone(BASS[Math.floor(step/3) % BASS.length], 0.28, 'triangle', 0.035);
  bgMusicTimeout = setTimeout(function(){ scheduleMelody(step+1); }, 310);
}

function toggleMusic() {
  var ctx = getAudioCtx();
  musicEnabled = !musicEnabled;
  var lbl = document.getElementById('music-label');
  var ico = document.getElementById('music-icon');
  if (lbl) lbl.textContent = 'Musica: ' + (musicEnabled ? 'ON' : 'OFF');
  if (ico) ico.textContent = musicEnabled ? '\u266B' : '\u266A';
  if (musicEnabled) { bgMusicRunning = false; startBgMusic(); }
  else stopBgMusic();
}

function unlockAndStartMusic() {
  if (audioUnlocked) return;
  audioUnlocked = true;
  var ctx = getAudioCtx();
  if (ctx) {
    ctx.resume().then(function() {
      if (musicEnabled && !bgMusicRunning) setTimeout(startBgMusic, 200);
    });
  }
  document.removeEventListener('click',      unlockAndStartMusic);
  document.removeEventListener('touchstart', unlockAndStartMusic);
}
'use strict';

// ═══════════════════════════════════════════════════
//  ESTADO GLOBAL
// ═══════════════════════════════════════════════════
var curChar      = null;
var curLang      = 'pt';
var sessionStart = Date.now();
var hudInterval  = null;

// ═══════════════════════════════════════════════════
//  NAVEGACAO
// ═══════════════════════════════════════════════════
function goScreen(id) {
  if (id !== 'screen-explore') { try { stopExplore(); } catch(e){} }
  if (id !== 'screen-race')    { try { stopRace();    } catch(e){} }
  if (id !== 'screen-snake')   { try { stopSnake();   } catch(e){} }
  if (id !== 'screen-memory')  { try { stopMemory();  } catch(e){} }

  document.querySelectorAll('.screen').forEach(function(s) {
    s.classList.remove('active');
  });

  var el = document.getElementById(id);
  if (el) el.classList.add('active');

  var showHud = (id !== 'screen-home' && id !== 'screen-select');
  var hud = document.getElementById('global-hud');
  if (hud) {
    if (showHud) hud.classList.remove('hidden');
    else         hud.classList.add('hidden');
  }

  if (id === 'screen-menu')   buildMenuHeader();
  if (id === 'screen-custom') buildCustom();
  if (id === 'screen-select') buildCharSelect();
  if (id === 'screen-memory') resetMemoryScreen();
  if (id === 'screen-snake')  resetSnakeScreen();
  if (id === 'screen-quiz')   resetQuiz();

  if (audioUnlocked) playClick();
}

function resetMemoryScreen() {
  var d = document.getElementById('memory-diff-row');
  var s = document.getElementById('memory-stats');
  var w = document.getElementById('memory-win');
  var g = document.getElementById('memory-grid');
  if (d) d.classList.remove('hidden');
  if (s) s.classList.add('hidden');
  if (w) w.classList.add('hidden');
  if (g) g.innerHTML = '';
}

function resetSnakeScreen() {
  var ov = document.getElementById('snake-overlay');
  var oe = document.getElementById('snake-over');
  if (ov) ov.classList.remove('hidden');
  if (oe) oe.classList.add('hidden');
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
  var h    = String(now.getHours()).padStart(2,'0');
  var mn   = String(now.getMinutes()).padStart(2,'0');
  var d    = String(now.getDate()).padStart(2,'0');
  var mo   = String(now.getMonth()+1).padStart(2,'0');
  var yr   = now.getFullYear();
  var secs = Math.floor((Date.now() - sessionStart) / 1000);
  var el;
  el = document.getElementById('hud-time');     if (el) el.textContent = h + ':' + mn;
  el = document.getElementById('hud-date');     if (el) el.textContent = d + '/' + mo + '/' + yr;
  el = document.getElementById('hud-session');  if (el) el.textContent = secs + 's';
  el = document.getElementById('hud-char-name');if (el && curChar) el.textContent = curChar.name;
}

// ═══════════════════════════════════════════════════
//  TOAST
// ═══════════════════════════════════════════════════
function showToast(msg, dur) {
  var t = document.getElementById('toast-msg');
  if (!t) return;
  t.textContent = msg;
  t.classList.remove('hidden');
  clearTimeout(t._tid);
  t._tid = setTimeout(function() { t.classList.add('hidden'); }, dur || 2400);
}

// ═══════════════════════════════════════════════════
//  FUNDO ANIMADO — estrelas, glitters, meteoros
// ═══════════════════════════════════════════════════
var ParticleBg = (function() {
  var canvas, ctx;
  var stars = [], glitters = [], meteors = [];
  var t0 = 0, W = 0, H = 0;
  var GLITTER_COLORS = ['#ff4fa3','#c77dff','#ffd700','#00e5ff','#ff9de2','#39ff14'];

  function init() {
    canvas = document.getElementById('bg-particles');
    ctx    = canvas.getContext('2d');
    resize();
    window.addEventListener('resize', resize);
    build();
    t0 = performance.now();
    requestAnimationFrame(loop);
  }

  function resize() {
    W = canvas.width  = window.innerWidth;
    H = canvas.height = window.innerHeight;
  }

  function build() {
    stars = []; glitters = []; meteors = [];
    for (var i = 0; i < 180; i++) {
      stars.push({
        x: Math.random(), y: Math.random(),
        r: Math.random() * 1.6 + 0.2,
        twinkleFreq: Math.random() * 0.003 + 0.0008,
        phase: Math.random() * Math.PI * 2,
        color: Math.random() < 0.2 ? GLITTER_COLORS[Math.floor(Math.random()*GLITTER_COLORS.length)] : '#ffffff'
      });
    }
    for (var j = 0; j < 55; j++) {
      glitters.push({
        x: Math.random(), y: Math.random(),
        size: Math.random() * 5 + 2,
        color: GLITTER_COLORS[j % GLITTER_COLORS.length],
        phase: Math.random() * Math.PI * 2,
        bobFreq:   Math.random() * 0.0015 + 0.0005,
        rotFreq:   Math.random() * 0.002  + 0.001,
        alphaFreq: Math.random() * 0.002  + 0.001
      });
    }
  }

  function spawnMeteor() {
    meteors.push({
      x: Math.random() * W, y: -10,
      vx: 2 + Math.random() * 3, vy: 3 + Math.random() * 4,
      len: 60 + Math.random() * 80, alpha: 1,
      color: GLITTER_COLORS[Math.floor(Math.random()*GLITTER_COLORS.length)]
    });
  }

  function loop(now) {
    requestAnimationFrame(loop);
    var t = (now - t0) * 0.001;
    ctx.clearRect(0, 0, W, H);

    var shift = Math.sin(t * 0.05) * 0.06;
    var grd   = ctx.createLinearGradient(0, 0, W, H);
    grd.addColorStop(0,   'hsl(' + (260 + shift*30) + ',60%,6%)');
    grd.addColorStop(0.5, 'hsl(' + (270 + shift*20) + ',58%,8%)');
    grd.addColorStop(1,   'hsl(' + (280 + shift*15) + ',55%,12%)');
    ctx.fillStyle = grd;
    ctx.fillRect(0, 0, W, H);

    [
      { x:0.15, y:0.25, r:0.30, c:'rgba(155,46,255,' },
      { x:0.80, y:0.60, r:0.25, c:'rgba(255,79,163,' },
      { x:0.50, y:0.10, r:0.20, c:'rgba(0,229,255,'  }
    ].forEach(function(n) {
      var alpha = 0.025 + 0.015 * Math.sin(t * 0.07 + n.x);
      var rg = ctx.createRadialGradient(n.x*W, n.y*H, 0, n.x*W, n.y*H, n.r*W);
      rg.addColorStop(0, n.c + alpha + ')');
      rg.addColorStop(1, n.c + '0)');
      ctx.fillStyle = rg;
      ctx.fillRect(0, 0, W, H);
    });

    stars.forEach(function(s) {
      var bright = 0.35 + 0.65 * (0.5 + 0.5 * Math.sin(t * s.twinkleFreq * 6283 + s.phase));
      var r = s.r * (0.8 + 0.4 * bright);
      ctx.globalAlpha = bright * 0.92;
      ctx.fillStyle   = s.color;
      ctx.beginPath();
      ctx.arc(s.x * W, s.y * H, r, 0, Math.PI * 2);
      ctx.fill();
      if (s.r > 1.1 && bright > 0.75) {
        ctx.globalAlpha = bright * 0.35;
        ctx.strokeStyle = s.color; ctx.lineWidth = 0.6;
        var arm = r * 4;
        ctx.beginPath();
        ctx.moveTo(s.x*W - arm, s.y*H); ctx.lineTo(s.x*W + arm, s.y*H);
        ctx.moveTo(s.x*W, s.y*H - arm); ctx.lineTo(s.x*W, s.y*H + arm);
        ctx.stroke();
      }
    });
    ctx.globalAlpha = 1;

    glitters.forEach(function(g) {
      var bob   = Math.sin(t * g.bobFreq   * 6283 + g.phase) * 0.04 * H;
      var rot   = t     * g.rotFreq   * 6283;
      var alpha = 0.30 + 0.70 * Math.abs(Math.sin(t * g.alphaFreq * 6283 + g.phase));
      var sz    = g.size * (0.7 + 0.5 * alpha);
      ctx.save();
      ctx.translate(g.x * W, g.y * H + bob);
      ctx.rotate(rot);
      ctx.globalAlpha = alpha;
      ctx.fillStyle = g.color;
      ctx.beginPath();
      ctx.moveTo(0, -sz); ctx.lineTo(sz*0.55, 0);
      ctx.lineTo(0, sz);  ctx.lineTo(-sz*0.55, 0);
      ctx.closePath(); ctx.fill();
      ctx.fillStyle = '#ffffff';
      ctx.globalAlpha = alpha * 0.4;
      ctx.fillRect(-sz*0.18, -sz*0.18, sz*0.36, sz*0.36);
      ctx.restore();
      ctx.globalAlpha = 1;
    });

    if (Math.random() < 0.002) spawnMeteor();
    meteors = meteors.filter(function(m) { return m.alpha > 0.02; });
    meteors.forEach(function(m) {
      ctx.save();
      ctx.globalAlpha = m.alpha;
      var gm = ctx.createLinearGradient(m.x, m.y, m.x - m.vx/m.vy*m.len, m.y - m.len);
      gm.addColorStop(0, m.color); gm.addColorStop(1, 'transparent');
      ctx.strokeStyle = gm; ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(m.x, m.y);
      ctx.lineTo(m.x - m.vx/m.vy*m.len, m.y - m.len);
      ctx.stroke();
      ctx.restore();
      m.x += m.vx; m.y += m.vy; m.alpha -= 0.025;
      ctx.globalAlpha = 1;
    });
  }

  return { init: init };
}());

// ═══════════════════════════════════════════════════
//  HOME — PRINCESAS ANIMADAS NA ENTRADA
// ═══════════════════════════════════════════════════
var homeCharAnims = [];

function buildHomeChars() {
  var row = document.getElementById('home-chars-row');
  if (!row) return;
  row.innerHTML = '';
  homeCharAnims.forEach(function(a) { a.running = false; });
  homeCharAnims = [];

  [0, 1, 2].forEach(function(i) {
    var c   = CHARACTERS[i];
    var div = document.createElement('div');
    div.className = 'home-mini-char';
    div.title = c.name + ' - ' + c.job;

    var cvs = document.createElement('canvas');
    cvs.width  = 80;
    cvs.height = 118;

    var lbl = document.createElement('span');
    lbl.textContent = c.name;

    div.appendChild(cvs);
    div.appendChild(lbl);
    div.addEventListener('click', function() { selectChar(c); });
    row.appendChild(div);

    var anim = { running: true, phase: i * 1.1 };
    homeCharAnims.push(anim);
    animateHomeChar(cvs, c, anim);
  });
}

function animateHomeChar(cvs, char, anim) {
  var ctx      = cvs.getContext('2d');
  var t0       = performance.now();
  var baseChar = Object.assign({}, char);

  function frame(now) {
    if (!anim.running) return;
    var t = (now - t0) * 0.001 + anim.phase;

    ctx.clearRect(0, 0, cvs.width, cvs.height);
    ctx.save();
    var swayAngle = Math.sin(t * 1.2) * 0.04;
    ctx.translate(cvs.width / 2, cvs.height);
    ctx.rotate(swayAngle);
    ctx.translate(-cvs.width / 2, -cvs.height);

    drawPrincess(cvs, baseChar, 1);

    var starAlpha = 0.4 + 0.6 * Math.abs(Math.sin(t * 2.5));
    ctx.globalAlpha = starAlpha;
    ctx.fillStyle   = '#ffd700';
    var sx = cvs.width / 2 + Math.sin(t * 1.8) * 10;
    var sy = 6 + Math.abs(Math.sin(t * 1.3)) * 4;
    drawStar4(ctx, sx, sy, 5);
    ctx.globalAlpha = 1;
    ctx.restore();

    requestAnimationFrame(frame);
  }
  requestAnimationFrame(frame);
}

function drawStar4(ctx, x, y, r) {
  ctx.beginPath();
  ctx.moveTo(x, y-r);     ctx.lineTo(x+r*0.3, y-r*0.3);
  ctx.lineTo(x+r, y);     ctx.lineTo(x+r*0.3, y+r*0.3);
  ctx.lineTo(x, y+r);     ctx.lineTo(x-r*0.3, y+r*0.3);
  ctx.lineTo(x-r, y);     ctx.lineTo(x-r*0.3, y-r*0.3);
  ctx.closePath(); ctx.fill();
}

// ═══════════════════════════════════════════════════
//  SELECAO DE PERSONAGEM
// ═══════════════════════════════════════════════════
function buildCharSelect() {
  var grid = document.getElementById('chars-grid');
  if (!grid) return;
  grid.innerHTML = '';
  CHARACTERS.forEach(function(c) {
    var card = document.createElement('div');
    card.className = 'char-card';
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
  });
}

function selectChar(c) {
  curChar = Object.assign({}, c);
  if (audioUnlocked) playSuccess();
  var msgs = { pt: c.name+' selecionada!', en: c.name+' selected!', es: c.name+' seleccionada!' };
  showToast(msgs[curLang] || msgs.pt);
  goScreen('screen-menu');
}

// ═══════════════════════════════════════════════════
//  MENU HEADER
// ═══════════════════════════════════════════════════
function buildMenuHeader() {
  var el = document.getElementById('menu-char-header');
  if (!el || !curChar) return;
  el.innerHTML = '';
  var cvs = document.createElement('canvas');
  cvs.width = 70; cvs.height = 100;
  drawPrincess(cvs, curChar, 1);
  var info = document.createElement('div');
  info.className = 'menu-header-info';
  var nm = document.createElement('div');
  nm.className = 'menu-header-name'; nm.textContent = curChar.name;
  var jb = document.createElement('div');
  jb.className = 'menu-header-job'; jb.textContent = curChar.job;
  info.appendChild(nm); info.appendChild(jb);
  el.appendChild(cvs); el.appendChild(info);
}

// ═══════════════════════════════════════════════════
//  IDIOMA
// ═══════════════════════════════════════════════════
function setLang(lang) {
  curLang = lang;
  document.querySelectorAll('.lang-btn').forEach(function(b) {
    b.classList.toggle('active', b.getAttribute('data-lang') === lang);
  });
  var root = document.getElementById('html-root');
  if (root) root.lang = lang === 'pt' ? 'pt-BR' : lang;
  applyTranslations();
  try { resetQuiz(); } catch(e) {}
  if (audioUnlocked) playClick();
  showToast(lang==='pt'?'Idioma: Portugues':lang==='en'?'Language: English':'Idioma: Espanol');
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
window.addEventListener('DOMContentLoaded', function() {
  curChar = Object.assign({}, CHARACTERS[0]);
  ParticleBg.init();
  buildHomeChars();
  buildCharSelect();
  startHud();
  applyTranslations();
  document.addEventListener('click',      unlockAndStartMusic);
  document.addEventListener('touchstart', unlockAndStartMusic, { passive: true });
  window.addEventListener('resize', function() {
    var rc = document.getElementById('race-canvas');
    var sc = document.getElementById('snake-canvas');
    if (rc && document.getElementById('screen-race').classList.contains('active')) {
      rc.width = window.innerWidth; rc.height = window.innerHeight;
    }
    if (sc && document.getElementById('screen-snake').classList.contains('active')) {
      sc.width = window.innerWidth; sc.height = window.innerHeight;
    }
  });
  console.log('[Dream Castle] Carregado!');
});
