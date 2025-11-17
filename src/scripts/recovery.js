const usernameInput = document.querySelector("#username-input");
const passwordInput = document.querySelector("#password-input");
const passwordConfirm = document.querySelector("#password-confirm");
const checkboxInput = document.querySelector("#checkbox-input");
const buttonInput = document.querySelector("#recovery-button");

checkboxInput.addEventListener("change", () => {
  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    passwordConfirm.type = "text";
    return;
  }

  passwordInput.type = "password";
  passwordConfirm.type = "password";

});

buttonInput.addEventListener("click", (event) => {
  event.preventDefault();

  const usernameRecovery = usernameInput.value;
  const passwordRecovery = passwordInput.value;
  const passwordRecoveryConfirm = passwordConfirm.value;
  
  const usernameSaved = sessionStorage.getItem("username");

  if (
    usernameRecovery === "" ||
    passwordRecovery === "" ||
    passwordRecoveryConfirm === ""
  ) {
    alert("All fields need to be filled");
    return;
  }

  if (usernameRecovery !== usernameSaved) {
    alert("Invalid username");
    return;
  }

  sessionStorage.setItem("password", passwordRecovery);

  window.location.href = "login.html";
});
