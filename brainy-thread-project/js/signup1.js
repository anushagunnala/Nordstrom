
var users_login_data = JSON.parse(localStorage.getItem("users_login_data")) || []
var current_email = JSON.parse(localStorage.getItem("current_email"))

function addemail() {
    var email = document.getElementById("email").value

    if (email == "") {
        alert("email is empety")
    } else {
        var res = false
        for (var i = 0; i < users_login_data.length; i++) {
            if (users_login_data[i].Email == email) {
                res = true
            }
        }

        // console.log(res)
        if (res == true) {
            window.location.href = "login.html"
        } else {
            function users(e) {
                this.Email = e
            }
            var user = new users(email)
            users_login_data.push(user)
            localStorage.setItem("users_login_data", JSON.stringify(users_login_data))
            localStorage.setItem("current_email", JSON.stringify(email))
            //  console.log(email,users_login_data)
            window.location.href = "Signup2.html"
        }

    }
}
