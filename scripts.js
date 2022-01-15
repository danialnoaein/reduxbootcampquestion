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
  emailInput.style.borderColor = checkGmail(emailInput.value) ? "green" : "red";
});

passwordInput.addEventListener("keyup", () => {
  console.log(passwordInput.value);
});

//===================================
//=== Check functions with regex ====
//===================================
const checkGmail = (emailAddress) => {
  let pattern = /^[a-z0-9](\.?[a-z0-9]){5,}@gmail\.com$/;
  if (emailAddress.match(pattern)) {
    return true;
  } else {
    return false;
  }
};
