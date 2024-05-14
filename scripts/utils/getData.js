import { recipes } from "../../assets/data/recipes.js";

// URL de l'API, à remplacer par l'URL réelle de votre API ex: https://example.com/api/recipes
const API_URL = '#';

export async function getRecipes() {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error(`Network response was not ok: ${response.statusText}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Erreur lors du chargement des données des recettes depuis l'API:", error);
    // Retourne les données locales en cas d'erreur
    return recipes;
  }
}
