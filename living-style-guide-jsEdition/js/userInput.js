/**
JAMES ROWAN HEWITT S244387
* author: {james.hewitt}
* email: {jamesrowanhewitt@gmail.com}
* website: {https://jamesrowanhewitt.github.io/website/living-style-guide-jsEdition/}
*/

//SETUP VARIABLES
var submitBtn = document.signupForm.submitBtn; //1 set up variable for submit button
var uname = document.signupForm.uname; //2 setup username
var pword = document.signupForm.pword; //3 setup password
var pword2 = document.signupForm.pword2; //4 setup confirmation password
var phone = document.signupForm.phone; //5 setup phone
var email = document.signupForm.email; //6 setup email address
var country = document.signupForm.country; //7 setup country
var femaleBox = document.signupForm.femaleBox; //8 setup female checkbox
var maleBox = document.signupForm.maleBox; //9 setup male checkbox
var x = 0; //variable needed to determine if gender is checked or not

//EVENT LISTENERS
uname.addEventListener("blur", true);
pword.addEventListener("blur",  true);
pword2.addEventListener("blur",  true);
phone.addEventListener("blur",  true);
email.addEventListener("blur",  true);
femaleBox.addEventListener("blur",  true);
maleBox.addEventListener("blur",  true);
submitBtn.addEventListener("blur",  true);


//VALIDATION FUNCTION
/*
I decided to go with if statements for validaton instead of sepperate functions
this makes the code very compact and lightweight. Yet it still does full form
validation. Of course once you begin to add more forms this can be turned into a
function.
*/
function validate(){  
    
    if (uname.value ==""){
        alert("Username field is empty");
        uname.focus();
        return false;
    }
    if (pword.value ==""){
        alert("Password field is empty");
        pword.focus();
        return false;
    }
    if (pword2.value ==""){
        alert("Confirmation Password field is empty");
        pword2.focus();
        return false;
    }

    if(pword.value != pword2.value){
        alert("Passwords don't match");
        return false;
    }
    
    if (phone.value ==""){
        alert("Phone number field is empty");
        phone.focus();
        return false;
    }
        
    if (email.value == ""){
        window.alert("Email field is empty");
        email.focus();
        return false;
    }

    if (email.value.indexOf("@", 0) < 0){
        window.alert("Please enter a valid e-mail address.");
        email.focus();
        return false;
    }
    if (email.value.indexOf(".", 0) < 0){
        window.alert("Please enter a valid e-mail address.");
        email.focus();
        return false;
    }
    
    if (country.value=="Default"){
        alert("Please select a country");
        country.focus();
        return false;
    }
    if (maleBox.checked){
        x++;
        maleBox.focus();
    }
    if (femaleBox.checked){
        x++
        femaleBox.focus();
    }
    if (x==0){
        alert("Select male or female");
        return false;
    }else{
        return true;
    }
    
    
    }
    
 

