
import express from "express";
import DeviceAdminController from "../controller/DeviceAdminController";

const DeviceAdminRouter = express.Router();

DeviceAdminRouter.post(
    "/create",
    //DeviceAdminValidator.ValidateDeviceAdminData(),
    //validationMiddleware.handleValidationError,
    DeviceAdminController.create
);


DeviceAdminRouter.get(
    "/read",
    //AuthMiddleware.authenticate,
    DeviceAdminController.read
);

DeviceAdminRouter.put(
    "/update/:mac",
    //DeviceAdminValidator.ValidateDeviceAdminData(),
    //validationMiddleware.handleValidationError,
    DeviceAdminController.update
);
DeviceAdminRouter.delete(
    "/delete/:mac",
    //DeviceAdminValidator.ValidateDeviceAdminData(),
    //validationMiddleware.handleValidationError,
    DeviceAdminController.destroy
);
export default DeviceAdminRouter;