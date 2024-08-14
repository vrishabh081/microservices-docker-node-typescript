import mongoose, { Model, model, Schema } from "mongoose";
import { UserCacheInterface } from "../utils/interface";

const userCacheSchema = new Schema<UserCacheInterface>({
    user_id: {
        type: mongoose.Schema.Types.ObjectId
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
})

interface IUserCacheModel extends UserCacheInterface, Document {}
const UserCacheModel: Model<IUserCacheModel> = model<IUserCacheModel>("usercache", userCacheSchema);

export default UserCacheModel;