import { Request, Response } from "express";
import { ProductInterface } from "./utils/interface";
import ProductModel from "./model/product";
import { ObjectId } from "mongodb";

declare global {
    namespace Express {
        interface Request {
            user_id?: string; // Add user_id or any other custom properties you need
        }
    }
}

// Create product-
export const createProduct = async (req: Request<{}, {}, ProductInterface>, res: Response) => {
    try {
        const data = req.body;
        data.user_id = req.user_id;
        const result = new ProductModel(data);
        await result.save();
        
        return res.status(200).json({
            success: true,
            data: result
        })
    } 
    catch (error) {
        return res.status(500).json({
            success: false,
            data: error
        })
    }
};


// Get product-
export const getProduct = async (req: Request, res: Response) => {
    try {
        const data = req.query;
        data.user_id = req.user_id;

        const condition = {
            user_id: new ObjectId(data.user_id)
        }

        const agg: any = [
            {
                $match: condition
            }
        ];

        const result = await ProductModel.aggregate(agg);
        
        return res.status(200).json({
            success: true,
            data: result
        })
    } 
    catch (error) {
        return res.status(500).json({
            success: false,
            data: error
        })
    }
};