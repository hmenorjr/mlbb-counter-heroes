// Data for heroes and their counter heroes
const heroesData = {
    "Batman": ["Joker", "Penguin", "Riddler"],
    "Superman": ["Lex Luthor", "General Zod", "Bizarro"],
    "Wonder Woman": ["Ares", "Circe", "Doctor Psycho"],
    "Iron Man": ["Ultron", "Thanos", "Justin Hammer"],
    "Captain America": ["Red Skull", "Hydra", "Winter Soldier"]
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
