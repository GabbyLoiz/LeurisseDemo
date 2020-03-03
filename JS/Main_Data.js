function LoadProducts() {
    let women = document.getElementById("Women");
    let men = document.getElementById("Men");

    let WomenImages = ["dress1_p1.png","dress2_p1.png","dress3_p1.png","dress4_p1.png","dress5_p1.png"];
    let MenImages = ["polo1_p1.png","polo2_p1.png","polo3_p1.png","polo4_p1.png","polo5_p1.png"];
    let DressName = ["Mini Dress", "Tie Dress", "Hem Dress", "Babydoll Dress", "Swing Dress"];
    let PoloName = ["Long Sleeves Polo Shirt", "Fit Polo Shirt", "Ombre Polo Shirt", "Mesh Polo Shirt", "Pima Polo Shirt"];

    for (let i=1; i<WomenImages.length+1; i++) {
        var x = document.createElement("IMG");
        x.setAttribute("src", "Images/"+WomenImages[i-1]);
        x.setAttribute("alt", "Dress"+i);
        x.setAttribute("class","dress zone");
        x.setAttribute("id","dress"+i);
        x.setAttribute("onClick", "dressClick('dress"+i+"','"+i+"')");
        x.setAttribute("onMouseOver", "ChangePreview('dress"+i+"')")
        x.setAttribute("onMouseOut", "BackPreview('dress"+i+"')")

        var y = document.createElement("H4");
        y.innerHTML = DressName[i-1];

        var div = document.createElement("DIV");
        div.setAttribute("class","container");
        div.appendChild(x)
        div.appendChild(y);  
        
        women.appendChild(div);
    }
    for (let i=1; i<MenImages.length+1; i++) {
        
        var x = document.createElement("IMG");
        x.setAttribute("src", "Images/"+MenImages[i-1]);
        x.setAttribute("alt", "Polo"+i);
        x.setAttribute("class","dress zone");
        x.setAttribute("id","polo"+i);
        x.setAttribute("onClick", "dressClick('polo"+i+"','"+i+"')");
        x.setAttribute("onMouseOver", "ChangePreview('polo"+i+"')");
        x.setAttribute("onMouseOut", "BackPreview('polo"+i+"')");

        var y = document.createElement("H4");
        y.innerHTML = PoloName[i-1];

        var div = document.createElement("DIV");
        div.setAttribute("class","container");
        div.appendChild(x)
        div.appendChild(y); 
        
        men.appendChild(div);
    }
}

function ChangePreview(n) {
    var dress = document.getElementById(n);

    dress.setAttribute("src", "Images/"+n+"_p2.png");
}

function BackPreview(n) {
    var dress = document.getElementById(n);

    dress.setAttribute("src", "Images/"+n+"_p1.png");
}