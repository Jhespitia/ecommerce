//Import DataBase
const db = require('../utils/database');

//Import Models
const {
  Users,
  Products,
  Orders,
  ProductInCart,
  ProductInOrder,
  Cart } = require('../models');

const initModels = require('../models/init.models')

initModels();

const users = [
  { username: 'Jhon', email: 'Jhon@mail.com', password: '12345' },
  { username: 'Luisa', email: 'Luu@mail.com', password: '67890' },
  { username: 'Karen', email: 'KaKa@mail.com', password: '998877' },
];

const products = [
  { name: 'Iphone', price: '1200', availableQty: '10', status: 'Available', userId: 1 },
  { name: 'Tv', price: '800', availableQty: '5', status: 'Available', userId: 2 },
  { name: 'Laptop', price: '1799', availableQty: '2', status: 'Available', userId: 3 },
  { name: 'Ps5', price: '2500', availableQty: '0', status: 'Out Stock', userId: 2 },
];

const orders = [
  { totalPrice: '1799', userId: 1, status: 'complete' }, //pending - pending
  { totalPrice: '2400', userId: 2, status: 'complete' },
  { totalPrice: '800', userId: 3, status: 'pending' },
];

const carts = [
  { totalPrice: '3600', userId: 1 },
  { totalPrice: '1600', userId: 2 },
  { totalPrice: '1799', userId: 3 },
];

const productInCarts = [
  { cartId: 1, productId: 1, quantity: 3, price: '3600', status: 'complete' },
  { cartId: 2, productId: 2, quantity: 2, price: '1600', status: 'complete' },
  { cartId: 3, productId: 3, quantity: 1, price: '1799', status: 'complete' },
];

const productInOrders = [
  { orderId: 1, productId: 3, quantity: 1, price: '1799', status: 'complete' },
  { orderId: 2, productId: 1, quantity: 2, price: '2400', status: 'complete' },
  { orderId: 3, productId: 2, quantity: 1, price: '800', status: 'pending' },
];


db.sync({ force: true }) //true - delete all and create new info
  .then(async () => {
    console.log('!...->SYNCING DATABASE<-...! Information');
    users.forEach(async (user) => Users.create(user));

    setTimeout(() => {
      products.forEach(async (product) => Products.create(product));
    }, 100);

    setTimeout(() => {
      orders.forEach((order) => Orders.create(order));
    }, 200);

    setTimeout(() => {
      carts.forEach((cart) => Cart.create(cart));
    }, 300);

    setTimeout(() => {
      productInCarts.forEach((productInCart) => ProductInCart.create(productInCart));
    }, 400);

    setTimeout(() => {
      productInOrders.forEach((productInOrder) => ProductInOrder.create(productInOrder));
    }, 500);
  })