                                  // USER INPUT & CONDITIONAL
                                  // STATEMENT

// 1. Write a program to take “city” name as input from user. If
// user enters “Karachi”, welcome the user like this:
// “Welcome to city of lights”

function displayWelcomeMessage() {
    var cityName = document.getElementById("cityName").value; 

    if (cityName.toLowerCase() === "karachi") { 
      var welcomeMessage = "Welcome to the city of lights, Karachi!"; 
    } else {
      var welcomeMessage = "Welcome to " + cityName + "!"; 
    }

    document.getElementById("welcomeMessage").innerHTML = welcomeMessage; 
  }

//   2. Write a program to take “gender” as input from user. If the
//   user is male, give the message: Good Morning Sir. If the
//   user is female, give the message: Good Morning Ma’am

function displayGreetingMessage() {
    var gender = document.getElementById("gender").value; 

    if (gender.toLowerCase() === "male") { 
      var greetingMessage = "Good Morning Sir.";
    } else if (gender.toLowerCase() === "female") { 
      var greetingMessage = "Good Morning Ma'am.";
    } else {
      var greetingMessage = "Good Morning."; 
    }

    document.getElementById("greetingMessage").innerHTML = greetingMessage; 
}

// 3. Write a program to take input color of road traffic signal
// from the user & show the message according to this table:

function displaySignalMessage() {
    var signalColor = document.getElementById("signalColor").value.toLowerCase(); 

    var message = ""; 

    switch (signalColor) {
      case "red":
        message = "Stop! The signal color is red.";
        break;
      case "yellow":
        message = "Get ready! The signal color is yellow.";
        break;
      case "green":
        message = "Go! The signal color is green.";
        break;
      default:
        message = "Invalid signal color entered.";
        break;
    }

    document.getElementById("signalMessage").innerHTML = message; 
  }

//   4. Write a program to take input remaining fuel in car (in
//     litres) from user. If the current fuel is less than 0.25litres,
//     show the message “Please refill the fuel in your car”

function checkFuelLevel() {
    var remainingFuel = parseFloat(document.getElementById("remainingFuel").value); 

    if (remainingFuel < 0.25) {
      var message = "Please refill the fuel in your car.";
    } else {
      var message = "You have enough fuel in your car.";
    }

    document.getElementById("fuelMessage").innerHTML = message; 
  }

//   5. Run this script, & check whether alert message would be
// displayed or not. Record the outputs.
// a. var a = 4;
// if (++a === 5){
// alert("given condition for variable a is true");
// }
// b. var b = 82;
// if (b++ === 83){
// alert("given condition for variable b is true");
// }
// c. var c = 12;
// if (c++ === 13){
// alert("condition 1 is true");
// }
// if (c === 13){
// alert("condition 2 is true");
// }
// if (++c < 14){
// alert("condition 3 is true");
// }
// if(c === 14){
// alert("condition 4 is true");
// }
// d. var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals");
// }
// e. if (true){
// alert("True");
// }
// if (false){
// alert("False");
// }
// f. if("car" < "cat"){
//     alert("car is smaller than cat");
//     }

alert("Output for the given script:");

var a = 4;
if (++a === 5) {
  alert("Given condition for variable a is true.");
}

var b = 82;
if (b++ === 83) {
  alert("Given condition for variable b is true.");
}

var c = 12;
if (c++ === 13) {
  alert("Condition 1 is true.");
}
if (c === 13) {
  alert("Condition 2 is true.");
}
if (++c < 14) {
  alert("Condition 3 is true.");
}
if (c === 14) {
  alert("Condition 4 is true.");
}

var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost) {
  alert("The cost equals.");
}

if (true) {
  alert("True.");
}
if (false) {
  alert("False."); 
}

if ("car" < "cat") {
  alert("Car is smaller than cat.");
}

// 6. Write a program to take input the marks obtained in three
// subjects & total marks. Compute & show the resulting
// percentage on your page. Take percentage & compute
// grade as per following table:
// Show the total marks, marks obtained, percentage, grade &
// remarks like:

