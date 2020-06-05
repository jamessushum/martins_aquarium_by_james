const quoteList = () => {
  for (const currentQuoteObject of quoteCollection) {
    const quoteHTML = quoteConverter(currentQuoteObject)
    const quoteArticleElement = document.querySelector('.quoteList')
    quoteArticleElement.innerHTML += quoteHTML
  }
}