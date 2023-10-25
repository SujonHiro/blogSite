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
  
     /*.populate("comments")
    .populate("author")*/
    return blogs;
    
}

const getSingleBlogService=async(blogId)=>{
    const singleBlog=await blogsModel.findById(blogId);
     /*.populate("comments")
    .populate("author")*/
    return singleBlog;
}

const likeBlogsService=async(userData,blogId)=>{
    const blog=await blogsModel.findById(blogId);
    if(!blog){
        throw new Error("Blog not found");
    }
    const emailIndex=blog.likes.findIndex((item)=>item.email===userData.email);

    if(emailIndex===-1){
        blog.likes.push({email:userData.email,name:userData.name});
    }else{
        blog.likes.splice(emailIndex,1);
    }
    const updateBlog=await blog.save();
    return updateBlog;
}

const shareBlogsService=async(userData,blogId)=>{
    const blog=await blogsModel.findById(blogId);
    if(!blog){
        throw new Error("Blog not found");
    }
    const user=await User.findOne({email:userData.email});
    if(!user){
        throw new Error("User not found");
    }
    blog.shares.push(user._id);
    await blog.save();

    const userUpdate= await User.findOneAndUpdate({email:userData.email},
        {$push:{shares:blog.shares}},
        {new:true});

        return {blog,userUpdate}
}

export default{createblogService,getallblogService,getSingleBlogService,likeBlogsService,shareBlogsService};