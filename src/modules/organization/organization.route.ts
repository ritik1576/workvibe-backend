import { organizationController } from "./organization.controller.js";
import { Router } from "express";

const route = Router()

route.post("/", organizationController.create)

export default route;