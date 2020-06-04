// Functions for generating list of fish HTML and displaying in browser below this line

// Function to show only holy fish in the browser
const showHolyFish = () => {
  const fishObjectArray = mostHolyFish();

  for (const fishObject of fishObjectArray) {
    const fishHTMLRepresentation = fishConverter(fishObject);
    const fishArticleElement = document.querySelector(".fishList");
    fishArticleElement.innerHTML += fishHTMLRepresentation;
  }
}

// Function to show only soldier fish in the browser
const showSoldierFish = () => {
  const fishObjectArray = soldierFish();

  for (const fishObject of fishObjectArray) {
    const fishHTMLRepresentation = fishConverter(fishObject);
    const fishArticleElement = document.querySelector(".fishList");
    fishArticleElement.innerHTML += fishHTMLRepresentation;
  }
}

// Function to show only common fish in the browser
const showBasicFish = () => {
  const fishObjectArray = nonHolyFish();

  for (const fishObject of fishObjectArray) {
    const fishHTMLRepresentation = fishConverter(fishObject);
    const fishArticleElement = document.querySelector(".fishList");
    fishArticleElement.innerHTML += fishHTMLRepresentation;
  }
}

// Invoke the show functions
const fishList = () => {
  showHolyFish();
  showSoldierFish();
  showBasicFish();
}