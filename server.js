const express =require('express');
const db =require('./db.js');
const app =express();

const bodyParser =require('body-parser');
app.use(bodyParser.json());
require('dotenv').config();
const PORT =process.env.PORT || 3000;








app.get('/pooja',function(req,res){
    let person={
        name:"skns",
        class:"suhdud"
    }
    res.send(person)
    })



//import the router file
const personRoutes =require('./routes/personRoutes.js')
const MenuItemRoutes =require("./routes/menuRoutes.js");


//use the routers
app.use('/person',personRoutes)
app.use('/menu',MenuItemRoutes)
app.listen(3000,()=>{
    console.log("server is running")
})