import { Router } from 'express';
import { createProduct } from './controller';
import { verifyToken } from './utils/commonFunction';

const router = Router();

router.post('/create-product', verifyToken, createProduct);

export default router;
