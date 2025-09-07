import { Album } from "../models/index.js";
import { buildAlbumInclude } from "../helpers/albumHelpers.js";
import { Op, fn, col, where as sequelizeWhere } from "sequelize";

export const getAllAlbums = async (req, res) => {
    try {
        const include = buildAlbumInclude(req.query);
        const { name, year } = req.query;
        const where = {};
        if (name) {
            where.title = { [Op.like]: `%${name}%` };
        }
        if (year) {
            where[Op.and] = [
                sequelizeWhere(fn("YEAR", col("Album.release_date")), year)
            ];
        }
        const albums = await Album.findAll({
            include, where, distinct: true
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