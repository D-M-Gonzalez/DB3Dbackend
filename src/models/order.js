import {Schema,model} from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";

const orderSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    surname: {
        type: String,
        required: true,
        trim: true,
    },
    phone: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        trim: true,
    },
    date: {
        type: Date,
    },
    status: {
        type: String,
        required: true,
        trim: true,
    },
    products: []
})

//Order model export
orderSchema.plugin(mongoosePaginate);
export default model('Order',orderSchema);