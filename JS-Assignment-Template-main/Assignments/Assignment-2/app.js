                                // ASSIGNMENT NO 2 "VARIABLES FOR STRINGS"
// 1. Declare a variable called username:  

var username = "Mutiba";
console.log(username);

// 2. Declare a variable called myName & assign to it a string
// that represents your Full Name.

var myName = "Mutiba";
console.log(myName);

// 3. Write script to
// a) Declare a JS variable, titled message.
// b) Assign “Hello World” to variable message
// c) Display the message in alert box.

var message = "Hello World";
alert(message);

// 4. Write a script to save student’s bio data in JS variables and
// show the data in alert boxes.

        var firstName = "Mutiba";
        var lastName = "Akram";
        var age = 18;

        alert("First Name: " + firstName);
        alert("Last Name: " + lastName);
        alert("Age: " + age);


// 4. Write a script to save student’s bio data in JS variables and
// show the data in alert boxes.

var student = {
    firstName: "Mutiba",
    lastName: "Akram",
    age: 18,
    grade: "A"
};

alert("First Name: " + student.firstName);
alert("Last Name: " + student.lastName);
alert("Age: " + student.age);
alert("Grade: " + student.grade);

// 5. Write a script to display the following alert using one JS
// variable:
        
var alertMessage = "They don't really know you!";
alert(alertMessage);

// 6. Declare a variable called email and assign to it a string that
// represents your Email Address(e.g. example@example.com).
// Show the blow mentioned message in an alert box.(Hint: use
// string concatenation)

var email = "  theweekend@gmail.com";
var message = "Your email address is: " + email;
alert(message);

// 7. Declare a variable called book & give it the value “A
// smarter way to learn JavaScript”. Display the following
// message in an alert box:

var book = "A smarter way to learn JavaScript";
var message = "I recommend reading the book: " + book;
alert(message);

// 8. Write a script to display this in browser through JS

window.onload = function() {
var message = "Hello, world!";
document.getElementById("message").innerText = message;
};

// 9. Store following string in a variable and show in alert and
// browser through JS
// “▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬”


var myString = "▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬";
alert(myString);

window.onload = function() {
document.getElementById("myString").innerText = myString;
};

