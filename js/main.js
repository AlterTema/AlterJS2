'use strict';

const products = [
    { id: 1, title: 'Notebook', price: 1000 },
    { id: 2, title: 'Mouse', price: 100 },
    { id: 3, title: 'Keyboard', price: 250 },
    { id: 4, title: 'Gamepad', price: 150 },
];

const renderProduct = (item, img = 'https://megabo.ru/image/cache/catalog/photo/coming-soon-1000x1000.png') =>
    `<div class="product-item">
                <img class=imgHeight src="${img}" alt=${item.title}>
                <h3>${item.title}</h3>
                <p>${item.price}</p>
                <button class="by-btn">Добавить</button>
              </div>`;


const renderProducts = list => {
    document.querySelector('.products').insertAdjacentHTML('beforeend', list.map(item => renderProduct(item)).join(''));
};

renderProducts(products);

