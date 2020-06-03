const fishCollection = [
  {
    name: "Dory",
    species: "Blue Tang",
    picture: "https://m.liveaquaria.com/images/categories/large/lg_39901_Yellow_Belly_Regal_Blue_Tang.jpg",
    location: "Pacific Ocean",
    food: "Baby Shrimp",
    length: 6,
  },
  {
    name: "Memo",
    species: "Clown Fish",
    picture: "https://cdn.powered-by-nitrosell.com/product_images/11/2575/large-common%20clown.jpg",
    location: "Indian Ocean",
    food: "Hot Dogs",
    length: 3,
  },
  {
    name: "George",
    species: "Guppy",
    picture: "https://aquariumtidings.com/wp-content/uploads/2014/06/Depositphotos_45215265_original.jpg",
    location: "Fish Bowl",
    food: "Rice",
    length: 2,
  },
  {
    name: "Jill",
    species: "Goldfish",
    picture: "https://img.freepik.com/free-photo/goldfish-isolated_37874-1649.jpg?size=626&ext=jpg",
    location: "Living Room Aquarium",
    food: "Pellets",
    length: 2,
  },
  {
    name: "Kai",
    species: "Koi",
    picture: "https://d19hpgg8wsy4c1.cloudfront.net/wp-content/uploads/2015/04/koi-fish-for-aquaponics.jpg",
    location: "A pond in Tokyo",
    food: "Nappa Cabbage",
    length: 10,
  },
  {
    name: "Solomon",
    species: "Salmon",
    picture: "https://ichef.bbci.co.uk/news/1024/cpsprodpb/8DDB/production/_97251363_155048410.jpg",
    location: "Fish Department",
    food: "Guppies",
    length: 15,
  },
  {
    name: "Chief",
    species: "Largemouth Bass",
    picture: "https://fishinpedia.com/wp-content/uploads/2017/06/largemouth-bass2.jpg",
    location: "Neighborhood Pond",
    food: "Baby Tilapia",
    length: 12,
  },
  {
    name: "Arthur",
    species: "Swordfish",
    picture: "https://ichef.bbci.co.uk/news/976/cpsprodpb/12D00/production/_110665077_swordfish.jpg",
    location: "Northern Sea",
    food: "Catfish",
    length: 30,
  },
  {
    name: "Tilly",
    species: "Tilapia",
    picture: "https://dc-cdn.s3-ap-southeast-1.amazonaws.com/dc-Cover-dadisc9a8aoop1ibohe7gr5uj6-20160627014934.Medi.jpeg",
    location: "Freezer Section",
    food: "Chocolate Ice Cream",
    length: 8,
  },
]

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
