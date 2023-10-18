import express, { urlencoded } from 'express';
const app=express();
import router from './routes/routes.js';
//import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();
import cors from 'cors';
import helmet from 'helmet';
import httpStatus from 'http-status';


app.use(cors());
app.use(express.json());
app.use(helmet());
app.use(express.urlencoded({extended:true}));


/* app.get("/", (req, res) => {
    res.send("Server is running and you can assuredly access it");
}) */
app.use("/api/v1",router);
app.use((req,res)=>{
    res.status(httpStatus.NOT_FOUND).json({
    success:false,
    message:"Route not found",
    errorMessage:[{
        path:"",
        message:"API Not Found"
    }]
   });
})

export default app;