var cartproduct = localStorage.getItem("bag")
cartproduct = JSON.parse(cartproduct)
// console.log(cartproduct)

function bagshow() {
    var parent = document.getElementById("bagshow")
    cartproduct.forEach(function (el) {
        // console.log(el)
        var div = document.createElement("div")
        div.setAttribute("class", "productdiv")
        var p1 = document.createElement("p")
        var p2 = document.createElement("p")
        var p3 = document.createElement("p")
        var img = document.createElement("img")
        img.src = el.image
        p1.textContent = `Name ${el.name}`
        p2.textContent = `price =$ ${el.price}`
        p3.textContent = `size ${el.size}`

        div.append(img, p1, p2, p3)
        parent.append(div)
    })
}
bagshow()







function addprice() {
    // var parent = document.getElementById("price-layout")
    var items_price = document.getElementById("items_price")
    var Shipping_fee = document.getElementById("Shipping_fee")
    var taxes = document.getElementById("taxe")
    var total = document.getElementById("total")
    var sum = 0;
    cartproduct.forEach(function (el) {
        // console.log(el.Price)
        sum += Number(el.price)
    })
    var taxe = sum * (18 / 100)
    var shipping = 100
    var totalprice = taxe + sum + shipping


    // console.log(sum, taxe, shipping, totalprice)
    items_price.append(`Items Price:- $ ${sum}`)
    Shipping_fee.append(`Shipping fee:-       $ ${shipping}`)
    taxes.append(`Taxe GST 18%:-           $ ${taxe}`)
    total.append(`Total Cart Price:-        $ ${totalprice}`)
    // total.append(total)
}
addprice()

function promocode() {
    var promo = document.getElementById("promo").value
    var total = document.getElementById("total")
    // console.log("tausif", promo)
    var sum = 0;
    cartproduct.forEach(function (el) {
        // console.log(el.Price)
        sum += Number(el.price)
    })
    // console.log(sum)
    var taxe = sum * (18 / 100)
    var shipping = 200
    var totalprice = taxe + sum + shipping

    if (promo == "masai30") {
        var dis = (totalprice * 30) / 100
        var finalsum = totalprice - dis
       total.textContent = `Total Cart Price:- $  ${finalsum}`
    } else {
        alert("Type Correct Promo Code")
    }

}
// promocode()

function usersAdd() {
    var parent = document.getElementById("showaddress")


    var first_name = document.getElementById("first_name").value
    var last_name = document.getElementById("last_name").value
    var email = document.getElementById("email").value
    var address_1 = document.getElementById("address_1").value
    var address_2 = document.getElementById("address_2").value
    var postal_code = document.getElementById("postal_code").value
    var city = document.getElementById("city").value
    var region = document.getElementById("region").value
    var Phone = document.getElementById("Phone").value
    var location = document.getElementById("location").value

    // console.log(email, first_name, last_name, address_1, address_2, postal_code, city, region, Phone, location)
    var p1 = document.createElement("p")
    p1.textContent = `${first_name + last_name}`
    var p2 = document.createElement("p")
    p2.textContent = `${address_1}`
    var p3 = document.createElement("p")
    p3.textContent = `${postal_code}`
    var p4 = document.createElement("p")
    p4.textContent = `${city}`
    var p5 = document.createElement("p")
    p5.textContent = `${Phone}`
    var p6 = document.createElement("p")
    p6.textContent = `${location}`
    var h3 = document.createElement("h3")
    h3.textContent = `DELIVERY ADDRESS:`
    parent.append(p1, p2, p3, p4, p5, p6)
}

function getcard() {
    var address = document.getElementById("address")

    var card = document.getElementById("card").value

    var cardnum = document.getElementById("cardnum").value
    var exp = document.getElementById("exp").value
    var secode = document.getElementById("secode").value

    var sendbill = document.getElementById("sendBill")
    var sendalert = document.getElementById("sendalert")

    // console.log(cardnum, exp, secode)
    // var res
    if (cardnum == "" || exp == "" || secode == "") {
        alert("all input is mendatery")
    } else if (cardnum.length == "16" && exp.length == "4" && secode.length == "3") {
        // alert("payment successful")
        showmsg()
    } else {
        alert("input is wrong")
    }
    // console.log(res)

}

// getcard()





function showmsg() {
    const masg = ["payment successful", "your order is confirmed", "your order is packed", " your order is waiting for carrier pickup",
        "your order is arrived at your local courier center", "your order is out for delivery", "your order is delivered"]
    // console.log(carousel)

    // var timer = function () {
    let j = 0;
    var timer =
        setInterval(function () {

            var parent = document.getElementById("masg")
            parent.innerHTML = null
            var div = document.createElement("div")
            div.setAttribute("class", "slidebox")

            // var img = document.getElementById("src")
            var p = document.createElement("h1")

            if (j == masg.length - 1) {
                // j = 0
            }

            // p.textContent=
            // console.log(masg[j])
            parent.append(masg[j] + " ")

            j++
            // img.setAttribute("src", carousel[j])
            // img.append(img)
        }, 2000)
    setTimeout(function () {
        clearInterval(timer)
    }, 14000)


    // clearInterval(timer)


}
// showmsg()

