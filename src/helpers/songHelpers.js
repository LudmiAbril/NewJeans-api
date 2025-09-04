import { Album } from "../models/index.js";

export const buildSongQuery = (query) => {
    const withAlbum = query.withAlbum === "true";
    const include = [];
    if (withAlbum) {
        include.push({
            model: Album,
            as: "album"
        });
    }
    return {
        attributes: { exclude: ["albumId"] },
        include
    };
};