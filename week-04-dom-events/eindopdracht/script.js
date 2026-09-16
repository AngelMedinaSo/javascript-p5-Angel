// Selecteer het formulier, invoerveld, takenlijst en teller
// taakToevoegen() — maak een <li> aan met een checkbox en verwijderknop
// toonTaken() — werk de teller bij
// Voeg listeners toe aan het formulier en de taken

const form = document.querySelector('#task-form');
const taskInput = document.querySelector('#task-input');
const taskList = document.querySelector('#tasks');
const taskCount = document.querySelector('#counter');

const taskToevoegen = (task) => {
    const li = document.createElement('li');

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';

    const taskText = document.createElement('span');
    taskText.textContent = task;
    
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Verwijder';

    li.appendChild(checkbox);
    li.appendChild(taskText);
    li.appendChild(deleteBtn);
    taskList.appendChild(li);

    deleteBtn.addEventListener('click', () => {
        li.remove();
        toonTaken();
    });
};

const toonTaken = () => {
    const tasks = taskList.querySelectorAll('li');
    taskCount.textContent = `Aantal taken: ${tasks.length}`;
};

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const task = taskInput.value.trim();

  if (task === '') {
    return;
  }

  taskToevoegen(task);
  toonTaken();

  taskInput.value = '';
});

toonTaken();