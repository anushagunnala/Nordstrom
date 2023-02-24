// console.log(productArr)
var productArr = localStorage.getItem("productlist")
productArr = JSON.parse(productArr)
function showproduct(data) {

    var parent = document.getElementById("display")
    parent.innerHTML = ""
    // var btnsortlow=document.createElement("button")
    // btnsortlow.textContent="Sort by Low To Hign"
    // var btnsorthigh=document.createElement("button")
    // btnsorthigh.textContent="Sort By High To Low"


    data.forEach(function (el) {
        // console.log(el.Name)

        // if (el.Subcategory == footwear) {
            var div = document.createElement("div")
            div.setAttribute("class", "productbox")

            var p1 = document.createElement("p")
            p1.textContent = `Name: ${el.Name}`

            var p2 = document.createElement("p")
            p2.textContent = `Price: ${el.Price}`

            var p3 = document.createElement("p")
            p3.textContent = `Category: ${el.Category}`

            var p4 = document.createElement("p")
            p4.textContent = `SubCategory${el.Subcategory}`

            var p5 = document.createElement("p")
            p5.textContent = `Description${el.Description}`

            var img = document.createElement("img")
            img.src = el.Image

            var btn = document.createElement("button")
            btn.textContent = "Add To Cart"
            btn.style.display = 'block'
            btn.onclick = function () {
                addtocart(el)
            }
            div.append(img, p1, p2, btn)
            parent.append(div)
        // }

        // console.log(p1, p2, p3, p4, img)

        // console.log(el.Subcategory)

    })

}
showproduct(productArr)

function addtocart(el) {
    let arr = localStorage.getItem('productCart') //|| []
    if (arr == null) {
        arr = []
        arr.push(el)
        localStorage.setItem('productCart', JSON.stringify(arr))

    } else if (arr.length > 0) {
        arr = JSON.parse(arr)
        var res = true
        for (var i = 0; i < arr.length; i++) {
            if (arr[i].Name == el.Name) {
                res = false
                alert("this product is already add")
                break;
            }
        }

        if (res == true) {
            arr.push(el)
            localStorage.setItem('productCart', JSON.stringify(arr))
        }
    }

}


function Sorthigh() {
    productArr = productArr.sort(function (a, b) {
        return a.Price - b.Price
    })
    showproduct(productArr)
}

function Sortlow() {
    productArr = productArr.sort(function (a, b) {
        return b.Price - a.Price
    })
    showproduct(productArr)
}
// function sortLH() {
//     productlist = productlist.sort(function (a, b) {
//         return a.IMDbRating - b.IMDbRating
//     })
//     showmovies(productlist)
// }
// function sortHL() {
//     productlist = productlist.sort(function (a, b) {
//         return b.IMDbRating - a.IMDbRating
//     })
//     showmovies(productlist)
// }


