// Data for heroes and their counter heroes
const heroesData = {
    "Hylos": ["Fanny", "Natalia", "Eudora", "Sun", "Odette", "Karrie", "Valir", "Alpha", "Grock", "Akai", "Franco"],
    "Layla": ["Natalia", "Fanny", "Hayabusa", "Lancelot", "Gusion", "Miya", "Harley", "Kagura", "Lunox", "Vexana", "Cecilion", "Claude", "Zilong"],
    "Miya": ["Natalia", "Alucard", "Clint", "Layla", "Eudora", "Zilong", "Saber", "Lancelot", "Kaja", "Hayabusa", "Jawhead", "Chou", "Hanzo"],
    "Fanny": ["Claude", "Granger", "Lesley", "Hilda", "Alucard", "Cecilion", "Valir", "Yi Sun-shin", "Ling", "Helcurt", "Atlas", "Grock", "Johnson"],
    "Gatotkaca": ["Silvanna","Franco","Ruby","Minsitthar","Kaja","Alpha","Lunox","Karrie","Hayabusa","Natalia","Miya","Sun","Balmond","Bruno","Layla","Eudora","Vale","Nana","Aurora","Uranus","Dyrroth","Thamuz","Freya","X-Borg","Yin"],
    "Belerick": ["Valir","Karrie", "Dyrroth", "Thamuz", "Fanny", "Uranus", "Carmilla", "Angela", "Floryn", "Freya", "Sun", "Alpha", "Minsitthar", "Saber"],
    "Melissa": ["Moskov","Franco","Yve","Aurora","Saber","Lancelot","Yu Zhong","Eudora","Chou","Brody","Claude","Clint","Lesley","Hayabusa","X.Borg"],
    "Cecilion": ["Chou","Gusion","Harley","Hayabusa","Helcurt","Aldous","Lancelot","Kufra","Lesley","Natalia"],
    "Carmilla": ["Lunox","Baxia","Claude","Kaja","Karrie","Pharsa","Chou","Wanwan","Hanabi"],
    "Xborg": ["Esmeralda","Chou","Gloo","Baxia","Franco","Nana","Granger","Khufra","Kimmy","Lesley","Alpha","Gusion","Pharsa","Guinevere","Silvanna","Ruby","Minsitthar","Kaja","Yi-Sun-Shin","Ling","Atlas","Gatotkaca","Uranus","Lancelot","Balmond","Lunox","Hayabusa"],
    "Zhask": ["Eudora","Helcurt","Akai","Cecilion","Claude","Lancelot","Fanny","Joy","Nolan","Paquito","Xavier","Vale","Belerick","Saber","Kagura","Nana","Aurora","Pharsa","Luo Yi","Valir","Guinivere","Bane","Silvanna","Hilda","Lylia"],
    "Badang": ["Wanwan","Chou","Khaleed","Yu Zhong","Kimmy","Hanzo","Hanabi","Helcurt","Odette","Silvanna","Franco","Ruby","Minsitthar","Kaja","Lunox","Khufra","Aldous"],
    "Julian": ["Aamon", "Edith", "Pacquito"]
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
