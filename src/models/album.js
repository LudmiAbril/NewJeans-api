import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const Album = sequelize.define("Album", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    type: {
        type: DataTypes.STRING,
    },
    releaseDate: {
        type: DataTypes.DATE,
        field: "release_date",
    },
    length: {
        type: DataTypes.TIME,
    },
    label: {
        type: DataTypes.STRING
    },
    coverImageUrl: {
        type: DataTypes.STRING,
        field: "cover_image_url"
    }
}, {
    tableName: "albums",
    timestamps: false
});

export default Album;