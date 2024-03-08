function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
function createBoxes(amount) {
  const boxContainer = document.querySelector("#boxes");
  const baseSize = 30;
  const step = 10;
  if (amount < 1 || amount > 100) {
    console.error("Введіть число від 1 до 100");
    return;
  }

  boxContainer.innerHTML = " ";

  for (let i = 0; i < amount; i++) {
    const box = document.createElement("div");
    const size = baseSize + i * step;

    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    boxContainer.appendChild(box);
  }
}
function destroyBoxes() {
  const boxesContainer = document.querySelector("#boxes");
  boxesContainer.innerHTML = "";
}
const createButton = document.querySelector("[data-create]");
const destroyButton = document.querySelector("[data-destroy]");
const input = document.querySelector("input");
