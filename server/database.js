/**
 * https://node-postgres.com/guides/project-structure
 */

const { Pool } = require('pg');

const connectionString =
  process.env.DATABASE_URL || 'postgresql://localhost:5432/cyf';

const pool = new Pool({ connectionString });

module.exports = {
  query: (text, params, callback) => {
    return pool.query(text, params, (err, res) => {
      console.log(err);
      callback(err, res);
    });
  },
};
