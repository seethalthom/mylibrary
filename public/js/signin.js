var username = document.getElementById("username");
var password = document.getElementById("inputPassword");
var help = document.getElementById("help");
console.log(help.innerHTML)


function signin() {
    if (username.value == "admin" && password.value == "12345") {
        // alert("Enter Username as admin");
        // console.log(username.value)
        help.innerHTML = "";
        // callback();

        return true;
    } else {
        help.innerHTML = "Username:admin | Password:12345";
        help.style.color = "red";
        help.style.fontFamily = "Garamond, serif"
            // alert("Password : 12345");
        return false;
    }
}




// function display() {
//     window.open("#");
//     return true;
// }