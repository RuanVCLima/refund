import { Router } from "express";
import { usersRoutes } from "./users-routes";
import { sessionsRoutes } from "./sessions-routes";
import { refundRoutes } from "./refunds-routes";
import { ensureAuthenticated } from "@/middlewares/ensure-authenticated";

const routes = Router()


///public routes
routes.use("/users", usersRoutes)
routes.use("/sessions", sessionsRoutes)

//private routes
routes.use(ensureAuthenticated)
routes.use("/refunds", refundRoutes)


export {routes}