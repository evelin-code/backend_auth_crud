import jwt from 'jsonwebtoken';
import config from './../config/config';
import UserModel from '../models/UserModel';
import { RESPONSE_MESSAGES } from './../config/auth.jwt.constants';

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

    req.user = user;
    next();
  } catch (error) {
    return res.status(401).json({ message: RESPONSE_MESSAGES.INVALID_OR_EXPIRED_TOKEN });
  }
}