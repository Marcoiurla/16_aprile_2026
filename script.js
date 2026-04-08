/* ===========================
   CONTATORE AMORE NERD
=========================== */

const startDate = new Date("2025-09-14T23:00:00"); // CAMBIA CON LA VOSTRA DATA

function updateCounter() {
  const now = new Date();
  const diff = now - startDate;

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);

  const counter = document.getElementById("loveCounter");
  if(counter){
    counter.innerText = `Tiamo da: ${days} giorni ${hours} ore 🖤`;
  }
}

setInterval(updateCounter, 1000);
updateCounter();

/* ===========================
   QUIZ
=========================== */

let questions = [
  {
    q: "Qual è il mio colore preferito?",
    answers: ["Azzurro", "Bianco", "Rosso"],
    correct: 0
  },
  {
    q: "Qual è il mio colore preferito?",
    answers: ["Azzurro", "Bianco", "Rosso"],
    correct: 0
  },
  {
    q: "Gusto gelato preferito?",
    answers: ["Pistacchio", "Croccante Amarena", "Ovetto"],
    correct: 2
  },
  {
    q: "Fiore preferito?",
    answers: ["Dalia Nera", "Rosa Bianca", "Margherita"],
    correct: 0
  },
  {
    q: "Autore italiano preferito?",
    answers: ["Svevo", "Machiavelli", "Pirandello"],
    correct: 1
  },
  {
    q: "Cosa preferirei?",
    answers: ["Parlare qualsiasi lingua", "Leggere nel pensiero", "Teletrasportarmi ovunque"],
    correct: 2
  }
];

let current = 0;

function loadQuiz() {
  if(!document.getElementById("quizContainer")) return;

  const q = questions[current];
  document.getElementById("question").innerText = q.q;

  const container = document.getElementById("answers");
  container.innerHTML = "";

  q.answers.forEach((ans, index) => {
    const btn = document.createElement("button");
    btn.innerText = ans;
    btn.classList.add("answer");
    btn.onclick = () => checkAnswer(index, btn);
    container.appendChild(btn);
  });
}

function checkAnswer(index, button) {
  const correctIndex = questions[current].correct;
  if(index === correctIndex){
    button.classList.add("correct");
  } else {
    button.classList.add("wrong");
  }
}

function nextQuestion() {
  current++;
  if(current < questions.length){
    loadQuiz();
  } else {
  document.getElementById("quizContainer").style.display = "none";
  document.getElementById("crosswordSection").style.display = "block";
  }
}

/* ===========================
   STEP CRUCIVERBA → REGALO
=========================== */

function showGiftSection() {
  document.getElementById("crosswordSection").style.display = "none";
  document.getElementById("giftSection").style.display = "block";
  launchConfetti(); // 🎉 coriandoli solo quando sblocca davvero il regalo
  document.getElementById("nextPageBtn").style.display = "inline-block";

  
}



function toggleImage(id){
  const img = document.getElementById(id);
  img.classList.toggle("show");
}

let audio;

function toggleSong(){
  if(!audio){
    audio = new Audio("assets/file.mp3");
  }

  if(audio.paused){
    audio.volume = 0.6;
    audio.play();
    document.getElementById("songBtn").innerText = "⏸️ Metti in pausa";
  } else {
    audio.pause();
    document.getElementById("songBtn").innerText = "🎵 Riproduci la nostra canzone";
  }
}

/* ===========================
   LETTERA DIGITALE
=========================== */

