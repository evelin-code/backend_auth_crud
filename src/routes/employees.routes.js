import { Router } from "express";
import * as employeesCtrl  from "../controllers/employees.controller"
import { verifyToken } from "../middlewares/auth.jwt";

const router = Router();

router.get('/', verifyToken, employeesCtrl.getEmployee);

router.post('/', employeesCtrl.createEmployee);

router.get('/:employeeId', employeesCtrl.getEmployeeById);

router.put('/:employeeId', employeesCtrl.updateEmployeeById);

router.delete('/:employeeId', employeesCtrl.deleteEmployee);

export default router;