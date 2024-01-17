
import { Request, Response } from "express";
import { AdvanceSettings } from "../model/AdvanceSettingsModel";
console.log(AdvanceSettings)
class AdvanceSettingsController {

    async read(req: Request, res: Response) {
        try{

            //return res.json({"body": "record"});

            const records = await AdvanceSettings.findAll({ where: {} });
            return res.json(records);

        }catch (e) {
            return res.json({
                msg: "fail to read AdvanceSettings",
                status: 500,
                route: "/read",
            });
        }

    }

    async create(req: Request, res: Response) {
        try {

            const record = await AdvanceSettings.create({ ...req.body });
            return res.json({
                record: record,
                msg: "AdvanceSettings created.",
            });
        } catch (e: any) {
            console.log(e.message)

            return res.json({
                msg: "Fail to create AdvanceSettings",
                status: 500,
                route: "/create",
            });
        }
    }


    async update(req: Request, res: Response) {
        const { mac } = req.params; // Assuming the AdvanceSettings ID is passed as a parameter

        console.log("MAC: ", req.params)
        const advanceSettingsDataToUpdate = req.body; // Data to update, sent in the request body

        try {
            const record = await AdvanceSettings.findByPk(mac); // Find the AdvanceSettings by mac

            if (!record) {
                return res.status(404).json({ message: 'AdvanceSettings not found' });
            }

            // Update AdvanceSettings data
            await record.update(advanceSettingsDataToUpdate);

            return res.status(200).json({ message: 'AdvanceSettings updated successfully', AdvanceSettings });
        } catch (error) {
            return res.status(500).json({
                msg: 'Failed to update AdvanceSettings',
                route: "/update/:id",
            });
        }
    }

    async destroy(req: Request, res: Response) {
        try {
            const { mac } = req.params;
            const record = await AdvanceSettings.findOne({ where: { mac } });
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

export default new AdvanceSettingsController();