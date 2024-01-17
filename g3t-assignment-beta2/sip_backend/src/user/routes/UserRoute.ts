// File: src/user/route/UserRoute.ts
import express from "express";
import UserController from "../controller/UserController";
import UserValidator from "../validator/UserValidator";
import validationMiddleware from "../../core/middleware/validationMiddleware";
import AuthController from "../../core/auth/controller/AuthController";
import AuthMiddleware from "../../core/auth/middleware/AuthMiddleware";

const UserRouter = express.Router();

/*UserRouter.post(
    "/signin",
    UserValidator.ValidateUserData(),
    validationMiddleware.handleValidationError,
    AuthController.login
);*/

UserRouter.post(
    "/signin",
    UserValidator.ValidateUserData(),
    validationMiddleware.handleValidationError,
    AuthController.signin
);

UserRouter.post(
    "/signup",
    UserValidator.ValidateUserData(),
    validationMiddleware.handleValidationError,
    UserController.create
);


UserRouter.get(
    "/read",
    AuthMiddleware.authenticate,
    UserController.read
);

UserRouter.put(
    "/update/:id",
    UserValidator.ValidateUserData(),
    //validationMiddleware.handleValidationError,
    UserController.update
);
UserRouter.delete(
    "/delete/:id",
    UserValidator.ValidateUserData(),
    //validationMiddleware.handleValidationError,
    UserController.destroy
);
export default UserRouter;