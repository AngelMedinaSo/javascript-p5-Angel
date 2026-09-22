let allPokemon = [];

let favorites = JSON.parse(localStorage.getItem('favorites')) || [];

const saveFavorites = () => {
  localStorage.setItem('favorites', JSON.stringify(favorites));
};

const showItems = (items) => {
  // Zet elk item om naar een <article> met map() en toon het in #results
  // Toon de afbeelding en naam van elke Pokémon
  // Voeg een <button class="favorite-btn"> toe per kaartje
  // Gebruik includes() om te checken of de naam al in favorites staat
  // Geef de knop een andere tekst als de Pokémon al een favoriet is

  const results = document.querySelector('#results');

  results.innerHTML = items.map((pokemon) => {
    const isFavorite = favorites.includes(pokemon.name);

    return `
      <article>
        <img
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png"
          alt="${pokemon.name}"
        >

        <h2>${pokemon.name}</h2>

        <button class="favorite-btn">
          ${isFavorite ? 'Verwijder uit favorieten' : 'Voeg toe aan favorieten'}
        </button>
      </article>
    `;
  }).join('');

  // Voeg daarna een click event listener toe aan elke .favorite-btn
  // De index i vertelt je welke Pokémon bij welke knop hoort: items[i].name
  document.querySelectorAll('.favorite-btn').forEach((btn, index) => {
    btn.addEventListener('click', () => {
      const name = items[index].name;

      // Bonus: als de Pokémon al favoriet is, verwijder hem
      // Anders voeg je hem toe
      if (favorites.includes(name)) {
        favorites = favorites.filter((favorite) => favorite !== name);
      } else {
        favorites.push(name);
      }

      // Sla de nieuwe favorites-array op in localStorage
      saveFavorites();

      // Toon de lijst opnieuw zodat de knoptekst verandert
      showItems(items);
    });
  });
};

document.querySelector('#loading').textContent = 'Laden...';

fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
  .then(response => response.json())
  .then(data => {
    document.querySelector('#loading').textContent = '';

    // Sla data.results op in allPokemon, voeg het id toe via de index
    allPokemon = data.results.map((pokemon, index) => ({
      ...pokemon,
      id: index + 1
    }));

    // Roep showItems() aan met allPokemon
    showItems(allPokemon);
  })
  .catch(error => {
    document.querySelector('#loading').textContent = 'Er is iets misgegaan.';
    console.error('Fout:', error);
  });

// Maak een eventlistener voor de #show-all button
// Roep showItems() aan met allPokemon
document.querySelector('#show-all').addEventListener('click', () => {
  showItems(allPokemon);
});

// Maak een eventlistener voor de #show-favorites button
// Filter allPokemon op namen die in favorites staan (gebruik includes())
// Roep showItems() aan met het gefilterde resultaat
document.querySelector('#show-favorites').addEventListener('click', () => {
  const favoritePokemon = allPokemon.filter((pokemon) =>
    favorites.includes(pokemon.name)
  );

  showItems(favoritePokemon);
});