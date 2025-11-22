const cards = document.querySelectorAll(".mushroom-guide .card");
const seasonalFilter = document.getElementById("season");
const edibleFilter = document.getElementById("edible");
const noResultsMatches = document.querySelector(".no-matches");

const currentFilters = {
  season: "all",
  edible: "all",
};

cards.forEach((card, index) => {
  const mushroomId = index + 1;
  card.style.viewTransitionName = `mushroom-card-${mushroomId}`;
});

function updateFilters(filterSelector) {
  const filterName = filterSelector.name;
  filterSelector.addEventListener("change", (e) => {
    currentFilters[filterName] = e.target.value;
    if (!document.startViewTransition()) {
      filterCards();
      return;
    }
    document.startViewTransition(() => filterCards());
  });
}

function filterCards() {
  let hasVisibleCards = false;
  cards.forEach((card) => {
    const season = card.querySelector("[data-season]").dataset.season;
    const edible = card.querySelector("[data-edible]").dataset.edible;

    const matchesSeason =
      currentFilters.season === "all" || season === currentFilters.season;

    const matchesEdible =
      currentFilters.edible === "all" || edible === currentFilters.edible;

    if (matchesSeason && matchesEdible) {
      card.hidden = false;
      hasVisibleCards = true;
    } else {
      card.hidden = true;
    }

    if (!hasVisibleCards) {
      noResultsMatches.hidden = false;
    } else {
      noResultsMatches.hidden = true;
    }
  });
}

updateFilters(seasonalFilter);
updateFilters(edibleFilter);

enableFIltering();

function enableFIltering() {
  seasonalFilter.removeAttribute("hidden");
  edibleFilter.removeAttribute("hidden");
}
