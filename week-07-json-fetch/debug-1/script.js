// Fout gevonden: _______________
// Oplossing: _______________

fetch('./new.json')
  .then(r => r.json())
  .then(messages => {
    const list = document.querySelector('#results');
    messages.forEach(message => {
      const li = document.createElement('li');
      li.textContent = message.title;
      list.appendChild(li);
    });
  })
  .catch(error => console.error('Fout:', error));
