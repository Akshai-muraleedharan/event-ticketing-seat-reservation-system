import type { Request, Response, NextFunction } from "express"
import { UserRole } from "../enums";
import { Types } from "mongoose";
import { AppError } from "../utils/appError";

export const roleAuth = (...roles: UserRole[]) => {
    return (req: Request, res: Response, next: NextFunction) => {
        const user = res.locals.user as {
            userId: Types.ObjectId,
            role: UserRole
        } || res.locals.authUser as {
            userId: Types.ObjectId,
            role: UserRole
        }




        if (!user) {
            throw new AppError("Unauthorized", 401)
        }

        if (!roles.includes(user.role)) {
            throw new AppError("You do not have permission to access this resource", 403)
        }



        next()
    }
}