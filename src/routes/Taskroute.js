import { Router } from "express";
import taskmodel from "../models/TaskSchema.js";
import role from "../middlewares/role.js";

const taskroute=Router();


taskroute.post("/createtask",role(["admin","user"]),async(req,res)=>{

    const {title,status,priority,assigneduser} =req.body;

    try {
        if(!title||!status||!priority||!assigneduser){
            return res.send("All fields Are required");
        }

        const checktask=await taskmodel.findOne({title:title});
        

        if(checktask){
            console.log("task with same name is already present. try to give different title");
        }

        const newtask=new taskmodel({title,status,priority,assigneduser});
        await newtask.save();

       res.send("new Task created");
    } catch (error) {
        console.log(error);
    }
})

taskroute.get("/alltasks",role(["admin","user"]),async(req,res)=>{
    try {
        const checktask=await taskmodel.find();

        res.status(200).json(checktask);

    } catch (error) {
        console.log(error);
    }
})

taskroute.patch("/updatetask/:id",role(["admin"]),async(req,res)=>{
    
    const {title,status,priority,assigneduser} =req.body;

    try {
        if(!title||!status||!priority||!assigneduser){
            return res.send("All fields Are required");
        }

        const checktask=await taskmodel.findById(req.params.id);
        

        if(!checktask){
            console.log("task not found");
        }
         
        checktask.title=title;
        checktask.status=status;
        checktask.priority=priority;
        checktask.assigneduser=assigneduser;

        
        await checktask.save();

       res.send(checktask);
    } catch (error) {
        console.log(error);
    }
})

taskroute.get("/filtertask",role(["admin","user"]),async(req,res)=>{
    
    const {status,priority,assigneduser} =req.body;

    try {

        const obj={};

        if(status){
            query.status=status;
        }
        else if(priority){
            query.priority=priority;
        }
        else if(assigneduser){
            query.assigneduser=assigneduser;
        }
        const checktask=await taskmodel.find(obj);
        // console.log(checktask);
        if(checktask.length ===0){
           return res.send("match not found");
        }

       res.send(checktask);
    } catch (error) {
        console.log(error);
    }
})

taskroute.delete("/deletetask/:id",role(["admin"]),async(req,res)=>{
    try {
        const checktask=await taskmodel.findByIdAndDelete(req.params.id);
        if(!checktask){
            return res.send("task already deleted");
        }
        res.send("task deleted");

    } catch (error) {
        console.log(error);
    }
})

export default taskroute;