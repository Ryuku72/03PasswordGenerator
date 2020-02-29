//GetElementById

var passwordText = document.getElementById("password");
var generateEl = document.getElementById("generate");

var randomFunc = {
  lower: randomLower,
  upper: randomUpper,
  number: randomNum,
  symbol: randomSym
}

//Array

var lowerCaseEl = "abcdefghijklmnopqrstuvwxyz";
var upperCaseEl = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numericEl = "0123456789";
var symbolEl = "!@#$%^&*.,?/()";

// Generate functions

function randomLower() {
  return String.lowerCaseEl[Math.floor(Math.random() * lowerCaseEl.length)]};

function randomUpper() { 
  return String.upperCaseEl[Math.floor(Math.random() * upperCaseEl.length)]};

function randomNum() { 
  return String.numericEl[Math.floor(Math.random() * numericEl.length)]};

function randomSym() {
  return String.symbolEl[Math.floor(Math.random() * symbolEl.length)]};


// Let the prompts begin

generateEl.addEventListener('click', writePassword);

function writePassword() {
  var passwordText = document.getElementById("passwordGen");
         var passwordLength = prompt("PLEASE ENTER PASSWORD LENGTH. \nONLY CHARACTERS BETWEEN 8 - 128 ACCEPTED.");
         if (passwordLength >= 8 && passwordLength <= 128) {
          alert("Well Done!!! \nYour Password length is " + passwordLength + ".\nLets us continue...");
     
         } else {
          
         alert("No!!! Please read the instructions carefully!\n\nThis is hurting my frail skull!\n\nYour password length choice was " + p + " digits.\n\nTry again by pressing the OK button");
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
        
        }else {
        alert("lets make a password");
        passwordText.value = "0";
        passwordText.value = generatePassword(passwordLength,lowMode, upMode, numMode, symMode);  
        }
        };
      
      function generatePassword(passwordLength, passwordLength,lowMode, upMode, numMode, symMode) {
        var passwordText = "";
        var currentPasswordLength = 0;
        //Keeps going until condition becomes true. CharCode assigns number values to characters on keyboard keys.
        while (currentPasswordLength < passwordLength) {
          if ((lowMode === true) && (currentPasswordLength < passwordLength)) {
            passwordText = passwordText + String.lowerCaseEl[Math.floor(Math.random() * lowerCaseEl.length)];
            currentPasswordLength++;
          }
          if ((upMode === true) && (currentPasswordLength < passwordLength)) {
            passwordText = passwordText + String.upperCaseEl[Math.floor(Math.random() * upperCaseEl.length)];
            currentPasswordLength++;
          }
          if ((numMode === true) && (currentPasswordLength < passwordLength)) {
            passwordText = passwordText + String.numericEl[Math.floor(Math.random() * numericEl.length)];
            currentPasswordLength++;
          }
          if ((symMode === true) && (currentPasswordLength < passwordLength)) {
            passwordText = passwordText + String.symbolEl[Math.floor(Math.random() * symbolEl.length)]};
            currentPasswordLength++;
          }

        //returns value
        return passwordText;
      }
      //random function passing charcode assigned charactors
      function randomNumberGenerator(lowerBound, upperBound) {
        //returns the random number
        return Math.floor(Math.random()*(upperBound-lowerBound+1)+lowerBound);
      }
    
