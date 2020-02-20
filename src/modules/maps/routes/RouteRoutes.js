import express from "express";
import handle from "express-async-handler";
import validate from "express-validation";
import validator from "../validators/RouteValidator";
import * as mapController from "../controllers/RouteController";

const mapRoutes = express.Router();

mapRoutes.post(
  "/routes",
  validate(validator),
  handle(mapController.save)
);

export default mapRoutes;
