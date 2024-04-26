import { tags } from "../utils/tags.js";
import { majAppareils } from "./majAppareils.js";
import { majUstensils } from "./majUstensiles.js";
import { majIngredients } from "./majIngredients.js";
import { inputSearch } from "./input_search.js";
import { globalSearch } from "./global_search.js";

export function tagSearch(tag, recipes) {
  let recipesFiltred = [...recipes];
  console.log(tag.type);
  if (tag.type == "ingredient") {
    recipesFiltred = recipesFiltred.filter((recipe) =>
      recipe.ingredients.some(
        (ingredient) =>
          ingredient.ingredient.toLowerCase() === tag.value.toLowerCase()
      )
    );
  } else if (tag.type == "appliance") {
    recipesFiltred = recipesFiltred.filter(
      (recipe) => recipe.appliance.toLowerCase() === tag.value.toLowerCase()
    );
  } else {
    recipesFiltred = recipesFiltred.filter((recipe) =>
      recipe.ustensils.some(
        (ustensil) => ustensil.toLowerCase() === tag.value.toLowerCase()
      )
    );
  }
  // recipes.forEach((recipe) => {
  //   if (tags === "appliance") {
  //     recipesFiltred = recipes.filter((recipe) =>
  //       recipe.appliance.includes(majAppareil)
  //     );
  //   }
  // });

  // let searchTags = { recipesFiltred, tags };
  // recipes.forEach((recipe) => {
  //   if (tags == recipe.appliance) {
  //     tags.push(recipe.appliance);
  //     // console.log(tags);

  //     return recipesFiltred;
  //   }

  //   // if (tags == recipe.ustensil) return recipesFiltred;
  //   // if (tags == recipe.ingredient) return recipesFiltred;

  //   if (tags.length === 0) return inputSearch;
  //   // console.log(recipe.appliance);
  //   // console.log(recipe.ustensil);
  //   // console.log(recipe.ingredient);
  // });
  // // console.log(globalSearch);
  // // console.log(searchTags);
  // globalSearch();
  // return searchTags;
  return recipesFiltred;
}
