import { organizationRepository } from "./organization.repository.js";
export const organizationService = {
    async create(data: any) {
        console.log("1. Service started");

        const organizationExist = await organizationRepository.findByContactEmail(data.contactEmail)
        console.log("2. Service started");
        if (organizationExist) {
            throw new Error("Organization already exists")
        }

        const organization = await organizationRepository.create(data)

        return organization

    }
}