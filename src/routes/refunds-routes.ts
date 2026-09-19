import { Router } from "express";
import { RefundController } from "@/controllers/refund-controller";
import { verifyUserAuthorization } from "@/middlewares/verify-user-authorization";

const refundRoutes = Router()
const refundController = new RefundController()

refundRoutes.post(
    "/",
    verifyUserAuthorization(["employee"]),
    refundController.create)

export { refundRoutes}