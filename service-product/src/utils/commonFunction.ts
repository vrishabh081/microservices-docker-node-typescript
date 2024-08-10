import { NextFunction, Request, Response } from "express";
import { errorMessage } from "./responseMessage";
import { ObjectId } from "mongodb";
import { verify } from "jsonwebtoken";
import { JwtPayloadInterface } from "./interface";

export const verifyToken = async (req: Request, res: Response, next: NextFunction) => {
    try{
        let token = req.headers.authorization; 
        token = token?.split(" ")[1];
        if(!token){
            return res.status(404).json({
                success: false,
                data: errorMessage.needToken
            })
        }

        const data = verify(token, `${process.env.JWT_SECRET_KEY}`) as JwtPayloadInterface;

        if(!data){
            return res.status(401).json({
                success: false,
                data: errorMessage.unauthorized
            })
        }

        const user_id = data.id;
        console.log(user_id);
    }
    catch(error){
        return res.status(500).json({
            success: false,
            data: error
        })
    }
}