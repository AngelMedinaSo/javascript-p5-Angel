// Vul eerst movies.json met minimaal 4 films:
// [{"title":"","director":"","year":0,"genre":""}]

// Schrijf daarna de fetch zelf (zelfde patroon als oefening 1)
const filmsContainer = document.querySelector('#films');

fetch('./movies.json')
  .then(response => response.json())
  .then(movies => {
    for (const movie of movies) {
      filmsContainer.innerHTML += `
        <article>
          <h2>${movie.title}</h2>
          <p>Director: ${movie.director}</p>
          <p>Year: ${movie.year}</p>
          <p>Genre: ${movie.genre}</p>
        </article>
      `;
    }
  })
  .catch(error => console.error('Fout:', error));