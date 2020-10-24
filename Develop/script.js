//DOM elements

var resultEl = document.getElementById("password");
var lengthEl = document.getElementById("length");
var uppercaseEl = document.getElementById("uppercase");
var lowercaseEl = document.getElementById("lowercase");
var numbersEl = document.getElementById("numbers");
var symbolsEl = document.getElementById("symbols");
var generateEl = document.getElementById("generate");


// Places all of the generator functions into an object
var randomFunc = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbol: getRandomSymbol
};

// Generate event listen

generateEl.addEventListener("click", function() {
    var length = parseInt.lengthEl.value;
    hasLower = lowercaseEl.checked;
    hasUpper = uppercaseEl.checked;
    hasNumber = numbersEl.checked;
    hasSymbol = symbolsEl.checked;

    resultEl.innerText = generatePassword(hasLower, hasUpper, hasNumber, hasSymbol, length);
});

// Functions which generate string

function getRandomLower() {
    var lowers = 'abcdefghijklmnopqrstuvwxyz';
    return lowers [Math.floor(Math.random() * lowers.length)];
}

console.log(getRandomLower());

function getRandomUpper() {
    var uppers = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    return uppers [Math.floor(Math.random() * uppers.length)];
}

console.log(getRandomUpper());

function getRandomNumber() {
    var numbers = '0123456789';
    return numbers [Math.floor(Math.random() * numbers.length)];
}

console.log(getRandomNumber());

function getRandomSymbol() {
    var symbol = "!#$%&()*+,-./:;<=>?@[\]^_`{|}~";
    return symbol [Math.floor(Math.random() * symbol.length)];
}

console.log(getRandomSymbol());
