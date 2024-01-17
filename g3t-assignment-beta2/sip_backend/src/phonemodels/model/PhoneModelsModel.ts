// File: src/user/model/UserModel.ts
import { DataTypes, Model, Sequelize } from "sequelize";
import PhoneModelsInterface from '../interface/PhoneModelsInterface';
export class PhoneModels extends Model<PhoneModelsInterface> {


   static initModel(sequelize: Sequelize): typeof PhoneModels {

       PhoneModels.init(
            {
                id: {
                    type: DataTypes.INTEGER,
                    allowNull: false,
                    primaryKey: true
                },
                phone_name: {
                    type: DataTypes.STRING,
                    allowNull: false,
                },
                mp_keys: {
                    type: DataTypes.STRING,
                    allowNull: false,
                },
                common: {
                    type: DataTypes.STRING,
                    allowNull: false,
                },

            },
            {
                sequelize,
                modelName: "PhoneModels",
                tableName: 'phone_models', // Adjust as per your table name
                timestamps: true,
            }
        );
        return PhoneModels
    }
}