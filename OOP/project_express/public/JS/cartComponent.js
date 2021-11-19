Vue.component('cart', {
    props: ['cartItems', 'visibility'],
    template:`
        <div class="cart-block" v-show="visibility" v-if="cartItems!=0">
            <cart-item v-for="item of cartItems" :key="item.id_product" :img="item.img_path" :cart-item="item">
            </cart-item>
        </div>
        <div class="cart-block" v-show="visibility" v-else>
            Cart is empty
        </div>
        `
});

Vue.component('cart-item', {
    props: ['img', 'cartItem'],
    template:
        `<div class="cart-item">
                <div class="product-bio">
                    <img :src="img" alt="some img" class="cartImg">
                    <div class="product-desc">
                        <div class="product-title">{{ cartItem.product_name }}</div>
                        <div class="product-quatity">Quantity: {{ cartItem.quantity }}</div>
                        <div class="product-single-price">$ {{ cartItem.price }} each</div>
                    </div>
                </div>
                <div class="right-block">
                    <div class="product-price">Итого по товару {{cartItem.quantity*cartItem.price}}</div>
                    <button class="del-btn" @click="$root.remove(cartItem)">Remove</button>
                </div>

        </div>`
});