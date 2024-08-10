import { Router } from "express";
import * as employeesCtrl  from "../controllers/employee.controller"
import { verifyToken, isAdmin, isEmployee } from "../middlewares/auth.jwt";

const router = Router();

router.get('/', verifyToken, employeesCtrl.getAllEmployees);

router.post('/', [verifyToken, isAdmin], employeesCtrl.createEmployee);

export default router;