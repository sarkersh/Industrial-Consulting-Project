
import express from "express";
import SipServerController from "../controller/SipServerController";

const SipServerRouter = express.Router();

SipServerRouter.post(
    "/create",
    //SipServerValidator.ValidateSipServerData(),
    //validationMiddleware.handleValidationError,
    SipServerController.create
);


SipServerRouter.get(
    "/read",
    //AuthMiddleware.authenticate,
    SipServerController.read
);

SipServerRouter.put(
    "/update/:id",
    //SipServerValidator.ValidateSipServerData(),
    //validationMiddleware.handleValidationError,
    SipServerController.update
);
SipServerRouter.delete(
    "/delete/:id",
    //SipServerValidator.ValidateSipServerData(),
    //validationMiddleware.handleValidationError,
    SipServerController.destroy
);
export default SipServerRouter;