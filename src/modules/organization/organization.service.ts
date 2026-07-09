import { organizationRepository } from "./organization.repository.js";
export const organizationService = {
    async create(data: any) {
        const organizationExist = await organizationRepository.findByContactEmail(data.contactEmail)
        if (organizationExist) {
            throw new Error("Organization already exists")
        }

        const organization = await organizationRepository.create(data)

        return organization

    }
}