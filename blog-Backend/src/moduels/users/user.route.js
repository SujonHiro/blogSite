import express from "express";
import userController from "./user.controller.js";
const router=express.Router();



router.post("/signup",userController.userCreate)
router.post("/signin",userController.loginUser)
export default router;