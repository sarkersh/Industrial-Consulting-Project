
import express from "express";
import MpkDetailsController from "../controller/MpkDetailsController";

const MpkDetailsRouter = express.Router();

MpkDetailsRouter.post(
    "/create",
    MpkDetailsController.create
);


MpkDetailsRouter.get(
    "/read",
    //AuthMiddleware.authenticate,
    MpkDetailsController.read
);

MpkDetailsRouter.put(
    "/update/:id",
    //MpkDetailsValidator.ValidateMpkDetailsData(),
    //validationMiddleware.handleValidationError,
    MpkDetailsController.update
);
MpkDetailsRouter.delete(
    "/delete/:id",
    //MpkDetailsValidator.ValidateMpkDetailsData(),
    //validationMiddleware.handleValidationError,
    MpkDetailsController.destroy
);
export default MpkDetailsRouter;