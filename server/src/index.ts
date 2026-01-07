import { getEnvVariable } from "./utils/getEnvVariable"
import express from "express"
import type { Express } from "express"
import { connectDB } from "./config/connectDB"
import { apiRouter } from "./routes/index"
import { errorHandler } from "./middleware/errorHandler"



const app: Express = express()

app.use(express.json())

app.use("/api", apiRouter)
app.use(errorHandler)

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