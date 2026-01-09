import { z } from "zod"
import { createSchema } from "../schemas/index"

const UserRoleSchema = z.enum(["user", "admin", "organizer"])

export type CreateUserBody = z.infer<typeof createSchema>["body"];

export type RoleBody = z.infer<typeof UserRoleSchema>