const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const Song = sequelize.define("Song", {
    title: DataTypes.STRING,
    artist: DataTypes.STRING,
    genre: DataTypes.STRING,
    album: DataTypes.STRING,
    albumImageUrl: DataTypes.STRING,
    youtubeId: DataTypes.STRING,
    lyrics: DataTypes.TEXT,
    tab: DataTypes.TEXT,
  });

  Song.associate = function (models) {
  }
  
  return Song;
};