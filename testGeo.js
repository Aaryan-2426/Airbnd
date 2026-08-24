require("dotenv").config();

const mbxGeocoding = require("@mapbox/mapbox-sdk/services/geocoding");

const geocodingClient = mbxGeocoding({
  accessToken: process.env.MAP_TOKEN,
});

(async () => {
  try {
    const response = await geocodingClient
      .forwardGeocode({
        query: "Malibu, United States",
        limit: 1,
      })
      .send();

    console.log(JSON.stringify(response.body.features, null, 2));
  } catch (err) {
    console.log(err.response?.body || err.message);
  }
})();