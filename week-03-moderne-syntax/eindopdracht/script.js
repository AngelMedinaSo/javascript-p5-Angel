// Stap 1: Selecteer het formulier en de profielenlijst
// Stap 2: Luister naar het submit-event, lees de invoervelden uit met .value en toon een profielkaart met innerHTML +=
// Stap 3 (bonus): Voeg een verwijderknop toe aan elke kaart

const form = document.querySelector('#profile-form');
const profilesList = document.querySelector('#profiles-list');
const nameInput = document.querySelector('#name');
const roleInput = document.querySelector('#role');
const departmentInput = document.querySelector('#department');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = nameInput.value.trim();
    const role = roleInput.value.trim();
    const department = departmentInput.value.trim();

    if (name && role && department) {
        profilesList.innerHTML += `
            <article>
                <h3>${name}</h3>
                <p>${role}</p>
                <p>${department}</p>
                <button class="remove-btn" onclick="this.parentElement.remove()">Verwijderen</button>
            </article>`;

        nameInput.value = '';
        roleInput.value = '';
        departmentInput.value = '';
    }
});
