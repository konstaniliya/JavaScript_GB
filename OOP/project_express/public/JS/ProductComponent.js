Vue.component('products', {
    props: ['products'],
    template:
            `<div class="catalog container">
                <product v-for="item of products"
                :key="item.id_product"
                :img="item.img_path"
                :product="item"></product>
            </div>`
});
Vue.component('product', {
    props: ['product','img'],
    template:
        `<div class="cardGood">
        <a href="card.html" class="cardLink">
          <img :src="img" class="catalogImage" alt="card1">
        </a>
          <div class="add-box">
          <button class="buy-btn" @click="$root.addProduct(product)">
              <img src="img/pinkBasket.svg" alt="Add to basket" class="basketImage">
              <p class="textInfo">Add to Cart</p>
           </button>
          </div>
          <div class="catalogContent">
            <h2 class="headerCatalog CardCatalogPage">
              Ellery x m'o capsule
            </h2>
            <p class="textCatalog">
              Known for her sculptural takes on traditional tailoring, Autralian arbiter of cool Kym Ellery
              teams up with
              Moda
              operandi
            </p>
            <p class="priceText">
            $ {{product.price}}.00
            </p>
          </div>
      </div>`
});

