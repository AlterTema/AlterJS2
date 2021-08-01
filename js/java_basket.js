'use strict'
class GoodsItem {
    constructor(title, price) {
        this.title = title;
        this.price = price;
    }
    render() {
        return ` <div class="goods-item">

            <table>
                <tbody>
                    <tr>
                        <th>Наименование товара</th>
                        <th>Количество товаров</th>
                        <th>Цена за штуку</th>
                        <th>Итоговая цена</th>
                    </tr>
                    <tr>
                        <td>${this.title}</td>
                        <td>1</td>
                        <td>${this.price}</td>
                        <td>Итоговая цена</td>
                    </tr>
                    <tr>
                        <td>${this.title}</td>
                        <td>2</td>
                        <td>${this.price}</td>
                        <td>Итоговая цена</td>
                    </tr>
                    <tr>
                        <td>${this.title}</td>
                        <td>3</td>
                        <td>${this.price}</td>
                        <td>Итоговая цена</td>
                    </tr>
                </tbody>
            </table>
        </div>`;
    }
}

class GoodsList {
    constructor() {
        this.goods = [];
    }
    fetchGoods() {
        this.goods = [{
            title: 'Notebook',
            price: 1000
        }, {
            title: 'Mouse',
            price: 100
        }, {
            title: 'Keyboard',
            price: 250
        }, {
            title: 'Gamepad',
            price: 150
        }, ];
    }
}

const list = new GoodsList();
list.fetchGoods();
list.render();