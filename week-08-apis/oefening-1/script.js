const charactersContainer = document.querySelector('#characters');

fetch('https://rickandmortyapi.com/api/character')
  .then(r => r.json())
  .then(data => {
    console.log(data); // Bekijk de structuur

    // De karakters zitten in data.results
    // Elk karakter heeft een 'name' en 'image' property
    // Toon de naam en afbeelding van elk karakter als <article> in #characters
    
    for (const character of data.results) {
      charactersContainer.innerHTML += `
        <article>
          <h2>${character.name}</h2>
          <img src="${character.image}" alt="${character.name}">
        </article>
      `;
    }
  })
  .catch(error => console.error('Fout:', error));
