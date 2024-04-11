export function majIngredients(recipes) {
  const liste = document.getElementById("ingredientsList");
  liste.innerHTML = "";
  const myIngredients = new Set();
  recipes.forEach((recipe) => {
    recipe.ingredients.forEach((ingredient) => {
      myIngredients.add(ingredient.ingredient);
    });
  });
  const myIngredientsArray = Array.from(myIngredients);
  myIngredientsArray.sort((a, b) => a.localeCompare(b));
  myIngredientsArray.forEach((ingredient) => {
    liste.innerHTML += `<p class="listP ingredient">${ingredient}</p>`;
  });
}
