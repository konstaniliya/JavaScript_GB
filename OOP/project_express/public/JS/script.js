const API = 'https://raw.githubusercontent.com/konstaniliya/JavaScript_GB/homework1/OOP/JSON';

const app = new Vue({
    el: "#app",
    data: {
        userSearch: '',
        showCart: false,
        catalogUrl: '/catalogData.json',
        cartUrl: '/getBasket.json',
        cartItems: [],
        filtered: [],
        imgCart: 'https://via.placeholder.com/50x100',
        products: [],
        imgProduct: 'https://via.placeholder.com/200x150'
    },
    methods: {
        getJson(url){
            return fetch(url)
                .then(result => result.json())
                .catch(error => console.log(error))
        },
        addProduct(item){
            this.getJson(`${API}/addToBasket.json`)
                .then(data => {
                    if(data.result === 1){
                        let find = this.cartItems.find(el => el.id_product === item.id_product);
                        if(find){
                            find.quantity++;
                        } else {
                            const prod = Object.assign({quantity: 1}, item);
                            this.cartItems.push(prod);
                        }

                    }
                })
        },
        remove(item){
            this.getJson(`${API}/addToBasket.json`)
                .then(data => {
                    if(data.result === 1) {
                        if(item.quantity>1){
                            item.quantity--;
                        } else {
                            this.cartItems.splice(this.cartItems.indexOf(item), 1);
                        }
                    }
                })
        },
        filter(userSearch){
            let regexp = new RegExp(userSearch,'i');
            this.filtered = this.products.filter(el => regexp.test(el.product_name));
        }
    },
        mounted(){
            this.getJson(`${API + this.cartUrl}`)
            .then(data => {
                for (let item of data.contents){
                    item.img_path = `img/card${item.id_product}.png`;
                    this.$data.cartItems.push(item);
                }
            });
        this.getJson(`${API + this.catalogUrl}`)
            .then(data => {
                for (let item of data){
                    item.img_path = `img/card${item.id_product}.png`;
                    this.$data.products.push(item);
                    this.$data.filtered.push(item);
                }
            });
            // this.getJson(`getProducts.json`)
            //     .then(data => {
            //         for(let item of data) {
            //             this.products.push(item);
            //             this.filtered.push(item);
            //         }
            //     })
        }
});

