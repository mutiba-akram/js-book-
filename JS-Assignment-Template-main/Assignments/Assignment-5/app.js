                                    // MATH EXPRESSIONS
// 1. Write a program that take two numbers & add them in a
// new variable. Show the result in your browser

function addNumbers() {
    var num1 = parseInt(document.getElementById("num1").value);
    var num2 = parseInt(document.getElementById("num2").value);
    var sum = num1 + num2;
    document.getElementById("result").innerHTML = "The sum is: " + sum;
}

// 2. Repeat task1 for subtraction, multiplication, division &
// modulus.

// 3. Do the following using JS Mathematic Expressions
// a. Declare a variable.
// b. Show the value of variable in your browser like “Value
// after variable declaration is: ??”.
// c. Initialize the variable with some number.
// d. Show the value of variable in your browser like “Initial
// value: 5”.
// e. Increment the variable.
// f. Show the value of variable in your browser like “Value
// after increment is: 6”.
// g. Add 7 to the variable.
// h. Show the value of variable in your browser like “Value
// after addition is: 13”.
// i. Decrement the variable.
// j. Show the value of variable in your browser like “Value
// after decrement is: 12”.
// k. Show the remainder after dividing the variable’s value
// by 3.
// l. Output : “The remainder is : 0”.

function performOperations() {
    var myVariable;
    document.getElementById("output1").innerHTML = "Value after variable declaration is: " + myVariable;
    myVariable = 5;
    document.getElementById("output2").innerHTML = "Initial value: " + myVariable;
    myVariable++;
    document.getElementById("output3").innerHTML = "Value after increment is: " + myVariable;
    myVariable += 7;
    document.getElementById("output4").innerHTML = "Value after addition is: " + myVariable;
    myVariable--;
    document.getElementById("output5").innerHTML = "Value after decrement is: " + myVariable;
    var remainder = myVariable % 3;
    document.getElementById("output6").innerHTML = "The remainder is: " + remainder;
}


// 4. Cost of one movie ticket is 600 PKR. Write a script to
// store
// ticket price in a variable & calculate the cost of buying 5
// tickets
// to a movie. Example output:

var ticketPrice = 600;
var numTickets = 5;
var totalCost = ticketPrice * numTickets;
document.write("<p>The cost of buying " + numTickets + " tickets is " + totalCost + " PKR.</p>");

// 5. Write a script to display multiplication table of any
// number in your browser. E.g

var number = parseInt(prompt("Enter a number:"));
var table = document.createElement("table");
for (var i = 1; i <= 10; i++) {
    var row = document.createElement("tr");
    var multiplicandCell = document.createElement("td");
    multiplicandCell.textContent = number + " x " + i;
    row.appendChild(multiplicandCell);
    var productCell = document.createElement("td");
    productCell.textContent = number * i;
    row.appendChild(productCell);
    table.appendChild(row);
}

document.body.appendChild(table);

// 6. The Temperature Converter: It’s hot out! Let’s make a
// converter based on the steps here.
// a. Store a Celsius temperature into a variable.
// b. Convert it to Fahrenheit & output “NNoC is NNoF”.
// c. Now store a Fahrenheit temperature into a variable.
// d. Convert it to Celsius & output “NNoF is NNoC”.
// Conversion Formulae:

var celsius = 28;
var fahrenheit = (celsius * 9/5) + 32;
document.write("<p>" + celsius + "°C is " + fahrenheit + "°F</p>");

var fahrenheit2 = 82;
var celsius2 = (fahrenheit2 - 32) * 5/9;
document.write("<p>" + fahrenheit2 + "°F is " + celsius2 + "°C</p>");

// 7. Write a program to implement checkout process of a
// shopping cart system for an e-commerce website. Store
// the following in variables
// a. Price of item 1
// b. Price of item 2
// c. Ordered quantity of item 1
// d. Ordered Quantity of item 2
// e. Shipping charges
// Compute the total cost & show the receipt in your browser.

var priceItem1 = 1000;
var priceItem2 = 1500;
var quantityItem1 = 2;
var quantityItem2 = 1;

var subtotal = (priceItem1 * quantityItem1) + (priceItem2 * quantityItem2);
var shippingCharges = 200;

var totalCost = subtotal + shippingCharges;

