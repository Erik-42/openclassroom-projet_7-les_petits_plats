import { recipes } from "../../assets/data/recipes.js";
import { tags } from "../utils/tags.js";
import { displayRecipes } from "./display_recipes.js";
import { inputSearch } from "./input_search.js";
import { majAppareil } from "./majAppareil.js";
import { majIngredients } from "./majIngredients.js";
import { majUstensils } from "./majUstensiles.js";
import { tagSearch } from "./tag_search.js";
import { displayTags } from "./display_tags.js";

export function globalSearch() {
  displayTags();
  const inputValue = document.getElementById("searchInput").value;
  const allRecipes = [...recipes];
  const recipesFilterByInput = inputSearch(inputValue, allRecipes);
  let recipesFilterByTags = [...recipesFilterByInput];
  tags.forEach((tag) => {
    recipesFilterByTags = tagSearch(tag, recipesFilterByTags);
  });
  majIngredients(recipesFilterByTags);
  majAppareil(recipesFilterByTags);
  majUstensils(recipesFilterByTags);
  displayRecipes(recipesFilterByTags);
}
