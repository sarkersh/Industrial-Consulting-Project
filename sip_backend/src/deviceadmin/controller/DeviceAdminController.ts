
import { Request, Response } from "express";
import { DeviceAdmin } from "../model/DeviceAdminModel";
//console.log(DeviceAdmin)
class DeviceAdminController {


    async read(req: Request, res: Response) {
        try{

            //return res.json({"body": "record"});

            const records = await DeviceAdmin.findAll({ where: {} });
            return res.json(records);

        }catch (e) {
            return res.json({
                msg: "fail to read DeviceAdmin",
                status: 500,
                route: "/read",
            });
        }

    }

    async create(req: Request, res: Response) {
        try {

            const record = await DeviceAdmin.create({ ...req.body });
            return res.json({
                record: record,
                msg: "DeviceAdmin created.",
            });
        } catch (e: any) {
            console.log(e.message)

            return res.json({
                msg: "Fail to create DeviceAdmin",
                status: 500,
                route: "/create",
            });
        }
    }


    async update(req: Request, res: Response) {
        const { mac } = req.params; // Assuming the DeviceAdmin ID is passed as a parameter
        const dataToUpdate = req.body; // Data to update, sent in the request body

        try {
            const record = await DeviceAdmin.findByPk(mac); // Find the DeviceAdmin by ID

            if (!record) {
                return res.status(404).json({ message: 'DeviceAdmin not found' });
            }

            // Update DeviceAdmin data
            await record.update(dataToUpdate);

            return res.status(200).json({ message: 'DeviceAdmin updated successfully', DeviceAdmin });
        } catch (error) {
            return res.status(500).json({
                msg: 'Failed to update DeviceAdmin',
                route: "/update/:id",
            });
        }
    }

    async destroy(req: Request, res: Response) {
        try {
            const { mac } = req.params;
            const record = await DeviceAdmin.findOne({ where: { mac } });
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

export default new DeviceAdminController();