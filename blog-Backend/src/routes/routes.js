import express from "express"
const router=express.Router()
import userRoutes from "../moduels/users/user.route.js";
const moduleRoutes=[{
    path:"/users",
    route:userRoutes
    }
]

moduleRoutes.forEach(route=>{
    router.use(route.path,route.route)
})

export default router;