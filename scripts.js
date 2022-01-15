//==========================
//=== Get Form Elements ====
//==========================
const form = document.querySelector("form");
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");

//===========================
//=== Handle Submit Form ====
//===========================
form.addEventListener("submit", (event) => {
  event.preventDefault();
});

//=========================================
//=== Handle Form Elements KEYUP Event ====
//=========================================
emailInput.addEventListener("keyup", () => {
  console.log(emailInput.value);
});

passwordInput.addEventListener("keyup", () => {
  console.log(passwordInput.value);
});
