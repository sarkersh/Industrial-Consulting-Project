/*
import 'dotenv/config'
import debug, { IDebugger } from "debug";
import app from "./app";

const port =  3000;
const log: IDebugger = debug("API:Server");
const debugLog: IDebugger = debug("app");

const start = async (): Promise<void> => {
    try {
        app.listen(port, async () => {
            log(`App is running at http://localhost:${port}`);
        });

    } catch (error) {
        debugLog(error)
        process.exit(1)
    }
}
void start();*/


// server.ts
import 'dotenv/config'
import debug, { IDebugger } from "debug";
import app from "./app";

//const port =  3000;
const log: IDebugger = debug("API:Server");
const debugLog: IDebugger = debug("app");

const app_name = process.env.APP_NAME || 'APP';
const port = process.env.PORT || 3000;


const start = async (): Promise<void> => {
    try {
        app.listen(port, async () => {
            //console.log(`App is running at http://localhost:${port}`);
            log(`${app_name} is running at http://localhost:${port}`);
        });

    } catch (error) {
        console.error(error)
        process.exit(1)
    }
}
void start();