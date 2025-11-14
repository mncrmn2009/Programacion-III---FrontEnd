"use strict";
const API_URL = "https://thesimpsonsapi.com/api/characters";
const loadButton = document.getElementById("loadButton");
const loadingSection = document.getElementById("cargando");
const errorDiv = document.getElementById("error");
const charactersContainer = document.getElementById("characters");
function showLoading() {
    loadingSection.classList.remove("hidden");
    errorDiv.classList.add("hidden");
}
function hideLoading() {
    loadingSection.classList.add("hidden");
}
function showError(message) {
    errorDiv.textContent = message;
    errorDiv.classList.remove("hidden");
    setTimeout(() => errorDiv.classList.add("hidden"), 5000);
}
function createCharacterCard(character) {
    const card = document.createElement("div");
    card.classList.add("character-card");
    const img = document.createElement("img");
    img.classList.add("character-card__img");
    img.src = `https://cdn.thesimpsonsapi.com/500${character.portrait_path}`;
    img.alt = character.name;
    const name = document.createElement("h3");
    name.classList.add("character-card__name");
    name.textContent = character.name;
    const phrase = document.createElement("p");
    phrase.classList.add("character-card__phrase");
    phrase.textContent = `"${character.phrases[1] ?? "..."}"`;
    card.append(img, name, phrase);
    return card;
}
function renderCharacters(characters) {
    charactersContainer.innerHTML = "";
    characters.forEach(character => {
        const card = createCharacterCard(character);
        charactersContainer.appendChild(card);
    });
}
async function fetchCharacters() {
    try {
        showLoading();
        const response = await fetch(API_URL);
        if (!response.ok)
            throw new Error("Error al cargar los personajes");
        const data = await response.json();
        renderCharacters(data.results.slice(0, 12));
    }
    catch (error) {
        console.error(error);
        showError("Error al cargar los personajes. Por favor, intenta nuevamente");
    }
    finally {
        hideLoading();
    }
}
loadButton.addEventListener("click", fetchCharacters);
