// src/lib/db-search.js
import { Pool } from 'pg';

const connectionString = process.env.DATABASE_URI || 'postgresql://postgres:postgres@localhost:5432/postgres';

const pool = new Pool({
  connectionString: connectionString,
  ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false,
});

// Функция для выполнения запроса
export async function query(text, params) {
  const client = await pool.connect();
  try {
    console.log('📊 Executing query:', text.substring(0, 100) + '...');
    console.log('📊 Query params:', params);
    
    const start = Date.now();
    const res = await client.query(text, params);
    const duration = Date.now() - start;
    
    console.log(`✅ Query executed in ${duration}ms, rows: ${res.rows.length}`);
    return res.rows;
  } catch (error) {
    console.error('❌ Database query error:', error);
    throw error;
  } finally {
    client.release();
  }
}

// Тестовая функция для проверки подключения
export async function testConnection() {
  try {
    const result = await query('SELECT NOW() as current_time');
    console.log('✅ Database connection test:', result[0].current_time);
    return true;
  } catch (error) {
    console.error('❌ Database connection failed:', error);
    return false;
  }
}