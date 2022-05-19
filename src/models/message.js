import {Schema,model} from "mongoose";

//Product schema definition with a child brand
const messageSchema = new Schema({
    message: {
        type: String,
        required: true,
        trim: true
    },
},{
    versionKey: false,
    timestamps: true
})

//Message model export
export default model('Message',messageSchema);