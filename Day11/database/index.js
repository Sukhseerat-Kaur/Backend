const { Sequelize } = require("sequelize");

/**
 * A table is an object inside a database. A database has tables of data, views, indexes and programs. A database can have 10 or thousands of tables.
database is a collection of several components like tables, indexes, stored procedures and so on. A table is a two dimensional structure that contains several columns and rows
 */
const sequelize = new Sequelize(
  "User", //Name of the database
  "admin", //Username (i guess the one which we had in postress, that is the username and password for access to the database)
  "123456789", //password for the username "admin" for access to the databse
  {
    host: "localhost",
    dialect: "postgres", //type of DB we are using. If at anytime in future, we decide that we now want mysql instead of postgres, we can change that here.
  }
);
