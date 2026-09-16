# Oefening 2 Week 2 — Basis DOM-manipulatie

## Opdracht (~45 min)

Werk de drie stappen in `script.js` af.

1. Selecteer `#title` met `getElementById` en verander de tekst naar iets anders met `textContent`.
2. Voeg een click event listener toe aan `#toggle-btn`. Bij de eerste klik wordt de tekstkleur van `#message` rood (`element.style.color = 'red'`), bij de volgende klik weer zwart, enzovoort (toggle met een `if`/`else` en een variabele die bijhoudt of de tekst rood is).
3. Voeg een click event listener toe aan `#greet-btn`. Lees de waarde van `#name-input` uit met `.value` en toon in `#greeting` de tekst `'Hallo, <naam>!'`.

## Concepten

- `getElementById`
- `textContent`
- `addEventListener('click', ...)`
- `.value` uitlezen van een input
- `element.style`

Typ zo'n term in de zoekbalk bovenaan de [cheat sheet](https://meesterjson.nl/cheat-sheet/pages/javascript/index.html) om direct naar de uitleg te springen.

## Cheatsheet

- [DOM manipulatie](https://meesterjson.nl/cheat-sheet/pages/javascript/dom-manipulatie.html) — elementen selecteren en aanpassen
- [Conditionals](https://meesterjson.nl/cheat-sheet/pages/javascript/conditionals.html) — if/else, nodig voor de kleur-toggle
