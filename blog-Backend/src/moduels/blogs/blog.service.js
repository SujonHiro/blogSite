import User from "../users/user.model.js";
import blogsModel from './blog.model.js'

const createblogService=async(userData,blogData)=>{
    if(!userData){
        throw new Error("User not found");
    }
    const newBlog=await blogsModel.create(blogData);
    return newBlog;
}

const getallblogService=async(searchText,limit)=>{
    let query={};
    
    if(searchText){
        query.$or=[
            {title:{$regex:searchText,$options:"i"}},
            {content:{$regex:searchText,$options:"i"}
        }
    ]
    }
    const blogs=await blogsModel.find(query)
   .limit(limit)
  
     /* .populate("comments")
    .populate("author") */
    return blogs;
    
}

export default{createblogService,getallblogService};