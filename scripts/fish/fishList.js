// A function for generating a list of fish HTML and displaying it in the browser

const fishList = () => {

  // Iterate through the collection of fish objects
  for (const currentFishObject of fishCollection) {
    // Convert the current fish object to its HTML representation
    const fishHTML = fishConverter(currentFishObject);

    // Grab the article HTML element from the DOM
    const fishArticleElement = document.querySelector(".fishList");

    // Place the converted HTML into the article element
    fishArticleElement.innerHTML += fishHTML;
  }

}