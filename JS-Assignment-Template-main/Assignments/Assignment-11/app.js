                                    // STRING METHODS

//1. Write a program that take two user input for first and last name using prompt and merge them in a new variable titled fullName.
//Greet the user using his full name.

let firstName = prompt("Enter your first name:");
let lastName = prompt("Enter your last name:");

let fullName = firstName + " " + lastName;

console.log("Hello, " + fullName + "! Welcome!");

//2.= Write a program that takes a user input about his favourite mobile phone model. Find and display the length of user input in your browser.


var userInput = prompt("Enter your favorite mobile phone model:");

var inputLength = userInput.length;

document.write("<br>My favorite phone is: " + userInput);
document.write(" and Length of user input: " + inputLength);

//3. write a program to find the index of letter "n" in the word "Pakistan" and display the result in your browser.

function findLetterIndex() {
    var word = "Pakistan";
    var index = word.indexOf("n");
    document.getElementById("result").innerHTML = "The index of letter 'n' in the word 'Pakistan' is " + index;
  }

//4. write a program to find a last index of letter "l" in the word "Hello World" and diplay the result in your browser.

function findLastIndex() {
    var word = "Hello World";
    var lastIndex = word.lastIndexOf("l");
    document.getElementById("result").innerHTML = "The last index of letter 'l' in the word 'Hello World' is " + lastIndex;
  }


//5. Write a program to find a character at 3rd index in the word "Pakistani" and display the result in your browser.

function findCharacter() {
    var word = "Pakistani";
    var character = word.charAt(3);
    document.getElementById("result").innerHTML = "The character at the 3rd index in the word 'Pakistani' is '" + character + "'";
  }


//6. Write a program to replace the "Hyder" to "Islam" in the word "Hyderabad" and display the result in your browser. 

var word = "Hyderabad";
var substringToReplace = "Hyder";
var replacement = "Islam";

var newWord = word.replace(substringToReplace, replacement);

document.write("City: " + word + "<br>");
document.write("After Replacement : " + newWord);

//7. Write a program to replace all occurances of "and" in the string with "&" and display the result in your browser.

var message = "Ali and Sami are best friends. They play cricket and football together.";

var message = "Ali and Sami are best friends. They play cricket and football together.";

var replacedMessage = message.replace(/and/g, "&");

document.write("Original message: " + message + "<br>");
document.write("Replaced message: " + replacedMessage);

//8. Write a program that converts a string "472" to a number 472. Display the values and types in your browser.

let str = "472";
let Num = Number(str);

document.write(" Value: " + str + "<br>");
document.write(" Type: " + typeof str + "<br>");
document.write(" Value: " + num + "<br>");
document.write(" Type: " + typeof num);

//9. Write a program that takes user input. Convert and show the input and capital letters. 
//User Input: Peanuts
//Upper case : PEANUTS

var userInput = prompt("Enter your input:");

var convertedInput = userInput.toLowerCase();
var uppercaseInput = convertedInput.toUpperCase();

document.write("User Input: " + userInput + "<br>");
document.write("Upper case: " + uppercaseInput);

//10. write a program that takes user input. Convert and show the input in title case.

let userInput = prompt("Enter your input:");

let titleCaseInput = userInput.charAt(0).toUpperCase() + userInput.slice(1).toLowerCase();

document.write("User Input: " + userInput + "<br>");
document.write("Title Case: " + titleCaseInput);

// 11. Write am program that converts the variable num to string.
// var num= 35.36
// remove the dot to display "3536"display in your browser.    

    var num = 35.36; 

var numAsString = num.toString().replace(".", "");

document.write("Original Number: " + num + "<br>");
document.write("Number as String: " + numAsString);

//12. Write a program to take user input and store username in avariable. If the username contains any special symbol among
// [@.,!], prompt the user to enter a valid username .
//For character codes of [@.

var username = prompt("Enter your username:");

var specialSymbols = ["@", ".", "!"];

var isValid = true;

for (var i = 0; i < username.length; i++) {
  var charCode = username.charCodeAt(i);
  if (charCode === 64 || charCode === 46 || charCode === 33) {
    isValid = false;
    break;
  }
}

if (isValid) {
  document.write("Username: " + username);
} else {
  alert("Invalid username! Please enter a valid username without special symbols [@.,!]");
}

//13. You have an array 
// A=["cake", "apple pie", "cookie", "chips", "patties"]
//Write a program to enable "search by user input" in an array after searching, prompt the user whether 
//the given item is found in the list or not.
//Note: Perform case insensitive search. whether the user enters cookie, Cookie, COOKIE or CooKIe, program 
//should inform about its availability:  

var A = ["cake", "apple pie", "cookie", "chips", "patties"];
var userInput = prompt("Enter an item to search:");

var found = false;

for (var i = 0; i < A.length; i++) {
  if (A[i].toLowerCase() === userInput.toLowerCase()) {
    found = true;
    break;
  }
}

if (found) {
  alert("The item '" + userInput + "' is found in the list.");
} else {
 alert("The item '" + userInput + "' is not found in the list.");
}

//14. Write a program to take a password as an input from muser. Them password must qualify 
//these requirements:
//a): It should contain Alphabet Numbers.
  
var password = prompt("Enter a password:");

var hasAlphabet = false;
var hasNumber = false;

for (var i = 0; i < password.length; i++) {
  var char = password[i];

  if (/[a-zA-Z]/.test(char)) {
   hasAlphabet = true;
  } else if (/[0-9]/.test(char)) {
    hasNumber = true;
  }

  if (hasAlphabet && hasNumber) {
    break;
  }
}

if (hasAlphabet && hasNumber) {
  alert("Password is valid.");
} else {
  alert("Password should contain both alphabets and numbers.");
}

//b) It should not start with a number.

 var password = prompt("Enter a password:");

if (/^[^0-9]/.test(password)) {
 alert("Password is valid.");
 } else {
  alert("Password should not start with a number.");
}

//c) It must atleast 6 character long
 
 var password = prompt("Enter a password:");

 if (password.length >= 6) {
  alert("Password is valid.");
 } else {
  alert("Password must be at least 6 characters long.");
}

//16. Write a program to convert the following, string to an array using string split method.
// var university = "University of Karachi".
//display the elements of array in browser

var university = "University of Karachi";
var array = university.split("");

for (var i = 0; i < array.length; i++) {
  document.write(array[i] + "<br>");
}

//17. Write a program to display the last character of a user input.

var userInput = prompt("Enter a string:");
var lastCharacter = userInput[userInput.length - 1];

document.write("Last character: " + lastCharacter);

//18. You have a string "the quick brown for jumps over the lazy dog". Wriite a program to count number of occurances 
//of word "the" in given string.

var string = "The quick brown fox jumps over the lazy dog";
var word = "the";
var count = 0;

var regex = new RegExp("\\b" + word + "\\b", "gi");
var matches = string.match(regex);

if (matches) {
  count = matches.length;
}

document.write("Text: " + string + "<br>");
document.write("There are " + count + " occurrences of the word '" + word + "'");