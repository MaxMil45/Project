document.addEventListener('DOMContentLoaded', () => {
    const animesContainer = document.getElementById('animes');
    const modal = document.getElementById('anime-modal');
    const closeButton = document.querySelector('.close-button');
    const animeImage = document.getElementById('anime-image');
    const animeTitle = document.getElementById('anime-title');
    const animeCategory = document.getElementById('anime-category');
    const animeAgeRating = document.getElementById('anime-age-rating');
    const animeReviewScore = document.getElementById('anime-review-score');
    const animeSeasons = document.getElementById('anime-seasons');
    const animeEpisodes = document.getElementById('anime-episodes');
    
    // Search functionality
    const searchInput = document.getElementById('search-input');
    const searchButton = document.getElementById('search-button');

    // Function to fetch and display animes by category
    const loadAnimes = async (table, category) => {
        try {
            const response = await fetch(`getGames.php?table=${table}&category=${category}`);
            if (!response.ok) throw new Error('Network response was not ok');
            const data = await response.json();

            // Clear the container before loading new data
            animesContainer.innerHTML = '';

            data.forEach(item => {
                const animeElement = document.createElement('div');
                animeElement.classList.add('anime');
                animeElement.innerHTML = `
                    <img src="${item.PosterURL}" alt="${item.Title}">
                    <h3>${item.Title}</h3>
                    <p>Rating: ${item.ReviewScore}</p>
                `;

                animeElement.addEventListener('click', () => {
                    animeImage.src = item.PosterURL;
                    animeTitle.textContent = item.Title;
                    animeAgeRating.textContent = `Age Rating: ${item.AgeRating}`;
                    animeReviewScore.textContent = `Review Score: ${item.ReviewScore}`;
                    animeSeasons.textContent = `Seasons: ${item.Seasons}`;
                    animeEpisodes.textContent = `Episodes: ${item.Episodes}`;
                    animeCategory.textContent = `Category: ${item.Category}`;
                    modal.style.display = 'block';
                });

                animesContainer.appendChild(animeElement);
            });
        } catch (error) {
            console.error('Error fetching data:', error);
            animesContainer.innerHTML = '<p>Failed to load animes. Please try again later.</p>';
        }
    };

    // Event listener for search
    searchButton.addEventListener('click', () => {
        const query = searchInput.value.toLowerCase();
        const animeElements = document.querySelectorAll('.anime');

        animeElements.forEach(anime => {
            const title = anime.querySelector('h3').textContent.toLowerCase();
            if (title.includes(query)) {
                anime.style.display = 'block';
            } else {
                anime.style.display = 'none';
            }
        });
    });

    // Event listeners for category buttons
    document.querySelectorAll('.category-button').forEach(button => {
        button.addEventListener('click', () => {
            const table = button.getAttribute('data-table');
            const category = button.getAttribute('data-category');
            loadAnimes(table, category);
        });
    });

    // Close modal on close button click
    closeButton.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    // Close modal on outside click
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });

    // Load the first category by default
    loadAnimes('animes', 'adventure');
});
