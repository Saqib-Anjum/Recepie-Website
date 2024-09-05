const recipes = [
    {
        title: "Chocolate Cake",
        category: "dessert",
        image: "https://i.pinimg.com/736x/37/46/9a/37469aadfa7d76da305c746763656d55.jpg",
        link: "chocolate-cake.html"
    },
    {
        title: "Grilled Chicken",
        category: "main",
        image: "https://i.pinimg.com/736x/ae/2f/03/ae2f03af0180d096ef54948100adf451.jpg",
        link: "grilled-chicken-details.html"
    },
    {
        title: "Chocolate Cake",
        category: "dessert",
        image: "https://i.pinimg.com/736x/37/46/9a/37469aadfa7d76da305c746763656d55.jpg",
        link: "chocolate-cake.html"
    },
    {
        title: "Grilled Chicken",
        category: "main",
        image: "https://i.pinimg.com/736x/ae/2f/03/ae2f03af0180d096ef54948100adf451.jpg",
        link: "grilled-chicken-details.html"
    },
];

// Function to display recipe cards
function displayRecipes(filteredRecipes) {
    const recipeContainer = document.getElementById('recipe-container');
    recipeContainer.innerHTML = '';

    filteredRecipes.forEach(recipe => {
        const recipeCard = `
            <div class="recipe-card">
                <img src="${recipe.image}" alt="${recipe.title}">
                <h3>${recipe.title}</h3>
                <a href="${recipe.link}">View Recipe</a>
            </div>
        `;
        recipeContainer.insertAdjacentHTML('beforeend', recipeCard);
    });
}

// Filter functionality
const searchBar = document.getElementById('search-bar');
const categoryFilter = document.getElementById('category-filter');

searchBar.addEventListener('input', filterRecipes);
categoryFilter.addEventListener('change', filterRecipes);

function filterRecipes() {
    const searchQuery = searchBar.value.toLowerCase();
    const category = categoryFilter.value;

    const filteredRecipes = recipes.filter(recipe => {
        const matchesTitle = recipe.title.toLowerCase().includes(searchQuery);
        const matchesCategory = category === 'all' || recipe.category === category;

        return matchesTitle && matchesCategory;
    });

    displayRecipes(filteredRecipes);
}

// Initial display of recipes
displayRecipes(recipes);



document.addEventListener("DOMContentLoaded", () => {
    const mobileMenu = document.getElementById("mobile-menu");
    const navList = document.querySelector("header nav ul");

    mobileMenu.addEventListener("click", () => {
        navList.classList.toggle("active");
        mobileMenu.classList.toggle("active");
    });
});


document.addEventListener("DOMContentLoaded", () => {
    const recipeList = document.getElementById("recipeList");
    const searchBar = document.getElementById("searchBar");
    const filterCategory = document.getElementById("filterCategory");

    const displayRecipes = (filteredRecipes) => {
        recipeList.innerHTML = "";
        filteredRecipes.forEach((recipe) => {
            const recipeItem = document.createElement("div");
            recipeItem.classList.add("recipe-item");
            recipeItem.innerHTML = `
                <img src="${recipe.image}" alt="${recipe.title}">
                <h3>${recipe.title}</h3>
                <button onclick="viewRecipe('${recipe.title}')">View Recipe</button>
            `;
            recipeList.appendChild(recipeItem);
        });
    };

    displayRecipes(recipes);

    const filterRecipes = () => {
        const searchText = searchBar.value.toLowerCase();
        const category = filterCategory.value;
        const filteredRecipes = recipes.filter(recipe => {
            const isCategoryMatch = category === "all" || recipe.category === category;
            const isSearchMatch = recipe.title.toLowerCase().includes(searchText);
            return isCategoryMatch && isSearchMatch;
        });
        displayRecipes(filteredRecipes);
    };

    searchBar.addEventListener("input", filterRecipes);
    filterCategory.addEventListener("change", filterRecipes);
});

function viewRecipe(recipeTitle) {
    const recipe = recipes.find(r => r.title === recipeTitle);
    if (recipe) {
        localStorage.setItem("selectedRecipe", JSON.stringify(recipe));
        window.location.href = "recipe-details.html";
    }
}



