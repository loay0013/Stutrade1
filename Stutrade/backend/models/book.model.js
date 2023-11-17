module.exports = (sequelize, DATATYPE) => {
  const book = sequelize.define("books", {
    bookID: {
      type: DATATYPE.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    bookName: {
      type: DATATYPE.STRING,
      allowNull: false,
    },
    bookDescription:{
      type: DATATYPE.STRING,
      allowNull: false,
    },
    /*genreID:{
      type:DATATYPE.INTEGER,
      allowNull: false,
      references: {
        model: 'genre',
        key: 'id',
      },
    }*/
  });

  return book;
};
