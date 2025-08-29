const heroes = [
  { name: "Aamon", lanes: ["JUNGLE", "MID"] },
  { name: "Akai", lanes: ["JUNGLE", "ROAM"] },
  { name: "Aldous", lanes: ["EXP", "JUNGLE"] },
  { name: "Alice", lanes: ["EXP", "MID"] },
  { name: "Alucard", lanes: ["JUNGLE", "EXP"] },
  { name: "Alpha", lanes: ["EXP"] },
  { name: "Angela", lanes: ["ROAM", "MID"] },
  { name: "Argus", lanes: ["EXP"] },
  { name: "Arlott", lanes: ["EXP", "JUNGLE"] },
  { name: "Atlas", lanes: ["ROAM"] },
  { name: "Aurora", lanes: ["MID"] },
  { name: "Aulus", lanes: ["EXP", "JUNGLE"] },
  { name: "Badang", lanes: ["EXP", "GOLD"] },
  { name: "Balmond", lanes: ["JUNGLE", "EXP"] },
  { name: "Barats", lanes: ["EXP", "JUNGLE"] },
  { name: "Baxia", lanes: ["JUNGLE", "ROAM"] },
  { name: "Beatrix", lanes: ["GOLD", "MID"] },
  { name: "Belerick", lanes: ["EXP", "ROAM"] },
  { name: "Benedetta", lanes: ["EXP", "JUNGLE", "ROAM"] },
  { name: "Brody", lanes: ["GOLD"] },
  { name: "Bruno", lanes: ["GOLD"] },
  { name: "Carmilla", lanes: ["ROAM", "EXP"] },
  { name: "Cecilion", lanes: ["MID"] },
  { name: "Chang’e", lanes: ["MID", "GOLD"] },
  { name: "Chou", lanes: ["EXP", "ROAM"] },
  { name: "Chip", lanes: ["ROAM"] },
  { name: "Cici", lanes: ["EXP", "GOLD"] },
  { name: "Clint", lanes: ["GOLD"] },
  { name: "Claude", lanes: ["GOLD", "JUNGLE"] },
  { name: "Cyclops", lanes: ["MID", "JUNGLE"] },
  { name: "Diggie", lanes: ["ROAM"] },
  { name: "Dyrroth", lanes: ["EXP", "JUNGLE"] },
  { name: "Edith", lanes: ["EXP", "ROAM"] },
  { name: "Esmeralda", lanes: ["EXP", "MID"] },
  { name: "Estes", lanes: ["ROAM"] },
  { name: "Eudora", lanes: ["MID", "ROAM"] },
  { name: "Fanny", lanes: ["JUNGLE", "EXP"] },
  { name: "Faramis", lanes: ["ROAM", "MID"] },
  { name: "Floryn", lanes: ["ROAM", "GOLD"] },
  { name: "Franco", lanes: ["ROAM"] },
  { name: "Fredrinn", lanes: ["EXP", "JUNGLE"] },
  { name: "Freya", lanes: ["EXP"] },
  { name: "Gatotkaca", lanes: ["EXP", "ROAM"] },
  { name: "Gloo", lanes: ["EXP", "ROAM"] },
  { name: "Gord", lanes: ["MID"] },
  { name: "Granger", lanes: ["JUNGLE", "GOLD"] },
  { name: "Grock", lanes: ["EXP", "ROAM"] },
  { name: "Guinevere", lanes: ["EXP", "JUNGLE"] },
  { name: "Gusion", lanes: ["JUNGLE", "MID"] },
  { name: "Hanabi", lanes: ["GOLD"] },
  { name: "Hanzo", lanes: ["JUNGLE"] },
  { name: "Harith", lanes: ["MID", "GOLD"] },
  { name: "Harley", lanes: ["JUNGLE", "MID"] },
  { name: "Hayabusa", lanes: ["JUNGLE", "EXP"] },
  { name: "Helcurt", lanes: ["JUNGLE", "EXP"] },
  { name: "Hilda", lanes: ["EXP", "ROAM"] },
  { name: "Hylos", lanes: ["ROAM", "EXP"] },
  { name: "Irithel", lanes: ["GOLD"] },
  { name: "Ixia", lanes: ["GOLD"] },
  { name: "Jawhead", lanes: ["EXP", "ROAM"] },
  { name: "Johnson", lanes: ["ROAM"] },
  { name: "Joy", lanes: ["EXP", "MID"] },
  { name: "Julian", lanes: ["EXP", "MID", "JUNGLE"] },
  { name: "Kadita", lanes: ["ROAM", "MID"] },
  { name: "Kagura", lanes: ["MID"] },
  { name: "Kaja", lanes: ["ROAM", "EXP"] },
  { name: "Karina", lanes: ["JUNGLE"] },
  { name: "Karrie", lanes: ["GOLD", "JUNGLE"] },
  { name: "Khaleed", lanes: ["EXP"] },
  { name: "Khufra", lanes: ["ROAM", "EXP"] },
  { name: "Kimmy", lanes: ["JUNGLE", "GOLD", "MID"] },
  { name: "Lancelot", lanes: ["JUNGLE"] },
  { name: "Lapu-Lapu", lanes: ["EXP"] },
  { name: "Layla", lanes: ["GOLD"] },
  { name: "Leomord", lanes: ["EXP", "JUNGLE"] },
  { name: "Lesley", lanes: ["GOLD", "JUNGLE"] },
  { name: "Ling", lanes: ["JUNGLE"] },
  { name: "Lolita", lanes: ["ROAM"] },
  { name: "Luo Yi", lanes: ["MID", "ROAM"] },
  { name: "Lukas", lanes: ["EXP"] },
  { name: "Lunox", lanes: ["MID", "GOLD"] },
  { name: "Lylia", lanes: ["MID"] },
  { name: "Martis", lanes: ["EXP", "JUNGLE"] },
  { name: "Masha", lanes: ["EXP", "ROAM"] },
  { name: "Mathilda", lanes: ["ROAM", "MID"] },
  { name: "Melissa", lanes: ["GOLD"] },
  { name: "Minotaur", lanes: ["ROAM", "EXP"] },
  { name: "Minsitthar", lanes: ["EXP", "ROAM"] },
  { name: "Miya", lanes: ["GOLD"] },
  { name: "Moskov", lanes: ["GOLD"] },
  { name: "Nana", lanes: ["MID", "ROAM"] },
  { name: "Natalia", lanes: ["ROAM", "JUNGLE"] },
  { name: "Natan", lanes: ["GOLD", "JUNGLE"] },
  { name: "Nolan", lanes: ["JUNGLE", "EXP", "MID"] },
  { name: "Novaria", lanes: ["MID"] },
  { name: "Odette", lanes: ["MID"] },
  { name: "Paquito", lanes: ["EXP", "JUNGLE", "MID"] },
  { name: "Pharsa", lanes: ["MID"] },
  { name: "Phoveus", lanes: ["EXP", "ROAM"] },
  { name: "Popol and Kupa", lanes: ["GOLD", "ROAM"] },
  { name: "Rafaela", lanes: ["ROAM"] },
  { name: "Roger", lanes: ["JUNGLE", "EXP"] },
  { name: "Ruby", lanes: ["EXP", "ROAM"] },
  { name: "Saber", lanes: ["JUNGLE", "EXP", "ROAM"] },
  { name: "Selena", lanes: ["ROAM", "JUNGLE", "MID"] },
  { name: "Silvanna", lanes: ["EXP", "ROAM"] },
  { name: "Sun", lanes: ["EXP", "JUNGLE"] },
  { name: "Suyou", lanes: ["MID"] },
  { name: "Terizla", lanes: ["EXP"] },
  { name: "Thamuz", lanes: ["EXP", "JUNGLE"] },
  { name: "Tigreal", lanes: ["ROAM"] },
  { name: "Uranus", lanes: ["EXP"] },
  { name: "Valentina", lanes: ["MID", "ROAM", "EXP"] },
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

// Step 1: Create a quick lookup map from the heroes array
const heroMap = Object.fromEntries(heroes.map(h => [h.name, h]));

// Step 2: Define counters only with names
const countersRaw = {
  Aamon: ["Phoveus", "Esmeralda", "Yu Zhong", "Lunox", "Kadita", "Lylia", "Brody", "Popol and Kupa", "Clint", "Akai", "Saber", "Karina", "Angela", "Rafaela", "Mathilda"],
  Akai: ["Karrie", "Masha", "Dyrroth", "Valir", "Lunox", "Cecilion", "Claude", "Moskov", "Karina", "Roger", "Diggie", "Khufra"],
  Aldous: ["Phoveus", "Thamuz", "Yu Zhong", "Lunox", "Kadita", "Lylia", "Claude", "Karrie", "Moskov", "Karina", "Akai", "Fanny", "Lolita", "Franco", "Khufra"],
  Alice: ["Esmeralda", "Phoveus", "Yu Zhong", "Valir", "Lunox", "Kadita", "Claude", "Karrie", "Brody", "Gusion", "Saber", "Karina", "Lolita", "Franco", "Khufra"],
  // … more heroes
};

// Step 3: Convert raw names to full hero objects
const counters = Object.fromEntries(
  Object.entries(countersRaw).map(([hero, counterNames]) => [
    hero,
    counterNames.map(name => heroMap[name]).filter(Boolean) // fetch from heroMap
  ])
);

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
