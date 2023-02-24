
var users_login_data = JSON.parse(localStorage.getItem("users_login_data")) || []
var current_email = JSON.parse(localStorage.getItem("current_email"))

function displayemail() {
    var displayemail = document.getElementById("displayemail")
    displayemail.innerHTML=null
    // var p = document.createElement("p")
    // p.textContent = `Email: ${current_email}`
    displayemail.append(current_email)
}
displayemail()

function login() {
    var password = document.getElementById("password").value
    users_login_data.forEach(function (el) {
        // console.log(el.password)
        if (el.password == password) {
            window.location.href = "../index.html"
            
        }
    })
}
login()