import EmployeeModel from '../models/EmployeeModel'
import UserModel from '../models/UserModel'
import { RESPONSE_MESSAGES } from '../config/constants/employee.constants';

export const getAllEmployees = async (req, res) => {
  try {
    const employees = await EmployeeModel.findAll();

    if (employees.length === 0) {
      return res.status(404).json({ message: RESPONSE_MESSAGES.NO_EMPLOYEES_FOUND });
    }

    res.status(200).json({ message: RESPONSE_MESSAGES.EMPLOYEES_FOUND, employees });
  } catch (error) {
    res.status(500).json({ message: RESPONSE_MESSAGES.ERROR_FETCHING_EMPLOYEES, error: error.message });
  }
}

export const createEmployee = async (req, res) => {
  const { date_entry, name, salary, user_id } = req.body;

  try {
    const userExists = await UserModel.findByPk(user_id);
    if (!userExists) {
      return res.status(404).json({ message: RESPONSE_MESSAGES.USER_NOT_FOUND });
    }

    const newEmployee = await EmployeeModel.create({
      date_entry,
      name,
      salary,
      user_id
    });

    res.status(201).json({ message: RESPONSE_MESSAGES.EMPLOYEE_CREATED_SUCCESSFULLY, employee: newEmployee });
  } catch (error) {
    res.status(500).json({ message: RESPONSE_MESSAGES.ERROR_CREATING_EMPLOYEE, error: error.message });
  }
}