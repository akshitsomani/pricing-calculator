import jwt from 'jsonwebtoken';
import config from '../config/index.js';
import { ROLES } from '../utils/constants.js';

export const authenticate = (req, res, next) => {
  const authHeader = req.headers.authorization || '';
  const token = authHeader.replace('Bearer ', '');

  if (!token) {
    return res.status(401).json({ message: 'Missing token' });
  }

  try {
    req.user = jwt.verify(token, config.jwtSecret);
    return next();
  } catch (error) {
    return res.status(401).json({ message: 'Invalid token' });
  }
};

export const authorize = (...allowedRoles) => (req, res, next) => {
  const { user } = req;

  if (!user || !allowedRoles.includes(user.role)) {
    return res.status(403).json({ message: 'Forbidden' });
  }

  return next();
};

export const roles = ROLES;
