const heroes = [
    { name: "Aamon" },
    { name: "Akai" },
    { name: "Aldous" },
    { name: "Alice" },
    { name: "Alpha" },
    { name: "Alucard" },
    { name: "Angela" },
    { name: "Argus" },
    { name: "Arlott" },
    { name: "Atlas" },
    { name: "Aurora" },
    { name: "Aulus" },
    { name: "Badang" },
    { name: "Balmond" },
    { name: "Barats" },
    { name: "Baxia" },
    { name: "Beatrix" },
    { name: "Belerick" },
    { name: "Benedetta" },
    { name: "Brody" },
    { name: "Bruno" },
    { name: "Carmilla" },
    { name: "Cecilion" },
    { name: "Chang’e" },
    { name: "Chou" },
    { name: "Chip" },
    { name: "Cici" },
    { name: "Claude" },
    { name: "Clint" },
    { name: "Cyclops" },
    { name: "Diggie" },
    { name: "Dyrroth" },
    { name: "Edith" },
    { name: "Esmeralda" },
    { name: "Estes" },
    { name: "Eudora" },
    { name: "Fanny" },
    { name: "Faramis" },
    { name: "Floryn" },
    { name: "Franco" },
    { name: "Fredrinn" },
    { name: "Freya" },
    { name: "Gatotkaca" },
    { name: "Gloo" },
    { name: "Gord" },
    { name: "Granger" },
    { name: "Grock" },
    { name: "Guinevere" },
    { name: "Gusion" },
    { name: "Hanabi" },
    { name: "Hanzo" },
    { name: "Harith" },
    { name: "Harley" },
    { name: "Hayabusa" },
    { name: "Helcurt" },
    { name: "Hilda" },
    { name: "Hylos" },
    { name: "Irithel" },
    { name: "Ixia" },
    { name: "Johnson" },
    { name: "Joy" },
    { name: "Julian" },
    { name: "Kadita" },
    { name: "Kagura" },
    { name: "Kaja" },
    { name: "Karina" },
    { name: "Karrie" },
    { name: "Khaleed" },
    { name: "Khufra" },
    { name: "Kimmy" },
    { name: "Lancelot" },
    { name: "Lapu-Lapu" },
    { name: "Layla" },
    { name: "Leomord" },
    { name: "Ling" },
    { name: "Lolita" },
    { name: "Luo Yi" },
    { name: "Lukas" },
    { name: "Lunox" },
    { name: "Lylia" },
    { name: "Martis" },
    { name: "Masha" },
    { name: "Mathilda" },
    { name: "Melissa" },
    { name: "Minotaur" },
    { name: "Minsitthar" },
    { name: "Miya" },
    { name: "Moskov" },
    { name: "Nana" },
    { name: "Natan" },
    { name: "Novaria" },
    { name: "Odette" },
    { name: "Paquito" },
    { name: "Pharsa" },
    { name: "Phoveus" },
    { name: "Popol and Kupa" },
    { name: "Rafaela" },
    { name: "Roger" },
    { name: "Ruby" },
    { name: "Saber" },
    { name: "Selena" },
    { name: "Silvanna" },
    { name: "Sun" },
    { name: "Suyou" },
    { name: "Terizla" },
    { name: "Thamuz" },
    { name: "Tigreal" },
    { name: "Uranus" },
    { name: "Valentina" },
    { name: "Vale" },
    { name: "Valir" },
    { name: "Vexana" },
    { name: "Wanwan" },
    { name: "X.Borg" },
    { name: "Xavier" },
    { name: "Yi Sun-shin" },
    { name: "Yin" },
    { name: "Yve" },
    { name: "Yu Zhong" },
    { name: "Zhask" },
    { name: "Zhuxin" },
    { name: "Zilong" }
];

// Explicit counter structure
const counters = {
    Aamon: [
        { name: "Phoveus", lanes: ["EXP"] },
        { name: "Esmeralda", lanes: ["EXP"] },
        { name: "Yu Zhong", lanes: ["EXP"] },
        { name: "Lunox", lanes: ["MID"] },
        { name: "Kadita", lanes: ["MID"] },
        { name: "Lylia", lanes: ["MID"] },
        { name: "Brody", lanes: ["GOLD"] },
        { name: "Popol and Kupa", lanes: ["GOLD", "JUNGLE"] },
        { name: "Clint", lanes: ["GOLD"] },
        { name: "Akai", lanes: ["JUNGLE", "ROAM"] },
        { name: "Saber", lanes: ["JUNGLE", "ROAM"] },
        { name: "Karina", lanes: ["JUNGLE"] },
        { name: "Angela", lanes: ["ROAM"] },
        { name: "Rafaela", lanes: ["ROAM"] },
        { name: "Mathilda", lanes: ["ROAM"] },
    ],
    Akai: [
        { name: "Karrie", lanes: ["EXP", "GOLD", "JUNGLE"] },
        { name: "Masha", lanes: ["EXP", "ROAM"] },
        { name: "Dyrroth", lanes: ["EXP"] },
        { name: "Valir", lanes: ["MID"] },
        { name: "Lunox", lanes: ["MID"] },
        { name: "Cecilion", lanes: ["MID"] },
        { name: "Claude", lanes: ["GOLD"] },
        { name: "Moskov", lanes: ["GOLD"] },
        { name: "Karina", lanes: ["JUNGLE"] },
        { name: "Diggie", lanes: ["ROAM"] },
        { name: "Valir", lanes: ["MID"] },
        { name: "Valir", lanes: ["ROAM"] },
    ],
    Alice: [
        { name: "Lolita", lanes: ["ROAM"] },
        { name: "Gord", lanes: ["MID"] },
        { name: "Esmeralda", lanes: ["EXP"] }
    ],
    // … more hero counters
};

const selected = new Set();

const heroListEl = document.getElementById("hero-list");
heroes.forEach(hero => {
    const btn = document.createElement("button");
    btn.textContent = hero.name;
    btn.className = "hero-btn";
    btn.onclick = () => {
        if (selected.has(hero.name)) {
            selected.delete(hero.name);
            btn.classList.remove("selected");
        } else if (selected.size < 5) {
            selected.add(hero.name);
            btn.classList.add("selected");
        }
    };
    heroListEl.appendChild(btn);
});

document.getElementById("find-btn").onclick = () => {
    // Group counters by lanes
    const grouped = {
        EXP: new Set(),
        MID: new Set(),
        GOLD: new Set(),
        ROAM: new Set(),
        JUNGLE: new Set()
    };

    selected.forEach(h => {
        if (counters[h]) {
            counters[h].forEach(counterHero => {
                counterHero.lanes.forEach(lane => {
                    grouped[lane].add(counterHero.name);
                });
            });
        }
    });

    const resEl = document.getElementById("results");
    resEl.innerHTML = "";
    for (const [lane, set] of Object.entries(grouped)) {
        const div = document.createElement("div");
        div.className = "lane-group";
        const title = document.createElement("h2");
        title.textContent = lane;
        div.appendChild(title);
        const card = document.createElement("div");
        card.className = "card";
        if (set.size) {
            const ul = document.createElement("ul");
            set.forEach(c => {
                const li = document.createElement("li");
                li.textContent = c;
                ul.appendChild(li);
            });
            card.appendChild(ul);
        } else {
            card.textContent = "No counters found";
        }
        div.appendChild(card);
        resEl.appendChild(div);
    }
};

// Theme toggle logic
const themeToggle = document.getElementById("theme-toggle");
themeToggle.onclick = () => {
    document.body.dataset.theme = document.body.dataset.theme === "dark" ? "" : "dark";
};
