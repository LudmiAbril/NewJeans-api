import { buildSongQuery } from "../helpers/songHelpers.js";
import Song from "../models/song.js";

export const getAllSongs = async (req, res) => {
    try {
        const options = buildSongQuery(req.query);
        const songs = await Song.findAll(options);
        res.json(songs);
    } catch (error) {
        res.status(505).json({ error: error.message });
    }
}

export const getSongById = async (req, res) => {
    try {
        const options = buildSongQuery(req.query);
        const id = parseInt(req.params.id);
        const song = await Song.findByPk(id, options);
        if (!song) {
            return res.status(404).json({ error: 'Song not found' });
        }
        res.json(song);
    } catch (error) {
        res.status(505).json({ error: error.message });
    }
}

export const getSongByName = async (req, res) => {
    try {
        const options = buildSongQuery(req.query);
        const name = req.params.name.toLowerCase();
        const song = await Song.findOne({ where: { title: name }, ...options });
        if (!song) {
            return res.status(404).json({ error: 'Song not found' });
        }
        res.json(song);
    } catch (error) {
        res.status(505).json({ error: error.message });
    }
}