
import mongoose, { Model, model, Schema } from "mongoose";
import { ProductInterface } from "../utils/interface";


// User schema-
const productSchema = new Schema<ProductInterface>({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        default: null
    },
    product_title: {
        type: String,
    },
    product_description: {
        type: String,
        default: null
    },
    is_deleted: {
        type: Boolean,
        default: false
    },
})

// User model-

interface IProductModel extends ProductInterface, Document {}
const ProductModel: Model<IProductModel> = mongoose.model<IProductModel>("product", productSchema);

export default ProductModel