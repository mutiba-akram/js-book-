                                 // IF…ELSE & ELSE IF STATEMENT,
                                 // TESTING SET OF CONDITIONS 

// 1. Write a program that takes a character (number or string)
// in a variable & checks whether the given input is a
// number, uppercase letter or lower case letter. (Hint: ASCII
// codes:- A=65, Z=90, a=97, z=122).

function checkCharacter() {
    var character = document.getElementById("character").value;

    // Get the ASCII code of the character
    var asciiCode = character.charCodeAt(0);

    if (asciiCode >= 48 && asciiCode <= 57) {
      alert("The given input is a number.");
    } else if (asciiCode >= 65 && asciiCode <= 90) {
      alert("The given input is an uppercase letter.");
    } else if (asciiCode >= 97 && asciiCode <= 122) {
      alert("The given input is a lowercase letter.");
    } else {
      alert("The given input is neither a number, uppercase letter, nor lowercase letter.");
    }
  }

//   2. Write a JavaScript program that accept two integers and
//   display the larger. Also show if the two integers are equal.

function compareIntegers() {
    var integer1 = parseInt(document.getElementById("integer1").value);
    var integer2 = parseInt(document.getElementById("integer2").value);

    if (integer1 > integer2) {
      alert("The larger integer is: " + integer1);
    } else if (integer2 > integer1) {
      alert("The larger integer is: " + integer2);
    } else {
      alert("The two integers are equal.");
    }
  }

//   3. Write a program that takes input a number from user &
//   state whether the number is positive, negative or zero.

function checkNumber() {
    var number = parseInt(document.getElementById("number").value);

    if (number > 0) {
      alert("The number is positive.");
    } else if (number < 0) {
      alert("The number is negative.");
    } else {
      alert("The number is zero.");
    }
  }

//   4. Write a program that takes a character (i.e. string of
// length 1) and returns true if it is a vowel, false otherwise

function checkVowel() {
    var character = document.getElementById("character").value.toLowerCase();

    var vowels = ["a", "e", "i", "o", "u"];

    if (character.length === 1 && vowels.includes(character)) {
      alert("The character is a vowel.");
    } else {
      alert("The character is not a vowel.");
    }
  }

// 5. Write a program that
// a. Store correct password in a JS variable.
// b. Asks user to enter his/her password
// c. Validate the two passwords:
// i. Check if user has entered password. If not, then
// give message “ Please enter your password”
// ii. Check if both passwords are same. If they are
// same, show message “Correct! The password you
// entered matches the original password”. Show
// “Incorrect password” otherwise

function validatePassword() {
    var correctPassword = "password";
    var enteredPassword = document.getElementById("password").value;

    if (enteredPassword === "") {
      alert("Please enter your password.");
    } else if (enteredPassword === correctPassword) {
      alert("Correct! The password you entered matches the original password.");
    } else {
      alert("Incorrect password.");
    }
  }

//   6. This if/else statement does not work. Try to fix it:
//   var greeting;
//   var hour = 13;
//   if (hour < 18) {
//   greeting = "Good day";
//   else
//   greeting = "Good evening";
//   }

var greeting;
    var hour = 13;
    if (hour < 18) {
      greeting = "Good day";
    } else {
      greeting = "Good evening";
    }
    alert(greeting);

    // 7. Write a program that takes time as input from user in 24
    // hours clock format like: 1900 = 7pm. Implement the
    // following case using if, else & else if statements

    function convertTime() {
        var inputTime = document.getElementById("time").value;
        var hour = parseInt(inputTime.slice(0, 2));
  
        var convertedTime;
  
        if (hour === 12) {
          convertedTime = hour + "pm";
        } else if (hour > 12) {
          convertedTime = (hour - 12) + "pm";
        } else {
          convertedTime = hour + "am";
        }
  
        alert("Converted Time: " + convertedTime);
      }