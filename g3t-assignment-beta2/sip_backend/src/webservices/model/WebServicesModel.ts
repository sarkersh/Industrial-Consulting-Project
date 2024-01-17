// File: src/user/model/UserModel.ts
import { DataTypes, Model, Sequelize } from "sequelize";
import WebServicesInterface from '../interface/WebServicesInterface';
export class WebServices extends Model<WebServicesInterface> {


   static initModel(sequelize: Sequelize): typeof WebServices {

       WebServices.init(
            {
                mac: {
                    type: DataTypes.STRING,
                    allowNull: false,
                    primaryKey: true
                },
                weather_update: {
                    type: DataTypes.STRING,
                    allowNull: false,
                },
                currency_exchange: {
                    type: DataTypes.STRING,
                    allowNull: false,
                },
                firmware_upgrade: {
                    type: DataTypes.STRING,
                    allowNull: false,
                },
                connection_type: {
                    type: DataTypes.INTEGER,
                    allowNull: false,
                },

            },
            {
                sequelize,
                modelName: "WebServices",
                tableName: 'web_services', // Adjust as per your table name
                timestamps: true,
            }
        );
        return WebServices
    }
}