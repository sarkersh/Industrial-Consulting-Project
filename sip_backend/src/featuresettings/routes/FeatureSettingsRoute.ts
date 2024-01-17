
import express from "express";
import FeatureSettingsController from "../controller/FeatureSettingsController";

const FeatureSettingsRouter = express.Router();

FeatureSettingsRouter.post(
    "/create",
    //FeatureSettingsValidator.ValidateFeatureSettingsData(),
    //validationMiddleware.handleValidationError,
    FeatureSettingsController.create
);


FeatureSettingsRouter.get(
    "/read",
    //AuthMiddleware.authenticate,
    FeatureSettingsController.read
);

FeatureSettingsRouter.put(
    "/update/:mac",
    //FeatureSettingsValidator.ValidateFeatureSettingsData(),
    //validationMiddleware.handleValidationError,
    FeatureSettingsController.update
);
FeatureSettingsRouter.delete(
    "/delete/:mac",
    //FeatureSettingsValidator.ValidateFeatureSettingsData(),
    //validationMiddleware.handleValidationError,
    FeatureSettingsController.destroy
);
export default FeatureSettingsRouter;