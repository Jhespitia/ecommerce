//Import Services
const { ProductServices } = require('../services');

//Create Product
const createProdut = async (req, res, next) => {
  try {
    const newProduct = req.body;
    const result = await ProductServices.create(newProduct);
    res.status(201).json({
      status: '!<-SUCESS->!',
      message: '~!NEW PRODUCT CREATED!~',
      result,
    });

  } catch (error) {
    res.status(400).json({
      status: '!->FAIL<-! ~PRODUCT NOT CREATED~',
      errorContent: error.message,
      messages: '~PRODUCT NOT CREATED~ !Verify Information!',
    })
  }
  next();
};

//Get All Products
const getAllProducts = async (req, res, next) => {
  try {
    const products = await ProductServices.getAll();
    res.json({
      status: '!<-SUCESS->!',
      message: '~!LIST ALL PRODUCTS!~',
      products,
    });

  } catch (error) {
    res.status(400).json({
      status: '!->FAIL<-!',
      errorContent: error.message,
      messages: '!cannot get ALL PRODUCTS information!',
    })
  }
  next();
};

//Get Product By User
const getUserProducts = async (req, res, next) => {
  try {
    const { id, } = req.params;
    const users = await ProductServices.getById(id);
    res.json({
      status: '!<-SUCESS->!',
      message: '~!USER PRODUCTS!~',
      users,
    });
  } catch (error) {
    next({
      status: 400,
      errorContent: error,
      message: '!Cannot get Products By USER!',
    });
  }
};

module.exports = {
  getUserProducts,
  createProdut,
  getAllProducts
}