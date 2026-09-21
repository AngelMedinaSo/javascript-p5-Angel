const booksList = document.querySelector('#books-list');

fetch('./books.json')
  .then(response => response.json())
  .then(books => {
    // Toon elk boek als een <li> in #books-list
    for (const book of books) {
      booksList.innerHTML += `
        <li>${book.title} - ${book.author} (${book.year})</li>
      `;
    }
  })
  .catch(error => console.error('Fout:', error));
