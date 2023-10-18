import userModel from "./user.model.js"

const userCreateService=async(userData)=>{
    const user=await userModel.create(userData);
    return user;
}

export default {userCreateService};