import mongoose, { ConnectOptions } from "mongoose";
import { getEnvVariable } from "../utils/getEnvVariable";



export const connectDB = async (): Promise<void> => {
    const mongourl: string = getEnvVariable("MONGO_URL") || "mongodb://localhost:27017/event-ticketing-management"

    try {

        const options: ConnectOptions = {
            maxPoolSize: 10,
            serverSelectionTimeoutMS: 5000,
            connectTimeoutMS: 10000
        }

        mongoose.connection.on('connected', () => {
            console.log("Mongoose connected to DB cluster");
        })

        mongoose.connection.on('error', (err) => {
            console.log("Mongoose error", err);

        })

        mongoose.connection.on('disconnected', () => {
            console.log("Mongoose disconnected");
        })

        await mongoose.connect(mongourl, options)

        console.log("Mongodb connected successfully")
    } catch (error) {
        console.log("Mongoose error", error);
        process.exit(1)

    }
}

process.on('SIGINT', async () => {
    await mongoose.connection.close()
    console.log("Mongoose connection disconnected through app termination")
    process.exit(1)
})