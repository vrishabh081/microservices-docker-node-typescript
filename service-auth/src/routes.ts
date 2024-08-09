import { Router } from 'express';
import { login, register, uploadMedia } from './controller';

const router = Router();

router.post('/upload-media', uploadMedia);
router.post('/register', register);
router.post('/login', login);

export default router;
