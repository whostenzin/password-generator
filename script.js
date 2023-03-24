// Assignment code here
var passwordCriteria = {
  length: 0,
  includeLowercase: false,
  includeUppercase: false,
  includeNumeric: false,
  includeSpecial: false,
};

function promptForCriteria() {
  passwordCriteria.length = parseInt(prompt("Enter a password length between 8 and 128 characters"));

  if (isNaN(passwordCriteria.length) || passwordCriteria.length < 8 || passwordCriteria.length > 128) {
    alert("Please enter a valid password length between 8 and 128 characters.");
    return false;
  }

  passwordCriteria.includeLowercase = confirm("Include lowercase characters?");

  passwordCriteria.includeUppercase = confirm("Include uppercase characters?");

  passwordCriteria.includeNumeric = confirm("Include numeric characters?");

  passwordCriteria.includeSpecial = confirm("Include special characters?");

  return true;
}

function generatePassword() {
  var validCriteria = promptForCriteria();
  if (!validCriteria) {
    return "";
  }
  var charset = "";
  var password = "";

  if (passwordCriteria.includeLowercase) {
    charset += "abcdefghijklmnopqrstuvwxyz";
  }

  if (passwordCriteria.includeUppercase) {
    charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }

  if (passwordCriteria.includeNumeric) {
    charset += "0123456789";
  }

  if (passwordCriteria.includeSpecial) {
    charset += "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
  }

  for (var i = 0; i < passwordCriteria.length; i++) {
    password += charset.charAt(Math.floor(Math.random() * charset.length));
  }

  return password;
}
  
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
