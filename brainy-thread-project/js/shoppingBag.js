let bag = JSON.parse(localStorage.getItem('bag'));

let parent = document.getElementById('parent');

let total = 0;
let id = 0;

bag.forEach(function(element) {
    let card = document.createElement('div');
    card.setAttribute('class','card flex fjsb')
    let imgDiv = document.createElement('div');
    let img = document.createElement('img');
    img.src = element.imageIcon;
    imgDiv.appendChild(img);

    let descDiv = document.createElement('div');
    let nameDiv = document.createElement('div');
    nameDiv.innerHTML = `<p>${element.brand}</p><p>${element.name}</p>`;
    let insDiv = document.createElement('div');
    let staticDiv = document.createElement('div');
    let vanImgDiv = document.createElement('div');
    let deliveryDiv = document.createElement('div');
    deliveryDiv.innerHTML=`<h3>Delivery</h3><p>International orders usually arrive within 5–13 business days. We'll give you delivery dates in checkout.</p>`
    staticDiv.append(vanImgDiv,deliveryDiv)

    let buttonDiv = document.createElement('div')
    let removeButton = document.createElement('button')
    removeButton.setAttribute('class', 'mrOne')
    id++;
    
    removeButton.onclick = function () {
       let target = event.target
        let curParent = target.parentElement.parentElement.parentElement;
        // alert('Item saved in your wish list, Login to see items in the wish list')
        
        curParent.remove()
        let price = target.parentElement.parentElement.parentElement.childNodes[3].childNodes[0].textContent
        let newPrice = Number(price.split('$')[1])
        total = total - newPrice;
        totalDiv.innerHTML = `$${total}`
        
        
        
        if (total <= 0) {
            alert('Your cart is empty')
            alert('redirecting to shopping page')
            window.location.href='menClothing.html'
        }
       
    }
    
    
    
    removeButton.textContent='Remove'
    let saveButton = document.createElement('button');
    saveButton.onclick = function () {
        
       let target = event.target
        let curParent = target.parentElement.parentElement.parentElement;
        alert('Item saved in your wish list, Login to see items in the wish list')
        
        let price = target.parentElement.parentElement.parentElement.childNodes[3].childNodes[0].textContent
        let newPrice = Number(price.split('$')[1])
        total = total - newPrice;
        totalDiv.innerHTML = `$${total}`
        if (total <= 0) {
            alert('Your cart is empty Please login to see your cart items')
            window.location.href='Signup1.html'
        }
        curParent.remove()
    }
    saveButton.textContent = 'Save for later'
    buttonDiv.append(removeButton, saveButton);
    descDiv.append(nameDiv,insDiv,staticDiv,buttonDiv)


    let qtyDiv = document.createElement('div');
    qtyDiv.setAttribute('class','flex')
    let incDiv = document.createElement('div');
    incDiv.onclick = function () {
        curQuant++;
        quanP.innerHTML = curQuant;
        priceP.innerHTML = `$${price * curQuant}`
        total = total + (Number(price));
        totalDiv.innerHTML = `$${total}`
        
    }
    let incbut = document.createElement('button');
    incbut.setAttribute('class','padOne')
    incbut.textContent="+"
    incDiv.appendChild(incbut)
    let qunDiv = document.createElement('div');
    qunDiv.setAttribute('class','padOne')
    let quanP = document.createElement('p');
    qunDiv.appendChild(quanP)
    let curQuant = 1;
    quanP.innerHTML=curQuant
    let decDiv = document.createElement('div');
    decDiv.onclick = function () {
        curQuant--;
        if (curQuant > 0) {
            total = total - Number(price);
            
        }
        if (curQuant < 1) {
            curQuant = 1;
        }
        quanP.innerHTML = curQuant;
        priceP.innerHTML = `$${price * curQuant}`
        totalDiv.innerHTML = `$${total}`
        
    }
    let decbut = document.createElement('button');
    decbut.setAttribute('class','padOne')
    decbut.textContent="-"
    decDiv.appendChild(decbut)
    qtyDiv.append(incDiv,qunDiv,decDiv)
    


    let priceDiv = document.createElement('div');
    let priceP = document.createElement('p');
    let price = element.price;
    total = total + Number(price)
    priceP.innerHTML = `$${price*curQuant}`
    
    priceDiv.appendChild(priceP)

    card.append(imgDiv,descDiv,qtyDiv,priceDiv)
    parent.append(card)
});


let totalDiv = document.getElementById('total-div');
totalDiv.innerHTML = `$${total}`

