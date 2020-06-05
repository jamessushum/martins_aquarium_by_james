const quoteList = () => {
  for (const currentQuoteObject of quoteCollection) {
    const quoteHTML = quoteConverter(currentQuoteObject)
    const quoteArticleElement = document.querySelector('.quoteList')
    quoteArticleElement.innerHTML += quoteHTML
  }
}

// Toggle functionality
// Grab the HTML DOM quote toggle button
const quoteVisibilityButton = document.querySelector(".toggleQuote");

// Add event listener when toggle quote button is clicked, hide quote list
quoteVisibilityButton.addEventListener('click', (clickEvent) => {
  document.querySelector(".quoteList").classList.toggle("hidden");
})