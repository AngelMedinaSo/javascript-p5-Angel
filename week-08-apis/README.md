# Week 8 — Externe API's

## Theorie

In deze week werk je met echte externe API's. Je haalt data op via `fetch`, verkent de datastructuur met `console.log`, en filtert en toont de resultaten in de DOM.

| Onderwerp | Cheatsheet |
|-----------|-----------|
| Externe API's aanroepen | [API's](https://meesterjson.nl/cheat-sheet/pages/javascript/api.html) |
| fetch en JSON verwerken | [JSON & fetch](https://meesterjson.nl/cheat-sheet/pages/javascript/json.html) |

Tip: gebruik de zoekbalk bovenaan de cheat sheet om een specifieke term direct op te zoeken — dan spring je meteen naar de uitleg in plaats van de hele pagina te moeten doorzoeken.

## Weekoverzicht

| Onderdeel | Concept | Tijd |
|-----------|---------|------|
| Oefening 1 | API verkennen met console.log — Rick & Morty API | 45 min |
| Oefening 2 | Data filteren en tonen — Pokémon API + zoekbalk | 45 min |
| Eindopdracht | Weerapplicatie — OpenWeather API met formulier | 4 uur |

## OpenWeather API

Voor de eindopdracht gebruik je de [OpenWeather API](https://openweathermap.org/api). Maak een gratis account aan om een eigen API-key te genereren. Het kan een paar minuten duren voordat je key actief is.

**API-URL:**

```
https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric
```
