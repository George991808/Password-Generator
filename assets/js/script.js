var button = document.querySelector(".button");
var password = document.querySelector(".password");

function generatePassword(event) {
    // event.stopPropagation();
    password.textContent="hello";
    
  }


button.addEventListener("click", generatePassword);