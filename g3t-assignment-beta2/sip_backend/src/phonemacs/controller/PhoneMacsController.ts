
import { Request, Response } from "express";
import { PhoneMacs } from "../model/PhoneMacsModel";
//console.log(PhoneMacs)
class PhoneMacsController {


    async read(req: Request, res: Response) {
        try{

            //return res.json({"body": "record"});

            const records = await PhoneMacs.findAll({ where: {} });
            return res.json(records);

        }catch (e) {
            return res.json({
                msg: "fail to read PhoneMacs",
                status: 500,
                route: "/read",
            });
        }

    }

    async create(req: Request, res: Response) {
        try {


            const record = await PhoneMacs.create({ ...req.body });
            return res.json({
                record: record,
                msg: "PhoneMacs created.",
            });
        } catch (e: any) {
            console.log(e.message)

            return res.json({
                msg: "Fail to create PhoneMacs",
                status: 500,
                route: "/create",
            });
        }
    }


    async update(req: Request, res: Response) {
        const { id } = req.params; // Assuming the PhoneMacs ID is passed as a parameter
        const dataToUpdate = req.body; // Data to update, sent in the request body

        try {
            const record = await PhoneMacs.findByPk(id); // Find the PhoneMacs by ID

            if (!record) {
                return res.status(404).json({ message: 'PhoneMacs not found' });
            }

            // Update PhoneMacs data
            await record.update(dataToUpdate);

            return res.status(200).json({ message: 'PhoneMacs updated successfully', PhoneMacs });
        } catch (error) {
            return res.status(500).json({
                msg: 'Failed to update PhoneMacs',
                route: "/update/:id",
            });
        }
    }

    async destroy(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const record = await PhoneMacs.findOne({ where: { id } });
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

export default new PhoneMacsController();