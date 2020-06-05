// Function to input each converted HTML object to the DOM

const locationList = () => {
  // Iterate through the locationCollection array
  for (const currentLocationObject of locationCollection) {
    // Convert each object to html
    const locationHTML = locationConverter(currentLocationObject);

    // Grab the DOM html element where the location html will be placed
    const locationArticleElement = document.querySelector(".locationList");

    // Insert the converted html to the DOM html element
    locationArticleElement.innerHTML += locationHTML;
  }
}

// Toggle functionality
// Grab the HTML DOM toggle locations button
const locationVisibilityButton = document.querySelector(".toggleLocation");

// Add event listener when toggle locations button clicked, hide locations list
locationVisibilityButton.addEventListener('click', (clickEvent) => {
  document.querySelector(".locationList").classList.toggle("hidden");
})