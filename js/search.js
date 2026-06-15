
const recipes = [
    // Sweet
    { name: "Matcha Tiramisu", url: "recipe.html?id=matcha-tiramisu" },
    { name: "Classic Tiramisu", url: "recipe.html?id=classic-tiramisu" },
    { name: "Sweet Potato Cake", url: "recipe.html?id=sweet-potato-cake" },
    { name: "Strawberries & Cream Cake", url: "recipe.html?id=strawberries-cream-cake" },
    { name: "Chocolate Chip Cookies", url: "recipe.html?id=chocolate-chip-cookies" },
    { name: "Cream Cheese Frosting", url: "recipe.html?id=cream-cheese-frosting" },
    { name: "Baked Oats", url: "recipe.html?id=baked-oats" },
    // Savory
    { name: "Korean Garlic Buns", url: "recipe.html?id=korean-garlic-buns" },
    { name: "Spicy Red Pasta", url: "recipe.html?id=spicy-red-pasta" },
    { name: "Caesar Salad Sauce", url: "recipe.html?id=caesar-salad-sauce" },
    { name: "Ranch", url: "recipe.html?id=ranch" },
    { name: "Spicy Potato", url: "recipe.html?id=spicy-potato" },
    { name: "Turkish Pasta", url: "recipe.html?id=turkish-pasta" },
    { name: "Pretzels", url: "recipe.html?id=pretzels" }
];

document.addEventListener('DOMContentLoaded', () => {
    const searchBar = document.getElementById('searchBar');
    const resultsList = document.getElementById('search-results');

    if (searchBar) {
        searchBar.addEventListener('input', (e) => {
            const term = e.target.value.toLowerCase();
            resultsList.innerHTML = '';
            if (term.length > 0) {
                const filtered = recipes.filter(r => r.name.toLowerCase().includes(term));
                filtered.forEach(r => {
                    const li = document.createElement('li');
                    li.innerHTML = `<a href="${r.url}" class="text-decoration-none" style="color: #ff7a00;">${r.name}</a>`;
                    li.classList.add('p-2', 'border-bottom');
                    resultsList.appendChild(li);
                });
            }
        });
    }
});