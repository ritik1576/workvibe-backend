import { userService } from "./user.service.js";
import type { Request, Response } from "express";
export const userController = {

    async register(req: Request, res: Response) {

        const user = await userService.create(req.body)

        return res.status(201).json({
            success: true,
            message: "User registered successfully",
            data: user
        })

    }

}