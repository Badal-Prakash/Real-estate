import express from "express";
import mongoose from "mongoose";
import userRouter from "../api/routes/user.routes.js";
import authRouter from "../api/routes/auth.route.js";
mongoose
  .connect(
    "mongodb+srv://lav14251:Lavsharma1@cluster0.hsgurzr.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("connected to mongodb");
  })
  .catch(() => {
    console.log("error");
  });
const app = express();
app.use(express.json());
app.listen(3000, () => {
  console.log("server is running on port 3000");
});
app.use("/api/user", userRouter);
app.use("/api/auth", authRouter);
