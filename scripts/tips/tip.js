// A function to convert each tip object into HTML

const tipConverter = (tipObject) => {
  const tipHTMLRepresentation = `<section class="tip">${tipObject.tip}</section>`;
  return tipHTMLRepresentation;
}