function calculateGrade() {
    var subject1Marks = parseFloat(document.getElementById("subject1Marks").value);
    var subject2Marks = parseFloat(document.getElementById("subject2Marks").value);
    var subject3Marks = parseFloat(document.getElementById("subject3Marks").value);
    var totalMarks = parseFloat(document.getElementById("totalMarks").value);

    var obtainedMarks = subject1Marks + subject2Marks + subject3Marks;
    var percentage = (obtainedMarks / totalMarks) * 100;

    var grade = "";
    var remarks = "";

    if (percentage >= 80) {
      grade = "A+";
      remarks = "Excellent";
    } else if (percentage >= 70) {
      grade = "A";
      remarks = "Very Good";
    } else if (percentage >= 60) {
      grade = "B";
      remarks = "Good";
    } else if (percentage >= 50) {
      grade = "C";
      remarks = "Satisfactory";
    } else if (percentage >= 40) {
      grade = "D";
      remarks = "Average";
    } else {
      grade = "Fail";
      remarks = "Poor";
    }

    document.getElementById("totalMarksDisplay").innerHTML = "Total Marks: " + totalMarks;
    document.getElementById("obtainedMarksDisplay").innerHTML = "Obtained Marks: " + obtainedMarks;
    document.getElementById("percentageDisplay").innerHTML = "Percentage: " + percentage.toFixed(2) + "%";
    document.getElementById("gradeDisplay").innerHTML = "Grade: " + grade;
    document.getElementById("remarksDisplay").innerHTML = "Remarks: " + remarks;
  }

// 7. Guess game:
// Store a secret number (ranging from 1 to 10) in a variable.
// Prompt user to guess the secret number.
// a. If user guesses the same number, show “Bingo! Correct
// answer”.
// b. If the guessed number +1 is the secret number, show
// “Close enough to the correct answer”.

function guessNumber() {
    var secretNumber = Math.floor(Math.random() * 10) + 1; 
    var userGuess = parseInt(document.getElementById("userGuess").value);

    if (userGuess === secretNumber) {
      alert("Bingo! Correct answer");
    } else if (userGuess === secretNumber - 1 || userGuess === secretNumber + 1) {
      alert("Close enough to the correct answer");
    } else {
      alert("Wrong guess! The secret number was " + secretNumber);
    }
  }

// 8. Write a program to check whether the given number is
// divisible by 3. Show the message to the user if the number
// is divisible by 3.

function checkDivisibility() {
    var number = parseInt(document.getElementById("number").value);

    if (number % 3 === 0) {
      alert(number + " is divisible by 3");
    } else {
      alert(number + " is not divisible by 3");
    }
  }

//   9. Write a program that checks whether the given input is an
//   even number or an odd number

function checkNumber() {
    var number = parseInt(document.getElementById("number").value);

    if (number % 2 === 0) {
      alert(number + " is an even number");
    } else {
      alert(number + " is an odd number");
    }
  }

// 10. Write a program that takes temperature as input and
// shows a message based on following criteria
// a. T > 40 then “It is too hot outside.”
// b. T > 30 then “The Weather today is Normal.”
// c. T > 20 then “Today’s Weather is cool.”
// d. T > 10 then “OMG! Today’s weather is so Cool.”

function checkTemperature() {
    var temperature = parseInt(document.getElementById("temperature").value);

    if (temperature > 40) {
      alert("It is too hot outside.");
    } else if (temperature > 30) {
      alert("The Weather today is Normal.");
    } else if (temperature > 20) {
      alert("Today’s Weather is cool.");
    } else if (temperature > 10) {
      alert("OMG! Today’s weather is so Cool.");
    } else {
      alert("The temperature is extremely cold!");
    }
  }

// 11. Write a program to create a calculator for +,-,*, / & %
// using if statements. Take the following input:
// a. First number
// b. Second number
// c. Operation (+, -, *, /, %)
// Compute & show the calculated result to user.

function calculate() {
    var firstNumber = parseFloat(document.getElementById("firstNumber").value);
    var secondNumber = parseFloat(document.getElementById("secondNumber").value);
    var operation = document.getElementById("operation").value;
    var result;

    if (operation === "+") {
      result = firstNumber + secondNumber;
    } else if (operation === "-") {
      result = firstNumber - secondNumber;
    } else if (operation === "*") {
      result = firstNumber * secondNumber;
    } else if (operation === "/") {
      result = firstNumber / secondNumber;
    } else if (operation === "%") {
      result = firstNumber % secondNumber;
    }

    alert("Result: " + result);
  }

  



