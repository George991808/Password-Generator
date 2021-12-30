var generatebutton = document.querySelector(".generatebutton");
var password = document.querySelector(".password");

var characters="";
var size;
var IntermediatePassword ="";
// This is called from from the generate button event
//
function generatePassword(event) {
  event.stopPropagation();
  characters=""
    askSize();
    //The Ask question function adds characters to the final selection string, characters
    askQuestion("Password contains upper case?","QWERTYUIOPASDFGHJKLZXCVBNM");
    askQuestion("Password contains lower case?","qwertyuiopasdfghjklzxcvbnm");
    askQuestion("Password contains special characters?","!@#$%^&*()_+?><,./{}`~");
    askQuestion("Password contains numbers?","1234567890");
   // Has at least one option been set to OK? only generate a password if at least 1 has been selected
    if ( characters.length>1 ) {

      //Pick a random character from the string variables
      // repeat until desired password length achieved
      for (var i = 0; i < size; i++) {
        
        IntermediatePassword+=characters.charAt(Math.floor(Math.random()*characters.length))
        password.textContent=IntermediatePassword
      }
    }
    
    
  }

  function askQuestion(choiceText,lettersToAdd) {
   
    if (confirm(choiceText)==true) {
      characters=characters+lettersToAdd;
    }
    
  }
  function askSize() {
    let sizeAnswer = prompt("Enter size between 8 and 128" ,8);
    if (sizeAnswer !=null) {
      //force an answer between 8 and 128
      size=Math.min(Math.max(sizeAnswer,8),128)
    }
    
  }


generatebutton.addEventListener("click", generatePassword);