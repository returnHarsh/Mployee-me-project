import mongoose from "mongoose";

export const ConnectDB = async()=>{
    try{
        const uri = process.env.MONGO_CONNECT_URI;
        await mongoose.connect(uri);
        console.log("database connected");
    }catch(error){
        console.log(error.mesasge);
    }
}