export async function getRecipes() {
  const localeURL = "./assets/data/recipes.js";

  try {
    const response = await fetch(localeURL);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Erreur lors du chargement des données", error);
  }
  console.log(localeURL);
}
