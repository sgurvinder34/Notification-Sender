const mongoose=require("mongoose")

const notificationobj=new mongoose.Schema({
    subject:{
        type:String,
        required:true
    },
    recepientEmail:{
        type:String,
        required:true
    },
    content:{
        type:String,
        required:true
    },
    requester:{
        type:String
    },
    status:{
        type:String,
        default:"UN_SENT",
        enum:["UN_SENT","SENT"]
    },
    createdAt:{
        type:Date,
        immutuable:true,
        default:()=>{
            return Date.now()
        }
    },
    updatedAt:{
        type:Date,
        default:()=>{
            Date.now()
        }
    }
});

module.exports=mongoose.model("Notification",notificationobj)