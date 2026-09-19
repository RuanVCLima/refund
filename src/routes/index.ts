import { Router } from "express";
import { usersRoutes } from "./users-routes";
import { sessionsRoutes } from "./sessions-routes";
import { refundRoutes } from "./refunds-routes";
import { ensureAuthenticated } from "@/middlewares/ensure-authenticated";
import { uploadsroutes } from "./uplods-routes";

const routes = Router()


///public routes
routes.use("/users", usersRoutes)
routes.use("/sessions", sessionsRoutes)

//private routes
routes.use(ensureAuthenticated)
routes.use("/refunds", refundRoutes)
routes.use("/uploads", uploadsroutes)


export {routes}