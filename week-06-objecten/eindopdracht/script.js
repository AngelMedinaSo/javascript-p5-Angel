const users = [
  { name: 'Jan de Vries', email: 'jan@bedrijf.nl', role: 'admin', active: true },
  { name: 'Lisa Bakker', email: 'lisa@bedrijf.nl', role: 'user', active: true },
  { name: 'Tom Visser', email: 'tom@bedrijf.nl', role: 'user', active: false },
  { name: 'Sara Meijer', email: 'sara@bedrijf.nl', role: 'admin', active: true },
];

let filter = 'all';

const usersContainer = document.querySelector('#users');
const filterAdmin = document.querySelector('#filter-admin');
const filterAll = document.querySelector('#filter-all');

const form = document.querySelector('#user-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const roleInput = document.querySelector('#role');

const showUsers = (users) => {
  usersContainer.innerHTML = '';

  for (const user of users) {
    const { name, email, role, active } = user;

    usersContainer.innerHTML += `
      <article>
        <h3>${name}</h3>
        <p>${email}</p>
        <p>Rol: ${role}</p>
        <p>Actief: ${active}</p>
      </article>
    `;
  }
};

const filterUsers = () => {
  let filteredUsers = users;

  if (filter === 'admin') {
    filteredUsers = users.filter((user) => user.role === 'admin');
  }

  showUsers(filteredUsers);
};

filterAdmin.addEventListener('click', () => {
  filter = 'admin';
  filterUsers();
});

filterAll.addEventListener('click', () => {
  filter = 'all';
  filterUsers();
});

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const name = nameInput.value.trim();
  const email = emailInput.value.trim();
  const role = roleInput.value;

  if (name === '' || email === '') {
    return;
  }

  const defaultUser = {
    active: true,
  };

  const newUser = {
    ...defaultUser,
    name,
    email,
    role,
  };

  users.push(newUser);

  filterUsers();

  nameInput.value = '';
  emailInput.value = '';
  roleInput.value = 'user';
});

filterUsers();