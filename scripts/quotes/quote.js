const quoteConverter = (quoteObject) => {
  const quoteHTMLRepresentation = `<section class="quote">"${quoteObject.quote}"</section>`
  return quoteHTMLRepresentation
}