


function Validate(){
    
/*SETUP VARIABLES*/
  var submitBtn = document.signupForm.submitBtn; //1 set up variable for submit button
  var uname = document.signupForm.uname; //2 setup full name
  var phone = document.signupForm.phone; //3 setup phone
  var email = document.signupForm.email; //4 setup email address
/*EVENT LISTENERS*/
    
  uname.addEventListener("blur", true);
  phone.addEventListener("blur",  true);
  email.addEventListener("blur",  true);
  submitBtn.addEventListener("blur",  true);
    
    
    if (uname.value ==""){
        document.getElementById("errorMessage").innerHTML = ("Please enter a name");
        uname.focus();
        return false;
    }
    if (phone.value ==""){
        document.getElementById("errorMessage").innerHTML = ("Please enter a phone number");
        phone.focus();
        return false;
    }
    if (email.value == ""){
        document.getElementById("errorMessage").innerHTML = ("Please enter a email address");
        email.focus();
        return false;
    }
    if (email.value.indexOf("@", 0) < 0){
        document.getElementById("errorMessage").innerHTML = ("Please enter a valid email address");
        email.focus();
        return false;
    }
    if (email.value.indexOf(".", 0) < 0){
        document.getElementById("errorMessage").innerHTML = ("Please enter a valid email address");
        email.focus();
        return false;
    }/* Comment field doesnt need to be validated */

    }/* end of validate */
