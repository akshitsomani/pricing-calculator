import { query } from '../db/index.js';

export const createAuditLog = async ({ dealId, userId, action, oldState, newState, notes }) => {
  const sql = `
    INSERT INTO audit_logs (deal_id, user_id, action, old_state, new_state, notes)
    VALUES ($1, $2, $3, $4, $5, $6)
  `;
  const values = [dealId, userId, action, oldState, newState, notes || null];
  await query(sql, values);
};
