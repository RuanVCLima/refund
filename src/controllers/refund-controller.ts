import {Request, Response} from "express"

class RefundController{
    async create(request: Request, response: Response){
        response.json({message: "ok"})
    }
}

export { RefundController}