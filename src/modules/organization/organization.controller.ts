import { organizationService } from "./organization.service.js"
export const organizationController = {
    async create(req, res) {
        try {

            const data = req.body

            const organization = await organizationService.create(data)

            return res.status(201).json(organization)

        } catch (error) {

            return res.status(500).json({ error: error.message })
        }
    }
}