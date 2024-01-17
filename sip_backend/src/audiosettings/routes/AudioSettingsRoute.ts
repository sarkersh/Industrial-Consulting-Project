
import express from "express";
import AudioSettingsController from "../controller/AudioSettingsController";
import AudioSettingsValidator from "../validator/AudioSettingsValidator";
import validationMiddleware from "../../core/middleware/validationMiddleware";
import AuthController from "../../core/auth/controller/AuthController";
import AuthMiddleware from "../../core/auth/middleware/AuthMiddleware";

const AudioSettingsRouter = express.Router();

AudioSettingsRouter.post(
    "/create",
    //AudioSettingsValidator.ValidateAudioSettingsData(),
    //validationMiddleware.handleValidationError,
    AudioSettingsController.create
);


AudioSettingsRouter.get(
    "/read",
    //AuthMiddleware.authenticate,
    AudioSettingsController.read
);

AudioSettingsRouter.put(
    "/update/:mac",
    //AudioSettingsValidator.ValidateAudioSettingsData(),
    //validationMiddleware.handleValidationError,
    AudioSettingsController.update
);
AudioSettingsRouter.delete(
    "/delete/:mac",
    //AudioSettingsValidator.ValidateAudioSettingsData(),
    //validationMiddleware.handleValidationError,
    AudioSettingsController.destroy
);
export default AudioSettingsRouter;