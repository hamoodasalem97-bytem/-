const questionOne = document.getElementById("questionOne");
const questionTwo = document.getElementById("questionTwo");
const finalScreen = document.getElementById("finalScreen");

const yesOne = document.getElementById("yesOne");
const noOne = document.getElementById("noOne");
const hint = document.getElementById("hint");

const forever = document.getElementById("forever");
const endWorld = document.getElementById("endWorld");

function showScreen(screen) {
  [questionOne, questionTwo, finalScreen].forEach(s => s.classList.remove("active"));
  screen.classList.add("active");
}

yesOne.addEventListener("click", () => {
  showScreen(questionTwo);
});

function moveNoButton() {
  const buttonsArea = noOne.parentElement;
  const areaRect = buttonsArea.getBoundingClientRect();
  const buttonRect = noOne.getBoundingClientRect();

  if (!noOne.classList.contains("moving")) {
    noOne.classList.add("moving");
  }

  const padding = 8;
  const maxX = Math.max(padding, areaRect.width - buttonRect.width - padding);
  const maxY = Math.max(padding, areaRect.height - buttonRect.height - padding);

  const x = Math.random() * maxX;
  const y = Math.random() * maxY;

  noOne.style.left = `${x}px`;
  noOne.style.top = `${y}px`;

  const messages = [
    "لااا، هاي مش مقبولة 😂❤️",
    "جربي مرة ثانية 😏",
    "مش رح أخليكي تختاري لا 🙈",
    "كبسي آه وخلاص 😂💕"
  ];
  hint.textContent = messages[Math.floor(Math.random() * messages.length)];
}

noOne.addEventListener("mouseenter", moveNoButton);
noOne.addEventListener("click", (event) => {
  event.preventDefault();
  moveNoButton();
});
noOne.addEventListener("touchstart", (event) => {
  event.preventDefault();
  moveNoButton();
}, { passive: false });

function finish() {
  showScreen(finalScreen);
}

forever.addEventListener("click", finish);
endWorld.addEventListener("click", finish);
