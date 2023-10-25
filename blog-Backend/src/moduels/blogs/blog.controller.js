import blogservice from './blog.service.js';

const createBlog = async (req,res) => {
    const userData=req.user;
    const BlogData= await blogservice.createblogService(userData,req.body);

    res.status(200).json({
        status:"Success",
        data:BlogData
    })
    
}

const getAllBlog = async (req,res) => {
    const {searchText,limit}=req.query;
    const getBlog= await blogservice.getallblogService(searchText,limit);
    res.status(200).json({
        success:true,
        data:getBlog
    })
    
}

const getSingleBlog=async(req,res)=>{
    const blogId=req.params.id;
    const blog=await blogservice.getSingleBlogService(blogId);

    res.status(200).json({
        success:true,
        data:blog
    })
}

const likeBlogs=async(req,res)=>{
    const userData=req.user;
    const blogId=req.params.id;
    const blog=await blogservice.likeBlogsService(userData,blogId);

    res.status(200).json({
        success:true,
        data:blog
    })
}
const shareBlogs=async(req,res)=>{
    const userData=req.user;
    const blogId=req.params.id;
    const blog=await blogservice.shareBlogsService(userData,blogId);

    res.status(200).json({
        success:true,
        data:blog
    })
}

export default{createBlog,getAllBlog,getSingleBlog,likeBlogs,shareBlogs};
