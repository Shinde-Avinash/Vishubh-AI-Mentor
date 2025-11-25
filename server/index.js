const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const sequelize = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const chatRoutes = require('./routes/chatRoutes');

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/chat', chatRoutes);

const PORT = process.env.PORT || 5000;

// First, create database if it doesn't exist
const mysql = require('mysql2/promise');

async function initializeDatabase() {
    try {
        const connection = await mysql.createConnection({
            host: process.env.DB_HOST,
            user: process.env.DB_USER,
            password: process.env.DB_PASS
        });

        await connection.query(`CREATE DATABASE IF NOT EXISTS \`${process.env.DB_NAME}\`;`);
        console.log(`Database ${process.env.DB_NAME} ensured.`);
        await connection.end();
    } catch (error) {
        console.log('Note: Could not auto-create database. Please create it manually or check permissions.');
        console.log('Error:', error.message);
    }
}

initializeDatabase().then(() => {
    sequelize.sync()
        .then(() => {
            console.log('Database connected and tables synced');
            app.listen(PORT, () => {
                console.log(`Server running on port ${PORT}`);
            });
        })
        .catch(err => {
            console.error('Database connection error:', err.message);
            console.log('\nPlease ensure:');
            console.log('1. MySQL is running');
            console.log('2. Database "cg_agant" exists');
            console.log('3. User "avi10" has permissions on database "cg_agant"');
            console.log('\nYou can run: mysql -u root -p < setup_db.sql');
        });
});
