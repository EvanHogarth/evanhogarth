

document.addEventListener("DOMContentLoaded", load);

function load() {
  document.getElementById("contact").addEventListener("submit", validate);
}

function validate(e) {
  hideAllErrors();

  e.preventDefault();
  console.log("test");
}

hideAllErrors() {
  
}
