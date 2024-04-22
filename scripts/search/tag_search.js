import { tags } from "../utils/tags.js";
import { majAppareil } from "./majAppareil.js";
import { majUstensils } from "./majUstensiles.js";
import { majIngredients } from "./majIngredients.js";
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

  let appliancesTags = { recipesFiltred, tags };
  recipes.forEach((recipe) => {
    if (tags == recipe.appliance) {
      tags.push(recipe.appliance);
      // recipesFiltred = recipes.filter((tag) =>
      //   tag.match(new RegExp(value, "i"))
      // );
    }
    if (tags.length === 0) return recipesFiltred;
  });
  console.log(appliancesTags);
  return appliancesTags;
}
console.log(tags);