function showDigitalLetter() {
  const letter = document.getElementById("digitalLetter");
  letter.style.display = "block";

  const text = `Ciao Pallina,
oggi è il tuo giorno.
Ho pensato tantissimo prima di iniziare a scrivere… è la prima volta nella mia vita che mi ritrovo a scrivere una lettera di auguri ad una persona. Non è semplice. Perché non si tratta solo di trovare parole dolci o belle. Si tratta di riuscire a farti capire la ragazza speciale che sei diventata in questi 21 anni. Lo sei per me, lo sei per la tua famiglia, per i tuoi amici e devi esserlo anche per te stessa. Voglio riuscire a farti guardare te stessa per ciò che porti nella vita delle persone che ami, ma soprattutto per ciò che hai coltivato dentro il mio cuore.

Ho avuto modo di conoscere direttamente e indirettamente la tua famiglia, di conoscere i tuoi amici, che siano di casa, di vita o di università. E wow… il primo e unico pensiero che automaticamente mi è sempre venuto spontaneo è stato “Aurora è davvero una ragazza speciale”. Tu sei una di quelle persone che si fanno sentire davvero. Di quelle che lasciano qualcosa. Di quelle che, nel bene o nel male, non passano mai in silenzio nella vita degli altri. E questa è una cosa rara. Bellissima. Potente.

Lo sai bene anche tu, in fondo: hai dentro una luce tutta tua.
Una luce che a volte forse nemmeno tu riesci a vedere bene, soprattutto nei giorni in cui sei più dura con te stessa, nei giorni in cui ti senti fragile. Ma quella luce c’è. C’è eccome. 

Si vede nel modo in cui ti emozioni per le piccole cose. Nel modo in cui vivi tutto intensamente. Nel modo in cui ami la tua famiglia. Nel modo in cui sai essere dolce. Nel modo in cui riesci a dare importanza a dettagli che per tanti passerebbero inosservati. Nel modo in cui ami. In cui mi ami.

Lo sai quanto ti ammiro. Quanto ammiro la tua sensibilità… che non è debolezza, anche se magari qualche volta può sembrarlo. È una forma di profondità. È quel tipo di cuore che non resta in superficie, che non si accontenta, che vive tutto con verità e con pienezza. Continua ad essere così. Ad innamorarti di piccole cose. A commuoverti per una semplice frase. A piangere pensando alla tua casa.

Sei umana, profondamente vera. Una bimba piena di sfumature. Come ti ho già detto, sei il mare di Torre dell’Orso: hai il sole dentro, ma anche le tue onde. Hai la dolcezza e hai il fuoco. Hai la delicatezza e hai la forza.

Forse sono tutte queste cose che permettono alla gente di amarti, di poter dire che sei speciale. Così sei entrata nel mio cuore, da subito, senza far nulla, senza chiedere permesso. Semplicemente con il tuo modo di guardare il mondo. Con quella luce negli occhi e quel sorriso sulle labbra che ti contraddistinguono. Mio dio… se ripenso a quelle prime sere di settembre in macchina, in cui parlavi piena di gioia di qualsiasi cosa ti passasse per la testa, in cui ogni parola mi permetteva di conoscerti più a fondo… sorrido. Perché c’è l’ho fatta. Perché ricordo il desiderio che avevo di stringerti, di zittirti con un bacio, di toccarti. E ora tutto questo  mi è possibile farlo. Con la bambina che ho sempre sognato. Ora, invaso da emozioni e dalla gioia di poter finalmente festeggiare il tuo compleanno insieme, mi ritrovo a scrivere nero su bianco una lettera di auguri… a te.

Per questo, nel giorno in cui festeggiamo la tua nascita, io sono grato. Sono grato perché esisti, perché esisti nella mia vita anche, perché sei fatta proprio così come sei. Sarà il destino, la vita, il mare, il sole, l’universo, tutto quello che esiste…  ma io ringrazio tutto questo per averti fatta arrivare fino a me in questa forma così profonda.

Con questa letterina, oggi non voglio solo dirti “buon compleanno amore”, ma voglio dirti che spero con tutto il cuore che questo nuovo anno di vita possa essere gentile con te, possa continuare a regalarti leggerezza laddove quest’anno hai avuto dei pesi, possa regalarti soddisfazioni vere, conferme belle, abbracci sinceri. Io so per certo che sarò al tuo fianco lungo tutti i tuoi 21 anni. Ti prendo per mano e ti accompagno, con tutta la gioia del mondo e con tutto l’amore che meriti.
Ti amo immensamente.
Tuo,
Fuffy
`;

  typeWriter(text, "letterContent", 0);
}

function typeWriter(text, elementId, index) {
  if(index < text.length){
    document.getElementById(elementId).innerHTML += text.charAt(index);
    setTimeout(() => typeWriter(text, elementId, index + 1), 12);
  }
}


function revealLetter() {

  // Nasconde il primo bottone
  document.getElementById("mainRevealBtn").style.display = "none";

  const textBlock = document.getElementById("physicalLetterText");
  textBlock.classList.remove("hidden");

  setTimeout(() => {
    textBlock.classList.add("show");
  }, 50);

  // Dopo 7 secondi appare il bottone digitale
  setTimeout(() => {
    const digitalBtn = document.getElementById("digitalBtnWrapper");
    digitalBtn.classList.remove("hidden");

    setTimeout(() => {
      digitalBtn.classList.add("show");
    }, 50);

  }, 5000);
}

