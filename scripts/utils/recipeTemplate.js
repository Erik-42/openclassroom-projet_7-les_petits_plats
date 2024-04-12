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

  const picture = `../../assets/images_recipes/${image}`;

  function cardDOM() {
    const cardRecipeStructure = document.createElement("div");
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
            <div class="ingredientsList">
              <div class="ingredient">
                <h5 class="nameIngredient">${ingredients[0].ingredient}</h5>
                <p class="qteIngredient">${ingredients[0].quantity} ${ingredients[0].unit}</p>
              </div>
             
            </div>
          </div>
        </div>`;

    // const ingredientsList = document.querySelector(".ingredientsList");
    // ingredients.forEach((ingredient) => {
    //   const divIngredients = document.createElement("div");
    //   divIngredients.classList("ingredient");

    //   const h5Name = document.createElement("h5");
    //   h5Name.classList("nameIngredient");
    //   h5Name.textContent = `${ingredients[0].ingredient}`;

    //   divIngredients.appendChild(h5Name);

    //   if (ingredient.quantity !== null && ingredient.quantity !== undefined) {
    //     const pQteIngredient = document.createElement("p");
    //     pQteIngredient.classList("qteIngredient");
    //     pQteIngredient.textContent = `${ingredients[0].quantity}`;

    //     if (ingredient.unit !== null && ingredient.unit !== undefined) {
    //       pQteIngredient.textContent = `${ingredients[0].quantity} ${ingredients[0].unit}`;
    //     }
    //     divIngredients.appendChild(pQteIngredient);
    //   }
    //   ingredientsList.appendChild(divIngredients);
    // });

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
    ingredients,
    cardDOM,
  };
}
