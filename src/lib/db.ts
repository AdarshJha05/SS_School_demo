import Database from 'better-sqlite3';
import path from 'path';

// Define the absolute path for the SQLite DB file.
const dbPath = path.resolve(process.cwd(), 'school-enquiries.db');

let db: Database.Database;

try {
  db = new Database(dbPath);
  
  // Initialize the database with tables if they don't exist
  db.exec(`
    CREATE TABLE IF NOT EXISTS enquiries (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      parentName TEXT NOT NULL,
      studentName TEXT NOT NULL,
      phone TEXT NOT NULL,
      email TEXT,
      grade TEXT NOT NULL,
      message TEXT,
      createdAt DATETIME DEFAULT CURRENT_TIMESTAMP
    );
  `);
} catch (error) {
  console.error('Failed to initialize SQLite database:', error);
  // @ts-ignore
  db = null;
}

export { db };
