
import mongoose, { Model, model, Schema } from "mongoose";
import { CompanyInterface } from "../utils/interface";

// User schema-
const companySchema = new Schema<CompanyInterface>({
    company_name: {
        type: String,
        default: null
    },
    company_address: {
        type: String,
        default: null
    },
    company_number: {
        type: String,
        required: true,
        unique: true
    },
    is_deleted: {
        type: Boolean,
        default: false
    }
})

interface ICompanyModel extends CompanyInterface, Document {}
const CompanyModel: Model<ICompanyModel> = mongoose.model<ICompanyModel>("company", companySchema);

export default CompanyModel