// File: src/user/model/UserModel.ts
import { DataTypes, Model, Sequelize } from "sequelize";
import AccountSettingsInterface from '../interface/AccountSettingsInterface';
export class AccountSettings extends Model<AccountSettingsInterface> {


   static initModel(sequelize: Sequelize): typeof AccountSettings {

       AccountSettings.init(
            {
                id: {
                    type: DataTypes.INTEGER,
                    primaryKey: true,
                    allowNull: true,
                    autoIncrement: true,
                },
                model_id: {
                    type: DataTypes.INTEGER,
                    allowNull: false
                },
                mac: {
                    type: DataTypes.STRING,
                    allowNull: false
                },
                account_active: {
                    type: DataTypes.STRING,
                    allowNull: false,
                },
                account_name: {
                    type: DataTypes.STRING,
                    allowNull: false,
                },
                sip_server: {
                    type: DataTypes.STRING,
                    allowNull: false,
                },
                sip_user: {
                    type: DataTypes.STRING,
                    allowNull: false,
                },
                auth_id: {
                    type: DataTypes.STRING,
                    allowNull: false,
                },
                auth_password: {
                    type: DataTypes.STRING,
                    allowNull: false,
                },
                acc_name: {
                    type: DataTypes.STRING,
                    allowNull: false,
                },
                voicemail_id: {
                    type: DataTypes.STRING,
                    allowNull: false,
                },
                cf_created: {
                    type: DataTypes.STRING,
                    allowNull: false,
                },
                date_created: {
                    type: DataTypes.STRING,
                    allowNull: false,
                },
                flag: {
                    type: DataTypes.STRING,
                    allowNull: false,
                }
            },
            {
                sequelize,
                modelName: "AccountSettings",
                tableName: 'account_settings', // Adjust as per your table name
                timestamps: true,
            }
        );
        return AccountSettings
    }
}