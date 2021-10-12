var goods = [
    {
        name: "Good 1",
        price: "10000",
        img: "photo1.png",
        quantity: 0
    },
    {
        name: "Good 2",
        img: "photo2.png",
        price: "5000",
        quantity: 0
    },
    {
        name: "Good 3",
        img: "photo3.png",
        price: "2000",
        quantity: 0
    }
];
var catalog = document.getElementsByClassName("catalog")[0];
var cart = document.getElementsByClassName("cart")[0];
catalog.style.cssText = "display: flex; justify-content: space-around";
var i = 1;
for (item of goods) {
    var itemBlock = document.createElement("div");
    itemBlock.style.cssText = "display:flex; flex-direction:column; justify-content: center;";
    itemBlock.classList.add("item");
    catalog.append(itemBlock);

    var itemImg = document.createElement("img");
    itemImg.src = "img/photo" + i + ".png";
    itemBlock.append(itemImg);

    var itemName = document.createElement("p");
    itemName.innerHTML = item.name;
    itemName.style.cssText = "text-align:center; font-size:20px"
    itemBlock.append(itemName);

    var itemPrice = document.createElement("p");
    itemPrice.innerHTML = item.price + "&#8381;";
    itemPrice.style.cssText = "text-align:center; font-size:20px"
    itemBlock.append(itemPrice);

    var itemButton = document.createElement("button");
    itemButton.onclick = buy;
    itemButton.id = "item" + i;
    itemButton.innerHTML = "Buy";
    itemButton.style.cssText = "width:100px; align-self:center; font-size:20px; color:blue; background-color: yellow;"
    itemBlock.append(itemButton);

    i++;
}

function clearCart() {
    document.getElementsByClassName("cart")[0].innerHTML = "";
    document.getElementsByClassName("total")[0].innerHTML = "";
    for (item of goods) {
        item.quantity = 0;
    }

}
function buy() {
    var goodNumber = this.id[4];
    if(goods[goodNumber - 1].quantity == 0){
        goods[goodNumber - 1].quantity++;
        var cartItemBlock = document.createElement("div");
        cartItemBlock.style.cssText = "display:flex";
        cart.append(cartItemBlock);
        var cartItemName = document.createElement("p");
        cartItemName.innerHTML = goods[goodNumber - 1].name
        cartItemBlock.append(cartItemName);

        var cartItemPrice = document.createElement("p");
        cartItemPrice.style.cssText = "margin-left:10px;";
        cartItemPrice.innerHTML = goods[goodNumber - 1].price + "&#8381;"
        cartItemBlock.append(cartItemPrice);

        var cartItemQuantity = document.createElement("p");
        cartItemQuantity.style.cssText = "margin-left:10px;";
        cartItemQuantity.id = "q"+goodNumber;
        cartItemQuantity.innerHTML = "Quantity " + goods[goodNumber - 1].quantity
        cartItemBlock.append(cartItemQuantity);
    }
    else {
        goods[goodNumber - 1].quantity++;
        document.getElementById("q"+goodNumber).innerHTML = "Quantity " + goods[goodNumber - 1].quantity;        
    }
    var total = 0;
    for (item of goods) {
        total+=item.price*item.quantity;
    }
document.getElementsByClassName("total")[0].innerHTML = "Total is " + total + "&#8381;";
}

