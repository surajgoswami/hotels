const express =require('express');
const router =express.Router()
const Person =require('./../models/Person')

//POST route add a person
router.post('/',async(req,res)=> {
    // const data =req.body //assuming the request 
     //create a new person document using the mongoose model
     // const newPerson = new Person(data);
     // newPerson.name =data.name;
     // newPerson.age =data.age;
     // newPerson.mobile=data.mobile;
     // newPerson.email=data.email;
     // newPerson.address=data.address
     // newPerson.save((error,savedperson)=>{
     //     if(error){
     //         console.log("error saving person",error);
     //         res.status(500).json({error:'internal server error'})
     //     }
     //     else{
     //         console.log("data saved successfully")
     //         res.status(200).json(savedperson)
     //     }
     // })
 
     try{
     const data=req.body
   const newPerson=new Person(data);
 
   const response =await newPerson.save();
   console.log('data saved');
   res.status(200).json(response);
 
     }catch(error){
 console.log(error)
 res.status(500).json({error:'internal server error'})
     }
 })

 //GET method to get the person
router.get('/',async(req,res)=>{
    try{
const data=await Person.find();
console.log("data fatched")
res.status(200).json(data)
    }catch(error){
        console.log(error)
        res.status(500).json({error:'internal server error'})
    }
})

router.get('/:workType',async(req,res)=>{
    try{
        const workType =req.params.workType; //extract the work typefrom the url parameter
        if(workType =='chef'||workType =='manager'||workType == 'waiter'){
            const response =await Person.find({work:workType});
            console.log('response fatched');
            res.status(200).json(response)
        }else{
            res.status(404).json({error:'invalid work type'})
        }
    }catch(error){
     console.log(error);
     res.status(500).json({error:"internal server error"})
    }
})

router.put('/:id',async(req,res)=>{
    try{
  const personId =req.params.id;
  const updatedPersonData =req.body;

  const response =await Person.findByIdAndUpdate(personId,updatedPersonData,{
    new:true,
    runValidators:true,
  })
  if(!response){
    return res.status(404).json({error: 'Person not found'})
  }

  console.log('data updated')
  res.status(200).json(response)
    }catch(error){
console.log(error)
res.status(500).json({error:'internal server error'})
    }
})

router.delete('/:id',async(req,res)=>{
    try{
      const personId =req.params.id; //extract the person's id from the url paramenter
      //assuming you have a person model
      const response =await Person.findByIdAndRemove(personId);
      if(!response){
        return res.status(404).json({error: 'Person not found'})
      }
    }catch(error){
     console.log('data delete');
     res.status(200).json({message:'person deleted successfully'});
    }
})
module.exports =router;



