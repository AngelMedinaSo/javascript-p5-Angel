# Eindopdracht Week 9 — Pokémon favorieten

## Theorie

Gebruik de volgende cheatsheet-pagina's als je ergens niet uitkomt. Je kunt een specifieke term (zoals een functienaam of methode) ook direct opzoeken in de zoekbalk bovenaan de cheat sheet — dan spring je meteen naar de uitleg in plaats van de hele pagina te moeten doorzoeken:

- [DOM & localStorage](https://meesterjson.nl/cheat-sheet/pages/javascript/dom-local-storage.html) — `localStorage.setItem`, `getItem`, `JSON.stringify`, `JSON.parse`
- [JSON & fetch](https://meesterjson.nl/cheat-sheet/pages/javascript/json.html) — `fetch()`, `.then()`
- [Arrays & methods](https://meesterjson.nl/cheat-sheet/pages/javascript/arrays-methods.html) — `filter()`, `map()`, `includes()`
- [Events & listeners](https://meesterjson.nl/cheat-sheet/pages/javascript/events.html) — `addEventListener`

## Opdracht

Maak een Pokémon-app waarbij je favorieten kunt opslaan in localStorage. De favorieten blijven bewaard als je de pagina herlaadt.

## Stappen

### Stap 1 — Pokémon laden en tonen (~1 uur)
Haal de eerste 151 Pokémon op via de API en sla ze op in `allPokemon`. Schrijf de functie `showItems(items)` zodat elk item als een `<article>` verschijnt in `#results` met een afbeelding, naam en een **Favoriet**-knop.

> De API-URL en sprite-URL ken je al van week 8:
> - `https://pokeapi.co/api/v2/pokemon?limit=151`
> - `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`

### Stap 2 — Favoriet toevoegen (~1 uur)
Na het renderen voeg je een click event listener toe aan elke favoriet-knop. Gebruik `querySelectorAll` met een index om te weten welke Pokémon bij welke knop hoort:

```javascript
document.querySelectorAll('.favorite-btn').forEach((btn, i) => {
  btn.addEventListener('click', () => {
    const name = items[i].name; // items[i] is de Pokémon bij deze knop
    favorites.push(name);
    saveFavorites();
    showItems(items);
  });
});
```

Gebruik `includes()` om te controleren of een Pokémon al een favoriet is en de knop grijs te maken.

### Stap 3 — Favorieten tonen (~30 min)
Voeg event listeners toe aan de twee knoppen in de header. De knop **Alle Pokémon** toont alle Pokémon. De knop **Mijn favorieten** filtert `allPokemon` op de namen in de `favorites` array. Zorg dat de favorieten bewaard blijven na herladen — de `favorites` array wordt al ingeladen vanuit localStorage bovenaan `script.js`.

## Bonusopdracht

Maak de favoriet-knop een toggle: als een Pokémon al een favoriet is, verwijder je hem weer uit de array bij een tweede klik.

## Inleveren

Commit en push je werk. Lever de branch-link in via Canvas.
