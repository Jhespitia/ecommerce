//Import Services
const { OrderServices } = require('../services');

//Get User orders
const getUserOrders = async (req, res, next) => {
  try {
    const { id, } = req.params;
    const users = await OrderServices.getById(id);
    res.json({
      status: '!<-SUCESS->!',
      message: '~!USER ORDERS!~',
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
  getUserOrders
}