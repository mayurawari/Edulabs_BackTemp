import jwt from "jsonwebtoken";
import BlacklistedToken from "../models/Blacklistedtoken.js";

const Authenticate = async (req, res, next) => {
   const header=req.headers.authorization;
   try {
    if(!header){
        return res.send("token is not provided");
    }

    const newtoken=header.split(" ")[1];
    const checktoken=await BlacklistedToken.findOne({exptoken:newtoken});
    if(checktoken){
       return res.send("user is logged out try to login");
    }

    jwt.verify(newtoken,process.env.PRRIVATE_KEY,(err,decoded)=>{
        if(err) return console.log("auth-token-verification-error",err);

        req.user=decoded;
        next();
    })

   } catch (error) {
     console.log(error);
   }
};

export default Authenticate;
