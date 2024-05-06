// export function inputSearch(value, recipes) {
//   // Algorithme V1

//   let recipesFiltred = [...recipes];

//   if (value.length >= 3) {
//     recipesFiltred = recipes.filter(
//       (recipe) =>
//         recipe.name.toLowerCase().match(new RegExp(value, "i")) ||
//         recipe.description.toLowerCase().match(new RegExp(value, "i")) ||
//         recipe.ingredients.some((ingredient) =>
//           ingredient.ingredient.toLowerCase().match(new RegExp(value, "i"))
//         )
//     );
//   }
//   return recipesFiltred;
// }

export function inputSearch(value, recipes) {
  //Algorithme V2
  //deuxième algorithme sans filter, find, map, foreach, findindex, includes, some, etc...

  let recipesFiltred = [...recipes];

  if (value.length >= 3) {
    for (let i = 0; i < recipes.length; i++) {
      const recipe = recipes[i];
      const nameMatch = recipe.name.toLowerCase().match(new RegExp(value, "i"));
      const descriptionMatch = recipe.description
        .toLowerCase()
        .match(new RegExp(value, "i"));
      let ingredientMatch = false;

      console.log(descriptionMatch);
      console.log(nameMatch);

      for (let j = 0; j < recipe.ingredients.length; j++) {
        const ingredient = recipe.ingredients[j];
        if (ingredient.ingredient.toLowerCase().match(new RegExp(value, "i"))) {
          ingredientMatch = true;

          console.log(ingredient);
          console.log(ingredientMatch);
          console.log(recipe.ingredients);

          break;
        }
      }

      if (nameMatch || descriptionMatch || ingredientMatch) {
        recipesFiltred.push(recipe);
      }
    }
  } else {
    recipesFiltred = [...recipes];
  }

  console.log(recipesFiltred);
  return recipesFiltred;
}
