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
export default{createBlog,getAllBlog};
