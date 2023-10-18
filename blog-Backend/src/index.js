import mongoose from "mongoose"
import  app from "./app.js";

const port=process.env.PORT || 5000;

async function main(){
    try{
        await mongoose.connect(process.env.DB);
        console.log("Connected to MongoDB");
        app.listen(port,()=>{
            console.log(`Server is running on port ${port}`);
        });
    }catch(err){
        console.log("Faild",err)
    }
}
main();