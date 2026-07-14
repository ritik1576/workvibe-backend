import type { Request, Response } from "express"
import { organizationService } from "./organization.service.js"
export const organizationController = {
    async create(req: Request, res: Response) {


        const data = req.body

        const organization = await organizationService.create(data)
        return res.status(201).json({
            success: true,
            message: "Organization created successfully",
            data: organization
        })

    }
}