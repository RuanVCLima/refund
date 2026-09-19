import {Request, Response} from "express"
import { z } from "zod"

class RefundController{
    async create(request: Request, response: Response){

        const CategoriesEnum = z.enum([
            "food",
            "services", 
            "transport", 
            "accomodation", 
            "others"
        ])
        
        const bodySchema = z.object({
            name: z.string().trim().min(1, {message: "Name is required"}),
            category: CategoriesEnum,
            amount: z.number().positive({message: "The value needs to be positive"}),
            filename: z.string().min(20)
        })

        const { name, category, amount, filename } = bodySchema.parse(request.body)


        response.json({message: "ok"})
    }
}

export { RefundController}