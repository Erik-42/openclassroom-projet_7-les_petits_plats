import { globalSearch } from "./search/global_search.js";
import { inputFilter } from "./search/input_filter.js";
async function init() {
  globalSearch();
}
document.getElementById("searchInput").addEventListener("input", globalSearch);
document
  .getElementById("searchAppliance")
  .addEventListener("input", inputFilter);
document
  .getElementById("searchUstensil")
  .addEventListener("input", inputFilter);
document
  .getElementById("searchIngredients")
  .addEventListener("input", inputFilter);
init();
