const express = require("express");


const Rate = require("../models/rates.model");

const router = express.Router();


router.post("/", async(req,res) =>{
    try{
        const rate = await Rate.create(req.body);
        return res.status(201).send(rate);

    }
    catch(e){
        return res.status(500).send(e.message);
    }
})

router.get("/rates", async(req,res) =>{
    try{

        const rate = await Rate.find().lean().exec();
        return res.status(200).send(rate); 

    }
    catch(e){
        return res.status(500).send(e.message);
    }
}







module.exports = router