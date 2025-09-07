import MusicVideo from "../models/MusicVideo.js";

export const getAllVideos = async (req, res) => {
    try {
        const { name, director, year } = req.query;
        const where = {};

        if (name) where.name = name;
        if (director) where.director = director;
        if (year) where.year = year;

        const videos = await MusicVideo.findAll({ where });
        res.json(videos);
    } catch (err) {
        res.status(500).json({ error: 'Error fetching videos', details: err.message });
    }
};

export const getVideoById = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const video = await MusicVideo.findByPk(id);
        if (!video) {
            return res.status(404).json({ error: 'Music Video not found' });
        }
        res.json(video)
    } catch (error) {
        res.status(505).json({ error: error.message })
    }
}