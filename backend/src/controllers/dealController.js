import { updateDealState } from '../services/dealService.js';
import { DEAL_STATES } from '../utils/constants.js';

const transition = (toState, action) => async (req, res, next) => {
  try {
    const { dealId, notes } = req.body;
    const result = await updateDealState({
      dealId,
      userId: req.user.id,
      action,
      toState,
      notes
    });

    res.status(200).json({ message: 'Deal updated', data: result });
  } catch (error) {
    next(error);
  }
};

export const requirementCreated = transition(DEAL_STATES.REQUIREMENT_CREATED, 'requirement_created');
export const verifySeller = transition(DEAL_STATES.SELLER_VERIFIED, 'verify_seller');
export const lockSeller = transition(DEAL_STATES.SELLER_LOCKED, 'lock_seller');
export const broadcastDeal = transition(DEAL_STATES.BROADCASTED, 'broadcast');
export const buyerToken = transition(DEAL_STATES.BUYER_TOKEN_RECEIVED, 'buyer_token_received');
export const schedulePickup = transition(DEAL_STATES.PICKUP_SCHEDULED, 'schedule_pickup');
export const confirmPickup = transition(DEAL_STATES.PICKED_UP, 'pickup_confirmed');
export const confirmDelivery = transition(DEAL_STATES.DELIVERED, 'delivery_confirmed');
export const settleDeal = transition(DEAL_STATES.SETTLED, 'settle');
export const cancelDeal = transition(DEAL_STATES.CANCELLED, 'cancel');
