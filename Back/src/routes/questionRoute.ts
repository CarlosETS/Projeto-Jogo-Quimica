import express from 'express';
const router = express.Router();
import questionController from '../controllers/questionController';

router.post('/', questionController.create);
router.post('/disable/:id/', questionController.disable);
router.put('/update/:id/', questionController.update);
router.get('/getOne/:id/', questionController.getOneQuestion);
router.get('/getAll/', questionController.getAllQuestions);

export default router;