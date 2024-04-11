import { globalSearch } from "./search/global_search.js";

async function init() {
  globalSearch();
}
document.getElementById("searchInput").addEventListener("input", globalSearch);

init();
