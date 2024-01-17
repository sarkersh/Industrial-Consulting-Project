
import { DataTypes, Model, Sequelize } from "sequelize";
import AdvanceSettingsInterface from '../interface/AdvanceSettingsInterface';
export class AdvanceSettings extends Model<AdvanceSettingsInterface> {

   static initModel(sequelize: Sequelize): typeof AdvanceSettings {

       AdvanceSettings.init(
            {
                mac: {
                    type: DataTypes.INTEGER,
                    primaryKey: true,
                    allowNull: false,
                    autoIncrement: true,
                },
                vlan_tag: {
                    type: DataTypes.STRING,
                    allowNull: false,
                },
                priority_tag: {
                    type: DataTypes.STRING,
                    allowNull: false,
                },
                pc_vlan_tag: {
                    type: DataTypes.STRING,
                    allowNull: false,
                },
                pc_priority_tag: {
                    type: DataTypes.STRING,
                    allowNull: false,
                },
                host_name: {
                    type: DataTypes.STRING,
                    allowNull: false,
                },
                bg_label: {
                    type: DataTypes.INTEGER,
                    allowNull: false,
                },
                long_label: {
                    type: DataTypes.INTEGER,
                    allowNull: false,
                }
            },
            {
                sequelize,
                modelName: "AdvanceSettings",
                tableName: 'advance_settings', // Adjust as per your table name
                timestamps: true,
            }
        );
        return AdvanceSettings
    }
}