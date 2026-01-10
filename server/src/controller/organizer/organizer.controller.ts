import type { Request, Response, NextFunction } from "express"
import { profileService } from "../../services"
import { UserRole } from "../../enums"
import { Types } from "mongoose"

export const organizerProfile = async (req: Request, res: Response, next: NextFunction) => {
    try {

        const { userId } = res.locals.user as {
            userId: Types.ObjectId
        }

        const response = await profileService.getProfile({ userId: userId }, UserRole.ORGANIZER)

        res.status(200).json({ success: true, message: "Profile fetched", data: response })

    } catch (error) {
        next(error)
    }
}