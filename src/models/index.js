import Album from "./album.js"
import Song from "./song.js"
import Genre from "./genre.js";

Album.hasMany(Song, { foreignKey: "album_id", as: "songs" });
Song.belongsTo(Album, { foreignKey: "album_id", as: "album" })

Album.belongsToMany(Genre, {
  through: {
    model: 'album_genre',
    timestamps: false
  },
  timestamps: false,
  foreignKey: 'album_id',
  otherKey: 'genre_id',
  as: 'genres'
});
Genre.belongsToMany(Album, {
  through: {
    model: 'album_genre',
    timestamps: false
  },
  foreignKey: 'genre_id',
  otherKey: 'album_id',
  as: 'albums'
});

export { Album, Song, Genre };
