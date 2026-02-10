
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

  // ❌ Remove Blow Button
  blowBtn.remove();

  // 🎂 Show Cut Cake Button
  const cutBtn = document.createElement("button");
  cutBtn.innerText = "🎂 Cut the Cake";
  cutBtn.id = "cutCakeBtn";
  cutBtn.style.position = "absolute";
  cutBtn.style.top = "-120px";
  cutBtn.style.left = "50%";
  cutBtn.style.transform = "translateX(-50%)";
  cutBtn.style.padding = "10px 22px";
  cutBtn.style.borderRadius = "20px";
  cutBtn.style.border = "none";
  cutBtn.style.background = "#ff1493";
  cutBtn.style.color = "white";
  cutBtn.style.cursor = "pointer";

  cake.appendChild(cutBtn);

  cutBtn.onclick = cutCake;
};
function cutCake() {
  const cutBtn = document.getElementById("cutCakeBtn");
  if (cutBtn) cutBtn.remove();

  cake.classList.add("cutCakeVisual");

  launchConfetti();
  launchFireworks();

  setTimeout(() => {
    showSecretButton();
  }, 2000);
}
function launchConfetti() {
  for (let i = 0; i < 80; i++) {
    let conf = document.createElement("div");
    conf.className = "confetti";
    conf.style.left = Math.random() * 100 + "%";
    conf.style.background = `hsl(${Math.random()*360},100%,50%)`;
    conf.style.animationDuration = (2 + Math.random()*2) + "s";
    document.body.appendChild(conf);

    setTimeout(() => conf.remove(), 4000);
  }
}
function launchFireworks() {
  for (let i = 0; i < 6; i++) {
    setTimeout(() => {
      let fire = document.createElement("div");
      fire.className = "firework";
      fire.style.left = Math.random() * 100 + "%";
      fire.style.top = Math.random() * 50 + "%";
      document.body.appendChild(fire);

      setTimeout(() => fire.remove(), 1000);
    }, i * 400);
  }
}
}
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
function showSecretPopup() {
  const overlay = document.createElement("div");
  overlay.id = "secretOverlay";

  overlay.innerHTML = `
    <div class="secretBox">
      <h2>💌 Secret Message</h2>
      <p>
      Happy Birthday to my little sister, my bestie, and my whole world! 🎂💖<br><br>
      You are not just my sister, you are my best friend, my partner in crime, and the biggest blessing of my life. Life feels more beautiful and meaningful because of you.<br><br>
      Thank you for filling my days with laughter, love, and endless memories. I am so lucky to have a sister like you. No matter what happens, I will always stand by your side and protect you.<br><br>
      If I get to choose in every lifetime, I would always choose to be your brother again and again. 🥹❤️<br><br>
      May God bless you with happiness, success, good health, and all the love in the world. May all your dreams come true.<br><br>
      Love you more than words can ever express.<br><br>
      Happy Birthday once again, my forever bestie! 🎉💝
      </p>
      <button onclick="document.getElementById('secretOverlay').remove()">Close</button>
    </div>
  `;

  document.body.appendChild(overlay);
}
