// File: src/user/model/UserModel.ts
import { DataTypes, Model, Sequelize } from "sequelize";
import bcrypt from 'bcrypt'
import UserInterface from '../interface/UserInterface';
export class User extends Model<UserInterface> {

   /*
   public id!: number;
   public username!: string;
   public email!: string;
   public password!: string;
   */
   static initModel(sequelize: Sequelize): typeof User {

        User.init(
            {
                id: {
                    type: DataTypes.INTEGER,
                    primaryKey: true,
                    allowNull: false,
                    autoIncrement: true,
                },
                username: {
                    type: DataTypes.STRING,
                    allowNull: false,
                },
                email: {
                    type: DataTypes.STRING,
                    unique: true,
                    allowNull: false,
                },
                password: {
                    type: DataTypes.STRING,
                    allowNull: false,
                    set(value: string) {
                        const hash = bcrypt.hashSync(value, 10);
                        this.setDataValue("password",hash);
                    },
                },
            },
            {
                sequelize,
                modelName: "User",
               // tableName: 'users', // Adjust as per your table name
                timestamps: true,
            }
        );
        return User
    }
}