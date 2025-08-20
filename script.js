const heroes = [
    // Exemplary list; retrieve full list and roles from mlbbcounters.com :contentReference[oaicite:1]{index=1}
    { name: "Aamon", role: "Assassin" },
    { name: "Akai", role: "Tank" },
    { name: "Alice", role: "Mage" },
    { name: "Alpha", role: "Fighter" },
    { name: "Alucard", role: "Fighter" },
    { name: "Angela", role: "Support" },
    // … continue with full roster
];

const counters = {
    // Example counter data; ideally sourced and filled per hero
    Aamon: ["Diggie (Support)", "Vale (Mage)", "Gusion (Assassin)"],
    Akai: ["Esmeralda (Mage)", "Chou (Fighter)", "Valir (Mage)"],
    Alice: ["Lolita (Tank)", "Gord (Mage)", "Esmeralda (Mage)"],
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
    const grouped = {
        Marksman: new Set(),
        Fighter: new Set(),
        Mage: new Set(),
        Tank: new Set(),
        Support: new Set(),
        Assassin: new Set()
    };
    selected.forEach(h => {
        if (counters[h]) {
            counters[h].forEach(c => {
                const role = Object.keys(grouped).find(r => c.includes(r)) || "Assassin";
                grouped[role].add(c);
            });
        }
    });
    const resEl = document.getElementById("results");
    resEl.innerHTML = "";
    for (const [role, set] of Object.entries(grouped)) {
        const div = document.createElement("div");
        div.className = "role-group";
        const title = document.createElement("h2");
        title.textContent = role;
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