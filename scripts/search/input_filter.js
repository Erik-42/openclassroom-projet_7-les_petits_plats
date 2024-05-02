import { set as setA } from "../utils/setAppliances.js";
import { set as setU } from "../utils/setUstensils.js";
import { set as setI } from "../utils/setIngredients.js";
import { majListeAndEvent } from "../utils/majListeAndEvent.js";

export function inputFilter(e) {
  const balise = e.target;
  if (balise.id == "searchAppliance") {
    const liste = document.getElementById("appliancesList");
    liste.innerHTML = "";
    const myAppliancesArray = Array.from(setA.setAppliances);
    const myAppliancesFiltred = myAppliancesArray.filter((a) =>
      a.toLowerCase().match(new RegExp(balise.value, "i"))
    );
    myAppliancesFiltred.sort((a, b) => a.localeCompare(b));
    majListeAndEvent(myAppliancesFiltred, liste, "appliance");
    // console.log(myAppliancesFiltred);
  } else if (balise.id == "searchUstensil") {
    const liste = document.getElementById("ustensilsList");
    liste.innerHTML = "";
    const myUstensilsArray = Array.from(setU.setUstensils);
    const myUstensilsFiltred = myUstensilsArray.filter((a) =>
      a.toLowerCase().match(new RegExp(balise.value, "i"))
    );
    myUstensilsFiltred.sort((a, b) => a.localeCompare(b));
    majListeAndEvent(myUstensilsFiltred, liste, "ustensil");
  } else {
    const liste = document.getElementById("ingredientsList");
    liste.innerHTML = "";
    const myIngredientsArray = Array.from(setI.setIngredients);
    const myIngredientsFiltred = myIngredientsArray.filter((a) =>
      a.toLowerCase().match(new RegExp(balise.value, "i"))
    );
    myIngredientsFiltred.sort((a, b) => a.localeCompare(b));
    majListeAndEvent(myIngredientsFiltred, liste, "ingredient");
  }
}
