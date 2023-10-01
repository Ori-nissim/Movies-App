const {sequelize} = require('../dal/db');
const DataTypes = require('sequelize');

  // Define the user model
  const User = sequelize.define("User", {
    username: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    timestamps: false, // Disable timestamps and 'id' column
  });

module.exports = {User};