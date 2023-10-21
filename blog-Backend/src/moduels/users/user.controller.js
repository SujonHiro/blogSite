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


//Get Users
const getUsers=async(req,res)=>{
    const userGetData=req.user;
    const users=await userService.getUsersService(userGetData);
    res.status(200).json({
        success:true,
        data:users
    })
}


const getSpecificUser=async(req,res)=>{
    const userSpecificData=req.user;
    const userEmail=req.params.email;
    const user=await userService.getSpecificUserService(userSpecificData,userEmail);

    res.status(200).json({
        success:true,
        data:user
    })
}


export default {userCreate,loginUser,getUsers,getSpecificUser};