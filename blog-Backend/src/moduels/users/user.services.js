import userModel from "./user.model.js"
import  {createToken} from "../../helper/helper.js";
    



//signup service
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

//Login Service
const userLoginService = async (loginData) => {
    const user=await userModel.findOne({email:loginData.email});
    if(!user){
        throw new Error("User not found");
    }
    if(user.password===loginData.password){
        const  {email,role}=user;
        const accsessToken=createToken({email,role},process.env.JWT_SECRET,"1d");
        return {accsessToken}
    }else{
        throw new Error("Invalid password");
    }
}

//get user service

const getUsersService=async(userGetData,searchText)=>{

    let query={};
    if(searchText){
        query.$or=[
            {name:{$regex:searchText,$options:"i"}},
            {email:{$regex:searchText,$options:"i"}}
        ];
    }
    const users=await userModel.find(query)
    .select("-password")
    .populate("writtenBlogs")
        .populate("sharedBlogs")
        .exec()

        return users;
    //console.log(userGetData);
    /* if(userGetData.role!=="admin"){
        return "You are not admin";
    }
    const getUserData=await userModel.find();
    return getUserData;
         */
}
const getSpecificUserService=async(userEmail)=>{
    const userinfo=await userModel.findOne({email:userEmail})
    .select("-password")
    .populate("writtenBlogs")
    .populate("sharedBlogs")
    .exec(); 
    return userinfo;

    /* if(userSpecificData.role ==="admin"){
        const userinfo=await userModel.findOne({email:userEmail});
        return userinfo;
    }
    if(userSpecificData.email===userEmail){
        const userinfo=await userModel.findOne({email:userEmail});
        return userinfo;
    }
    return "Unauthorized Access"; */
}


export default { userCreateService,userLoginService,getUsersService,getSpecificUserService };