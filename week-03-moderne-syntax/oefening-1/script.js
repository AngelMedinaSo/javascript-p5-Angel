// ============================================================
//  Week 3 — Oefening 1: Herschrijf naar moderne syntax
//  Elke functie gebruik je meteen — je ziet het resultaat
//  in de browser.
// ============================================================

// ------------------------------------------------------------
//  1. Arrow function
//  Herschrijf naar een arrow function
// ------------------------------------------------------------

const calculateArea = (breedte, hoogte) => breedte * hoogte;

// Toon het resultaat in de DOM — dit hoef je niet aan te passen:
document.querySelector("#result-area").textContent =
  `Oppervlak: ${calculateArea(5, 3)}`;

// ------------------------------------------------------------
//  2. Template literal & arrow function
//  Herschrijf naar een arrow function + template literal
// ------------------------------------------------------------

const makeSentence = (naam, stad) =>
  `Hallo, ik ben ${naam} en ik woon in ${stad}`;

// Toon het resultaat in de DOM — dit hoef je niet aan te passen:
document.querySelector("#result-sentence").textContent = makeSentence(
  "Jan",
  "Rotterdam",
);

// ------------------------------------------------------------
//  3. For/of loop & arrow function
//  Herschrijf de functie naar een arrow function
//  en de for-loop naar een for...of loop
// ------------------------------------------------------------

const brands = ["Nike", "Adidas", "Dior", "New Balance"];

const showBrands = (brands) => {
  for (const brand of brands) {
    console.log(brand);
  }
};

// Toon de merken als <li> elementen in de lijst:
// Dit hoef je niet aan te passen — maar showBrands moet
// wel werken voor je dit kunt testen
showBrands(brands);

// Extra: toon ook in de DOM
const brandsList = document.querySelector("#brands-list");
for (const brand of brands) {
  brandsList.innerHTML += `<li>${brand}</li>`;
}

// ------------------------------------------------------------
//  4. querySelector & addEventListener
//  Vervang ALLE getElementById in dit bestand door querySelector
//  Voeg daarna een event listener toe aan de knop:
//  bij klik op de knop verandert de tekst van de <h1>
// ------------------------------------------------------------

// Stap A: vervang getElementById door querySelector
const button = document.querySelector("#my-button");
const title = document.querySelector("#page-title");

// Stap B: voeg een event listener toe aan de knop
// Bij klik verandert de tekst van de h1 naar iets anders
// Gebruik een arrow function en een template literal
button.addEventListener("click", () => {
  title.textContent = `De knop is geklikt!`;
});
