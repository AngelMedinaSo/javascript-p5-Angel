// Fout gevonden: _______________
// Oplossing: _______________

fetch('./users')
  .then(r => r.json())
  .then(users => {
    const list = document.querySelector('#result');
    users.forEach(user => {
      const li = document.createElement('li');
      li.textContent = user.name;
      list.appendChild(list);
    });
  })
  .catch(error => console.error('Fout:', error));
