const { createUser, getAllUsers } = require('./user.controllers');
const { userLogin } = require('./auth.controllers');


module.exports = {
  createUser,
  userLogin,
  getAllUsers
}