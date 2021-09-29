const { DataTypes } = require("sequelize");
const sequelize = require("../database/index");

//Models are the essence of Sequelize. A model is an abstraction that represents a table in your database.
//The model tells Sequelize several things about the entity it represents, such as the name of the table in the database and which columns it has (and their data types).
//Like tells the format of the table
//A model in Sequelize has a name. This name does not have to be the same name of the table it represents in the database. Usually, models have singular names (such as User) while tables have pluralized names (such as Users), although this is fully configurable

//User is the model name        Users is the name of the table in the database
const User = sequelize.define("Users", {
  //Model attributes
  fullName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = User;

//By default, when the table name is not given, Sequelize automatically pluralizes the model name and uses that as the table name. This pluralization is done under the hood by a library called inflection, so that irregular plurals (such as person -> people) are computed correctly.
