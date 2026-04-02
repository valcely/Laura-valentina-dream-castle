const { useState, useRef, useEffect, useCallback, useMemo } = React;

const vars = { 
  pPink: '#ffb6c1', dPink: '#e0218a', lPurple: '#c77dff', 
  gold: '#f3c623', roseGold: '#b76e79', text: '#ffffff',
  fontMain: "'Montserrat', sans-serif", fontFancy: "'Dancing Script', cursive"
};

// ==========================================
// SISTEMA DE ÁUDIO NATIVO (SEM EXTERNOS)
// ==========================================
const audioCtx = new (window.AudioContext || window.webkitAudioContext)();

const playSFX = (type) => {
  if (audioCtx.state === 'suspended') audioCtx.resume();
  const osc = audioCtx.createOscillator();
  const gain = audioCtx.createGain();
  osc.connect(gain); gain.connect(audioCtx.destination);
  const now = audioCtx.currentTime;

  switch(type) {
    case 'click':
      osc.type = 'sine'; osc.frequency.setValueAtTime(900, now); osc.frequency.exponentialRampToValueAtTime(1400, now + 0.1);
      gain.gain.setValueAtTime(0.2, now); gain.gain.exponentialRampToValueAtTime(0.01, now + 0.1);
      osc.start(now); osc.stop(now + 0.1); break;
    case 'magic':
      osc.type = 'triangle'; osc.frequency.setValueAtTime(600, now); osc.frequency.setValueAtTime(800, now + 0.1); osc.frequency.setValueAtTime(1200, now + 0.2);
      gain.gain.setValueAtTime(0.15, now); gain.gain.linearRampToValueAtTime(0, now + 0.4);
      osc.start(now); osc.stop(now + 0.4); break;
    case 'camera':
      osc.type = 'square'; osc.frequency.setValueAtTime(200, now); osc.frequency.exponentialRampToValueAtTime(100, now + 0.1);
      gain.gain.setValueAtTime(0.3, now); gain.gain.exponentialRampToValueAtTime(0.01, now + 0.1);
      osc.start(now); osc.stop(now + 0.1); break;
    case 'success':
      osc.type = 'sine'; osc.frequency.setValueAtTime(440, now); osc.frequency.setValueAtTime(554, now + 0.15); osc.frequency.setValueAtTime(659, now + 0.3); osc.frequency.setValueAtTime(880, now + 0.45);
      gain.gain.setValueAtTime(0.2, now); gain.gain.linearRampToValueAtTime(0, now + 0.8);
      osc.start(now); osc.stop(now + 0.8); break;
    case 'jump':
      osc.type = 'sine'; osc.frequency.setValueAtTime(300, now); osc.frequency.linearRampToValueAtTime(600, now + 0.2);
      gain.gain.setValueAtTime(0.2, now); gain.gain.linearRampToValueAtTime(0, now + 0.2);
      osc.start(now); osc.stop(now + 0.2); break;
  }
};

// ==========================================
// ASSETS SVG
// ==========================================
const svgToDataUrl = (svgStr) => `data:image/svg+xml;utf8,${encodeURIComponent(svgStr)}`;
const DRESS_ASSETS = [
  svgToDataUrl(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path d="M30 20 Q50 35 70 20 L80 40 Q50 60 20 40 Z" fill="#e0218a"/><path d="M20 40 L80 40 L90 95 Q50 105 10 95 Z" fill="#ffb6c1"/></svg>`),
  svgToDataUrl(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path d="M35 15 L65 15 L75 45 L25 45 Z" fill="#ffffff"/><path d="M25 45 L75 45 L70 95 L30 95 Z" fill="#111111"/></svg>`)
];

const SHOE_ASSETS = [
  svgToDataUrl(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path d="M20 80 Q40 60 70 80 L80 90 L70 95 Q40 95 20 90 Z" fill="#e0218a"/></svg>`)
];
const CHARACTERS = [
  { id:"laura", name:"Laura", job:"Arquiteta", seed:"Jasmine" },
  { id:"valentina", name:"Valentina", job:"Cientista", seed:"Bella" },
  { id:"giovanna", name:"Giovanna", job:"Médica", seed:"Daisy" },
  { id:"lidiane", name:"Lidiane", job:"Biomédica", seed:"Lily" }
];
const Btn = ({active, onClick, children}) => (
  <button onClick={() => { playSFX('click'); onClick(); }}>
    {children}
  </button>
);
function MakeupSalon({ onClose }) {
  return (
    <div>
      <h2>Salão de Beleza</h2>
      <Btn onClick={onClose}>Voltar</Btn>
    </div>
  );
}
function RunnerGame({ onClose }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const ctx = canvasRef.current.getContext('2d');
    ctx.fillRect(0,0,100,100);
  }, []);

  return <canvas ref={canvasRef} width={300} height={200}/>;
}
function SeaQuiz({ onClose }) {
  return (
    <div>
      <h2>Quiz</h2>
      <Btn onClick={onClose}>Voltar</Btn>
    </div>
  );
}
function App() {
  const [screen, setScreen] = useState("home");
  const [char, setChar] = useState(null);

  return (
    <div>
      {screen === "home" && (
        <Btn onClick={()=>setScreen("select")}>Entrar</Btn>
      )}

      {screen === "select" && CHARACTERS.map(c => (
        <div key={c.id} onClick={()=>{setChar(c); setScreen("castle");}}>
          {c.name}
        </div>
      ))}

      {screen === "castle" && (
        <Btn onClick={()=>setScreen("game_run")}>Jogar</Btn>
      )}

      {screen === "game_run" && (
        <RunnerGame onClose={()=>setScreen("castle")} />
      )}
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);