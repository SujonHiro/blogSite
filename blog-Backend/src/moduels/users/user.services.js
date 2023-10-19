import userModel from "./user.model.js"
import  createToken from "../../helper/helper.js";

const userCreateService = async (userData) => {
    try {
        const existingUser = await userModel.findOne({ email: userData.email });
        if (existingUser) {
            throw new Error("Email already exists");
        } else {
            const user = await userModel.create(userData);
            return user;
        }
    } catch (error) {
        throw error;
    }
};


const userLoginService = async (loginData) => {
    const user=await userModel.findOne({email:loginData.email});
    if(!user){
        throw new Error("User not found");
    }
    if(user.password===loginData.password){
        const  {email,role}=user;
        const accsessToken=createToken({email,role},process.env.JWT_SECRET,"1h");
        return {accsessToken}
    }else{
        throw new Error("Invalid password");
    }
}

export default { userCreateService,userLoginService };