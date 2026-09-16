// Voeg een event listener toe aan de knop
// Maak een <li> element aan met de tekst uit het invoerveld
// Voeg een verwijderknop toe aan elk <li> element

const addButton = document.querySelector('#add');
const itemInput = document.querySelector('#input');
const itemList = document.querySelector('#list');

addButton.addEventListener('click', () => {

    const itemText = itemInput.value.trim();

    if (itemText === '') {
        return;
    }

    const li = document.createElement('li');
    li.textContent = itemText;

    const removeButton = document.createElement('button');
    removeButton.textContent = 'Verwijderen';

    removeButton.addEventListener('click', () => {
        itemList.removeChild(li);
    });

    li.appendChild(removeButton);
    itemList.appendChild(li);
});