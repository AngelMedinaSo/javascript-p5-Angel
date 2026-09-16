// Voeg een event listener toe aan elke knop
// Knop 1: voeg tekst toe aan #message
// Knop 2: voeg een <li> toe aan #list met een tekst
// Knop 3: wissel de klasse 'active' op #message

const button1 = document.querySelector('#btn-1');
const button2 = document.querySelector('#btn-2');
const button3 = document.querySelector('#btn-3');
const message = document.querySelector('#message');
const list = document.querySelector('#list');

button1.addEventListener('click', () => {
    message.textContent = 'Knop 1 geklikt';
});

button2.addEventListener('click', () => {
    const newItem = document.createElement('li');
    newItem.textContent = 'Nieuw item';
    list.appendChild(newItem);
});

button3.addEventListener('click', () => {
    message.classList.toggle('active');
});