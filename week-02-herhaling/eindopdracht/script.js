// Stap 1: Schrijf calculateTotal(bedrag, korting)
// Stap 2: Luister naar het submit-event, lees de invoervelden uit met .value en toon het resultaat
// Stap 3: Toon een foutmelding in #result als het bedrag of de korting leeg is
// Bonus: Schrijf getKlantniveau(bedrag) en toon het niveau erbij

const priceInput = document.getElementById("amount");
const discountInput = document.getElementById("discount");
const form = document.getElementById("discount-form");
const result = document.getElementById("result");

function calculateTotal(bedrag, korting) {
    return bedrag - (bedrag * korting / 100);
}

form.addEventListener("submit", function(event) {
    event.preventDefault();

    if (priceInput.value === "" || discountInput.value === "") {
        result.textContent = "Vul alle velden in.";
        result.style.color = "red";
        return;
    }

    const bedrag = Number(priceInput.value);
    const korting = Number(discountInput.value);

    result.style.color = "black";
    result.textContent = `€${calculateTotal(bedrag, korting).toFixed(2)}`;
});