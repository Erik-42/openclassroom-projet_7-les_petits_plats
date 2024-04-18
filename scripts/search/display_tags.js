import { tags } from "../utils/tags.js";
import { globalSearch } from "./global_search.js";
export function displayTags() {
  const liste = document.getElementById("tagList");
  liste.innerHTML = "";
  tags.forEach((tag) => {
    const tagDiv = document.createElement("div");
    tagDiv.className = "tag";
    const tagTitle = document.createElement("span");
    tagTitle.className = "tagTitle";
    tagTitle.innerText = tag.value;
    const tagBtn = document.createElement("span");
    tagBtn.className = "fa fa-xmark tagBtn";
    tagBtn.addEventListener("click", () => {
      //remove tag
      const tagIndex = tags.findIndex(
        (t) => t.type === tag.type && t.value === tag.value
      );
      if (tagIndex >= 0) {
        tags.splice(tagIndex, 1);
        globalSearch();
      }
    });
    tagDiv.appendChild(tagTitle);
    tagDiv.appendChild(tagBtn);
    liste.appendChild(tagDiv);
  });
}
