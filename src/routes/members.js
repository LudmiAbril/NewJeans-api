import { Router } from 'express';
import { getAllMembers, getMemberById, getMemberByName } from '../controllers/memberController.js';

const router = Router();

/**
 * @swagger
 * /api/members:
 *   get:
 *     tags: [Member]
 *     summary: Get all members or filter by name
 *     description: Returns a list of all members. You can also filter by name using the `name` query parameter.
 *     parameters:
 *       - in: query
 *         name: name
 *         schema:
 *           type: string
 *           example: Minji
 *         required: false
 *         description: Stage name of the member to filter by
 *     responses:
 *       200:
 *         description: Members list (or single member if name is provided)
 *         content:
 *           application/json:
 *             schema:
 *               oneOf:
 *                 - type: array
 *                   items:
 *                     $ref: '#/components/schemas/Member'
 *                 - $ref: '#/components/schemas/Member'
 */
router.get('/', (req, res) => {
    if (req.query.name) {
        return getMemberByName(req, res);
    }
    return getAllMembers(req, res);
});

/**
 * @swagger
 * /api/members/{id}:
 *   get:
 *     tags: [Member]
 *     summary: Retrieve a member by ID
 *     description: Fetches a single member's details using their ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *           example: 1
 *         required: true
 *         description: ID of the member to retrieve
 *     responses:
 *       200:
 *         description: Member
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Member'
 */
router.get('/:id', getMemberById);

export default router;
