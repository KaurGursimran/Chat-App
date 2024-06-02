import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import userRoute from "./routes/user.route.js"
import cookieParser from "cookie-parser";

const app = express();

dotenv.config();

// middleware
app.use(express.json()); // parsing the data
app.use(cors());
app.use(cookieParser());

const PORT = process.env.port || 5000;
const URI = process.env.MONGODB_URI;

try {
    mongoose.connect(URI);
    console.log("Connected to mongoDB");
} catch (error) {
    console.log(error);
}

app.use("/api/user", userRoute);

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})