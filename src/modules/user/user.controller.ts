import { userService } from "./user.service.js";
import type { Request, Response } from "express";
interface LoginUser {
    email: string;
    password: string;
}
export const userController = {

    async register(req: Request, res: Response) {

        const user = await userService.create(req.body)

        return res.status(201).json({
            success: true,
            message: "User registered successfully",
            data: user
        })

    },

    async login(req: Request, res: Response) {

        const user = await userService.login(req.body.email, req.body.password)

        return res.status(200).json({
            success: true,
            message: "User login successfully",
            data: user
        })

    }

}