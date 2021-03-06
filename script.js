// Start your code ***HERE*** =========

var password=document.getElementById("password");

// create an array with all possible character types: Uppercase, Lowercase, numbers, and symbols stored in a variable

const chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";

// create a global variable called "pwLength" with a number between 10 and 18

const pwLength = (min, max) => Array.from({ length: max - min + 1 }, (_, i) => min + i);
    pwlength (10,18);

// Using the above array and password length variable, create a random password using a for loop inside of a function called "addNewPassword" either saved as an arrow function variable or a traditional function

 
function addNewPassword () {
for (var i = 0; i <= passwordLength; i++) {
   var randomNumber = Math.floor(Math.random() * chars.length);
   password += chars.substring(randomNumber, randomNumber +1);
  }



// ========= ⬇ DO NOT TOUCH THIS CODE ⬇ ======

let genBtn = document.getElementById("btnGen");
let buttonHandler = () => {
    document.getElementById("password").value = addNewPassword();
};
// Event listener for generate PW button
genBtn.addEventListener("click", buttonHandler);

// ========= ⬆ DO NOT TOUCH THIS CODE ⬆ ======
