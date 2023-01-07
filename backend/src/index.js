import express from "express";
import morgan from "morgan";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";

//internal
import authRoute from "./routes/auth.js";
import roomRoute from "./routes/rooms.js";
import hotelsRoute from "./routes/hotels.js";
import usersRoute from "./routes/users.js";

const app = express();

app.use(morgan("combined"));

//connect to mongoDB

dotenv.config();
const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log("====================================");
    console.log("Connected to MongoDB");
    console.log("====================================");
  } catch (error) {
    throw error;
  }
};

mongoose.connection.on("disconnected", () => {
  console.log("====================================");
  console.log("MongoDB disconnected");
  console.log("====================================");
});

app.get("/users", (req, res) => {
  res.send("Hello");
});

//==================middleware===============================//
app.use(cookieParser());
app.use(express.json());

app.use("/api/auth", authRoute);
app.use("/api/users", usersRoute);
app.use("/api/hotels", hotelsRoute);
app.use("/api/room", roomRoute);

app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Something went wrong!";
  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
    stack: err.stack,
  });
});

//=================================================//
const port = 3000;
app.listen(port, () => {
  connect();
  console.log(`Connect to backend`);
  console.log(`Example app listening on port ${port}`);
});
