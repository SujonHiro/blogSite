import express from "express";
import userController from "./user.controller.js";
const router=express.Router();



router.post("/signup",userController.userCreate)
export default router;