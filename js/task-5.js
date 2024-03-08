function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const changeColorBtn = document.querySelector(".change-color");
const body = document.querySelector("body");
body.setAttribute("style", getRandomHexColor);
const colorSpanEl = document.querySelector(".color");

changeColorBtn.addEventListener("clic", () => {
  const randomColor = getRandomHexColor();
  body.style.backgroundColor = randomColor;
  colorSpanEl.textContent = randomColor;
});
