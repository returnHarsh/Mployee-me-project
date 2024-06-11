import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
    name : {type : String},
    email : {type : String},
    password : {type : String},
})

const User = mongoose.model("user" , userSchema);
export default User;