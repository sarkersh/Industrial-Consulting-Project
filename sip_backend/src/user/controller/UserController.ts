// File: src/user/controller/UserController.ts
import { Request, Response } from "express";
import { User } from "../model/UserModel";
console.log(User)
class UserController {

    async start(req: Request, res: Response) {
        return res.json('User Api Working');
    }
    async read(req: Request, res: Response) {
        try{
            //const record = await User.findByPk(req.params.id);
            //return res.json(record);

            const records = await User.findAll({ where: {} });
            return res.json(records);

        }catch (e) {
            return res.json({
                msg: "fail to read user",
                status: 500,
                route: "/read",
            });
        }

    }
    async create__(req: Request, res: Response) {
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
    async create(req: Request, res: Response) {
        try {

            const user = await User.findOne({ where: { email: req.body.email } });
            if (user) {
                return res.json({ message: "Failed! Email already in use" });
            }

            const record = await User.create({ ...req.body });
            return res.json({
                record: record,
                msg: "User created.",
            });
        } catch (e: any) {
            console.log(e.message)

            return res.json({
                msg: "Fail to create user",
                status: 500,
                route: "/create",
            });
        }
    }

    async update__(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const record = await User.findOne({ where: { id } });
            if (!record) {
                return res.json({
                    msg: "Can not find existing record",
                });
            }
            const updatedRecord = await record.update(
                { ...req.body },
                { where: { id } }
            );
            return res.json({
                record: updatedRecord,
                msg: "Successfully updated record",
            });
        } catch (e) {
            return res.json({
                msg: "fail to read",
                status: 500,
                route: "/update/:id",
            });
        }
    }

    async update(req: Request, res: Response) {
        const { id } = req.params; // Assuming the user ID is passed as a parameter
        const userDataToUpdate = req.body; // Data to update, sent in the request body

        try {
            const user = await User.findByPk(id); // Find the user by ID

            if (!user) {
                return res.status(404).json({ message: 'User not found' });
            }

            // Update user data
            await user.update(userDataToUpdate);

            return res.status(200).json({ message: 'User updated successfully', user });
        } catch (error) {
            return res.status(500).json({
                msg: 'Failed to update user',
                route: "/update/:id",
            });
        }
    }



    async destroy(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const record = await User.findOne({ where: { id } });
            if (!record) {
                return res.json({
                    msg: "Can not find existing record",
                });
            }
            const deletedRecord = await record.destroy();

            return res.json({
                record: deletedRecord,
                msg: "Successfully deleted record",
            });
        } catch (e) {
            return res.json({
                msg: "fail to read",
                status: 500,
                route: "/delete/:id",
            });
        }
    }

}

export default new UserController();