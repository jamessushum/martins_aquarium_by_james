let locationCollection = []

// Function to grab JSON object
const getLocationsData = () => {
  // Fetch JSON object
  return fetch("http://localhost:8088/locations").then(
    // Parse JSON object into JS
    (httpResponse) => {
      return httpResponse.json()
    }
  )
    .then(
      // Place parsed array of locations to locationCollection
      (arrayOfLocations) => {
        locationCollection = arrayOfLocations
      }
    )
}