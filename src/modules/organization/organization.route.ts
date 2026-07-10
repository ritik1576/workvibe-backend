import { organizationController } from "./organization.controller.js";
import { Router } from "express";

const route = Router()

route.use((req, res, next) => {
    console.log("Route reached");
    next();
});

route.post("/", organizationController.create)

export default route;