const names = ['Anna', 'Bob', 'Charlotte', 'David', 'Emma', 'Frank', 'Grace', 'Henk', 'Isabel', 'Jan', 'Karen', 'Lars'];

// Sectie 1: zoek de eerste naam die begint met de ingevoerde letter
//           gebruik find() + startsWith() + toLowerCase(). 
//           Zorg dat de input leeg is nadat de zoekopdracht is voltooid 
// Sectie 2: controleer of een ingevoerde naam in de lijst staat (uitkomst is true of false)
//           gebruik includes() + toLowerCase()
//           Zorg dat de input leeg is nadat de zoekopdracht is voltooid 

const byLetter = document.querySelector('#search-find');
const outputByLetter = document.querySelector('#output-find');

const searchIncludes = document.querySelector('#search-includes');
const outputIncludes = document.querySelector('#output-includes');

byLetter.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        const inputValue = byLetter.value.trim().toLowerCase();

        if (inputValue === '') {
            return;
        }

        const foundName = names.find((name) =>
            name.toLowerCase().startsWith(inputValue)
        );

        outputByLetter.textContent = foundName
            ? `Gevonden naam: ${foundName}`
            : 'Geen naam gevonden';

        byLetter.value = '';
    }
});

searchIncludes.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        const inputValue = searchIncludes.value.trim().toLowerCase();

        if (inputValue === '') {
            return;
        }

        const lowerNames = names.map((name) => name.toLowerCase());

        const nameExists = lowerNames.includes(inputValue);

        outputIncludes.textContent = nameExists;

        searchIncludes.value = '';
    }
});
