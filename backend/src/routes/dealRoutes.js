import express from 'express';
import {
  requirementCreated,
  verifySeller,
  lockSeller,
  broadcastDeal,
  buyerToken,
  schedulePickup,
  confirmPickup,
  confirmDelivery,
  settleDeal,
  cancelDeal
} from '../controllers/dealController.js';
import { authenticate, authorize, roles } from '../middleware/auth.js';
import { validate } from '../middleware/validate.js';
import { dealActionSchema } from '../schemas/dealSchemas.js';

const router = express.Router();

router.post('/requirement', authenticate, authorize(roles.ADMIN, roles.OPERATOR), validate(dealActionSchema), requirementCreated);
router.post('/verify-seller', authenticate, authorize(roles.ADMIN, roles.OPERATOR), validate(dealActionSchema), verifySeller);
router.post('/lock-seller', authenticate, authorize(roles.ADMIN, roles.OPERATOR), validate(dealActionSchema), lockSeller);
router.post('/broadcast', authenticate, authorize(roles.ADMIN, roles.OPERATOR), validate(dealActionSchema), broadcastDeal);
router.post('/buyer-token', authenticate, authorize(roles.ADMIN, roles.BROKER), validate(dealActionSchema), buyerToken);
router.post('/schedule-pickup', authenticate, authorize(roles.ADMIN, roles.LOGISTICS, roles.OPERATOR), validate(dealActionSchema), schedulePickup);
router.post('/pickup-confirm', authenticate, authorize(roles.ADMIN, roles.LOGISTICS), validate(dealActionSchema), confirmPickup);
router.post('/delivery-confirm', authenticate, authorize(roles.ADMIN, roles.LOGISTICS), validate(dealActionSchema), confirmDelivery);
router.post('/settle', authenticate, authorize(roles.ADMIN, roles.OPERATOR), validate(dealActionSchema), settleDeal);
router.post('/cancel', authenticate, authorize(roles.ADMIN, roles.OPERATOR), validate(dealActionSchema), cancelDeal);

export default router;
