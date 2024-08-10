import RequestModel from '../models/RequestModel';
import EmployeeModel from '../models/EmployeeModel';
import { RESPONSE_MESSAGES } from '../config/constants/request.constants';

export const getAllRequests = async (req, res) => {
  try {
    const requests = await RequestModel.findAll({
      include: [{ model: EmployeeModel, as: 'employee' }]
    });

    if (requests.length === 0) {
      return res.status(404).json({ message: RESPONSE_MESSAGES.NO_REQUESTS_FOUND });
    }

    res.status(200).json({ message: RESPONSE_MESSAGES.REQUESTS_FOUND, requests });
  } catch (error) {
    res.status(500).json({ message: RESPONSE_MESSAGES.ERROR_FETCHING_REQUESTS, error: error.message });
  }
}

export const createRequest = async (req, res) => {
  const { code, description, summary, employee_id } = req.body;

  try {
    const employee = await EmployeeModel.findByPk(employee_id);
    
    if (!employee) {
      return res.status(404).json({ message: RESPONSE_MESSAGES.EMPLOYEE_NOT_FOUND });
    }

    const newRequest = await RequestModel.create({
      code,
      description,
      summary,
      employee_id
    });

    res.status(201).json({ message: RESPONSE_MESSAGES.REQUEST_CREATED_SUCCESSFULLY, request: newRequest });
  } catch (error) {
    res.status(500).json({ message: RESPONSE_MESSAGES.ERROR_CREATING_REQUEST, error: error.message });
  }
}

export const deleteRequest = async (req, res) => {
  const { id } = req.params;

  try {
    const request = await RequestModel.findByPk(id);

    if (!request) {
      return res.status(404).json({ message: RESPONSE_MESSAGES.REQUEST_NOT_FOUND });
    }

    await request.destroy();

    res.status(200).json({ message: RESPONSE_MESSAGES.REQUEST_DELETED_SUCCESSFULLY });
  } catch (error) {
    res.status(500).json({ message: RESPONSE_MESSAGES.ERROR_DELETING_REQUEST, error: error.message });
  }
};