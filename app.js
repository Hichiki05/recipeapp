// Function to show the recipe details in the modal
function showRecipe(recipe) {
    // Get the modal and the recipe details container
    const modal = document.getElementById('recipe-modal');
    const recipeDetails = document.getElementById('recipe-details');
    console.log('Button clicked: ' + recipe);
    // Clear any existing content
    recipeDetails.innerHTML = '';

    // Recipe data (you can customize these details for each recipe)
    const recipes = {
        'spaghetti-carbonara': {
            name: 'Spaghetti Carbonara',
            ingredients: [
                '200g spaghetti',
                '100g pancetta',
                '2 large eggs',
                '50g grated Parmesan cheese',
                '2 garlic cloves, peeled and chopped',
                'Salt and pepper to taste'
            ],
            instructions: [
                'Cook the spaghetti in boiling salted water.',
                'Fry the pancetta until crispy, then add garlic and cook for a minute.',
                'Beat the eggs in a bowl, then stir in the grated Parmesan.',
                'Drain the spaghetti and combine with the pancetta and garlic.',
                'Remove from heat and quickly mix in the egg and cheese mixture.',
                'Serve with extra grated Parmesan on top.'
            ]
        },
        'margherita-pizza': {
            name: 'Margherita Pizza',
            ingredients: [
                '1 pizza dough',
                '200g tomato sauce',
                '150g mozzarella cheese, sliced',
                'Fresh basil leaves',
                '2 tbsp olive oil',
                'Salt to taste'
            ],
            instructions: [
                'Preheat the oven to 250°C (480°F).',
                'Roll out the pizza dough on a baking sheet.',
                'Spread the tomato sauce over the dough.',
                'Arrange the mozzarella slices evenly on top.',
                'Bake for 10-12 minutes until the crust is golden and cheese is bubbling.',
                'Top with fresh basil leaves and drizzle with olive oil before serving.'
            ]
        },
        'avocado-toast': {
            name: 'Avocado Toast',
            ingredients: [
                '2 slices of whole grain bread',
                '1 ripe avocado',
                '1 tbsp lemon juice',
                'Salt and pepper to taste',
                'Chili flakes (optional)',
                'Olive oil for drizzling'
            ],
            instructions: [
                'Toast the slices of bread to your preference.',
                'Mash the avocado in a bowl with lemon juice, salt, and pepper.',
                'Spread the mashed avocado onto the toast.',
                'Sprinkle chili flakes if desired, and drizzle with a little olive oil.',
                'Serve immediately.'
            ]
        },
        'grilled-chicken-salad': {
            name: 'Grilled Chicken Salad',
            ingredients: [
                '2 chicken breasts, grilled and sliced',
                'Mixed salad greens',
                'Cherry tomatoes, halved',
                'Cucumber, sliced',
                'Feta cheese, crumbled',
                'Olive oil and balsamic vinegar for dressing'
            ],
            instructions: [
                'Grill the chicken breasts and slice them thinly.',
                'Arrange the salad greens, tomatoes, and cucumbers in a large bowl.',
                'Top with grilled chicken slices and crumbled feta.',
                'Drizzle with olive oil and balsamic vinegar.',
                'Toss gently and serve immediately.'
            ]
        },
        'beef-tacos': {
        name: 'Beef Tacos',
        ingredients: [
            '500g ground beef',
            '1 onion, finely chopped',
            '2 cloves garlic, minced',
            '1 tbsp taco seasoning',
            '1 can (400g) diced tomatoes',
            '8 small tortillas',
            '1 cup shredded lettuce',
            '1 cup grated cheddar cheese',
            'Sour cream and salsa for serving'
        ],
        instructions: [
            'In a skillet, cook the ground beef with the onion and garlic until browned.',
            'Drain excess fat and stir in taco seasoning.',
            'Add diced tomatoes and simmer for 5 minutes.',
            'Warm the tortillas according to package instructions.',
            'Fill each tortilla with the beef mixture, lettuce, and cheese.',
            'Top with sour cream and salsa, if desired. Serve immediately.'
        ]
    },
    'chicken-alfredo-pasta': {
        name: 'Chicken Alfredo Pasta',
        ingredients: [
            '2 chicken breasts, cooked and sliced',
            '200g fettuccine pasta',
            '2 tbsp butter',
            '2 cloves garlic, minced',
            '1 cup heavy cream',
            '1 cup grated Parmesan cheese',
            'Salt and pepper to taste',
            'Chopped parsley for garnish'
        ],
        instructions: [
            'Cook the fettuccine pasta according to package instructions. Drain and set aside.',
            'In a skillet, melt the butter and cook the garlic until fragrant.',
            'Add the heavy cream and bring to a simmer.',
            'Stir in the Parmesan cheese until melted and smooth.',
            'Add the cooked chicken and pasta, tossing to coat with the sauce.',
            'Season with salt and pepper. Garnish with chopped parsley before serving.'
        ]
    },
    'vegetable-stir-fry': {
        name: 'Vegetable Stir-fry',
        ingredients: [
            '2 tbsp vegetable oil',
            '1 bell pepper, sliced',
            '1 carrot, sliced',
            '1 cup broccoli florets',
            '1 cup snap peas',
            '2 cloves garlic, minced',
            '1 tbsp ginger, minced',
            '2 tbsp soy sauce',
            '1 tbsp hoisin sauce',
            '1 tbsp sesame seeds (optional)',
            'Cooked rice for serving'
        ],
        instructions: [
            'Heat the vegetable oil in a large pan or wok over high heat.',
            'Add the garlic and ginger, cooking for 30 seconds.',
            'Add the bell pepper, carrot, broccoli, and snap peas. Stir-fry for 5-7 minutes.',
            'Stir in the soy sauce and hoisin sauce. Cook for another 2 minutes.',
            'Sprinkle with sesame seeds, if using. Serve over cooked rice.'
        ]
    },
    'banana-pancakes': {
        name: 'Banana Pancakes',
        ingredients: [
            '1 cup all-purpose flour',
            '2 tbsp sugar',
            '2 tsp baking powder',
            '1/2 tsp salt',
            '1 cup milk',
            '1 egg',
            '2 tbsp melted butter',
            '2 ripe bananas, mashed',
            'Butter or oil for cooking'
        ],
        instructions: [
            'In a bowl, whisk together the flour, sugar, baking powder, and salt.',
            'In another bowl, mix the milk, egg, and melted butter.',
            'Combine the wet and dry ingredients, then fold in the mashed bananas.',
            'Heat a skillet over medium heat and grease with butter or oil.',
            'Pour 1/4 cup of batter for each pancake onto the skillet. Cook until bubbles form on the surface, then flip and cook until golden brown on the other side.',
            'Serve warm with maple syrup or your favorite toppings.'
        ]
    },
    'grilled-salmon': {
        name: 'Grilled Salmon',
        ingredients: [
            '4 salmon fillets',
            '2 tbsp olive oil',
            '2 tbsp lemon juice',
            '2 cloves garlic, minced',
            '1 tbsp fresh dill or 1 tsp dried dill',
            'Salt and pepper to taste',
            'Lemon wedges for serving'
        ],
        instructions: [
            'Preheat your grill to medium-high heat.',
            'In a bowl, mix together the olive oil, lemon juice, garlic, dill, salt, and pepper.',
            'Brush the salmon fillets with the mixture.',
            'Grill the salmon for 4-5 minutes per side, or until cooked through and easily flaked with a fork.',
            'Serve with lemon wedges.'
        ]
    },
    'chocolate-chip-cookies': {
        name: 'Chocolate Chip Cookies',
        ingredients: [
            '1 cup (2 sticks) unsalted butter, softened',
            '1 cup granulated sugar',
            '1 cup packed brown sugar',
            '2 large eggs',
            '1 tsp vanilla extract',
            '3 cups all-purpose flour',
            '1 tsp baking soda',
            '1/2 tsp baking powder',
            '1/2 tsp salt',
            '1 1/2 cups chocolate chips'
        ],
        instructions: [
            'Preheat the oven to 350°F (175°C). Line baking sheets with parchment paper.',
            'In a bowl, cream together the butter, granulated sugar, and brown sugar until light and fluffy.',
            'Beat in the eggs one at a time, then stir in the vanilla extract.',
            'In another bowl, whisk together the flour, baking soda, baking powder, and salt.',
            'Gradually add the dry ingredients to the wet ingredients. Stir in the chocolate chips.',
            'Drop rounded tablespoons of dough onto the prepared baking sheets.',
            'Bake for 10-12 minutes, or until the edges are golden brown. Cool on the baking sheets for a few minutes before transferring to wire racks to cool completely.'
        ]
    },
    'caprese-salad': {
        name: 'Caprese Salad',
        ingredients: [
            '4 large ripe tomatoes, sliced',
            '1 ball (200g) fresh mozzarella cheese, sliced',
            '1/4 cup fresh basil leaves',
            '2 tbsp olive oil',
            '1 tbsp balsamic vinegar',
            'Salt and pepper to taste'
        ],
        instructions: [
            'Arrange the tomato slices and mozzarella slices on a serving platter, alternating them.',
            'Tuck the basil leaves between the tomato and mozzarella slices.',
            'Drizzle with olive oil and balsamic vinegar.',
            'Season with salt and pepper to taste.',
            'Serve immediately or chill briefly before serving.'
        ]
    }
    };

    // Get the selected recipe's data
    const selectedRecipe = recipes[recipe];

    // Create the HTML content for the recipe details
    let recipeContent = `<h3>${selectedRecipe.name}</h3>`;
    recipeContent += '<h4>Ingredients:</h4><ul>';
    selectedRecipe.ingredients.forEach(ingredient => {
        recipeContent += `<li>${ingredient}</li>`;
    });
    recipeContent += '</ul><h4>Instructions:</h4><ol>';
    selectedRecipe.instructions.forEach(step => {
        recipeContent += `<li>${step}</li>`;
    });
    recipeContent += '</ol>';

    // Insert the recipe details into the modal
    recipeDetails.innerHTML = recipeContent;

    // Show the modal
    modal.style.display = 'block';
}

// Function to close the modal
function closeModal() {
    const modal = document.getElementById('recipe-modal');
    modal.style.display = 'none';
}

// Close the modal if the user clicks outside of it
window.onclick = function(event) {
    const modal = document.getElementById('recipe-modal');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
};
