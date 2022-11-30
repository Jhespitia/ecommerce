//Import Services
const UserServices = require('../services/user.services');

//Create User
const createUser = async (req, res, next) => {
  try {
    const newUser = req.body;
    const result = await UserServices.create(newUser);
    res.status(201).json(result);
  } catch (err) {
    next({
      status: 400,
      errorContent: err,
      messages: '<-!!!Check Information - Something Went Wrong!!!->',
    })
  }
};

module.exports = {
  createUser,
};