// Invoking getFishData then fishList to display fish list to the DOM
getFishData().then(
  () => {
    fishList();
  }
)

// Invokes the function to insert tip html objects into the DOM
tipList();

// Invoking getLocationsData then locationList to display locations list to the DOM
getLocationsData().then(
  () => {
    locationList();
  }
)