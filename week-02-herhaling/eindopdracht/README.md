# Eindopdracht Week 2 — Kortingscalculator

## Theorie

Gebruik de volgende cheatsheet-pagina's als je ergens niet uitkomt. Je kunt een specifieke term (zoals een functienaam of methode) ook direct opzoeken in de zoekbalk bovenaan de cheat sheet — dan spring je meteen naar de uitleg in plaats van de hele pagina te moeten doorzoeken:

- [Functions](https://meesterjson.nl/cheat-sheet/pages/javascript/functions.html) — functies, parameters en return-waarden
- [Conditionals](https://meesterjson.nl/cheat-sheet/pages/javascript/conditionals.html) — if/else, nodig voor de foutmelding en het klantniveau
- [DOM manipulatie](https://meesterjson.nl/cheat-sheet/pages/javascript/dom-manipulatie.html) — elementen selecteren, `textContent` en events

## Opdracht

Maak een kortingscalculator voor een webshop: de klant vult een bestelbedrag en een kortingspercentage in, en de pagina toont wat hij uiteindelijk betaalt.

> Bijvoorbeeld: bij een bestelbedrag van €100 en 10% korting betaal je `100 - (100 * 10 / 100)` = €90.

## Stappen

### Stap 1 — Functie schrijven (~30 min)
Schrijf de functie `calculateTotal(bedrag, korting)` die het te betalen bedrag berekent na aftrek van het kortingspercentage.

### Stap 2 — Formulier laten werken (~45 min)
Voeg een submit event listener toe aan `#discount-form`. Lees de waarden van `#amount` en `#discount` uit, roep je functie aan en toon het resultaat in `#result`: het te betalen bedrag (afgerond op 2 decimalen met `.toFixed(2)`).

### Stap 3 — Foutmelding bij lege invoer (~30 min)
Als het bedrag- of kortingsveld leeg is, toon dan een foutmelding in `#result` in plaats van te rekenen.

## Bonusopdracht

Voeg een functie `getKlantniveau(bedrag)` toe die op basis van het bestelbedrag een klantniveau teruggeeft (`'Nieuwe klant'` onder de €50, `'Vaste klant'` tot €150, `'VIP klant'` daarboven), en toon dit niveau ook in `#result`.

## Inleveren

Commit en push je werk. Lever de branch-link in via Canvas.
