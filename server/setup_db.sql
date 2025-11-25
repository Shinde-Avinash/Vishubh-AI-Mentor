-- Run this SQL script in MySQL to create the database and grant permissions

CREATE DATABASE IF NOT EXISTS cg_agant;

-- Grant all privileges to the user
GRANT ALL PRIVILEGES ON cg_agant.* TO 'avi10'@'localhost';

-- If the user doesn't exist, create it
CREATE USER IF NOT EXISTS 'avi10'@'localhost' IDENTIFIED BY 'avi10';
GRANT ALL PRIVILEGES ON cg_agant.* TO 'avi10'@'localhost';

FLUSH PRIVILEGES;
