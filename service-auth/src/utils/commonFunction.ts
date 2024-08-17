import { sign } from "jsonwebtoken"
import { errorMessage } from "./responseMessage";
import { ObjectId } from "mongodb";

export const generateJwtToken = (id: ObjectId): string => {
    try{
        const key = sign({id}, `${process.env.JWT_SECRET_KEY}`, {expiresIn: "7d"})
        return key
    }
    catch(error){
        console.log(error);
        throw new Error (errorMessage.jwtFailure)
    }
}