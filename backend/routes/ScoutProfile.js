import express from "express";
import scoutprofile from "../models/scoutprofile.js";
const router = express.Router();


//CREATE
router.post("/",async(req,res)=>{
   
    const newDetails = new scoutprofile(req.body)
   

    try {
        const savedDetails = await newDetails.save()
        res.status(200).json(savedDetails)
    } catch (err) {
        res.status(500).json(err)
        }
    });


//UPDATE
router.put("/:id",async(req,res)=>{   

    try {
        const updatedDetails = await scoutprofile.findByIdAndUpdate(req.params.id, {$set: req.body}, {new: true});
        res.status(200).json(updatedDetails)
    } catch (err) {
        res.status(500).json(err)
        }
    });

//DELETE
router.delete("/:id",async(req,res)=>{   

    try {
        await scoutprofile.findByIdAndDelete(req.params.id);
        res.status(200).json("That detail has been deleted!")
    } catch (err) {
        res.status(500).json(err)
        }
    });

//GET
router.get("/:id",async(req,res)=>{   

    try {
        const Details = await scoutprofile.findById(req.params.id);
        res.status(200).json(Details)
    } catch (err) {
        res.status(500).json(err)
        }
    });

//GET ALL
router.get("/",async(req,res)=>{   

    try {
        const AllDetails = await scoutprofile.find();
        res.status(200).json(AllDetails)
    } catch (err) {
        res.status(500).json(err)
        }
    });





export default router