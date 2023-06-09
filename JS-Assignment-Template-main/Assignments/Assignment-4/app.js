                            // VARIABLE NAMES: LEGAL & ILLEGAL
// 1. Declare 3 variables in one statement.

var var1, var2, var3;

var1 = "Hello";
var2 = 42;
var3 = true;

function displayVariables() {
document.getElementById("output").innerHTML =
      "var1: " + var1 + "<br>" +
      "var2: " + var2 + "<br>" +
      "var3: " + var3;
  }

// 2. Declare 5 legal & 5 illegal variable names.

// 3. Display this in your browser
// a) A heading stating “Rules for naming JS variables”
// b) Variable names can only contain ______, ______,
// ______ and ______.
// For example $my_1stVariable
// c) Variables must begin with a ______, ______ or
// _____. For example $name, _name or name
// d) Variable names are case _________
// e) Variable names should not be JS _________

function displayRules() {
  var output = document.getElementById("output");
  var heading = document.createElement("h1");
  heading.textContent = "Rules for naming JS variables";
  output.appendChild(heading);
  var ruleB = document.createElement("p");
  ruleB.textContent = "Variable names can only contain letters, digits, underscores, and dollar signs. For example, $my_1stVariable";
  output.appendChild(ruleB);
  var ruleC = document.createElement("p");
  ruleC.textContent = "Variables must begin with a letter, underscore, or dollar sign. For example, $name, _name, or name";
  var ruleD = document.createElement("p");
  ruleD.textContent = "Variable names are case-sensitive";
  output.appendChild(ruleD);
  var ruleE = document.createElement("p");
  ruleE.textContent = "Variable names should not be JavaScript reserved keywords";
  output.appendChild(ruleE);
    }