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

  //-> Un usuario puede tener muchos productos, y un producto le pertenece a un usuario
  Users.hasMany(Products, { foreignKey: 'user_id' });
  Products.belongsTo(Users, { foreignKey: 'user_id' });

  //-> Un usuario solo puede tener un carrito, y un carrito le pertenece a un usuario
  Users.hasOne(Cart, { foreignKey: 'user_id' });
  Cart.belongsTo(Users, { foreignKey: 'user_id' });

  //-> Un usuario puede crear muchas ordenes y una orden le pertenece a un usuario
  Users.hasMany(Orders, { foreignKey: 'user_id' });
  Orders.belongsTo(Users, { foreignKey: 'user_id' });

  //-> Un ProductInCart puede tener un producto y pertenece a un carrito
  Products.hasOne(ProductInCart, { foreignKey: 'product_id' });
  ProductInCart.belongsTo(Cart, { foreignKey: 'cart_id' });

  //-> Un ProductInOrder tiene un producto y pertenece a una orden
  Products.hasOne(ProductInOrder, { foreignKey: 'product_id' });
  ProductInOrder.belongsTo(Orders, { foreignKey: 'order_id' });

  //-> Una orden tiene muchos ProductInOrder
  Orders.hasMany(ProductInOrder, { foreignKey: 'order_id' });
  ProductInOrder.belongsTo(Orders, { foreignKey: 'order_id' });

  //-> Un carrito tiene muchos ProductInCart
  Cart.hasMany(ProductInCart, { foreignKey: 'cart_id' });
  ProductInCart.belongsTo(Cart, { foreignKey: 'cart_id' });

};

module.exports = initModels;