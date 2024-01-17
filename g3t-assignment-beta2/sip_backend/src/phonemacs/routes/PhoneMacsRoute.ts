
import express from "express";
import PhoneMacsController from "../controller/PhoneMacsController";

const PhoneMacsRouter = express.Router();

PhoneMacsRouter.post(
    "/create",
    //PhoneMacsValidator.ValidatePhoneMacsData(),
    //validationMiddleware.handleValidationError,
    PhoneMacsController.create
);


PhoneMacsRouter.get(
    "/read",
    //AuthMiddleware.authenticate,
    PhoneMacsController.read
);

PhoneMacsRouter.put(
    "/update/:id",
    //PhoneMacsValidator.ValidatePhoneMacsData(),
    //validationMiddleware.handleValidationError,
    PhoneMacsController.update
);
PhoneMacsRouter.delete(
    "/delete/:id",
    //PhoneMacsValidator.ValidatePhoneMacsData(),
    //validationMiddleware.handleValidationError,
    PhoneMacsController.destroy
);
export default PhoneMacsRouter;