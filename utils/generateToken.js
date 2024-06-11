import jwt from "jsonwebtoken";

export const generateToken = async(res , user)=>{

    const token = await jwt.sign({user} , process.env.JWT_SECRET_KEY , { expiresIn: '1h' } );
    res.cookie('user' , token , {
        expires: new Date(Date.now() + 3600000), // Set expiration time to 1 hour from now
        httpOnly: true, // Cookie accessible only by the server
    } );
    return token;
}