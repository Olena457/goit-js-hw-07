function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const body = document.querySelector("body");
const colorValue = document.querySelector("span.color");
const changeColorButton = document.querySelector(".change-color");

changeColorButton.addEventListener("click", (e) => {
  let color = getRandomHexColor();
  body.style.backgroundColor = color;
  colorValue.textContent = color;
});
