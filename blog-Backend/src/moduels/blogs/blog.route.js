import express from "express";
import blogController from "./blog.controller.js";
import auth from "../../middleware/auth.js"; 
const router = express.Router();

router.post("/create-blog",auth("admin","user"),blogController.createBlog);
router.get("/",blogController.getAllBlog);

export default router;