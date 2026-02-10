
const box = document.getElementById("box");
const msg = document.getElementById("msg");
const choices = document.getElementById("choices");
const actionBtn = document.getElementById("actionBtn");
const banner = document.getElementById("banner");
const nameEl = document.getElementById("name");
const cake = document.getElementById("cake");
const dark = document.getElementById("dark");

const instrumental = document.getElementById("instrumental");
const birthdaySong = document.getElementById("birthdaySong");
const curtainSound = document.getElementById("curtainSound");

let started = false;
let stage = 0;
let noCount = 0;
let balloonInt = null;

/* ================= CURTAIN OPEN ================= */
openCurtain.onclick = () => {
  curtainSound.play();
  curtain.classList.add("open");
  startExperience();
  setTimeout(() => {
    curtain.style.display = "none";
  }, 2400);
};

/* ================= START EXPERIENCE ================= */
function startExperience() {
  if (started) return;
  started = true;

  /* floating hearts */
  for (let i = 0; i < 30; i++) {
    let h = document.createElement("div");
    h.className = "heart";
    h.style.left = Math.random() * 100 + "%";
    h.style.animationDuration = 12 + Math.random() * 12 + "s";
    background.appendChild(h);
  }

  box.classList.add("show");

  const lines = [
    "Its your special day Gollu! 💖",
    "I made something special for you 💕",
    "Because you are very special to me 😌"
  ];

  let i = 0;
  msg.innerText = lines[i];

  let auto = setInterval(() => {
    i++;
    if (i < lines.length) {
      msg.innerText = lines[i];
    } else {
      clearInterval(auto);     // 🔥 FIX
      showChoice();            // 🔥 YES / NO screen
    }
  }, 3000);
}

/* ================= YES / NO SCREEN ================= */
function showChoice() {
  msg.innerText = "Do you wanna see what I made? 👀";
  choices.innerHTML = `
    <button class="yesBtn" onclick="startFlow()">Yes!</button>
    <button class="noBtn" onclick="noFlow()">No</button>
  `;
}

/* ================= NO FLOW (2 TIMES ASK) ================= */
function noFlow() {
  noCount++;

  if (noCount === 1) {
    msg.innerText = "Are you sure you don't wanna see it? 🥺";
    choices.innerHTML = `
      <button class="yesBtn" onclick="startFlow()">Yes!</button>
      <button class="noBtn" onclick="noFlow()">No</button>
    `;
  } else {
    msg.innerText = "Final decision? 😢";
    choices.innerHTML = `
      <button class="yesBtn" onclick="location.href='tel:8160774977'">Yes</button>
      <button class="noBtn" onclick="startFlow()">No</button>
    `;
  }
}

/* ================= START MAIN FLOW ================= */
function startFlow() {
  box.style.display = "none";
  dark.style.display = "block";
  actionBtn.style.display = "block";
  stage = 1;
  actionBtn.innerText = "💡 Lights On";
}

/* ================= ACTION BUTTON FLOW ================= */
actionBtn.onclick = () => {
  if (stage === 1) {
    dark.style.display = "none";
    actionBtn.innerText = "🎵 Music On";
    stage = 2;
  }
  else if (stage === 2) {
    instrumental.play();
    actionBtn.innerText = "🎀 Decorate";
    stage = 3;
  }
  else if (stage === 3) {
    banner.style.display = "block";
    setTimeout(() => banner.classList.add("show"), 100);
    actionBtn.innerText = "🎈 Fly the Balloons";
    stage = 4;
  }
  else if (stage === 4) {
    nameEl.classList.add("show");
    balloonInt = setInterval(() => {
      let b = document.createElement("div");
      b.className = "balloon";
      b.style.left = Math.random() * 100 + "%";
      b.style.background = `hsl(${Math.random() * 360},80%,60%)`;
      document.body.appendChild(b);
      setTimeout(() => b.remove(), 10000);
    }, 700);

    actionBtn.innerText = "🎂 Let's cut the cake";
    stage = 5;
  }
  else if (stage === 5) {
    clearInterval(balloonInt);

    cake.style.display = "block";
    cake.style.bottom = "-300px";
    cake.style.animation = "none";
    cake.offsetHeight;                 // force reflow
    cake.style.animation = "cakeUp 2s forwards";

    actionBtn.style.display = "none";
  }
};

