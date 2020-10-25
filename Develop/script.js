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
