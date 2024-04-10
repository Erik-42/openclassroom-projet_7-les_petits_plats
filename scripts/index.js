// import { toggleDropdown } from "../scripts/dropdown/dropdown.js";
// import { getRecipes } from "./utils/getData.js";
// import { recipeTemplate } from "./utils/recipeTemplate.js";

// async function displayData(recipes) {
//   const recipesSection = document.querySelector(".containerCardRecipes");

//   recipes.forEach((recipe) => {
//     const recipeModel = new recipeTemplate(recipe);
//     const cardDOM = recipeModel.cardDOM();
//     recipesSection.appendChild(userCardDOM);
//   });
// }

// async function init() {
//   // Récupère les datas des recettes
//   const { recipes } = await getRecipes();
//   displayData(recipes);
// }

// // affiche la galerie photographe
// export async function displayRecipes(medias, photographerName) {
//   const mediasContainer = document.querySelector(".containerCardRecipes");
//   mediasContainer.innerHTML = "";
//   const mediasCards = [];

//   medias.forEach((media) => {
//     const mediaPage = mediaFactory(media, photographerName, tabindex);
//     const mediaCard = mediaPage.getMediaCardDOM();
//     mediasContainer.appendChild(mediaCard);
//     mediasCards.push(mediaCard);
//     tabindex += 2;
//   });
// }

// init();
