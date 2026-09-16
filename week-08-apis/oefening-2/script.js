let allPokemon = [];

// De API geeft een object terug met een 'results' array
// Elk item heeft een 'name' property
// Gebruik console.log(data) om de structuur te bekijken

// De afbeelding van een Pokémon staat op:
// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/{id}.png
// Sla het id op via de index bij het laden: { ...pokemon, id: index + 1 }

fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
  .then(response => response.json())
  .then(data => {
    console.log(data); // Bekijk de structuur

    // Sla data.results op in allPokemon, voeg het id toe via de index
    // Toon alle Pokémon in #pokemon-list met naam en afbeelding
    // Toon het aantal in #counter
  })
  .catch(error => console.error('Fout:', error));

// Voeg een event listener toe aan #search-bar
// Filter allPokemon op naam en herrender de lijst
