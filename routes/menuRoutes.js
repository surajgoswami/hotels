
const express =require('express');
const router =express.Router();
const MenuItem =require('./../models/Menu');

router.get('/',async(req,res)=>{
    try{
 const data=await MenuItem.find();
 console.log('data fatched');
 res.status(200).json(data)
    }catch(error){
        console.log(error);
        res.status(500).json({error:'internal serverer error'});
    }
})


router.post('/',async(req,res)=>{
    try{
    const data=req.body
    const newMenu =new MenuItem(data)
    const response =await newMenu.save();
    console.log('data saved')
    res.status(200).json(response)
    }catch(error){
        console.log(error);
        res.status(500).json({error:'internal server error'})
    }
})


module.exports=router;