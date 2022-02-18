var products = [
    {
        id:0,
        name:"Apples",
        price:"2.99",
        image:"https://banner2.kisspng.com/20180310/jyw/kisspng-plum-tomato-apple-fuji-vector-two-apples-5aa49732abbf96.2950483615207360507035.jpg",
        color:"red"
    },
    {
        id:1,
        name:"Bananas",
        price:"2.50",
        image:"https://icon2.kisspng.com/20180125/cyq/kisspng-banana-powder-fruit-cavendish-banana-banana-5a6a705e555d06.3110857015169250223497.jpg",
        color:"gold"
    },
    {
        id:2,
        name:"oranges",
        price:"3.50",
        image: "https://icon2.kisspng.com/20180308/wlw/kisspng-south-africa-blood-orange-mandarin-orange-tangelo-south-africa-imports-of-oranges-5aa10d936cc6c7.6226563815205042114456.jpg",
        color:"orange"
    }
];

function ProductMessage(val, color, image) {
    //Creating main elements
    let that = this;
    this.ele1 = document.createElement("div");
    this.img = document.createElement("img");
    this.img.src = image;
    this.button = document.createElement("button");
    this.button.innerHTML = val;
    this.button.classList.add("product");

    //creating different (div and image) for the popup menu so the main element will not disappear
    this.ele2 = document.createElement("div");
    this.ele2.innerHTML = val;
    this.img2 = document.createElement("img");
    this.img2.src = image;

    //Creating eventListener for hovering over a product and adding color
    this.button.addEventListener("mouseover", function () {
        that.button.style.borderColor = color;
    })

    //Creating eventListener for hovering over a product and back to black color
    this.button.addEventListener("mouseout", function () {
        that.button.style.borderColor  = 'black';
    })

    //Creating eventListener to add popUp menu
    this.button.addEventListener("click", function () {
        that.fruits();
    })

    //Creating eventListener to remove popUp menu
    this.ele2.addEventListener("click", function () {
        document.body.innerHTML = "";
        writeProducts();
        that.ele2.classList.remove("popUp");
    })

    //Appending elements to the body
    this.ele1.appendChild(this.button);
    this.button.appendChild(this.img);
    document.body.appendChild(this.ele1);

}

//prototype function for the popup menu on the click
ProductMessage.prototype.fruits = function () {
    this.ele2.classList.toggle("popUp");
    this.ele2.appendChild(this.img2);
    document.body.appendChild(this.ele2);
}


// Creating the 3 instance of ProductMessage()
function writeProducts() {
    let ele = [];
    for (let i = 0; i < products.length; i++) {
        ele.push(new ProductMessage("Name: " + products[i].name + "<br> Price: " + "$" + products[i].price,
            products[i].color,
            products[i].image));

    }
}
writeProducts();