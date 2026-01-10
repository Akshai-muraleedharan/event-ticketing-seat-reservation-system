import { z } from "zod"
import { createEventSchema } from "../schemas/index"


export type createEventBody = z.infer<typeof createEventSchema>["body"]