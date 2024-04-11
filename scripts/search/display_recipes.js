import { recipeTemplate } from "../utils/recipeTemplate.js";

export function displayRecipes(recipes) {
  const containerCardRecipes = document.querySelector(".containerCardRecipes");
  containerCardRecipes.innerHTML = "";
  const infosNbRecettes = document.getElementById("nbRecipes");
  infosNbRecettes.innerText = `${recipes.length} recettes`;
  recipes.forEach((recipe) => {
    const recipeModel = new recipeTemplate(recipe);
    const recipeCardDOM = recipeModel.cardDOM();
    containerCardRecipes.appendChild(recipeCardDOM);
  });
}
