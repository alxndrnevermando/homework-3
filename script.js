document.querySelector("#generate").addEventListener("click", generatePassword);

var numbers = ("0123456789"). split("");
var symbols = ("!@#$%^&*()_+"). split("");
var lowers =  ("abcdefghijklmnopqrstuvwxyz"). split("");
var uppers = ("ABCDEFGHIJKLMNOPQRSTUVWXYZ"). split("");

// Tiffany Casey at https://github.com/TiffanyCasey/Password-Generator.git provided guidance on this assignment
var confirmLength = "";
var confirmSymbols;
var confirmNumbers;
var confirmUpper;
var confirmLower;

function generatePassword() {
    var confirmLength = (prompt("Please choose a password length between 8 and 128."));
  
  
    while(confirmLength <= 7 || confirmLength >= 129) {
        alert("Password length must be between 8-128 characters. Try again.");
        var confirmLength = (prompt("How many characters would you like your password to contain?"));
        } 
  
      var confirmSymbols = confirm("Include symbols?");
      var confirmNumbers = confirm("Include numbers?");    
      var confirmLower = confirm("Include lower case letters?");
      var confirmUpper = confirm("Include upper case letters?");
  
        while(confirmUpper === false && confirmLower === false && confirmSymbols === false && confirmNumbers === false) {
          alert("You must choose at least one parameter");
          var confirmSymbols = confirm("Include symbols?");
          var confirmNumbers = confirm("Include numbers?");    
          var confirmLower = confirm("Include lower case letters?");
          var confirmUpper = confirm("Include upper case letters?");   
      } 
  
        var passwordCharacters = [];
        
      if (confirmSymbols) {
        passwordCharacters = passwordCharacters.concat(symbols);
      }
  
      if (confirmNumbers) {
        passwordCharacters = passwordCharacters.concat(numbers);
      }
        
      if (confirmLower) {
        passwordCharacters = passwordCharacters.concat(lowers);
      }
  
      if (confirmUpper) {
        passwordCharacters = passwordCharacters.concat(uppers);
      }
  
        var randomPassword = "";
        
        for (var i = 0; i < confirmLength; i++) {
          randomPassword = randomPassword + passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)];
        }
        document.getElementById("password").value = randomPassword;
  }