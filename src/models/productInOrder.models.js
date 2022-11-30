const db = require('../utils/database');
const { DataTypes } = require('sequelize');

const ProductInOrder = db.define('productInOrder', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },

  orderId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },

  productId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },

  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },

  price: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },

  status: {
    type: DataTypes.DATE,
    allowNull: false,
  }
});

module.exports = ProductInOrder;