
import { Request, Response } from "express";
import { MpkDetails } from "../model/MpkDetailsModel";
//console.log(MpkDetails)
class MpkDetailsController {


    async read(req: Request, res: Response) {
        try{

            const records = await MpkDetails.findAll({ where: {} });
            return res.json(records);

        }catch (e) {
            return res.json({
                msg: "fail to read MpkDetails",
                status: 500,
                route: "/read",
            });
        }

    }

    async create(req: Request, res: Response) {
        try {
            const record = await MpkDetails.create({ ...req.body });
            return res.json({
                record: record,
                msg: "MpkDetails created.",
            });
        } catch (e: any) {

            return res.json({
                msg: "Fail to create MpkDetails",
                status: 500,
                route: "/create",
            });
        }
    }


    async update(req: Request, res: Response) {
        const { id } = req.params; // Assuming the MpkDetails ID is passed as a parameter
        const dataToUpdate = req.body; // Data to update, sent in the request body

        try {
            const record = await MpkDetails.findByPk(id); // Find the MpkDetails by ID

            if (!record) {
                return res.status(404).json({ message: 'MpkDetails not found' });
            }

            // Update MpkDetails data
            await record.update(dataToUpdate);

            return res.status(200).json({ message: 'MpkDetails updated successfully', MpkDetails });
        } catch (error) {
            return res.status(500).json({
                msg: 'Failed to update MpkDetails',
                route: "/update/:id",
            });
        }
    }

    async destroy(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const record = await MpkDetails.findOne({ where: { id } });
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

export default new MpkDetailsController();