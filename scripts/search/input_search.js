export function inputSearch(value, recipes) {
  //sur deuxième branche interdit filter, find, map, foreach, findindex, includes, etc...
  let recipesFiltred = [...recipes];
  if (value.length >= 3) {
    // console.log("filtre by input", value);
    recipesFiltred = recipes.filter((recipe) =>
      recipe.name.match(new RegExp(value, "i"))
    );
  }
  // console.log(recipesFiltred);
  return recipesFiltred;
}
