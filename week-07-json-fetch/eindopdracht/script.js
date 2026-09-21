let allArticles = [];

const articlesContainer = document.querySelector('#articles');
const filterAlle = document.querySelector('#filter-alle');
const filterStad = document.querySelector('#filter-stad');
const filterTechnologie = document.querySelector('#filter-technologie');
const filterMedia = document.querySelector('#filter-media');

const showArticles = (articles) => {
  // Zet elk artikel om naar een <article> met map() en toon het in #articles
  // Toon de title, category en summary van elk artikel
  articlesContainer.innerHTML = articles.map((article) => {
    return `
      <article>
        <span>${article.category}</span>
        <h2>${article.title}</h2>
        <p>${article.summary}</p>
      </article>
    `;
  }).join('');
};

fetch('./news.json')
  .then(r => r.json())
  .then(articles => {
    // Sla de artikelen op in allArticles
    // Roep showArticles() aan met allArticles
    allArticles = articles;
    showArticles(allArticles);
  })
  .catch(error => console.error('Fout bij laden:', error));

// Maak een eventlistener voor de #filter-alle button
// Roep showArticles() aan met allArticles

// Maak een eventlistener voor de #filter-stad button
// Filter allArticles op category 'Stad' en roep showArticles() aan

// Maak een eventlistener voor de #filter-technologie button
// Filter allArticles op category 'Technologie' en roep showArticles() aan

// Maak een eventlistener voor de #filter-media button
// Filter allArticles op category 'Media' en roep showArticles() aan
filterAlle.addEventListener('click', () => {
  showArticles(allArticles);
});

filterStad.addEventListener('click', () => {
  const filteredArticles = allArticles.filter(
    article => article.category === 'Stad'
  );

  showArticles(filteredArticles);
});

filterTechnologie.addEventListener('click', () => {
  const filteredArticles = allArticles.filter(
    article => article.category === 'Technologie'
  );

  showArticles(filteredArticles);
});

filterMedia.addEventListener('click', () => {
  const filteredArticles = allArticles.filter(
    article => article.category === 'Media'
  );

  showArticles(filteredArticles);
});