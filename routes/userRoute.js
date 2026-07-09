import express from "express";
import {create,getAllUsers,getuserById,update} from "../controller/userController.js";


const route=express.Router();

route.post("/user",create);
route.get("/users",getAllUsers);
route.get("/user/:id",getuserById);
route.put("/user/:id",update);

export default route;