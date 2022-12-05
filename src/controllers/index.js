const { createUser, getAllUsers } = require('./user.controllers');
const { userLogin } = require('./auth.controllers');
const { getUserProducts, createProdut, getAllProducts } = require('./product.controllers');
const { getUserOrders } = require('./order.controllers');
const { getAllCart, getUserCart, addProductToCart } = require('./cart.controllers');


module.exports = {
  createUser,
  userLogin,
  getAllUsers,
  getUserProducts,
  createProdut,
  getAllProducts,
  getUserOrders,
  getAllCart,
  getUserCart,
  addProductToCart,
}