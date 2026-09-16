// ============================================================
//  Week 2 — Oefening 2: Basis DOM-manipulatie
// ============================================================

// 1. Selecteer #title met getElementById en verander de tekst
//    naar iets anders met textContent


// 2. Voeg een click event listener toe aan #toggle-btn.
//    Bij klik wisselt de tekstkleur van #message tussen rood en zwart.
//    Gebruik een variabele om bij te houden of de tekst nu rood is.


// 3. Voeg een click event listener toe aan #greet-btn.
//    Lees de waarde van #name-input uit en toon 'Hallo, <naam>!' in #greeting.
const message = document.getElementById("message");
const name = document.getElementById("name-input");
const greet = document.getElementById("greeting");

let isRed = false;

document.getElementById("title").textContent = "WASSUP my guy?";

document.getElementById("toggle-btn").addEventListener("click", function() {
    if (isRed) {
        message.style.color = "black";
    } else {
        message.style.color = "red";
    }

    isRed = !isRed;
});

document.getElementById("greet-btn").addEventListener("click", function() {
    const userName = name.value.trim()

    if (userName === "") {
        greet.textContent = "schrijf eerst je naam op";
        greet.style.color = "red";
    } else {
        greet.textContent = `Hallo, ${userName.toUpperCase()}!`;
        greet.style.color = "black";
    }
});