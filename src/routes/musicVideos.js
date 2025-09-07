import { Router } from 'express';
import { getAllVideos, getVideoById } from '../controllers/musicVideoController.js';
const router = Router();

/**
 * @swagger
 * /api/mv:
 *   get:
 *     tags: [MusicVideo]
 *     summary: Get all videos or filter by name, director, or year
 *     description: >
 *       Returns a list of all music videos.  
 *       You can filter results by providing one of the query parameters: `name`, `director`, or `year`.
 *     parameters:
 *       - in: query
 *         name: name
 *         schema:
 *           type: string
 *           example: How Sweet
 *         required: false
 *         description: Filter videos by name.
 *       - in: query
 *         name: director
 *         schema:
 *           type: string
 *           example: Shin Hee-won
 *         required: false
 *         description: Filter videos by director.
 *       - in: query
 *         name: year
 *         schema:
 *           type: integer
 *           example: 2024
 *         required: false
 *         description: Filter videos by release year.
 *     responses:
 *       200:
 *         description: List of videos (or filtered video(s) if a query parameter is provided).
 *         content:
 *           application/json:
 *             schema:
 *               oneOf:
 *                 - type: array
 *                   items:
 *                     $ref: '#/components/schemas/MusicVideo'
 *                 - $ref: '#/components/schemas/MusicVideo'
 */
router.get('/', getAllVideos);

/**
 * @swagger
 * /api/mv/{id}:
 *   get:
 *     tags: [MusicVideo]
 *     summary: Retrieve a video by ID
 *     description: Fetches a single mv using its unique ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *           example: 1
 *         required: true
 *         description: ID of the mv to retrieve.
 *     responses:
 *       200:
 *         description: Video object
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/MusicVideo'
 */
router.get('/:id', getVideoById);

export default router;
