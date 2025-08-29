const heroes = [
    { name: "Aamon", lanes: ["JUNGLE"] },
    { name: "Akai", lanes: ["JUNGLE", "ROAM"] },
    { name: "Aldous", lanes: ["EXP", "JUNGLE"] },
    { name: "Alice", lanes: ["MID", "EXP"] },
    { name: "Alpha", lanes: ["EXP"] },
    { name: "Alucard", lanes: ["JUNGLE", "EXP"] },
    { name: "Angela", lanes: ["ROAM"] },
    { name: "Argus", lanes: ["EXP"] },
    { name: "Arlott", lanes: ["EXP"] },
    { name: "Atlas", lanes: ["ROAM"] },
    { name: "Aurora", lanes: ["MID"] },
    { name: "Aulus", lanes: ["EXP", "JUNGLE"] },
    { name: "Badang", lanes: ["EXP"] },
    { name: "Balmond", lanes: ["EXP", "JUNGLE"] },
    { name: "Barats", lanes: ["JUNGLE", "ROAM"] },
    { name: "Baxia", lanes: ["JUNGLE", "ROAM"] },
    { name: "Beatrix", lanes: ["GOLD"] },
    { name: "Belerick", lanes: ["EXP", "ROAM"] },
    { name: "Benedetta", lanes: ["JUNGLE", "ROAM", "EXP"] },
    { name: "Brody", lanes: ["GOLD"] },
    { name: "Bruno", lanes: ["GOLD"] },
    { name: "Carmilla", lanes: ["ROAM"] },
    { name: "Cecilion", lanes: ["MID"] },
    { name: "Chang’e", lanes: ["MID"] },
    { name: "Chou", lanes: ["ROAM", "EXP"] },
    { name: "Chip", lanes: ["ROAM"] },
    { name: "Cici", lanes: ["EXP"] },
    { name: "Claude", lanes: ["GOLD"] },
    { name: "Clint", lanes: ["GOLD"] },
    { name: "Cyclops", lanes: ["MID"] },
    { name: "Diggie", lanes: ["ROAM"] },
    { name: "Dyrroth", lanes: ["EXP"] },
    { name: "Edith", lanes: ["EXP", "ROAM"] },
    { name: "Esmeralda", lanes: ["EXP"] },
    { name: "Estes", lanes: ["ROAM"] },
    { name: "Eudora", lanes: ["MID"] },
    { name: "Fanny", lanes: ["JUNGLE"] },
    { name: "Faramis", lanes: ["MID", "ROAM"] },
    { name: "Floryn", lanes: ["ROAM"] },
    { name: "Franco", lanes: ["ROAM"] },
    { name: "Fredrinn", lanes: ["ROAM", "JUNGLE"] },
    { name: "Freya", lanes: ["JUNGLE", "EXP"] },
    { name: "Gatotkaca", lanes: ["EXP", "ROAM"] },
    { name: "Gloo", lanes: ["EXP", "ROAM"] },
    { name: "Gord", lanes: ["MID"] },
    { name: "Granger", lanes: ["GOLD"] },
    { name: "Grock", lanes: ["ROAM"] },
    { name: "Guinevere", lanes: ["EXP"] },
    { name: "Gusion", lanes: ["JUNGLE"] },
    { name: "Hanabi", lanes: ["GOLD", "EXP"] },
    { name: "Hanzo", lanes: ["JUNGLE"] },
    { name: "Harith", lanes: ["MID", "JUNGLE", "GOLD"] },
    { name: "Harley", lanes: ["JUNGLE"] },
    { name: "Hayabusa", lanes: ["JUNGLE"] },
    { name: "Helcurt", lanes: ["JUNGLE"] },
    { name: "Hilda", lanes: ["EXP", "ROAM"] },
    { name: "Hylos", lanes: ["EXP", "ROAM"] },
    { name: "Irithel", lanes: ["GOLD"] },
    { name: "Ixia", lanes: ["GOLD"] },
    { name: "Jawhead", lanes: ["EXP", "JUNGLE"] },
    { name: "Johnson", lanes: ["ROAM"] },
    { name: "Joy", lanes: ["JUNGLE"] },
    { name: "Julian", lanes: ["JUNGLE", "EXP"] },
    { name: "Kadita", lanes: ["MID"] },
    { name: "Kagura", lanes: ["MID"] },
    { name: "Kaja", lanes: ["ROAM"] },
    { name: "Karina", lanes: ["JUNGLE"] },
    { name: "Karrie", lanes: ["EXP", "GOLD"] },
    { name: "Khaleed", lanes: ["EXP"] },
    { name: "Khufra", lanes: ["ROAM"] },
    { name: "Kimmy", lanes: ["GOLD"] },
    { name: "Lancelot", lanes: ["JUNGLE"] },
    { name: "Lapu-Lapu", lanes: ["EXP"] },
    { name: "Layla", lanes: ["GOLD"] },
    { name: "Leomord", lanes: ["JUNGLE", "EXP"] },
    { name: "Lesley", lanes: ["GOLD"] },
    { name: "Ling", lanes: ["JUNGLE"] },
    { name: "Lolita", lanes: ["ROAM"] },
    { name: "Luo Yi", lanes: ["MID"] },
    { name: "Lukas", lanes: ["EXP", "JUNGLE"] },
    { name: "Lunox", lanes: ["MID"] },
    { name: "Lylia", lanes: ["MID"] },
    { name: "Martis", lanes: ["EXP", "JUNGLE"] },
    { name: "Masha", lanes: ["EXP", "ROAM"] },
    { name: "Mathilda", lanes: ["ROAM"] },
    { name: "Melissa", lanes: ["GOLD"] },
    { name: "Minotaur", lanes: ["ROAM"] },
    { name: "Minsitthar", lanes: ["EXP", "ROAM"] },
    { name: "Miya", lanes: ["GOLD"] },
    { name: "Moskov", lanes: ["GOLD"] },
    { name: "Nana", lanes: ["MID"] },
    { name: "Natalia", lanes: ["JUNGLE", "ROAM"] },
    { name: "Natan", lanes: ["GOLD"] },
    { name: "Nolan", lanes: ["JUNGLE"] },
    { name: "Novaria", lanes: ["MID"] },
    { name: "Odette", lanes: ["MID"] },
    { name: "Paquito", lanes: ["EXP", "JUNGLE"] },
    { name: "Pharsa", lanes: ["MID"] },
    { name: "Phoveus", lanes: ["EXP"] },
    { name: "Popol and Kupa", lanes: ["GOLD", "JUNGLE"] },
    { name: "Rafaela", lanes: ["ROAM"] },
    { name: "Roger", lanes: ["JUNGLE"] },
    { name: "Ruby", lanes: ["EXP"] },
    { name: "Saber", lanes: ["JUNGLE", "ROAM"] },
    { name: "Selena", lanes: ["MID", "ROAM"] },
    { name: "Silvanna", lanes: ["EXP"] },
    { name: "Sun", lanes: ["EXP", "JUNGLE"] },
    { name: "Suyou", lanes: ["EXP", "JUNGLE"] },
    { name: "Terizla", lanes: ["EXP"] },
    { name: "Thamuz", lanes: ["EXP"] },
    { name: "Tigreal", lanes: ["ROAM", "EXP"] },
    { name: "Uranus", lanes: ["ROAM", "EXP"] },
    { name: "Valentina", lanes: ["MID"] },
    { name: "Vale", lanes: ["MID"] },
    { name: "Valir", lanes: ["MID"] },
    { name: "Vexana", lanes: ["MID"] },
    { name: "Wanwan", lanes: ["GOLD"] },
    { name: "X.Borg", lanes: ["EXP", "JUNGLE"] },
    { name: "Xavier", lanes: ["MID"] },
    { name: "Yi Sun-shin", lanes: ["JUNGLE", "GOLD"] },
    { name: "Yin", lanes: ["EXP", "JUNGLE"] },
    { name: "Yve", lanes: ["MID"] },
    { name: "Yu Zhong", lanes: ["EXP"] },
    { name: "Zhask", lanes: ["MID"] },
    { name: "Zhuxin", lanes: ["MID"] },
    { name: "Zilong", lanes: ["EXP", "JUNGLE"] }
];

// Explicit counter structure
const counters = {
    Aamon: [
        { name: "Diggie", lanes: ["ROAM"] },
        { name: "Vale", lanes: ["MID"] },
        { name: "Gusion", lanes: ["JUNGLE", "MID"] }
    ],
    Akai: [
        { name: "Esmeralda", lanes: ["EXP"] },
        { name: "Chou", lanes: ["EXP", "ROAM"] },
        { name: "Valir", lanes: ["MID"] }
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
