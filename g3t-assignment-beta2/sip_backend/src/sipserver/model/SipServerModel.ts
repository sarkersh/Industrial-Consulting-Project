// File: src/user/model/UserModel.ts
import { DataTypes, Model, Sequelize } from "sequelize";
import SipServerInterface from '../interface/SipServerInterface';
export class SipServer extends Model<SipServerInterface> {

   static initModel(sequelize: Sequelize): typeof SipServer {

       SipServer.init(
            {
                id: {
                    type: DataTypes.INTEGER,
                    allowNull: true,
                    primaryKey: true
                },
                sip_ip: {
                    type: DataTypes.STRING,
                    allowNull: false,
                },
                server_type: {
                    type: DataTypes.STRING,
                    allowNull: false,
                },

            },
            {
                sequelize,
                modelName: "SipServer",
                tableName: 'sip_server', // Adjust as per your table name
                timestamps: true,
            }
        );
        return SipServer
    }
}