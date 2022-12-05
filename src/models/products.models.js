const db = require('../utils/database');
const { DataTypes } = require('sequelize');

const Products = db.define('products', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },

  name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },

  price: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  availableQty: {
    type: DataTypes.STRING,
    allowNull: false,
    //field: 'available_Qty',
  },

  status: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: 'available',
  },

  userId: {
    type: DataTypes.INTEGER,
    allowNull: true,
    field: 'user_id',
  },
  imageUrl: {
    type: DataTypes.STRING,
    allowNull: false,
    field: 'image_url',
  },
  soldBy: {
    type: DataTypes.STRING,
    allowNull: false,
    field: 'sold_by',
  },
});

module.exports = Products;