/* ================= CANDLE BLOW ================= */
blowBtn.onclick = () => {
  c1.classList.add("off");
  c7.classList.add("off");

  instrumental.pause();
  birthdaySong.play();

  blowBtn.remove();

  showLetterButton();
};
function showSecretButton() {
  const secretBtn = document.createElement("button");
  secretBtn.innerText = "🔐 Open Secret Message";
  secretBtn.id = "secretBtn";

  secretBtn.style.position = "fixed";
  secretBtn.style.top = "14px";
  secretBtn.style.left = "50%";
  secretBtn.style.transform = "translateX(-50%)";
  secretBtn.style.padding = "15px 34px";
  secretBtn.style.border = "none";
  secretBtn.style.borderRadius = "30px";
  secretBtn.style.background = "#6a0dad";
  secretBtn.style.color = "white";
  secretBtn.style.fontWeight = "bold";
  secretBtn.style.zIndex = "40";
  secretBtn.style.cursor = "pointer";

  document.body.appendChild(secretBtn);

  secretBtn.onclick = showSecretPopup;
}
function showLetterButton() {
  const letterBtn = document.createElement("button");
  letterBtn.innerText = "💌 Open Secret Letter";
  letterBtn.id = "letterBtn";

  letterBtn.style.position = "fixed";
  letterBtn.style.top = "14px";
  letterBtn.style.left = "50%";
  letterBtn.style.transform = "translateX(-50%)";
  letterBtn.style.padding = "15px 34px";
  letterBtn.style.border = "none";
  letterBtn.style.borderRadius = "30px";
  letterBtn.style.background = "#ff69b4";
  letterBtn.style.color = "white";
  letterBtn.style.fontWeight = "bold";
  letterBtn.style.zIndex = "40";
  letterBtn.style.cursor = "pointer";

  document.body.appendChild(letterBtn);

  letterBtn.onclick = showEnvelope;
}

function showEnvelope() {
  const overlay = document.createElement("div");
  overlay.id = "letterOverlay";

  overlay.innerHTML = `
    <div class="envelope" onclick="openLetter(this)">
      <div class="flap"></div>
      <div class="letter">
        <div id="letterContent">
          <p>
          Happy Birthday to my little sister, my bestie, and my whole world! 🎂💖<br><br>
          You are not just my sister, you are my best friend, my partner in crime, and the biggest blessing of my life.<br><br>
          Love you more than words can ever express. 💝
          </p>
        </div>

        <div id="ratingBox" style="display:none; margin-top:20px;">
          <p><b>How was the surprise? ⭐</b></p>
          <button onclick="handleRating(1)">1 ⭐</button>
          <button onclick="handleRating(2)">2 ⭐</button>
          <button onclick="handleRating(3)">3 ⭐</button>
          <button onclick="handleRating(4)">4 ⭐</button>
          <button onclick="handleRating(5)">5 ⭐</button>
        </div>
      </div>
    </div>
  `;

  document.body.appendChild(overlay);
}
function openLetter(env) {
  env.classList.add("open");

  setTimeout(() => {
    const rating = document.getElementById("ratingBox");
    if (rating) rating.style.display = "block";
  }, 1000);
}

function handleRating(value) {

  if (value <= 3) {
    // 📞 Call
    window.location.href = "tel:8160774977";
  } else {
    // 💬 WhatsApp
    const message = encodeURIComponent("I loved the surprise! 💖 It was amazing!");
    window.location.href = "https://wa.me/9168160774977?text=" + message;
  }
}
