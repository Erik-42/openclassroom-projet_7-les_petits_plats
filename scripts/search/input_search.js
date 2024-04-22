import { tags } from "../utils/tags.js";
import { majAppareil } from "./majAppareil.js";
import { majIngredients } from "./majIngredients.js";
import { majUstensils } from "./majUstensiles.js";

export function inputSearch(value, recipes) {
  //sur deuxième branche interdit filter, find, map, foreach, findindex, includes, etc...
  let recipesFiltred = [...recipes];

  if (value.length >= 3 || tags) {
    // console.log("filtre by input", value);
    recipesFiltred = recipes.filter((recipe) =>
      recipe.name.match(new RegExp(value, "i"))
    );
  }
  // if (
  //  recipe.name.toLowerCase().match(new RegExp(value, "i")) ||
  //   recipe.description.toLowerCase().match(new RegExp(value, "i")) ||
  //   recipe.appliance.toLowerCase().match(new RegExp(value, "i")) ||
  //   recipe.ustensils.find((ingredient) => {
  //     return ingredient.ingredient.toLowerCase().match(new RegExp(value, "i"));
  //   }) ||
  //   recipe.ingredients.find((ingredient) => {
  //     return ingredient.ingredient.toLowerCase().match(new RegExp(value, "i"));
  //   }) != undefined
  // ) {
  //   recipesFiltred = recipes.filter((recipe) =>
  //     recipe.description.toLowerCase.match(new RegExp(value, "i"))
  //   );
  // }

  console.log(recipesFiltred);
  console.log(recipes);

  if (recipesFiltred.length === 0) {
    const noResult = document.getElementById("noResult");
    noResult.textContent = `Aucune recette ne correspond à vos critères... vous pouvez chercher "tarte aux pommes", "poisson", etc.`;
    noResult.classList.remove("hidden");
  } else {
    noResult.classList.add("hidden");
  }
  return recipesFiltred;
}
