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

//=============================
//=== Error Hint Generator ====
//=============================
const EMAIL_ERROR = "EMAIL_ERROR";
const PASSWORD_ERROR = "PASSWORD_ERROR";

const errorBuilder = (type, message) => {
  let errorBlock = document.createElement("div");
  errorBlock.innerHTML = message;
  errorBlock.classList.add(`error_block`);

  switch (type) {
    case EMAIL_ERROR:
      emailInput.after(errorBlock);
      break;
    case PASSWORD_ERROR:
      passwordInput.after(errorBlock);
      break;
    default:
      break;
  }
};

const showErrors = (signinInfo) => {
  !checkGmail(signinInfo.gmail) && errorBuilder(EMAIL_ERROR, "checkGmail");

  !checkLength(signinInfo.password) &&
    errorBuilder(PASSWORD_ERROR, "checkLength");

  !checkHasDigit(signinInfo.password) &&
    errorBuilder(PASSWORD_ERROR, "checkHasDigit");

  !checkHasUpperCaseLetter(signinInfo.password) &&
    errorBuilder(PASSWORD_ERROR, "checkHasUpperCaseLetter");

  !checkHasLowerCaseLetter(signinInfo.password) &&
    errorBuilder(PASSWORD_ERROR, "checkHasLowerCaseLetter");

  !checkHasSpecialLetter(signinInfo.password) &&
    errorBuilder(PASSWORD_ERROR, "checkHasSpecialLetter");
};

const clearErrorHints = () => {
  [...document.getElementsByClassName("error_block")].map(
    (n) => n && n.remove()
  );
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
  clearErrorHints();
});

passwordInput.addEventListener("keyup", () => {
  passwordInput.style.borderColor = validatePassword(passwordInput.value)
    ? "green"
    : "red";
  clearErrorHints();
});

//===========================
//=== Handle Submit Form ====
//===========================
form.addEventListener("submit", (event) => {
  event.preventDefault();

  clearErrorHints();

  let signinInfo = {
    gmail: emailInput.value,
    password: passwordInput.value,
  };

  if (
    validateGmail(signinInfo.gmail) &&
    validatePassword(signinInfo.password)
  ) {
    console.log(signinInfo); //Final Step => Values are valid
  } else {
    showErrors(signinInfo);
  }
});
