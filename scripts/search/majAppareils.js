import { globalSearch } from "./global_search.js";
import { tags } from "../utils/tags.js";

export function majAppareils(recipes) {
  const liste = document.getElementById("appliancesList");
  liste.innerHTML = "";

  const myAppliances = new Set();
  recipes.forEach((recipe) => {
    myAppliances.add(recipe.appliance.toLowerCase());
  });

  const myAppliancesArray = Array.from(myAppliances);
  myAppliancesArray.sort((a, b) => a.localeCompare(b));
  myAppliancesArray.forEach((appliance) => {
    const elem = document.createElement("p");
    elem.className = "listP";
    elem.innerText = appliance;
    elem.addEventListener("click", () => {
      if (
        tags.findIndex(
          (t) => t.type === "appliance" && t.value === appliance
        ) == -1
      ) {
        tags.push({
          type: "appliance",
          value: appliance,
        });
        globalSearch();
      }
    });
    liste.appendChild(elem);
  });
}
