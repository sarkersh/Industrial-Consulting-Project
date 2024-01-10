//File: api/home/controller/Homecontroller.ts
import { Request, Response } from "express";

class HomeController {
    async home(req: Request, res: Response) {
        return res.json('Api Working');
    }
}
export default new HomeController();