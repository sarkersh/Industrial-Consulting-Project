//File: api/routes/HomeRoute.ts
import express from "express";
import HomeController from "../controller/HomeController";
const HomeRouter = express.Router();

HomeRouter.get("/", HomeController.home);

export default HomeRouter;