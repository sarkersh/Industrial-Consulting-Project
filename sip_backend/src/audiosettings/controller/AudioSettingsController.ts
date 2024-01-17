// File: src/AudioSettings/controller/AudioSettingsController.ts
import { Request, Response } from "express";
import { AudioSettings } from "../model/AudioSettingsModel";
console.log(AudioSettings)
class AudioSettingsController {


    async read(req: Request, res: Response) {
        try{

            //return res.json({"body": "record"});

            const records = await AudioSettings.findAll({ where: {} });
            return res.json(records);

        }catch (e) {
            return res.json({
                msg: "fail to read AudioSettings",
                status: 500,
                route: "/read",
            });
        }

    }

    async create(req: Request, res: Response) {
        try {

           /* const audioSettings = await AudioSettings.findOne({ where: { email: req.body.email } });
            if (audioSettings) {
                return res.json({ message: "Failed! Email already in use" });
            }*/

            const record = await AudioSettings.create({ ...req.body });
            return res.json({
                record: record,
                msg: "AudioSettings created.",
            });
        } catch (e: any) {
            console.log(e.message)

            return res.json({
                msg: "Fail to create AudioSettings",
                status: 500,
                route: "/create",
            });
        }
    }


    async update(req: Request, res: Response) {
        const { mac } = req.params; // Assuming the AudioSettings ID is passed as a parameter
        const audioSettingsDataToUpdate = req.body; // Data to update, sent in the request body

        try {
            const audioSettings = await AudioSettings.findByPk(mac); // Find the AudioSettings by ID

            if (!audioSettings) {
                return res.status(404).json({ message: 'AudioSettings not found' });
            }

            // Update AudioSettings data
            await audioSettings.update(audioSettingsDataToUpdate);

            return res.status(200).json({ message: 'AudioSettings updated successfully', AudioSettings });
        } catch (error) {
            return res.status(500).json({
                msg: 'Failed to update AudioSettings',
                route: "/update/:id",
            });
        }
    }

    async destroy(req: Request, res: Response) {
        try {
            const { mac } = req.params;
            const record = await AudioSettings.findOne({ where: { mac } });
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

export default new AudioSettingsController();