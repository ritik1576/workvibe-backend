import { organizationRepository } from "../organization/organization.repository.js";
import { userRepository } from "./user.repository.js";
import { AppError } from "../../common/errors/AppError.js";
import bcrypt from "bcrypt"
export const userService = {


    async create(data: any) {
        const organization = await organizationRepository.findById(data.organizationId)
        if (!organization) {
            throw new AppError(404, "Organization not found")
        }
        const existingUser = await userRepository.findByEmail(data.email)
        if (existingUser) {
            throw new AppError(409, "User already exists")
        }
        const hashedPassword = await bcrypt.hash(data.password, 10)
        const { password, ...rest } = data
        const user = await userRepository.create({ ...rest, passwordHash: hashedPassword })
        return user

    },

    async login(email: string, password: string) {
        const user = await userRepository.findByEmail(email)
        if (!user) {
            throw new AppError(401, "User not found")
        }
        const isPasswordValid = await bcrypt.compare(password, user.passwordHash)
        if (!isPasswordValid) {
            throw new AppError(401, "Invalid email or password")
        }
        const { passwordHash, ...rest } = user
        return rest
    }








}