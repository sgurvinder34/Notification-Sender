const cron=require("node-cron")
const Notification=require("../Models/notification")
const emailtransport=require("../notifiers/emailservice")

cron.schedule("*/30 * * * * *",async()=>{
    console.log("Inside Scheduler")
    const notification=await Notification.find({status:"UN_SENT"});
    console.log(notification)
    if(notification){
        console.log("Number of Unsent Emails Are:",notification.length)
        notification.forEach(n=>{
            const mailobj={
                to:n.recepientEmail,
                subject:n.subject,
                text:n.content
            }
            console.log("Sending email to:",mailobj)
            console.log("-----------------------------------------")
            emailtransport.sendMail(mailobj,async(err,info)=>{
                console.log("----------------------")
                if(err){
                    console.log(err)
                }
                if(info){
                    console.log("Mail sent",info)
                }
                n.status="SENT",
                await n.save()
            })
        })
        
    }

})
