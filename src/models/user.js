import {Schema,model} from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";

//User schema and model definition
const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        trim: true,
    },
    password: {
        type: String,
        required: true    
    },
    name:{
        type: String,
        trim: true,
    },
    surname:{
        type: String,
        trim: true,
    },
    phone:{
        type: String,
        trim: true,
    },
    orders:[]
},{
    versionKey: false,
    timestamps: true
})

userSchema.plugin(mongoosePaginate);
export default model("user",userSchema);