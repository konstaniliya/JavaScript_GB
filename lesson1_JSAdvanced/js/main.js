const products = [
    {id: 1, title: 'Notebook', price: 2000, img: 'img/photo1.png'},
    {id: 2, title: 'Mouse', price: 20, img: 'img/photo2.png'},
    {id: 3, title: 'Keyboard', price: 200, img: 'img/photo3.png'},
    {id: 4, title: 'Gamepad', price: 50, img: 'img/photo2.png'},
];
//Функция для формирования верстки каждого товара
//Добавить в выводе изображение
const renderProduct = (item) => {
    return `<div class="product-item">
                <h3>${item.title}</h3>
                <img src="${item.img}" alt="${item.img[9]}">
                <p>${item.price}</p>
                <button class="buy-btn">Купить</button>
            </div>`
};
const renderPage = (list={id: 1, title: 'Notebook', price: 2000, img: 'img/photo1.png'}) => {
    const productsList = list.map(item => renderProduct(item));
    console.log(productsList);
    document.querySelector('.products').innerHTML = productsList.join('');
};

renderPage(products);

// styles
document.querySelector(".products").style.cssText = "display: flex; gap: 30px; justify-content: center;";
document.querySelector(".btn-cart").style.cssText = "color: blue; background-color: orange;border: 4px solid green;font-size:25px;";
// Запятые появляются, потому что выводится как массив, убрать можно методом join в качестве separator выбрать пробел или ничего