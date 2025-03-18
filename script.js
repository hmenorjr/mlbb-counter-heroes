// Data for heroes and their counter heroes
const heroesData = {
    "Hylos": ["Fanny", "Natalia", "Eudora", "Sun", "Odette", "Karrie", "Valir", "Alpha", "Grock", "Akai", "Franco","Leslie"],
    "Layla": ["Natalia", "Fanny", "Hayabusa", "Lancelot", "Gusion", "Miya", "Harley", "Kagura", "Lunox", "Vexana", "Cecilion", "Claude", "Zilong"],
    "Miya": ["Natalia", "Alucard", "Clint", "Layla", "Eudora", "Zilong", "Saber", "Lancelot", "Kaja", "Hayabusa", "Jawhead", "Chou", "Hanzo"],
    "Fanny": ["Claude", "Granger", "Lesley", "Hilda", "Alucard", "Cecilion", "Valir", "Yi Sun-shin", "Ling", "Helcurt", "Atlas", "Grock", "Johnson"],
    "Gatotkaca": ["Silvanna","Franco","Ruby","Minsitthar","Kaja","Alpha","Lunox","Karrie","Hayabusa","Natalia","Miya","Sun","Balmond","Bruno","Layla","Eudora","Vale","Nana","Aurora","Uranus","Dyrroth","Thamuz","Freya","X-Borg","Yin","Leslie"],
    "Belerick": ["Valir","Karrie", "Dyrroth", "Thamuz", "Fanny", "Uranus", "Carmilla", "Angela", "Floryn", "Freya", "Sun", "Alpha", "Minsitthar", "Saber","Leslie"],
    "Melissa": ["Moskov","Franco","Yve","Aurora","Saber","Lancelot","Yu Zhong","Eudora","Chou","Brody","Claude","Clint","Lesley","Hayabusa","X.Borg"],
    "Cecilion": ["Chou","Gusion","Harley","Hayabusa","Helcurt","Aldous","Lancelot","Kufra","Lesley","Natalia"],
    "Carmilla": ["Lunox","Baxia","Claude","Kaja","Karrie","Pharsa","Chou","Wanwan","Hanabi","Leslie"],
    "Xborg": ["Esmeralda","Chou","Gloo","Baxia","Franco","Nana","Granger","Khufra","Kimmy","Lesley","Alpha","Gusion","Pharsa","Guinevere","Silvanna","Ruby","Minsitthar","Kaja","Yi-Sun-Shin","Ling","Atlas","Gatotkaca","Uranus","Lancelot","Balmond","Lunox","Hayabusa"],
    "Zhask": ["Eudora","Helcurt","Akai","Cecilion","Claude","Lancelot","Fanny","Joy","Nolan","Paquito","Xavier","Vale","Belerick","Saber","Kagura","Nana","Aurora","Pharsa","Luo Yi","Valir","Guinivere","Bane","Silvanna","Hilda","Lylia"],
    "Badang": ["Wanwan","Chou","Khaleed","Yu Zhong","Kimmy","Hanzo","Hanabi","Helcurt","Odette","Silvanna","Franco","Ruby","Minsitthar","Kaja","Lunox","Khufra","Aldous","Benedetta"],
    "Terizla": ["Valir", "Guinevere","Karrie","Silvanna","Franco","Ruby","Minsitthar","Kaja","Dyroth","Xborg","Leslie"],
    "Julian": ["Aamon", "Edith", "Pacquito"],
    "Freya": ["Phoveus", "Wanwan", "Minsitthar","Esmeralda","Kaja"],
    "Popol and Kupa": ["Clint","Kagura","Kimmy","Wanwan","Saber", "Melissa"],
    "Beatrix": ["Natalia","Clint","Lancelot","Chou","Jawhead","Brody"],
    "Clint": ["Beatrix","Lancelot","Natalia","Chou","Jawhead","Ling","Gusion","Hayabusa","Popol and Kupa","Yve"],
    "Valir": ["Beatrix","Lancelot","Natalia","Chou","Jawhead","Ling","Gusion","Hayabusa","Yve","Kagura","Lloyd"],
    "Claude": ["Natalia","Lancelot","Chou","Jawhead","Ling","Gusion","Hayabusa","Yve","Beatrix","Lloyd","Kagura","Leslie"],
    "Harley": ["Natalia","Lancelot","Chou","Jawhead","Ling","Gusion","Hayabusa","Yve","Beatrix","Lloyd","Kagura","Saber"],
    "Leslie": ["Natalia","Lancelot","Chou","Jawhead","Ling","Gusion","Hayabusa","Yve","Beatrix","Lloyd","Kagura","Clint"],
    "Akai": ["Leslie","Gord", "Nana", "Clint", "Zilong", "Alice", "Baxia", "Valira", "Claude"],
    "Franco": ["Leslie","Ling", "Gusion", "Hilda", "Lancelot", "Lapu Lapu", "Natalia", "Wanwan", "Yve"],
    "Alice": ["Karrie", "Claude", "Esmeralda", "Chou", "Franco", "Helcurt", "Natalia", "Diggie", "Baxia", "Valir", "Yu Zhong"]
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
            // Sort the counter heroes alphabetically
            counterHeroes.sort((a, b) => a.localeCompare(b));
            
            counterHeroesDiv.innerHTML = `<h2>Counter Heroes for ${hero}:</h2><ul>${counterHeroes.map((counterHero) => `<li>${counterHero}</li>`).join("")}</ul>`;
        } else {
            counterHeroesDiv.innerHTML = `<p>No counter heroes found for ${hero}.</p>`;
        }
    }
});
