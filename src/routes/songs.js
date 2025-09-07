import { Router } from 'express';
import { getAllSongs, getSongById, getSongByName } from '../controllers/songController.js';

const router = Router();

/**
 * @swagger
 * /api/songs:
 *   get:
 *     tags: [Song]
 *     summary: Get all songs or filter by name
 *     description: Returns a list of all songs. You can also filter by song name using the `name` query parameter.
 *     parameters:
 *       - in: query
 *         name: name
 *         schema:
 *           type: string
 *           example: Attention
 *         required: false
 *         description: Song title to filter by.
 *       - in: query
 *         name: withAlbum
 *         schema:
 *           type: boolean
 *           example: true
 *         required: false
 *         description: Whether to include album information for each song.
 *     responses:
 *       200:
 *         description: Songs list (or single song if name is provided)
 *         content:
 *           application/json:
 *             schema:
 *               oneOf:
 *                 - type: array
 *                   items:
 *                     $ref: '#/components/schemas/Song'
 *                 - $ref: '#/components/schemas/Song'
 */
router.get('/', (req, res) => {
  if (req.query.name) {
    return getSongByName(req, res);
  }
  return getAllSongs(req, res);
});

/**
 * @swagger
 * /api/songs/{id}:
 *   get:
 *     tags: [Song]
 *     summary: Retrieve a song by ID
 *     description: Fetches a single song´s details using its ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *           example: 1
 *         required: true
 *         description: Song ID.
 *       - in: query
 *         name: withAlbum
 *         schema:
 *           type: boolean
 *           example: true
 *         required: false
 *         description: Whether to include album information for the song.
 *     responses:
 *       200:
 *         description: Song
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Song'
 */
router.get('/:id', getSongById);

export default router;
