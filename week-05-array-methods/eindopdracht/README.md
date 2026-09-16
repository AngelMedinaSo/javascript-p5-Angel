# Eindopdracht Week 5 — Productcatalogus

## Theorie

Gebruik de volgende cheatsheet-pagina's als je ergens niet uitkomt. Je kunt een specifieke term (zoals een functienaam of methode) ook direct opzoeken in de zoekbalk bovenaan de cheat sheet — dan spring je meteen naar de uitleg in plaats van de hele pagina te moeten doorzoeken:

- [Arrays & methods](https://meesterjson.nl/cheat-sheet/pages/javascript/arrays-methods.html) — `filter()`, `map()`, `sort()`
- [String methods](https://meesterjson.nl/cheat-sheet/pages/javascript/string-methods.html) — `includes()`, `toLowerCase()`
- [DOM & Local Storage](https://meesterjson.nl/cheat-sheet/pages/javascript/dom-local-storage.html) — elementen selecteren en tekst tonen
- [Events & listeners](https://meesterjson.nl/cheat-sheet/pages/javascript/events.html) — `addEventListener`, input event

## Opdracht

Maak een doorzoekbare en sorteerbare productcatalogus.

> De producten staan al als objecten in de array in `script.js`. Je hoeft geen objecten aan te maken — je leest alleen de eigenschappen uit met `product.name` en `product.price`.

## Stappen

### Stap 1 — Producten tonen (~1 uur)
Schrijf de functie `showProducts(list)` zodat alle producten als kaartjes verschijnen op de pagina. Toon de naam en prijs van elk product. Werk ook de teller bij zodat je ziet hoeveel producten er zijn.

### Stap 2 — Zoekbalk (~1,5 uur)
Voeg een event listener toe aan `#search-bar`. Filter de producten live op naam terwijl de gebruiker typt. Gebruik `includes()` en `toLowerCase()` zodat hoofdletters niet uitmaken.

### Stap 3 — Sorteren
Voeg event listeners toe aan de twee sorteerknoppen. Bij klik sorteer je de producten met `sort()` van laag naar hoog of hoog naar laag op prijs. Zoeken en sorteren moeten tegelijk kunnen werken.

## Inleveren

Commit en push je werk. Lever de branch-link in via Canvas.