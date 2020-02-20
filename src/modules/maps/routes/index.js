import express from "express";
import handle from "express-async-handler";
import validate from "express-validation";
import validator from "../validators";
import * as mapController from "../controllers/list-controller";

const mapRoutes = express.Router();

mapRoutes.post(
  "/maps",
  validate(validator),
  handle(mapController.save)
);

export default mapRoutes;
