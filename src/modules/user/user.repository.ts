import prisma from "../../lib/prisma.js";

export const userRepository = {

    async findByEmail(email: string) {
        return prisma.user.findUnique({
            where: {
                email
            }
        })
    },
    async create(data: any) {
        return prisma.user.create(
            {
                data,
                select: {
                    id: true,
                    fullName: true,
                    email: true,
                    phoneNumber: true,
                    organizationId: true,
                    createdAt: true,
                    updatedAt: true
                }
            })
    }
};