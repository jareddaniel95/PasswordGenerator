// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  /*** Select password length ***/
  var pLength = prompt("Choose password length (8-128).");
  while (pLength < 8 || pLength > 128)
  {
    pLength = prompt("Invalid selection. Choose password length (8-128).");
  }

  /*** Select character groups ***/
  var characterSelection = "";
  while (characterSelection == "") {
    if (confirm("Select OK to include uppercase characters in password."))
    {
      characterSelection += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }
    if (confirm("Select OK to include lowercase characters in password."))
    {
      characterSelection += "abcdefghijklmnopqrstuvwxyz";
    }
    if (confirm("Select OK to include numbers in password."))
    {
      characterSelection += "1234567890";
    }
    if (confirm("Select OK to include special characters in password."))
    {
      characterSelection += "!@#$%^&*()_+=-`~<>,./?;:|\\'\"";
    }
    if (characterSelection == "") {
      alert("You must include at least one character group.")
    }
  }

  /*** Generate password ***/
  var password = "";
  for (i = 0; i < pLength; i++) {
    password += characterSelection.charAt(Math.floor(Math.random() * characterSelection.length))
  }
  return password;
}