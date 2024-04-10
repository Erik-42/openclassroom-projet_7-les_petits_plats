// import { getRecips } from "../../scripts/utils/getData.js";

// 1er methode
// export function toggle(type) {
//   switch (type) {
//     case "divIngredients":
//       document.querySelector(`.${type}`).classList.toggle("expanded");
//       document.querySelector(`.divAppliances`).classList.remove("expanded");
//       document.querySelector(`.divUstensils`).classList.remove("expanded");

//       break;
//     case "divAppliances":
//       document.querySelector(`.${type}`).classList.toggle("expanded");
//       document.querySelector(`.divIngredients`).classList.remove("expanded");
//       document.querySelector(`.divUstensils`).classList.remove("expanded");

//       break;
//     case "divUstensils":
//       document.querySelector(`.${type}`).classList.toggle("expanded");
//       document.querySelector(`.divAppliances`).classList.remove("expanded");
//       document.querySelector(`.divIngredients`).classList.remove("expanded");

//       break;
//     default:
//       document.querySelector(`.${type}`).classList.remove("expanded");
//       break;
//   }
// }

// 2eme methode
// /**
//  * toggleDivList - ouvre le div list lorsque que l'élément est click
//  */
// const divIngredient = document.getElementById("#divIngredients");
// const divAppareil = document.getElementById("#divAppareils");
// const divUstensile = document.getElementById("#divUstensiles");
// const list = document.querySelector(".list");

// export const toggleDivList = () => {
//   arrayEvent.forEach((click) => {
//     [divIngredient, divAppareil, divUstensile].forEach((element) => {
//       element.querySelector(".buttonFilter").addEventListener(click, () => {
//         if (list !== `style.display = "none"`) {
//           // On ferme tous les listes
//           for (let i = 0; i < 3; i++) {
//             let list = document.querySelectorAll(".list")[i];
//             list.querySelector(".fa-chevron-up").style.transform =
//               "rotate(180deg)";
//             list.querySelector(list).style.display = "none";
//           }
//
//           if (element === divIngredient) {
//             element.querySelector(
//               "button"
//             ).innerHTML = `<div class="containerInput">
//                 <input type="search" placeholder="Ingrédients"               id="searchIngredients" class="inputFilter" aria-label="Rechercher un ingrédient"   name="searchIngredient">
//                 <span class="loupe fas fa-search"></span>
//               </div>`;
//           } else if (element === divAppareil) {
//             element.querySelector("button").innerHTML =
//               '<input type="search" placeholder="Rechercher un appareil" aria-label="Rechercher un appareil" name="searchAppareil" id="searchAppareil" class="searchInputList">';
//           } else if (element === divUstensile) {
//             element.querySelector("button").innerHTML =
//               '<input type="search" placeholder="Rechercher un ustensile" aria-label="Rechercher un ustensile" name="searchUstensile" id="searchUstensile" class="searchInputList">';
//           }
//           element.querySelector(".fa-chevron-up").style.transform =
//             "rotate(0deg)";
//           element.querySelector("div").style.display = "flex";
//         } else {
//           closeDivList(element);
//         }
//       });
//     });
//   });
// };

// /**
//  * closeDivList - ferme l'element passé
//  * @param  {Array} element élément html du dom
//  */
// const closeDivList = (element) => {
//   element.querySelector(".fa-chevron-up").style.transform = "rotate(180deg)";
//   element.querySelector("ul").style.display = "none";
// };

// const initDataPage = (data) => {
//   toggleDivList();
//   closeDivList();
// };

// 3eme methode
export function toggleDropdown() {
  // const buttonFilter = document.querySelector("buttonFilter");
  // buttonFilter.addEventListener("click", () => {
  //   toggleDropdown();
  // });

  const btnIngredients = document.getElementById("#btnIngredients");
  const listIngredients = document.getElementById("#listIngredients");
  const btnAppliances = document.getElementById("#btnAppliances");
  const listAppliances = document.getElementById("#listAppliances");
  const btnUstensils = document.getElementById("#btnUstensils");
  const listUstensils = document.getElementById("#listUstensils");

  btnIngredients.addEventListener("click", (e) => {
    e.preventDefault();
    if (listIngredients !== classList("show")) {
      document.getElementById("#listIngredients").classList.toggle("show");
      document.getElementById("#listAppliances").classList.remove("show");
      document.getElementById("#listUstensils").classList.remove("show");
    } else {
      document.getElementById("#listIngredients").classList.remove("show");
    }
  });
  console.log(listIngredients);

  btnAppliances.addEventListener("click", (e) => {
    e.preventDefault();
    if (listAppliances !== classList("show")) {
      document.getElementById("#listAppliances").classList.toggle("show");
      document.getElementById("#listUstensils").classList.remove("show");
      document.getElementById("#listIngredients").classList.remove("show");
    } else {
      document.getElementById("#listAppliances").classList.remove("show");
    }
  });

  btnUstensils.addEventListener("click", (e) => {
    e.preventDefault();
    if (listUstensils !== classList("show")) {
      document.getElementById("#listUstensils").classList.toggle("show");
      document.getElementById("#listIngredients").classList.remove("show");
      document.getElementById("#listAppliances").classList.remove("show");
    } else {
      document.getElementById("#listUstensils").classList.remove("show");
    }
  });
}
console.log(toggleDropdown);

// function toggleDropdown() {
//   document.querySelector(".list").classList.toggle("show");
// }
