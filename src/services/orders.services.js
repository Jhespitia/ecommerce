const { Users, Orders, Products, } = require('../models');

class OrderServices {

  static async getById(id) {
    try {
      const products = await Users.findAll({
        where: { id },
        attributes: ['id', 'username'],
        include: {
          model: Orders,
          attributes: ['id', 'totalPrice', 'status'],
        },
      });
      return products;
    } catch (error) {
      throw error;
    }
  }

}

module.exports = OrderServices;