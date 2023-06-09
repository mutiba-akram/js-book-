                         // ASSIGNMENT NO 2 "VARIABLES FOR NUMBERS"
// 1. Declare a variable called age & assign to it your age. Show
// your age in an alert box.

var age = 18;
alert("Your age is: " + age);

// 2. Declare & initialize a variable to keep track of how many
// times a visitor has visited a web page. Show his/her
// number of visits on your web page. For example: “You
// have visited this site N times”.

var visitCount = 0;

function incrementVisitCount() {
visitCount++;
document.getElementById("visitCount").innerText = "You have visited this site " + visitCount + " times";
}

window.onload = function() {
    incrementVisitCount();
};

// 3. Declare a variable called birthYear & assign to it your
// birth year. Show the following message in your browser:

var birthYear = 2004;
var message = "My birth year is " + birthYear;

function showMessage() {
document.getElementById("output").innerHTML = message;
}

// 4. A visitor visits an online clothing store
// www.xyzClothing.com . Write a script to store in variables
// the following information:
// a. Visitor’s name
// b. Product title
// c. Quantity i.e. how many products a visitor wants to
// order
// Show the following message in your browser: “John
// Doe ordered 5 T-shirt(s) on XYZ Clothing store”.

function placeOrder() {
    var visitorName = document.getElementById("name").value;
    var productTitle = document.getElementById("product").value;
    var quantity = document.getElementById("quantity").value;
    var message = visitorName + " ordered " + quantity + " " + productTitle + "(s) Nisha's Clothing store.";
    document.getElementById("output").innerHTML = message;
}
    
