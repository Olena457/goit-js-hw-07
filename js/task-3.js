const inputEl = document.getElementById("name-input");
const outputEl = document.getElementById("name-output");

inputEl.addEventListener("input", updateName);

function updateName() {
  const name = inputEl.value.trim();
  outputEl.textContent = name || "Anonymous";
}
