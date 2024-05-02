import { recipes } from "../../assets/data/recipes.js";
import { tags } from "../utils/tags.js";
import { displayRecipes } from "./display_recipes.js";
import { inputSearch } from "./input_search.js";
import { majAppareils } from "./majAppareils.js";
import { majIngredients } from "./majIngredients.js";
import { majUstensils } from "./majUstensiles.js";
import { tagSearch } from "./tag_search.js";
import { displayTags } from "./display_tags.js";

export function globalSearch() {
  displayTags();

  const inputValueSearch = document
    .getElementById("searchInput")
    .value.toLowerCase();
  const allRecipes = [...recipes];
  const recipesFilterByInput = inputSearch(inputValueSearch, allRecipes);
  let recipesFilterByTags = [...recipesFilterByInput];
  tags.forEach((tag) => {
    recipesFilterByTags = tagSearch(tag, recipesFilterByTags);
  });

  // inputFilter();

  if (recipesFilterByTags.length === 0) {
    const noResult = document.getElementById("noResult");
    noResult.textContent = `Aucune recette ne correspond à vos critères... vous pouvez chercher "tarte aux pommes", "poisson", etc.`;
    noResult.classList.remove("hidden");
  } else {
    noResult.classList.add("hidden");
  }

  majIngredients(recipesFilterByTags);
  majAppareils(recipesFilterByTags);
  majUstensils(recipesFilterByTags);
  displayRecipes(recipesFilterByTags);
}
