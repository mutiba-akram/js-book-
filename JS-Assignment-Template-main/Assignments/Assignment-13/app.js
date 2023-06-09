                                              //DATE METHODS//

// 1. Write a program that displays current date and time in 
// your browser.

var currentDate = new Date();
var date = currentDate.toLocaleDate();
var time = currentDate.toLocaleTime();
document.write("Current date: " + date + "<br>");
document.write("Current time: " + time);

// // 2. Write a program that alerts the current month in words. 
// For example December.

var currentDate = new Date();
var monthIndex = currentDate.getMonth();
var monthNames = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
var currentMonth = monthNames[monthIndex];
alert("Current month: " + currentMonth);

// // 3. Write a program that alerts the first 3 letters of the current
// // day

var currentDate = new Date();
var dayIndex = currentDate.getDay();
var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
var currentDay = dayNames[dayIndex];
alert("Current day: " + currentDay);

// // 4. Write a program that displays a message “It’s Fun day” if 
// // its Saturday or Sunday today.

var currentDate = new Date();
currentDate.toString;
var dayindex = currentDate.toString();
var day = dayindex.slice(0,3);
if (day === "Sat"){
    alert("It's Fun Day")
}else if(c === "Sun"){
    alert("It's Fun Day")
}

// // 5. Write a program that shows the message “First fifteen 

var currentDate = new Date();
var date = currentDate.getDate();
if (date < 16) {
  alert("First fifteen days of the month");
} else {
  alert("Last days of the month");
}

// // 6. Write a program that determines the minutes since 
// // midnight, Jan. 1, 1970 and assigns it to a variable that 
// // hasn't been declared beforehand.

var now = new Date();
var millisecondsSince1970 = now.getTime();
var minutesSince1970 = Math.floor(millisecondsSince1970 / (1000 * 60));
console.log(minutesSince1970);

// // 7. Write a program that tests whether it's before noon and 
// // alert “Its AM” else “its PM”.

var currentTime = new Date();
var hour = currentTime.getHours();
if (hour < 12) {
  alert("IT'S AM");
} else {
  alert("IT'S PM");
}

// // 8. Write a program that creates a Date object for the last day 
// // of the last month of 2020 and assigns it to variable named 
// // laterDate.

var laterDate = new Date(2020, 11, 31);
console.log(laterDate);

// // 9. Create a date object of the starting date of this Ramadan 
// // and alert the number of days past since 1st Ramadan?

var startingDate = new Date(2023, 3, 18);
var currentDate = new Date();
var timeDiff = currentDate.getTime() - startingDate.getTime();
var daysPassed = Math.floor(timeDiff / (1000 * 60 * 60 * 24));


// // 10. Write a program that displays in your browser the 
// // seconds that elapsed between the reference date and the 
// // beginning of 2015.

var referenceDate = new Date("January 1, 1970");
var beginningOf2015 = new Date("January 1, 2015");
var timeDiff = (beginningOf2015.getTime() - referenceDate.getTime()) / 1000;
alert("Seconds elapsed between the reference date and the beginning of 2015: " + timeDiff + " seconds");

// // 11. Create a Date object for the current date and time. 
// // Extract the hours, reset the date object an hour ahead and 
// // finally display the date object in your browser.

var currentDate = new Date();
var currentHours = currentDate.getHours();
currentDate.setHours(currentHours + 1);
document.write("Updated Date and Time: " + currentDate);

// // 12. Write a program that creates a date object and show the 
// // date in an alert box that is reset to 100 years back?

var currentDate = new Date();
currentDate.setFullYear(currentDate.getFullYear() - 100);
alert("Date Reset To 100 Years Back: " + currentDate);

// // 13. Write a program to ask the user about his age. Calculate 
// // and show his birth year in your browser.

var age = prompt("What is your age?");
var currentYear = new Date().getFullYear();
var birthYear = currentYear - age;
alert("Your birth year is: " + birthYear);

// // // 14. Write a program to generate your K-Electric bill in your
// // // browser. All the amounts should be rounded off to 2 
// // // decimal places.

// a. Customer Name
var customerName = prompt("Enter customer name:");
// b. Current Month
var currentMonth = prompt("Enter current month:");
// c. Number of Units
var numberOfUnits = parseFloat(prompt("Enter number of units:"));
// d. Charges per Unit
var chargesPerUnit = parseFloat(prompt("Enter charges per unit:"));
// e. Net Amount Payable (within Due Date)
var netAmountPayable = numberOfUnits * chargesPerUnit;
// f. Late Payment Surcharge
var latePaymentSurcharge = parseFloat(prompt("Enter late payment surcharge:"));
// g. Gross Amount Payable (after Due Date)
var grossAmountPayable = netAmountPayable + latePaymentSurcharge;
// Where,
// Net Amount Payable (within Due Date) = Number of units * Charges per unit
// & Gross Amount Payable (after Due Date) = Net Amount + Late Payment Surcharge
document.write("<h1>K-Electric Bill</h1>");
document.write("<p>Customer Name: " + customerName + "</p>");
document.write("<p>Current Month: " + currentMonth + "</p>");
document.write("<p>Number of Units: " + numberOfUnits.toFixed(2) + "</p>");
document.write("<p>Charges per Unit: " + chargesPerUnit.toFixed(2) + "</p>");
document.write("<p>Net Amount Payable (within Due Date): " + netAmountPayableWithinDueDate + "</p>");
document.write("<p>Late Payment Surcharge: " + latePaymentSurcharge.toFixed(2) + "</p>");
document.write("<p>Gross Amount Payable (after Due Date): " + grossAmountPayable.toFixed(2) + "</p>");