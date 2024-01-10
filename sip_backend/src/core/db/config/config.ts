import('dotenv/config')
import { Options } from "sequelize";

export default {
    development: {
        dialect:  process.env.DB_DIALECT,
        database: process.env.DB_NAME,
        username: process.env.DB_USER,
        password: process.env.DB_PASS,
        host: process.env.DB_HOST,
        port: parseInt(process.env.DB_PORT!)
    },
    test: {
        dialect:  process.env.DB_DIALECT,
        database: process.env.DB_NAME,
        username: process.env.DB_USER,
        password: process.env.DB_PASS,
        host: process.env.DB_HOST,
        port: parseInt(process.env.DB_PORT!)
    },
    production: {
        dialect:  process.env.DB_DIALECT,
        database: process.env.DB_NAME,
        username: process.env.DB_USER,
        password: process.env.DB_PASS,
        host: process.env.DB_HOST,
        port: parseInt(process.env.DB_PORT!)
    }

}