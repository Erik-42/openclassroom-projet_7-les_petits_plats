import { globalSearch } from "./global_search.js";
import { tags } from "../utils/tags.js";

export function majUstensils(recipes) {
  const liste = document.getElementById("ustensilsList");
  liste.innerHTML = "";
  const myUstensils = new Set();
  recipes.forEach((recipe) => {
    recipe.ustensils.forEach((ustensil) => {
      myUstensils.add(ustensil.toLowerCase());
    });
  });
  const myUstensilsArray = Array.from(myUstensils);
  myUstensilsArray.sort((a, b) => a.localeCompare(b));
  myUstensilsArray.forEach((ustensil) => {
    const elem = document.createElement("p");
    elem.className = "listP";
    elem.innerText = ustensil;
    elem.addEventListener("click", () => {
      if (
        tags.findIndex((t) => t.type === "ustensil" && t.value === ustensil) ==
        -1
      ) {
        tags.push({
          type: "ustensil",
          value: ustensil,
        });
        globalSearch();
      }
    });
    liste.appendChild(elem);
  });
}
