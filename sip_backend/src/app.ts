
import express from "express";
import cookieParser from "cookie-parser";
import debug, { IDebugger } from "debug";
import db from './core/db/database'
import { User } from './user/model/UserModel'
const log: IDebugger = debug("API:Server");


//routes
import { phoneRouter } from "./core/routes/phone";
//import { home, phone} from './core/routes/index';
import { home } from './core/routes/index';
import { user } from './core/routes/index';


//Initialise Models
//======================
User.initModel(db);
//======================



const app = express();
const route_prefix = process.env.API_ROUTE_PREFIX;


// will work in development environment only
if (process.env.NODE_ENV == 'development') {
    console.log(process.env.NODE_ENV)
    db.sync( ).then(() => {
        console.log("connect to db")


    }).catch((err) => {
        console.log("Error: ",err)
    })
}



//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())



//routes
//app.use("/api/phone", phoneRouter);
app.use("/api/phone", phone);
app.use(`/`, home);
app.use(`/user`, user.UserRoute);
app.use(`/user/read`, user.UserRoute);
app.use(`/user/create`, user.UserRoute);
app.use(`/user/update/:id`, user.UserRoute);
app.use(`/user/delete/:id`, user.UserRoute);
app.use(`/user/delete/:id`, user.UserRoute);
app.use(`/user/signin`, user.UserRoute);
app.use(`/user/signup`, user.UserRoute);


//db
/*const initializeDatabase = async ()=>{
   // initModels(db)
}*/
//initializeDatabase()

export default app;

