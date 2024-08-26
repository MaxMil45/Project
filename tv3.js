document.addEventListener('DOMContentLoaded', () => {
    const showsContainer = document.getElementById('shows');
    const modal = document.getElementById('show-modal');
    const closeButton = document.querySelector('.close-button');
    const showImage = document.getElementById('show-image');
    const showTitle = document.getElementById('show-title');
    const showCategory = document.getElementById('show-category');
    const showAgeRating = document.getElementById('show-age-rating');
    const showReviewScore = document.getElementById('show-review-score');
    const showSeasons = document.getElementById('show-seasons');
    const showEpisodes = document.getElementById('show-episodes');

    const loadShows = (table, category) => {
        fetch(`getGames.php?table=${table}&category=${category}`) // Ensure this matches your PHP file name
            .then(response => response.json())
            .then(data => {
                showsContainer.innerHTML = '';
                data.forEach(item => {
                    const showElement = document.createElement('div');
                    showElement.classList.add('show');
                    showElement.innerHTML = `
                        <img src="${item.PosterURL}" alt="${item.Title}">
                        <h3>${item.Title}</h3>
                        <p>Rating: ${item.ReviewScore}</p>
                    `;
                    showElement.addEventListener('click', () => {
                        showImage.src = item.PosterURL;
                        showTitle.textContent = item.Title;
                        showAgeRating.textContent = `Age Rating: ${item.AgeRating}`;
                        showReviewScore.textContent = `Review Score: ${item.ReviewScore}`;
                        showSeasons.textContent = `Seasons: ${item.Seasons}`;
                        showEpisodes.textContent = `Episodes: ${item.Episodes}`;
                        showCategory.textContent = `Category: ${item.Category}`;
                        modal.style.display = 'block';
                    });
                    showsContainer.appendChild(showElement);
                });
            })
            .catch(error => console.error('Error fetching data:', error));
    };

    document.querySelectorAll('.category-button').forEach(button => {
        button.addEventListener('click', () => {
            const table = button.getAttribute('data-table');
            const category = button.getAttribute('data-category');
            loadShows(table, category);
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
    loadShows('tvshows', 'comedy');
});
