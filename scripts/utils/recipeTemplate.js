export function recipeTemplate(data) {
  const {
    id,
    image,
    name,
    time,
    description,
    appliance,
    ustensils,
    ingredients: [ingredient, quantity, unit],
  } = data;

  const picture = `../../assets/images_recipes/${image}`;

  function cardDOM() {
    const cardRecipeStructure = document.getElementById("containerCardRecipes");
    cardRecipeStructure.innerHTML = `
               <div class="cardRecipe">
          <div class="recipeBanner">
            <img src="${picture}" alt="${name}" />
            <div class="preperTime">${time}</div>
          </div>
          <div class="containerRecipe">
            <h3 class="recipeTitle">${name}</h3>
            <h4>Recette</h4>
            <div class="descriptionRecipe">
              <p>${description}</p>
            </div>
            <h4>Ingredients</h4>
            <div class="ingredientsList">
              <div class="ingredient">
                <h5 class="nameIngredient">${ingredient}</h5>
                <p class="qteIngredient">${quantity} ${unit}</p>
              </div>
              <div class="ingredient">
                <h5 class="nameIngredient">${ingredient}</h5>
                <p class="qteIngredient">${quantity} ${unit}</p>
              </div>
              <div class="ingredient">
                <h5 class="nameIngredient">${ingredient}</h5>
                <p class="qteIngredient">${quantity} ${unit}</p>
              </div>
              <div class="ingredient">
                <h5 class="nameIngredient">${ingredient}</h5>
                <p class="qteIngredient">${quantity} ${unit}</p>
              </div>
              <div class="ingredient">
                <h5 class="nameIngredient">${ingredient}</h5>
                <p class="qteIngredient">${quantity} ${unit}</p>
              </div>
              <div class="ingredient">
                <h5 class="nameIngredient">${ingredient}</h5>
                <p class="qteIngredient">${quantity} ${unit}</p>
              </div>
            </div>
          </div>
        </div>`;

    return cardRecipeStructure;
  }
  return {
    id,
    image,
    name,
    time,
    description,
    appliance,
    ustensils,
    ingredients: [ingredient, quantity, unit],
    cardDOM,
  };
}
