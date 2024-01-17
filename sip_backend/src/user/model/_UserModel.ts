import { DataTypes, Model, Sequelize } from "sequelize";
import bcrypt from 'bcrypt'

interface UserAttributes {
    id: number;
    username: string;
    email: string;
    password: string;
}

export class User extends Model<UserAttributes> {
    public id!: number;
    public username!: string;
    public email!: string;
    public password!: string;

    static initialize(sequelize: Sequelize): void {
        User.init(
            {
                id: {
                    type: DataTypes.INTEGER,
                    primaryKey: true,
                    autoIncrement: true,
                },
                username: {
                    type: DataTypes.STRING,
                    allowNull: false,
                },
                email: {
                    type: DataTypes.STRING,
                    allowNull: false,
                    unique: true,
                },
                password: {
                    type: DataTypes.STRING,
                    allowNull: false,
                    /*set(value: string) {
                        const hash = bcrypt.hashSync(value, 10);
                        this.setDataValue('password', hash);
                    },*/
                },
            },
            {
                sequelize,
                modelName: 'User',
                tableName: 'users', // Adjust as per your table name
                timestamps: true,
            }
        );
    }
}

//export default User;
