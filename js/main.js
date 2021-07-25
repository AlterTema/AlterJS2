'use strict';

const products = [
    { id: 1, title: 'Notebook', price: 1000, img: 'https://tehnoteca.ru/img/1653/1652348/msi_gl63_9sc_gl63_9sc_212ru_4.jpg' },
    { id: 2, title: 'Mouse', price: 100, img: 'https://4frag.ru/image/cache/data/Catalog/d5b44490-3d1c-4514-a7bf-e2e3181da801-1000x1000.jpg' },
    { id: 3, title: 'Keyboard', price: 250, img: 'https://www.bestdeals.gr/images/detailed/32/AZIO_Retro_Classic_BT_Wireless_Backlit_Mechanical_Keyboard__Artisan___1.jpg' },
    { id: 4, title: 'Gamepad', price: 150, img: 'https://cdn1.technopark.ru/technopark/photos_resized/product/1000_1000/235216/1_235216.jpg' },
];

const renderProduct = (title, price, img) => {
    return `<div class="product-item">
                <img class=imgHeight src    =${img} alt=${title}>
                <h3>${title}</h3>
                <p>${price}</p>
                <button class="by-btn">Добавить</button>
              </div>`;
}

const renderProducts = (list) => {
    const productList = list.map((item) => {
        return renderProduct(item.title, item.price);
    });

    console.log(productList);
    document.querySelector('.products').innerHTML = productList;
}

renderProducts(products);
