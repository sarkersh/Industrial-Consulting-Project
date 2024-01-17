import { body, param } from "express-validator";
class AudioSettingsValidator {
    //check if required fields are entered
    ValidateUserData() {
        return [
            //body("username").notEmpty().withMessage("Username required."),
            body("email").notEmpty().withMessage("Email required."),
            body("password").notEmpty().withMessage("Password required."),
        ];
    }
}

export default new AudioSettingsValidator();