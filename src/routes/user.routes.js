import { Router } from "express";
import * as userCtrl from './../controllers/user.controller';
import { verifyToken, isAdmin } from "../middlewares/auth.jwt";

const router = Router();

router.get('/', [verifyToken, isAdmin], userCtrl.getAllUsers)

export default router;