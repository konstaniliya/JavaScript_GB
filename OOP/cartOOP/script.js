const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';
// const productJson = '[{"id_product": 123,"title":"Ноутбук","price": 45600},{"id_product": 456,"title":"Мышка","price": 600},{"id_product": 789,"title":"Геймпад","price": 40600}]';
// const basketJson = '[{"id_product": 123,"title":"Ноутбук","price": 45600,"quantity":2},{"id_product": 456,"title":"Мышка","price": 600,"quantity":3}]';
class ProductsList {
    constructor(container = '.products') {
        this.container = container;
        this.goods = [];
        this._getProducts()
            .then(data => {
                this.goods = data;
                this.render()
            })
    }

_getProducts(){
    return fetch(`${API}/catalogData.json`)
        .then(result => result.json())
        .catch(error => {
            console.log(error);
        });
    // let dataJSON = JSON.parse(productJson)
    // this.goods = dataJSON;
    // console.log(this.goods)

}

    render() {
        const block = document.querySelector(this.container);
        for (let product of this.goods) {
            const productObj = new ProductItem(product);
            block.insertAdjacentHTML('beforeend',productObj.render());
        }
    }
    getSum() {
        let s = 0;
        for (let product of this.goods) {
            s += product.price;
        }
        return s;
    }
}
class ProductItem {
    constructor(product, img = 'https://via.placeholder.com/250x150/') {
        this.title = product.product_name
        this.price = product.price;
        this.id = product.id;
        this.img = img;
    }
    render() {
        return `<div class="product-item" data-id="${this.id}">
        <img src="${this.img}" alt="Some img" style="margin-bottom:10px;">
        <h3 style="margin-bottom:10px;">${this.title}</h3>
        <p style="margin-bottom:10px;">${this.price}</p>
        <button class="buy-btn">Купить</button>
        </div>`
    }
}

class BasketList {
    constructor(container = '.basketBlock') {
        this.container = container;
        this.basketGoods = [];
        this._getBasketProducts()
            .then(data => {
                this.basketGoods = data.contents;
                this.render()
            })
    }

_getBasketProducts(){
    return fetch(`${API}/getBasket.json`)
        .then(result => result.json())
        .catch(error => {
            console.log(error);
        });
    // let dataJSON = JSON.parse(basketJson)
    // this.basketGoods = dataJSON;
    // console.log(this.basketGoods)
}

bottonClick(){
    document.querySelector(".btn-cart").addEventListener('click', () => {
        document.querySelector(this.container).classList.toggle('invisible');
    });
}

    render() {
        const block = document.querySelector(this.container);
        for (let product of this.basketGoods) {
            const basketProductObj = new BasketItem(product);
            block.insertAdjacentHTML('beforeend',basketProductObj.render());
        }
    }
    getSum() {
        let s = 0;
        for (let product of this.basketGoods) {
            s += product.price*product.quantity;
        }
        return s;
    }
}
class BasketItem {
    constructor(product, img = 'https://via.placeholder.com/150x100/') {
        this.title = product.product_name;
        this.price = product.price;
        this.id = product.id_product;
        this.img = img;
        this.quantity = product.quantity;
    }
    render() {
        return `<div class="basket-item" data-id="${this.id}">
        <img src="${this.img}" alt="Some img" style="margin-bottom:10px;">
        <h3 style="margin-bottom:10px;">${this.title}</h3>
        <p style="margin-bottom:10px;">${this.price}</p>
        <p style="margin-bottom:10px;">Количество ${this.quantity}</p>
        <button class="closeBtn" id="${this.id}" onclick=testGoods()>X</button>
        </div>`
    }
}

class Basket {
    addGoods() {

    }
    removeGoods(){

    }
    changeGoods(){

    }
    render(){

    }
    
}
class ElemBasket {
    render(){
        
    }
}

let list = new ProductsList();
let basketList = new BasketList();
list.render();
basketList.bottonClick();
basketList.render();

// console.log(list.getSum());
// Vue.js
const app = new Vue({
    el: "#searchBlock",
    data: {
        request: "Request...",
        filteredGoods: []
    },
    methods: {
        filter(){
            for(item of list.goods){
                if(item.product_name.includes("Ноу")){
                    console.log(`Нашёл`);
                }
                else {
                    console.log(`Не нашёл`);
                }
            }
            console.log(`Good ${list.goods[0].product_name}`);
        }
    }
});
