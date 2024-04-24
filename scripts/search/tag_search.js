import { tags } from "../utils/tags.js";
import { majAppareils } from "./majAppareils.js";
import { majUstensils } from "./majUstensiles.js";
import { majIngredients } from "./majIngredients.js";
import { inputSearch } from "./input_search.js";
import { globalSearch } from "./global_search.js";

export function tagSearch(tag, recipes) {
  let recipesFiltred = [...recipes];

  // recipes.forEach((recipe) => {
  //   if (tags === "appliance") {
  //     recipesFiltred = recipes.filter((recipe) =>
  //       recipe.appliance.includes(majAppareil)
  //     );
  //   }
  // });

  let searchTags = { recipesFiltred, tags };
  recipes.forEach((recipe) => {
    if (tags == recipe.appliance) {
      tags.push(majAppareils);
      console.log(tags);

      return recipesFiltred;
    }

    // if (tags === ustensils) return majUstensils;
    // if (tags === ingredients) return majIngredients;

    if (tags.length === 0) return inputSearch;
    console.log(recipe.appliance);
    console.log(recipe.ustensil);
    console.log(recipe.ingredient);
  });
  console.log(searchTags);
  return searchTags;
}
console.log(tags);
