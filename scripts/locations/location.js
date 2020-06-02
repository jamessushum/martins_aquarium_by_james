// Function to convert location objects to HTML

const locationConverter = (locationObject) => {
  const locationHTMLRepresentation = `<section class="location">
    <div class="">
        <img class="location__picture" src="${locationObject.picture}" alt="${locationObject.location}" />
    </div>
    <div class="location__details">
        <ul>
          <li>Location: ${locationObject.location}</li>
          <li>Temperature: ${locationObject.temperature}</li>
          <li>Fish Found: ${locationObject.fishType}</li>
        </ul>
    </div>
  </section>`

  return locationHTMLRepresentation;
}