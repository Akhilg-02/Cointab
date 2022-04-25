
const express = require("express");


const Pin = require("../models/pin.model");

const router = express.Router();

router.get("/pin", async(req,res) =>{
    try{

        const pin = await Pin.find().lean().exec();
        return res.status(200).send(pin); 

    }
    catch(e){
        return res.status(500).send(e.message);
    }
}









module.exports = router