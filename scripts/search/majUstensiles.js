export function majUstensils(recipes) {
  const liste = document.getElementById("ustensilsList");
  liste.innerHTML = "";
  const myUstensils = new Set();
  recipes.forEach((recipe) => {
    recipe.ustensils.forEach((ustensil) => {
      myUstensils.add(ustensil.toLowerCase());
    });
  });
  // console.log(myUstensils);
  const myUstensilsArray = Array.from(myUstensils);
  myUstensilsArray.sort((a, b) => a.localeCompare(b));
  myUstensilsArray.forEach((ustensil) => {
    liste.innerHTML += `<p class="listP">${ustensil}</p>`;
  });
  // console.log(myUstensilsArray);
}
