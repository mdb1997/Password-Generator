// Create variables for the password's end result.
var charLength = 8;
var passResult = [];

// Create variables for character criteria.
var lowerCase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var upperCase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var numberChar = ['1','2','3','4','5','6','7','8','9','0'];
var specialChar = ['!','"','#','$','%','&','(',')','*','+',',','-','.','/',':',';','<','=','>','?','@','[',']','^','_','{','}','|','~'];



// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



// Write password to the #password input.
function writePassword() {

// Call getPrompts function in a new variable to show true or false.
  var rightPrompt = getPrompts();
  
  if(rightPrompt) {
      var password = generatePassword();
      var passwordText = document.querySelector("#password");
    
      passwordText.value = password;

  }

}

// Create a function for generatePassword.
function generatePassword() {
    var password = "";
    
    // Create a for loop.
    for(var i = 0; i < charLength; i++) {
        
        // Use the math method to choose a random number for the password length.
        var randomNumber = Math.floor(Math.random() * passResult.length);
        password = password + passResult[randomNumber];
    }
    return password;
}

// Create a function specifically for the prompts.
function getPrompts() {
    passResult = [];
    
    // Write a prompt for the amount of characters.
    // parseInt converts strings into numbers.
    charLength = parseInt(prompt("Password length: Choose between 8 and 128 characters"));
    
    // Write an if statement to insure for correct length. "NaN" = Not a Number.
    if(isNaN(charLength) || charLength < 8 || charLength > 128) {
        alert("Password does not meet criteria. Must be between 8 and 128 characters.");
        return false;
    }
    
    // Create confirms inside of an if statement for password chracters the user would like in their password.
    // Use "concat" to combine the chosen characters into the passResult.
    if (confirm("Do you want your password to have lowercase letters?")) {
        passResult = passResult.concat(lowerCase);
    }
    if (confirm("Do you want your password to have uppercase letters?")) {
        passResult = passResult.concat(upperCase);
    }
    if (confirm("Do you want your password to have numbers?")) {
        passResult = passResult.concat(numberChar);
    }
    if (confirm("Do you want your password to have special characters?")) {
        passResult = passResult.concat(specialChar);
    }
    return true;
}