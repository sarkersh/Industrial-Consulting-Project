//File: api/routes/HomeRoute.ts
import express from "express";
import ConfigFileController from "../controller/ConfigFileController";
const ConfigFileRouter = express.Router();

ConfigFileRouter.post("/create", ConfigFileController.create);
ConfigFileRouter.get("/download", ConfigFileController.download);
ConfigFileRouter.delete("/delete-file", ConfigFileController.delete);
ConfigFileRouter.get("/fileList", ConfigFileController.fileList);

export default ConfigFileRouter;