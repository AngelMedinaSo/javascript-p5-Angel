// Selecteer alle vakken met querySelectorAll als houvast
// Loop met een for of loop door elk vak en voeg aan elk vak een click-event toe dat de klasse 'active' wisselt

const boxes = document.querySelectorAll('.box');

for (const box of boxes) {
    box.addEventListener('click', () => {
        box.classList.toggle('active');
    });
};