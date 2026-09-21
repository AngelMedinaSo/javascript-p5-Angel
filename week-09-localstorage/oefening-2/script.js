const user = { name: 'Anna', age: 28, city: 'Amsterdam' };

const zonderJson = document.querySelector('#zonder-json');
const metJson = document.querySelector('#met-json');

// Stap 1: sla het object op zonder JSON.stringify en lees het terug — wat zie je?
localStorage.setItem('userWithoutJson', user);

const userWithoutJson = localStorage.getItem('userWithoutJson');

zonderJson.innerHTML += `
  <p>${userWithoutJson}</p>
`;

// Stap 2: sla het object op MET JSON.stringify en lees het terug met JSON.parse
localStorage.setItem('userWithJson', JSON.stringify(user));

const savedUser = localStorage.getItem('userWithJson');
const parsedUser = JSON.parse(savedUser);

// Stap 3: toon het resultaat van beide methoden op de pagina
metJson.innerHTML += `
  <p>Name: ${parsedUser.name}</p>
  <p>Age: ${parsedUser.age}</p>
  <p>City: ${parsedUser.city}</p>
`;