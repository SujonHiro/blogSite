import express from "express"
import userRoutes from "../moduels/users/user.route.js";
import blogRoutes from "../moduels/blogs/blog.route.js";
const router=express.Router()
const moduleRoutes=[{
    path:"/users",
    route:userRoutes
    },
    {
    path:"/blogs",
    route:blogRoutes
}
]

moduleRoutes.forEach(route=>{
    router.use(route.path,route.route)
})

export default router;