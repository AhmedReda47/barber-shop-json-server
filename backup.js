/**
 * Backup script for db.json
 * This script creates automatic backups of your database
 * 
 * Usage:
 * 1. Install: npm install node-cron
 * 2. Run: node backup.js
 * 
 * Or add to package.json:
 * "scripts": {
 *   "start": "node server.js & node backup.js"
 * }
 */

const fs = require('fs');
const path = require('path');

// Create backups directory if it doesn't exist
const backupsDir = path.join(__dirname, 'backups');
if (!fs.existsSync(backupsDir)) {
  fs.mkdirSync(backupsDir);
}

// Backup function
function createBackup() {
  try {
    const dbPath = path.join(__dirname, 'db.json');
    
    // Check if db.json exists
    if (!fs.existsSync(dbPath)) {
      console.log('⚠️ db.json not found, skipping backup');
      return;
    }

    // Read current database
    const db = fs.readFileSync(dbPath, 'utf8');
    
    // Create backup filename with timestamp
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    const backupPath = path.join(backupsDir, `db-backup-${timestamp}.json`);
    
    // Write backup
    fs.writeFileSync(backupPath, db);
    
    // Keep only last 10 backups (delete older ones)
    const backups = fs.readdirSync(backupsDir)
      .filter(file => file.startsWith('db-backup-'))
      .map(file => ({
        name: file,
        time: fs.statSync(path.join(backupsDir, file)).mtime.getTime()
      }))
      .sort((a, b) => b.time - a.time);
    
    // Delete backups older than 10
    if (backups.length > 10) {
      backups.slice(10).forEach(backup => {
        fs.unlinkSync(path.join(backupsDir, backup.name));
        console.log(`🗑️ Deleted old backup: ${backup.name}`);
      });
    }
    
    console.log(`✅ Backup created: ${path.basename(backupPath)}`);
  } catch (error) {
    console.error('❌ Backup failed:', error.message);
  }
}

// Create backup every hour (3600000 ms)
const BACKUP_INTERVAL = 3600000; // 1 hour

console.log('🔄 Backup service started');
console.log(`⏰ Backups will be created every ${BACKUP_INTERVAL / 1000 / 60} minutes`);
console.log(`📁 Backups directory: ${backupsDir}`);

// Create initial backup
createBackup();

// Schedule regular backups
setInterval(createBackup, BACKUP_INTERVAL);

// Also create backup on server shutdown
process.on('SIGTERM', () => {
  console.log('🛑 Server shutting down, creating final backup...');
  createBackup();
  process.exit(0);
});

process.on('SIGINT', () => {
  console.log('🛑 Server shutting down, creating final backup...');
  createBackup();
  process.exit(0);
});