/* ===========================
   CANZONE TIMELINE
=========================== */

function playSong() {
  const audio = new Audio("assets/tiamo.mp3");
  audio.play();
}



function launchConfetti() {
  for(let i = 0; i < 200; i++) {
    const confetti = document.createElement("div");
    confetti.classList.add("confetti");

    confetti.style.left = Math.random() * 100 + "vw";
    confetti.style.backgroundColor = randomColor();
    confetti.style.animationDuration = (Math.random() * 2 + 3) + "s";

    document.body.appendChild(confetti);

    setTimeout(() => {
      confetti.remove();
    }, 6000);
  }
}

function randomColor() {
  const colors = ["#4da3ff", "#a2d2ff", "#ffd166", "#ffafcc", "#bde0fe"];
  return colors[Math.floor(Math.random() * colors.length)];
}


/* STORIA */
function openImage(src){
  const overlay = document.getElementById("overlay");
  const content = document.getElementById("popupContent");

  content.innerHTML = `<img src="${src}">`;
  overlay.classList.add("show");
  overlay.style.display = "flex";
}

function openVideo(src){
  const overlay = document.getElementById("overlay");
  const content = document.getElementById("popupContent");

  content.innerHTML = `
    <video src="${src}" autoplay playsinline></video>
  `;
  overlay.classList.add("show");
  overlay.style.display = "flex";

}

function openVideoMuted(src){
  const overlay = document.getElementById("overlay");
  const content = document.getElementById("popupContent");

  content.innerHTML = `
    <video src="${src}" autoplay muted playsinline></video>
  `;
  overlay.classList.add("show");
  overlay.style.display = "flex";

}

function closePopup() {

  const overlay = document.getElementById("overlay");
  const popup = document.getElementById("popupContent");

  // Se c'è un video, fermalo
  const video = document.getElementById("popupVideo");
  if (video) {
    video.pause();
    video.currentTime = 0;
  }

  // Pulisce completamente il contenuto
  popup.innerHTML = "";

  overlay.style.display = "none";
}



function playMusic() {
  const music = document.getElementById("bgMusic");
  if (music) {
    music.volume = 0.5;
    music.play();
  }
}
/* ===========================
   HEART TIMELINE 28 PUNTI
=========================== */

