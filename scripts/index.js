import { getRecipes } from "./utils/getData.js";
import { recipeTemplate } from "./utils/recipeTemplate.js";

async function displayData(recipes) {
  const recipesSection = document.querySelector(".containerCardRecipes");

  recipes.forEach((recipe) => {
    const recipeModel = new recipeTemplate(recipe);
    const cardDOM = recipeModel.cardDOM();
    recipesSection.appendChild(userCardDOM);
  });
}

async function init() {
  // Récupère les datas des recettes
  const { recipes } = await getRecipes();
  displayData(recipes);
}

init();
