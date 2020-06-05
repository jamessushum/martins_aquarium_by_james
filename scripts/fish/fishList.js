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

// User customization functions
// Grab the HTML DOM element housing the dropdown feature
const fishTypeDropdown = document.querySelector(".typeChoice");

// Function to clear the fish list HTML 
const contentTarget = document.querySelector(".fishList");
const clearFishList = () => contentTarget.innerHTML = "";

// Function that clears the fish list and shows option selected on user input
fishTypeDropdown.addEventListener('change', (changeEvent) => {
  // Get the value option chosen by the user
  const userChoice = changeEvent.target.value;

  // Conditions depending on chosen option
  if (userChoice === "holy") {
    clearFishList();
    showHolyFish();
  } else if (userChoice === "soldier") {
    clearFishList();
    showSoldierFish();
  } else if (userChoice === "basic") {
    clearFishList();
    showBasicFish();
  } else {
    clearFishList();
    fishList();
  }
})

// Toggle functionality
// Grab the HTML DOM fish toggle button
const fishVisibilityButton = document.querySelector(".toggleFish");

// Add event listener when button is clicked hide fish list
fishVisibilityButton.addEventListener('click', (clickEvent) => {
  document.querySelector(".fishList").classList.toggle("hidden");
})