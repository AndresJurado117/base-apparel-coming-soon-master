let emailid = document.getElementById("email");
let erroricon = document.getElementById("error-icon");
let errormesage = document.getElementById("errormessage");

function validateEmail(input) {
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (input.value.match(validRegex)) {
        return true;
    } else {
        emailid.style.border="2px solid hsl(0, 100%, 50%)";
        erroricon.style.display="block";
        errormessage.style.display="block";
        return false;
    }
  }