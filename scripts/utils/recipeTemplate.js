export function recipeTemplate(dataRecipe) {
  const {
    id,
    image,
    name,
    time,
    description,
    appliance,
    ustensils,
    ingredients,
  } = dataRecipe;

  const picture = `./assets/images_recipes/${image}`;

  function cardDOM() {
    const cardRecipeStructure = document.createElement("div");
    const ingredientsMap = ingredients.map((ingredient) =>
      ingredientsDOM(ingredient)
    );
    cardRecipeStructure.innerHTML = `
        <div class="cardRecipe">
          <div class="recipeBanner">
            <img src="${picture}" alt="${name}" />
            <div class="preperTime">${time}min</div>
          </div>
          <div class="containerRecipe">
            <h3 class="recipeTitle">${name}</h3>
            <h4>Recette</h4>
            <div class="descriptionRecipe">
              <p>${description}</p>
            </div>
            <h4>Ingredients</h4>
            <div class="ingredientList">
            ${ingredientsMap.join("")}
            </div>
          </div>
        </div>`;

    return cardRecipeStructure;
  }
  function ingredientsDOM(ingredient) {
    return `
    <div class="ingredient">
                <h5 class="nameIngredient">${
                  ingredient.ingredient ? ingredient.ingredient : ""
                }</h5>
                <p class="qteIngredient">${
                  ingredient.quantity ? ingredient.quantity : ""
                } ${ingredient.unit ? ingredient.unit : ""}</p>
              </div>
              `;
  }

  return {
    id,
    image,
    name,
    time,
    description,
    appliance,
    ustensils,
    ingredients,
    cardDOM,
    ingredientsDOM,
  };
}
