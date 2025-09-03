import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const Member = sequelize.define("Member", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    stageName: {
        type: DataTypes.STRING,
        allowNull: false,
        field: "stage_name"
    },
    birthName: {
        type: DataTypes.STRING,
        allowNull: false,
        field: "birth_name"
    },
    role: {
        type: DataTypes.STRING,
    },
    birthDate: {
        type: DataTypes.DATE,
        field: "birthdate"
    },
    nationality: {
        type: DataTypes.STRING
    },
    imageUrl: {
        type: DataTypes.STRING,
        field: "image_url"
    }
}, {
    tableName: "members",   
    timestamps: false       
});

export default Member;