import { globalSearch } from "./global_search.js";
import { tags } from "../utils/tags.js";
import { set } from "../utils/setIngredients.js";
import { majListeAndEvent } from "../utils/majListeAndEvent.js";
export function majIngredients(recipes) {
  const liste = document.getElementById("ingredientsList");
  liste.innerHTML = "";
  set.setIngredients = new Set();
  recipes.forEach((recipe) => {
    recipe.ingredients.forEach((ingredient) => {
      set.setIngredients.add(ingredient.ingredient.toLowerCase());
    });
  });
  const myIngredientsArray = Array.from(set.setIngredients);
  myIngredientsArray.sort((a, b) => a.localeCompare(b));
  majListeAndEvent(myIngredientsArray, liste, "ingredient");
}
