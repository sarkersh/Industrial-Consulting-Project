import express from "express";
import UserController from "../controller/UserController";
import UserValidator from "../validator/UserValidator";
const UserRouter = express.Router();

UserRouter.get(
    "/",
    UserController.start
);

UserRouter.get(
    "/read",
    UserController.read
);

UserRouter.post(
    "/create",
    UserValidator.ValidateUserData(),
   //======= validationMiddleware.handleValidationError,
    UserController.create
);

//update user data by id
UserRouter.put(
    "/update/:id",
    //UserValidator.ValidateUserData(),
    UserController.update
);

//delete user data
UserRouter.delete(
    "/delete/:id",
    UserValidator.ValidateUserData(),
    UserController.destroy
);
export default UserRouter;