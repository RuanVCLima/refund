import { Router } from "express";
import { UploadsController } from "@/controllers/uploads-controller";
import { verifyUserAuthorization } from "@/middlewares/verify-user-authorization";
import multer from "multer";
import uploadConfig from "@/configs/upload"

const uploadsroutes = Router()
const uploadsController = new UploadsController()

const upload = multer(uploadConfig.MULTER)

uploadsroutes.use(verifyUserAuthorization(["employee"]))
uploadsroutes.post(
    "/", 
    upload.single("file"),
    uploadsController.create
)

export {uploadsroutes}