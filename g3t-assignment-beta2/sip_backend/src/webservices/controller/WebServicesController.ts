
import { Request, Response } from "express";
import { WebServices } from "../model/WebServicesModel";
//console.log(WebServices)
class WebServicesController {


    async read(req: Request, res: Response) {
        try{

            //return res.json({"body": "record"});

            const records = await WebServices.findAll({ where: {} });
            return res.json(records);

        }catch (e) {
            return res.json({
                msg: "fail to read WebServices",
                status: 500,
                route: "/read",
            });
        }

    }

    async create(req: Request, res: Response) {
        try {

            const record = await WebServices.create({ ...req.body });
            return res.json({
                record: record,
                msg: "WebServices created.",
            });
        } catch (e: any) {
            console.log(e.message)

            return res.json({
                msg: "Fail to create WebServices",
                status: 500,
                route: "/create",
            });
        }
    }


    async update(req: Request, res: Response) {
        const { mac } = req.params; // Assuming the WebServices ID is passed as a parameter
        const dataToUpdate = req.body; // Data to update, sent in the request body

        try {
            const record = await WebServices.findByPk(mac); // Find the WebServices by ID

            if (!record) {
                return res.status(404).json({ message: 'WebServices not found' });
            }

            // Update WebServices data
            await record.update(dataToUpdate);

            return res.status(200).json({ message: 'WebServices updated successfully', WebServices });
        } catch (error) {
            return res.status(500).json({
                msg: 'Failed to update WebServices',
                route: "/update/:mac",
            });
        }
    }

    async destroy(req: Request, res: Response) {
        try {
            const { mac } = req.params;
            const record = await WebServices.findOne({ where: { mac } });
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
                route: "/delete/:mac",
            });
        }
    }

}

export default new WebServicesController();