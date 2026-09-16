# Eindopdracht Week 8 — Weerapplicatie

## Theorie

Gebruik de volgende cheatsheet-pagina's als je ergens niet uitkomt. Je kunt een specifieke term (zoals een functienaam of methode) ook direct opzoeken in de zoekbalk bovenaan de cheat sheet — dan spring je meteen naar de uitleg in plaats van de hele pagina te moeten doorzoeken:

- [API's](https://meesterjson.nl/cheat-sheet/pages/javascript/api.html) — een externe API aanroepen en de response verwerken
- [JSON & fetch](https://meesterjson.nl/cheat-sheet/pages/javascript/json.html) — `fetch()`, `.then()`, JSON lezen
- [Events & listeners](https://meesterjson.nl/cheat-sheet/pages/javascript/events.html) — `addEventListener`, `submit`, `preventDefault`

## Opdracht

Bouw een weerapplicatie met de [OpenWeather API](https://openweathermap.org/api). De gebruiker typt een stad in een formulier en ziet daarna de actuele weersinformatie van die stad.

**API-key aanmaken:** Maak een gratis account op [openweathermap.org](https://openweathermap.org/api) en kopieer je eigen API-key. Het kan een paar minuten duren voordat je key actief is.

**API-URL:**

```
`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
```

Waarbij `city` de ingevulde stadsnaam is en `API_KEY` je eigen sleutel.

> ⚠️ **Push je API-key nooit naar GitHub.** Je werkt daarom met een aparte `config.js` die in `.gitignore` staat — zie stap 1.

## Stappen

### Stap 1 — API-key veilig instellen (~15 min)
1. Kopieer `config.example.js` en noem de kopie **`config.js`**
2. Vul in `config.js` je eigen OpenWeather-key in bij `API_KEY`
3. Dat is alles — `config.js` wordt automatisch ingeladen via `index.html` en staat in `.gitignore`, dus je key wordt nooit gepusht

In `script.js` kun je daarna gewoon de variabele `API_KEY` gebruiken in je fetch-URL.

### Stap 2 — API testen en verkennen (~15 min)
Open de app in de browser, typ een stadsnaam (bijvoorbeeld `Amsterdam`) en klik op zoeken. Gebruik `console.log(data)` in de `.then()` om de structuur van de response te bekijken. Noteer welke properties je nodig hebt.

> Tip: de belangrijkste properties zijn `data.name`, `data.main.temp`, `data.main.feels_like`, `data.main.humidity`, `data.wind.speed` en `data.weather[0].icon`.

### Stap 3 — Weerinformatie tonen (~1,5 uur)
Vul de functie `showWeather(data)` in zodat de volgende informatie in `#weather-info` verschijnt:

- Stadsnaam
- Weer-icon (zie hieronder)
- Temperatuur
- Gevoelstemperatuur
- Luchtvochtigheid
- Windsnelheid

> De URL van het weer-icon is:
> `https://openweathermap.org/img/wn/${icon}@2x.png`
> waarbij `icon` de waarde is van `data.weather[0].icon`.

### Stap 4 — Formulier koppelen (~1 uur)
Voeg een `submit` event listener toe aan het formulier. Gebruik `e.preventDefault()` zodat de pagina niet herlaadt, lees de waarde uit de input en roep `getWeather(city)` aan. Maak het invoerveld daarna leeg.

### Stap 5 — Foutafhandeling (~30 min)
Als de gebruiker een stad invult die niet bestaat, geeft de API een foutmelding terug (`data.cod !== 200`). Toon in dat geval een nette boodschap in `#weather-info` in plaats van de weerkaart.

## Bonusopdracht

- Pas de achtergrondkleur van de pagina aan op basis van het weer (bewolkt, zonnig, regen, etc.). Gebruik `data.weather[0].main` om te checken welk type weer het is.
- Sla alle zoekopdrachten op in een array en toon de geschiedenis onder de weerkaart (net als bij de Twitter/Todo-opdracht uit week 4).
- Toggle card: klik op een eerder gezochte stad om de weerinfo opnieuw te tonen.

## Inleveren

Commit en push je werk. Lever de branch-link in via Canvas, samen met een screenshot van de applicatie.
