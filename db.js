const mongoose =require('mongoose')
require('dotenv').config();

const mongoURL=process.env.MONGODB_URL

mongoose.connect(mongoURL,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})

const db=mongoose.connection;
db.on('connected',()=>{
    console.log("connected to mongodb server");
})

db.on('error',(err)=>{
    console.log("connected to mongodb server",err);
})
db.on('disconnected',()=>{
    console.log("connected to mongodb server");
})

module.exports=db;