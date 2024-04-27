export function inputFilter(value, recipes) {
  //sur deuxième branche interdit filter, find, map, foreach, findindex, includes, etc...
  let recipesFiltred = [...recipes];

  if (value.length >= 3) {
    recipesFiltred = recipes.filter(
      (recipe) =>
        recipe.name.toLowerCase().match(new RegExp(value, "i")) ||
        recipe.description.toLowerCase().match(new RegExp(value, "i")) ||
        recipe.ingredients.some((ingredient) =>
          ingredient.ingredient.toLowerCase().match(new RegExp(value, "i"))
        )
    );
  }

  return recipesFiltred;
}
