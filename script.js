document.addEventListener('DOMContentLoaded', () => {
    fetchCharacters();
});

function fetchCharacters() {
    fetch("https://rickandmortyapi.com/api/character?page=19")
        .then(response => response.json())
        .then(data => {
            const characters = data.results;
            displayCharacters(characters);
        })
        .catch(error => {
            console.error("Error fetching characters:", error);
        });
}

function displayCharacters(characters) {
    const container = document.getElementById('character-container');
    container.innerHTML = '';

    characters.forEach(character => {
        const card = document.createElement('div');
        card.className = 'card';
        
        const image = document.createElement('img');
        image.src = character.image;
        image.alt = character.name;

        const name = document.createElement('h2');
        name.textContent = character.name;

        const status = document.createElement('p');
        status.textContent = `Status: ${character.status}`;

        const species = document.createElement('p');
        species.textContent = `Species: ${character.species} ${character.type ? `, Type: ${character.type}` : ''}`;

        const origin = document.createElement('p');
        origin.textContent = `Origin: ${character.origin.name}`;//

        const location = document.createElement('p');
        location.textContent = `Location: ${character.location.name}`;//local junto com 

        card.appendChild(image);//foto do personagen
        card.appendChild(name);//nome
        card.appendChild(status);//ele tá vivo, morto ou desconhecido
        card.appendChild(species);//especie
        card.appendChild(origin);//origem
        card.appendChild(location);//local

        container.appendChild(card);
    });
}
