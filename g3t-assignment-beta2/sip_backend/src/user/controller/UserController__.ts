// File: src/user/controller/UserController.ts
import { Request, Response } from "express";
import { User } from "../model/UserModel";

class UserController {

    async start(req: Request, res: Response) {
        return res.json('User Api Working');
    }
    async read(req: Request, res: Response) {
        try{
            const record = await User.findByPk(req.params.id);
            return res.json(record);
        }catch (e) {
            return res.json({
                msg: "fail to read user",
                status: 500,
                route: "/read",
            });
        }
        //const records = await User.findAll({ where: {} });
        //return res.json(records);
    }
    async create(req: Request, res: Response) {
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

            console.log(e)
            return res.json({
                msg: "fail to create user",
                status: 500,
                route: "/create",
            });
        }
    }
}

export default new UserController();