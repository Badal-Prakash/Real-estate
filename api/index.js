import express from "express";
import mongoose from "mongoose";
// import dotenv from "dotenv";
// dotenv.config();
mongoose.connect("mongodb+srv://lav14251:Lavsharma1@cluster0.hsgurzr.mongodb.net/?retryWrites=true&w=majority").then(()=>{
  console.log('connected to mongodb')
}).then(()=>{
  console.log("error")
});
const app = express();

app.listen(3000, () => {
  console.log("server is running on port 3000ls");
});
