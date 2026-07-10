import prisma from "../../lib/prisma.js";

export const organizationRepository = {
    async findByContactEmail(email: string) {
        const organization = await prisma.organization.findUnique({
            where: {
                contactEmail: email
            }
        })

        return organization
    },

    async create(data: any) {

        return prisma.organization.create({
            data
        })

    }
};