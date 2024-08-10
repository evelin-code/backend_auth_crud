import jwt from 'jsonwebtoken';
import config from './../config/config';
import UserModel from '../models/UserModel';
import { RESPONSE_MESSAGES } from './../config/constants/authJwt.constants';

export const verifyToken = async (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.startsWith('Bearer ') ? authHeader.split(' ')[1] : null;

  if (!token) {
    return res.status(403).json({ message: RESPONSE_MESSAGES.NO_TOKEN_PROVIDED });
  }

  try {
    const decoded = jwt.verify(token, config.SECRET);

    const user = await UserModel.findByPk(decoded.id); 
    
    if (!user) {
      return res.status(404).json({ message: RESPONSE_MESSAGES.NO_USER_FOUND });
    }

    req.userId = user;
    req.userRole = user.rol_id;
    next();
  } catch (error) {
    return res.status(401).json({ message: RESPONSE_MESSAGES.INVALID_OR_EXPIRED_TOKEN });
  }
}

export const isEmployee = async (req, res, next) => {
  if (req.userRole === 1) { // Empleado 1
    next();
  } else {
    return res.status(403).json({ message: RESPONSE_MESSAGES.NOT_AUTHORIZED });
  }
}

export const isAdmin = async (req, res, next) => {
  if (req.userRole === 2) { // Administrador 2
    next();
  } else {
    return res.status(403).json({ message: RESPONSE_MESSAGES.NOT_AUTHORIZED });
  }
}