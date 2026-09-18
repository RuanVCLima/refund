import { Request, Response } from "express"
import { UserRole } from "../../generated/prisma/enums"
import { z } from "zod"
import { prisma } from "@/database/prisma"
import { AppError } from "@/utils/AppError"
import { hash } from "bcrypt"

class UsersController {
    async create(request: Request, response: Response){
        const bodySchema = z.object({
            name: z.string().trim().min(2, {message: "Nome é obrigatório!"}),
            email: z.email({message: "E-mail inválido!"}).toLowerCase(),
            password: z.string().min(6, {message: "A senha deve ter pelo menos 6 digitos!"}),
            role: z.enum(UserRole).default(UserRole.employee)

        })

        const { name, email, password, role } = bodySchema.parse(request.body)

        const userWithSameEmail = await prisma.user.findFirst({where: {email}})

        if(userWithSameEmail){
            throw new AppError("A user with this email already exists!")
        }

        const hashedPassword = await hash(password, 8)

        await prisma.user.create({
            data: {
                name,
                email,
                password: hashedPassword,
                role
            }
        })

        return response.status(201).json()
    }
}

export { UsersController }