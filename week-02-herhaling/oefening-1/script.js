// ============================================================
//  Week 2 — Oefening 1: Functies herhalen
//  Schrijf de vier functies af. Het aanroepen en tonen
//  in de DOM staat er al.
// ============================================================

// 1. Schrijf een functie die twee getallen optelt en het resultaat teruggeeft
function optellen(a, b) {
  return a + b;
}

// 2. Schrijf een functie die true teruggeeft als het getal even is, anders false
function isEven(getal) {
  return getal % 2 === 0;
}

// 3. Schrijf een functie die een begroeting teruggeeft: 'Hallo, <naam>!'
function groet(naam) {
  return naam.toUpperCase();
}

// 4. Schrijf een functie die celsius omrekent naar fahrenheit
//    formule: celsius * 9 / 5 + 32
function celsiusNaarFahrenheit(celsius) {
  return celsius * 9 / 5 + 32;
}

// Dit hoef je niet aan te passen — dit toont je resultaten in de DOM:
document.getElementById('result-optellen').textContent =
  '3 + 5 = ' + optellen(3, 5);

document.getElementById('result-even').textContent =
  'Is 8 even? ' + isEven(8);

document.getElementById('result-groet').textContent = groet('Sanne');

document.getElementById('result-temp').textContent =
  '20°C is ' + celsiusNaarFahrenheit(20) + '°F';
