// A function for generating a list of fish HTML and displaying it in the browser

// const fishList = () => {

//   // Iterate through the collection of fish objects
//   for (const currentFishObject of fishCollection) {
//     // Convert the current fish object to its HTML representation
//     const fishHTML = fishConverter(currentFishObject);

//     // Grab the article HTML element from the DOM
//     const fishArticleElement = document.querySelector(".fishList");

//     // Place the converted HTML into the article element
//     fishArticleElement.innerHTML += fishHTML;
//   }

// }

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