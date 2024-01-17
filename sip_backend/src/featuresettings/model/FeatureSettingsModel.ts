// File: src/user/model/UserModel.ts
import { DataTypes, Model, Sequelize } from "sequelize";
import FeatureSettingsInterface from '../interface/FeatureSettingsInterface';
export class FeatureSettings extends Model<FeatureSettingsInterface> {


   static initModel(sequelize: Sequelize): typeof FeatureSettings {

       FeatureSettings.init(
            {
                mac: {
                    type: DataTypes.STRING,
                    allowNull: false,
                    primaryKey: true
                },
                a_transfer:{
                    type: DataTypes.STRING,
                    allowNull: false,
                },
                enable_cf:{
                    type: DataTypes.STRING,
                    allowNull: false,
                },
                fs_date:{
                    type: DataTypes.STRING,
                    allowNull: false,
                },
                rc_dnd:{
                    type: DataTypes.STRING,
                    allowNull: false,
                },
                disable_call_waiting:{
                    type: DataTypes.STRING,
                    allowNull: false,
                },
                dnd_on:{
                    type: DataTypes.STRING,
                    allowNull: false,
                },
                dnd_off:{
                    type: DataTypes.STRING,
                    allowNull: false,
                },
                VPK_transfer:{
                    type: DataTypes.NUMBER,
                    field: 'vpk_transfer',
                    allowNull: false,
                },
                cf_on:{
                    type: DataTypes.STRING,
                    allowNull: false,
                },
                cf_off:{
                    type: DataTypes.STRING,
                    allowNull: false,
                },
                incoming_call_popup:{
                    type: DataTypes.STRING,
                    allowNull: false,
                },

            },
            {
                sequelize,
                modelName: "FeatureSettings",
                tableName: 'feature_settings', // Adjust as per your table name
                timestamps: true,
            }
        );
        return FeatureSettings
    }
}