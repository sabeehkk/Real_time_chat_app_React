import mongoose from "mongoose";

const connectMongoDb=async ()=>{
    try {
        await mongoose.connect(process.env.MONGODB_URL)
        console.log("connect to MongoDB");
    } catch (error) {
        console.log("Eror connecting to MongoDB",error.message);
    }
}

export default connectMongoDb