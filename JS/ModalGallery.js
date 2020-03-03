var ImageModal = document.getElementById("ImageModal");
var CartModal = document.getElementById("CartModal");

let DressName = ["Mini Dress", "Tie Dress", "Hem Dress", "Babydoll Dress", "Swing Dress"];
let PoloName = ["Long Sleeves Polo Shirt", "Fit Polo Shirt", "Ombre Polo Shirt", "Mesh Polo Shirt", "Pima Polo Shirt"];
let DressImages = ["dress1_p1.png","dress2_p1.png","dress3_p1.png","dress4_p1.png","dress5_p1.png"];
let PoloImages = ["polo1_p1.png","polo2_p1.png","polo3_p1.png","polo4_p1.png","polo5_p1.png"];
let Prices = ["P100.00","P150.00","P200.00","P250.00","P300.00"];

// Get the <span> element that closes the modal
var close1 = document.getElementsByClassName("close")[0];
var close2 = document.getElementsByClassName("close")[1];
var dressCounter = "";
var Counter = "";
var dress = document.getElementById("cartDress");
var dress1 = document.getElementById("cartDress1");
var dress2 = document.getElementById("cartDress2");
var dress3 = document.getElementById("cartDress3");
var CartAdd = document.getElementById("CartAdd");
var CartDiv = document.getElementById("CartDiv");

let Cart = [];

CartAdd.onclick = function () {
  Cart.push(dressCounter);
  var x = document.createElement("IMG");
  
  x.setAttribute("alt", Cart[Counter-1]);
  x.setAttribute("class","dress zone");

  var y = document.createElement("H4");
  var z = document.createElement("H3");
  z.innerHTML = Prices[Counter-1];

  if(dressCounter.includes("polo")) {
    x.setAttribute("src", "Images/"+PoloImages[Counter-1]);
    y.innerHTML = PoloName[Counter-1];
  }
  else if(dressCounter.includes("dress")) {
    x.setAttribute("src", "Images/"+DressImages[Counter-1]);
    y.innerHTML = DressName[Counter-1];
  }

  var div = document.createElement("DIV");
  div.setAttribute("class","container");
  div.appendChild(x)
  div.appendChild(y);  
  div.appendChild(z);
      
  CartDiv.appendChild(div);

  ImageModal.style.display = "none";
  dressCounter = "";

  console.log(Cart)
}

// When the user clicks the image, open the modal 
function dressClick(n1,n2) {
  dressCounter = n1;
  Counter = n2;
  ImageModal.style.display = "block";
  dress.setAttribute("src", "Images/"+n1+"_p1.png");
  dress1.setAttribute("src", "Images/"+n1+"_p1.png");
  dress2.setAttribute("src", "Images/"+n1+"_p2.png");
  dress3.setAttribute("src", "Images/"+n1+"_p3.png");

  var nameImage = document.getElementById("nameImage");
  var price = document.getElementById("price");
  
  if(dressCounter.includes("polo")){
    nameImage.innerHTML = PoloName[n2-1];
    price.innerHTML = Prices[n2-1];
  }
  else if(dressCounter.includes("dress")){
    nameImage.innerHTML = DressName[n2-1];
    price.innerHTML = Prices[n2-1];
  } 
}

function ChangeDress(n) {
  dress.setAttribute("src", "Images/"+dressCounter+"_p"+n+".png");
}


// When the user clicks the Add to Cart Button, open the Add to CArt Modal
function OpenCart() {
  CartModal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
close1.onclick = function() {
  CartModal.style.display = "none";
}
close2.onclick = function() {
  ImageModal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == ImageModal) {
    ImageModal.style.display = "none";
  }

  if (event.target == CartModal) {
    CartModal.style.display = "none";
  }
}