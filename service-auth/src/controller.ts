import { Request, Response } from "express";

export const register = async (req: Request, res: Response) => {
    try {
        const obj = {
            name: "ABC",
            email: "abc@gmail.com"
        }
        res.status(200).json({
            success: true,
            message: obj
        })
    } 
    catch (error) {
        res.status(200).json({
            success: false,
            message: error
        })
    }
};
