export const organizationRepository = {
    async findByContactEmail(email: string) {
        const organization = await prisma.organization.findUnique({
            where: {
                contactEmail: email
            }
        })

        return organization
    },

    async create(data) {

        return prisma.organization.create({
            data
        })

    }
};