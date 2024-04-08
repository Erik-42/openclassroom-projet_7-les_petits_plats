import { sortMedia } from "../../utils/sortMedia.js";
import { dropDownEvent } from "../../scripts/elements/dropdownSort/dropdownSort.js";

export function dropDownEvent() {
  const nameBtn = document.getElementById("nameBtn");
  const dropdownBtn = document.getElementById("dropdownSelector");
  dropdownBtn.addEventListener("click", () => {
    dropdownMenu();
  });

  const btnPop = document.getElementById("popularity");
  btnPop.addEventListener("click", (e) => {
    e.preventDefault();
    nameBtn.innerText = "Popularité";
    sortMedia("popularity");
  });

  const btnDate = document.getElementById("date");
  btnDate.addEventListener("click", (e) => {
    e.preventDefault();
    nameBtn.innerText = "Date";
    sortMedia("date");
  });

  const btnTitre = document.getElementById("titre");
  btnTitre.addEventListener("click", (e) => {
    e.preventDefault();
    nameBtn.innerText = "Titre";
    sortMedia("title");
  });
}

function dropdownMenu() {
  document.getElementById("dropdownSelector__list").classList.toggle("show");
}
async function init() {
  dropDownEvent();
}

init();

import {
  displayMedias,
  medias,
  photographer,
} from "../../pages/photographer/photographerPage.js";

function clearHTMLMedia(htmlMedia) {
  while (htmlMedia.firstChild) {
    htmlMedia.removeChild(htmlMedia.lastChild);
  }
}

export async function sortMedia(value) {
  const sectionMedia = document.querySelector(".photograph__gallery");
  clearHTMLMedia(sectionMedia);

  switch (value) {
    case "popularity":
      medias.sort((a, b) => b.likes - a.likes);
      break;

    case "date":
      medias.sort((a, b) => new Date(b.date) - new Date(a.date));
      break;

    case "title":
      medias.sort((a, b) => a.title.localeCompare(b.title));
      break;
  }
  displayMedias(medias, photographer.name);
}
