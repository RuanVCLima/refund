import { Request, Response } from "express"
import { z } from "zod"
import uploadConfig from "@/configs/upload"

class UploadsController{
    async create(request: Request, response: Response){

        try{
            const fileSchema = z.looseObject({
                filename: z.string().min(1, "File is required"),
                mimetype: z.string()
                .refine((type) => 
                    uploadConfig.ACCEPTED_IMAGE_TYPES
                    .includes(type), 
                    "Invalid file format. Authorized files: " + uploadConfig.ACCEPTED_IMAGE_TYPES),
                size: z.number()
                    .positive()
                    .refine((size) => size <=uploadConfig.MAX_FILE_SIZE, `File exceeds the maximun size of ${uploadConfig.MAX_SIZE}`)
            })

            const {file} = fileSchema.parse(request.file)


            response.json({message: "ok"})
        } catch(error){
            throw error
        }
    }
}

export {UploadsController}