import cookieParser from "cookie-parser";
import { config } from "dotenv";
import express from "express";
import connectDB from "./src/configs/db.js";
import userrorute from "./src/routes/Userroute.js";
import taskroute from "./src/routes/Taskroute.js";
import Authenticate from "./src/middlewares/auth.js";
config();

const server = express();

server.use(express.json());
server.use(cookieParser());

server.use("/authentication", userrorute);
server.use("/api-gettask",Authenticate,taskroute);

const port = process.env.PORT || 8080;
const url = process.env.DB_URL;

server.get("/", (req, res) => {
  res.send("This is Home route");
});

server.listen(port, async () => {
  try {
    await connectDB(url);
    console.log("connected to atlas");
    console.log(`server is running on port : ${port}`);
  } catch (error) {
    console.log(error);
  }
});
