import express from "express";
import {create,getAllUsers,getuserById,update,deleteUser} from "../controller/userController.js";


const route=express.Router();

route.post("/user",create);
route.get("/users",getAllUsers);
route.get("/user/:id",getuserById);
route.put("/user/:id",update);
route.delete("/user/:id",deleteUser);

export default route;