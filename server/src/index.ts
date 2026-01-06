import { getEnvVariable } from "./utils/getEnvVariable"
import express from "express"
import type { Express } from "express"
import { connectDB } from "./config/connectDB"



const app: Express = express()

// connect db 
async function startApp() {

    try {
        await connectDB()

        const port = getEnvVariable("PORT") || 4008

        app.listen(port, () => {
            console.log("server connected on port", port)
        })
    } catch (error) {
        console.error("App startup failed.  Server not start")
        process.exit(1)
    }

}

startApp()