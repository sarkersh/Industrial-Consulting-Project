// File: /src/core/auth/controller/AuthController.ts
import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import debug, { IDebugger } from "debug";
import bcrypt from "bcrypt";
import _ from "lodash"; // -> Added
import { User } from "../../../user/model/UserModel";

const ExpirationInSeconds = 36000;// One Hour
const jwtSecret: string = process.env.SECRET!;

import AuthService from "../service/AuthService";

const log: IDebugger = debug("auth:controller");


class AuthController {
    constructor() { }
    async signin(req: Request, res: Response, next:NextFunction) {
        await AuthService.authorize(req,res,next)
    }


    async login__(req: Request, res: Response) {
        try {
            const user = await User.findOne({ where: { email: req.body.email } });
            if (user) {
                const isValid = await bcrypt.compare(
                    req.body.password,
                    user.getDataValue("password")
                );
                if (isValid) {
                    const token = jwt.sign(
                        {
                            id: user.getDataValue("id"),
                            username: user.getDataValue("username"),
                            email: user.getDataValue("email"),
                        },
                        jwtSecret,
                        { expiresIn: ExpirationInSeconds }
                    );
                    res.cookie("places", token, {
                        maxAge: ExpirationInSeconds,
                        httpOnly: true,
                    });
                    // omiting ["password", "createdAt","updatedAt"] can omit user object as well
                    return res.status(200).json({
                        token: token,
                        payload: _.omit(user.toJSON(), ["password", "createdAt","updatedAt"])
                    });
                }
            }
            return res.json({
                record: user,
                msg: "Invalid login details.",
            });
        } catch (error: any) {
            return res.json({
                msg: "fail to find user",
                status: 500,
                route: "/login",
            });
        }
    }



    async register(req: Request, res: Response) {
        try {
            let user = await User.findOne({ where: { username: req.body.username } })
            if (user) {
                return res.json({ message: "Failed! Username already in use" })
            }
            user = await User.findOne({ where: { email: req.body.email } })
            if (user) {
                return res.json({ message: "Failed! Email already in use" })
            }
            const record = await User.create({ ...req.body });
            return res.json({
                record: record,
                msg: "User created.",
            });
        } catch (e: any) {
            return res.json({
                msg: "fail to create user",
                status: 500,
                route: "/create",
            });
        }
    }
}

export default new AuthController();