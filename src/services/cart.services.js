const {
  Users,
  Orders,
  Products,
  Cart,
  ProductInCart,
  ProductInOrder } = require('../models');

class CartServices {

  //Get All Cart 
  static async getAll() {
    try {
      const result = await Cart.findAll({
        attributes: ['id', 'totalPrice'],
        //attributes: ['id', 'productId', 'quantity', 'price', 'status'],
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

  //Get User Cart
  static async getById(id) {
    try {
      const products = await ProductInCart.findAll({
        where: { id },
        attributes: ['id', 'quantity', 'price', 'status'],
        include: [
          // {
          //   model: Products,
          //   attributes: ['id', 'name', 'price', 'sold_by']
          // },
          {
            model: Users,
          },
        ],
      });
      return products;
    } catch (error) {
      throw error;
    }
  }

  //Add Product to Cart
  static async addToCart(data) {
    try {
      const {
        cartId,
        productId,
        quantity,
        price,
        status } = data;

      const user = await ProductInCart.create(data);
      const userId = productInCart.id;
      const userProductInCart = Users.map((userId) => {
        productInCartId, userId
      });

      userProductInCart.forEach(async user => await Users.create(user));

    } catch (error) {
      throw error;
    }
  }
}

module.exports = CartServices;