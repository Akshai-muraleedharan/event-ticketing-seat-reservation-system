import express from "express"
import type { Express } from "express"
import { getEnvVariable } from "./utils/getEnvVariable"



const app: Express = express()


const port = getEnvVariable("PORT") || 4008




app.listen(4002, () => {
    console.log("server connected on port", port)
})  