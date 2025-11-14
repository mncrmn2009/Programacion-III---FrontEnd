interface SimpsonCharacter {
  id: number;
  name: string;
  age: number;
  gender: string;
  occupation: string;
  portrait_path: string;
  phrases: string[];
  status: string;
}

interface IResponseApi {
  count: number;
  next: string | null;
  prev: string | null;
  pages: number;
  results: SimpsonCharacter[];
}

const API_URL = "https://thesimpsonsapi.com/api/characters";

const loadButton = document.getElementById("loadButton") as HTMLButtonElement;
const loadingSection = document.getElementById("cargando") as HTMLDivElement;
const errorDiv = document.getElementById("error") as HTMLDivElement;
const charactersContainer = document.getElementById("characters") as HTMLDivElement;

function showLoading(): void {
  loadingSection.classList.remove("hidden");
  errorDiv.classList.add("hidden");
}

function hideLoading(): void {
  loadingSection.classList.add("hidden");
}

function showError(message: string): void {
  errorDiv.textContent = message;
  errorDiv.classList.remove("hidden");
  setTimeout(() => errorDiv.classList.add("hidden"), 5000);
}

function createCharacterCard(character: SimpsonCharacter): HTMLElement {
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
  phrase.textContent = `"${character.phrases[1] ?? "..." }"`;

  card.append(img, name, phrase);
  return card;
}


function renderCharacters(characters: SimpsonCharacter[]): void {
  charactersContainer.innerHTML = "";
  characters.forEach(character => {
    const card = createCharacterCard(character);
    charactersContainer.appendChild(card);
  });
}

async function fetchCharacters(): Promise<void> {
  try {
    showLoading();
    const response = await fetch(API_URL);
    if (!response.ok) throw new Error("Error al cargar los personajes");
    const data: IResponseApi = await response.json();
    renderCharacters(data.results.slice(0, 12));
  } catch (error) {
    console.error(error);
    showError("Error al cargar los personajes. Por favor, intenta nuevamente");
  } finally {
    hideLoading();
  }
}

loadButton.addEventListener("click", fetchCharacters);
