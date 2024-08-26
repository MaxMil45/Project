CREATE TABLE games (
    id INT AUTO_INCREMENT PRIMARY KEY,
    category VARCHAR(50) NOT NULL,
    title VARCHAR(100) NOT NULL,
    img VARCHAR(255) NOT NULL,
    rating VARCHAR(10) NOT NULL,
    developer VARCHAR(100) NOT NULL,
    release_year INT NOT NULL,
    description TEXT NOT NULL
);

INSERT INTO games (category, title, img, rating, developer, release_year, description) VALUES 
('story', 'Story Game 1', 'pokemon.jpg', '85%', 'Dev Studio 1', 2020, 'An immersive story-driven game.'),
('story', 'Story Game 2', 'pokemon.jpg', '90%', 'Dev Studio 2', 2021, 'A sequel with even more depth.'),
('zombies', 'Zombie Game 1', 'pokemon.jpg', '75%', 'Zombie Corp', 2019, 'Fight against hordes of zombies.'),
('zombies', 'Zombie Game 2', 'pokemon.jpg', '80%', 'Undead Inc', 2021, 'Survive the zombie apocalypse.'),
('multiplayer', 'Multiplayer Game 1', 'pokemon.jpg', '65%', 'Online Masters', 2018, 'Competitive online multiplayer action.'),
('multiplayer', 'Multiplayer Game 2', 'pokemon.jpg', '70%', 'Battle Arena', 2019, 'Join the battle arena.'),
('multiplayer', 'Multiplayer Game 3', 'pokemon.jpg', '85%', 'Game Network', 2020, 'Play with friends in various modes.'),
('multiplayer', 'Multiplayer Game 4', 'pokemon.jpg', '90%', 'Coop Games', 2021, 'Cooperative gameplay at its finest.'),
('multiplayer', 'Multiplayer Game 5', 'pokemon.jpg', '95%', 'Esports League', 2022, 'Join the esports league.'),
('multiplayer', 'Multiplayer Game 6', 'pokemon.jpg', '60%', 'Casual Play', 2018, 'Casual multiplayer fun.'),
('multiplayer', 'Multiplayer Game 7', 'pokemon.jpg', '55%', 'Arcade Classics', 2017, 'Classic arcade multiplayer games.');

CREATE TABLE Movies (
    MovieID INT AUTO_INCREMENT PRIMARY KEY,
    Title VARCHAR(255) NOT NULL,
    category VARCHAR(50) NOT NULL,
    AgeRating VARCHAR(10) NOT NULL,
    ReviewScore DECIMAL(3, 2) NOT NULL,
    PosterURL VARCHAR(255) NOT NULL,
    Duration INT NOT NULL
);

INSERT INTO Movies (Title, category, AgeRating, ReviewScore, PosterURL, Duration)
VALUES 
('The Shawshank Redemption', 'Drama', 'R', 9.3, 'Star_Wars.jpg', 142),
('The Godfather', 'Crime', 'R', 9.2, 'Star_Wars.jpg', 175),
('The Dark Knight', 'Action', 'PG-13', 9.0, 'Star_Wars.jpg', 152),
('Pulp Fiction', 'Crime', 'R', 8.9, 'Star_Wars.jpg', 154),
('The Lord of the Rings: The Return of the King', 'Fantasy', 'PG-13', 8.9, 'Star_Wars.jpg', 201),
('Schindlers List', 'Biography', 'R', 8.9, 'Star_Wars.jpg', 195),
('Inception', 'Sci-Fi', 'PG-13', 8.8, 'Star_Wars.jpg', 148),
('Fight Club', 'Drama', 'R', 8.8, 'Star_Wars.jpg', 139),
('Forrest Gump', 'Drama', 'PG-13', 8.8, 'Star_Wars.jpg', 142),
('The Matrix', 'Sci-Fi', 'R', 8.7, 'Star_Wars.jpg', 136);


CREATE TABLE TVShows (
    ShowID INT AUTO_INCREMENT PRIMARY KEY,
    Title VARCHAR(255) NOT NULL,
    Category VARCHAR(50) NOT NULL,
    AgeRating VARCHAR(10) NOT NULL,
    ReviewScore DECIMAL(3, 2) NOT NULL,
    PosterURL VARCHAR(255) NOT NULL,
    Seasons INT NOT NULL,
    Episodes INT NOT NULL
);

INSERT INTO TVShows (Title, Category, AgeRating, ReviewScore, PosterURL, Seasons, Episodes)
VALUES 
('Breaking Bad', 'Crime', 'TV-MA', 9.5, 'simpsons.jpg', 5, 62),
('Game of Thrones', 'Fantasy', 'TV-MA', 9.3, 'simpsons.jpg', 8, 73),
('The Sopranos', 'Crime', 'TV-MA', 9.2, 'simpsons.jpg', 6, 86),
('Sherlock', 'Crime', 'TV-14', 9.1, 'simpsons.jpg', 4, 13),
('Stranger Things', 'Sci-Fi', 'TV-14', 8.9, 'simpsons.jpg', 4, 34),
('The Office', 'Comedy', 'TV-14', 8.9, 'simpsons.jpg', 9, 201),
('Friends', 'Comedy', 'TV-14', 8.9, 'simpsons.jpg', 10, 236),
('The Mandalorian', 'Action', 'TV-14', 8.8, 'simpsons.jpg', 3, 24),
('The Crown', 'Drama', 'TV-MA', 8.7, 'simpsons.jpg', 4, 40),
('Westworld', 'Sci-Fi', 'TV-MA', 8.6, 'simpsons.jpg', 4, 36);


CREATE TABLE Animes (
    ShowID INT AUTO_INCREMENT PRIMARY KEY,
    Title VARCHAR(255) NOT NULL,
    Category VARCHAR(50) NOT NULL,
    AgeRating VARCHAR(10) NOT NULL,
    ReviewScore DECIMAL(3, 2) NOT NULL,
    PosterURL VARCHAR(255) NOT NULL,
    Seasons INT NOT NULL,
    Episodes INT NOT NULL
);

INSERT INTO Animes (Title, Category, AgeRating, ReviewScore, PosterURL, Seasons, Episodes)
VALUES 
('Fullmetal Alchemist: Brotherhood', 'Adventure', 'TV-14', 9.1, 'demon.jpg', 1, 64),
('Attack on Titan', 'Action', 'TV-MA', 9.0, 'demon.jpg', 4, 88),
('Death Note', 'Thriller', 'TV-14', 9.0, 'demon.jpg', 1, 37),
('Naruto: Shippuden', 'Adventure', 'TV-14', 8.7, 'demon.jpg', 21, 500),
('One Piece', 'Adventure', 'TV-14', 8.9, 'demon.jpg', 20, 1071),
('My Hero Academia', 'Action', 'TV-14', 8.5, 'demon.jpg', 6, 138),
('Demon Slayer', 'Action', 'TV-MA', 8.7, 'demon.jpg', 3, 44),
('Steins;Gate', 'Sci-Fi', 'TV-14', 9.0, 'demon.jpg', 1, 24),
('Hunter x Hunter', 'Adventure', 'TV-14', 9.0, 'demon.jpg', 3, 148),
('Cowboy Bebop', 'Sci-Fi', 'TV-14', 8.9, 'demon.jpg', 1, 26);
