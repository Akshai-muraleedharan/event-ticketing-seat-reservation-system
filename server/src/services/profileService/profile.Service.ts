import { UserRole } from "../../enums";
import { GetProfilePayload } from "../../interfaces";
import { User } from "../../model/user.model";
import { AppError } from "../../utils/appError";


export class profileService {
    static async getProfile(payload: GetProfilePayload, role: UserRole) {

        const findUser = await User.findOne({ _id: payload.userId, roles: role })

        if (!findUser) {
            throw new AppError("Account not found", 404)
        }

        const userObj = findUser.toObject()

        const { password: paaa, emailverified: verify, ...rest } = userObj

        return rest
    }
}