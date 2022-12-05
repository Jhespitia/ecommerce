//Import Services
const UserServices = require('../services/user.services');

//Create User
const createUser = async (req, res, next) => {
  try {
    const newUser = req.body;
    const userCreated = await UserServices.create(newUser);
    res.status(201).json({
      status: '!<-SUCESS->!',
      message: '~!NEW USER CREATED!~',
      userCreated,
    });

  } catch (error) {
    res.status(400).json({
      status: '!->FAIL<-! ',
      errorContent: error.message,
      messages: '~USER NOT CREATED~',
    })
  }
  next();
};

//Get All Users
const getAllUsers = async (req, res, next) => {
  try {
    const users = await UserServices.getAll();
    res.json({
      status: '!<-SUCESS->!',
      message: '~!LIST ALL USERS!~',
      users,
    });

  } catch (error) {
    res.status(400).json({
      status: '!->FAIL<-!',
      messages: '!Cannot  get ALL USERS information!',
    })
  }
  next();
};

module.exports = {
  createUser,
  getAllUsers
};