import express from "express";
import userController from "./user.controller.js";
import auth from "../../middleware/auth.js";
const router=express.Router();



router.post("/signup",userController.userCreate)
router.post("/signin",userController.loginUser)
router.get("/",auth("admin"),userController.getUsers);
router.get("/:email",auth("admin","user"),userController.getSpecificUser);
export default router;