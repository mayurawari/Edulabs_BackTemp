import { model, Schema } from "mongoose";

const taskschema=new Schema({
    title:{type:String,required:true},
    status:{type:String,enum:["pending","completed"],default:"pending",required:true},
    priority:{type:String,enum:["low","high"],default:"low",required:true},
    assigneduser:{type:String,required:true}
})

const taskmodel=model("tasks",taskschema);
export default taskmodel;