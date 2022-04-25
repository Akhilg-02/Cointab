const express = require("express");


const Rate = require("../models/rates.model");

const router = express.Router();

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