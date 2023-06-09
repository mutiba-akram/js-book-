                                        //FUNCTION//

// 1. Write a function that displays current date & time in your 
// browser.

function current() {
  var Date = new Date();
  document.write(Date);
}
// }

// 2. Write a function that takes first & last name and then it 
// greets the user using his full name.

function greet() {
    var firstName = prompt("Enter your first name");
    var lastName = prompt("Enter your last name");
    document.write('Welcome ' + firstName + '-' + lastName + '<br>');
  }
   var greetcall = greet();
   Console.log(greetcall);
  
// 3. Write a function that adds two numbers (input by user) 
// and returns the sum of two numbers.
  
  function add(a, b) {
    var a, b;
    var sum = parseInt(a) + parseInt(b);
    document.write('the addition of the numbers you enterd is =' + sum);
  }
  var input1 = prompt("Enter num 1");
  var input2 = prompt("Enter num 2");
  add(input1, input2);
  
// 4. Calculator:
  
  function desired_op(num1, num2, op) {
    switch (op) {
      case '+': return result = num1 + num2; break;
      case '-': return result = num1 - num2; break;
      case '*': return result = num1 * num2; break;
      case '/': return result = num1 / num2; break;
    }
  }
  var a = prompt("Input 1");
  var b = prompt("Input 2");
  var c = prompt("Input operator");
  var result = desired_op(a, b, c);
  alert(result);
  
//  5. Write a function that squares its argument.
  
  function square(x) {
    return x * x;
  }
  var squareNum = prompt("Enter the number you want square of");
  var answer = square(squareNum);
  alert("The square of the number you entered is= " + answer);
  
//   // 6. Write a function that computes factorial of a number.
  
  function factorial() {
    var a, y, b = 1;
    var y = prompt("Enter a number:");
    for (a = y; a >= 1; a--)
      b = a * b;
  
    document.write("<br>The factorial is " + b);
  }
   var factorialcall =factorial();
  
// 7. Write a function that take start and end number as inputs 
// & display counting in your browser.
  
  var a = prompt("Enter Start of the counting");
  var b = prompt("Enter the end of the counting");
  for (i = a; i < b; i++) {
    document.write(i + "<br>");
  }
  
// 8. Write a nested function that computes hypotenuse of a 
// right angle triangle. 
// Hypotenuse^2 = Base^2 + Perpendicular^2
 
  var base = prompt("Enter base");
  var perpendicular = prompt("Enter Perpendicular");
  
  function hypotenuse(base, perpendicular) {
    function calculateSquare(side) {
      return side * side;
    }
    var baseSquare = calculateSquare(base);
    var perpendicularSquare = calculateSquare(perpendicular);
    var hypotenuseSquare = baseSquare + perpendicularSquare;
    var hypotenuse = Math.sqrt(hypotenuseSquare);
  
    document.write("Hypotenuse =" + hypotenuse);
  }
  var hypotenuse = hypotenuse(base, perpendicular);
  
// 9. Write a function that calculates the area of a rectangle.
  
  var a = prompt("Enter Width Of The Rectangle");
  var b = prompt("Enter Height Of the Rectangle");
  function areaofrec(width, height) {
    var A = width * height;
    alert("Area of rectangle is= " + A);
  }
  var areaofrec = areaofrec(a, b);
  
//  10. Write a JavaScript function that checks whether a passed 
// string is palindrome or not?
  
  function isPalindrome(string) {
    var processedStr = string.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    for (var i = 0; i < processedStr.length / 2; i++) {
      if (processedStr[i] !== processedStr[processedStr.length - 1 - i]) {
        return false;
      }
    }
    return true;
  }
  var input = prompt("Enter a word or phrase:");
  var result = isPalindrome(input);
  if (result) {
    console.log("The Input Is A Palindrome.");
  } else {
    console.log("The Input Is Not A Palindrome.");
  }
  
// 11. Write a JavaScript function that accepts a string as a 
// parameter and converts the first letter of each word of the 
// string in upper case. 
  
  function capitalizeFirstLetter(str) {
    var words = str.split(' '); // Split the string into an array of words
    for (var i = 0; i < words.length; i++) {
      var word = words[i];
      var capitalizedWord = word.charAt(0).toUpperCase() + word.slice(1);
      words[i] = capitalizedWord;
    }
    var result = words.join(' ');
    return result;
  }
  var input = prompt("Enter A Sentence:");
  var output = capitalizeFirstLetter(input);
  document.write("Output:" + output);
  
// 12. Write a JavaScript function that accepts a string as a 
// parameter and find the longest word within the string. 

  function findLongestWord(str) {
    var words = str.split(' ');
    var longestWord = '';
    for (var i = 0; i < words.length; i++) {
      var word = words[i];
      if (word.length > longestWord.length) {
        longestWord = word;
      }
    }
    return longestWord;
  }
  var input = prompt("Enter a sentence:");
  var output = findLongestWord(input);
  alert("Output:"+ output);
  
  // 13. Write a JavaScript function that accepts two arguments, a 
  // string and a letter and the function will count the number of 
  // occurrences of the specified letter within the string. 

  
  function char_count(str, letter) 
  {
   var letter_Count = 0;
   for (var position = 0; position < str.length; position++) 
   {
      if (str.charAt(position) == letter) 
        {
        letter_Count += 1;
        }
    }
    return letter_Count;
  }
  console.log(char_count('w3resource.com', 'o'));
  
  // 14. The Geometrizer
  // Create 2 functions that calculate properties of a circle
  // Create a function called calcArea:
  // Pass the radius to the function.
  // Calculate the area based on the radius, and output "The area is NN".
  // Circumference of circle = 2πr
  // Area of circle = πr2