require("dotenv").config({ path: `.env.local`, override: true });
const Sequelize = require("sequelize");
const sequelize = new Sequelize("book", "root", "Rasubeli8", {
  host: "localhost",
  dialect: "mysql",
  port: 3306,
  password: process.env.SECRET,
});


const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.book = require("./book.model.js")(sequelize, Sequelize);
// db.genre = require("./genre.model.js")(sequelize, Sequelize);

/*db.book.belongsTo(db.genre, {
  foreignKey: 'genre_id',
  as: 'genre',
});

db.genre.hasMany(db.book, {
  foreignKey: 'genre_id',
  as: 'books',
});*/

module.exports = db;
