document.addEventListener('DOMContentLoaded', () => {
    const gamesContainer = document.getElementById('games');
    const modal = document.getElementById('game-modal');
    const closeButton = document.querySelector('.close-button');
    const gameImage = document.getElementById('game-image');
    const gameTitle = document.getElementById('game-title');
    const gameRating = document.getElementById('game-rating');
    const gameDeveloper = document.getElementById('game-developer');
    const gameReleaseYear = document.getElementById('game-release-year');
    const gameDescription = document.getElementById('game-description');

    const loadGames = (category) => {
        fetch(`getGames.php?category=${category}`)
            .then(response => response.json())
            .then(games => {
                gamesContainer.innerHTML = '';
                games.forEach(game => {
                    const gameElement = document.createElement('div');
                    gameElement.classList.add('game');
                    gameElement.innerHTML = `
                        <img src="${game.img}" alt="${game.title}">
                        <h3>${game.title}</h3>
                        <p>Rating: ${game.rating}</p>
                    `;
                    gameElement.addEventListener('click', () => {
                        gameImage.src = game.img;
                        gameTitle.textContent = game.title;
                        gameRating.textContent = `Rating: ${game.rating}`;
                        gameDeveloper.textContent = `Developer: ${game.developer}`;
                        gameReleaseYear.textContent = `Release Year: ${game.release_year}`;
                        gameDescription.textContent = `Description: ${game.description}`;
                        modal.style.display = 'block';
                    });
                    gamesContainer.appendChild(gameElement);
                });
            })
            .catch(error => console.error('Error fetching games:', error));
    };

    document.querySelectorAll('.category-button').forEach(button => {
        button.addEventListener('click', () => {
            const category = button.getAttribute('data-category');
            loadGames(category);
        });
    });

    closeButton.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });

    // Load the first category by default
    loadShows('games', 'comedy');
});
