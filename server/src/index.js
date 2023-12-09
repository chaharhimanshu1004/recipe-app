import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import {userRouter} from './routes/users.js'

const app = express();

app.use(express.json());
app.use(cors());
app.use('/auth',userRouter);

mongoose.connect("mongodb+srv://hello:himanshu@cluster0.f8pggwb.mongodb.net/Cluster0?retryWrites=true&w=majority").then(console.log('db connected')).catch((err)=>console.log('db connection failed'));
app.listen(3001,()=>console.log("Server started"));
