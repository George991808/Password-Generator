var generatebutton = document.querySelector(".generatebutton");
var password = document.querySelector(".password");

var characters="";
var size;
var IntermediatePassword ="";
function generatePassword(event) {
  event.stopPropagation();
  characters=""
    askSize();
    askQuestion("Password contains upper case?","QWERTYUIOPASDFGHJKLZXCVBNM");
    askQuestion("Password contains lower case?","qwertyuiopasdfghjklzxcvbnm");
    askQuestion("Password contains special characters?","!@#$%^&*()_+?><,./{}`~");
    askQuestion("Password contains numbers?","1234567890");
    if ( characters.length>1 ) {

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
      size=Math.min(Math.max(sizeAnswer,8),128)
    }
    
  }


generatebutton.addEventListener("click", generatePassword);