const item = {
    price: 1000,
    quantity: 2,
    getPrice: getPrice
};

function getPrice() {
    return this.price * this.quantity;
}

const item2 = {
    price: 100,
    quantity: 3,
    getPrice: getPrice
};

function getPrice() {
    return this.price * this.quantity;
}

const item3 = {
    price: 250,
    quantity: 2,
    getPrice: getPrice
};

function getPrice() {
    return this.price * this.quantity;
}

const item4 = {
    price: 150,
    quantity: 3,
    getPrice: getPrice
};

function getPrice() {
    return this.price * this.quantity;
}



console.log(item.getPrice() + item2.getPrice() + item3.getPrice() + item4.getPrice());