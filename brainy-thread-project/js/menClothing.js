
let parent = document.getElementById('parent');
    

let original = JSON.parse(localStorage.getItem('clothes'));
let itemavailableP = document.getElementById('item-available');
let itemavailable = 0;
itemavailableP.innerHTML = `${itemavailable} items`;
appendItem(original);


function appendItem(data) {
    
    
    data.forEach(function (element) {
        itemavailable++;
        itemavailableP.innerHTML = `${itemavailable} items`;
        let card = document.createElement('div');
        card.setAttribute('class','card')
        let imgcard = document.createElement('div');
        imgcard.setAttribute('class','img-card hp')
        let imgDiv = document.createElement('div');
        imgDiv.setAttribute('class', 'img-div');
        imgDiv.onclick = function () {
            let item = localStorage.getItem('item');
            item = null;
            localStorage.setItem('item',JSON.stringify(element))
            
            
            window.location.href = "../html/item.html"
            
        }    
        let img = document.createElement('img');
    
        img.src = element.image;
        imgDiv.appendChild(img);
        let quickDiv = document.createElement('div');
        quickDiv.setAttribute('class','quick-Div')
        imgcard.append(imgDiv,quickDiv)
        img.onmouseenter = function () {
            img.src = element.quickImage;
        }
        img.onmouseleave = function () {
            img.src = element.image;
        }

        let desCard = document.createElement('div');
        desCard.setAttribute('class','des-card')
        
        let colorSelector = document.createElement('div');
        colorSelector.setAttribute('class', 'color-selector flex mrOne')

        let pcsDiv = document.createElement('div')
        pcsDiv.setAttribute('class','csbtn hp')
        let pcs = document.createElement('div');
        pcs.onclick= function (){
            img.src = element.image;
        }
        pcs.setAttribute('class', 'mbtn');
        pcs.style.backgroundColor = element.pcolor;
        pcsDiv.appendChild(pcs)

        let scsDiv = document.createElement('div')
        scsDiv.setAttribute('class','csbtn hp')
        let scs = document.createElement('div')
        scs.onclick= function (){
            img.src = element.cimage;
        }
        scs.setAttribute('class','mbtn')
        scs.style.backgroundColor = element.scolor;
        scsDiv.appendChild(scs)
        
        colorSelector.append(pcsDiv,scsDiv);
        
        let tagDiv = document.createElement('div');
        tagDiv.setAttribute('class','tag-div')
        let tag = document.createElement('p');
        
        tag.innerHTML = `${element.tag}`;
        tagDiv.appendChild(tag);

        let nameDiv = document.createElement('div');
        nameDiv.setAttribute('class','name-div')
        let name = document.createElement('p');
        
        name.innerHTML = `${element.brand} ${element.name}`
        nameDiv.appendChild(name);
        
        let priceDiv = document.createElement('div');
        priceDiv.setAttribute('class','price-div')
        let price = document.createElement('p');
        
        price.innerHTML = `INR ${element.price*80}`;
        priceDiv.append(price);

        let ratingDiv = document.createElement('div');
        ratingDiv.setAttribute('class','rating-div')
        let rating = document.createElement('p');
        let actualRate = Number(element.rating);
        
        let ratingString = "";
        for (let i = 0; i < actualRate; i++){
            ratingString= ratingString+"*"+" "
        }
        
        rating.innerHTML = `${ratingString} (${element.raters})`;
        ratingDiv.appendChild(rating);
        
        desCard.append(colorSelector, tagDiv, nameDiv, priceDiv,ratingDiv);

        card.append(imgcard, desCard);
        parent.appendChild(card)
    })
}


function sorting() {
    let sortValue = document.getElementById("sort").value;
    switch (sortValue) {
        case "1":
            sortOriginal();
            break;
        case "2":
            sortRating();
            break;
        case "3":
            sortphl();
            break;
        
        case "4":
            sortplh();
            break
    }
        
}

function sortOriginal() {
    parent.innerHTML = null;
    appendItem(original)
}


