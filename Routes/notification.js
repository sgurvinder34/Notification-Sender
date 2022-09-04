const controller=require("../Controller/notification")

module.exports=(app)=>{
    app.post("/notiserv/api/v1/notifications",controller.acceptnotificationrequest)
    app.get("/notiserv/api/v1/notifications/:id",controller.getByTrackingId)
}