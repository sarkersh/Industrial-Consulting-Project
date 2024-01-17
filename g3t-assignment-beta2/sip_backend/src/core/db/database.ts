
import configs from './config/config'
import { Sequelize, Options } from "sequelize";

const env = process.env.NODE_ENV || 'development'
const config = (configs as { [key: string]: Options })[env]

console.log(config)

const db = new Sequelize(
config.dialect !== 'sqlite' ?
    {
            ...config, define: {
                underscored: true,
            }
    } :
    {
            dialect: config.dialect, storage: config.database
    }
)



/*

import dotenv from 'dotenv'; // Import dotenv

dotenv.config(); // Load environment variables from .env

const sequelize = new Sequelize({
    dialect: 'mysql',
    host: process.env.DB_HOST, // Enter your MySQL database host
    port: Number(process.env.DB_PORT), // Enter your MySQL database port
    username: process.env.DB_USER, // Enter your MySQL database username
    password: process.env.DB_PASSWORD, // Enter your MySQL database password
    database: process.env.DB_NAME, // Enter your MySQL database name
});

// Test the connection
(async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
})();
*/


export default db