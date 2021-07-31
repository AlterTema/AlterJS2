'use strict';

const products = [
    { title: 'Notebook', price: 1000 },
    { title: 'Mouse', price: 100 },
    { title: 'Keyboard', price: 250 },
    { title: 'Gamepad', price: 150 },
];

const renderProduct = (item, img = 'https://megabo.ru/image/cache/catalog/photo/coming-soon-1000x1000.png') =>
    `<div class="product-item">
                <img class=imgHeight src="${img}" alt=${item.title}>
                <h3>${item.title}</h3>
                <p>${item.price}</p>
                <button class="by-btn">Добавить</button>
              </div>`;


const renderProductList = (list)  => {
    let ProductList = list.map(item => renderProduct(item.title, item.price));
    document.querySelector('.products').insertAdjacentHTML('beforeend', list.map(item => renderProduct(item)).join(''));
};

renderProductList(products);




