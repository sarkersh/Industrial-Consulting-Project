
import { Request, Response } from "express";
import { PhoneModels } from "../model/PhoneModelsModel";
//console.log(PhoneModels)
class PhoneModelsController {


    async read(req: Request, res: Response) {
        try{

            //return res.json({"body": "record"});

            const records = await PhoneModels.findAll({ where: {} });
            return res.json(records);

        }catch (e) {
            return res.json({
                msg: "fail to read PhoneModels",
                status: 500,
                route: "/read",
            });
        }

    }

    async create(req: Request, res: Response) {
        try {


            const record = await PhoneModels.create({ ...req.body });
            return res.json({
                record: record,
                msg: "PhoneModels created.",
            });
        } catch (e: any) {
            console.log(e.message)

            return res.json({
                msg: "Fail to create PhoneModels",
                status: 500,
                route: "/create",
            });
        }
    }


    async update(req: Request, res: Response) {
        const { id } = req.params; // Assuming the PhoneModels ID is passed as a parameter
        const dataToUpdate = req.body; // Data to update, sent in the request body

        try {
            const record = await PhoneModels.findByPk(id); // Find the PhoneModels by ID

            if (!record) {
                return res.status(404).json({ message: 'PhoneModels not found' });
            }

            // Update PhoneModels data
            await record.update(dataToUpdate);

            return res.status(200).json({ message: 'PhoneModels updated successfully', PhoneModels });
        } catch (error) {
            return res.status(500).json({
                msg: 'Failed to update PhoneModels',
                route: "/update/:id",
            });
        }
    }

    async destroy(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const record = await PhoneModels.findOne({ where: { id } });
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

export default new PhoneModelsController();