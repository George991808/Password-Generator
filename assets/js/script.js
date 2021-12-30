var generatebutton = document.querySelector(".generatebutton");
var password = document.querySelector(".password");

var characters="";
var size;

function generatePassword(event) {
  event.stopPropagation();
    askSize();
    askQuestion("Password contains upper case?","QWERTYUIOPASDFGHJKLZXCVBNM");
    askQuestion("Password contains lower case?","qwertyuiopasdfghjklzxcvbnm");
    askQuestion("Password contains special characters?","!@#$%^&*()_+?><,./{}`~");
    askQuestion("Password contains numbers?","1234567890");
    password.textContent=characters;
  }

  function askQuestion(choiceText,lettersToAdd) {
    confirm(choiceText);
    if (confirm(choiceText)==true) {
      characters=characters+lettersToAdd;
    }
    
  }
  function askSize() {
    let sizeAnswer = prompt("Enter size between 8 and 128" ,8);
    if (prompt(sizeAnswer)==true) {
      size=sizeAnswer
    }
    
  }


generatebutton.addEventListener("click", generatePassword);