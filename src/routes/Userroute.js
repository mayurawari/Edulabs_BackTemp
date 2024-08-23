import { Router } from "express";
import usermodel from "../models/Usermodel.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { config } from "dotenv";
config();
const key=process.env.PRRIVATE_KEY;
const userrorute = Router();

userrorute.get("/", (req, res) => {
  try {
    res.send("this is user route");
  } catch (error) {
    console.log(error);
  }
});

userrorute.post("/register", async(req, res) => {
  const { username, email, password } = req.body;

  try {
    if (!username || !email || !password) {
      return res.send("Please Fill the details");
    }
    const existuser =await usermodel.findOne({ username: username });

    if (existuser) {
      return res.send("User Already registred please try to login 🔓");
    }

    bcrypt.hash(password, 4, async function (err, hash) {
      if (err) return console.log(err);

      const newuser = new usermodel({ username, email, password: hash });
      await newuser.save();
    });

    res.status(200).send("User Successfully registred");
  } catch (error) {
    console.log(error);
  }
});

userrorute.post("/login", async(req, res) => {
    const {username,password}=req.body;
  try {
    if(!username||!password){
        return res.send("please fill out all the feilds");
    }
    const existuser=await usermodel.findOne({username:username});

    if(!existuser){
        return res.send("please register yourself and try to login");
    }

    bcrypt.compare(password,existuser.password ,function(err,result){
        if(err) console.log("bcrypt-login-error",err);


        jwt.sign({username:existuser.username,password:existuser.password,role:existuser.role}, key, { algorithm: 'HS256' }, function(err, token) {
            
            if(err) console.log("token", err);
    
            const accesstoken= token;
            console.log("accesstoken: ",accesstoken);
    
          });
    })

     res.status(200).send("user logedin succesfully");

  } catch (error) {
     console.log(error);
  }
});

export default userrorute;