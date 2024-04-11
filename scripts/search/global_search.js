import { recipes } from "../../assets/data/recipes.js";
import { tags } from "../utils/tags.js";
import { displayRecipes } from "./display_recipes.js";
import { inputSearch } from "./input_search.js";
import { majAppareil } from "./majAppareil.js";
import { majIngredients } from "./majIngredients.js";
import { majUstensiles } from "./majUstensiles.js";
import { tagSearch } from "./tag_search.js";

export function globalSearch() {
  console.log("recherche");
  const inputValue = document.getElementById("searchInput").value;
  const allRecipes = [...recipes];
  const recipesFilterByInput = inputSearch(inputValue, allRecipes);
  let receipesFilterByTags = [...recipesFilterByInput];
  tags.forEach((tag) => {
    receipesFilterByTags = tagSearch(tag, receipesFilterByTags);
  });
  majIngredients(receipesFilterByTags);
  majAppareil(receipesFilterByTags);
  majUstensiles(receipesFilterByTags);
  displayRecipes(recipes);
}
