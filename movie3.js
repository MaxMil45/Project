document.addEventListener('DOMContentLoaded', () => {
    const moviesContainer = document.getElementById('movies');
    const modal = document.getElementById('movie-modal');
    const closeButton = document.querySelector('.close-button');
    const movieImage = document.getElementById('movie-image');
    const movieTitle = document.getElementById('movie-title');
    const movieCategory = document.getElementById('movie-category');
    const movieAgeRating = document.getElementById('movie-age-rating');
    const movieReviewScore = document.getElementById('movie-review-score');
    const movieDuration = document.getElementById('movie-duration');

    const loadMovies = (table, category) => {
        fetch(`getGames.php?table=${table}&category=${category}`)
            .then(response => response.json())
            .then(data => {
                moviesContainer.innerHTML = '';
                data.forEach(item => {
                    const movieElement = document.createElement('div');
                    movieElement.classList.add('movie');
                    movieElement.innerHTML = `
                        <img src="${item.PosterURL}" alt="${item.Title}">
                        <h3>${item.Title}</h3>
                        <p>Rating: ${item.ReviewScore}</p>
                    `;
                    movieElement.addEventListener('click', () => {
                        movieImage.src = item.PosterURL;
                        movieTitle.textContent = item.Title;
                        movieCategory.textContent = `Category: ${item.category}`;
                        movieAgeRating.textContent = `Age Rating: ${item.AgeRating}`;
                        movieReviewScore.textContent = `Review Score: ${item.ReviewScore}`;
                        movieDuration.textContent = `Duration: ${item.Duration} mins`;
                        modal.style.display = 'block';
                    });
                    moviesContainer.appendChild(movieElement);
                });
            })
            .catch(error => console.error('Error fetching data:', error));
    };

    document.querySelectorAll('.category-button').forEach(button => {
        button.addEventListener('click', () => {
            const table = button.getAttribute('data-table');
            const category = button.getAttribute('data-category');
            loadMovies(table, category);
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
    loadMovies('movies', 'drama');
});
