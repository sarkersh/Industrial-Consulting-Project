// File: src/user/model/UserModel.ts
import { DataTypes, Model, Sequelize } from "sequelize";
import MpkDetailsInterface from '../interface/MpkDetailsInterface';
export class MpkDetails extends Model<MpkDetailsInterface> {


   static initModel(sequelize: Sequelize): typeof MpkDetails {

       MpkDetails.init(
            {
                id: {
                    type: DataTypes.INTEGER,
                    allowNull: true,
                    primaryKey: true
                },
                mac: {
                    type: DataTypes.STRING,
                    allowNull: false,
                },
                mode: {
                    type: DataTypes.STRING,
                    allowNull: false,
                },
                account: {
                    type: DataTypes.STRING,
                    allowNull: false,
                },
                mpk_description: {
                    type: DataTypes.STRING,
                    allowNull: false,
                },
                mpk_value: {
                    type: DataTypes.STRING,
                    allowNull: false,
                },
            },
            {
                sequelize,
                modelName: "MpkDetails",
                tableName: 'mpk_details', // Adjust as per your table name
                timestamps: true,
            }
        );
        return MpkDetails
    }
}