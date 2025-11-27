
import mysql from 'mysql2/promise';

const pool = mysql.createPool({
  host: 'localhost',
  user: 'node',
  password: '1234',
  database: 'brotarte_db',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

export default pool;


