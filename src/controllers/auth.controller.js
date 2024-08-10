import jwt from 'jsonwebtoken';
import UserModel from '../models/UserModel';
import RoleModel from '../models/RoleModel';
import config from './../config/config';
import { RESPONSE_MESSAGES }  from './../config/constants/auth.constants'

export const signUp = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const userExists = await UserModel.findOne({
      where: {
        email: email
      }
    });

    if (userExists) {
      return res.status(400).json({ message: RESPONSE_MESSAGES.USER_EXISTS });
    }

    const encryptedPassword = await UserModel.prototype.encryptPassword(password);
    
    const newUser = await UserModel.create({
      username,
      email,
      password: encryptedPassword,
      rol_id: 1
    });

    const token = jwt.sign({ id: newUser.id }, config.SECRET, {
      expiresIn: '1h'
    });

    res.status(201).json({ message: RESPONSE_MESSAGES.USER_CREATED_SUCCESSFULLY, token });

  } catch (error) {
    res.status(500).json({ message: RESPONSE_MESSAGES.ERROR_CREATING_USER, error: error.message });
  }
}

export const signIn = async (req, res) => {
  const { email, password } = req.body;

  try {
    const userFound = await UserModel.findOne({
      where: { email: email },
      include: [{
        model: RoleModel,
        as: 'role'
      }]
    });

    if (!userFound) {
      return res.status(400).json({ message: RESPONSE_MESSAGES.USER_NOT_FOUND });
    }

    const isMatch = await userFound.comparePassword(password);

    if (!isMatch) {
      return res.status(401).json({ message: RESPONSE_MESSAGES.INVALID_PASSWORD });
    }

    const token = jwt.sign({ id: userFound.id }, config.SECRET, {
      expiresIn: '1h'
    });

    res.status(200).json({ message: RESPONSE_MESSAGES.USER_SIGNED_IN_SUCCESSFULLY, token, user: userFound });
    
  } catch (error) {
    res.status(500).json({ message: RESPONSE_MESSAGES.ERROR_SIGNING_IN, error: error.message });
  }
};