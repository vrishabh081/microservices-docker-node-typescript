
import mongoose, { Model, model, Schema } from "mongoose";
import { UserInterface } from "../utils/interface";

// User schema-
const userSchema = new Schema<UserInterface>({
    company_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "company"
    },
    parent_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
        default: null
    },
    full_name: {
        type: String,
        default: null
    },
    user_name: {
        type: String,
        default: null
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        default: null
    },
    address: {
        type: String,
        default: null
    },
    age: {
        type: Number,
        default: null
    },
    is_deleted: {
        type: Boolean,
        default: false
    },
})

// User model-

interface IUserModel extends UserInterface, Document {}
const UserModel: Model<IUserModel> = mongoose.model<IUserModel>("user", userSchema);

export default UserModel