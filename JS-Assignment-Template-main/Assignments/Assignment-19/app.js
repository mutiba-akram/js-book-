//1 Consider you have following code snippet: (Copy it in your HTML file)
 //<div>
 //<h1> DOM </h1>
 //<div id=”form-content” class=”content”>
 //<label for=”first-name”>First Name</label>
 //<input type=”text” id=”first-name” />
 //<label for=”last-name”>Last Name</label>
 //<input type=”text” id=”last-name” />
 //<label for=”email”>Email</label>
 //<input type=”text” id=”email” />
 //</div>
 //<div id=”main-content” class=”content”>
 //<p class=”render”> First Name : Alex</p>
 //<p class=”render” id=”lastName”>Last Name: Bank</p>
 //<p class=”render”> Email : alexbank@example.com</p>
 //<p class=”render”> Country : Pakistan </p>
 ///<p class=”render”> contact : +92 300 1234567</p>
 //</div>
 //</div>


// i. Get element of id “main-content” and assign them in a variable.

var content= document.getElementById('main-content');
console.log(content);

 //ii. Display all child elements of “main-content” element.

 var child_Elements = mainContent.children;
 console.log(child_Elements);

 //iii. Get all elements of class “render” and show their innerHTML  in browser.

 var render_Elements = document.getElementsByClassName("render");
for (var i = 0; i < render_Elements.length; i++) {
console.log(render_Elements[i].innerHTML);
}

//iv. Fill input value whose element id first-name using javascript.

var firstName = document.getElementById("first-name");
firstName.value = "John";

 //v. Repeat part iv for id ”last-name” and “email”.

 var lastName= document.getElementById("last-name");
 var email = document.getElementById("email");
 lastName.value = "Doe";

 // 2. use HTML code of question 1 and show the result on browser.
 
// i. What is node type of element having id “form-content”.
document.write(document.getElementById("form-content").nodeType);
// ii. Show node type of element having id “lastName” and its child node.

var lastName = document.getElementById("lastName");
document.write(lastName.nodeType);
document.write(lastName.childNodes[0].nodeType);

// iii. Update child node of element having id “lastName”.

var lastName = document.getElementById("lastName");
lastName.childNodes[0].nodeValue = "Smith";


// iv. Get First and last child of id “main-content”.

var mainContent = document.getElementById("main-content");
document.write(mainContent.firstChild);
document.write(mainContent.lastChild);


// v. Get next and previous siblings of id “lastName”.

var lastName = document.getElementById("lastName");
document.write(lastName.nextSibling);
document.write(lastName.previousSibling);


// vi. Get parent node and node type of element having id “email”

var email = document.getElementById("email");
document.write(email.parentNode);
document.write(email.nodeType);