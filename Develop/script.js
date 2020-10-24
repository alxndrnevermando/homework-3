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

// Generate password function

function generatePassword(hasLower, hasUpper, hasNumber, hasSymbol, length) {
    //Init pw var
    //Filter out unchecked types
    //Loop over length call generator function for each type
    //Add final pw to the pw var and return

    let generatedPassword = "";

    var typesCount = hasLower + hasUpper + hasNumber + hasSymbol;

    var typesArr = [{hasLower}, {hasUpper}, {hasNumber}, {hasSymbol}].filter
    (
        item => Object.values(item)[0]
    );

    if(typesCount === 0) {
        return '';
    }
}

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
