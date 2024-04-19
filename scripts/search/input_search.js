import { tags } from "../utils/tags.js";

export function inputSearch(value, recipes) {
  //sur deuxième branche interdit filter, find, map, foreach, findindex, includes, etc...
  let recipesFiltred = [...recipes];

  if (value.length >= 3 || tags) {
    // console.log("filtre by input", value);
    recipesFiltred = recipes.filter((recipe) =>
      recipe.name.match(new RegExp(value, "i"))
    );
  } else if (value.length >= 3) {
    recipesFiltred = recipes.filter((recipe) =>
      recipe.appliance.match(new RegExp(value, "i"))
    );
  } else if (value.length >= 3) {
    recipesFiltred = recipes.filter((recipe) =>
      recipe.ustensils.match(new RegExp(value, "i"))
    );
  } else if (value.length >= 3) {
    recipesFiltred = recipes.filter((recipe) =>
      recipe.ingredients.match(new RegExp(value, "i"))
    );
  }
  console.log(recipesFiltred);
  console.log(recipes);

  return recipesFiltred;
}
