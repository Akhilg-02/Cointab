const express=require("express")

const app=express()

app.use(express.json())

const rateController=require("./controllers/rate.controller");
const pinController=require("./controllers/pin.controller");


app.use("/rate",rateController);
app.use("/pin ",pinController);


module.exports=app