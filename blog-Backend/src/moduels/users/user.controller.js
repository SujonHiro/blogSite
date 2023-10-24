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
    const {searchText}=req.query;
    const usersall=await userService.getUsersService(userGetData,searchText);
    res.status(200).json({
        success:true,
        message:"Succefully fetched users",
        data:usersall
    })
}


const getSpecificUser=async(req,res)=>{
    const userEmail=req.params.email;
    const user=await userService.getSpecificUserService(userEmail);

    res.status(200).json({
        success:true,
        data:user
    })
}


export default {userCreate,loginUser,getUsers,getSpecificUser};