document.write("<h2>Receipt</h2>");
document.write("<p>Price of Item 1: " + priceItem1 + " PKR</p>");
document.write("<p>Quantity of Item 1: " + quantityItem1 + "</p>");
document.write("<p>Price of Item 2: " + priceItem2 + " PKR</p>");
document.write("<p>Quantity of Item 2: " + quantityItem2 + "</p>");
document.write("<p>Subtotal: " + subtotal + " PKR</p>");
document.write("<p>Shipping Charges: " + shippingCharges + " PKR</p>");
document.write("<h3>Total Cost: " + totalCost + " PKR</h3>");

// 8. Store total marks & marks obtained by a student in 2
// variables. Compute the percentage & show the result in
// your browser

var totalMarks = 500;
var marksObtained = 430;

var percentage = (marksObtained / totalMarks) * 100;

document.write("<h2>Result</h2>");
document.write("<p>Total Marks: " + totalMarks + "</p>");
document.write("<p>Marks Obtained: " + marksObtained + "</p>");
document.write("<h3>Percentage: " + percentage + "%</h3>");

// 9. Assume we have 10 US dollars & 25 Saudi Riyals. Write a
// script to convert the total currency to Pakistani Rupees.
// Perform all calculations in a single expression.
// (Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee
// and 1 Saudi Riyal = 28 Pakistani Rupee)

function calculateTotal() {
    var usDollars = 10;
    var saudiRiyals = 25;
    var exchangeRateUSD = 104.80;
    var exchangeRateSAR = 28;
    
    var totalRupees = (usDollars * exchangeRateUSD) + (saudiRiyals * exchangeRateSAR);
    
    document.getElementById("result").innerHTML = "Total Amount in Pakistani Rupees: " + totalRupees.toFixed(2);
  }

//   10. Write a program to initialize a variable with some
// number and do arithmetic in following sequence:
// a. Add 5
// b. Multiply by 10
// c. Divide the result by 2
// Perform all calculations in a single expression

function performArithmetic() {
    var number = 10;
    var result = ((number + 5) * 10) / 2;
      
      document.getElementById("result").innerHTML = "Result: " + result; 
    }
    
    // 11. The Age Calculator: Forgot how old someone is?
    // Calculate it!
    // a. Store the current year in a variable.
    // b. Store their birth year in a variable.
    // c. Calculate their 2 possible ages based on the stored
    // values.
    // Output them to the screen like so: “They are either NN or NN
    // years old”.   
    
    function calculateAge() {
        var currentYear = new Date().getFullYear(); 
        var birthYear = document.getElementById("birthYear").value;
        var age1 = currentYear - birthYear;
        var age2 = age1 - 1;
        document.getElementById("result").innerHTML = "They are either " + age1 + " or " + age2 + " years old.";
    }
// 12. The Geometrizer: Calculate properties of a circle.
// a. Store a radius into a variable.
// b. Calculate the circumference based on the radius, and
// output “The circumference is NN”.
// (Hint : Circumference of a circle = 2 π r , π = 3.142)
// Calculate the area based on the radius, and output “The
// area is NN”. (Hint : Area of a circle = π r2, π = 3.142)

function calculateCircleProperties() {
    var radius = document.getElementById("radius").value; 

    var circumference = 2 * 3.142 * radius; 
    var area = 3.142 * radius * radius; 

    document.getElementById("result").innerHTML = "The circumference is " + circumference.toFixed(2) + " and the area is " + area.toFixed(2) + "."; // Display the calculated properties on the webpage
  }

// 13. The Lifetime Supply Calculator: Ever wonder how
// much a “lifetime supply” of your favorite snack is?
// Wonder no more.
// a. Store your favorite snack into a variable
// b. Store your current age into a variable.
// c. Store a maximum age into a variable.
// d. Store an estimated amount per day (as a number).
// e. Calculate how many would you eat total for the rest of
// your life.
// Output the result to the screen like so: “You will need
// NNNN to last you until the ripe old age of NN”.

function calculateLifetimeSupply() {
    var favoriteSnack = document.getElementById("favoriteSnack").value;
    var currentAge = document.getElementById("currentAge").value;
    var maximumAge = document.getElementById("maximumAge").value;
    var amountPerDay = document.getElementById("amountPerDay").value;
    var yearsRemaining = maximumAge - currentAge;
    var snacksPerLifetime = amountPerDay * 365 * yearsRemaining;
    document.getElementById("result").innerHTML = "You will need " + snacksPerLifetime + " " + favoriteSnack + " to last you until the ripe old age of " + maximumAge + ".";
}

