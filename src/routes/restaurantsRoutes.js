import { Router } from "express";
import { restaurantController } from "../controllers/restaurantController.js";

const restaurantRouter = Router();

restaurantRouter.get("/:coordinateX/:coordinateY", restaurantController)

export { restaurantRouter }