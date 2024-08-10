import { Router } from "express";
import * as requestCtrl  from "../controllers/request.controller"
import { verifyToken, isAdmin, isEmployee } from "../middlewares/auth.jwt";

const router = Router();

router.get('/', [verifyToken, isAdmin], requestCtrl.getAllRequests);

router.post('/', [verifyToken, isAdmin], requestCtrl.createRequest);

router.delete('/:id', [verifyToken, isAdmin], requestCtrl.deleteRequest);

export default router;