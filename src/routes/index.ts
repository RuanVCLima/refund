import { Router } from "express";
import { usersRoutes } from "./users-routes";
import { sessionsRoutes } from "./sessions-routes";
import { refundRoutes } from "./refunds-routes";

const routes = Router()


///public routes
routes.use("/users", usersRoutes)
routes.use("/sessions", sessionsRoutes)

routes.use("/refunds", refundRoutes)


export {routes}