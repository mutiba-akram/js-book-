                                         //Events 

//Q1   Create a signup form and display form data in your web 
//page on submission

function callvalue() {
    var n =document.getElementById("uname").value;
    var email  =document.getElementById("email").value;
    var passward =document.getElementById("passward").value;
}



//Q2   Suppose in your webpage there is content area in which 
//you have entered your item details, but user can only see 
//some details on first look. When user clicks on “Read 
//more” button, full detail of that particular item will be 
//displayed.

function readMore() {
    document.getElementById('para').innerText += "Fruit and vegetables should be an important part of your daily diet. They are naturally good and contain vitamins and minerals that can help to keep you healthy. They can also help protect against some diseases.Fruits and vegetables contain important vitamins, minerals and plant chemicals. "
}

//Q3  In previous assignment you have created a tabular data 
//using javascript. Let’s modify that. Create a form which 
//takes student’s details and show each student detail in 
//table. Each row of table must contain a delete button and 
//an edit button. On click on delete button entire row should 
//be deleted. On click on edit button, a hidden form will 
//appear with the values of that row


function edit_row(no)
{
 document.getElementById("edit_button"+no).style.display="none";
 document.getElementById("save_button"+no).style.display="block";
	
 var name=document.getElementById("name_row"+no);
 var grades=document.getElementById("grades_row"+no);
 var age=document.getElementById("age_row"+no);
	
 var name_data=name.innerHTML;
 var grades_data=grades.innerHTML;
 var age_data=age.innerHTML;
	
 name.innerHTML="<input type='text' id='name_text"+no+"' value='"+name_data+"'>";
 grades.innerHTML="<input type='text' id='grades_text"+no+"' value='"+grades_data+"'>";
 age.innerHTML="<input type='text' id='age_text"+no+"' value='"+age_data+"'>";
}

function delete_row(no)
{
 document.getElementById("row"+no+"").outerHTML="";
}