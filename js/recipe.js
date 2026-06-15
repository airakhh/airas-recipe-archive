document.addEventListener('DOMContentLoaded', async () => {

    const params = new URLSearchParams(window.location.search);
    const recipeId = params.get('id');

    if (!recipeId) {
        console.error("No recipe ID found in URL!");
        return;
    }

    try {
        const response = await fetch('json/recipies.json');
        if (!response.ok) throw new Error("Could not load recipes.json");
        
        const data = await response.json();
        const recipe = data.recipes.find(r => r.id === recipeId);

        if (recipe) {
            document.getElementById('recipe-name').innerText = recipe.name;
            document.getElementById('recipe-tips').innerText = recipe.notes;
            document.getElementById('recipe-link').href = recipe.link;

            
            document.getElementById('recipe-photo').src = `images/${recipe.image}`;

            const listDiv = document.getElementById('ingredients-list');
            listDiv.innerHTML = '';
            
            recipe.ingredients.forEach((ing, index) => {
                const wrapper = document.createElement('div');
                wrapper.innerHTML = `
                    <input type="checkbox" id="ing-${index}" name="ingredients">
                    <label for="ing-${index}">${ing}</label><br>
                `;
                listDiv.appendChild(wrapper);
            });
        } else {
            document.body.innerHTML = "<h1>Recipe not found!</h1>";
        }
    } catch (error) {
        console.error("Error loading recipe:", error);
    }
    if (recipe) {
    
    document.getElementById('recipe-name').innerText = recipe.name;
    document.getElementById('recipe-tips').innerText = recipe.notes;
    
    
    const linkButton = document.getElementById('recipe-link');
    
    
    if (recipe.link && recipe.link !== "#") {
        linkButton.href = recipe.link;
        linkButton.style.display = "inline-block"; 
    } else {
        linkButton.style.display = "none"; 
    }
    }   
});
