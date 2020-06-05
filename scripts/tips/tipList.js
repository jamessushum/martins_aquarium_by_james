// Function that iterates through the tip collection array and passes through each individual object to the html converter and then displays each tip into the DOM

const tipList = () => {
  
  // Iterate through the tip collection array
  for (const currentTipObject of tipCollection) {

    // Pass each tip object to the html converter
    const tipHTML = tipConverter(currentTipObject);

    //Grab the article html element where the tips will be placed
    const tipArticleElement = document.querySelector(".tipList");

    // Insert each tip html into the article element
    tipArticleElement.innerHTML += tipHTML;
  }
}

// Toggle functionality
// Grab the HTML DOM tip toggle button 
const tipVisibilityButton = document.querySelector(".toggleTip");

// Add event listener when button is clicked hide the tips list
tipVisibilityButton.addEventListener('click', (clickEvent) => {
  document.querySelector(".tipList").classList.toggle("hidden");
})