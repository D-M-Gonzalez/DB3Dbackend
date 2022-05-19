import {Schema,model} from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";

//User schema and model definition
const userSchema = new Schema({
    user_name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true    
    }
},{
    versionKey: false,
    timestamps: true
})

userSchema.plugin(mongoosePaginate);
export default model("user",userSchema);