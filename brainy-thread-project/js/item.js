let item = JSON.parse(localStorage.getItem('item'));

let title = document.querySelector('title');
title.innerHTML = item.name;


let iconParent = document.getElementById('icon-parent');
let mainImage = document.getElementById('main-img');


appendItem(item.image,item.imageIcon,item.quickImage,item.quickImageIcon,item.videoIcon,item.rawMaterialImage,item.rawMaterialImageIcon)

function appendItem(i,ii,q,qi,vi,r,ri) {
    
let imageIcon = document.getElementById('img-icon')
imageIcon.onclick = function () {
    
    mainImg.src = i
    
}
imageIconImg = document.createElement('img');
imageIconImg.src = ii;
imageIcon.appendChild(imageIconImg)

let quickImageIcon = document.getElementById('quick-img-icon')
quickImageIcon.onclick=function(){
    mainImg.src = q;
    }
    
quickImageIconImg = document.createElement('img');
    quickImageIconImg.src = qi;
quickImageIcon.appendChild(quickImageIconImg)

let videoIcon = document.getElementById('video-icon')

videoIconImg = document.createElement('img');
    videoIconImg.src = vi;
videoIcon.appendChild(videoIconImg)

let rawMaterialImageIcon = document.getElementById('raw-icon')
rawMaterialImageIcon.onclick=function(){
    mainImg.src = r;
}
rawMaterialImageIconImg = document.createElement('img');
    rawMaterialImageIconImg.src = ri;
rawMaterialImageIcon.appendChild(rawMaterialImageIconImg)


let mainImg = document.createElement('img');
mainImg.src = i;
mainImage.appendChild(mainImg)


}


let sizeInform = document.getElementById('size-inform');
let info = item.sizeInfo;
let sizeUl = document.getElementById('size-ul')
for (let i = 0; i < info.length; i++){
   
    let li = document.createElement('li');
    li.innerText= info[i]
    sizeUl.appendChild(li)
    
}

let detailDisc = document.getElementById('detail-disc')
detailDisc.innerHTML = item.description;

let care = item.care;
let careUl = document.getElementById('care-ul');
for (let i = 0; i < care.length; i++){
    let li = document.createElement('li');
    li.innerHTML = care[i];
    careUl.appendChild(li)
}


let brandDesc = document.getElementById('brand-desc');
brandDesc.innerHTML=`<p> ${item.brandDesc}</p>`
let brandHead = document.getElementById('brand-head');
brandHead.innerHTML = `<h2>${item.brand}</h2>`




let raters = document.getElementById('raters');
raters.innerHTML = `(${item.raters})`

let name = document.getElementById('name');
name.innerHTML = item.name;

let brandName = document.getElementById('brand-name');
brandName.innerHTML = item.brand

let price = document.getElementById('price');
price.innerHTML = `INR ${item.price * 80}`;

let discount = 25;
let discountDiv = document.getElementById('discount');
discountDiv.innerHTML = `${discount}% off`;

let sp = document.getElementById('sprice');
let sellP = (100 - discount) / 100 * (item.price * 80);
sp.innerHTML=`INR ${sellP}`



function addToBag(e) {
    let bag;
    bag = localStorage.getItem('bag')
    
    if (bag == null) {
        bag = [];
    }
    else {
        bag = JSON.parse(localStorage.getItem('bag'))
    }
    
    bag.push(item);
    console.log('bag: ', bag);
    localStorage.setItem('bag',JSON.stringify(bag))
    

    window.location.href= "../html/shoppingBag.html"
}

let cTwo = document.getElementById('c2');
cTwo.style.backgroundColor = item.scolor;

cTwo.onclick = function () {
    let imageIcon = document.getElementById('img-icon')
    imageIcon.innerHTML = null;
    let quickImageIcon = document.getElementById('quick-img-icon')
    quickImageIcon.innerHTML = null;
    let videoIcon = document.getElementById('video-icon')
    videoIcon.innerHTML = null;
    let rawMaterialImageIcon = document.getElementById('raw-icon')
    rawMaterialImageIcon.innerHTML = null;
    
    mainImage.innerHTML = null;
    appendItem(item.cimage,item.cimageIcon,item.cquickImage,item.cquickImageIcon,item.videoIcon,item.crawMaterialImage,item.crawMaterialImageIcon)
    
}


let cOne = document.getElementById('c1');
cOne.style.backgroundColor = item.pcolor;

cOne.onclick = function () {
    let imageIcon = document.getElementById('img-icon')
    imageIcon.innerHTML = null;
    let quickImageIcon = document.getElementById('quick-img-icon')
    quickImageIcon.innerHTML = null;
    let videoIcon = document.getElementById('video-icon')
    videoIcon.innerHTML = null;
    let rawMaterialImageIcon = document.getElementById('raw-icon')
    rawMaterialImageIcon.innerHTML = null;
    
    mainImage.innerHTML = null;

    appendItem(item.image,item.imageIcon,item.quickImage,item.quickImageIcon,item.videoIcon,item.rawMaterialImage,item.rawMaterialImageIcon)

}


let quant = document.getElementById('quant');
let myQuant = 1;
quant.innerHTML = myQuant;

function incquant() {
    myQuant++;
    quant.innerHTML = myQuant;
}

function decquant() {
    myQuant--;
    if (myQuant < 1) {
        myQuant = 1;
    }
    quant.innerHTML = myQuant;
}