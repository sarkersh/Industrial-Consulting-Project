// File: src/user/model/UserModel.ts
import { DataTypes, Model, Sequelize } from "sequelize";
import PhoneMacsInterface from '../interface/PhoneMacsInterface';
export class PhoneMacs extends Model<PhoneMacsInterface> {


   static initModel(sequelize: Sequelize): typeof PhoneMacs {

       PhoneMacs.init(
            {
                id: {
                    type: DataTypes.STRING,
                    allowNull: false,
                    primaryKey: true
                },
                model_id: {
                    type: DataTypes.INTEGER,
                    allowNull: false,
                },
                model_mac: {
                    type: DataTypes.STRING,
                    allowNull: false,
                }

            },
            {
                sequelize,
                modelName: "PhoneMacs",
                tableName: 'phone_macs', // Adjust as per your table name
                timestamps: true,
            }
        );
        return PhoneMacs
    }
}