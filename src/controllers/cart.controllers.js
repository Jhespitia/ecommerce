//Import Services
const { CartServices } = require('../services');

//Get All Cart
const getAllCart = async (req, res, next) => {
  try {
    const { id } = req.params;
    const cart = await CartServices.getAll(id);
    res.json({
      status: '!<-SUCESS->!',
      message: '~!ALL CARTS!~',
      cart,
    });
  } catch (error) {
    next({
      status: 400,
      errorContent: error,
      message: '!Cannot get USER Cart!',
    });
  }
};

//Get User Cart
const getUserCart = async (req, res, next) => {
  try {
    const { id } = req.params;
    const productsInCart = await CartServices.getById(id);
    res.json({
      status: '!<-SUCESS->!',
      message: '<~!USER CART!~>',
      productsInCart,
    });
  } catch (error) {
    next({
      status: 400,
      errorContent: error,
      message: '!Cannot get USER Cart!',
    });
  }
};

//Add Product to Cart
const addProductToCart = async (req, res, next) => {
  try {
    const data = req.body;
    const { cartId } = req.params;
    const result = await CartServices.addToCart({
      ...data,
      cartId,
    });
    res.json({
      status: '!<-SUCESS->!',
      message: '~!PRODUCT ADDED TO CART!~',
      result,
    });
  } catch (error) {
    res.status(400).json({
      status: '!->FAIL<-! ',
      errorContent: error.message,
      messages: '~PRODUCT WAS NOT ADDED~ !Verify Information!',
    })
  }
  next();
};

module.exports = {
  getAllCart,
  getUserCart,
  addProductToCart,
}