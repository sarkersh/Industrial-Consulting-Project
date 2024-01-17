
import express from "express";
import AccountSettingsController from "../controller/AccountSettingsController";

const AccountSettingsRouter = express.Router();

AccountSettingsRouter.post(
    "/create",
    //AccountSettingsValidator.ValidateAccountSettingsData(),
    //validationMiddleware.handleValidationError,
    AccountSettingsController.create
);


AccountSettingsRouter.get(
    "/read",
    //AuthMiddleware.authenticate,
    AccountSettingsController.read
);

AccountSettingsRouter.put(
    "/update/:id",
    //AccountSettingsValidator.ValidateAccountSettingsData(),
    //validationMiddleware.handleValidationError,
    AccountSettingsController.update
);
AccountSettingsRouter.delete(
    "/delete/:id",
    //AccountSettingsValidator.ValidateAccountSettingsData(),
    //validationMiddleware.handleValidationError,
    AccountSettingsController.destroy
);
export default AccountSettingsRouter;