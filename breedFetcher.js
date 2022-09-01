const request = require("request");
const breed = process.argv[2];

request(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`, (error, response, body) => {
  console.log(error);
  const data = JSON.parse(body);
  displayDetail(breed, data);
});

const displayDetail = (breed, data) => {
  if (data.length < 1) {
    console.log(`${breed} is not found.`);
  } else {
    console.log(data[0].description);
  }
};