const fetchBreedDescription = require("./breedFetcher");
const breedName = process.argv[2];

fetchBreedDescription(breedName, (error, desc) => {
  if (error) {
    console.log("Error fetch details:", error);
  } else if (desc < 1) {
    console.log(`${breedName} not found.`);
  } else {
    console.log(desc);
  }
});