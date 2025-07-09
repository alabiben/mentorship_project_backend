import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

// Database Connection
const connectDb = async () => {
  try {
    mongoose.connection.on("error", (error) => {
    console.error("MongoDB connection error:", error);
    })

    const url = `${process.env.MONGODB_URL}/mentorship_database`;

    await mongoose.connect(url);
    //mongoose.connect(process.env.MONGODB_URL);
    console.log("Database connected successfully");
  } catch (error) {
    console.log(error);
  }
}
export default connectDb;

