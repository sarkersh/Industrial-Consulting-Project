
import express from "express";
import cookieParser from "cookie-parser";
const cors = require('cors');
import debug, { IDebugger } from "debug";
import db from './core/db/database'
import { User } from './user/model/UserModel'
import {AudioSettings} from './audiosettings/model/AudioSettingsModel'
import {AdvanceSettings} from './advance_settings/model/AdvanceSettingsModel'
import {AccountSettings} from './accountsettings/model/AccountSettingsModel'
import {DeviceAdmin} from './deviceadmin/model/DeviceAdminModel'
import {FeatureSettings} from './featuresettings/model/FeatureSettingsModel'
import {MpkDetails} from './mpkdetails/model/MpkDetailsModel'
import {PhoneMacs} from './phonemacs/model/PhoneMacsModel'
import {PhoneModels} from './phonemodels/model/PhoneModelsModel'
import {SipServer} from './sipserver/model/SipServerModel'
import {WebServices} from './webservices/model/WebServicesModel'

const log: IDebugger = debug("API:Server");

//routes
//======================

import { user } from './core/routes/index';
import { audioSettingsRoute } from './core/routes/index';
import { advanceSettingsRoute } from './core/routes/index';
import { accountSettingsRoute } from './core/routes/index';
import { deviceAdminRoute, featureSettings } from './core/routes/index';
import featureSettingsRoute from "./featuresettings/routes/FeatureSettingsRoute";
import mpkDetailsRoute from "./mpkdetails/routes/MpkDetailsRoute";
import phoneMacsRoute from "./phonemacs/routes/PhoneMacsRoute";
import phoneModelsRoute from "./phonemodels/routes/PhoneModelsRoute";
import sipServerRoute  from "./sipserver/routes/SipServerRoute";
import SipServerRoute from "./sipserver/routes/SipServerRoute";
import WebServicesRoute from "./webservices/routes/WebServicesRoute";


//Initialise Models
//======================
User.initModel(db);
AudioSettings.initModel(db);
AdvanceSettings.initModel(db);
AccountSettings.initModel(db);
DeviceAdmin.initModel(db);
FeatureSettings.initModel(db);
MpkDetails.initModel(db);
PhoneMacs.initModel(db);
PhoneModels.initModel(db);
SipServer.initModel(db);
WebServices.initModel(db);
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

// Enable CORS for all routes
app.use(cors());

//routes
//app.use(`/`, accountSettingsRoute);
app.use(`/user`, user.UserRoute);
app.use(`/user/read`, user.UserRoute);
app.use(`/user/create`, user.UserRoute);
app.use(`/user/update/:id`, user.UserRoute);
app.use(`/user/delete/:id`, user.UserRoute);
app.use(`/user/delete/:id`, user.UserRoute);
app.use(`/user/signin`, user.UserRoute);
app.use(`/user/signup`, user.UserRoute);

app.use(`/audioSettings`, audioSettingsRoute);
app.use(`/audioSettings/create`, audioSettingsRoute);
app.use(`/audioSettings/update/:id`, audioSettingsRoute);
app.use(`/audioSettings/delete/:id`, audioSettingsRoute);

app.use(`/advanceSettings`, advanceSettingsRoute);
app.use(`/advanceSettings/create`, advanceSettingsRoute);
app.use(`/advanceSettings/update/:mac`, advanceSettingsRoute);
app.use(`/advanceSettings/delete/:mac`, advanceSettingsRoute);

app.use(`/accountSettings`, accountSettingsRoute);
app.use(`/accountSettings/create`, accountSettingsRoute);
app.use(`/accountSettings/update/:id`, accountSettingsRoute);
app.use(`/accountSettings/delete/:id`, accountSettingsRoute);

app.use(`/deviceAdmin`, deviceAdminRoute);
app.use(`/deviceAdmin/create`, deviceAdminRoute);
app.use(`/deviceAdmin/update/:mac`, deviceAdminRoute);
app.use(`/deviceAdmin/delete/:mac`, deviceAdminRoute);

app.use(`/featureSettings`, featureSettingsRoute);
app.use(`/featureSettings/create`, featureSettingsRoute);
app.use(`/featureSettings/update/:mac`, featureSettingsRoute);
app.use(`/featureSettings/delete/:mac`, featureSettingsRoute);

app.use(`/mpkDetails`, mpkDetailsRoute);
app.use(`/mpkDetails/update/:id`, mpkDetailsRoute);
app.use(`/mpkDetails/create/`, mpkDetailsRoute);
app.use(`/mpkDetails/delete/:id`, mpkDetailsRoute);

app.use(`/phoneMacs/`, phoneMacsRoute);
app.use(`/phoneMacs/update/:id`, phoneMacsRoute);
app.use(`/phoneMacs/create/`, phoneMacsRoute);
app.use(`/phoneModels/delete/:id`, phoneModelsRoute);

app.use(`/sipServer`, SipServerRoute);
app.use(`/sipServer/update/:id`, SipServerRoute);
app.use(`/sipServer/create/`, SipServerRoute);
app.use(`/sipServer/delete/:id`, SipServerRoute);

app.use(`/webServices`, WebServicesRoute);
app.use(`/webServices/create`, WebServicesRoute);
app.use(`/webServices/update/:mac`, WebServicesRoute);
app.use(`/webServices/delete/:mac`, WebServicesRoute);


export default app;

