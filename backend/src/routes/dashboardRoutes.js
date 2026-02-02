import express from 'express';
import { authenticate, authorize, roles } from '../middleware/auth.js';

const router = express.Router();

router.get('/admin/overview', authenticate, authorize(roles.ADMIN, roles.OPERATOR), (req, res) => {
  res.json({ message: 'Admin dashboard metrics go here.' });
});

router.get('/broker/overview', authenticate, authorize(roles.BROKER), (req, res) => {
  res.json({ message: 'Broker dashboard metrics go here.' });
});

router.get('/logistics/overview', authenticate, authorize(roles.LOGISTICS), (req, res) => {
  res.json({ message: 'Logistics dashboard metrics go here.' });
});

export default router;
