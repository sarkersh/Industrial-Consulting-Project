
import express from "express";
import AdvanceSettingsController from "../controller/AdvanceSettingsController";
import AdvanceSettingsValidator from "../validator/AdvanceSettingsValidator";
import validationMiddleware from "../../core/middleware/validationMiddleware";
import AuthController from "../../core/auth/controller/AuthController";
import AuthMiddleware from "../../core/auth/middleware/AuthMiddleware";

const AdvanceSettingsRouter = express.Router();

AdvanceSettingsRouter.post(
    "/create",
    //AdvanceSettingsValidator.ValidateAdvanceSettingsData(),
    //validationMiddleware.handleValidationError,
    AdvanceSettingsController.create
);


AdvanceSettingsRouter.get(
    "/read",
    //AuthMiddleware.authenticate,
    AdvanceSettingsController.read
);

AdvanceSettingsRouter.put(
    "/update/:mac",
    //AdvanceSettingsValidator.ValidateAdvanceSettingsData(),
    //validationMiddleware.handleValidationError,
    AdvanceSettingsController.update
);
AdvanceSettingsRouter.delete(
    "/delete/:mac",
    //AdvanceSettingsValidator.ValidateAdvanceSettingsData(),
    //validationMiddleware.handleValidationError,
    AdvanceSettingsController.destroy
);
export default AdvanceSettingsRouter;