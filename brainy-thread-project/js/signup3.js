
var users_login_data = JSON.parse(localStorage.getItem("users_login_data")) || []
var current_email = JSON.parse(localStorage.getItem("current_email"))

// console.log(users_login_data)

function showfirstname() {
    var welcome = document.getElementById("welcome")
    users_login_data.forEach(function (el) {
        // console.log(el)
        if (el.Email == current_email) {
            var p = document.createElement("p")
            p.textContent = `Welcome ${el.first_name}`
            welcome.append(p)
        }

    })
}
showfirstname()

function laststep() {
    var mob = document.getElementById("m_number").value

    users_login_data.forEach(function (el) {
        if (el.Email == current_email && mob.length >= 10) {
            el.mobile = mob

        }
        // window.location.href = "showproduct.html"
    })
    window.location.href = "menClothing.html"

    localStorage.setItem("users_login_data", JSON.stringify(users_login_data))
}
