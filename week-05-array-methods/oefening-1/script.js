const scores = [12, 67, 45, 89, 23, 55, 71, 38, 94, 16];

// Filter: toon alleen scores boven de 50 in #result-filtered
// Map: verdubbel alle scores en toon in #result-map
// Sort: sorteer van laag naar hoog en toon in #result-sorted

const filter = scores.filter(score => score > 50);
const map = scores.map(score => score * 2);
const sort = scores.sort((a, b) => a - b);

document.getElementById('result-filtered').textContent = filter.join(', ');
document.getElementById('result-map').textContent = map.join(', ');
document.getElementById('result-sorted').textContent = sort.join(', ');
