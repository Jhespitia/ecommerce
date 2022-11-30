//Import Services
const UserServices = require('../services/user.services');

//Create User
const createUser = async (req, res, next) => {
  try {
    const newUser = req.body;
    const result = await UserServices.create(newUser);
    res.status(201).json(result);
  } catch (err) {
    res.status(400).json({
      status: '!-> FAIL <-!',
      messages: '<-!!!Check Information - Something Went Wrong!!!->',
    })
  }
  next();
};

//Get All Users
const getAllUsers = async (req, res, next) => {
  try {
    const users = await UserServices.getAll();
    res.json(users);

  } catch (err) {
    res.status(400).json({
      status: '!-> FAIL <-!',
      messages: '<-!!!Check Information - Something Went Wrong!!!->',
    })
  }
  next();
}

module.exports = {
  createUser,
  getAllUsers
};