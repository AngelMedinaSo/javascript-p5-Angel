# Eindopdracht Week 6 — Gebruikersbeheer

## Theorie

Gebruik de volgende cheatsheet-pagina's als je ergens niet uitkomt. Je kunt een specifieke term (zoals een functienaam of methode) ook direct opzoeken in de zoekbalk bovenaan de cheat sheet — dan spring je meteen naar de uitleg in plaats van de hele pagina te moeten doorzoeken:

- [Objecten](https://meesterjson.nl/cheat-sheet/pages/javascript/objects.html) — properties en methods
- [Destructuring & spread](https://meesterjson.nl/cheat-sheet/pages/javascript/destructuring-spread.html) — data uit objecten halen en kopiëren
- [DOM & Local Storage](https://meesterjson.nl/cheat-sheet/pages/javascript/dom-local-storage.html) — elementen selecteren en tekst tonen
- [Events & listeners](https://meesterjson.nl/cheat-sheet/pages/javascript/events.html) — addEventListener, form submit

## Opdracht

Maak een gebruikersbeheerpagina op basis van de gebruikers in `script.js`.

## Stappen

### Stap 1 — Gebruikers tonen (~1 uur)
Schrijf de functie `showUsers(users)` zodat alle gebruikers als kaartjes verschijnen in `#users`. Gebruik destructuring om de properties uit elk object te halen.

```javascript
const { name, email, role, active } = user;
```

### Stap 2 — Filteren op rol (~1 uur)
Voeg event listeners toe aan de twee filterknoppen. Bij klik filter je de gebruikers op `role === 'admin'` of toon je alle gebruikers. Gebruik de `filter` variabele om bij te houden welke filter actief is.

### Stap 3 — Gebruiker toevoegen
Laat het formulier werken met een submit event. Maak een nieuw user object aan met spread op een default object en voeg het met push toe aan de array. Hoe je het default object opzet bepaal je zelf.

## Inleveren

Commit en push je werk. Lever de branch-link in via Canvas.