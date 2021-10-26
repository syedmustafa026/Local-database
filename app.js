
function stor() {

    var userName = document.getElementById("username")
    var name = document.getElementById('email');
    var pw = document.getElementById('password');
    var email_validator_regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    var lowerCaseLetters = /[a-z]/g;
    var upperCaseLetters = /[A-Z]/g;
    var numbers = /[0-9]/g;

    if (name.value.length == 0) {
        alert('Please fill in email');

    } else if (pw.value.length == 0 || pw.value.length < 5) {
        alert('Password minimum leght will be 6 with atleast contain a number');

    } else if (name.value.length == 0 && pw.value.length == 0) {
        alert('Password And Username Min lenght will be 6');


    } else if (!pw.value.match(numbers)) {
        alert('The password should contain atleast a number ');

    } else if (!name.value.match(email_validator_regex)) {
        alert("Please fill Correct Email")
    }
    else if (userName.value.length < 5) {
        alert("Please fill At least 6 letters in UserName ")
    }
    else {
        localStorage.setItem('userName', userName.value)
        localStorage.setItem('name', name.value);
        localStorage.setItem('pw', pw.value);
        alert('Your account has been created');
        window.location.href = "login.html"

        if (localStorage.getItem('userName' == 0)) {
            var users = []
            // localStorage.setItem('userName', 'pw', 'name', [])
            localStorage.setItem('userName', userName.value)
        localStorage.setItem('name', name.value);
        localStorage.setItem('pw', pw.value);
        }

        var oldData = JSON.parse(localStorage.getItem('userName', 'pw', 'name'))

        
        oldData.push(users)
        localStorage.setItem('userName', 'pw', 'name', JSON.stringify(oldData))
    }


}

//checking
function check() {
    var storedName = localStorage.getItem('name');
    var storedPw = localStorage.getItem('pw');
    var storeUser = localStorage.getItem('userName')

    var userName = document.getElementById('emailcheck');
    var userPw = document.getElementById('passwordcheck');
    var userRemember = document.getElementById("rememberMe");

    if (userName.value == storedName && userPw.value == storedPw) {
        alert('You are logged in.');
        window.location.href = "home.html"

    }
    else if (userName.value !== storedName && userPw.value !== storedPw) {
        alert("Invalid Email or Password! please signup first")
    }


}










var storeUser = localStorage.getItem('userName')
var welcome = document.getElementById("h1")



function logOut() {
    window.location.href = "login.html"
}

function enter(code) {
    if (code.keyCode === 13) {
        add()
    }
}



//multi users


