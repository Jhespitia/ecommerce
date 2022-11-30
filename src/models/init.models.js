//Import Barrels
const {
  Users,
  Products,
  Cart,
  ProductInCart,
  Orders,
  ProductInOrder, } = require('./index');

const initModels = () => {

  //Relationships bettwen Models

  //Un usuario puede tener muchos productos, y un producto le pertenece a un usuario
  Users.hasMany(Products, { as: 'users', foreignKey: 'product_id' });
  Products.belongsTo(Users, { as: 'products', foreignKey: 'product_id' });

  //Un usuario solo puede tener un carrito, y un carrito le pertenece a un usuario
  Users.hasOne(Cart, { as: 'user', foreignKey: 'cart_id' });
  Cart.belongsTo(Users, { as: 'cart', foreignKey: 'cart_id' });

  //Un usuario puede crear muchas ordenes y una orden le pertenece a un usuario
  Users.hasMany(Orders, { as: 'userss', foreignKey: 'order_id' });
  Orders.belongsTo(Users, { as: 'order', foreignKey: 'order_id' });

  //Un ProductInCart puede tener un producto y pertenece a un carrito
  ProductInCart.hasMany(Products, { as: 'product', foreignKey: 'product_id' });
  ProductInCart.belongsTo(Cart, { as: 'productCart', foreignKey: 'product_id' });

  //Un carrito tiene muchos ProductInCart
  Cart.hasMany(ProductInCart);

  //Una orden tiene muchos ProductInOrder
  Orders.hasMany(ProductInOrder);

  //Un ProductInOrder tiene un producto y pertenece a una orden
  ProductInOrder.hasOne(Products);
  ProductInOrder.belongsTo(Orders);

  Products;
  Cart;
  ProductInCart;
  Orders;
  ProductInOrder;
};

module.exports = initModels;