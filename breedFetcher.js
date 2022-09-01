const request = require("request");

const fetchBreedDescription = (breedName, callback) => {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
    const data = JSON.parse(body);
    if (data.length > 0) {
      callback(null, data[0].description);
    } else {
      callback(error, null);
      return;
    }
  });
};

module.exports = fetchBreedDescription;