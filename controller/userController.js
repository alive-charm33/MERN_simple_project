import User from "../model/userModel.js";


export const create=async(req,res)=>{
    try{
        const newUser=new User(req.body);
        const {email}=newUser;
        const userExist=await User.findOne({email});
        if(userExist){
            return res.status(400).json({message:"User already exists"});
        }
        await newUser.save();
        res.status(201).json({message:"User created successfully", user: newUser});
    }catch(error){
        res.status(500).json({message:"Error creating user",error:error.message});
    }
}

export const getAllUsers=async(req,res)=>{
    try{
        const userData=await User.find();
        if(!userData){
            return res.status(404).json({message:"No users found"});
        }
        res.status(200).json({message:"Users found", users: userData});
    }catch(error){
        res.status(500).json({errorMessage:error.message});
    }
}

export const getuserById=async(req,res)=>{
    try{
        const id= req.params.id;
        const userExist = await User.findById(id);
        if(!userExist){
            return res.status(404).json({message:"User not found"});
        }
        res.status(200).json({message:"User found", user: userExist});
    }catch(error){
        res.status(500).json({errorMessage:error.message});
    }
}


export const update=async(req,res)=>{
    try{
        const id=req.params.id;
        const userExist=await User.findById(id);
        if(!userExist){
            return res.status(404).json({message:"User not found"});
        }
        const updatedData=await User.findByIdAndUpdate(id,req.body,{new:true});
        res.status(200).json({updatedData});
    }catch(error){
        res.status(500).json({errorMessage:error.message});
    }
}