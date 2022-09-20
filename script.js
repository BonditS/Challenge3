
const showResult = document.getElementById('password');
var generateBtn = document.getElementById('generate');

function degitChoice(){
    var numberChoice = window.prompt ('length of number, enter 8-125');

    if (numberChoice < 8 || numberChoice > 127) {

        window.alert('The length is invalid.');
        degitChoice();
    }
    return numberChoice;
}
    
function lowerCase (){
    var lowerChoice = window.confirm('Lowercase?:');
    return lowerChoice;
}

function upperCase (){
    var upperChoice = window.confirm('Uppercase?:');
    return upperChoice;
}

function inputNumber (){
    var userNumber = window.confirm('Any number?:');
    return userNumber;
}
function specialSymbol () {
    var characterChoice = window.confirm('Anyspecial symbols?:');
    return characterChoice;
}


function generatePassword(){
    var passwordLength = degitChoice();
    var userLowerCase = lowerCase();
    var userUpperCase = upperCase();
    var choiceNumber = inputNumber();
    var userSymbol = specialSymbol();
    

    var passwordChar = '';


        if (userLowerCase === true) {
            passwordChar += 'abcdefghijklmnopqrstuvwxyz';
        }

        if (userUpperCase === true) {
            passwordChar += 'ABCDEGHIJKLMNOPQRSTUVWXYZ';
        }

        if (choiceNumber === true){
            passwordChar += '0123456789';
        }

        if (userSymbol === true) {
            passwordChar += '@#$%*-';
        }
        
        var finalPassword = '';

    for (var i = 0; i < passwordLength; i++){
        var randomChar = passwordChar[Math.floor(Math.random()* passwordChar.length)];
        finalPassword += randomChar;
    }

    return finalPassword;
}


generateBtn.addEventListener("click", writePassword);

function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    
    passwordText.value = password;
  
  }

  