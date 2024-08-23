import { model, Schema } from "mongoose";

const userschema=new Schema({
    username:{type:String,required:true},
    email:{type:String,required:true},
    password:{type:String,required:true},
    role:{type:String,enum:["admin","user"],default:"user",required:true}
})

const usermodel=model("Users",userschema);

export default usermodel;