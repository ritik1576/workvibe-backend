import type { Request, Response } from "express"
import { organizationService } from "./organization.service.js"
export const organizationController = {
    async create(req: Request, res: Response) {
        console.log("🔥 Controller reached");
        try {

            const data = req.body

            const organization = await organizationService.create(data)
            return res.status(201).json(organization)

        } catch (error: any) {

            return res.status(500).json({ error: error.message })
        }
    }
}