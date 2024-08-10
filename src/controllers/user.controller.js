import UserModel from '../models/UserModel';
import { RESPONSE_MESSAGES } from './../config/constants/user.constants';

export const getAllUsers = async (req, res) => {
  try {
    const users = await UserModel.findAll();

    if (users.length === 0) {
      return res.status(404).json({ message: RESPONSE_MESSAGES.NO_USERS_FOUND });
    }

    res.status(200).json({ message: RESPONSE_MESSAGES.USERS_FOUND, users });
  } catch (error) {
    res.status(500).json({ message: RESPONSE_MESSAGES.FETCH_USERS, error: error.message });
  }
};