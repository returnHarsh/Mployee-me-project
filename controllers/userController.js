import User from "../models/userModel.js";
import bcrypt from "bcrypt";
import {generateToken} from "../utils/generateToken.js";

export const userController = ()=>{
    return{
        login : async(req,res)=>{
            try{
                const {email , password} = req.body;

                console.log(req.body);
                
                const user = await User.findOne({email});
                if(!user) return res.status(401).json({error : "user not exsists"});

                const isPasswordMatch = bcrypt.compare(user.password , password);

                if(!isPasswordMatch) return res.status(401).json({error : "email or password is wrong"});

                await generateToken(res , user);

                console.log(user);

                return res.status(200).json({success : "user logged in successfully" , user});

            }catch(error){
                return res.status(500).json({error : error.message});
            }

        },
        signUp : async(req,res)=>{

            try{


                const {name , email , password} = req.body;
                const isUser = await User.findOne({email});
                if(isUser) return res.status(401).json({error : "user already exsists"});

                const salt = await bcrypt.genSalt(10);
                const hashedPassword = await bcrypt.hash(password , salt);

                const regex = /^(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
                if(!regex.test(password)) return res.status(400).json({error : "password in not strong enough"});

                const user = new User({
                    name , email , password : hashedPassword
                })

                await user.save();

                await generateToken(res,user);

                return res.status(200).json({success : "successfully registered" , user});


            }catch(error){
                return res.status(500).json({error : error.message})
            }
        },

        logout : async(req,res)=>{
            try{

                res.clearCookie("user");
                return res.json({success : "logged out successfully"});

            }catch(err){
                return res.json({error : err.message});
            }
        }

    }
}