# Eindopdracht Week 7 — Nieuwsfeed

## Theorie

Gebruik de volgende cheatsheet-pagina's als je ergens niet uitkomt. Je kunt een specifieke term (zoals een functienaam of methode) ook direct opzoeken in de zoekbalk bovenaan de cheat sheet — dan spring je meteen naar de uitleg in plaats van de hele pagina te moeten doorzoeken:

- [JSON & fetch](https://meesterjson.nl/cheat-sheet/pages/javascript/json.html) — `fetch()`, `.then()`, JSON-structuur lezen
- [Arrays & methods](https://meesterjson.nl/cheat-sheet/pages/javascript/arrays-methods.html) — `filter()`, `map()`
- [DOM & Local Storage](https://meesterjson.nl/cheat-sheet/pages/javascript/dom-local-storage.html) — elementen selecteren en tekst tonen
- [Events & listeners](https://meesterjson.nl/cheat-sheet/pages/javascript/events.html) — `addEventListener`

## Opdracht

Maak een nieuwsfeed die artikelen laadt uit `news.json` en toont op de pagina.

> De artikelen staan al klaar in `news.json`. Elk artikel heeft de properties `title`, `category`, `date` en `summary`. Je leest ze uit met `article.title`, `article.category`, enzovoort.

## Stappen

### Stap 1 — Artikelen laden en tonen (~1,5 uur)
Gebruik `fetch('./news.json')` om de artikelen te laden. Sla de artikelen op in de variabele `allArticles`. Schrijf de functie `showArticles(articles)` zodat elk artikel als een `<article>` verschijnt in `#articles`. Toon de `title`, `category` en `summary` van elk artikel.

### Stap 2 — Filterknoppen (~1 uur)
Voeg event listeners toe aan de vier filterknoppen die al in de HTML staan. Bij klik op een categorieknop filter je `allArticles` op categorie en roep je `showArticles()` aan. De knop **Alle** toont alle artikelen.

## Inleveren

Commit en push je werk. Lever de branch-link in via Canvas.
