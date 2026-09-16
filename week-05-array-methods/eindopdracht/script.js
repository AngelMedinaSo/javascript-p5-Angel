const products = [
  { name: 'Laptop Pro', category: 'Electronics', price: 1299, stock: true },
  { name: 'Draadloze muis', category: 'Electronics', price: 29, stock: true },
  { name: 'USB-C hub', category: 'Electronics', price: 49, stock: false },
  { name: 'Bureaulamp', category: 'Kantoor', price: 35, stock: true },
  { name: 'Notitieboek', category: 'Kantoor', price: 8, stock: true },
  { name: 'Pennenset', category: 'Kantoor', price: 12, stock: false },
  { name: 'Koptelefoon', category: 'Audio', price: 89, stock: true },
  { name: 'Bluetooth speaker', category: 'Audio', price: 59, stock: true },
  { name: 'Webcam HD', category: 'Electronics', price: 79, stock: false },
  { name: 'Muismat XL', category: 'Kantoor', price: 19, stock: true },
  { name: 'Monitor 27"', category: 'Electronics', price: 349, stock: true },
  { name: 'Desk organizer', category: 'Kantoor', price: 24, stock: true },
];

const productsContainer = document.querySelector('#products');
const counter = document.querySelector('#counter');
const searchBar = document.querySelector('#search-bar');
const sortLow = document.querySelector('#sort-low');
const sortHigh = document.querySelector('#sort-high');

let searchTerm = '';
let sorting = '';

const showProducts = (products) => {
  // Toon elk product als een <article> in #products
  // Laat in #counter de hoeveelheid producten zien
  productsContainer.innerHTML = '';

  for (const product of products) {
    productsContainer.innerHTML += `
      <article>
        <h3>${product.name}</h3>
        <p>€${product.price}</p>
      </article>
    `;
  }

  counter.textContent = `Aantal producten: ${products.length}`;
};

showProducts(products);

const filterProducts = () => {
  // Maak een variabele 'filtered' aan door de products array te filteren op searchTerm
  // Gebruik hiervoor filter() en includes() en toLowerCase()

  // Filter hier op sorting:
  // als sorting 'low' is, sorteer van laag naar hoog op prijs
  // als sorting 'high' is, sorteer van hoog naar laag op prijs

  let filtered = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (sorting === 'low') {
    filtered.sort((a, b) => a.price - b.price);
  }

  if (sorting === 'high') {
    filtered.sort((a, b) => b.price - a.price);
  }

  showProducts(filtered);
};

// Maak een eventlistener voor de #search-bar input
// Sla de waarde op in de searchTerm variabele en roep filterProducts() aan

// Maak een eventlistener voor de #sort-low button
// Zet sorting op 'low' en roep filterProducts() aan

// Maak een eventlistener voor de #sort-high button
// Zet sorting op 'high' en roep filterProducts() aan

searchBar.addEventListener('input', () => {
  searchTerm = searchBar.value;
  filterProducts();
});

sortLow.addEventListener('click', () => {
  sorting = 'low';
  filterProducts();
});

sortHigh.addEventListener('click', () => {
  sorting = 'high';
  filterProducts();
});

filterProducts();
