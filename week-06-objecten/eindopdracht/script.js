const users = [
  { name: 'Jan de Vries',  email: 'jan@bedrijf.nl',  role: 'admin', active: true  },
  { name: 'Lisa Bakker',   email: 'lisa@bedrijf.nl', role: 'user',  active: true  },
  { name: 'Tom Visser',    email: 'tom@bedrijf.nl',  role: 'user',  active: false },
  { name: 'Sara Meijer',   email: 'sara@bedrijf.nl', role: 'admin', active: true  },
];

let filter = 'all';

const showUsers = (users) => {
  // Gebruik destructuring voor elke user: const { name, email, role, active } = user
  // Toon elke user als een <article> in #users
};

const filterUsers = () => {
  // Als filter 'admin' is, toon alleen gebruikers met role === 'admin'
  // Anders toon je alle gebruikers
  // Roep showUsers() aan met de gefilterde lijst
};

// Maak een eventlistener voor de #filter-admin button
// Zet filter op 'admin' en roep filterUsers() aan

// Maak een eventlistener voor de #filter-all button
// Zet filter op 'all' en roep filterUsers() aan

// Maak een eventlistener voor het #user-form submit event
// Lees naam, email en role uit de invoervelden
// Maak een nieuw user object aan met spread op een default object
// Voeg toe aan de array en roep filterUsers() aan

filterUsers();
