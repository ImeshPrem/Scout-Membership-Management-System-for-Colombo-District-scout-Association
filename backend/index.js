import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import badgeRoute from "./routes/Badgerequest.js"
import ScoutProfRoute from "./routes/ScoutProfile.js"


const app = express();
dotenv.config();

const connect = async () => {
try {
    await mongoose.connect(process.env.MONGO);
    console.log("Connected to MONGODB!")
} catch (error) {
    throw error;
}
};

mongoose.connection.on("Disconnected", ()=>{
    console.log("MongoDB disconnected")
})
mongoose.connection.on("Connected", ()=>{
    console.log("MongoDB connected")
})

//middlewares
app.use(express.json())

app.use("/badgeRequest",badgeRoute);
app.use("/ScoutProf",ScoutProfRoute);





app.listen(5000, () => {
    connect()
    console.log("Connected to Backend");
});