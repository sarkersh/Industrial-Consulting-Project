
import express from "express";
import WebServicesController from "../controller/WebServicesController";

const WebServicesRouter = express.Router();

WebServicesRouter.post(
    "/create",
    //WebServicesValidator.ValidateWebServicesData(),
    //validationMiddleware.handleValidationError,
    WebServicesController.create
);


WebServicesRouter.get(
    "/read",
    //AuthMiddleware.authenticate,
    WebServicesController.read
);

WebServicesRouter.put(
    "/update/:mac",
    //WebServicesValidator.ValidateWebServicesData(),
    //validationMiddleware.handleValidationError,
    WebServicesController.update
);
WebServicesRouter.delete(
    "/delete/:mac",
    //WebServicesValidator.ValidateWebServicesData(),
    //validationMiddleware.handleValidationError,
    WebServicesController.destroy
);
export default WebServicesRouter;