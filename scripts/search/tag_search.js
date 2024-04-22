import { tags } from "../utils/tags.js";
import { majAppareil } from "./majAppareil.js";
import { majUstensils } from "./majUstensiles.js";
import { majIngredients } from "./majIngredients.js";

export function tagSearch(tag, recipes) {
  let recipesFiltred = [...recipes];

  recipes.forEach((tags) => {
    if (tags === "appliance") {
      recipesFiltred = recipes.filter((recipe) =>
        recipe.appliance.includes(majAppareil)
      );
    }
  });

  let appliancesTags = { recipesFiltred, majAppareil, tags };
  recipes.forEach((recipe) => {
    if (
      majAppareil.includes(recipe.appliance) &&
      !tags.includes(recipe.appliance)
    ) {
      tags.push(recipe.appliance);
    }
    if (tags.length === 0) return majAppareil;
  })(recipesFiltred);
  return appliancesTags;
}
