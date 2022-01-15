///////////////////////
// Get Form Elements //
///////////////////////
const form = document.querySelector("form");
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");

////////////////////////
// Handle Submit Form //
////////////////////////
form.addEventListener("submit", (event) => {
  event.preventDefault();
});
