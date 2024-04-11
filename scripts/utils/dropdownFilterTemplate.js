export function dropdownFilterTemplate(dataFilter) {
  const {
    id,
    appliance,
    ustensils: [],
    ingredients: [ingredient],
  } = dataFilter;
  function filterDOM() {
    const cardRecipeStructure = document.getElementById("divFilters");
    filterStructure.innerHTML = `
    <div id="divIngredients" class="divList" tabindex="0">
              <button id="btnIngredients" class="buttonFilter">
                <div class="containerButton">
                  <span class="buttonTitle">Ingredients</span>
                  <span class="fas fa-chevron-down"></span>
                </div>
              </button>
              <ul id="listIngredients" class="list">
                <div class="containerInput">
                  <input
                    type="search"
                    placeholder="Ingrédients"
                    id="searchIngredients"
                    class="inputFilter"
                    aria-label="Rechercher un ingrédient"
                    name="searchIngredient"
                  />
                  <span class="loupe fas fa-search">${ingredients}</span>
                </div>
              </ul>
            </div>
            <div id="divAppliances" class="divList" tabindex="0">
              <button id="btnAppliances" class="buttonFilter">
                <div class="containerButton">
                  <span class="buttonTitle">Appareil</span>
                  <span class="fas fa-chevron-down"></span>
                </div>
              </button>
              <ul id="listAppliances" class="list">
                <div class="containerInput">
                  <input
                    type="search"
                    placeholder="Appareils"
                    id="searchAppliance"
                    class="inputFilter"
                    aria-label="Rechercher un appareil"
                    name="searchAppliance"
                  />
                  <span class="loupe fas fa-search"></span>
                </div>
              </ul>
            </div>

            <div id="divUstensils" class="divList" tabindex="0">
              <button id="btnUstensils" class="buttonFilter">
                <div class="containerButton">
                  <span class="buttonTitle">Ustensiles</span>
                  <span class="fas fa-chevron-down"></span>
                </div>
              </button>
              <ul id="listUstensils" class="list">
                <div class="containerInput">
                  <input
                    type="search"
                    placeholder="Ustensiles"
                    id="searchUstensil"
                    class="inputFilter"
                    aria-label="Rechercher un ingédient"
                    name="searchUstensil"
                  />
                  <span class="loupe fas fa-search"></span>
                </div>
              </ul>
            </div>
            `;
    return filterStructure;
  }
  return {
    id,
    appliance,
    ustensils,
    ingredients: [ingredient, quantity, unit],
    filterDOM,
  };
}
