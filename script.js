//GetElementById

var passwordText = document.getElementById("password");
var generateEl = document.getElementById("generate");

// Let the prompts begin

generateEl.addEventListener('click', userVariables);

function userVariables() {
  var passwordText = document.getElementById("password");
         var userLength = prompt("PLEASE ENTER PASSWORD LENGTH. \nONLY CHARACTERS BETWEEN 8 - 128 ACCEPTED.");
         if (userLength >= 8 && userLength <= 128) {
          alert("Well Done!!! \nYour Password length is " + userLength + ".\nLets us continue...");
     
         } else { 
         alert("No!!! Please read the instructions carefully!\n\nThis is hurting my frail skull!\n\nYour password length choice was " + userLength + " digits.\n\nTry again by pressing the OK button");
         return;
         }

         var lowMode = confirm("Would you like Lower Case Mode enabled?");
         if (lowMode) {
          alert("You have enabled LCM: Lower Case Mode!");
  
         } else {
          alert("LCM: Lower Case Mode Disabled");
        }

         var upMode = confirm("Would you like Upper Case Mode enabled?");
         if (upMode) {
          alert("You have enabled UCM: Upper Case Mode!");
  
        } else {
          alert("UCM: Upper Case Mode Disabled");
        }
  
         var numMode = confirm("Would you like Numeric Mode enabled?");
         if (numMode) {
          alert("You have enabled NM: Numeric Mode!");
  
        } else {
          alert("NM: Numeric Mode Disabled");
        }
    
         var symMode = confirm("Would you like Symbol Mode enabled?");
         if (symMode) {
          alert("You have enabled SM: Symbol Mode!");
  
        } else {
          alert("SM: Symbol Mode Disabled");
        }

        if (upMode === false && lowMode === false && numMode=== false && symMode === false){
        alert("YOU HAVE NOT SELECTED ANY MODES. SHAME!"); 
        passwordText.value="Incorrect Input";
        
        } else {
        alert("Lets Me Skull Toss You a Password... hahaha!!");

        passwordText.value = "";
        passwordText.value = generatePassword(userLength,lowMode, upMode, numMode, symMode);  
        }
    };

    // Password Generator begins
        
        function generatePassword(userLength,lowMode, upMode, numMode, symMode) {
          console.log(generatePassword);
        var passwordText = "Your Password is \n";
        var varTypes = "lowMode, upMode, numMode, symMode";
        var currentPasswordLength = 0;

        for (i = 0; i < varTypes.length; i++) {
          if ((lowMode === true) && (currentPasswordLength < userLength)) {
            passwordText = passwordText + String.fromCharCode(randomNumberGenerator(98,122));
            currentPasswordLength++;
          }
          if ((upMode === true) && (currentPasswordLength < userLength)) {
            passwordText = passwordText + String.fromCharCode(randomNumberGenerator(65,90));
            currentPasswordLength++;
          }
          if ((symMode === true) && (currentPasswordLength < userLength)) {
            passwordText = passwordText + String.fromCharCode(randomNumberGenerator(33,47));
            currentPasswordLength++;
          }
          if ((numMode === true) && (currentPasswordLength < userLength)) {
            passwordText = passwordText + randomNumberGenerator(0,9);
            currentPasswordLength++;
        }
          };

        //returns value
        return passwordText;
      }

      //random function passing charcode assigned charactors
      function randomNumberGenerator(lowerBound, upperBound) {
      //returns the random number
      return Math.floor(Math.random()*(upperBound-lowerBound+1)+lowerBound);



      // functions

      function getlower() {
        var lowerEl = "abcdefghijklmnopqrstuvwxyz";
        return lowerEl[Math.floor(Math.random() * lowerEl.length)];
      }

      function getUpper() {
        var upperEl = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        return upperEl[Math.floor(Math.random() * upperEl.length)];
      }

      function getNumber() {
        var numericEl = "0123456789";
        return numeric[Math.floor(Math.random() * numericEl.length)];
      }

      function getSymbol() {
        var symbolEl = "~!@#$%^&*()_+=<>|/.,?";
        return symbolEl[Math.floor(Math.random() * symbolEl.length)];
      }




};
