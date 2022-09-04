const Notification=require("../Models/notification")


exports.acceptnotificationrequest=async(req,res)=>{
    try{
        const notificationobj={
            subject:req.body.subject,
            recepientEmail:req.body.recepientEmail,
            content:req.body.content,
            requester:req.body.requester,
            status:req.body.status

        }

        const notification= await Notification.create(notificationobj)
        res.status(201).send({
            message:"Request Accepted",
            tracking_id:notification._id
        })
    }
    catch(err){
        console.log("controller/notification/accpetnotification",err)
        res.status(500).send("There was an error from our side")
    }
}

exports.getByTrackingId=async(req,res)=>{
    try{
        const notification=await Notification.findOne({_id:req.params.id})
        console.log(notification)
        res.status(200).send(notification)
    }
    catch(err){
        console.log("controller/notification/getByTrackingId",err)
        res.status(500).send("There was an error from our side")
    }
}