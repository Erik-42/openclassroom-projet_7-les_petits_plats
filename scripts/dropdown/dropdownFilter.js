export function toggleIngredients() {
  document.querySelector("#listIngredients").classList.toggle("showList");
  document.querySelector("#listAppliances").classList.remove("showList");
  document.querySelector("#listUstensils").classList.remove("showList");
  document
    .querySelector("#btnIngredients .fas.fa-chevron-down")
    .classList.toggle("rotateUp");
  document
    .querySelector("#btnUstensils .fas.fa-chevron-down")
    .classList.remove("rotateUp");
  document
    .querySelector("#btnAppliances .fas.fa-chevron-down")
    .classList.remove("rotateUp");
}
const btnIngredients = document.querySelector("#btnIngredients");
btnIngredients.addEventListener("click", () => {
  toggleIngredients();
});

export function toggleAppliances() {
  document.querySelector("#listAppliances").classList.toggle("showList");
  document.querySelector("#listIngredients").classList.remove("showList");
  document.querySelector("#listUstensils").classList.remove("showList");
  document
    .querySelector("#btnAppliances .fas.fa-chevron-down")
    .classList.toggle("rotateUp");
  document
    .querySelector("#btnUstensils .fas.fa-chevron-down")
    .classList.remove("rotateUp");
  document
    .querySelector("#btnIngredients .fas.fa-chevron-down")
    .classList.remove("rotateUp");
}
const btnAppliances = document.querySelector("#btnAppliances");
btnAppliances.addEventListener("click", () => {
  toggleAppliances();
});

export function toggleUstensils() {
  document.querySelector("#listUstensils").classList.toggle("showList");
  document.querySelector("#listIngredients").classList.remove("showList");
  document.querySelector("#listAppliances").classList.remove("showList");
  document
    .querySelector("#btnUstensils .fas.fa-chevron-down")
    .classList.toggle("rotateUp");
  document
    .querySelector("#btnAppliances .fas.fa-chevron-down")
    .classList.remove("rotateUp");
  document
    .querySelector("#btnIngredients .fas.fa-chevron-down")
    .classList.remove("rotateUp");
}
const btnUstensils = document.querySelector("#btnUstensils");
btnUstensils.addEventListener("click", () => {
  toggleUstensils();
});

// function rotateChevronIng() {
//   const chevron = document.querySelector(
//     "#btnIngredients .fas.fa-chevron-down"
//   );
//   chevron.classList.toggle("rotateUp");
// }
// function rotateChevronUst() {
//   const chevron = document.querySelector("#btnUstensils .fas.fa-chevron-down");
//   chevron.classList.toggle("rotateUp");
// }
// function rotateChevronApp() {
//   const chevron = document.querySelector("#btnAppliances .fas.fa-chevron-down");
//   chevron.classList.toggle("rotateUp");

// export function tagvisible() {
//   document.querySelector("#listIngredients").classList.toggle("showList");
//   document.querySelector("#listAppliances").classList.remove("showList");
//   document.querySelector("#listUstensils").classList.remove("showList");
// }
// const listP = document.querySelector("#listP");
// listP.addEventListener("click", () => {
//   tagvisible();
// });
