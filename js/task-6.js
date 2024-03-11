function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
function createBoxes(amount) {
  if (amount < 1 || amount > 100) {
    console.log("Введіть число від 1 до 100");
    return;
  }

  const baseSize = 30;
  const step = 10;

  for (let i = 0; i < amount; i++) {
    const box = document.createElement("div");
    box.style.width = `${baseSize + i * step}px`;
    box.style.height = `${baseSize + i * step}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxesContainer.appendChild(box);
  }
}
function destroyBoxes() {
  const boxesContainer = document.querySelector("#boxes");
  boxesContainer.innerHTML = "";
}
const createButton = document.querySelector("[data-create]");
const destroyButton = document.querySelector("[data-destroy]");

destroyButton.addEventListener("click", destroyBoxes);

const input = document.querySelector("input");

function clearInput() {
  input.value = "";
}

createButton.addEventListener("click", () => {
  const boxesContainer = document.querySelector("#boxes");
  boxesContainer.innerHTML = "";
  const amount = Number(input.value);
  if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
  } else {
    console.log("Введіть число від 1 до 100");
  }
  clearInput();
});
