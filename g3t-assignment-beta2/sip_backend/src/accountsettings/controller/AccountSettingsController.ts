// File: src/AccountSettings/controller/AccountSettingsController.ts
import { Request, Response } from "express";
import { AccountSettings } from "../model/AccountSettingsModel";
console.log(AccountSettings)
class AccountSettingsController {


    async read(req: Request, res: Response) {
        try{

            //return res.json({"body": "record"});

            const records = await AccountSettings.findAll({ where: {} });
            return res.json(records);

        }catch (e) {
            return res.json({
                msg: "fail to read AccountSettings",
                status: 500,
                route: "/read",
            });
        }

    }

    async create(req: Request, res: Response) {
        try {

            const record = await AccountSettings.create({ ...req.body });
            return res.json({
                record: record,
                msg: "AccountSettings created.",
            });
        } catch (e: any) {
            console.log(e)

            return res.json({
                msg: "Fail to create AccountSettings",
                status: 500,
                route: "/create",
            });
        }
    }


    async update(req: Request, res: Response) {
        const { id } = req.params; // Assuming the AccountSettings ID is passed as a parameter
        const dataToUpdate = req.body; // Data to update, sent in the request body

        try {
            const record = await AccountSettings.findByPk(id); // Find the AccountSettings by ID

            if (!record) {
                return res.status(404).json({ message: 'AccountSettings not found' });
            }

            // Update AccountSettings data
            await record.update(dataToUpdate);

            return res.status(200).json({ message: 'AccountSettings updated successfully', AccountSettings });
        } catch (error) {
            return res.status(500).json({
                msg: 'Failed to update AccountSettings',
                route: "/update/:id",
            });
        }
    }

    async destroy(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const record = await AccountSettings.findOne({ where: { id } });
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

export default new AccountSettingsController();