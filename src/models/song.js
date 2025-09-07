import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";
import Album from "./album.js";

const Song = sequelize.define("Song", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    releaseDate: {
        type: DataTypes.DATE,
        field: "release_date",
    },
    length: {
        type: DataTypes.TIME,
    },
    albumId: {
        type: DataTypes.INTEGER,
        field: "album_id",
        references: {
            model: Album,
            key: "id"
        },
        allowNull: true
    }
}, {
    tableName: "songs",
    timestamps: false
});

export default Song;