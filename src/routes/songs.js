import { Router } from 'express';
import { getAllSongs, getSongById, getSongByName } from '../controllers/songController.js';

const router = Router();

router.get('/', getAllSongs);

router.get('/id/:id', getSongById);

router.get('/name/:name', getSongByName);

export default router;