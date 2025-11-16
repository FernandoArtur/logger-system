const usernameInput = document.querySelector("#username-input");
const passwordInput = document.querySelector("#password-input");
const checkboxInput = document.querySelector("#checkbox-input");
const buttonInput = document.querySelector("#login-button");

checkboxInput.addEventListener("change", () => {
  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    return;
  }

  passwordInput.type = "password";
});

buttonInput.addEventListener("click", (event) => {
  event.preventDefault();

  const usernameLogin = usernameInput.value;
  const passwordLogin = passwordInput.value;

  const usernameSaved = sessionStorage.getItem('username');
  const passwordSaved = sessionStorage.getItem('password');

  if ( usernameLogin === "" || passwordLogin === "") {
    alert("All fields need to be filled");
    return;
  }

  if (usernameLogin !== usernameSaved || passwordLogin !== passwordSaved) {
    alert("Username or Password incorrect");
    return;
  }

  window.location.href = "../pages/signedin.html";
  
});
