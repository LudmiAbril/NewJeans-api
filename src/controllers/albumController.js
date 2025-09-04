import sequelize from "../config/database.js";
import { Album } from "../models/index.js";
import { buildAlbumInclude } from "../helpers/albumHelpers.js";

export const getAllAlbums = async (req, res) => {
    try {
        const include = buildAlbumInclude(req.query);
        const albums = await Album.findAll({
            include
        });
        res.json(albums)
    } catch (error) {
        res.status(505).json({ error: error.message })
    }
}

export const getAlbumById = async (req, res) => {
    try {
        const include = buildAlbumInclude(req.query);
        const id = parseInt(req.params.id);
        const album = await Album.findByPk(id, {
            include
        });
        if (!album) {
            return res.status(404).json({ error: 'Album not found' });
        }
        res.json(album)
    } catch (error) {
        res.status(505).json({ error: error.message })
    }
}

export const getAlbumByName = async (req, res) => {
    try {
        const include = buildAlbumInclude(req.query);
        const name = req.params.name.toLowerCase();
        const album = await Album.findOne({
            where: { title: name }, include
        });
        if (!album) {
            return res.status(404).json({ error: 'Album not found' });
        }
        res.json(album)
    } catch (error) {
        res.status(505).json({ error: error.message })
    }
}

export const getAlbumsByYear = async (req, res) => {
    try {
        const include = buildAlbumInclude(req.query);
        const year = req.params.year;
        const albums = await Album.findAll({
            where: sequelize.where(
                sequelize.fn("YEAR", sequelize.col("Album.release_date")),
                year
            ),
            include
        });
        if (!albums) {
            return res.status(404).json({ error: 'Album not found' });
        }
        res.json(albums)
    } catch (error) {
        res.status(505).json({ error: error.message })
    }
}