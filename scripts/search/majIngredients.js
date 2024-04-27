import { globalSearch } from "./global_search.js";
import { tags } from "../utils/tags.js";

export function majIngredients(recipes) {
  const liste = document.getElementById("ingredientsList");
  liste.innerHTML = "";
  const myIngredients = new Set();
  recipes.forEach((recipe) => {
    recipe.ingredients.forEach((ingredient) => {
      myIngredients.add(ingredient.ingredient.toLowerCase());
    });
  });
  const myIngredientsArray = Array.from(myIngredients);
  myIngredientsArray.sort((a, b) => a.localeCompare(b));
  myIngredientsArray.forEach((ingredient) => {
    const elem = document.createElement("p");
    elem.className = "listP";
    elem.innerText = ingredient;
    elem.addEventListener("click", () => {
      if (
        tags.findIndex(
          (t) => t.type === "ingredient" && t.value === ingredient
        ) == -1
      ) {
        tags.push({
          type: "ingredient",
          value: ingredient,
        });
        globalSearch();
      }
    });
    liste.appendChild(elem);
  });
}
