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
  { name: "ChangE", lanes: ["MID", "GOLD"] },
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
  { name: "LapuLapu", lanes: ["EXP"] },
  { name: "Layla", lanes: ["GOLD"] },
  { name: "Leomord", lanes: ["EXP", "JUNGLE"] },
  { name: "Lesley", lanes: ["GOLD", "JUNGLE"] },
  { name: "Ling", lanes: ["JUNGLE"] },
  { name: "Lolita", lanes: ["ROAM"] },
  { name: "LuoYi", lanes: ["MID", "ROAM"] },
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
  { name: "Yss", lanes: ["JUNGLE", "GOLD"] },
  { name: "Yin", lanes: ["EXP", "JUNGLE"] },
  { name: "Yve", lanes: ["MID"] },
  { name: "YuZhong", lanes: ["EXP"] },
  { name: "Zhask", lanes: ["MID"] },
  { name: "Zhuxin", lanes: ["MID"] },
  { name: "Zilong", lanes: ["EXP", "JUNGLE"] }
];

// Step 1: Create a quick lookup map from the heroes array
const heroMap = Object.fromEntries(heroes.map(h => [h.name, h]));

// Step 2: Define counters only with names
const countersRaw = {
  Aamon: ["Saber", "Paquito", "X.Borg", "Gusion", "Hayabusa", "Lancelot", "Karina", "Claude", "Moskov", "Karrie", "Angela", "Rafaela", "Mathilda", "Vale", "Eudora", "Aurora", "Khufra", "Masha", "Ruby", "Dyrroth"],
  Akai: ["Karrie", "Claude", "Valir", "Masha", "Karina", "Roger", "Diggie", "Khufra", "Dyrroth", "Benedetta", "Lunox", "Kaja", "Franco", "Eudora", "Selena", "Gusion", "Baxia", "Tigreal", "Belerick", "Johnson", "Atlas"],
  Aldous: ["Phoveus", "Thamuz", "Yu Zhong", "Lunox", "Kadita", "Lylia", "Claude", "Karrie", "Moskov", "Karina", "Akai", "Fanny", "Lolita", "Franco", "Khufra", "Benedetta", "Minsitthar", "Aurora", "Terizla"],
  Alice: ["Esmeralda", "Phoveus", "Yu Zhong", "Valir", "Lunox", "Kadita", "Claude", "Karrie", "Brody", "Gusion", "Saber", "Karina", "Lolita", "Franco", "Khufra", "Baxia", "Diggie", "Silvanna", "Natalia"],
  Alpha: ["Phoveus", "Esmeralda", "Thamuz", "Lylia", "Lunox", "Kadita", "Claude", "Brody", "Beatrix", "Fanny", "Ling", "Hayabusa", "Franco", "Kaja", "Atlas", "Baxia", "Dyrroth", "Ruby", "Karrie", "Chou", "Selena", "Nana", "Diggie"],
  Alucard: ["Yu Zhong", "Thamuz", "Esmeralda", "Valir", "Kadita", "Lylia", "Claude", "Wanwan", "Brody", "Ling", "Fanny", "Karina", "Atlas", "Khufra", "Franco", "Baxia", "Dyrroth", "Gloo", "Minsitthar"],
  Angela: ["Esmeralda", "Phoveus", "Yu Zhong", "Kadita", "Vale", "Eudora", "Melissa", "Brody", "Beatrix", "Saber", "Karina", "Gusion", "Franco", "Atlas", "Khufra", "Helcurt", "Kaja", "Chou", "Natalia", "Selena", "Baxia", "Lunox"],
  Arlott: ["Dyrroth", "Ruby", "Yu Zhong", "Sun", "Argus", "Lapu-Lapu", "Terizla", "Benedetta", "Lancelot", "Masha", "Kaja", "Franco", "Minsitthar", "Paquito", "Gusion", "Esmeralda"],
  Argus: ["Phoveus", "Esmeralda", "Thamuz", "Valir", "Lunox", "Kadita", "Claude", "Karrie", "Brody", "Karina", "Akai", "Fanny", "Franco", "Kaja", "Atlas", "Baxia", "Dyrroth", "Natalia", "Chou", "Eudora", "Saber"],
  Atlas: ["Karrie", "Masha", "Dyrroth", "Valir", "Lunox", "Kadita", "Claude", "Moskov", "Karina", "Roger", "Diggie", "Lolita", "Baxia", "Gusion", "Saber", "Julian", "Eudora", "Aurora", "Kaja", "Minsitthar", "Natalia", "Wanwan"],
  Aulus: ["Phoveus", "Yu Zhong", "Thamuz", "Valir", "Lylia", "Kadita", "Claude", "Karrie", "Brody", "Fanny", "Ling", "Akai", "Franco", "Atlas", "Baxia", "Dyrroth", "Esmeralda", "Gloo", "Lunox", "Diggie", "Benedetta", "Natalia", "Gusion", "Pharsa"],
  Aurora: ["Esmeralda", "Phoveus", "Yu Zhong", "Kadita", "Lunox", "Kagura", "Claude", "Brody", "Beatrix", "Gusion", "Ling", "Hayabusa", "Diggie", "Franco", "Atlas", "Khufra", "Benedetta", "Natalia", "Chou", "Saber", "Lancelot", "Minsitthar", "Kaja", "Helcurt"],
  Badang: ["Wanwan", "Chou", "Khufra", "Benedetta", "Kaja", "Hayabusa", "Lunox", "Aurora", "Moskov", "YuZhong", "Martis", "Gloo", "Phoveus", "Julian"],
  Balmond: ["Barats", "Jawhead", "Kaja", "Franco", "Dyrroth", "Moskov", "Karrie", "Esmeralda", "Sun", "XBorg", "Vale", "Valir", "Baxia", "Phoveus", "Aurora"],
  Bane: ["Karrie", "Claude", "Wanwan", "Valir", "Nana", "Yve", "Gloo", "Esmeralda", "Thamuz", "Martis", "Kaja", "Chou", "Julian", "Ruby", "Selena", "Minsitthar", "Baxia", "Natalia", "Franco"],
  Barats: ["Karrie", "Claude", "Gloo", "Lunox", "Diggie", "Valir", "Gatocaca", "Akai", "Silvanna", "Sun", "Masha", "Luo Yi", "Natalia", "Chou", "Aurora", "Gusion", "Wanwan", "Franco"],
  Baxia: ["Karrie", "Nana", "Harith", "Lunox", "Gusion", "Gord", "Valir", "Diggie", "Gloo", "Sun", "Masha", "Dyrroth", "Esmeralda", "Lesley", "X.Borg", "Benedetta", "Lylia", "Faramis"],
  Beatrix: ["Grock", "Saber", "Kaja", "Natalia", "Kadita", "Gusion", "Chou", "Benedetta", "Kaja", "Natalia", "Lancelot", "Hayabusa", "Paquito", "Julian", "Aldous", "Aurora", "Johnson", "Eudora", "Lolita", "Franco"],
  Belerick: ["Karrie", "Claude", "Gloo", "Lunox", "Diggie", "Valir", "Gatocaca", "Akai", "Silvanna", "Sun", "Masha", "Dyrroth", "Esmeralda", "Baxia", "Benedetta", "Harley", "X.Borg", "Thamuz", "Irithel", "Helcurt", "Gusion", "Eudora"],
  Benedetta: ["Khufra", "Minsitthar", "Phoveus", "Kaja", "Chou", "Saber", "Natalia", "Akai", "Franco", "Julian", "Eudora", "Aurora", "Gloo", "Esmeralda", "Ruby", "Helcurt", "Zilong", "Hilda", "Brody"],
  Brody: ["Lancelot", "Benedetta", "Natalia", "Saber", "Gusion", "Chou", "Kaja", "Akai", "Khufra", "Hayabusa", "Paquito", "Julian"],
  Bruno: ["Benedetta", "Natalia", "Saber", "Gusion", "Lancelot", "Hayabusa", "Chou", "Kaja", "Khufra", "Grock", "Akai", "Franco"],
  Carmilla: ["Diggie", "Karrie", "Valir", "Nana", "Yve", "Gloo", "Wanwan", "Claude", "Esmeralda", "Thamuz", "Martis", "Kaja", "Chou", "Julian", "Ruby"],
  Cecilion: ["Natalia", "Saber", "Lancelot", "Chou", "Benedetta", "Helcurt", "Ling", "Hayabusa", "Gusion", "Kaja", "Khufra", "Ruby", "Dyrroth"],
  ChangE: ["Natalia", "Saber", "Eudora", "Aurora", "Kadita", "Gusion", "Helcurt", "Ling", "Lancelot", "Hayabusa", "Selena"],
  Chou: ["Franco", "Kaja", "Minsitthar", "Silvanna", "Akai", "Diggie", "Esmeralda", "Karrie", "Paquito", "Khufra", "Gloo"],
  Cici: ["Dyrroth", "Sun", "Argus", "Terizla", "Alpha", "Jawhead", "Barats", "Fredrinn", "Khufra", "Kaja", "Franco", "Minsitthar", "Lolita"],
  Claude: ["Chou", "Natalia", "Hayabusa", "Saber", "Kaja", "Franco", "Phoveus", "Khufra", "Akai", "Grock", "Minsitthar"],
  Clint: ["Lancelot", "Benedetta", "Natalia", "Saber", "Gusion", "Chou", "Kaja", "Akai", "Khufra", "Hayabusa", "Paquito", "Julian"],
  Cyclops: ["Saber", "Natalia", "Lancelot", "Chou", "Helcurt", "Ling", "Benedetta", "Hayabusa", "Gusion", "Khufra"],
  Diggie: ["Natalia", "Helcurt", "Saber", "Gusion", "Kaja", "Franco", "LuoYi", "Esmeralda", "Valentina", "Jawhead", "Akai", "Silvanna", "Chou", "Julian", "Aurora", "Gloo"],
  Dyrroth: ["Guinevere", "Argus", "Saber", "Nana", "Ruby", "Silvanna", "YuZhong", "Badang", "Lunox", "Helcurt", "Jawhead", "Martis"],
  Edith: ["Wanwan", "Karrie", "Benedetta", "Lunox", "Lolita", "Grock", "Aamon", "Harith", "Hayabusa", "Bane", "Roger"],
  Esmeralda: ["Karrie", "Baxia", "Diggie", "Thamuz", "Wanwan", "Lunox", "Valir", "Franco", "Kaja", "Chou", "Selena", "Aurora", "Nana"],
  Estes: ["Baxia", "Natalia", "Saber", "Kaja", "Franco", "Gusion", "Ling", "Fanny", "Harith", "Helcurt", "LuoYi", "Vexana", "Akai", "Atlas", "Jawhead"],
  Eudora: ["Saber", "Natalia", "Lancelot", "Chou", "Helcurt", "Ling", "Benedetta", "Hayabusa", "Gusion", "Khufra", "Paquito", "Julian"],
  Fanny: ["Khufra", "Minsitthar", "Phoveus", "Franco", "Akai", "Kaja", "Ruby", "Saber", "Chou", "Masha", "Jawhead"],
  Faramis: ["Saber", "Eudora", "Selena", "Silvanna", "Franco", "Barats", "Chou", "Akai", "Yin", "Valentina"],
  Floryn: ["Baxia", "Natalia", "Saber", "Kaja", "Saber", "Gusion", "Hayabusa", "Benedetta", "Mathilda", "Jawhead", "Pharsa"],
  Franco: ["Diggie", "Benedetta", "Kagura", "Wanwan", "Natalia", "Lylia", "Chou", "Hayabusa", "Gusion", "Lunox", "Faramis"],
  Fredrinn: ["Baxia", "Nana", "Chou", "Akai", "Selena", "Harith", "Esmeralda", "Claude", "Wanwan", "Gloo", "Lunox"],
  Freya: ["Saber", "Nana", "Chou", "Valir", "Diggie", "Silvanna", "Franco", "Kaja", "Benedetta", "Lancelot", "Akai", "Sun", "Masha"],
  Gatotkaca: ["Karrie", "Claude", "Gloo", "Lunox", "Diggie", "Valir", "Nana", "YuZhong", "Eudora", "Aurora", "Freya", "Zilong"],
  Gloo: ["Dyrroth", "Sun", "Silvanna", "Terizla", "Gatotkaca", "Hylos", "Alpha", "Vexana", "Faramis", "Karrie", "Esmeralda"],
  Gord: ["Saber", "Natalia", "Lancelot", "Chou", "Helcurt", "Ling", "Benedetta", "Hayabusa", "Gusion", "Khufra", "Kaja", "Franco"],
  Granger: ["Chou", "Natalia", "Hayabusa", "Saber", "Kaja", "Franco", "Phoveus", "Khufra", "Akai", "Grock", "Minsitthar", "Lolita"],
  Grock: ["Esmeralda", "Karrie", "Valir", "Franco", "Dyrroth", "Gusion", "Benedetta", "Natalia", "Aurora", "Lylia", "Baxia", "Phoveus", "Hayabusa", "Moskov", "Silvanna", "Sun"],
  Guinevere: ["Chou", "Franco", "Minsitthar", "Silvanna", "Akai", "Diggie", "Esmeralda", "Karrie", "Paquito", "Khufra", "Gloo", "Phoveus", "Badang", "Uranus", "Masha"],
  Gusion: ["Khufra", "Minsitthar", "Phoveus", "Kaja", "Chou", "Saber", "Natalia", "Akai", "Franco", "Julian", "Eudora", "Aurora", "Gloo", "Esmeralda", "Ruby", "Masha"],
  Hanabi: ["Lancelot", "Natalia", "Helcurt", "Franco", "Kaja", "Dyrroth", "Martis", "Hayabusa", "Irithel", "Beatrix", "Bruno", "Saber", "Chou", "Julian", "Aldous", "Grock"],
  Hanzo: ["Eudora", "Layla", "Lesley", "Pharsa", "Miya", "Chou", "Silvanna", "Martis", "Phoveus", "Minsitthar", "Dyrroth", "Clint", "Zilong", "Nana", "Yss", "Natalia", "Saber", "Benedetta", "Diggie", "Valir", "Jawhead", "Kagura", "Sun", "Fanny", "Harley", "Karina", "Yin", "Xavier"],
  Harith: ["Khufra", "Kaja", "Saber", "Chou", "Natalia", "Eudora", "Aurora", "Gusion", "Selena", "Franco", "LuoYi", "Esmeralda", "Minsitthar", "Baxia"],
  Harley: ["Saber", "Natalia", "Kaja", "Chou", "Gusion", "Akai", "Selena", "Pharsa", "LuoYi", "Aurora", "Khufra", "Minsitthar", "Eudora", "Kadita", "Jawhead", "Ruby", "Lolita"],
  Hayabusa: ["Khufra", "Minsitthar", "Phoveus", "Kaja", "Chou", "Franco", "Saber", "Natalia", "Akai", "Grock", "Sun", "Lunox", "Aurora", "Baxia", "Kadita"],
  Helcurt: ["Khufra", "Minsitthar", "Phoveus", "Franco", "Akai", "Kaja", "Saber", "Chou", "Natalia", "Gusion", "LuoYi", "YuZhong", "Pharsa", "Aurora", "Diggie", "Esmeralda", "Ruby", "Dyrroth", "Gatotkaca"],
  Hilda: ["Karrie", "Dyrroth", "Sun", "Kaja", "Granger", "Chou", "Baxia", "Irithel", "Thamuz", "Wanwan", "Franco"],
  Hylos: ["Karrie", "Diggie", "Wanwan", "Lunox", "Esmeralda", "Benedetta", "Gusion", "YuZhong", "Claude", "XBorg", "Valir", "Masha", "Dyrroth", "Alpha"],
  Irithel: ["Lolita", "Floryn", "Natan", "Diggie", "Wanwan", "Alice", "Masha", "Gloo", "Alucard", "Yi Sun-shin", "Argus", "Minotaur", "Gord", "Popol and Kupa", "Aulus", "Kadita", "Melissa", "Cici", "Carmilla"],
  Ixia: ["Eudora", "Wanwan", "Fanny", "Barats", "Kaja", "Franco", "Natalia", "Ling", "Lolita", "Tigreal", "Benedetta", "Chou", "Hayabusa", "Saber", "Gusion", "Julian"],
  Jawhead: ["Yi Sun-shin", "Julian", "Hayabusa", "Fredrinn", "Arlott", "Phoveus", "Badang", "Zhuxin", "Harith", "Kimmy", "Granger", "Karrie", "Kalea", "Floryn", "Uranus", "Baxia", "Gloo", "Gatotkaca"],
  Johnson: ["Popol and Kupa", "Gusion", "Aurora", "Benedetta", "Valir", "Natalia", "Zhask", "Esmeralda", "Martis", "LuoYi", "Kadita", "Silvanna", "Akai", "Khufra"],
  Joy: ["Khufra", "Minsitthar", "Franco", "Kaja", "Kalea", "Moskov", "Phoveus", "LuoYi", "Jawhead", "Eudora", "Aurora", "Saber", "Benedetta", "Akai", "Gloo", "Silvanna"],
  Julian: ["Yve", "Valir", "Phoveus", "Natalia", "Eudora", "Aurora", "Saber", "Franco", "Kaja", "Benedetta", "Khufra", "Minsitthar", "Hayabusa", "Gusion", "Ruby"],
  Kadita: ["Chang'e", "Lunox", "Valir", "Wanwan", "Fanny", "Diggie", "Minsitthar", "Eudora", "Aurora", "Saber", "Chou", "Lylia"],
  Kagura: ["Cyclops", "Saber", "Silvanna", "Karina", "Diggie", "Valir", "Nana", "Chou", "Kaja", "Hayabusa", "Franco", "Lancelot"],
  Kaja: ["Minsitthar", "Hayabusa", "Benedetta", "Jawhead", "Baxia", "Aurora", "Akai", "Grock", "Nana", "Chou", "Diggie", "Phoveus", "Gusion", "Saber", "Natalia"],
  Karina: ["Hylos", "Aurora", "Khufra", "Zilong", "Lancelot", "Fanny", "Saber", "Barats", "Franco", "Eudora", "Lylia", "Gloo", "Martis", "Jawhead"],
  Karrie: ["Minsitthar", "Eudora", "Baxia", "Hayabusa", "Aurora", "Lancelot", "Selena", "Kaja", "Chou", "Gusion", "Saber", "Natalia", "Franco"],
  Khaleed: ["Phoveus", "Nana", "Diggie", "Akai", "Lunox", "Lylia", "Gusion", "Karrie", "Wanwan", "Claude", "Gatotkaca", "Silvanna", "Masha"],
  Khufra: ["X.Borg", "Benedetta", "Gusion", "YuZhong", "Claude", "Lunox", "Pharsa", "Wanwan", "Karrie", "Saber", "Dyrroth", "Chou", "Esmeralda", "Lylia"],
  Kimmy: ["Kagura", "Lolita", "Gusion", "Saber", "Lancelot", "Natalia", "Hayabusa", "Chou", "Julian", "Eudora", "Akai", "Khufra", "Baxia", "Irithel", "Belerick", "Franco", "Blade Armor"],
  Lancelot: ["Khufra", "Minsitthar", "Phoveus", "Kaja", "Chou", "Saber", "Natalia", "Akai", "Franco", "Julian", "Eudora", "Aurora", "Gloo", "Esmeralda", "Ruby"],
  "Lapu-Lapu": ["Sun", "Benedetta", "Chou", "Terizla", "Dyrroth", "YuZhong", "Arlott", "Kaja"],
  Layla: ["Ling", "YuZhong", "Pharsa", "Mathilda", "Aurora", "Eudora", "Selena", "Chou", "Franco", "Kaja", "Helcurt", "Natalia", "Saber", "Gusion", "Lancelot", "Clint", "Popol and Kupa", "Brody", "Lolita"],
  Leomord: ["Benedetta", "Nana", "Jawhead", "Aurora", "Valir", "Minsitthar", "Pharsa", "Hayabusa", "Franco", "Khufra", "Kaja", "Chou", "Fredrinn", "Alucard", "Martis"],
  Lesley: ["Clint", "Popol and Kupa", "Brody", "Lolita", "Lancelot", "Gatotkaca", "Esmeralda", "Zilong", "Benedetta", "Aurora", "Helcurt", "Kaja", "Saber", "Franco", "Natalia", "Gusion"],
  Ling: ["Silvanna", "Guinevere", "Karrie", "Eudora", "Phoveus", "Akai", "Franco", "Chou", "Khufra", "Minsitthar", "Ruby", "Kaja", "Jawhead", "Baxia", "Saber"],
  Lolita: ["Irithel", "Natan", "Diggie", "Wanwan", "Alice", "Masha", "Gloo", "Alucard", "Yi Sun-shin", "Argus", "Minotaur", "Gord", "Popol and Kupa", "Aulus", "Kadita", "Melissa", "Cici", "Carmilla"],
  LuoYi: ["Saber", "Gusion", "Natalia", "Chou", "Hayabusa", "Ling", "Fanny", "Julian", "Aurora", "Eudora", "Lancelot", "Helcurt", "Khufra", "Akai", "Jawhead", "Uranus"],
  Lukas: ["Freya", "Akai", "Eudora", "Saber", "Fanny", "Harley", "Aamon", "Minsitthar", "Belerick", "Uranus", "Valir", "Gord", "Julian"],
  Lunox: ["Kadita", "Aurora", "Helcurt", "Lancelot", "Gusion", "Jawhead", "Saber", "Barats", "Kaja", "Franco", "Lolita", "Natalia", "Chou", "Akai", "Baxia", "Eudora"],
  Lylia: ["Arlott", "Baxia", "Cyclops", "Gusion", "Minsitthar", "Saber", "Helcurt", "Natalia", "Lancelot", "Chou", "Kaja", "Franco", "Julian", "Eudora", "Gloo"],
  Martis: ["Benedetta", "Kaja", "Chou", "Julian", "Eudora", "Aurora", "Lolita", "Gloo", "Esmeralda", "Ruby", "Diggie", "Silvanna", "Franco", "Masha"],
  Masha: ["Saber", "Chou", "Kaja", "Eudora", "Aurora", "Natalia", "Lancelot", "Gusion", "Khufra", "Minsitthar", "Paquito", "Julian", "Franco", "Akai", "Phoveus"],
  Mathilda: ["Akai", "Chou", "Kaja", "Franco", "Khufra", "Minsitthar", "Phoveus", "Gusion", "Saber", "Natalia", "Eudora", "Aurora", "Benedetta", "Esmeralda", "Ruby", "Wanwan"],
  Melissa: ["Lancelot", "Natalia", "Saber", "Gusion", "Chou", "Kaja", "Akai", "Khufra", "Hayabusa", "Paquito", "Julian", "Benedetta", "Eudora", "Aurora", "Franco", "Lolita"],
  Minotaur: ["Karrie", "Claude", "Wanwan", "Lunox", "Diggie", "Valir", "Nana", "Yu Zhong", "Eudora", "Aurora", "Freya", "Zilong", "Esmeralda", "Gloo", "Julian", "Martis"],
  Minsitthar: ["Khufra", "Minsitthar", "Phoveus", "Kaja", "Chou", "Saber", "Natalia", "Akai", "Franco", "Julian", "Eudora", "Aurora", "Gloo", "Esmeralda", "Ruby", "Dyrroth", "Gusion"],
  Miya: ["Natalia", "Saber", "Gusion", "Lancelot", "Hayabusa", "Chou", "Kaja", "Khufra", "Benedetta", "Franco", "Akai", "Eudora", "Aurora", "Clint", "Brody"],
  Moskov: ["Lancelot", "Natalia", "Saber", "Gusion", "Chou", "Kaja", "Akai", "Khufra", "Hayabusa", "Paquito", "Julian", "Benedetta", "Eudora", "Aurora", "Franco", "Lolita"],
  Nana: ["Saber", "Eudora", "Aurora", "Natalia", "Helcurt", "Gusion", "Franco", "Kaja", "Lancelot", "Chou", "Selena", "Julian", "Vale", "Gloo", "Akai", "Atlas", "Baxia"],
  Natalia: ["Jawhead", "Saber", "Rafaela", "Eudora", "Layla", "Gord", "Miya", "Yi Sun-shin", "Hayabusa", "Khufra", "Popol and Kupa", "Hylos", "Silvanna", "Franco", "Kaja"],
  Natan: ["Saber", "Eudora", "Gusion", "Helcurt", "Natalia", "Chou", "Kaja", "Franco", "Ling", "Fanny", "Aurora", "Julian", "Lolita", "Hayabusa", "Phoveus"],
  Nolan: ["Khufra", "Minsitthar", "Phoveus", "Kaja", "Saber", "Eudora", "Akai", "Franco", "Gloo", "Beatrix", "Pharsa", "Karrie"],
  Novaria: ["Saber", "Natalia", "Lancelot", "Chou", "Helcurt", "Ling", "Hayabusa", "Gusion", "Julian", "Benedetta", "Kaja", "Franco", "Khufra", "Akai"],
  Odette: ["Saber", "Natalia", "Helcurt", "Fanny", "Ling", "Lancelot", "Benedetta", "Kaja", "Franco", "Chou", "Khufra", "Minsitthar", "Paquito", "Julian"],
  Paquito: ["Yu Zhong", "Ruby", "Dyrroth", "Gloo", "Esmeralda", "Sun", "Lapu-Lapu", "Benedetta", "Valir", "Terizla"],
  Pharsa: ["Saber", "Natalia", "Lancelot", "Chou", "Helcurt", "Ling", "Benedetta", "Hayabusa", "Gusion", "Khufra", "Paquito", "Julian", "Eudora", "Aurora"],
  Phoveus: ["Dyrroth", "Sun", "Silvanna", "Terizla", "Gatotkaca", "Hylos", "Alpha", "Vexana", "Faramis", "Karrie", "Esmeralda", "Wanwan", "Claude", "Kimmy", "Irithel"],
  "Popol and Kupa": ["Natalia", "Saber", "Eudora", "Aurora", "Gusion", "Hayabusa", "Julian", "Lancelot", "Chou", "Kaja", "Franco", "Akai", "Khufra"],
  Rafaela: ["Natalia", "Helcurt", "Saber", "Gusion", "Lancelot", "Kaja", "Franco", "Claude", "Dyrroth", "Kadita", "Aurora", "Baxia", "Pharsa", "Akai"],
  Roger: ["Akai", "Khufra", "Kaja", "Franco", "Masha", "Saber", "Gusion", "Luo Yi", "Pharsa", "Aurora", "Natalia", "Baxia", "Chou", "Julian", "Gatotkaca", "Melissa"],
  Ruby: ["Phoveus", "Baxia", "Dyrroth", "Sun", "Argus", "Lapu-Lapu", "Terizla", "Benedetta", "Lancelot", "Karrie", "Nana", "Popol and Kupa", "Gusion", "Valir", "Alpha", "Aurora"],
  Saber: ["Khufra", "Minsitthar", "Franco", "Akai", "Kaja", "Ruby", "Chou", "Masha", "Jawhead", "Grock", "Dyrroth", "Pharsa", "Luo Yi", "Aurora", "Yu Zhong", "Melissa"],
  Selena: ["Natalia", "Hilda", "Ling", "Harley", "Akai", "Saber", "Lancelot", "Fanny", "Franco", "Helcurt", "Kaja", "Diggie", "Khufra", "Kagura", "Chou"],
  Silvanna: ["Karrie", "Lunox", "Valir", "Gusion", "Pharsa", "Saber", "Chou", "Natalia", "Aurora", "Kaja", "Franco", "Akai", "Diggie", "Masha"],
  Sun: ["Baxia", "Irithel", "Aurora", "Martis", "Valir", "Natalia", "Karrie", "Franco", "Eudora", "Odette", "Paquito", "X.Borg", "Chou", "Moskov", "Wanwan"],
  Suyou: ["Edith", "Valir", "Minsitthar", "Phoveus", "Franco", "Kaja", "Aurora", "Eudora", "Akai", "Saber", "Chou", "Natalia", "Benedetta"],
  Wanwan: ["Natalia", "Saber", "Kaja", "Franco", "Khufra", "Lolita", "Gloo", "Eudora", "Akai", "Chou", "Julian", "Phoveus", "Hayabusa", "Granger", "Minsitthar", "Aurora"],
  "X.Borg": ["Phoveus", "Thamuz", "YuZhong", "Valir", "Lunox", "Kadita", "Karrie", "Claude", "Brody", "Karina", "Akai", "Fanny", "Franco", "Atlas", "Khufra"],
  Yss: ["Saber", "Johnson", "Argus", "Jawhead", "Gusion", "Alucard", "Fanny", "Hayabusa", "Lancelot", "Helcurt", "Akai", "Khufra"],
  YuZhong: ["Nana", "Esmeralda", "Aurora", "Wanwan", "Diggie", "Chou", "Selena", "Franco", "Kaja", "Baxia", "Karrie", "Lapu-Lapu"]
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
