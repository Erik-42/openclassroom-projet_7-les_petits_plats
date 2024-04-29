export function inputFilter(
  value,
  recipes,
  appliances,
  ustensils,
  ingredients
) {
  // const inputValueFilter = document.getElementById("inputFilter").value;
  // const itemFilterByInput = inputFilter(inputValueFilter, allRecipes);
  // let itemsFilterByTags = [...itemFilterByInput];
  // tags.forEach((tag) => {
  //   itemsFilterByTags = tagSearch(tag, itemsFilterByTags);
  // });

  let recipesFiltred = [...recipes];

  if (value.length >= 1) {
    recipesFiltred = recipes.filter(
      (recipe) =>
        recipe.appliance.toLowerCase().match(new RegExp(value, "i")) ||
        recipe.ustensils.some((ustensil) =>
          ustensil.ustensil.toLowerCase().match(new RegExp(value, "i"))
        ) ||
        recipe.ingredients.some((ingredient) =>
          ingredient.ingredient.toLowerCase().match(new RegExp(value, "i"))
        )
    );
  }

  return recipesFiltred;
}
