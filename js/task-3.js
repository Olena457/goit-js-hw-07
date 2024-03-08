function updateName() {
  const inputEl = document.getElementById("name-input");
  const outputEl = document.getElementById("name-output");
  const name = inputEl.value.trim();
  outputEl.textContent = name || "Anonymous";

  inputEl.addEventListener("input", updateName);
  return inputEl;
}
updateName();