function generateHeartTimeline() {

  const container = document.getElementById("heartTimeline");
  const svg = document.getElementById("heartLines");

  if (!container || !svg) return;

  const totalPoints = 23;

  const centerX = 300;
  const centerY = 280;
  const scale = 16;

  const events = [
    { type: "video-muted", src: "assets/2020.mov", label: "Dove tutto ebbe inizio..." }, //1
    { type: "image", src: "assets/PRIMO_INCONTRO.jpg", label: "Primo incontro" }, //2
    { type: "video-muted", src: "assets/BALLETTO.mov", label: "19/09/25" }, //3
    { type: "video-muted", src: "assets/GIRASOLI.mov", label: "21/11/25" }, //4
    { type: "video-muted", src: "assets/GIRASOLI MARE.mov", label: "Insieme al mare" }, //5 
    { type: "video-muted", src: "assets/BOWLING.mov", label: "Imbarazzo per pallina" }, //6
    { type: "video-muted", src: "assets/ELEGANTI.mov", label: "Eleganti..." }, //7
    { type: "image", src: "assets/MERCOLEDI.jpg", label: "WE" }, //8
    { type: "video-muted", src: "assets/IN VIAGGIO.mov", label: "Primo viaggio insieme" }, //9 
    { type: "video-muted", src: "assets/CAPRIOLA.mov", label: "Pallina si diverte" }, //10
    { type: "video-muted", src: "assets/FELICITA.mov", label: "Tu sei la mia felicità" }, //11
    { type: "video-muted", src: "assets/TORRE.mov", label: "Torre insieme" }, //12
    { type: "video-muted", src: "assets/UFFICIO.mov", label: "Studiando insieme" }, //13
    { type: "image", src: "assets/AL BAR.jpg", label: "Angiolina Jolie" }, //14
    { type: "image", src: "assets/A CASA.jpg", label: "Pallina perde a carambola" }, //15
    { type: "video-muted", src: "assets/MOTO.mov", label: "Sulle moto come i bimbi" }, //16
    { type: "video-muted", src: "assets/TRECCE.mov", label: "Bimba WE" }, //17
    { type: "image", src: "assets/F1.jpg", label: "Formula 1 insieme" }, //18
    { type: "image", src: "assets/DORMIRE.jpg", label: "Dormire insieme" }, //19
    { type: "image", src: "assets/SKIN.jpg", label: "Pallina ciotta fa la skin care" }, //20
    { type: "video-muted", src: "assets/MASCHERA.mp4", label: "Pallina e Fuffy con la maschera" }, //21
    { type: "video-muted", src: "assets/POLLETTO.mov", label: "Ma tu lo hai mai mangiato il polletto?" }, //22
    { type: "video-muted", src: "assets/PASQUETTA.mov", label: "Torre con la famiglia" }, //23
    // continua fino a 28 elementi
  ];
  const points = [];
  const labels = [];

  let activatedCount = 0;
  // 🔥 distanza dalle cuspidi (aumenta per più spazio)
  const cuspGap = 0.4;

  // Creiamo manualmente i valori di t
  const tValues = [];

  // Punta inferiore
  tValues.push(0);

  // Punta superiore
  tValues.push(Math.PI);

  // Punti rimanenti distribuiti in due archi:
  const remaining = totalPoints - 2;
  const half = Math.floor(remaining / 2);

  // Arco destro (da cuspGap a π - cuspGap)
  for (let i = 0; i < half; i++) {
    const t = cuspGap + (i / (half - 1)) * (Math.PI - 2 * cuspGap);
    tValues.push(t);
  }

  // Arco sinistro (da π + cuspGap a 2π - cuspGap)
  for (let i = 0; i < remaining - half; i++) {
    const t = Math.PI + cuspGap + 
      (i / (remaining - half - 1)) * (Math.PI - 2 * cuspGap);
    tValues.push(t);
  }

  // Ordiniamo per continuità
  tValues.sort((a, b) => a - b);

  for (let i = 0; i < tValues.length; i++) {

    const t = tValues[i];

    const x = 16 * Math.pow(Math.sin(t), 3);
    const y =
      13 * Math.cos(t) -
      5 * Math.cos(2 * t) -
      2 * Math.cos(3 * t) -
      Math.cos(4 * t);

    const posX = centerX + x * scale;
    const posY = centerY - y * scale;

    // Punto
    const point = document.createElement("div");
    point.classList.add("heart-point");
    point.style.left = posX + "px";
    point.style.top = posY + "px";

    // Etichetta
    const label = document.createElement("div");
    label.classList.add("heart-label");
    label.innerText = events[i % events.length].label;
    label.style.left = posX + "px";
    label.style.top = posY + "px";
    labels.push(label);

    container.appendChild(point);
    container.appendChild(label);

    points.push({ x: posX, y: posY, element: point });

    point.onclick = () => {
      if (point.classList.contains("active")) return;

      point.classList.add("active");
      activatedCount++;

      // Nasconde tutte le label
      labels.forEach(l => l.classList.remove("visible"));

      // Mostra la label successiva
      if (labels[i + 1]) {
        labels[i + 1].classList.add("visible");
      }

      if (i > 0) {
        const prev = points[i - 1];

        const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
        line.setAttribute("x1", prev.x);
        line.setAttribute("y1", prev.y);
        line.setAttribute("x2", posX);
        line.setAttribute("y2", posY);
        line.setAttribute("class", "heart-line");

        svg.appendChild(line);
      }

      const event = events[i % events.length];

      
      if (event.type === "image") {
        openImage(event.src);
      } 
      else if (event.type === "video-muted") {
        openVideoMuted(event.src);
      } 
      else {
        openVideo(event.src);
      }
      if (activatedCount === totalPoints) {
        setTimeout(() => {
          document.getElementById("heartMessage").classList.add("show");
        }, 7000);
      }
    };
    

  }
  if (labels.length > 0) {
    labels[0].classList.add("visible");
  }
}

generateHeartTimeline();


function revealSunflowerGift() {
  const block = document.getElementById("sunflowerReveal");
  if (!block) return;

  block.classList.remove("hidden");

  setTimeout(() => {
    block.classList.add("show");
  }, 1000);
}
