document.addEventListener('DOMContentLoaded', () => {
    const showsContainer = document.getElementById('shows');
    const categories = {
        action: [
            { title: 'Story Game 1', img: 'pokemon.jpg' },
            { title: 'Story Game 2', img: 'pokemon.jpg' }
        ],
        comedy: [
            { title: 'Zombie Game 1', img: 'pokemon.jpg' },
            { title: 'Zombie Game 2', img: 'pokemon.jpg' }
        ],
        drama: [
            { title: 'Multiplayer Game 1', img: 'pokemon.jpg', rating: '50%'},
            { title: 'Multiplayer Game 2', img: 'pokemon.jpg' },
            { title: 'Multiplayer Game 3', img: 'pokemon.jpg' },
            { title: 'Multiplayer Game 4', img: 'pokemon.jpg' },
            { title: 'Multiplayer Game 5', img: 'pokemon.jpg' },
            { title: 'Multiplayer Game 6', img: 'pokemon.jpg' },
            { title: 'Multiplayer Game 7', img: 'pokemon.jpg' }
        ]
    };

    const loadShows = (category) => {
        showsContainer.innerHTML = '';
        categories[category].forEach(show => {
            const showElement = document.createElement('div');
            showElement.classList.add('show');
            showElement.innerHTML = `
                <img src="${show.img}" alt="${show.title}">
                <h3>${show.title}</h3>
                <p>${show.rating}</p>
            `;
            showsContainer.appendChild(showElement);
        });
    };

    document.querySelectorAll('.category-button').forEach(button => {
        button.addEventListener('click', () => {
            const category = button.getAttribute('data-category');
            loadShows(category);
        });
    });

    // Load the first category by default
    loadShows('action');
});
