import mysql from 'mysql2/promise';

// 创建数据库连接池
const pool = mysql.createPool({
  host: 'mysqlserver.com',
  user: 'username',
  password: 'password',
  database: 'db_name',
  waitForConnections: true,
  connectionLimit: 10000, // 连接池中保持的最大连接数
  queueLimit: 60000
});

export default pool;
