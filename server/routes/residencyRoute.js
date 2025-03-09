import express from 'express';
import { createResidency, getAllResidencies, getResidency } from '../controllers/residencyController.js';

const router = express.Router();

router.post('/create', createResidency);
router.get('/allresd', getAllResidencies);
// router.get('/:id', getResidency); // Only one instance of this line

export { router as residencyRoute };