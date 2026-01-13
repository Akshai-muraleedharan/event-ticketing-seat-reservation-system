import express from "express"
import type { Router } from "express"
import { newAccesstoken } from "../../../controller/common/common.controller"
import { refreshTokenVerify } from "../../../middleware/refreshTokenVerify"
import { roleAuth } from "../../../middleware/roleAuth"
import { UserRole } from "../../../enums"



export const authRouter: Router = express.Router()


authRouter.post("/refresh", refreshTokenVerify, roleAuth(UserRole.USER, UserRole.ADMIN, UserRole.ORGANIZER), newAccesstoken)