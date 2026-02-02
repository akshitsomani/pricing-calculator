import pg from 'pg';
import config from '../config/index.js';

const { Pool } = pg;

const pool = new Pool({
  connectionString: config.databaseUrl
});

export const query = (text, params) => pool.query(text, params);

export default pool;
