                              // MATH EXPRESSIONS
// 1. Write a program to take a number in a variable, do the
// required arithmetic to display the following result in your
// browser:

function displayResult() {
    var number = document.getElementById("inputNumber").value;
    var result = (number + 5) * 10 / 2; 
    document.getElementById("result").innerHTML = "Result: " + result;
}

// 2. What will be the output in variables a, b & result after
// execution of the following script:
// var a = 2, b = 1;
// var result = --a - --b + ++b + b--;
// Explain the output at each stage:
// --a;
// --a - --b;
// --a - --b + ++b;
// --a - --b + ++b + b--;

function executeScript() {
    var a = 2, b = 1;
    var result = --a - --b + ++b + b--;

    document.getElementById("output").innerHTML = "a: " + a + "<br>b: " + b + "<br>result: " + result;
  }


// 3. Write a program that takes input a name from user &
// greet the user.

function greetUser() {
    var name = document.getElementById("inputName").value;
    var greeting = "Hello, " + name + "!";
    document.getElementById("greetingMessage").innerHTML = greeting;
}

// 5. Write a program to take input a number from user &
// display it’s multiplication table on your browser. If user
// does not enter a new number, multiplication table of 5
// should be displayed by default.

function displayMultiplicationTable() {
    var number = document.getElementById("inputNumber").value;
    if (number === "") {
        number = 5;
    }
    var table = "";
    for (var i = 1; i <= 10; i++) {
        var result = number * i; 
        table += number + " x " + i + " = " + result + "<br>"; 
    }

    document.getElementById("multiplicationTable").innerHTML = table;
}

// 6. Take
// a) Take three subjects name from user and store them in 3
// different variables.
// b) Total marks for each subject is 100, store it in another
// variable.
// c) Take obtained marks for first subject from user and
// stored it in different variable.
// d) Take obtained marks for remaining 2 subjects from user
// and store them in variables.
// e) Now calculate total marks and percentage and show the
// result in browser like this.(Hint: user table)

function calculateResult() {
    var subject1 = document.getElementById("subject1").value; 
    var subject2 = document.getElementById("subject2").value; 
    var subject3 = document.getElementById("subject3").value; 

    var totalMarks = 100; 

    var obtainedMarks1 = parseInt(document.getElementById("obtainedMarks1").value); 
    var obtainedMarks2 = parseInt(document.getElementById("obtainedMarks2").value); 
    var obtainedMarks3 = parseInt(document.getElementById("obtainedMarks3").value); 

    var totalObtainedMarks = obtainedMarks1 + obtainedMarks2 + obtainedMarks3; 

    var percentage = (totalObtainedMarks / (totalMarks * 3)) * 100; 

    
    var resultTable = "<table>";
    resultTable += "<tr><th>Subject</th><th>Total Marks</th><th>Obtained Marks</th></tr>";
    resultTable += "<tr><td>" + subject1 + "</td><td>" + totalMarks + "</td><td>" + obtainedMarks1 + "</td></tr>";
    resultTable += "<tr><td>" + subject2 + "</td><td>" + totalMarks + "</td><td>" + obtainedMarks2 + "</td></tr>";
    resultTable += "<tr><td>" + subject3 + "</td><td>" + totalMarks + "</td><td>" + obtainedMarks3 + "</td></tr>";
    resultTable += "<tr><th>Total</th><th>" + (totalMarks * 3) + "</th><th>" + totalObtainedMarks + "</th></tr>";
    resultTable += "<tr><th colspan='3'>Percentage: " + percentage.toFixed(2) + "%</th></tr>";
    resultTable += "</table>";

    document.getElementById("result").innerHTML = resultTable; 
  }


