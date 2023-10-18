import userService from "./user.services.js";
const userCreate=async(req,res)=>{
    const userData=req.body;
    const user=await userService.userCreateService(userData);

    res.status(201).json({
        success:true,
        data:user
    });
}

export default {userCreate}