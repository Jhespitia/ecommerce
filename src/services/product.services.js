const { Users, Orders, Products, } = require('../models');

class ProductServices {

  //Create Product
  static async create(product) {
    try {
      const result = await Products.create(product);
      return result;
    } catch (error) {
      throw error;
    }
  }

  //Get All Products
  static async getAll() {
    try {
      const result = await Products.findAll({
        attributes: ['id', 'name', 'price', 'availableQty', 'sold_by', 'image_url'],
        include: {
          model: Users,
          attributes: ['id', 'username'],
        },
      });
      return result;
    } catch (error) {
      throw error;
    }
  }

  //Get Products by User Id
  static async getById(id) {
    try {
      const products = await Users.findAll({
        where: { id },
        attributes: ['id', 'username'],
        include: {
          model: Products,
          attributes: ['id', 'name', 'sold_by'],
        },
      });
      return products;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = ProductServices;