import { Request, Response } from "express";
import CompanyModel from "./model/company";
import UserModel from "./model/user";
import { RegisterInterface } from "./utils/interface";

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
        res.status(400).json({
            success: false,
            data: error
        })
    }
};
