import mongoose from 'mongoose';
const { Schema } = mongoose;

const scoutProfSchema = new mongoose.Schema({
    Name : {
        type : String,
        required : true
    },
    DOB : {
        type : String,
        required : true
    },
    Reg_No : {
        type : Number,
        required : true
    },
    Troop_Name : { 
        type : String,
        required : true
    },
    Troop_No :{
        type : Number,
        required : true
    },
    Date_of_Join : {
        type : String,
        required : true
    },
    Address : {
        type : String,
        required : true
    },
    Mobile :{
        type : Number,
        required : true
    },
    Name_of_Gaurdian: {
        type : String,
        required : true
    },    
    Gaurdian_Contact :{
        type : Number,
        required : true
    },
});

export default mongoose.model("Scout_Profile",scoutProfSchema)