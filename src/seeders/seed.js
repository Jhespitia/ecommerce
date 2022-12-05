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
  { username: 'Jhon', email: 'Jhon@mail.com', password: '1111' },
  { username: 'Luisa', email: 'Luu@mail.com', password: '2222' },
  { username: 'Sofia', email: 'Sof@mail.com', password: '3333' },
  { username: 'Karen', email: 'Kaka@mail.com', password: '4444' },
  { username: 'Michelle', email: 'Mich@mail.com', password: '5555' },
];

const products = [
  {
    name: 'IPHONE 14',
    price: '$1500.00',
    availableQty: '10',
    status: 'Available',
    imageUrl: 'https://www.apple.com/v/iphone-14-pro/b/images/meta/iphone-14-pro_overview__e2a7u9jy63ma_og.png',
    soldBy: 'Apple',
    userId: 1,
  },
  {
    name: 'TV-50" SAMSUMG',
    price: '$2300.00',
    availableQty: '5',
    status: 'Available',
    imageUrl: 'https://megatronics.com.co/wp-content/uploads/2021/03/50TU804.jpg',
    soldBy: 'Samsung',
    userId: 4,
  },
  {
    name: 'GAMER LAPTOP',
    price: '$3800.00',
    availableQty: '7',
    status: 'Available',
    imageUrl: 'https://s3.us-east-2.amazonaws.com/ccp-prd-s3-uploads/2021/3/2/78d51f014bd73e0dc5325e235182ef6bffd907c9.jpeg',
    soldBy: 'Hp',
    userId: 2,
  },
  {
    name: 'PS5',
    price: '$1900.00',
    availableQty: '0',
    status: 'Out Stock',
    imageUrl: 'https://gmedia.playstation.com/is/image/SIEPDC/ps5-product-thumbnail-01-en-14sep21?$facebook$',
    soldBy: 'Sony',
    userId: 5
  },
  {
    name: 'APPLE-WATCH SERIES 7',
    price: '$800.00',
    availableQty: '10',
    status: 'Available',
    imageUrl: 'http://cdn.shopify.com/s/files/1/0604/8373/1606/products/IMG-6338932.jpg?v=1660443112',
    soldBy: 'Apple',
    userId: 3,
  },
];

const orders = [
  { userId: 1, totalPrice: '$4500.00', status: 'complete' },
  { userId: 2, totalPrice: '$3800.00', status: 'complete' },
  { userId: 3, totalPrice: '$800.00', status: 'pending' },
  { userId: 2, totalPrice: '$7800.00', status: 'complete' },
  { userId: 1, totalPrice: '$10600.00', status: 'pending' },
];

const cart = [
  { userId: 1, totalPrice: '$3000.00' },
  { userId: 2, totalPrice: '$2300.00' },
  { userId: 3, totalPrice: '$7600.00' },
  { userId: 4, totalPrice: '$2400.00' },
  { userId: 5, totalPrice: '$1600.00' },
  { userId: 1, totalPrice: '$4500.00' },
  { userId: 2, totalPrice: '$3800.00' },
];

const productInCarts = [
  { cartId: 1, productId: 1, quantity: 2, price: '$3000.00', status: 'pending' },
  { cartId: 2, productId: 2, quantity: 1, price: '$2300.00', status: 'pending' },
  { cartId: 3, productId: 3, quantity: 2, price: '$7600.00', status: 'pending' },
  { cartId: 4, productId: 5, quantity: 3, price: '$2400.00', status: 'pending' },
  { cartId: 5, productId: 5, quantity: 2, price: '$1600.00', status: 'pending' },
];

const productInOrders = [
  { orderId: 1, productId: 1, quantity: 3, price: '$4500.00', status: 'complete' },
  { orderId: 2, productId: 3, quantity: 1, price: '$3800.00', status: 'complete' },
  { orderId: 3, productId: 5, quantity: 1, price: '$800.00', status: 'pending' },
  { orderId: 4, productId: 3, quantity: 1, price: '$3800.00', status: 'complete' },
  { orderId: 4, productId: 5, quantity: 5, price: '$4000.00', status: 'complete' },
  { orderId: 5, productId: 2, quantity: 2, price: '$7600.00', status: 'pending' },
  { orderId: 5, productId: 1, quantity: 2, price: '$3000.00', status: 'pending' },
];


db.sync({ force: true }) //true - delete all and create new info
  .then(async () => {
    console.log('!...->SYNCING INFORMATION DATABASE<-...!');
    users.forEach(async (user) => Users.create(user));

    setTimeout(() => {
      products.forEach(async (product) => Products.create(product));
    }, 100);

    setTimeout(() => {
      orders.forEach((order) => Orders.create(order));
    }, 200);

    setTimeout(() => {
      cart.forEach((cart) => Cart.create(cart));
    }, 300);

    setTimeout(() => {
      productInCarts.forEach((productInCart) => ProductInCart.create(productInCart));
    }, 400);

    setTimeout(() => {
      productInOrders.forEach((productInOrder) => ProductInOrder.create(productInOrder));
    }, 500);
  })