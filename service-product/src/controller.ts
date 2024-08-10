import { Request, Response } from "express";

// Register-
export const createProduct = async (req: Request, res: Response) => {
    try {
        console.log(req.body);
        res.status(200).json({
            success: true,
            data: "Testing"
        })
    } 
    catch (error) {
        return res.status(500).json({
            success: false,
            data: error
        })
    }
};