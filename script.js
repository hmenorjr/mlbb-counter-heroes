// Data for heroes and their counter heroes
const heroesData = {
    "Hylos": ["Fanny", "Natalia", "Eudora", "Sun", "Odette", "Karrie", "Valir", "Alpha", "Grock", "Akai", "Franco"],
    "Layla": ["Natalia", "Fanny", "Hayabusa", "Lancelot", "Gusion", "Miya", "Harley", "Kagura", "Lunox", "Vexana", "Cecilion", "Claude", "Zilong"],
    "Miya": ["Natalia", "Alucard", "Clint", "Layla", "Eudora", "Zilong", "Saber", "Lancelot", "Kaja", "Hayabusa", "Jawhead", "Chou", "Hanzo"],
    "Fanny": ["Claude", "Granger", "Lesley", "Hilda", "Alucard", "Cecilion", "Valir", "Yi Sun-shin", "Ling", "Helcurt", "Atlas", "Grock", "Johnson"]
};

// Get the heroes list and counter heroes div
const heroesList = document.getElementById("heroes");
const counterHeroesDiv = document.getElementById("counter-heroes");

// Add event listener to each hero link
heroesList.addEventListener("click", (e) => {
    if (e.target.tagName === "A") {
        e.preventDefault();
        const hero = e.target.getAttribute("data-hero");
        const counterHeroes = heroesData[hero];

        // Display the counter heroes
        counterHeroesDiv.innerHTML = "";
        if (counterHeroes) {
            counterHeroesDiv.innerHTML = `<h2>Counter Heroes for ${hero}:</h2><ul>${counterHeroes.map((counterHero) => `<li>${counterHero}</li>`).join("")}</ul>`;
        } else {
            counterHeroesDiv.innerHTML = `<p>No counter heroes found for ${hero}.</p>`;
        }
    }
});
