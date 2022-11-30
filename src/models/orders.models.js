const db = require('../utils/database');
const { DataTypes } = require('sequelize');

const Orders = db.define('orders', {

  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },

  totalPrice: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },

  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'user_id',
  },

  status: {
    type: DataTypes.STRING,
    allowNull: false,
  }
});

module.exports = Orders;