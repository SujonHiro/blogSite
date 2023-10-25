import express from "express";
import blogController from "./blog.controller.js";
import auth from "../../middleware/auth.js"; 
const router = express.Router();

router.post("/create-blog",auth("admin","user"),blogController.createBlog);
router.get("/",blogController.getAllBlog);
router.get("/:id",blogController.getSingleBlog);
router.post("/like/:id",auth("admin","user"),blogController.likeBlogs);
router.post("/share/:id",auth("admin","user"),blogController.shareBlogs);
export default router;