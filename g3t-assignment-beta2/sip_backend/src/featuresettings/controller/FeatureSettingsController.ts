
import { Request, Response } from "express";
import { FeatureSettings } from "../model/FeatureSettingsModel";

class FeatureSettingsController {


    async read(req: Request, res: Response) {
        try{

            const records = await FeatureSettings.findAll({ where: {} });
            return res.json(records);

        }catch (e) {
            return res.json({
                msg: "fail to read FeatureSettings",
                status: 500,
                route: "/read",
            });
        }

    }

    async create(req: Request, res: Response) {
        try {

            const record = await FeatureSettings.create({ ...req.body });
            return res.json({
                record: record,
                msg: "FeatureSettings created.",
            });
        } catch (e: any) {
            console.log(e.message)

            return res.json({
                msg: "Fail to create FeatureSettings",
                status: 500,
                route: "/create",
            });
        }
    }


    async update(req: Request, res: Response) {
        const { mac } = req.params; // Assuming the FeatureSettings ID is passed as a parameter
        const dataToUpdate = req.body; // Data to update, sent in the request body

        console.log("MAC",mac)



        try {
            const record = await FeatureSettings.findByPk(mac); // Find the FeatureSettings by ID

            if (!record) {
                return res.status(404).json({ message: 'FeatureSettings not found' });
            }

            // Update FeatureSettings data
            await record.update(dataToUpdate);

            return res.status(200).json({ message: 'FeatureSettings updated successfully', FeatureSettings });
        } catch (error) {
            return res.status(500).json({
                msg: 'Failed to update FeatureSettings',
                route: "/update/:mac",
            });
        }
    }

    async destroy(req: Request, res: Response) {
        try {
            const { mac } = req.params;
            const record = await FeatureSettings.findOne({ where: { mac } });
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

export default new FeatureSettingsController();