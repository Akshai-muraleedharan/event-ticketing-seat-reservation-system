import { z } from "zod"
import { createUserShema } from "../schemas/index"

export type CreateUserBody = z.infer<typeof createUserShema>["body"];