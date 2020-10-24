// Places all of the generator functions into an object
var randomFunc = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbol: getRandomSymbol
};

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
