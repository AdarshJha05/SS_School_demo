import Database from 'better-sqlite3';
import path from 'path';

const dbPath = path.resolve(process.cwd(), 'school-enquiries.db');

let db: Database.Database;

try {
  db = new Database(dbPath);
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
  // @ts-expect-error
  db = null;
}

export { db };
