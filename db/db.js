import mongoose from "mongoose";

const DB_HOST = process.env.DB_HOST;

const connectDB = async () => {
  try {
    await mongoose.connect(DB_HOST);
    console.log("Database connection successful");
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
};

export default connectDB;