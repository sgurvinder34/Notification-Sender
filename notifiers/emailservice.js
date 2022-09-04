const nodemailer=require("nodemailer")

module.exports=nodemailer.createTransport({
    port:465,
    service:"gmail",
    auth:{
        user:'sgurvinder34@gmail.com',
        pass:"rocaqwivrtbztqty"
    },
    secure:true
})