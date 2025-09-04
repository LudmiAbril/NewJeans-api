import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const MusicVideo = sequelize.define("MusicVideo", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    year: {
        type: DataTypes.DATEONLY,
        allowNull: false,
    },
    director: {
        type: DataTypes.STRING,
    },
    videoUrl: {
        type: DataTypes.STRING,
        field: "video_url"
    }
}, {
    tableName: "music_videos",
    timestamps: false
});

export default MusicVideo;