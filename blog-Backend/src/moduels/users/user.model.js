import mongoose from "mongoose";

const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true
    },
    writtenBlogs:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Blog",
        default:[]
    }],
    profilePic:{
        type:String,
        required:true
    },
    role:{
        type:String,
        enum:["admin","user"],
        required:true,
        default:"user"
}}
,{timestamps:true,versionKey:false}
);

const User=mongoose.model("users",userSchema);

export default User;