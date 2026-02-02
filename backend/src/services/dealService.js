import { query } from '../db/index.js';
import { assertTransition } from './stateMachine.js';
import { createAuditLog } from './auditService.js';

export const updateDealState = async ({ dealId, userId, action, toState, notes }) => {
  const { rows } = await query('SELECT current_state FROM deals WHERE id = $1', [dealId]);
  const currentState = rows[0]?.current_state;

  if (!currentState) {
    const error = new Error('Deal not found');
    error.status = 404;
    throw error;
  }

  assertTransition(currentState, toState);

  await query('UPDATE deals SET current_state = $1, updated_at = NOW() WHERE id = $2', [
    toState,
    dealId
  ]);

  await createAuditLog({
    dealId,
    userId,
    action,
    oldState: currentState,
    newState: toState,
    notes
  });

  return { dealId, previousState: currentState, currentState: toState };
};
