import userService from "./user.services.js";

//signup
const userCreate=async(req,res)=>{
    const userData=req.body;
    const user=await userService.userCreateService(userData);

    res.status(201).json({
        success:true,
        data:user
    });
}

//For Login
const loginUser=async(req,res)=>{
    const loginData=req.body;
    const result=await userService.userLoginService(loginData);
    
    res.status(200).json({
        success:true,
        data:result
    });
}

export default {userCreate,loginUser}