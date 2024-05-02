export function tagSearch(tag, recipes) {
  let recipesFiltred = [...recipes];
  if (tag.type == "ingredient") {
    recipesFiltred = recipesFiltred.filter((recipe) =>
      recipe.ingredients.some(
        (ingredient) =>
          ingredient.ingredient.toLowerCase() === tag.value.toLowerCase()
      )
    );
  } else if (tag.type == "appliance") {
    recipesFiltred = recipesFiltred.filter(
      (recipe) => recipe.appliance.toLowerCase() === tag.value.toLowerCase()
    );
  } else {
    recipesFiltred = recipesFiltred.filter((recipe) =>
      recipe.ustensils.some(
        (ustensil) => ustensil.toLowerCase() === tag.value.toLowerCase()
      )
    );
  }

  return recipesFiltred;
}
