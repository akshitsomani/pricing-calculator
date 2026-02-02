import { DEAL_STATES } from '../utils/constants.js';

const transitions = {
  [DEAL_STATES.REQUIREMENT_CREATED]: [DEAL_STATES.SELLER_VERIFIED, DEAL_STATES.CANCELLED],
  [DEAL_STATES.SELLER_VERIFIED]: [DEAL_STATES.SELLER_LOCKED, DEAL_STATES.CANCELLED],
  [DEAL_STATES.SELLER_LOCKED]: [DEAL_STATES.BROADCASTED, DEAL_STATES.CANCELLED],
  [DEAL_STATES.BROADCASTED]: [DEAL_STATES.BUYER_TOKEN_RECEIVED, DEAL_STATES.CANCELLED],
  [DEAL_STATES.BUYER_TOKEN_RECEIVED]: [DEAL_STATES.PICKUP_SCHEDULED, DEAL_STATES.CANCELLED],
  [DEAL_STATES.PICKUP_SCHEDULED]: [DEAL_STATES.PICKED_UP, DEAL_STATES.CANCELLED],
  [DEAL_STATES.PICKED_UP]: [DEAL_STATES.DELIVERED, DEAL_STATES.CANCELLED],
  [DEAL_STATES.DELIVERED]: [DEAL_STATES.SETTLED, DEAL_STATES.CANCELLED],
  [DEAL_STATES.SETTLED]: [DEAL_STATES.CLOSED],
  [DEAL_STATES.CLOSED]: [],
  [DEAL_STATES.CANCELLED]: []
};

export const canTransition = (fromState, toState) => {
  return transitions[fromState]?.includes(toState);
};

export const assertTransition = (fromState, toState) => {
  if (!canTransition(fromState, toState)) {
    const error = new Error(`Invalid transition from ${fromState} to ${toState}`);
    error.status = 422;
    throw error;
  }
};

export const stateMachine = {
  transitions
};
