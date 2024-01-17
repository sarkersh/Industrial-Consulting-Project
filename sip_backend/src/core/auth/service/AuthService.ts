// File: /src/core/auth/service/AuthService.ts
import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import debug, { IDebugger } from "debug";
import bcrypt from "bcrypt";
import _ from "lodash";
import { User } from "../../../user/model/UserModel";
import('dotenv/config')
const log: IDebugger = debug("auth:controller");
const ExpirationInSeconds = 60 * 60 * 1000; // One Hour

class AuthService {
    constructor() {
    }

    async authorize(req: Request, res: Response, next: NextFunction) {
        try {
            const user = await User.findOne({where: {email: req.body.email}});

            if (user) {
                const isValid = await bcrypt.compare(req.body.password, user.getDataValue("password"));

                if (isValid) {
                    const payload = {
                        id: user.getDataValue("id"),
                        username: user.getDataValue("username"),
                        email: user.getDataValue("email"),
                    }

                    const token = jwt.sign(payload, process.env.JWT_SECRET!, {expiresIn: ExpirationInSeconds});

                    res.cookie("access_token", token, {httpOnly: true, maxAge: ExpirationInSeconds});
                    return res.status(200).json({token: token});
                }
            }
            return res.json({
                msg: "Invalid login details.",
            });
        } catch (error: any) {
            return res.status(403).json({msg: "fail to find user", route: "/signin"});
        }
    }
}
export default new AuthService();