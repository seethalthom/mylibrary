let inputEmail = document.getElementById("inputEmail");
let inputPassword1 = document.getElementById("inputPassword1");
let inputPassword2 = document.getElementById("inputPassword2");
var firstName = document.getElementById("firstName");
var help = document.getElementById("help");

function firstname() {
    if (firstName.value != "") {
        firstName.style.border = "2px solid green";
        return true;
    } else {
        firstName.style.border = "2px solid red";
        return false;
    }
}


function pass1() {
    let pwd = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    if (pwd.test(inputPassword1.value.trim()) == true && inputPassword1.value.trim() != "") {
        // alert("Weak Password");
        inputPassword1.style.border = "2px solid green";
        help.innerHTML = "";

        return true;
    } else {
        inputPassword1.style.border = "2px solid red";
        return false;
    }
}

function pass2() {
    let pwd = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    if (inputPassword1.value.trim() == inputPassword2.value.trim()) {
        inputPassword2.style.border = "2px solid green";
        return true;

    } else {
        inputPassword2.style.border = "2px solid red";
        return false;
    }
}

function mail() {
    let regexp = /^[^\W_](?:[\w.]*[^\W_])?@(?:\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.|(?:[\w-]+\.)+)(?:[a-zA-Z]{2,3}|[0-9]{1,3})\]?$/;
    if (regexp.test(inputEmail.value) == true) {
        // alert("Invalid email");
        inputEmail.style.border = "2px solid green";
        return true;
    } else {
        inputEmail.style.border = "2px solid red";
        return false;
    }
}

function validate() {

    if (firstname() && pass1() && pass2() && mail()) {
        return true;
    } else {
        return false;
    }

}