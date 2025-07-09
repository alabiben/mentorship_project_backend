import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import connectDb from "./config/mongodb.js";
import AuthRoutes from "./routes/AuthRoutes.js";
import profileRoutes from "./routes/profileRoutes.js";
import cookieParser from "cookie-parser";
dotenv.config();

const port = process.env.PORT
const app = express();

app.use(express.json());
app.use(cookieParser());
const allowedOrigins = ["https://mentor-frontend-eta.vercel.app", "http://localhost:5173/"]
 app.use(cors({
    origin: allowedOrigins,
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization", "Accept"],
}));
app.use("/api/auth", AuthRoutes);
app.use("/api/profile", profileRoutes);

// connecting to Database
app.get("/", (req, res) => {
    res.json({message:"Welcome to the mentorship API_backened server"});
});
    
    connectDb();

app.listen(8000, ()=>{
console.log("Server is running on port 8000")
})