fetch('./books.json')
  .then(response => response.json())
  .then(books => {
    // Toon elk boek als een <li> in #books-list
  })
  .catch(error => console.error('Fout:', error));
