const input = document.querySelector('#input');
const saveButton = document.querySelector('#save');
const retrieveButton = document.querySelector('#retrieve');
const result = document.querySelector('#result');

// Knop "Opslaan": gebruik localStorage.setItem() om de invoer op te slaan
saveButton.addEventListener('click', () => {
  const text = input.value.trim();

  if (text === '') {
    return;
  }

  localStorage.setItem('savedText', text);

  input.value = '';
});

// Knop "Ophalen": gebruik localStorage.getItem() om de waarde op te halen
retrieveButton.addEventListener('click', () => {
  const savedText = localStorage.getItem('savedText');

  // Null-check: toon een melding als er nog niets opgeslagen is
  if (savedText === null) {
    result.textContent = 'Er is nog niets opgeslagen.';
    return;
  }

  result.textContent = savedText;
});