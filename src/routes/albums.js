import { Router } from 'express';
import { getAlbumById, getAllAlbums } from '../controllers/albumController.js';
const router = Router();

/**
 * @swagger
 * /api/albums:
 *   get:
 *     tags: [Album]
 *     summary: Get all albums or filter by name or year
 *     description: >
 *       Returns a list of all albums.  
 *       You can filter results by providing one of the query parameters: `name`, or `year`.
 *     parameters:
 *       - in: query
 *         name: name
 *         schema:
 *           type: string
 *           example: Supernatural
 *         required: false
 *         description: Filter albums by name.
 *       - in: query
 *         name: year
 *         schema:
 *           type: integer
 *           example: 2023
 *         required: false
 *         description: Filter albums by release year.
 *     responses:
 *       200:
 *         description: List of albums (or filtered album(s) if a query parameter is provided).
 *         content:
 *           application/json:
 *             schema:
 *               oneOf:
 *                 - type: array
 *                   items:
 *                     $ref: '#/components/schemas/Album'
 *                 - $ref: '#/components/schemas/Album'
 */
router.get('/', getAllAlbums);

/**
 * @swagger
 * /api/albums/{id}:
 *   get:
 *     tags: [Album]
 *     summary: Retrieve an album by ID
 *     description: Fetches a single album's details using their ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *           example: 1
 *         required: true
 *         description: ID of the album to retrieve
 *     responses:
 *       200:
 *         description: Album
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Album'
 */
router.get('/:id', getAlbumById);

export default router;