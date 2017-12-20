'use strict';
module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define('User', {
    fName: DataTypes.STRING,
    lName: DataTypes.STRING,
    email: DataTypes.STRING,
    pinCode: DataTypes.INTEGER,
    birthDate: DataTypes.DATE,
    isActive: DataTypes.BOOLEAN
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return User;
};