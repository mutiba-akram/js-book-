                                      // MATH METHODS
                                      
//   1. Write a program that takes a positive integer from user &
//   display the following in your browser.
//   a. number
//   b. round off value of the number
//   c. floor value of the number
//   d. ceil value of the number    

function calculateValues() {
   
    var number = parseInt(document.getElementById("inputNumber").value);
    var roundOff = Math.round(number);
    var floorValue = Math.floor(number);
    var ceilValue = Math.ceil(number);
    document.getElementById("number").innerHTML = "Number: " + number;
    document.getElementById("roundOff").innerHTML = "Round Off: " + roundOff;
    document.getElementById("floorValue").innerHTML = "Floor Value: " + floorValue;
    document.getElementById("ceilValue").innerHTML = "Ceil Value: " + ceilValue;
  }

//   2. Write a program that takes a negative floating point
//   number from user & display the following in your browser.
//   a. number
//   b. round off value of the number
//   c. floor value of the number
//   d. ceil value of the number

function calculateValues() {
    
    var number = parseFloat(document.getElementById("inputNumber").value);
    var roundOff = Math.round(number);
    var floorValue = Math.floor(number);
    var ceilValue = Math.ceil(number);
    document.getElementById("number").innerHTML = "Number: " + number;
    document.getElementById("roundOff").innerHTML = "Round Off: " + roundOff;
    document.getElementById("floorValue").innerHTML = "Floor Value: " + floorValue;
    document.getElementById("ceilValue").innerHTML = "Ceil Value: " + ceilValue;
  }

//   3. Write a program that displays the absolute value of a
//   number.
//   E.g. absolute value of -4 is 4 & absolute value of 5 is 5

function calculateAbsoluteValue() {
    var number = parseFloat(document.getElementById("inputNumber").value);
    var absoluteValue = Math.abs(number);
    document.getElementById("result").innerHTML = "The absolute value of " + number + " is " + absoluteValue;
  }

// 4. Write a program that simulates a dice using random()
// method of JS Math class. Display the value of dice in your
// browser.:

function rollDice() {
    var diceValue = Math.floor(Math.random() * 6) + 1;
    document.getElementById("result").innerHTML = "Dice value: " + diceValue;
  }

// 5. Write a program that simulates a coin toss using random()
//   method of JS Math class. Display the value of coin in your
//   browser

  function tossCoin() {
    var randomNumber = Math.random();
    var coinValue = randomNumber < 0.5 ? "Heads" : "Tails";
    document.getElementById("result").innerHTML = "Coin value: " + coinValue;
  }

// 6. Write a program that shows a random number between 1
//   and 100 in your browser.

function generateRandomNumber() {
    var randomNumber = Math.floor(Math.random() * 100) + 1;
    document.getElementById("result").innerHTML = "Random number: " + randomNumber;
  }

// 7. Write a program that asks the user about his weight. Parse
// the user input and display his weight in your browser.
// Possible user inputs can be:
// a. 50
// b. 50kgs
// c. 50.2kgs
// d. 50.2kilograms

function displayWeight() {
    var userInput = document.getElementById("weightInput").value;
    var weight = parseFloat(userInput);
    document.getElementById("result").innerHTML = "Weight: " + weight + " kgs";
  }

// 8. Write a program that stores a random secret number from
//   1 to 10 in a variable. Ask the user to input a number
//   between 1 and 10. If the user input equals the secret
//   number, congratulate the user.

function checkGuess() {
    var secretNumber = Math.floor(Math.random() * 10) + 1;
    var userGuess = parseInt(document.getElementById("guessInput").value);
    if (userGuess === secretNumber) {
     
      document.getElementById("result").innerHTML = "Congratulations! You guessed the secret number.";
    } else {

      document.getElementById("result").innerHTML = "Sorry, your guess is incorrect. The secret number was " + secretNumber + ".";
    }
  }