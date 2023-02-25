
var users_login_data = JSON.parse(localStorage.getItem("users_login_data")) || []
var current_email = JSON.parse(localStorage.getItem("current_email"))

//  localStorage.setItem("users_login_data", JSON.stringify(users_login_data))
//  console.log(users_login_data)

function displayemail() {
    var displayemail = document.getElementById("displayemail")
    // var p = document.createElement("p")
    // p.textContent = `Email: ${current_email}`
    displayemail.append(current_email)
}
displayemail()

function createaccoun() {
    var first_name = document.getElementById("fname").value
    var last_name = document.getElementById("lname").value
    var password = document.getElementById("password").value
    // users_login_data.forEach(function (el) {
    // })
    if (first_name == "" || last_name == "" || password == "") {
        alert("fill all the input ")
    } else {
        for (var i = 0; i < users_login_data.length; i++) {
            if (users_login_data[i].Email == current_email) {
                users_login_data[i].first_name = first_name
                users_login_data[i].last_name = last_name
                users_login_data[i].password = password

            }
        }
       
        // users_login_data = JSON.parse(localStorage.getItem("users_login_data"))
        window.location.href = "Signup3.html"
    }
     localStorage.setItem("users_login_data", JSON.stringify(users_login_data))

}
