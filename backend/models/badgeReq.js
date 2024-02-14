import mongoose from 'mongoose';
const { Schema } = mongoose;

const badgeReqSchema = new mongoose.Schema({
    Section : {
        type : String,
        required : true
    },
    Name : {
        type : String,
        required : true
    },
    Reg_No : {
        type : Number,
        required : true
    },
    Badge : { 
        type : String,
        required : true
    },
    Troop_No :{
        type : Number,
        required : true
    },
    Badge_Examiner : {
        type : String,
        required : true
    },
});

export default mongoose.model("badgeReq",badgeReqSchema)