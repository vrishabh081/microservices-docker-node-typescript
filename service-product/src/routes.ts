import { Router } from 'express';
import { createProduct, getProduct } from './controller';
import { verifyToken } from './utils/commonFunction';

const router = Router();

router.post('/create-product', verifyToken, createProduct);
router.get('/get-product', verifyToken, getProduct);

export default router;
