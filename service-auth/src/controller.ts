import { Request, Response } from "express";
import CompanyModel from "./model/company";
import UserModel from "./model/user";
import { LoginInterface, RegisterInterface } from "./utils/interface";
import { errorMessage, successMessage } from "./utils/responseMessage";
import { generateJwtToken } from "./utils/commonFunction";

// Register-
export const register = async (req: Request<{}, {}, RegisterInterface>, res: Response) => {
    try {
        // Flow - firstly company reg. then take its id, then user reg. and save id into it.
        const data = req.body;

        // Company registration-
        const companyData = new CompanyModel(data.company_info);
        const companyDetail = await companyData.save();

        // User registration-
        const userData = new UserModel({...data.user_info, company_id: companyDetail._id});
        const userDetail = await userData.save();

        res.status(200).json({
            success: true,
            data: userDetail
        })
    } 
    catch (error) {
        res.status(500).json({
            success: false,
            data: error
        })
    }
};

// Login-
export const login = async (req: Request <{}, {}, LoginInterface>, res: Response) => {
    try{
        // If email exist then check password, if matched then generate a token and return.
        const {email, password} = req.body;

        // Check whether email exist or not-
        const checkEmail = await UserModel.findOne({email});

        if(!checkEmail){
            return res.status(404).json({
                success: false,
                data: errorMessage.emailNotExist
            })
        }

        // If exist then check password-
        if(checkEmail.password !== password){
            return res.status(401).json({
                success: false,
                data: errorMessage.incorrectPassword
            })
        }

        // Genereate a token and return-
        const token = generateJwtToken(checkEmail._id)
        return res.status(200).json({
            success: true,
            data: successMessage.successLogin,
            token
        })
    }
    catch (error) {
        res.status(500).json({
            success: false,
            data: error
        })
    }
}