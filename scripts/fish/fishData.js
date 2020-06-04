let fishCollection = []

// Function to grab the JSON data
const getFishData = () => {
  // Fetch the JSON object
  return fetch("http://localhost:8088/fish").then(
    // Parse JSON object to JS 
    (httpResponse) => {
      return httpResponse.json()
    }
  )
    .then(
      // Place the newly parsed fish array into fish collection
      (arrayOfFish) => {
        fishCollection = arrayOfFish
      }
    )
}

// Functions that filter fish data below this line 

// Multiples of 3 fish (3, 6, 9, 12 etc.)
const mostHolyFish = () => {
  const holyFish = [];

  for (const currentFishObject of fishCollection) {
    if (currentFishObject.length % 3 === 0) {
      holyFish.push(currentFishObject);
    }
  }

  return holyFish;
}

// Multiples of 5 fish (5, 10, 15, 20 etc.)
const soldierFish = () => {
  const soldierFish = [];

  for (const currentFishObject of fishCollection) {
    if (currentFishObject.length % 5 === 0 && currentFishObject.length % 3 !== 0) {
      soldierFish.push(currentFishObject);
    }
  }

  return soldierFish;
}

// Any fish not a multiple of 3 or 5 
const nonHolyFish = () => {
  const basicFish = [];

  for (const currentFishObject of fishCollection) {
    if (currentFishObject.length % 3 !== 0 && currentFishObject.length % 5 !== 0) {
      basicFish.push(currentFishObject);
    }
  }

  return basicFish;
}