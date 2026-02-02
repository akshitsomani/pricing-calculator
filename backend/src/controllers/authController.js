import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import config from '../config/index.js';
import { query } from '../db/index.js';

export const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const { rows } = await query('SELECT id, email, password_hash, role FROM users WHERE email = $1', [
      email
    ]);
    const user = rows[0];

    if (!user) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const valid = await bcrypt.compare(password, user.password_hash);

    if (!valid) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const token = jwt.sign({ id: user.id, role: user.role }, config.jwtSecret, {
      expiresIn: config.jwtExpiresIn
    });

    return res.status(200).json({ token });
  } catch (error) {
    return next(error);
  }
};
