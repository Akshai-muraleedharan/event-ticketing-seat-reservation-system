import { success, z, ZodError } from "zod"
import type { Request, Response, NextFunction, RequestHandler } from "express"
import { zodRequestSchema } from "../types/commomTypes"

export const zodValidationMiddleware = (schema: z.ZodType<zodRequestSchema>): RequestHandler => {
    return (req: Request, res: Response, next: NextFunction): void => {
        console.log(req.body);


        const result = schema.safeParse({
            body: req.body,
            params: req.params,
            query: req.query
        })

        console.log(result);


        if (!result.success) {

            res.status(400).json({ success: false, errors: result.error.flatten().fieldErrors })
            return
        }

        res.locals.validated = result.data
        next()

    }
}