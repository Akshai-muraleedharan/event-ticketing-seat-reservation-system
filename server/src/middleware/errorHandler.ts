import type { ErrorRequestHandler, Request, Response, NextFunction } from "express"
import { getEnvVariable } from "../utils/getEnvVariable"




export const errorHandler = (err: any, req: Request<{}, {}, {}>,
    res: Response<{ success: boolean, message: any }>,
    next: NextFunction) => {


    const isDev = getEnvVariable("NODE_ENV") === "development"

    if (err.isOperational) {
        return res.status(err.statusCode).json({ success: false, message: err.message })
    }



    res.status(err.statusCode || 500).json({
        success: false,
        message: isDev ? err.message : "Internal server error"
    })
}