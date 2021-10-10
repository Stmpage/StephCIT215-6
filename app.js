let products = [
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

let item = [];

function pop(list) {
    let that = this;
    this.id = list.id;
    this.image = list.image;
    this.name = list.name;
    this.price = list.price;
    this.color = list.color;
    this.ele = document.createElement("div");
    this.ele.classList.add("product");
    this.imageEle = document.createElement("div");
    this.nameEle = document.createElement("div");
    this.priceEle = document.createElement("div");
    this.colorEle = document.createElement("div");
    this.popUp = document.createElement("div");
    this.popUp.classList.add("popUp");

    this.imageEle.innerHTML = "<img src = '" + list.image + "'/>";
    this.nameEle.innerHTML = "Name: " + list.name;
    this.priceEle.innerHTML = "Price: $" + list.price;
    this.colorEle.innerHTML = list.color;

    this.ele.appendChild(this.imageEle);
    this.ele.appendChild(this.nameEle);
    this.ele.appendChild(this.priceEle);

    document.body.appendChild(this.popUp);
    this.popUp.style.display = "none";

    this.ele.addEventListener("click", function () {
        if (list.id == 0) {
            that.popUp.appendChild(that.imageEle);
            that.popUp.appendChild(that.nameEle);
            that.popUp.appendChild(that.priceEle);
            that.popUp.style.display = "flex";
        } else if (list.id == 1) {
            that.popUp.appendChild(that.imageEle);
            that.popUp.appendChild(that.nameEle);
            that.popUp.appendChild(that.priceEle);
            that.popUp.style.display = "flex";
        } else if (list.id == 2) {
            that.popUp.appendChild(that.imageEle);
            that.popUp.appendChild(that.nameEle);
            that.popUp.appendChild(that.priceEle);
            that.popUp.style.display = "flex";

        }
    });
    this.popUp.addEventListener("click", function () {
        if (list.id == 0) {
            that.ele.appendChild(that.imageEle);
            that.ele.appendChild(that.nameEle);
            that.ele.appendChild(that.priceEle);
            that.popUp.style.display = "none";
        } else if (list.id == 1) {
            that.ele.appendChild(that.imageEle);
            that.ele.appendChild(that.nameEle);
            that.ele.appendChild(that.priceEle);
            that.popUp.style.display = "none";
        } else if (list.id == 2) {
            that.ele.appendChild(that.imageEle);
            that.ele.appendChild(that.nameEle);
            that.ele.appendChild(that.priceEle);
            that.popUp.style.display = "none";
        }
    });

    this.ele.addEventListener("mouseover", function () {
        that.ele.style.borderColor = list.color
    });

    this.ele.addEventListener("mouseout", function () {
        that.ele.style.borderColor = ""
    });

    document.body.appendChild(this.ele);
}

for (let i = 0; i < products.length; i++) {
    item.push(new pop(products[i]));
}