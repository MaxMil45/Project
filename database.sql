-- Create the database
CREATE DATABASE user_database;

-- Connect to the database
\c user_database

-- Create the table
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(30) NOT NULL,
    email VARCHAR(50),
    password VARCHAR(255) NOT NULL,
    reg_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE Movies (
    MovieID INT AUTO_INCREMENT PRIMARY KEY,
    Title VARCHAR(255) NOT NULL,
    AgeRating VARCHAR(10),
    ReviewScore DECIMAL(3, 2),
    PosterURL VARCHAR(255),
    Duration INT
);