function sortRating() {
    parent.innerHTML = null;
    let newData = JSON.parse(localStorage.getItem('clothes'));
    newData.sort(function (a, b) {
        return  b.rating - a.rating;
    })
    appendItem(newData)
    
}
function sortplh() {
    parent.innerHTML = null;
    let newData = JSON.parse(localStorage.getItem('clothes'));
    newData.sort(function (a, b) {
        return a.price - b.price;
    })
    appendItem(newData)
    
}

function sortphl() {
    parent.innerHTML = null;
    let newData = JSON.parse(localStorage.getItem('clothes'));
    newData.sort(function (a, b) {
        return b.price - a.price;
    })
    appendItem(newData)
    
}


let sort = document.getElementById('sort');
sort.onclick = function () {
    itemavailable = 0;
    sorting()
};

// let itemavailableP = document.getElementById('item-available');
// itemavailableP.innerHTML = `${itemavailable} items`;

// sidebar filters visible

let addPlus = document.getElementsByClassName('add-sign');
for (let i = 0; i < addPlus.length; i++){
    // addPlus[i].parentElement.parentElement.nextElementSibling.style.display="block"
    addPlus[i].onclick = function () {
        addPlus[i].parentElement.parentElement.nextElementSibling.style.display = "block"
        // console.log('addPlus[i]: ', addPlus[i]);
        // addPlus[i].after.style.content= '002D'
        
            // window.onclick = function(event) {
            // if (event.target == addPlus[i]) {
            //     addPlus[i].parentElement.parentElement.nextElementSibling.style.display = "none"
            // }
            // }
    }
    
}

// side bar filtering

let activwear = document.getElementById('activewear');

activwear.onclick = function () {
    let filteredItems = JSON.parse(localStorage.getItem('clothes'))
    itemavailable = 0;
    
    let filteredclothes = filteredItems.filter(function (cloth) {
        return cloth.category=="Activewear"
    })
    
    parent.innerHTML = null;
    appendItem(filteredclothes)
}

let shirt = document.getElementById('shirt');

shirt.onclick = function () {
    let filteredItems = JSON.parse(localStorage.getItem('clothes'))
    itemavailable = 0;
    
    let filteredclothes = filteredItems.filter(function (cloth) {
        return cloth.category=="Shirts"
    })
    
    parent.innerHTML = null;
    appendItem(filteredclothes)
}

let suit = document.getElementById('suit');

suit.onclick = function () {
    let filteredItems = JSON.parse(localStorage.getItem('clothes'))
    itemavailable = 0;
    
    let filteredclothes = filteredItems.filter(function (cloth) {
        return cloth.category=="Suits & Separates"
    })
    
    parent.innerHTML = null;
    appendItem(filteredclothes)
}

let hoodie = document.getElementById('hoodie');

hoodie.onclick = function () {
    let filteredItems = JSON.parse(localStorage.getItem('clothes'))
    
    itemavailable = 0;
    let filteredclothes = filteredItems.filter(function (cloth) {
        return cloth.category=="Sweatshirts & Hoodies"
    })
    
    parent.innerHTML = null;
    appendItem(filteredclothes)
}

let cotton = document.getElementById('cotton');

cotton.onclick = function () {
    let filteredItems = JSON.parse(localStorage.getItem('clothes'))
    itemavailable = 0;
    
    let filteredclothes = filteredItems.filter(function (cloth) {
        return cloth.material=="100% cotton"
    })
    
    parent.innerHTML = null;
    appendItem(filteredclothes)
}

let linen = document.getElementById('linen');

linen.onclick = function () {
    let filteredItems = JSON.parse(localStorage.getItem('clothes'))
    itemavailable = 0;
    
    let filteredclothes = filteredItems.filter(function (cloth) {
        return cloth.material=="100% Linen"
    })
    
    parent.innerHTML = null;
    appendItem(filteredclothes)
}

let denim = document.getElementById('denim');

denim.onclick = function () {
    let filteredItems = JSON.parse(localStorage.getItem('clothes'))
    itemavailable = 0;
    
    let filteredclothes = filteredItems.filter(function (cloth) {
        return cloth.material == "Denim";
    })
    
    parent.innerHTML = null;
    appendItem(filteredclothes)
}


