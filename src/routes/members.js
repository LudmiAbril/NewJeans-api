import { Router } from 'express';
import { getAllMembers } from '../controllers/memberController.js';

const router = Router();

router.get('/', getAllMembers
);

// router.get('/:id', (req, res) => { 
// });

// router.get('/:name', (req, res) => {
// });

export default router;