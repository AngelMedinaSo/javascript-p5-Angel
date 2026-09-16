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

let searchTerm = '';
let sorting = '';

const showProducts = (products) => {
  // Toon elk product als een <article> in #products
  // Laat in #counter de hoeveelheid producten zien
};

const filterProducts = () => {
  // Maak een variabele 'filtered' aan door de products array te filteren op searchTerm
  // Gebruik hiervoor filter() en includes() en toLowerCase()

  // Filter hier op sorting:
  // als sorting 'low' is, sorteer van laag naar hoog op prijs
  // als sorting 'high' is, sorteer van hoog naar laag op prijs

  showProducts(filtered);
};

// Maak een eventlistener voor de #search-bar input
// Sla de waarde op in de searchTerm variabele en roep filterProducts() aan

// Maak een eventlistener voor de #sort-low button
// Zet sorting op 'low' en roep filterProducts() aan

// Maak een eventlistener voor de #sort-high button
// Zet sorting op 'high' en roep filterProducts() aan

filterProducts();
