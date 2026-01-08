import { getEnvVariable } from "./utils/getEnvVariable"
import express from "express"
import type { Express } from "express"
import cookieParser from "cookie-parser"
import { connectDB } from "./config/connectDB"
import { apiRouter } from "./routes/index"
import { errorHandler } from "./middleware/errorHandler"
import cors from "cors"


const app: Express = express()

const corsOption = {
    origin: getEnvVariable("FRONTEND_URL"),
    credentials: true,
}


app.use(cors(corsOption))
app.use(express.json())
app.use(cookieParser())

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