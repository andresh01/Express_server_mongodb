const { DataTypes, Model } = require("sequelize");
const sequelize = require("../utils/postgresql");

class User extends Model {}

User.init({
  // Model attributes are defined here
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
firstName: {
  type: DataTypes.STRING,
  allowNull: false
},
lastName: {
  type: DataTypes.STRING
  // allowNull defaults to true
},
email: {
    type: DataTypes.STRING,
    allowNull: false
},
password: {
  type: DataTypes.STRING,
  allowNull: false
},
birthday: {
    type: DataTypes.DATE,
    allowNull: false
},
status: {
    type: DataTypes.BOOLEAN,
    defaultValue: true
},
role: {
    type: DataTypes.STRING
}
  }, {
    // Other model options go here
    sequelize, // We need to pass the connection instance
    modelName: 'User' // We need to choose the model name
  });
  
module.exports = User;
