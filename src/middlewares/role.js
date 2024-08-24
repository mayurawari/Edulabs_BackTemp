

const role=(roles)=>{
   return function(req,res,next){
    // console.log(req.user);

    if(roles.includes(req.user.role)){
        next();
    }
    else{
        return res.send("you are not authorized");
    }
   }
}
export default role;