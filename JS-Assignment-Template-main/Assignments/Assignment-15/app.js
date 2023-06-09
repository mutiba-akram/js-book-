                            // FUNCTIONS, SWITCH STATEMENTS, WHILE… DO-WHILE LOOPS

// 1. Write a custom function power ( a, b ), to calculate the value of 
// a raised to b.

function power(a, b) {
  var result = 1;
  for (var i = 0; i < b; i++) {
    result *= a;
  }
  return result;
}
var base = parseFloat(prompt("Enter the base number:"));
var exponent = parseInt(prompt("Enter the exponent:"));
var result = power(base, exponent);
alert( base + " raised to the power of " + exponent + " is " + result);

// 2. Any year is entered through the keyboard. Write a function to 
// determine whether the year is a leap year or not.
// Leap years ..., 2012, 2016, 2020, …

function isLeapYear(year) {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    return true;
  } else {
    return false;
  }
}
var year = parseInt(prompt("Enter a year:"));
if (isLeapYear(year)) {
  alert( year + " This is a leap year.");
} else {
alert(year + " This is not a leap year.");
}

// 3. If the lengths of the sides of a triangle are denoted by a, b, and 
// c, then area of triangle is given by
// area = S(S − a)(S − b)(S − c)
// where, S = ( a + b + c ) / 2
// Calculate area of triangle using 2 functions

function calculateArea(a, b, c) {
  var s = calculateS(a, b, c);
  var area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
  return area;
}
function calculateS(a, b, c) {
  var s = (a + b + c) / 2;
  return s;
}
var sideA = 6;
var sideB = 6;
var sideC = 6;
var triangleArea = calculateArea(sideA, sideB, sideC);
document.write("Area of the triangle:", triangleArea);

// 4. Write a function that receives marks received by a student in 3 
// subjects and returns the average and percentage of these
// marks. there should be 3 functions one is the mainFunction 
// and other are for average and percentage. Call those functions 
// from mainFunction and display result in mainFunction.


function calculateAverage(subject1, subject2, subject3) {
  var totalMarks = subject1 + subject2 + subject3;
  var average = totalMarks / 3;
  return average;
}
function calculatePercentage(subject1, subject2, subject3) {
  var totalMarks = subject1 + subject2 + subject3;
  var totalMarksOutOf = 300;
  var percentage = (totalMarks / totalMarksOutOf) * 100;
  return percentage;
}
function mainFunction() {
  var subject1Marks = parseFloat(prompt("Enter marks for subject 1:"));
  var subject2Marks = parseFloat(prompt("Enter marks for subject 2:"));
  var subject3Marks = parseFloat(prompt("Enter marks for subject 3:"));
  var averageMarks = calculateAverage(subject1Marks, subject2Marks, subject3Marks);
  var percentageMarks = calculatePercentage(subject1Marks, subject2Marks, subject3Marks);
  document.write("Average marks:"+ averageMarks);
  document.write("Percentage marks:"+ percentageMarks);
}
var mainFunction = mainFunction();

// 5. You have learned the function indexOf. Code your own custom 00
// function that will perform the same functionality. You can code 
// for single character as of now.

function customIndexOf(str, searchChar) {
  for (var i = 0; i < str.length; i++) {
    if (str[i] === searchChar) {
      return i;
    }
  }
  return -1;
}
var str = "Hello, World!";
var searchChar = "o";
var index = customIndexOf(str, searchChar);
alert("i" + index);

// 6. Write a function to delete all vowels from a sentence. Assume 
// that the sentence is not more than 25 characters long.

function deleteVowels(sentence) {
  var vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O'];
  var result = '';
  for (var i = 0; i < sentence.length; i++) {
    var char = sentence[i].toLowerCase();

    if (vowels.indexOf(char) === -1) {
      result += sentence[i];
    }
  }
  return result;
}
var sentence = "HI, how aRe you I'm Fine?";
var modifiedSentence = deleteVowels(sentence);
alert(modifiedSentence);

// 7. Write a function with switch statement to count the number of 
// occurrences of any two vowels in succession in a line of text. 
 
function disemvowel(string) {

  let vowels = {
    'a': true,
    'e': true,
    'i': true,
    'o': true,
    'u': true
  };

  let result = "";

  for (let i = 0; i < string.length; i++) {
    let letter = string[i].toLowerCase();
    if (!vowels[letter]) {
      result += string[i];
    }
  };
  return result;
}
var sentence = "Pleases read this application and give me gratuity";
var occurrences = disemvowel(sentence);
document.write("Number of occurrences: " + occurrences);

// 8. The distance between two cities (in km.) is input through the 
// keyboard. Write four functions to convert and print this 
// distance in meters, feet, inches and centimeters.

function convertToMeters(distanceInKm) {
  return distanceInKm * 1000;
}
function convertToFeet(distanceInKm) {
  return distanceInKm * 3280.84;
}
function convertToInches(distanceInKm) {
  return distanceInKm * 39370.1;
}