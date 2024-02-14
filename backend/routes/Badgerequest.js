import express from "express";
import badgeReq from "../models/badgeReq.js";
const router = express.Router();

router.get("/", (req,res)=>{
    res.send("Hello this is badgeReq")
})

//CREATE
router.post("/",async(req,res)=>{
   
    const newRequest = new badgeReq(req.body)
   

    try {
        const savedRequest = await newRequest.save()
        res.status(200).json(savedRequest)
    } catch (err) {
        res.status(500).json(err)
        }
    });





export default router





















/*const router = require("express").Router();
let badgeReq = require("../models/badgeReq");

router.route("/add").post((req,res)=>{
    const Section = req.body.Section
    const Name = req.body.Name
    const Reg_No = Number(req.body.Reg_No)
    const Badge = req.body.Badge
    const Troop_No = Number(req.body.Troop_No)
    const Badge_Examiner = req.body.Badge_Examiner
    
    const newRequest = new badgeReq({
        Section,
        Name,
        Reg_No,
        Badge,
        Troop_No,
        Badge_Examiner
    })

    newRequest.save().then(()=>{
        res.json("Request Added")
    }).catch((err)=>{
        console.log(err);
    })


})






module.exports = router;
*/