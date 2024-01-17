// File: src/user/model/UserModel.ts
import { DataTypes, Model, Sequelize } from "sequelize";
import bcrypt from 'bcrypt'
import AudioSettingsInterface from '../interface/AudioSettingsInterface';
export class AudioSettings extends Model<AudioSettingsInterface> {


   static initModel(sequelize: Sequelize): typeof AudioSettings {

       AudioSettings.init(
            {
                mac: {
                    type: DataTypes.INTEGER,
                    primaryKey: true,
                    allowNull: false,
                    autoIncrement: true,
                },
                fcodec: {
                    type: DataTypes.STRING,
                    allowNull: false,
                },
                scodec: {
                    type: DataTypes.STRING,
                    allowNull: false,
                },
                tcodec: {
                    type: DataTypes.STRING,
                    allowNull: false,
                },
                handsetgain: {
                    type: DataTypes.STRING,
                    allowNull: false,
                }
            },
            {
                sequelize,
                modelName: "AudioSettings",
                tableName: 'audio_settings', // Adjust as per your table name
                timestamps: true,
            }
        );
        return AudioSettings
    }
}