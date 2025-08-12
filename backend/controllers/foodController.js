import foodModel from '../models/foodModel.js';
import fs from 'fs';

// add food item
const addFood=async (req,res)=>{
    if (!req.file) {
        return res.status(400).json({ success: false, message: 'Image file is required' });
    }
    
    let image_filename=`${req.file.filename}`;
    const {name,description,price,category}=req.body;

    const food=new foodModel({
        name:name,
        description:description,
        price:price,
        category:category,
        image:image_filename
    })
    try{
        await food.save();
        res.json({success:true, message:'Food added'});
    }
    catch(error){
        console.error('Error adding food:', error);
        res.status(500).json({ success: false, message: 'Server Error' });
    }
}

// all food list
const listFood=async (req,res)=>{
    try {
        const foods=await foodModel.find({});
        res.json({success:true, data:foods});
    } catch (error) {
        console.log(error);
        res.json({success:false,message:'Error'});
    }
}

// remove food item
const removeFood=async (req,res)=>{
    try {
        const food=await foodModel.findById(req.body.id);
        fs.unlink(`uploads/${food.image}`,()=>{});

        await foodModel.findByIdAndDelete(req.body.id);
        res.json({success:true,message:'Food removed'});
    } catch (error) {
        console.log(error);
        res.json({success:false,message:'Error'});
    }
}

export {addFood, listFood, removeFood};