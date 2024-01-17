
import { Request, Response } from "express";
import { SipServer } from "../model/SipServerModel";
//console.log(SipServer)
class SipServerController {


    async read(req: Request, res: Response) {
        try{

            //return res.json({"body": "record"});

            const records = await SipServer.findAll({ where: {} });
            return res.json(records);

        }catch (e) {
            return res.json({
                msg: "fail to read SipServer",
                status: 500,
                route: "/read",
            });
        }

    }

    async create(req: Request, res: Response) {
        try {


            const record = await SipServer.create({ ...req.body });
            return res.json({
                record: record,
                msg: "SipServer created.",
            });
        } catch (e: any) {
            console.log(e.message)

            return res.json({
                msg: "Fail to create SipServer",
                status: 500,
                route: "/create",
            });
        }
    }


    async update(req: Request, res: Response) {
        const { id } = req.params; // Assuming the SipServer ID is passed as a parameter
        const dataToUpdate = req.body; // Data to update, sent in the request body

        try {
            const record = await SipServer.findByPk(id); // Find the SipServer by ID

            if (!record) {
                return res.status(404).json({ message: 'SipServer not found' });
            }

            // Update SipServer data
            await record.update(dataToUpdate);

            return res.status(200).json({ message: 'SipServer updated successfully', SipServer });
        } catch (error) {
            return res.status(500).json({
                msg: 'Failed to update SipServer',
                route: "/update/:id",
            });
        }
    }

    async destroy(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const record = await SipServer.findOne({ where: { id } });
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

export default new SipServerController();