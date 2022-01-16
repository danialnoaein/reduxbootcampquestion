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
const GMAIL_TYPE_ERROR = 0;
const PASSWORD_TYPE_ERROR = 1;

const errorBuilder = (type, message) => {
  let errorBlock = document.createElement("div");
  errorBlock.innerHTML = message;
  errorBlock.classList.add(`error_block`);

  switch (type) {
    case GMAIL_TYPE_ERROR:
      emailInput.after(errorBlock);
      break;
    case PASSWORD_TYPE_ERROR:
      passwordInput.after(errorBlock);
      break;
    default:
      break;
  }
};

const CHECK_GMAIL_ERROR_MESSAGE = "Enter GMail correctly";
const CHECK_PASSWORD_LENGTH_ERROR_MESSAGE =
  "Password's length must grater than 6 character";
const CHECK_PASSWORD_HAS_DIGITS_ERROR_MESSAGE = "Password must have digit";
const CHECK_PASSWORD_HAS_UPPERCASE_LETTER_ERROR_MESSAGE =
  "Password must have upper case letter";
const CHECK_PASSWORD_HAS_LOWERCASE_LETTER_ERROR_MESSAGE =
  "Password must have lower case letter";
const CHECK_PASSWORD_HAS_SPECIAL_LETTER_ERROR_MESSAGE =
  "Password must have special letter (!@#$%)";

const showErrors = (signupInfo) => {
  !checkGmail(signupInfo.gmail) &&
    errorBuilder(GMAIL_TYPE_ERROR, CHECK_GMAIL_ERROR_MESSAGE);

  !checkLength(signupInfo.password) &&
    errorBuilder(PASSWORD_TYPE_ERROR, CHECK_PASSWORD_LENGTH_ERROR_MESSAGE);

  !checkHasDigit(signupInfo.password) &&
    errorBuilder(PASSWORD_TYPE_ERROR, CHECK_PASSWORD_HAS_DIGITS_ERROR_MESSAGE);

  !checkHasUpperCaseLetter(signupInfo.password) &&
    errorBuilder(
      PASSWORD_TYPE_ERROR,
      CHECK_PASSWORD_HAS_UPPERCASE_LETTER_ERROR_MESSAGE
    );

  !checkHasLowerCaseLetter(signupInfo.password) &&
    errorBuilder(
      PASSWORD_TYPE_ERROR,
      CHECK_PASSWORD_HAS_LOWERCASE_LETTER_ERROR_MESSAGE
    );

  !checkHasSpecialLetter(signupInfo.password) &&
    errorBuilder(
      PASSWORD_TYPE_ERROR,
      CHECK_PASSWORD_HAS_SPECIAL_LETTER_ERROR_MESSAGE
    );
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
    checkHasSpecialLetter(password) &&
    checkHasLowerCaseLetter(password) &&
    checkHasUpperCaseLetter(password) &&
    checkHasDigit(password) &&
    checkLength(password)
  );
};

//=========================================
//=== Handle Form Elements KEYUP Event ====
//=========================================

const RED_COLOR = "#d32f2f";
const GREEN_COLOR = "#388e3c";

emailInput.addEventListener("keyup", () => {
  emailInput.style.borderColor = validateGmail(emailInput.value)
    ? GREEN_COLOR
    : RED_COLOR;
  clearErrorHints();
});

passwordInput.addEventListener("keyup", () => {
  passwordInput.style.borderColor = validatePassword(passwordInput.value)
    ? GREEN_COLOR
    : RED_COLOR;
  clearErrorHints();
});

//===========================
//=== Handle Submit Form ====
//===========================
form.addEventListener("submit", (event) => {
  event.preventDefault();

  clearErrorHints();

  let signupInfo = {
    gmail: emailInput.value,
    password: passwordInput.value,
  };

  if (
    validateGmail(signupInfo.gmail) &&
    validatePassword(signupInfo.password)
  ) {
    console.log(signupInfo); //Final Step => Values are valid
  } else {
    showErrors(signupInfo);
  }
});
