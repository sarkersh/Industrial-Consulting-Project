import "dotenv/config";
import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";
const JWT_KEY = process.env.JWT_SECRET!;
import debug, { IDebugger } from "debug";

const log: IDebugger = debug("middleware:JWT");

class AuthMiddleware {
    authenticate(req: Request, res: Response, next: NextFunction) {
        const authHeader = req.headers.authorization;
        if (authHeader && authHeader !== "null") {
            const token = authHeader.split(" ")[1];
            jwt.verify(token, JWT_KEY, (err: any, user: any) => {
                if (err) {
                    return res
                        .status(403)
                        .send({ success: false, message: err.message });
                }
                next();
            });
        } else {
            res.status(403).json({ success: false, message: "UnAuthorized" });
        }
    }
}

export default new AuthMiddleware();