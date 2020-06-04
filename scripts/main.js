// Invoking get JSON function first then calling fishList to display fish objects in the DOM
getFishData().then(
  () => {
    fishList();
  }
)

// Invokes the function to insert tip html objects into the DOM
tipList();

// Invokes the function to insert location html objects into the DOM
locationList();