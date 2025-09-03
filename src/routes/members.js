import { Router } from 'express';
import { getAllMembers, getMemberById, getMemberByName } from '../controllers/memberController.js';

const router = Router();

router.get('/', getAllMembers
);

router.get('/id/:id', getMemberById);

router.get('/name/:name', getMemberByName);

export default router;