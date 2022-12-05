const { Users } = require("../models");

class UserServices {

  //Create User
  static async create(user) {
    try {
      const result = await Users.create(user);
      return result;
    } catch (error) {
      throw error;
    }
  }

  //Get All Users
  static async getAll() {
    try {
      const result = await Users.findAll({
        attributes: {
          exclude: ['createdAt', 'updatedAt']
        }

      });
      return result;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = UserServices;