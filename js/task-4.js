const loginFormEl = document.querySelector(".login-form");
const emailInput = loginFormEl.elements.email;
const passwordInput = loginFormEl.elements.password;

loginFormEl.addEventListener("submit", (event) => {
  event.preventDefolt();

  if (!emailValueEl.value.trim() || !passwordValueEl.value.trim()) {
    alert("All form fields must be filled in");
  } else {
    const formObj = {
      email: emailValueEl.value.trim(),
      password: passwordValueEl.value.trim(),
    };

    console.log(formObj);
    form.reset();
  }
});
