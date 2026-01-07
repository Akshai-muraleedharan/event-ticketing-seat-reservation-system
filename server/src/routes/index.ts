import express from "express"
import type { Router } from "express"
import { v1Router } from "./v1Routes/index";

export const apiRouter: Router = express.Router();

apiRouter.use("/v1", v1Router)