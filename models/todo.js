'use strict';
module.exports = (sequelize, DataTypes) => {
  var ToDo = sequelize.define('ToDo', {
    userid: DataTypes.INTEGER,
    text: DataTypes.STRING,
    done: DataTypes.BOOLEAN,
    targetDate: DataTypes.DATE
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return ToDo;
};