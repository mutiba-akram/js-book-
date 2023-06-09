                                        // ARRAYS
// 1. Declare an empty array using JS literal notation to store
// student names in future.

var studentNames = [];
console.log(studentNames);

// 2. Declare an empty array using JS object notation to store
// student names in future.

var studentNames = new Array();
    console.log(studentNames);

// 3. Declare and initialize a strings array.

var stringsArray = ["apple", "banana", "cherry", "date"];
    console.log(stringsArray);

// 4. Declare and initialize a numbers array.

var numbersArray = [1, 2, 3, 4, 5];
console.log(numbersArray);

// 5. Declare and initialize a boolean array.

var booleanArray = [true, false, true, false];
    console.log(booleanArray);

// 6. Declare and initialize a mixed array.

var mixedArray = ["Mutiba", 18, true, "apple", false];
console.log(mixedArray);

// 7. Declare and Initialize an array and store available
// education qualifications in Pakistan (e.g. SSC, HSC, BCS,
// BS, BCOM, MS, M. Phil., PhD). Show the listed
// qualifications in your browser like:

var qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];
var qualificationsList = document.getElementById("qualifications");
for (var i = 0; i < qualifications.length; i++) {
  var listItem = document.createElement("li");
  listItem.textContent = qualifications[i];
  qualificationsList.appendChild(listItem);
}

// 8. Write a program to store 3 student names in an array.Take
// another array to store score of these three students.
// Assume that total marks are 500 for each student, display
// the scores & percentages of students like:

var studentNames = ["Ali", "Sarah", "Rahil"];
var scores = [420, 380, 450];


var totalMarks = 500;
var percentages = [];

for (var i = 0; i < scores.length; i++) {
  var percentage = (scores[i] / totalMarks) * 100;
  percentages.push(percentage);
}

var tableBody = document.getElementById("table-body");

for (var i = 0; i < studentNames.length; i++) {
  var row = document.createElement("tr");
  
  var nameCell = document.createElement("td");
  nameCell.textContent = studentNames[i];
  row.appendChild(nameCell);
  
  var scoreCell = document.createElement("td");
  scoreCell.textContent = scores[i];
  row.appendChild(scoreCell);
  
  var percentageCell = document.createElement("td");
  percentageCell.textContent = percentages[i].toFixed(2) + "%";
  row.appendChild(percentageCell);
  
  tableBody.appendChild(row);
}

// 9. Initialize an array with color names. Display the array
// elements in your browser.
// a. Ask the user what color he/she wants to add to the
// beginning & add that color to the beginning of the array.
// Display the updated array in your browser.
// b. Ask the user what color he/she wants to add to the end
// & add that color to the end of the array. Display the
// updated array in your browser.
// c. Add two more color to the beginning of the array.
// Display the updated array in your browser.
// d. Delete the first color in the array. Display the updated
// array in your browser.
// e. Delete the last color in the array. Display the updated
// array in your browser.
// f. Ask the user at which index he/she wants to add a color
// & color name. Then add the color to desired
// position/index. . Display the updated array in your
// browser.
// g. Ask the user at which index he/she wants to delete
// color(s) & how many colors he/she wants to delete. Then
// remove the same number of color(s) from user-defined
// position/index. . Display the updated array in your
// browser.
    
var colors = ["Red", "Green", "Blue"]; 

    function displayArray() {
      var result = document.getElementById("result");
      result.textContent = colors.join(", "); 
    }

    function addToBeginning() {
      var color = prompt("Enter a color to add to the beginning of the array:");
      colors.unshift(color);
      displayArray();
    }

    function addToEnd() {
      var color = prompt("Enter a color to add to the end of the array:");
      colors.push(color); 
      displayArray();
    }

    function addTwoAtBeginning() {
      var color1 = prompt("Enter the first color to add to the beginning of the array:");
      var color2 = prompt("Enter the second color to add to the beginning of the array:");
      colors.unshift(color2, color1); 
      displayArray();
    }

    function deleteFirst() {
      colors.shift(); 
      displayArray();
    }

    function deleteLast() {
      colors.pop(); 
      displayArray();
    }

    function addAtIndex() {
      var index = prompt("Enter the index at which you want to add a color:");
      var color = prompt("Enter the color to add at the specified index:");
      colors.splice(index, 0, color); 
      displayArray();
    }

    function deleteFromIndex() {
      var index = prompt("Enter the index from which you want to delete color(s):");
      var count = prompt("Enter the number of colors you want to delete:");
      colors.splice(index, count); 
      displayArray();
    }

    displayArray();

// 10. Write a program to store student scores in an array &
// sort the array in ascending order using Array’s sort
// method.

var scores = []; // Empty array to store student scores

function addScore() {
  var score = prompt("Enter the student score:");
  scores.push(score); 
  displayScores();
}

function sortScores() {
  scores.sort(function(a, b) {
    return a - b;
  });
  displayScores();
}

function displayScores() {
  var result = document.getElementById("result");
  result.textContent = "Student Scores: " + scores.join(", "); 
}

displayScores(); 

// 11. Write a program to initialize an array with city names.
// Copy 3 array elements from cities array to selectedCities
// array.

var cities = ["London", "Paris", "Tokyo", "New York", "Sydney"]; 
var selectedCities = []; 

selectedCities = cities.slice(1, 4);

function displaySelectedCities() {
  var result = document.getElementById("result");
  result.textContent = "Selected Cities: " + selectedCities.join(", ");
}

displaySelectedCities();

// 12. Write a program to create a single string from the
// below mentioned array:
// var arr = [“This ”, “ is ”, “ my ”, “ cat”];
// (Use array’s join method)

var arr = ["This", "is", "my", "cat"]; 
var result = arr.join(" "); 

function displayJoinedString() {
  var output = document.getElementById("output");
  output.textContent = "Joined String: " + result;
}

displayJoinedString();

// 13. Create a new array. Store values one by one in such a way
// that you can access the values in the order in which they
// were stored. (FIFO-First In First Out)

var queue = []; 

function enqueue(element) {
  queue.push(element);
}

function dequeue() {
  return queue.shift();
}

function displayQueue() {
  var output = document.getElementById("output");
  output.textContent = "Queue: " + queue.join(", ");
}

enqueue("Apple"); 
enqueue("Banana");
enqueue("Orange");

displayQueue(); 

var dequeuedElement = dequeue(); 
console.log("Dequeued Element: " + dequeuedElement);

displayQueue();