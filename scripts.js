//==========================
//=== Get Form Elements ====
//==========================
const form = document.querySelector("form");
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");

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

const checkLength = (password) => {
  let pattern = /^.{6,}$/;
  if (password.match(pattern)) {
    return true;
  } else {
    return false;
  }
};

const checkHasDigit = (password) => {
  let pattern = /^.*[0-9]/;
  if (password.match(pattern)) {
    return true;
  } else {
    return false;
  }
};

const checkHasUpperCaseLetter = (password) => {
  let pattern = /^.*[A-Z]/;
  if (password.match(pattern)) {
    return true;
  } else {
    return false;
  }
};

const checkHasLowerCaseLetter = (password) => {
  let pattern = /^.*[a-z]/;
  if (password.match(pattern)) {
    return true;
  } else {
    return false;
  }
};

const checkHasSpecialLetter = (password) => {
  let pattern = /^.*[!@#$%]/;
  if (password.match(pattern)) {
    return true;
  } else {
    return false;
  }
};

//===================
//=== Validators ====
//===================
const validateGmail = (emailAddress) => {
  return checkGmail(emailAddress);
};

const validatePassword = (password) => {
  return (
    checkLength(password) &&
    checkHasDigit(password) &&
    checkHasUpperCaseLetter(password) &&
    checkHasLowerCaseLetter(password) &&
    checkHasSpecialLetter(password)
  );
};

//=========================================
//=== Handle Form Elements KEYUP Event ====
//=========================================
emailInput.addEventListener("keyup", () => {
  emailInput.style.borderColor = validateGmail(emailInput.value)
    ? "green"
    : "red";
});

passwordInput.addEventListener("keyup", () => {
  passwordInput.style.borderColor = validatePassword(passwordInput.value)
    ? "green"
    : "red";
});

//===========================
//=== Handle Submit Form ====
//===========================
form.addEventListener("submit", (event) => {
  event.preventDefault();
});
