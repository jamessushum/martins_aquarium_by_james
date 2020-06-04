// Invoking getFishData then fishList to display fish list to the DOM
getFishData().then(
  () => {
    fishList();
  }
)

// Invoking getTipsData then tipsList to display tips list to the DOM
getTipsData().then(
  () => {
    tipList();
  }
)

// Invoking getLocationsData then locationList to display locations list to the DOM
getLocationsData().then(
  () => {
    locationList();
  }
)