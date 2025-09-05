import { Router } from 'express';
import { getAllVideos, getVideoById, getVideoByName, getVideosByDirector, getVideosByYear } from '../controllers/musicVideoController.js';

const router = Router();

router.get('/', getAllVideos);

router.get('/id/:id', getVideoById);

router.get('/name/:name', getVideoByName);

router.get('/director/:director', getVideosByDirector);

router.get('/year/:year', getVideosByYear);

export default router;