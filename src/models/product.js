import {Schema,model} from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";

//Product schema definition with a child brand
const productsSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    price: {
        type: Number,
        required: true,
    },
    category: {
        type: String,
        trim: true
    },
    subcategory: {
        type: String,
        trim: true
    },
    description1: {
        type: String,
        default: ""       
    },
    description2: {
        type: String,
        default: ""
    },
    tags: [String],
    date: {
        type: Date,
    },
    images: [String],
},{
    versionKey: false,
    timestamps: true
})

//Product model export
productsSchema.plugin(mongoosePaginate);
export default model('Product',productsSchema);