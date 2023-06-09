                                        // ARRAYS AND LOOP

// 1. Declare and initialize an empty multidimensional array.
// (Array of arrays)      

var multiArray = [];

    function displayArray() {
      var output = document.getElementById("output");
      output.textContent = "Multidimensional Array: " + JSON.stringify(multiArray);
    }

    displayArray();

// 2. Declare and initialize a multidimensional array
// representing the following matrix:

var matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ]; 
  function displayMatrix() {
    var output = document.getElementById("output");
    output.textContent = "Matrix:\n";
    for (var i = 0; i < matrix.length; i++) {
      output.textContent += matrix[i].join(" ") + "\n";
    }
  }

  displayMatrix();

//   3. Write a program to print numeric counting from 1 to 10.

function printCounting() {
    var output = document.getElementById("output");
    output.textContent = ""; 
    
    for (var i = 1; i <= 10; i++) {
      output.textContent += i + " ";
    }
  }

  printCounting();

//   4. Write a program to print multiplication table of any
// number using for loop. Table number & length should be
// taken as an input from user.

function printTable() {
    var tableNumber = parseInt(document.getElementById("number").value);
    var tableLength = parseInt(document.getElementById("length").value);
    var output = document.getElementById("output");
    output.textContent = ""; t
    
    for (var i = 1; i <= tableLength; i++) {
      var result = tableNumber * i;
      output.textContent += tableNumber + " x " + i + " = " + result + "\n";
    }
  }

//   5. Write a program to print items of the following array
// using for loop:
// fruits = [“apple”, “banana”, “mango”, “orange”,
// “strawberry”]

function printArray() {
    var fruits = ["apple", "banana", "mango", "orange", "strawberry"];
    var output = document.getElementById("output");
    output.textContent = ""; 
    
    for (var i = 0; i < fruits.length; i++) {
      output.textContent += fruits[i] + "\n";
    }
  }

//   6. Generate the following series in your browser. See
//   example output.
//   a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
//   b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
//   c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
//   d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
//   e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k

function generateSeries() {
    var counting = "";
    var reverseCounting = "";
    var even = "";
    var odd = "";
    var series = "";

    for (var i = 1; i <= 15; i++) {
      counting += i + ", ";
      reverseCounting = i + ", " + reverseCounting;
      
      if (i % 2 === 0) {
        even += i + ", ";
        series += i + "k, ";
      } else {
        odd += i + ", ";
      }
    }

    document.getElementById("counting").textContent = "Counting: " + counting;
    document.getElementById("reverseCounting").textContent = "Reverse counting: " + reverseCounting;
    document.getElementById("even").textContent = "Even: " + even;
    document.getElementById("odd").textContent = "Odd: " + odd;
    document.getElementById("series").textContent = "Series: " + series;
  }

//   7. You have an array
//   A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”]
//   Write a program to enable “search by user input” in an
//   array.
//   After searching, prompt the user whether the given item is
//   found in the list or not. Example:

function searchArray() {
    var array = ["cake", "apple pie", "cookie", "chips", "patties"];
    var userInput = prompt("Enter an item to search:");

    var found = false;
    for (var i = 0; i < array.length; i++) {
      if (array[i] === userInput) {
        found = true;
        break;
      }
    }

    if (found) {
      alert(userInput + " is found in the list!");
    } else {
      alert(userInput + " is not found in the list.");
    }
  }

//   8. Write a program to identify the largest number in the
//   given array.
//   A = [24, 53, 78, 91, 12].

function findLargestNumber() {
    var array = [24, 53, 78, 91, 12];
    var largestNumber = array[0];

    for (var i = 1; i < array.length; i++) {
      if (array[i] > largestNumber) {
        largestNumber = array[i];
      }
    }

    alert("The largest number is: " + largestNumber);
  }

//   9. Write a program to identify the smallest number in the
//   given array.
//   A = [24, 53, 78, 91, 12]

function findSmallestNumber() {
    var array = [24, 53, 78, 91, 12];
    var smallestNumber = array[0];

    for (var i = 1; i < array.length; i++) {
      if (array[i] < smallestNumber) {
        smallestNumber = array[i];
      }
    }

    alert("The smallest number is: " + smallestNumber);
  }

//   10. Write a program to print multiples of 5 ranging 1 to
// 100.

function printMultiplesOf5() {
    var result = "";
    for (var i = 1; i <= 100; i++) {
      if (i % 5 === 0) {
        result += i + " ";
      }
    }
    alert("Multiples of 5 from 1 to 100: " + result);
  }