
import express from "express";
import PhoneModelsController from "../controller/PhoneModelsController";

const PhoneModelsRouter = express.Router();

PhoneModelsRouter.post(
    "/create",
    //PhoneModelsValidator.ValidatePhoneModelsData(),
    //validationMiddleware.handleValidationError,
    PhoneModelsController.create
);


PhoneModelsRouter.get(
    "/read",
    //AuthMiddleware.authenticate,
    PhoneModelsController.read
);

PhoneModelsRouter.put(
    "/update/:id",
    //PhoneModelsValidator.ValidatePhoneModelsData(),
    //validationMiddleware.handleValidationError,
    PhoneModelsController.update
);
PhoneModelsRouter.delete(
    "/delete/:id",
    //PhoneModelsValidator.ValidatePhoneModelsData(),
    //validationMiddleware.handleValidationError,
    PhoneModelsController.destroy
);
export default PhoneModelsRouter;