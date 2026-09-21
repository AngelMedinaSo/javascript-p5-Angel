const people = [
  { name: 'Lisa', age: 28, city: 'Amsterdam' },
  { name: 'Mark', age: 34, city: 'Rotterdam' },
  { name: 'Sara', age: 22, city: 'Utrecht' },
];
// 1. Toon in #origineel de originele lijst met alleen namen en steden.
//    Gebruik destructuring in je .map().
// 2. Maak met .map() en de spread operator een nieuwe array waarin
//    de stad van elke persoon is gewijzigd naar 'Den Haag'.
//    De originele people-array moet onveranderd blijven.
// 3. Toon deze nieuwe lijst in #kopie, ook met destructuring.
const origineel = document.querySelector('#origineel');
const kopie = document.querySelector('#kopie');
people.map(({ name, city }) => {
  origineel.innerHTML += `<p>${name} - ${city}</p>`;
});
const newPeople = people.map((person) => ({
  ...person,
  city: 'Den Haag'
}));
newPeople.map(({ name, city }) => {
  kopie.innerHTML += `<p>${name} - ${city}</p>`;
});