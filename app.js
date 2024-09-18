// Function to redirect to the specific recipe page
function showRecipe(recipe) {
    // Map the recipe names to the corresponding HTML file names within the 'html' directory
    const recipePages = {
        'spaghetti-carbonara': 'html/spaghetti-carbonara.html',
        'margherita-pizza': 'html/margherita-pizza.html',
        'avocado-toast': 'html/avocado-toast.html',
        'grilled-chicken-salad': 'html/grilled-chicken-salad.html',
        'beef-tacos': 'html/beef-tacos.html',
        'chicken-alfredo-pasta': 'html/chicken-alfredo-pasta.html',
        'vegetable-stir-fry': 'html/vegetable-stir-fry.html',
        'banana-pancakes': 'html/banana-pancakes.html',
        'grilled-salmon': 'html/grilled-salmon.html',
        'chocolate-chip-cookies': 'html/chocolate-chip-cookies.html',
        'caprese-salad': 'html/caprese-salad.html'
    };

    // Get the corresponding HTML page for the selected recipe
    const selectedPage = recipePages[recipe];

    if (selectedPage) {
        // Redirect to the recipe's HTML page in the 'html' directory
        window.location.href = selectedPage;
    } else {
        console.error('Recipe not found: ' + recipe);
    }
}
