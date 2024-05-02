import { tags } from "./tags.js";
import { globalSearch } from "../search/global_search.js";
export function majListeAndEvent(tab, liste, typeTag) {
  tab.forEach((value) => {
    const elem = document.createElement("p");
    elem.className = "listP";
    elem.innerText = value;
    elem.addEventListener("click", () => {
      if (
        tags.findIndex((t) => t.type === typeTag && t.value === value) == -1
      ) {
        tags.push({
          type: typeTag,
          value: value,
        });
        globalSearch();
      }
    });
    liste.appendChild(elem);
  });
}
