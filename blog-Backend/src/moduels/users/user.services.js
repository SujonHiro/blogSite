import userModel from "./user.model.js"

const userCreateService=async(userData)=>{
    const exitingUser=await userModel.findOne({email: userData.email});
    if(exitingUser){
        throw new Error("Email already exist");
    }
    const user=await userModel.create(userData);
    return user;
}

export default {userCreateService};