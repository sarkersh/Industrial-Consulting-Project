// File: src/user/model/UserModel.ts
import { DataTypes, Model, Sequelize } from "sequelize";
import DeviceAdminInterface from '../interface/DeviceAdminInterface';
export class DeviceAdmin extends Model<DeviceAdminInterface> {


   static initModel(sequelize: Sequelize): typeof DeviceAdmin {

       DeviceAdmin.init(
            {
                mac: {
                    type: DataTypes.STRING,
                    allowNull: false,
                    primaryKey: true
                },
                admin_pass: {
                    type: DataTypes.STRING,
                    allowNull: false,
                },

            },
            {
                sequelize,
                modelName: "DeviceAdmin",
                tableName: 'device_admin', // Adjust as per your table name
                timestamps: true,
            }
        );
        return DeviceAdmin
    }
}