import MusicVideo from "../models/MusicVideo.js";

export const getAllVideos = async (req, res) => {
    try {
        const videos = await MusicVideo.findAll();
        if (videos === 0) {
            return res.status(404).json({ error: 'Music videos not found' });
        }
        res.json(videos)
    } catch (error) {
        res.status(505).json({ error: error.message })
    }
}

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

export const getVideoByName = async (req, res) => {
    try {
        const name = req.params.name.toLowerCase();
        const video = await MusicVideo.findOne({ where: { title: name } });
        if (!video) {
            return res.status(404).json({ error: 'Music Video not found' });
        }
        res.json(video)
    } catch (error) {
        res.status(505).json({ error: error.message })
    }
}

export const getVideosByYear = async (req, res) => {
    try {
        const year = req.params.year;
        const videos = await MusicVideo.findAll({ where: { year: year } });
        if (videos === 0) {
            return res.status(404).json({ error: 'Music videos not found' });
        }
        res.json(videos)
    } catch (error) {
        res.status(505).json({ error: error.message })
    }
}

export const getVideosByDirector = async (req, res) => {
    try {
        const director = req.params.director.toLowerCase();
        const videos = await MusicVideo.findAll({ where: { director: director } });
        if (videos === 0) {
            return res.status(404).json({ error: 'Music videos not found' });
        }
        res.json(videos)
    } catch (error) {
        res.status(505).json({ error: error.message })
    }
}