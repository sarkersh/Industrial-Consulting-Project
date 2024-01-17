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