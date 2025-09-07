import { Song, Genre } from "../models/index.js";

export const buildAlbumInclude = (query) => {
    const withSongs = query.withSongs === "true";
     const include = [
        { 
            model: Genre, 
            as: "genres",
            through: { attributes: [] }
        }
    ];
    if (withSongs) include.push({ model: Song, as: "songs" });
    return include;
};
