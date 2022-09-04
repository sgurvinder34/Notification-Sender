const express=require("express")
const app=express()
const mongoose=require("mongoose")
const dbconfig=require("./Config/db.config")
const bodyparser=require("body-parser")
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended:true}));

mongoose.connect(dbconfig.DB_URL,()=>{
    console.log("Connected To Mongo DB")
},err=>{
    console.log(err)
})


require("./Routes/notification")(app)
require("./scheduler/emailschedule")

app.listen(8080,()=>{
    console.log("You Are Connected To PORT:",8080)
    console.log("Server Started")
})