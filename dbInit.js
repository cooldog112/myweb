// dbInit.js
const sqlite3 = require('sqlite3').verbose();

// 데이터베이스 연결
const db = new sqlite3.Database('users.db');

// 테이블 생성 및 기본 데이터 삽입
db.serialize(() => {
    db.run(`
        CREATE TABLE IF NOT EXISTS users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            username TEXT UNIQUE NOT NULL,
            password TEXT NOT NULL
        )
    `);

    db.run(`
        INSERT OR IGNORE INTO users (username, password)
        VALUES ('testuser', 'password123'), ('admin', 'admin123')
    `);
});

db.close();
console.log('SQLite 데이터베이스 초기화 완료!');
