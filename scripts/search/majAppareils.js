import { set } from "../utils/setAppliances.js";
import { majListeAndEvent } from "../utils/majListeAndEvent.js";
export function majAppareils(recipes) {
  const liste = document.getElementById("appliancesList");
  liste.innerHTML = "";

  set.setAppliances = new Set();
  recipes.forEach((recipe) => {
    set.setAppliances.add(recipe.appliance.toLowerCase());
  });

  const myAppliancesArray = Array.from(set.setAppliances);
  myAppliancesArray.sort((a, b) => a.localeCompare(b));
  majListeAndEvent(myAppliancesArray, liste, "appliance");
}
