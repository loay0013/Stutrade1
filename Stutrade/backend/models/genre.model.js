module.exports = (sequelize, DATATYPE) => {
  const genre = sequelize.define("genres", {
    genreID: {
      type: DATATYPE.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    genreName: {
      type: DATATYPE.STRING,
      allowNull: false,
    },
  });

  return genre;
};
