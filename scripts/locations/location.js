// Function to convert location objects to HTML

const locationConverter = (locationObject) => {
  const locationHTMLRepresentation = `<section class="location">
    <div class="location__inner">
      <div class="location__front">
          <img class="location__picture" src="${locationObject.picture}" alt="${locationObject.location}" />
      </div>
      <div class="location__details">
          <ul>
            <li>Location: ${locationObject.location}</li>
            <li>Temperature: ${locationObject.temperature}</li>
            <li>Fish: ${locationObject.fishType}</li>
          </ul>
      </div>
    </div>
  </section>`

  return locationHTMLRepresentation;
}