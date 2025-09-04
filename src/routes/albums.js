import { Router } from 'express';
import { getAlbumById, getAlbumByName, getAlbumsByYear, getAllAlbums } from '../controllers/albumController.js';

const router = Router();

router.get('/', getAllAlbums);

router.get('/id/:id', getAlbumById);

router.get('/name/:name', getAlbumByName);

router.get('/year/:year', getAlbumsByYear);

export default router;