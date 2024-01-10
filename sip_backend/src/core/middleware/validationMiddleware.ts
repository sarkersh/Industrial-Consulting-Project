
import { Request, Response, NextFunction } from "express";
import { validationResult } from "express-validator";

class ValidationMiddleware {
    handleValidationError(req: Request, res: Response, next: NextFunction) {
        const error = validationResult(req);
        if (!error.isEmpty()) {
            return res.json(error.array());
        }
        next();
    }
}
export default new ValidationMiddleware();