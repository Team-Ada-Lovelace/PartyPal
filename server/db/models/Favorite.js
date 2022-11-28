const { db } = require('../database');
const { DataTypes } = require('sequelize');

const Favorite = db.define('favorite', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  category: {
    type: DataTypes.ENUM('caterer', 'venue'),
    allowNull: false,
  },
  yelp_reference_id: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  image_url: {
    type: DataTypes.TEXT,
  },
});

module.exports = {
  Favorite,
};
