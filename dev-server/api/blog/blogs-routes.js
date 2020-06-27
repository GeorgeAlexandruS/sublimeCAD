import express from 'express';
const router = express.Router();
import * as controller from './blogs-controller';
import * as auth from '../../services/auth-service';

router.post('/blog', auth.requireLogin, controller.create);
router.get('/blog', controller.index);
router.get('/blog/:id', controller.show);
router.put('/blog', auth.requireLogin, controller.update);
router.delete('/blog/:id', auth.requireLogin, controller.remove);

export default router;
