import { set } from "../utils/setUstensils.js";
import { majListeAndEvent } from "../utils/majListeAndEvent.js";
export function majUstensils(recipes) {
  const liste = document.getElementById("ustensilsList");
  liste.innerHTML = "";
  set.setUstensils = new Set();
  recipes.forEach((recipe) => {
    recipe.ustensils.forEach((ustensil) => {
      set.setUstensils.add(ustensil.toLowerCase());
    });
  });
  const myUstensilsArray = Array.from(set.setUstensils);
  myUstensilsArray.sort((a, b) => a.localeCompare(b));
  majListeAndEvent(myUstensilsArray, liste, "ustensil");
}
