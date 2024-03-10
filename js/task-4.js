const loginFormEl = document.querySelector(".login-form");
loginFormEl.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  const emailInput = loginFormEl.elements.email;
  const passwordInput = loginFormEl.elements.password;

  if (!emailInput.value || !passwordInput.value) {
    alert("All form fields must be filled in");
    return;
  } else {
    const formUser = {
      email: emailInput.value.trim(),
      password: passwordInput.value.trim(),
    };

    console.log(formUser);
    loginFormEl.reset();
  }
}
